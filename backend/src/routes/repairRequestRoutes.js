const express = require("express");

const {
    getRepairRequests,
    getRepairRequestById,
    createRepairRequest,
    updateRepairRequest,
    deleteRepairRequest,
} = require("../controllers/repairRequestController");

const router = express.Router();

router.get("/", getRepairRequests);

router.get("/:id", getRepairRequestById);

router.post("/", createRepairRequest);

router.put("/:id", updateRepairRequest);

router.delete("/:id", deleteRepairRequest);

module.exports = router;