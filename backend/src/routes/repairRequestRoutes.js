const express = require("express");

const {
    getRepairRequests,
    getRepairRequestById,
    createRepairRequest,
    updateRepairRequest,
    deleteRepairRequest,
} = require("../controllers/repairRequestController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Customer can submit a repair request
router.post("/", createRepairRequest);

// Admin-only routes
router.get("/", authMiddleware, getRepairRequests);

router.get("/:id", authMiddleware, getRepairRequestById);

router.put("/:id", authMiddleware, updateRepairRequest);

router.delete("/:id", authMiddleware, deleteRepairRequest);

module.exports = router;