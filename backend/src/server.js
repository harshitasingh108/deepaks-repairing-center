const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const repairRequestRoutes = require("./routes/repairRequestRoutes");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// =====================================================
// DATABASE
// =====================================================
connectDB();

// =====================================================
// MIDDLEWARE
// =====================================================
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://deepaks-repairing-center.vercel.app",
            "https://deepaks-repairing-center1.harshi786108.workers.dev",
            "https://deepaksrepairingcenter.com",
            "https://www.deepaksrepairingcenter.com",
        ],
        credentials: true,
    })
);

app.use(express.json());

// =====================================================
// BASIC ROUTES
// =====================================================
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Deepak Repairing Center API is running 🚀",
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend is healthy",
    });
});

// =====================================================
// API ROUTES
// =====================================================
app.use("/api/products", productRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/repair-requests", repairRequestRoutes);
app.use("/api/auth", authRoutes);

// =====================================================
// AI ROUTES
// =====================================================
app.use("/api/ai", aiRoutes);

// =====================================================
// SERVER
// =====================================================
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});