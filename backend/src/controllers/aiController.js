const { GoogleGenAI } = require("@google/genai");
const RepairRequest = require("../models/RepairRequest");

// =====================================================
// GEMINI CLIENT
// =====================================================

const getGeminiClient = () => {
    if (!process.env.GEMINI_API_KEY) {
        return null;
    }

    return new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });
};

// =====================================================
// COMMON AI INSTRUCTIONS
// =====================================================

const SYSTEM_INSTRUCTIONS = `
You are the AI Repair Assistant for Deepak Repairing Center.

Your job is to help customers with power tools,
machines, spare parts and repair services.

IMPORTANT RULES:

- Reply in the SAME language/style the customer uses.
- Understand Hindi, Hinglish, WhatsApp-style language and English.
- Keep replies friendly, natural, simple and concise.
- Use emojis naturally when appropriate.
- Never claim a final technical diagnosis.
- Do not provide dangerous electrical or mechanical repair instructions.
- Do not tell customers to open dangerous electrical equipment.
- If a machine may be unsafe to operate, tell the customer to stop using it and get professional inspection.
- When useful, suggest:
  Machine Repair
  Spare Parts
  Maintenance
  Inspection

You are a customer-support assistant,
not a replacement for a qualified technician.
`;

// =====================================================
// CUSTOMER AI CHAT
// =====================================================

const chatWithAI = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                message: "Message is required",
            });
        }

        const ai = getGeminiClient();

        if (!ai) {
            return res.status(503).json({
                success: false,
                message:
                    "AI assistant is temporarily unavailable",
            });
        }

        const response =
            await ai.models.generateContent({
                model: "gemini-3.5-flash",

                contents: `
${SYSTEM_INSTRUCTIONS}

Customer message:

${message.trim()}
`,
            });

        const reply =
            response.text?.trim();

        if (!reply) {
            return res.status(500).json({
                success: false,
                message:
                    "AI could not generate a response",
            });
        }

        return res.status(200).json({
            success: true,
            message: reply,
        });
    } catch (error) {
        console.error(
            "Gemini Chat Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "AI assistant is temporarily unavailable",
        });
    }
};

// =====================================================
// ADMIN AI REPAIR ANALYSIS
// =====================================================

const analyzeRepairRequest = async (
    req,
    res
) => {
    try {
        const {
            requestId,
            name,
            machine,
            brand,
            service,
            message,
        } = req.body;

        // =================================================
        // VALIDATE REQUEST ID
        // =================================================

        if (!requestId) {
            return res.status(400).json({
                success: false,
                message:
                    "Repair request ID is required",
            });
        }

        // =================================================
        // FIND REQUEST IN MONGODB
        // =================================================

        const repairRequest =
            await RepairRequest.findById(
                requestId
            );

        if (!repairRequest) {
            return res.status(404).json({
                success: false,
                message:
                    "Repair request not found",
            });
        }

        // =================================================
        // VALIDATE DETAILS
        // =================================================

        if (!machine && !message) {
            return res.status(400).json({
                success: false,
                message:
                    "Repair request details are required",
            });
        }

        const ai = getGeminiClient();

        if (!ai) {
            return res.status(503).json({
                success: false,
                message:
                    "AI analysis is temporarily unavailable",
            });
        }

        // =================================================
        // REPAIR DETAILS
        // =================================================

        const repairDetails = `
Customer Name:
${name || repairRequest.name || "Not provided"}

Machine:
${machine || repairRequest.machine || "Not provided"}

Brand:
${brand || repairRequest.brand || "Not provided"}

Requested Service:
${service || repairRequest.service || "Not provided"}

Customer Problem:
${message || repairRequest.message || "Not provided"}
`;

        // =================================================
        // AI PROMPT
        // =================================================

        const prompt = `
You are an AI repair-support assistant
for Deepak Repairing Center.

Analyze this customer repair request:

${repairDetails}

Return ONLY valid JSON in exactly this structure:

{
  "possibleIssue": "string",
  "priority": "Low | Medium | High",
  "suggestedService": "Machine Repair | Spare Parts | Maintenance | Inspection",
  "recommendedAction": "string",
  "safetyNote": "string"
}

IMPORTANT:

- This is ONLY an AI-assisted assessment.
- Never claim a final technical diagnosis.
- Do not provide dangerous repair instructions.
- If the machine may be unsafe, clearly recommend stopping use.
- Keep the assessment practical and concise.
- Base the analysis only on the information provided.
- Do not invent machine details.
`;

        // =================================================
        // GEMINI REQUEST
        // =================================================

        const response =
            await ai.models.generateContent({
                model: "gemini-3.5-flash",

                contents: prompt,

                config: {
                    responseMimeType:
                        "application/json",
                },
            });

        const rawOutput =
            response.text?.trim();

        if (!rawOutput) {
            return res.status(500).json({
                success: false,
                message:
                    "AI returned an empty analysis",
            });
        }

        // =================================================
        // PARSE AI RESPONSE
        // =================================================

        let analysis;

        try {
            analysis = JSON.parse(
                rawOutput
            );
        } catch (parseError) {
            console.error(
                "Gemini JSON Parse Error:",
                parseError
            );

            console.error(
                "Raw AI Output:",
                rawOutput
            );

            return res.status(500).json({
                success: false,
                message:
                    "AI returned an invalid analysis",
            });
        }

        // =================================================
        // VALIDATE AI RESPONSE
        // =================================================

        const allowedPriorities = [
            "Low",
            "Medium",
            "High",
        ];

        const allowedServices = [
            "Machine Repair",
            "Spare Parts",
            "Maintenance",
            "Inspection",
        ];

        if (!analysis.possibleIssue) {
            analysis.possibleIssue =
                "Professional inspection recommended";
        }

        if (
            !allowedPriorities.includes(
                analysis.priority
            )
        ) {
            analysis.priority = "Medium";
        }

        if (
            !allowedServices.includes(
                analysis.suggestedService
            )
        ) {
            analysis.suggestedService =
                "Inspection";
        }

        if (!analysis.recommendedAction) {
            analysis.recommendedAction =
                "Professional technician inspection recommended.";
        }

        if (!analysis.safetyNote) {
            analysis.safetyNote =
                "Do not operate the machine if it appears unsafe.";
        }

        // =================================================
        // SAVE AI ANALYSIS TO MONGODB
        // =================================================

        repairRequest.aiAnalysis = {
            possibleIssue:
                analysis.possibleIssue,

            priority:
                analysis.priority,

            suggestedService:
                analysis.suggestedService,

            recommendedAction:
                analysis.recommendedAction,

            safetyNote:
                analysis.safetyNote,

            analyzedAt: new Date(),
        };

        await repairRequest.save();

        console.log(
            `🤖 AI analysis saved for request ${requestId}`
        );

        // =================================================
        // SEND RESPONSE
        // =================================================

        return res.status(200).json({
            success: true,
            message:
                "AI repair analysis completed and saved",
            data: repairRequest.aiAnalysis,
        });
    } catch (error) {
        console.error(
            "Gemini Repair Analysis Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "AI analysis is temporarily unavailable",
        });
    }
};

// =====================================================
// EXPORT
// =====================================================

module.exports = {
    chatWithAI,
    analyzeRepairRequest,
};