import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
// import About from "../About/About";
// import ServicesPage from "../Services/ServicesPage";
// import Contact from "../Contact/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    );
};

export default AppRoutes;