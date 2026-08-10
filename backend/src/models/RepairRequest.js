const mongoose = require("mongoose");

// =====================================================
// AI ANALYSIS SCHEMA
// =====================================================

const aiAnalysisSchema = new mongoose.Schema(
    {
        possibleIssue: {
            type: String,
            trim: true,
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
        },

        suggestedService: {
            type: String,
            enum: [
                "Machine Repair",
                "Spare Parts",
                "Maintenance",
                "Inspection",
            ],
        },

        recommendedAction: {
            type: String,
            trim: true,
        },

        safetyNote: {
            type: String,
            trim: true,
        },

        analyzedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        _id: false,
    }
);

// =====================================================
// REPAIR REQUEST SCHEMA
// =====================================================

const repairRequestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
        },

        // =================================================
        // MACHINE DETAILS
        // =================================================

        machine: {
            type: String,
            trim: true,
        },

        brand: {
            type: String,
            trim: true,
        },

        product: {
            type: String,
            trim: true,
        },

        service: {
            type: String,
            required: true,
            trim: true,
        },

        message: {
            type: String,
            trim: true,
        },

        // =================================================
        // REQUEST STATUS
        // =================================================

        status: {
            type: String,
            enum: [
                "pending",
                "contacted",
                "in-progress",
                "completed",
                "cancelled",
            ],
            default: "pending",
        },

        // =================================================
        // AI REPAIR ANALYSIS
        // =================================================

        aiAnalysis: {
            type: aiAnalysisSchema,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// =====================================================
// MODEL
// =====================================================

const RepairRequest = mongoose.model(
    "RepairRequest",
    repairRequestSchema
);

module.exports = RepairRequest;