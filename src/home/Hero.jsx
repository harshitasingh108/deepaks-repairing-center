import {
    ArrowRight,
    Phone,
    ShieldCheck,
    Wrench,
    Clock3,
    MapPin,
    Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative isolate min-h-[calc(100vh-84px)] overflow-hidden bg-[#070B14]">

            {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="
          absolute
          inset-0
          -z-30
          h-full
          w-full
          object-cover
          object-center
        "
            >
                <source
                    src="https://res.cloudinary.com/wziscl0n/video/upload/v1786389658/cover.mp4"
                    type="video/mp4"
                />
            </video>

            {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

            {/* Main dark overlay */}

            <div
                className="
          absolute
          inset-0
          -z-20
          bg-[#05070d]/65
        "
            />


            {/* Left gradient */}

            <div
                className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-[#05070d]/95
          via-[#05070d]/65
          to-[#05070d]/25
        "
            />


            {/* Bottom gradient */}

            <div
                className="
          absolute
          bottom-0
          left-0
          right-0
          -z-20
          h-64
          bg-gradient-to-t
          from-[#070B14]
          via-[#070B14]/70
          to-transparent
        "
            />


            {/* =====================================================
          ORANGE GLOW
      ===================================================== */}

            <div
                className="
          pointer-events-none
          absolute
          -left-40
          top-1/4
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
            />

            <div
                className="
          pointer-events-none
          absolute
          right-[-150px]
          top-1/3
          -z-10
          h-[380px]
          w-[380px]
          rounded-full
          bg-orange-400/10
          blur-[130px]
        "
            />


            {/* =====================================================
          HERO CONTAINER
      ===================================================== */}

            <div className="mx-auto flex min-h-[calc(100vh-84px)] max-w-7xl items-center px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                <div className="grid w-full items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">


                    {/* =================================================
              LEFT CONTENT
          ================================================= */}

                    <div className="max-w-3xl">


                        {/* Premium Badge */}

                        <div
                            className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-400/25
                bg-white/[0.08]
                px-4
                py-2
                text-xs
                font-bold
                tracking-wide
                text-orange-300
                shadow-[0_8px_35px_rgba(0,0,0,0.2)]
                backdrop-blur-xl
                sm:px-5
                sm:text-sm
              "
                        >

                            <Sparkles
                                size={16}
                                className="text-orange-400"
                            />

                            Trusted Since 1980

                            <span className="text-white/30">
                                •
                            </span>

                            45+ Years Experience

                        </div>


                        {/* Heading */}

                        <h1
                            className="
                text-4xl
                font-black
                leading-[1.03]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-[78px]
              "
                        >

                            Power Tools.

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
                                Sales & Repair.
                            </span>

                            <span className="block">
                                Done Right.
                            </span>

                        </h1>


                        {/* Description */}

                        <p
                            className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-slate-300
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
                        >
                            We specialize in the sales and repair of
                            Drill Machines, Demolition Hammers,
                            Rotary Hammers, Angle Grinders, Marble
                            Cutters, Tile Cutters and industrial power
                            tools with genuine spare parts and expert
                            technicians.
                        </p>


                        {/* =================================================
                CONTACT INFO
            ================================================= */}

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                            {/* Phone */}

                            <a
                                href="tel:+919871238460"
                                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.08]
                  px-4
                  py-3
                  shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/40
                  hover:bg-white/[0.12]
                "
                            >

                                <span
                                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                    transition
                    group-hover:bg-orange-500
                    group-hover:text-white
                  "
                                >
                                    <Phone size={17} />
                                </span>

                                <span>

                                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                        Call Us
                                    </span>

                                    <span className="block text-sm font-bold text-white">
                                        +91 98712 38460
                                    </span>

                                </span>

                            </a>


                            {/* Location */}

                            <div
                                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.08]
                  px-4
                  py-3
                  shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                "
                            >

                                <span
                                    className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                  "
                                >
                                    <MapPin size={17} />
                                </span>

                                <span>

                                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                        Location
                                    </span>

                                    <span className="block text-sm font-bold text-white">
                                        Rohini, Delhi
                                    </span>

                                </span>

                            </div>

                        </div>


                        {/* =================================================
                CTA BUTTONS
            ================================================= */}

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            {/* Gallery */}

                            <NavLink
                                to="/gallery"
                                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-orange-500
                  px-7
                  py-4
                  text-sm
                  font-black
                  text-white
                  shadow-[0_15px_40px_rgba(249,115,22,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-600
                  hover:shadow-[0_20px_50px_rgba(249,115,22,0.35)]
                "
                            >

                                Explore Our Tools

                                <ArrowRight
                                    size={18}
                                    className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                                />

                            </NavLink>


                            {/* Call */}

                            <a
                                href="tel:+919871238460"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-7
                  py-4
                  text-sm
                  font-black
                  text-white
                  shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/50
                  hover:bg-white/[0.14]
                "
                            >

                                <Phone
                                    size={18}
                                    className="text-orange-400"
                                />

                                Call Now

                            </a>

                        </div>


                        {/* =================================================
                TRUST FEATURES
            ================================================= */}

                        <div className="mt-10 grid gap-3 sm:grid-cols-2">

                            <div
                                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/25
                  hover:bg-white/[0.10]
                "
                            >

                                <div
                                    className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                  "
                                >
                                    <Wrench size={19} />
                                </div>

                                <div>

                                    <p className="text-sm font-bold text-white">
                                        Genuine Spare Parts
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Quality components for your tools
                                    </p>

                                </div>

                            </div>


                            <div
                                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-400/25
                  hover:bg-white/[0.10]
                "
                            >

                                <div
                                    className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/15
                    text-orange-400
                  "
                                >
                                    <ShieldCheck size={19} />
                                </div>

                                <div>

                                    <p className="text-sm font-bold text-white">
                                        Expert Repair Service
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Professional technicians
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
              RIGHT PREMIUM CARD
          ================================================= */}

                    <div className="hidden lg:flex lg:justify-end">

                        <div className="relative w-full max-w-[360px]">


                            {/* Glow behind card */}

                            <div
                                className="
                  absolute
                  -inset-5
                  rounded-[40px]
                  bg-orange-500/10
                  blur-3xl
                "
                            />


                            {/* Main Card */}

                            <div
                                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/15
                  bg-white/[0.08]
                  p-7
                  shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                "
                            >

                                {/* Top */}

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
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
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
                                    Years of experience serving customers
                                    with reliable power tools and repair
                                    services.
                                </p>


                                {/* Divider */}

                                <div className="my-6 h-px bg-white/10" />


                                {/* Stats */}

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


                                {/* Availability */}

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


                                {/* Card CTA */}

                                <a
                                    href="tel:+919871238460"
                                    className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-5
                    py-3.5
                    text-sm
                    font-black
                    text-slate-950
                    transition-all
                    duration-300
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


            {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

            <div
                className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-400
          lg:flex
        "
            >

                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
                    Scroll
                </span>

                <div
                    className="
            flex
            h-10
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-white/25
          "
                >

                    <div
                        className="
              mt-2
              h-2.5
              w-1
              animate-bounce
              rounded-full
              bg-orange-400
            "
                    />

                </div>

            </div>

        </section>
    );
};

export default Hero;