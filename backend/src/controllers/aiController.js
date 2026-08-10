const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatWithAI = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                message: "Message is required",
            });
        }

        const response = await client.responses.create({
            model: "gpt-5-mini",
            instructions: `
You are the AI Repair Assistant for Deepak Repairing Center.

Your job is to help customers with power tools and machine repair queries.

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
"Samajh gaya 👍 Agar drill start nahi ho rahi hai, to motor ya electrical issue ho sakta hai. Machine ko abhi use na karein. Professional inspection recommended."

You are a customer-support assistant, not a replacement for a technician.
            `,
            input: message.trim(),
        });

        const reply = response.output_text;

        res.status(200).json({
            success: true,
            message: reply,
        });
    } catch (error) {
        console.error("AI Error:", error);

        res.status(500).json({
            success: false,
            message: "AI assistant is temporarily unavailable",
        });
    }
};

module.exports = {
    chatWithAI,
};