const express = require("express");

const router = express.Router();

// =====================================================
// SERVICES DATA
// =====================================================

const services = [
    {
        id: 1,
        name: "Machine Repair",
        description:
            "Professional repair service for power tools and machines.",
    },
    {
        id: 2,
        name: "Spare Parts",
        description:
            "Genuine spare parts for power tools and machines.",
    },
    {
        id: 3,
        name: "Maintenance",
        description:
            "Regular maintenance to keep your machines working properly.",
    },
    {
        id: 4,
        name: "Inspection",
        description:
            "Professional inspection and diagnosis of machine problems.",
    },
];

// =====================================================
// GET ALL SERVICES
// GET /api/services
// =====================================================

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: services,
    });
});

// =====================================================
// GET SINGLE SERVICE
// GET /api/services/:id
// =====================================================

router.get("/:id", (req, res) => {
    const service = services.find(
        (item) =>
            item.id === Number(req.params.id)
    );

    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service not found",
        });
    }

    return res.status(200).json({
        success: true,
        data: service,
    });
});

// =====================================================
// CREATE SERVICE
// POST /api/services
// =====================================================

router.post("/", (req, res) => {
    const {
        name,
        description,
    } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Service name is required",
        });
    }

    const newService = {
        id:
            services.length > 0
                ? services[services.length - 1]
                    .id + 1
                : 1,
        name,
        description:
            description || "",
    };

    services.push(newService);

    return res.status(201).json({
        success: true,
        message:
            "Service created successfully",
        data: newService,
    });
});

// =====================================================
// UPDATE SERVICE
// PUT /api/services/:id
// =====================================================

router.put("/:id", (req, res) => {
    const serviceIndex =
        services.findIndex(
            (item) =>
                item.id ===
                Number(req.params.id)
        );

    if (serviceIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Service not found",
        });
    }

    const {
        name,
        description,
    } = req.body;

    services[serviceIndex] = {
        ...services[serviceIndex],
        ...(name !== undefined && {
            name,
        }),
        ...(description !== undefined && {
            description,
        }),
    };

    return res.status(200).json({
        success: true,
        message:
            "Service updated successfully",
        data: services[serviceIndex],
    });
});

// =====================================================
// DELETE SERVICE
// DELETE /api/services/:id
// =====================================================

router.delete("/:id", (req, res) => {
    const serviceIndex =
        services.findIndex(
            (item) =>
                item.id ===
                Number(req.params.id)
        );

    if (serviceIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Service not found",
        });
    }

    const deletedService =
        services.splice(
            serviceIndex,
            1
        )[0];

    return res.status(200).json({
        success: true,
        message:
            "Service deleted successfully",
        data: deletedService,
    });
});

module.exports = router;