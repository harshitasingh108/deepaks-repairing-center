const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        brand: {
            type: String,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        image: {
            type: String,
        },

        images: [
            {
                type: String,
            },
        ],

        video: {
            type: String,
        },

        price: {
            type: Number,
            default: null,
        },

        available: {
            type: Boolean,
            default: true,
        },

        featured: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;