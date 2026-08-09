import {
    Wrench,
    ShoppingBag,
    Settings,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Phone,
} from "lucide-react";

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
        media: "/images/services/service1.mp4",
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
        media: "/images/services/service2.mp4",
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
        <main className="overflow-hidden bg-[#f6f5f1]">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="relative px-5 py-20 sm:px-6 sm:py-24 lg:py-28">

                {/* Background Glow */}

                <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

                <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-orange-300/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl">

                    <div className="mx-auto max-w-4xl text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-orange-600 shadow-sm sm:px-5 sm:text-sm">
                            <Wrench size={16} />
                            Our Services
                        </div>

                        <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                            Professional
                            <span className="text-orange-500"> Power Tool </span>
                            Solutions
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                            From repairing your existing tools to helping you choose
                            the right machine, we provide dependable solutions backed
                            by years of experience.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          SERVICES
      ===================================================== */}

            <section className="px-5 pb-20 sm:px-6 sm:pb-28">

                <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (
                            <article
                                key={service.number}
                                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200/80
                  bg-white
                  shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(15,23,42,0.13)]
                  sm:rounded-[36px]
                "
                            >

                                <div
                                    className={`
                    grid
                    lg:grid-cols-2
                    ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
                  `}
                                >

                                    {/* ================= MEDIA ================= */}

                                    <div
                                        className="
                      relative
                      min-h-[280px]
                      overflow-hidden
                      bg-slate-950
                      sm:min-h-[400px]
                      lg:min-h-[520px]
                    "
                                    >

                                        {service.type === "video" ? (
                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
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
                          duration-700
                          group-hover:scale-105
                        "
                                            />
                                        )}

                                        {/* Overlay */}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                        {/* Number */}

                                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-black/25 text-sm font-black text-white backdrop-blur-md sm:left-7 sm:top-7 sm:h-12 sm:w-12">
                                            {service.number}
                                        </div>

                                        {/* Label */}

                                        <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold tracking-[0.15em] text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:text-xs">
                                            {service.label}
                                        </div>

                                    </div>


                                    {/* ================= CONTENT ================= */}

                                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">

                                        {/* Icon */}

                                        <div className="flex h-13 w-13 h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                            <Icon size={25} />
                                        </div>

                                        {/* Heading */}

                                        <h2 className="mt-6 text-2xl font-black leading-tight text-slate-900 sm:mt-7 sm:text-3xl lg:text-4xl">
                                            {service.title}
                                        </h2>

                                        {/* Description */}

                                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
                                            {service.description}
                                        </p>

                                        {/* Points */}

                                        <div className="mt-6 space-y-3 sm:mt-7">

                                            {service.points.map((point) => (
                                                <div
                                                    key={point}
                                                    className="flex items-start gap-3"
                                                >

                                                    <CheckCircle2
                                                        size={18}
                                                        className="mt-0.5 shrink-0 text-orange-500"
                                                    />

                                                    <span className="text-sm font-medium text-slate-700 sm:text-base">
                                                        {point}
                                                    </span>

                                                </div>
                                            ))}

                                        </div>

                                        {/* CTA */}

                                        <a
                                            href="/contact"
                                            className="
                        mt-7
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-xl
                        bg-slate-900
                        px-5
                        py-3
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-orange-500
                        hover:shadow-lg
                        sm:mt-9
                        sm:px-6
                        sm:py-3.5
                      "
                                        >
                                            Enquire About Service
                                            <ArrowRight size={17} />
                                        </a>

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

            <section className="bg-slate-950 px-5 py-20 sm:px-6 sm:py-28">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

                        {/* Left */}

                        <div>

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                                Why Choose Us
                            </p>

                            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                                Service That
                                <span className="text-orange-500"> Goes Beyond </span>
                                The Repair.
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                                Our goal is not simply to repair a machine. We help
                                customers find reliable solutions for their tools and
                                equipment.
                            </p>

                            <a
                                href="tel:+919871238460"
                                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-orange-500
                  px-6
                  py-3.5
                  font-bold
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-600
                  sm:mt-8
                  sm:px-7
                  sm:py-4
                "
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                        </div>


                        {/* Right */}

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
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-6
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-orange-500/30
                    hover:bg-white/[0.08]
                    sm:rounded-[28px]
                    sm:p-7
                  "
                                >

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                        <CheckCircle2 size={21} />
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CTA
      ===================================================== */}

            <section className="bg-[#f6f5f1] px-5 py-16 sm:px-6 sm:py-20">

                <div className="mx-auto max-w-5xl rounded-[28px] bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-12 text-center shadow-[0_25px_70px_rgba(249,115,22,0.25)] sm:rounded-[36px] sm:px-12 sm:py-14">

                    <h2 className="text-3xl font-black text-white sm:text-4xl">
                        Need Help With Your Machine?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-orange-50 sm:text-base sm:leading-8">
                        Talk to Deepak Repairing Center about repairs, power tools
                        and genuine spare parts.
                    </p>

                    <a
                        href="/contact"
                        className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-6
              py-3.5
              font-bold
              text-orange-600
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:mt-8
              sm:px-7
              sm:py-4
            "
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default Services;