import {
    ArrowRight,
    CheckCircle2,
    Phone,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Wrench,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const services = [
    {
        number: "01",
        title: "Professional Repair",
        label: "REPAIR & MAINTENANCE",
        description:
            "Reliable repair and maintenance for a wide range of power tools and machines.",
        points: [
            "Power tool inspection",
            "Professional repair work",
            "Performance-focused service",
        ],
        media: "https://res.cloudinary.com/wziscl0n/video/upload/v1786389666/service1.mp4",
        type: "video",
        icon: Wrench,
    },

    {
        number: "02",
        title: "Power Tool Sales",
        label: "TOOLS & EQUIPMENT",
        description:
            "Find the right power tools for construction, workshop and professional requirements.",
        points: [
            "Wide range of power tools",
            "Guidance for choosing the right tool",
            "Solutions for different requirements",
        ],
        media: "https://res.cloudinary.com/wziscl0n/video/upload/v1786389761/service2.mp4",
        type: "video",
        icon: ShoppingBag,
    },

    {
        number: "03",
        title: "Genuine Spare Parts",
        label: "SPARE PARTS",
        description:
            "Quality replacement parts to help keep your machines working reliably and efficiently.",
        points: [
            "Replacement components",
            "Machine-specific parts",
            "Quality-focused solutions",
        ],
        media: "/images/services/spare.png",
        type: "image",
        icon: Settings,
    },

    {
        number: "04",
        title: "Machine Inspection & Service",
        label: "MACHINE SERVICE",
        description:
            "Get your machines checked and serviced with attention to condition, performance and usability.",
        points: [
            "Machine condition checking",
            "Problem identification",
            "Service recommendations",
        ],
        media: "/images/services/machine.png",
        type: "image",
        icon: ShieldCheck,
    },
];

const Services = () => {
    return (
        <main
            className="
        overflow-hidden
        bg-[#f6f5f1]
        text-slate-900
        transition-colors
        duration-500
        dark:bg-[#070B14]
        dark:text-white
      "
        >

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="relative px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24">

                {/* Glow */}

                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-orange-500/10
            blur-[150px]
          "
                />

                <div
                    className="
            pointer-events-none
            absolute
            right-[-180px]
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-orange-400/10
            blur-[150px]
          "
                />

                <div className="relative mx-auto max-w-7xl">

                    <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.55fr]">

                        {/* Heading */}

                        <div>

                            <div
                                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-orange-300/40
                  bg-orange-500/5
                  px-4
                  py-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-orange-500
                  shadow-sm
                  sm:text-xs
                "
                            >
                                <Sparkles size={15} />

                                Our Expertise
                            </div>

                            <h1
                                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  dark:text-white
                "
                            >
                                We Don't Just Repair Tools.

                                <span
                                    className="
                    block
                    bg-gradient-to-r
                    from-orange-400
                    via-orange-500
                    to-orange-600
                    bg-clip-text
                    text-transparent
                  "
                                >
                                    We Keep Your Work Moving.
                                </span>
                            </h1>

                        </div>


                        {/* Description */}

                        <div className="lg:pb-2">

                            <p
                                className="
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-600
                  sm:text-base
                  sm:leading-8
                  dark:text-slate-400
                "
                            >
                                From professional repairs and genuine spare parts to
                                reliable power tools, we provide practical solutions
                                for workshops, construction work and everyday
                                requirements.
                            </p>

                            <div className="mt-6 flex items-center gap-3">

                                <div
                                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                  "
                                >
                                    <Wrench size={18} />
                                </div>

                                <div>

                                    <p className="text-sm font-black text-slate-900 dark:text-white">
                                        45+ Years Experience
                                    </p>

                                    <p className="text-xs text-slate-500 dark:text-slate-500">
                                        Power tools & machine solutions
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          SERVICES SHOWCASE
      ===================================================== */}

            <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">

                <div className="mx-auto max-w-7xl space-y-10">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        const isFeatured = index === 0;

                        return (
                            <article
                                key={service.number}
                                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  transition-all
                  duration-500
                  sm:rounded-[38px]

                  ${isFeatured
                                        ? `
                        border-slate-200
                        bg-white
                        shadow-[0_25px_80px_rgba(15,23,42,0.10)]
                        dark:border-white/10
                        dark:bg-[#0d1524]
                        dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                      `
                                        : `
                        border-slate-200/80
                        bg-white/80
                        shadow-[0_15px_55px_rgba(15,23,42,0.07)]
                        dark:border-white/10
                        dark:bg-white/[0.035]
                        dark:shadow-[0_25px_70px_rgba(0,0,0,0.22)]
                      `
                                    }

                  hover:-translate-y-1
                `}
                            >

                                {/* Orange top accent */}

                                <div
                                    className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[3px]
                    bg-gradient-to-r
                    from-orange-500
                    via-orange-400
                    to-transparent
                    opacity-70
                  "
                                />


                                <div
                                    className={`
                    grid
                    lg:grid-cols-[1.15fr_0.85fr]
                    ${index % 2 !== 0
                                            ? "lg:[&>*:first-child]:order-2"
                                            : ""
                                        }
                  `}
                                >

                                    {/* =================================================
                      MEDIA
                  ================================================= */}

                                    <div
                                        className="
                      relative
                      min-h-[300px]
                      overflow-hidden
                      bg-slate-950
                      sm:min-h-[430px]
                      lg:min-h-[570px]
                    "
                                    >

                                        {/* Video / Image */}

                                        {service.type === "video" ? (

                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="metadata"
                                                className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-[1200ms]
                          ease-out
                          group-hover:scale-[1.04]
                        "
                                            >
                                                <source
                                                    src={service.media}
                                                    type="video/mp4"
                                                />
                                            </video>

                                        ) : (

                                            <img
                                                src={service.media}
                                                alt={service.title}
                                                loading="lazy"
                                                className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-[1200ms]
                          ease-out
                          group-hover:scale-[1.04]
                        "
                                            />

                                        )}


                                        {/* Cinematic overlay */}

                                        <div
                                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/15
                        to-black/5
                      "
                                        />


                                        {/* Number */}

                                        <div
                                            className="
                        absolute
                        left-5
                        top-5
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/20
                        bg-black/25
                        text-sm
                        font-black
                        text-white
                        shadow-lg
                        backdrop-blur-xl
                        sm:left-7
                        sm:top-7
                      "
                                        >
                                            {service.number}
                                        </div>


                                        {/* Media label */}

                                        <div
                                            className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        flex
                        items-end
                        justify-between
                        gap-4
                        sm:bottom-7
                        sm:left-7
                        sm:right-7
                      "
                                        >

                                            <div>

                                                <p
                                                    className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-orange-300
                            sm:text-[10px]
                          "
                                                >
                                                    {service.label}
                                                </p>

                                                <h2
                                                    className="
                            mt-2
                            text-2xl
                            font-black
                            tracking-tight
                            text-white
                            sm:text-3xl
                          "
                                                >
                                                    {service.title}
                                                </h2>

                                            </div>


                                            <div
                                                className="
                          hidden
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-white
                          backdrop-blur-xl
                          sm:flex
                        "
                                            >
                                                <ArrowRight
                                                    size={19}
                                                    className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                                                />
                                            </div>

                                        </div>

                                    </div>


                                    {/* =================================================
                      CONTENT
                  ================================================= */}

                                    <div
                                        className="
                      flex
                      flex-col
                      justify-center
                      p-7
                      sm:p-10
                      lg:p-12
                      xl:p-16
                    "
                                    >

                                        {/* Icon + label */}

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-orange-500/10
                          text-orange-500
                          transition-all
                          duration-300
                          group-hover:bg-orange-500
                          group-hover:text-white
                          group-hover:shadow-lg
                          group-hover:shadow-orange-500/20
                        "
                                            >
                                                <Icon size={25} />
                                            </div>

                                            <div>

                                                <p
                                                    className="
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.18em]
                            text-orange-500
                          "
                                                >
                                                    {service.label}
                                                </p>

                                                <p className="mt-1 text-xs font-medium text-slate-400">
                                                    Deepak Repairing Center
                                                </p>

                                            </div>

                                        </div>


                                        {/* Heading */}

                                        <h3
                                            className="
                        mt-7
                        text-3xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-slate-950
                        sm:text-4xl
                        dark:text-white
                      "
                                        >
                                            {service.title}
                                        </h3>


                                        {/* Description */}

                                        <p
                                            className="
                        mt-5
                        max-w-xl
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                        sm:leading-8
                        dark:text-slate-400
                      "
                                        >
                                            {service.description}
                                        </p>


                                        {/* Points */}

                                        <div className="mt-7 space-y-4">

                                            {service.points.map((point) => (

                                                <div
                                                    key={point}
                                                    className="flex items-start gap-3"
                                                >

                                                    <CheckCircle2
                                                        size={18}
                                                        className="
                              mt-0.5
                              shrink-0
                              text-orange-500
                            "
                                                    />

                                                    <span
                                                        className="
                              text-sm
                              font-semibold
                              text-slate-700
                              sm:text-base
                              dark:text-slate-300
                            "
                                                    >
                                                        {point}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>


                                        {/* CTA */}

                                        <div className="mt-9 flex flex-wrap gap-3">

                                            <NavLink
                                                to="/contact"
                                                className="
                          group/btn
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          bg-slate-950
                          px-5
                          py-3.5
                          text-sm
                          font-black
                          text-white
                          shadow-lg
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:bg-orange-500
                          hover:shadow-orange-500/20
                          dark:bg-white
                          dark:text-slate-950
                          dark:hover:bg-orange-500
                          dark:hover:text-white
                        "
                                            >
                                                Enquire About Service

                                                <ArrowRight
                                                    size={17}
                                                    className="
                            transition-transform
                            group-hover/btn:translate-x-1
                          "
                                                />

                                            </NavLink>


                                            <a
                                                href="tel:+919871238460"
                                                className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-slate-200
                          px-5
                          py-3.5
                          text-sm
                          font-bold
                          text-slate-700
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-orange-400
                          hover:text-orange-500
                          dark:border-white/10
                          dark:text-slate-300
                          dark:hover:border-orange-500
                          dark:hover:text-orange-400
                        "
                                            >

                                                <Phone size={16} />

                                                Call

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </article>
                        );
                    })}

                </div>

            </section>


            {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

            <section
                className="
          relative
          overflow-hidden
          bg-[#080D17]
          px-5
          py-20
          text-white
          sm:px-6
          sm:py-28
          lg:px-8
        "
            >

                {/* Glow */}

                <div
                    className="
            pointer-events-none
            absolute
            -left-40
            top-1/2
            h-[450px]
            w-[450px]
            -translate-y-1/2
            rounded-full
            bg-orange-500/10
            blur-[150px]
          "
                />

                <div className="relative mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

                        {/* Left */}

                        <div>

                            <p
                                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-orange-400
                "
                            >
                                Why Choose Us
                            </p>

                            <h2
                                className="
                  mt-5
                  max-w-xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  lg:text-5xl
                "
                            >
                                Service That

                                <span className="text-orange-500">
                                    {" "}Goes Beyond
                                </span>

                                {" "}The Repair.
                            </h2>

                            <p
                                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                  sm:leading-8
                "
                            >
                                Our goal is not simply to repair a machine.
                                We help customers find reliable solutions
                                for their tools and equipment.
                            </p>

                            <a
                                href="tel:+919871238460"
                                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-orange-500
                  px-6
                  py-3.5
                  font-black
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-600
                  sm:px-7
                  sm:py-4
                "
                            >

                                <Phone size={18} />

                                Call +91 98712 38460

                            </a>

                        </div>


                        {/* Right cards */}

                        <div className="grid gap-4 sm:grid-cols-2">

                            {[
                                {
                                    title: "Experienced Service",
                                    text: "Years of practical experience with power tools and machines.",
                                },
                                {
                                    title: "Reliable Solutions",
                                    text: "Focused on dependable repair and maintenance solutions.",
                                },
                                {
                                    title: "Quality Parts",
                                    text: "Replacement parts selected with quality in mind.",
                                },
                                {
                                    title: "Customer First",
                                    text: "Helpful guidance based on your actual requirement.",
                                },
                            ].map((item, index) => (

                                <div
                                    key={item.title}
                                    className="
                    group
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.045]
                    p-6
                    shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-orange-500/30
                    hover:bg-white/[0.07]
                    sm:p-7
                  "
                                >

                                    <div
                                        className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-orange-500/10
                      text-orange-400
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                                    >
                                        <CheckCircle2 size={21} />
                                    </div>

                                    <div className="mt-5 flex items-center justify-between">

                                        <h3 className="text-lg font-black sm:text-xl">
                                            {item.title}
                                        </h3>

                                        <span className="text-xs font-black text-slate-600">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    <p
                                        className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-400
                      sm:text-base
                    "
                                    >
                                        {item.text}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section
                className="
          bg-[#f6f5f1]
          px-5
          py-16
          dark:bg-[#070B14]
          sm:px-6
          sm:py-24
          lg:px-8
        "
            >

                <div
                    className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[30px]
            bg-gradient-to-br
            from-orange-500
            via-orange-500
            to-orange-600
            px-7
            py-12
            text-center
            shadow-[0_30px_90px_rgba(249,115,22,0.25)]
            sm:rounded-[38px]
            sm:px-12
            sm:py-16
          "
                >

                    {/* Decorative glow */}

                    <div
                        className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-white/10
              blur-3xl
            "
                    />

                    <div
                        className="
              pointer-events-none
              absolute
              -bottom-24
              -left-16
              h-56
              w-56
              rounded-full
              bg-black/10
              blur-3xl
            "
                    />

                    <div className="relative">

                        <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-100">
                            Need Assistance?
                        </p>

                        <h2
                            className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-white
                sm:text-4xl
              "
                        >
                            Need Help With Your Machine?
                        </h2>

                        <p
                            className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-orange-50
                sm:text-base
                sm:leading-8
              "
                        >
                            Talk to Deepak Repairing Center about
                            repairs, power tools and genuine spare parts.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                            <NavLink
                                to="/contact"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-black
                  text-orange-600
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                            >

                                Contact Us

                                <ArrowRight size={18} />

                            </NavLink>

                            <a
                                href="tel:+919871238460"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/10
                  px-7
                  py-4
                  text-sm
                  font-black
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/20
                "
                            >

                                <Phone size={18} />

                                +91 98712 38460

                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Services;