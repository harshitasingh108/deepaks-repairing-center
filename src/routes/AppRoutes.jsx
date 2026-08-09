import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Services from "../services/Services";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
};

export default AppRoutes;