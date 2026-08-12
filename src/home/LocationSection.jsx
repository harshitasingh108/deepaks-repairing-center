import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Star,
    Navigation,
    MessageCircle,
    ExternalLink,
} from "lucide-react";

// =====================================================
// DEEPAK REPAIRING CENTER - EXACT GOOGLE MAPS LISTING
// =====================================================

const MAP_URL =
    "https://google.com/maps/place/Deepak+repairing+center/@28.7443679,77.0979262,17z/data=!3m1!4b1!4m6!3m5!1s0x390d07a55c7aae69:0x31688d2d0cdef9c9!8m2!3d28.7443679!4d77.0979262!16s%2Fg%2F11qb3j13dv?entry=ttu";

// =====================================================
// GOOGLE MAPS EMBED
// =====================================================

const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1690958223558!2d77.0979262!3d28.744367900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07a55c7aae69%3A0x31688d2d0cdef9c9!2sDeepak%20repairing%20center!5e0!3m2!1sen!2sin!4v1786227219812!5m2!1sen!2sin";

const LocationSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-14 sm:py-20 lg:py-24">

            {/* ================= BACKGROUND GLOW ================= */}

            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px] sm:h-96 sm:w-96" />

            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/40 blur-[120px] sm:h-96 sm:w-96" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

                {/* ================= HEADING ================= */}

                <div className="mb-10 text-center sm:mb-14 lg:mb-16">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-orange-100
                            px-4
                            py-2
                            text-xs
                            font-bold
                            text-orange-600
                            sm:px-5
                            sm:text-sm
                        "
                    >
                        Visit Our Store
                    </span>

                    <h2
                        className="
                            mt-5
                            text-3xl
                            font-black
                            tracking-tight
                            text-slate-900
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Find Us Easily
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-sm
                            leading-7
                            text-slate-600
                            sm:text-base
                            lg:text-lg
                            lg:leading-8
                        "
                    >
                        Visit Deepak Repairing Center for genuine power tools,
                        machine repair services and professional support.
                    </p>

                </div>

                {/* ================= MAIN GRID ================= */}

                <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">

                    {/* ================= GOOGLE MAP ================= */}

                    <div
                        className="
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-slate-100
                            bg-white
                            shadow-[0_20px_55px_rgba(15,23,42,0.10)]
                            sm:rounded-[35px]
                        "
                    >

                        <div className="relative">

                            <iframe
                                title="Deepak Repairing Center Location"
                                src={MAP_EMBED_URL}
                                className="
                                    h-[300px]
                                    w-full
                                    sm:h-[420px]
                                    lg:h-[600px]
                                "
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />

                            {/* ================= OPEN EXACT GOOGLE LISTING ================= */}

                            <a
                                href={MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Deepak Repairing Center on Google Maps"
                                className="
                                    absolute
                                    bottom-4
                                    left-1/2
                                    flex
                                    -translate-x-1/2
                                    items-center
                                    gap-2
                                    whitespace-nowrap
                                    rounded-2xl
                                    bg-white
                                    px-4
                                    py-3
                                    text-xs
                                    font-black
                                    text-slate-900
                                    shadow-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-orange-50
                                    sm:bottom-5
                                    sm:px-5
                                    sm:py-3.5
                                    sm:text-sm
                                "
                            >
                                <Navigation
                                    size={17}
                                    className="text-orange-500"
                                />

                                Open in Google Maps

                                <ExternalLink size={14} />
                            </a>

                        </div>
                    </div>

                    {/* ================= CONTACT CARD ================= */}

                    <div
                        className="
                            rounded-[28px]
                            border
                            border-white
                            bg-white/95
                            p-5
                            shadow-[0_20px_55px_rgba(15,23,42,0.10)]
                            backdrop-blur-xl
                            sm:rounded-[35px]
                            sm:p-8
                            lg:p-10
                        "
                    >

                        {/* STATUS */}

                        <span
                            className="
                                inline-flex
                                rounded-full
                                bg-green-100
                                px-4
                                py-2
                                text-xs
                                font-bold
                                text-green-700
                                sm:text-sm
                            "
                        >
                            🟢 Open 24 Hours
                        </span>

                        {/* TITLE */}

                        <h2
                            className="
                                mt-5
                                text-2xl
                                font-black
                                leading-tight
                                text-slate-900
                                sm:text-3xl
                                lg:text-4xl
                            "
                        >
                            Deepak Repairing Center
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            Trusted destination for Power Tool Sales,
                            Professional Repair Services and Genuine Spare
                            Parts with more than 45 years of experience.
                        </p>

                        {/* ================= CONTACT DETAILS ================= */}

                        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">

                            {/* ================= LOCATION ================= */}

                            <a
                                href={MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Deepak Repairing Center location in Google Maps"
                                className="
                                    group
                                    flex
                                    gap-3
                                    rounded-2xl
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:bg-orange-50
                                    active:scale-[0.99]
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-orange-100
                                        transition
                                        group-hover:bg-orange-500
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <MapPin
                                        className="text-orange-600 group-hover:text-white"
                                        size={21}
                                    />
                                </div>

                                <div className="min-w-0">

                                    <h4 className="font-bold text-slate-900">
                                        Location
                                    </h4>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            leading-6
                                            text-slate-600
                                            sm:text-base
                                            sm:leading-7
                                        "
                                    >
                                        Near Sunhery Chowk, A Block,
                                        Sahibabad Dairy, Prahladpur,
                                        Rohini, Delhi - 110042
                                    </p>

                                    <span
                                        className="
                                            mt-1
                                            inline-flex
                                            items-center
                                            gap-1
                                            text-xs
                                            font-bold
                                            text-orange-600
                                        "
                                    >
                                        Open exact shop in Google Maps
                                        <ExternalLink size={12} />
                                    </span>

                                </div>

                            </a>

                            {/* ================= PHONE ================= */}

                            <a
                                href="tel:+919871238460"
                                aria-label="Call Deepak Repairing Center"
                                className="
                                    group
                                    flex
                                    gap-3
                                    rounded-2xl
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:bg-orange-50
                                    active:scale-[0.99]
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-orange-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <Phone
                                        className="text-orange-600"
                                        size={21}
                                    />
                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Phone
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-600 sm:text-base">
                                        +91 98712 38460
                                    </p>

                                    <span className="text-xs font-bold text-orange-600">
                                        Tap to call →
                                    </span>

                                </div>

                            </a>

                            {/* ================= EMAIL ================= */}

                            <a
                                href="mailto:shreyasingh19370@gmail.com"
                                aria-label="Email Deepak Repairing Center"
                                className="
                                    group
                                    flex
                                    gap-3
                                    rounded-2xl
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:bg-orange-50
                                    active:scale-[0.99]
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-orange-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <Mail
                                        className="text-orange-600"
                                        size={21}
                                    />
                                </div>

                                <div className="min-w-0">

                                    <h4 className="font-bold text-slate-900">
                                        Email
                                    </h4>

                                    <p className="mt-1 break-all text-sm text-slate-600 sm:text-base">
                                        shreyasingh19370@gmail.com
                                    </p>

                                </div>

                            </a>

                            {/* ================= WORKING HOURS ================= */}

                            <div
                                className="
                                    flex
                                    gap-3
                                    rounded-2xl
                                    p-3
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-orange-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <Clock
                                        className="text-orange-600"
                                        size={21}
                                    />
                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Working Hours
                                    </h4>

                                    <p className="mt-1 text-sm font-bold text-green-600 sm:text-base">
                                        Open 24 Hours
                                    </p>

                                </div>

                            </div>

                            {/* ================= RATING ================= */}

                            <div
                                className="
                                    flex
                                    gap-3
                                    rounded-2xl
                                    p-3
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-orange-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <Star
                                        className="text-orange-600"
                                        size={21}
                                    />
                                </div>

                                <div>

                                    <h4 className="font-bold text-slate-900">
                                        Google Rating
                                    </h4>

                                    <p className="mt-1 text-sm text-slate-600 sm:text-base">
                                        ⭐ 5.0 (6 Reviews)
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* ================= ACTION BUTTONS ================= */}

                        <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">

                            {/* GET DIRECTIONS - EXACT LISTING */}

                            <a
                                href={MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get directions to Deepak Repairing Center"
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-orange-500
                                    px-6
                                    py-4
                                    text-sm
                                    font-black
                                    text-white
                                    shadow-lg
                                    shadow-orange-200
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-orange-600
                                    active:scale-[0.98]
                                    sm:w-auto
                                    sm:px-7
                                "
                            >
                                <Navigation size={18} />
                                Get Directions
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
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-green-200
                                    bg-green-50
                                    px-6
                                    py-4
                                    text-sm
                                    font-black
                                    text-green-700
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-green-100
                                    active:scale-[0.98]
                                    sm:w-auto
                                    sm:px-7
                                "
                            >
                                <MessageCircle size={18} />
                                WhatsApp
                            </a>

                        </div>

                        {/* ================= MOBILE CALL ================= */}

                        <a
                            href="tel:+919871238460"
                            aria-label="Call Deepak Repairing Center"
                            className="
                                mt-3
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-2xl
                                border
                                border-orange-200
                                bg-orange-50
                                px-6
                                py-4
                                text-sm
                                font-black
                                text-orange-700
                                transition-all
                                duration-300
                                hover:bg-orange-100
                                active:scale-[0.98]
                                sm:hidden
                            "
                        >
                            <Phone size={18} />
                            Call Now
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default LocationSection;