const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const repairRequestRoutes = require("./routes/repairRequestRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// ================= DATABASE =================

connectDB();

// ================= MIDDLEWARE =================

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());

// ================= BASIC ROUTES =================

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

// ================= API ROUTES =================

app.use("/api/products", productRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/repair-requests", repairRequestRoutes);

// ================= SERVER =================

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});