import ContactHero from "../contact/ContactHero";
import ContactMap from "../contact/ContactMap";
import ContactForm from "../contact/ContactForm";
import WhyChooseUs from "../contact/WhyChooseUs";
import SEO from "../components/SEO";


const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us & Visit Store | Deepak Repairing Center Delhi"
                description="Visit Deepak Repairing Center near Sunhery Chowk, Sahibabad Dairy, Rohini, Delhi. Call +91 98712 38460 or message us on WhatsApp for tool repairs."
                path="/contact"
            />
            <ContactHero />
            <ContactMap />
            <ContactForm />
            <WhyChooseUs />

        </>
    );
};

export default Contact;