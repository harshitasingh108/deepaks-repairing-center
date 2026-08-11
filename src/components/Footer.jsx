import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
    Clock,
    ExternalLink,
    Code2,
    Heart,
    Wrench,
    ArrowUpRight,
} from "lucide-react";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Exact Deepak Repairing Center Google Maps location
    const MAP_URL =
        "https://www.google.com/maps/place/Deepak+repairing+center/@28.7443679,77.0979262,17z";

    const EMAIL = "shreyasingh19370@gmail.com";
    const PHONE = "+919871238460";

    const quickLinks = [
        ["Home", "/"],
        ["About", "/about"],
        ["Products", "/products"],
        ["Services", "/services"],
        ["Contact", "/contact"],
    ];

    return (
        <footer className="relative overflow-hidden bg-[#070B14] text-white">

            {/* =====================================================
                PREMIUM BACKGROUND
            ===================================================== */}

            <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />

            <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-orange-500/[0.07] blur-[140px]" />

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/[0.05] blur-[120px]" />

            {/* Premium top line */}

            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

            {/* =====================================================
                MAIN FOOTER
            ===================================================== */}

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <div className="lg:col-span-1">

                        {/* Logo */}

                        <a
                            href="/"
                            className="group inline-flex items-center gap-3"
                        >
                            <div
                                className="
                                    relative
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-orange-400
                                    via-orange-500
                                    to-orange-700
                                    shadow-[0_10px_30px_rgba(249,115,22,0.25)]
                                    transition-all
                                    duration-300
                                    group-hover:-translate-y-1
                                    group-hover:shadow-[0_15px_40px_rgba(249,115,22,0.35)]
                                "
                            >
                                <Wrench
                                    size={23}
                                    className="relative z-10 text-white"
                                />

                                <div className="absolute -right-4 -top-4 h-10 w-10 rounded-full bg-white/25 blur-md" />
                            </div>

                            <div>
                                <h2 className="text-lg font-black tracking-tight sm:text-xl">
                                    Deepak{" "}
                                    <span className="text-orange-500">
                                        Repairing Center
                                    </span>
                                </h2>

                                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                                    Power Tools • Repair • Spare Parts
                                </p>
                            </div>
                        </a>

                        {/* Description */}

                        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
                            Trusted destination for power tool sales, genuine
                            spare parts and professional repair services.
                        </p>

                        {/* Availability */}

                        <div
                            className="
                                mt-7
                                inline-flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.035]
                                px-4
                                py-3
                                backdrop-blur-xl
                            "
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                <Clock size={18} />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                                    Availability
                                </p>

                                <p className="mt-0.5 text-sm font-semibold text-white">
                                    24 Hours Available
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* =================================================
                        QUICK LINKS
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                            Quick Links
                        </h3>

                        <div className="mt-6 space-y-2">

                            {quickLinks.map(([name, link]) => (
                                <a
                                    key={name}
                                    href={link}
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        px-3
                                        py-2.5
                                        text-sm
                                        text-slate-400
                                        transition-all
                                        duration-300
                                        hover:bg-white/[0.04]
                                        hover:text-white
                                    "
                                >
                                    <span className="flex items-center gap-3">

                                        <span
                                            className="
                                                h-1
                                                w-1
                                                rounded-full
                                                bg-orange-500
                                                opacity-0
                                                transition-all
                                                duration-300
                                                group-hover:opacity-100
                                            "
                                        />

                                        {name}
                                    </span>

                                    <ArrowUpRight
                                        size={14}
                                        className="
                                            opacity-0
                                            transition-all
                                            duration-300
                                            group-hover:translate-x-0.5
                                            group-hover:-translate-y-0.5
                                            group-hover:opacity-70
                                        "
                                    />
                                </a>
                            ))}

                        </div>
                    </div>

                    {/* =================================================
                        CONTACT
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-3">

                            {/* Phone */}

                            <a
                                href={`tel:${PHONE}`}
                                aria-label="Call Deepak Repairing Center"
                                className="
                                    group
                                    flex
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-transparent
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:border-white/10
                                    hover:bg-white/[0.035]
                                "
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <Phone size={18} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-sm text-slate-300 group-hover:text-white">
                                        +91 98712 38460
                                    </p>
                                </div>
                            </a>

                            {/* Email */}

                            <a
                                href={`mailto:${EMAIL}`}
                                aria-label="Email Deepak Repairing Center"
                                className="
                                    group
                                    flex
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-transparent
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:border-white/10
                                    hover:bg-white/[0.035]
                                "
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <Mail size={18} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                        Email
                                    </p>

                                    <p className="mt-1 break-all text-sm text-slate-300 group-hover:text-white">
                                        {EMAIL}
                                    </p>
                                </div>
                            </a>

                            {/* Exact Shop Location */}

                            <a
                                href={MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Deepak Repairing Center in Google Maps"
                                className="
                                    group
                                    flex
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-transparent
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:border-orange-500/20
                                    hover:bg-orange-500/[0.04]
                                "
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <MapPin size={18} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-300 group-hover:text-white">
                                        Near Sunhery Chowk,
                                        <br />
                                        Prahladpur, Rohini,
                                        <br />
                                        Delhi - 110042
                                    </p>

                                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-orange-400">
                                        Open in Google Maps
                                        <ArrowUpRight size={12} />
                                    </span>
                                </div>
                            </a>

                        </div>
                    </div>

                    {/* =================================================
                        DEVELOPER
                    ================================================= */}

                    <div>

                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                            Developer
                        </h3>

                        <div
                            className="
                                mt-6
                                rounded-[28px]
                                border
                                border-white/10
                                bg-gradient-to-br
                                from-white/[0.07]
                                to-white/[0.025]
                                p-5
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-orange-500/20
                                hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]
                                sm:p-6
                            "
                        >

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                <Code2 size={21} />
                            </div>

                            <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                Designed & Developed By
                            </p>

                            <h4 className="mt-2 text-2xl font-black">
                                Harshita
                            </h4>

                            <p className="mt-1 text-sm text-slate-400">
                                Full Stack Developer
                            </p>

                            {/* Developer Links */}

                            <div className="mt-6 grid grid-cols-2 gap-2">

                                <a
                                    href="https://github.com/harshitasingh108"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.04]
                                        px-3
                                        py-2.5
                                        text-center
                                        text-xs
                                        font-semibold
                                        text-slate-300
                                        transition-all
                                        duration-300
                                        hover:border-orange-500/30
                                        hover:bg-orange-500
                                        hover:text-white
                                    "
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/harshita-singh-284750305/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.04]
                                        px-3
                                        py-2.5
                                        text-center
                                        text-xs
                                        font-semibold
                                        text-slate-300
                                        transition-all
                                        duration-300
                                        hover:border-orange-500/30
                                        hover:bg-orange-500
                                        hover:text-white
                                    "
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.04]
                                        px-3
                                        py-2.5
                                        text-center
                                        text-xs
                                        font-semibold
                                        text-slate-300
                                        transition-all
                                        duration-300
                                        hover:border-orange-500/30
                                        hover:bg-orange-500
                                        hover:text-white
                                    "
                                >
                                    Email
                                </a>

                                <a
                                    href={`tel:${PHONE}`}
                                    className="
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-white/[0.04]
                                        px-3
                                        py-2.5
                                        text-center
                                        text-xs
                                        font-semibold
                                        text-slate-300
                                        transition-all
                                        duration-300
                                        hover:border-orange-500/30
                                        hover:bg-orange-500
                                        hover:text-white
                                    "
                                >
                                    Call
                                </a>

                            </div>

                        </div>
                    </div>

                </div>

                {/* =====================================================
                    DEVELOPER STRIP
                ===================================================== */}

                <div
                    className="
                        mt-12
                        rounded-[24px]
                        border
                        border-white/10
                        bg-gradient-to-r
                        from-white/[0.05]
                        via-white/[0.025]
                        to-transparent
                        px-4
                        py-5
                        sm:mt-14
                        sm:rounded-3xl
                        sm:px-7
                    "
                >

                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

                        <div>
                            <p className="text-sm font-semibold text-slate-300">
                                Website crafted by{" "}
                                <span className="text-orange-400">
                                    Harshita
                                </span>
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                Full Stack Development • UI • Backend
                            </p>
                        </div>

                        <a
                            href={`mailto:${EMAIL}`}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-orange-500/20
                                bg-orange-500/10
                                px-4
                                py-2.5
                                text-xs
                                font-bold
                                text-orange-400
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-orange-500
                                hover:text-white
                            "
                        >
                            Get In Touch
                            <ExternalLink size={14} />
                        </a>

                    </div>
                </div>

                {/* =====================================================
                    BOTTOM
                ===================================================== */}

                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        gap-5
                        border-t
                        border-white/10
                        pt-6
                        text-center
                        sm:flex-row
                        sm:justify-between
                        sm:text-left
                    "
                >

                    <p className="text-xs text-slate-500 sm:text-sm">
                        © 2026 Deepak Repairing Center. All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
                        Made with
                        <Heart
                            size={13}
                            className="fill-orange-500 text-orange-500"
                        />
                        by
                        <span className="font-semibold text-orange-400">
                            Harshita
                        </span>
                    </p>

                    <button
                        type="button"
                        onClick={scrollTop}
                        aria-label="Back to top"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            text-orange-400
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-orange-500
                            hover:text-white
                        "
                    >
                        <ArrowUp size={17} />
                    </button>

                </div>

            </div>
        </footer>
    );
};

export default Footer;