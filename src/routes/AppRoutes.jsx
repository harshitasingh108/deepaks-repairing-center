import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";
import Gallery from "../gallery/Gallery";
import Contact from "../contact/Contact";

import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../admin/AdminDashboard";

const AppRoutes = () => {
    return (
        <Routes>

            {/* ================= PUBLIC ROUTES ================= */}

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/services"
                element={<Services />}
            />

            <Route
                path="/gallery"
                element={<Gallery />}
            />

            <Route
                path="/contact"
                element={<Contact />}
            />

            {/* ================= ADMIN ROUTES ================= */}

            <Route
                path="/admin/login"
                element={<AdminLogin />}
            />

            <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
            />

        </Routes>
    );
};

export default AppRoutes;