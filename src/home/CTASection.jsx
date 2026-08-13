import { Phone, MessageCircle, MapPin } from "lucide-react";
import { MAP_URL, openGoogleMaps } from "../constants/map";

const CTASection = () => {
    return (
        <section className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
            <div
                className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[28px] sm:rounded-[40px]
          bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500
          px-5 py-10
          sm:px-8 sm:py-14
          lg:px-12 lg:py-16
          shadow-[0_25px_70px_rgba(249,115,22,0.30)]
        "
            >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />

                <div
                    className="
            relative flex flex-col
            items-start justify-between
            gap-8
            lg:flex-row lg:items-center
          "
                >
                    {/* ================= CONTENT ================= */}

                    <div className="max-w-3xl">

                        <span
                            className="
                inline-flex
                rounded-full
                bg-white/20
                px-4 py-2
                text-xs font-bold
                text-white
                backdrop-blur-sm
                sm:px-5 sm:text-sm
              "
                        >
                            Available 24×7
                        </span>

                        <h2
                            className="
                mt-5
                text-3xl
                font-black
                leading-tight
                text-white
                sm:mt-6 sm:text-4xl
                lg:text-5xl
              "
                        >
                            Need Expert Power Tool
                            <br className="hidden sm:block" />
                            {" "}Repair or New Machine?
                        </h2>

                        <p
                            className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-orange-100
                sm:mt-5
                sm:text-base
                sm:leading-7
                lg:text-lg
                lg:leading-8
              "
                        >
                            We provide Power Tool Sales, Genuine Spare Parts
                            and Professional Repair Services with more than
                            45 years of trusted experience.
                        </p>
                    </div>

                    {/* ================= ACTION BUTTONS ================= */}

                    <div
                        className="
              grid
              w-full
              gap-3
              sm:flex
              sm:w-auto
              sm:flex-wrap
              sm:gap-4
            "
                    >

                        {/* CALL */}

                        <a
                            href="tel:+919871238460"
                            aria-label="Call Deepak Repairing Center"
                            className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-white
                px-6
                py-4
                text-sm
                font-bold
                text-orange-600
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-50
                active:scale-[0.98]
                sm:w-auto
                sm:px-7
              "
                        >
                            <Phone size={19} />
                            Call Now
                        </a>

                        {/* WHATSAPP */}

                        <a
                            href="https://wa.me/919871238460"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Deepak Repairing Center on WhatsApp"
                            className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/30
                bg-white/10
                px-6
                py-4
                text-sm
                font-bold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/20
                active:scale-[0.98]
                sm:w-auto
                sm:px-7
              "
                        >
                            <MessageCircle size={19} />
                            WhatsApp
                        </a>

                        {/* LOCATION */}

                        <a
                            href={MAP_URL}
                            onClick={openGoogleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Deepak Repairing Center in Google Maps"
                            className="
                home-location-hide-mobile
                hidden
                md:flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/30
                bg-black/10
                px-6
                py-4
                text-sm
                font-bold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-black/20
                active:scale-[0.98]
                sm:w-auto
                sm:px-7
              "
                        >
                            <MapPin size={19} />
                            Get Directions
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;