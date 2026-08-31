import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import CTASection from "./CTASection";
import SEO from "../components/SEO";

const Home = () => {
    return (
        <>
            <SEO
                title="Deepak Repairing Center | Power Tools Repair & Spare Parts in Delhi"
                description="Deepak Repairing Center in Rohini, Delhi provides professional power tool repair, genuine spare parts, and power tool sales. 45+ years of trusted service since 1980."
                path="/"
            />

            <Hero />

            <FeaturedProducts />

            <CTASection />
        </>
    );
};

export default Home;