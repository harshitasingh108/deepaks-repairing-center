import {
    ArrowRight,
    Phone,
    ShieldCheck,
    Wrench,
    Clock3,
    MapPin,
    Sparkles,
    MessageCircle,
    Navigation,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const MAP_URL =
    "https://google.com/maps/place/Deepak+repairing+center/@28.7443679,77.0979262,17z/data=!3m1!4b1!4m6!3m5!1s0x390d07a55c7aae69:0x31688d2d0cdef9c9!8m2!3d28.7443679!4d77.0979262!16s%2Fg%2F11qb3j13dv?entry=ttu";

const Hero = () => {
    return (
        <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[#070B14] sm:min-h-[calc(100vh-84px)]">

            {/* ================= BACKGROUND VIDEO ================= */}

            <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
            >
                <source
                    src="https://res.cloudinary.com/wziscl0n/video/upload/v1786389658/cover.mp4"
                    type="video/mp4"
                />
            </video>

            {/* ================= OVERLAYS ================= */}

            <div className="absolute inset-0 -z-20 bg-[#05070d]/70" />

            <div
                className="
          absolute inset-0 -z-20
          bg-gradient-to-r
          from-[#05070d]/95
          via-[#05070d]/70
          to-[#05070d]/35
        "
            />

            <div
                className="
          absolute inset-x-0 bottom-0 -z-20 h-56
          bg-gradient-to-t
          from-[#070B14]
          via-[#070B14]/75
          to-transparent
        "
            />

            {/* Mobile glow */}

            <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[100px] sm:hidden" />

            {/* Desktop glows */}

            <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 hidden h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px] sm:block" />

            <div className="pointer-events-none absolute right-[-150px] top-1/3 -z-10 hidden h-[380px] w-[380px] rounded-full bg-orange-400/10 blur-[130px] sm:block" />

            {/* ================= HERO CONTAINER ================= */}

            <div className="mx-auto flex min-h-[calc(100svh-76px)] max-w-7xl items-center px-4 py-10 sm:min-h-[calc(100vh-84px)] sm:px-6 sm:py-16 lg:px-8 lg:py-24">

                <div className="grid w-full items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">

                    {/* ================= LEFT CONTENT ================= */}

                    <div className="max-w-3xl">

                        {/* Brand badge */}

                        <div
                            className="
                mb-4 inline-flex items-center gap-2
                rounded-full border border-orange-400/25
                bg-white/[0.08]
                px-3.5 py-2
                text-[11px] font-bold tracking-wide
                text-orange-300
                shadow-[0_8px_35px_rgba(0,0,0,0.2)]
                backdrop-blur-xl
                sm:mb-6 sm:px-5 sm:text-sm
              "
                        >
                            <Sparkles
                                size={14}
                                className="text-orange-400 sm:h-4 sm:w-4"
                            />

                            <span>Trusted Since 1980</span>

                            <span className="text-white/30">•</span>

                            <span>45+ Years Experience</span>
                        </div>

                        {/* ================= HEADING ================= */}

                        <h1
                            className="
                text-[38px]
                font-black
                leading-[1.02]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[76px]
              "
                        >
                            Deepak Repairing

                            <span
                                className="
                  block
                  bg-gradient-to-r
                  from-orange-300
                  via-orange-400
                  to-orange-500
                  bg-clip-text
                  text-transparent
                "
                            >
                                Center
                            </span>
                        </h1>

                        {/* ================= TAGLINE ================= */}

                        <p
                            className="
                mt-4
                max-w-xl
                text-base
                font-semibold
                leading-7
                text-white/90
                sm:mt-5
                sm:text-lg
                lg:text-xl
              "
                        >
                            Power Tool Sales & Repair.
                            <span className="text-orange-300"> Done Right.</span>
                        </p>

                        {/* ================= DESCRIPTION ================= */}

                        <p
                            className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-slate-300
                sm:mt-5
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
                        >
                            Reliable power tools, professional machine repair and genuine
                            spare parts — backed by more than 45 years of experience.
                        </p>

                        {/* ================= CONTACT INFO ================= */}

                        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:flex-wrap sm:gap-3">

                            {/* CALL */}

                            <a
                                href="tel:+919871238460"
                                aria-label="Call Deepak Repairing Center"
                                className="
                  group flex min-w-0 items-center gap-2.5
                  rounded-2xl border border-white/15
                  bg-white/[0.08]
                  px-3 py-3
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/40
                  hover:bg-white/[0.12]
                  active:scale-[0.98]
                  sm:px-4
                "
                            >
                                <span
                                    className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                    transition
                    group-hover:bg-orange-500
                    group-hover:text-white
                  "
                                >
                                    <Phone size={16} />
                                </span>

                                <span className="min-w-0">
                                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                                        Call Us
                                    </span>

                                    <span className="block truncate text-xs font-bold text-white sm:text-sm">
                                        +91 98712 38460
                                    </span>
                                </span>
                            </a>

                            {/* LOCATION */}

                            <a
                                href={MAP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Deepak Repairing Center location in Google Maps"
                                className="
                  group flex min-w-0 items-center gap-2.5
                  rounded-2xl border border-white/15
                  bg-white/[0.08]
                  px-3 py-3
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/40
                  hover:bg-white/[0.12]
                  active:scale-[0.98]
                  sm:px-4
                "
                            >
                                <span
                                    className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                    transition
                    group-hover:bg-orange-500
                    group-hover:text-white
                  "
                                >
                                    <MapPin size={16} />
                                </span>

                                <span className="min-w-0">
                                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                                        Location
                                    </span>

                                    <span className="block truncate text-xs font-bold text-white sm:text-sm">
                                        Rohini, Delhi
                                    </span>

                                    <span className="mt-0.5 block text-[10px] font-semibold text-orange-300">
                                        Tap to open Maps →
                                    </span>
                                </span>
                            </a>

                        </div>

                        {/* ================= CTA BUTTONS ================= */}

                        <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-row">

                            {/* EXPLORE TOOLS */}

                            <NavLink
                                to="/gallery"
                                className="
                  group flex w-full
                  items-center justify-center gap-2.5
                  rounded-2xl
                  bg-orange-500
                  px-6 py-4
                  text-sm font-black
                  text-white
                  shadow-[0_15px_40px_rgba(249,115,22,0.25)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-orange-600
                  active:scale-[0.98]
                  sm:w-auto sm:px-7
                "
                            >
                                Explore Our Tools

                                <ArrowRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </NavLink>

                            {/* CALL NOW */}

                            <a
                                href="tel:+919871238460"
                                className="
                  flex w-full
                  items-center justify-center gap-2.5
                  rounded-2xl
                  border border-white/20
                  bg-white/[0.08]
                  px-6 py-4
                  text-sm font-black
                  text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/50
                  hover:bg-white/[0.14]
                  active:scale-[0.98]
                  sm:w-auto sm:px-7
                "
                            >
                                <Phone size={18} className="text-orange-400" />
                                Call Now
                            </a>

                            {/* WHATSAPP */}

                            <a
                                href="https://wa.me/919871238460"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  flex w-full
                  items-center justify-center gap-2.5
                  rounded-2xl
                  border border-green-400/20
                  bg-green-500/10
                  px-6 py-4
                  text-sm font-black
                  text-white
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-green-500/20
                  active:scale-[0.98]
                  sm:w-auto sm:px-7
                "
                            >
                                <MessageCircle
                                    size={18}
                                    className="text-green-400"
                                />

                                WhatsApp
                            </a>

                        </div>

                        {/* ================= TRUST FEATURES ================= */}

                        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3">

                            {/* GENUINE PARTS — INFORMATION ONLY */}

                            <div
                                className="
                  flex items-center gap-2.5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.06]
                  p-3
                  backdrop-blur-xl
                  sm:gap-3 sm:p-4
                "
                            >
                                <div
                                    className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                    sm:h-10 sm:w-10
                  "
                                >
                                    <Wrench size={18} />
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-white sm:text-sm">
                                        Genuine Spare Parts
                                    </p>

                                    <p className="mt-0.5 hidden text-[11px] text-slate-400 sm:block">
                                        Quality components
                                    </p>
                                </div>
                            </div>

                            {/* EXPERT REPAIR — INFORMATION ONLY */}

                            <div
                                className="
                  flex items-center gap-2.5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.06]
                  p-3
                  backdrop-blur-xl
                  sm:gap-3 sm:p-4
                "
                            >
                                <div
                                    className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                    sm:h-10 sm:w-10
                  "
                                >
                                    <ShieldCheck size={18} />
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-white sm:text-sm">
                                        Expert Repair
                                    </p>

                                    <p className="mt-0.5 hidden text-[11px] text-slate-400 sm:block">
                                        Professional technicians
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* MOBILE DIRECTIONS */}

                        <a
                            href={MAP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                mt-4
                flex items-center justify-center gap-2
                text-xs font-bold text-orange-300
                transition hover:text-orange-200
                sm:hidden
              "
                        >
                            <Navigation size={14} />
                            Get Directions to Our Store
                        </a>

                    </div>

                    {/* ================= DESKTOP PREMIUM CARD ================= */}

                    <div className="hidden lg:flex lg:justify-end">

                        <div className="relative w-full max-w-[360px]">

                            <div
                                className="
                  absolute -inset-5
                  rounded-[40px]
                  bg-orange-500/10
                  blur-3xl
                "
                            />

                            <div
                                className="
                  relative overflow-hidden
                  rounded-[32px]
                  border border-white/15
                  bg-white/[0.08]
                  p-7
                  shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                "
                            >

                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
                                            Our Experience
                                        </p>

                                        <h2 className="mt-2 text-5xl font-black text-white">
                                            45+
                                        </h2>
                                    </div>

                                    <div
                                        className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-orange-500
                      text-white
                      shadow-lg
                      shadow-orange-500/20
                    "
                                    >
                                        <Wrench size={25} />
                                    </div>

                                </div>

                                <p className="mt-3 text-sm leading-6 text-slate-300">
                                    Years of trusted experience serving customers with reliable
                                    power tools and professional repair services.
                                </p>

                                <div className="my-6 h-px bg-white/10" />

                                <div className="grid grid-cols-2 gap-3">

                                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                                        <p className="text-2xl font-black text-orange-400">
                                            Sales
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            Power Tools
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                                        <p className="text-2xl font-black text-orange-400">
                                            Repair
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            Major Brands
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-green-400/10 bg-green-400/5 p-4">

                                    <div className="relative">
                                        <span className="block h-3 w-3 rounded-full bg-green-400" />

                                        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-40" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold text-white">
                                            Ready to Help
                                        </p>

                                        <p className="mt-0.5 text-xs text-slate-400">
                                            Contact us for your requirements
                                        </p>
                                    </div>

                                    <Clock3
                                        size={17}
                                        className="ml-auto text-green-400"
                                    />

                                </div>

                                <a
                                    href="tel:+919871238460"
                                    className="
                    mt-5 flex
                    items-center justify-center gap-2
                    rounded-2xl
                    bg-white
                    px-5 py-3.5
                    text-sm font-black
                    text-slate-950
                    transition-all duration-300
                    hover:bg-orange-500
                    hover:text-white
                  "
                                >
                                    <Phone size={17} />
                                    +91 98712 38460
                                </a>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* ================= DESKTOP SCROLL ================= */}

            <div
                className="
          absolute bottom-6 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-slate-400
          lg:flex
        "
            >
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                    Scroll
                </span>

                <div
                    className="
            flex h-10 w-6
            items-start justify-center
            rounded-full border border-white/25
          "
                >
                    <div
                        className="
              mt-2 h-2.5 w-1
              animate-bounce
              rounded-full bg-orange-400
            "
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;