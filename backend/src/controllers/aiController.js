const OpenAI = require("openai");

// =====================================================
// OPENAI CLIENT
// =====================================================

const getOpenAIClient = () => {
    if (!process.env.OPENAI_API_KEY) {
        return null;
    }

    return new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
};

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

        const client = getOpenAIClient();

        if (!client) {
            return res.status(503).json({
                success: false,
                message:
                    "AI assistant is temporarily unavailable",
            });
        }

        const response =
            await client.responses.create({
                model: "gpt-5-mini",

                instructions: `
You are the AI Repair Assistant for Deepak Repairing Center.

Your job is to help customers with power tools
and machine repair queries.

IMPORTANT:

- Reply in the same language/style the customer uses.
- Understand Hindi, Hinglish, WhatsApp-style language and English.
- Keep replies friendly, simple and concise.
- Do not give dangerous repair instructions.
- Do not claim to give a final technical diagnosis.
- If a machine could be unsafe to operate, advise the customer to stop using it and get professional inspection.
- When useful, suggest one of these services:
  Machine Repair
  Spare Parts
  Maintenance
  Inspection

Example Hinglish style:

"Samajh gaya 👍 Agar drill start nahi ho rahi hai,
to motor ya electrical issue ho sakta hai.
Machine ko abhi use na karein.
Professional inspection recommended."

You are a customer-support assistant,
not a replacement for a technician.
`,

                input: message.trim(),
            });

        const reply = response.output_text;

        return res.status(200).json({
            success: true,
            message: reply,
        });
    } catch (error) {
        console.error("AI Chat Error:", error);

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

const analyzeRepairRequest = async (req, res) => {
    try {
        const {
            name,
            machine,
            brand,
            service,
            message,
        } = req.body;

        if (!machine && !message) {
            return res.status(400).json({
                success: false,
                message:
                    "Repair request details are required",
            });
        }

        const client = getOpenAIClient();

        if (!client) {
            return res.status(503).json({
                success: false,
                message:
                    "AI analysis is temporarily unavailable",
            });
        }

        const repairDetails = `
Customer Name: ${name || "Not provided"}
Machine: ${machine || "Not provided"}
Brand: ${brand || "Not provided"}
Requested Service: ${service || "Not provided"}
Customer Problem: ${message || "Not provided"}
`;

        const response =
            await client.responses.create({
                model: "gpt-5-mini",

                instructions: `
You are an AI repair-support assistant
for Deepak Repairing Center.

Analyze the customer's repair request
and provide useful information to the admin.

Return ONLY valid JSON in this exact structure:

{
  "possibleIssue": "string",
  "priority": "Low | Medium | High",
  "suggestedService": "Machine Repair | Spare Parts | Maintenance | Inspection",
  "recommendedAction": "string",
  "safetyNote": "string"
}

IMPORTANT:

- This is only an AI-assisted assessment.
- Never claim a final technical diagnosis.
- Do not provide dangerous repair instructions.
- If the machine may be unsafe, clearly recommend stopping use.
- Keep the assessment practical and concise.
- Base the analysis only on the information provided.
`,

                input: repairDetails,
            });

        const rawOutput =
            response.output_text.trim();

        let analysis;

        try {
            analysis = JSON.parse(rawOutput);
        } catch (parseError) {
            console.error(
                "AI JSON Parse Error:",
                parseError
            );

            return res.status(500).json({
                success: false,
                message:
                    "AI returned an invalid analysis",
            });
        }

        return res.status(200).json({
            success: true,
            data: analysis,
        });
    } catch (error) {
        console.error(
            "AI Repair Analysis Error:",
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