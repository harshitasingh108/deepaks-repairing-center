const RepairRequest = require("../models/RepairRequest");

// ================= CREATE REPAIR REQUEST =================

const createRepairRequest = async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            machine,
            brand,
            service,
            message,
        } = req.body;

        if (!name || !phone || !machine || !service) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, phone, machine and service are required",
            });
        }

        const repairRequest = await RepairRequest.create({
            name,
            phone,
            email,
            machine,
            brand,
            service,
            message,
            status: "pending",
        });

        res.status(201).json({
            success: true,
            message: "Repair request submitted successfully",
            data: repairRequest,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create repair request",
            error: error.message,
        });
    }
};

// ================= GET ALL REPAIR REQUESTS =================

const getRepairRequests = async (req, res) => {
    try {
        const requests = await RepairRequest.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
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

// ================= GET SINGLE REQUEST =================

const getRepairRequestById = async (req, res) => {
    try {
        const request = await RepairRequest.findById(
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

// ================= TRACK REPAIR =================

const trackRepairRequest = async (req, res) => {
    try {
        const { phone } = req.query;

        if (!phone) {
            return res.status(400).json({
                success: false,
                message: "Phone number is required",
            });
        }

        const request = await RepairRequest.findOne({
            phone: phone.trim(),
        }).sort({
            createdAt: -1,
        });

        if (!request) {
            return res.status(404).json({
                success: false,
                message:
                    "No repair request found with this phone number",
            });
        }

        res.status(200).json({
            success: true,
            data: request,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to track repair request",
            error: error.message,
        });
    }
};

// ================= UPDATE REQUEST =================

const updateRepairRequest = async (req, res) => {
    try {
        const allowedStatuses = [
            "pending",
            "contacted",
            "in-progress",
            "completed",
            "cancelled",
        ];

        const { status } = req.body;

        if (
            status &&
            !allowedStatuses.includes(status)
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid repair request status",
            });
        }

        const updatedRequest =
            await RepairRequest.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );

        if (!updatedRequest) {
            return res.status(404).json({
                success: false,
                message: "Repair request not found",
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Repair request updated successfully",
            data: updatedRequest,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                "Failed to update repair request",
            error: error.message,
        });
    }
};

// ================= DELETE REQUEST =================

const deleteRepairRequest = async (req, res) => {
    try {
        const deletedRequest =
            await RepairRequest.findByIdAndDelete(
                req.params.id
            );

        if (!deletedRequest) {
            return res.status(404).json({
                success: false,
                message: "Repair request not found",
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Repair request deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                "Failed to delete repair request",
            error: error.message,
        });
    }
};

module.exports = {
    createRepairRequest,
    getRepairRequests,
    getRepairRequestById,
    trackRepairRequest,
    updateRepairRequest,
    deleteRepairRequest,
};