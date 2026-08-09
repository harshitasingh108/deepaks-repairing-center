const Service = require("../models/Service");

// ================= GET ALL SERVICES =================

const getServices = async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: services.length,
            data: services,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch services",
            error: error.message,
        });
    }
};

// ================= GET SINGLE SERVICE =================

const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found",
            });
        }

        res.status(200).json({
            success: true,
            data: service,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch service",
            error: error.message,
        });
    }
};

// ================= CREATE SERVICE =================

const createService = async (req, res) => {
    try {
        const service = await Service.create(req.body);

        res.status(201).json({
            success: true,
            message: "Service created successfully",
            data: service,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create service",
            error: error.message,
        });
    }
};

// ================= UPDATE SERVICE =================

const updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Service updated successfully",
            data: service,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update service",
            error: error.message,
        });
    }
};

// ================= DELETE SERVICE =================

const deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Service deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete service",
            error: error.message,
        });
    }
};

module.exports = {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
};