const express = require("express");

const {
    chatWithAI,
    analyzeRepairRequest,
} = require("../controllers/aiController");

const router = express.Router();

// =====================================================
// CUSTOMER AI CHAT
// POST /api/ai/chat
// =====================================================

router.post("/chat", chatWithAI);

// =====================================================
// ADMIN AI REPAIR ANALYSIS
// POST /api/ai/analyze
// =====================================================

router.post(
    "/analyze",
    analyzeRepairRequest
);

module.exports = router;