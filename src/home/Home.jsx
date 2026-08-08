import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import CTASection from "./CTASection";
import LocationSection from "./LocationSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Hero />

            <FeaturedProducts />

            <CTASection />

            <LocationSection />

            <Footer />
        </>
    );
};

export default Home;