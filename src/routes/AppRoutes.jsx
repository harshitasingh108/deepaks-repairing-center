import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";
import Gallery from "../gallery/Gallery";
import Contact from "../contact/Contact";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/contact" element={<Contact />} />

        </Routes>
    );
};

export default AppRoutes;