const RepairRequest = require("../models/RepairRequest");

// ================= GET ALL REPAIR REQUESTS =================

const getRepairRequests = async (req, res) => {
    try {
        const requests = await RepairRequest.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: requests.length,
            data: requests,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch repair requests",
            error: error.message,
        });
    }
};

// ================= GET SINGLE REPAIR REQUEST =================

const getRepairRequestById = async (req, res) => {
    try {
        const request = await RepairRequest.findById(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Repair request not found",
            });
        }

        res.status(200).json({
            success: true,
            data: request,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch repair request",
            error: error.message,
        });
    }
};

// ================= CREATE REPAIR REQUEST =================

const createRepairRequest = async (req, res) => {
    try {
        const request = await RepairRequest.create(req.body);

        res.status(201).json({
            success: true,
            message: "Repair request submitted successfully",
            data: request,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to submit repair request",
            error: error.message,
        });
    }
};

// ================= UPDATE REPAIR REQUEST =================

const updateRepairRequest = async (req, res) => {
    try {
        const request = await RepairRequest.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Repair request not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Repair request updated successfully",
            data: request,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update repair request",
            error: error.message,
        });
    }
};

// ================= DELETE REPAIR REQUEST =================

const deleteRepairRequest = async (req, res) => {
    try {
        const request = await RepairRequest.findByIdAndDelete(
            req.params.id
        );

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Repair request not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Repair request deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete repair request",
            error: error.message,
        });
    }
};

module.exports = {
    getRepairRequests,
    getRepairRequestById,
    createRepairRequest,
    updateRepairRequest,
    deleteRepairRequest,
};