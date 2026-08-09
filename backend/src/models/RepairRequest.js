const mongoose = require("mongoose");

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

        service: {
            type: String,
            required: true,
            trim: true,
        },

        product: {
            type: String,
            trim: true,
        },

        message: {
            type: String,
            trim: true,
        },

        status: {
            type: String,
            enum: ["pending", "contacted", "in-progress", "completed", "cancelled"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

const RepairRequest = mongoose.model(
    "RepairRequest",
    repairRequestSchema
);

module.exports = RepairRequest;