import {
    Award,
    BadgeCheck,
    Wrench,
    ShieldCheck,
    ArrowRight,
    Star,
} from "lucide-react";

const machines = [
    {
        image: "/images/products/air-blower.jpg",
        name: "Air Blower",
    },
    {
        image: "/images/products/angle-grinder.png",
        name: "Angle Grinder",
    },
    {
        image: "/images/products/drill.png",
        name: "Power Drill",
    },
    {
        image: "/images/products/hammer-drill.png",
        name: "Hammer Drill",
    },
    {
        image: "/images/products/rotary-hammer.png",
        name: "Rotary Hammer",
    },
    {
        image: "/images/products/demolition.png",
        name: "Demolition Hammer",
    },
    {
        image: "/images/products/marble-cutter.png",
        name: "Marble Cutter",
    },
    {
        image: "/images/products/tile-cutter.png",
        name: "Tile Cutter",
    },
];

const About = () => {
    return (
        <main className="overflow-hidden bg-[#f7f6f2]">

            {/* =====================================================
          HERO — LIGHT SHOP BACKGROUND
      ===================================================== */}

            <section className="relative min-h-[78vh] overflow-hidden">

                {/* Shop Background */}

                <div className="absolute inset-0">
                    <img
                        src="/images/about/shop.jpg"
                        alt="Deepak Repairing Center"
                        className="h-full w-full object-cover opacity-[0.16]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-[#f7f6f2]" />
                </div>

                {/* Decorative Glow */}

                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-400/10 blur-[130px]" />

                <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-orange-300/10 blur-[130px]" />

                {/* Hero Content */}

                <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-24">

                    <div className="w-full text-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur-xl">
                            <Award size={17} />
                            Trusted Since 1980
                        </div>

                        <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
                            More Than
                            <span className="text-orange-500"> 45 Years</span>
                            <br />
                            of Trust & Craftsmanship
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Deepak Repairing Center has built its reputation through
                            reliable power tools, professional repairs, genuine spare
                            parts and long-term customer relationships.
                        </p>

                        {/* Stats */}

                        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">

                            <div className="rounded-3xl border border-white bg-white/80 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                                <p className="text-4xl font-black text-slate-900">
                                    45+
                                </p>
                                <p className="mt-2 text-sm font-semibold text-slate-500">
                                    Years Experience
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white bg-white/80 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                                <p className="text-4xl font-black text-slate-900">
                                    1980
                                </p>
                                <p className="mt-2 text-sm font-semibold text-slate-500">
                                    Serving Since
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white bg-white/80 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                                <div className="flex items-center justify-center gap-2">
                                    <p className="text-4xl font-black text-slate-900">
                                        5.0
                                    </p>

                                    <Star
                                        size={25}
                                        className="fill-orange-400 text-orange-400"
                                    />
                                </div>

                                <p className="mt-2 text-sm font-semibold text-slate-500">
                                    Google Rating
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
          OWNER STORY
      ===================================================== */}

            <section className="relative bg-white px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Owner Photo */}

                        <div className="relative">

                            <div className="absolute -left-5 -top-5 h-full w-full rounded-[38px] border-2 border-orange-200" />

                            <div className="relative overflow-hidden rounded-[38px] bg-slate-100 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">

                                {/* CHANGE THIS PATH TO YOUR OWNER PHOTO */}

                                <img
                                    src="/images/about/owner.jpg"
                                    alt="Owner - Deepak Repairing Center"
                                    className="h-[520px] w-full rounded-[30px] object-contain"
                                />

                                <div className="absolute bottom-8 left-8 rounded-2xl border border-white/80 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl">

                                    <p className="text-3xl font-black text-orange-500">
                                        45+
                                    </p>

                                    <p className="text-sm font-semibold text-slate-700">
                                        Years of Experience
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Story */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                                <BadgeCheck size={17} />
                                Our Story
                            </span>

                            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                                The Experience Behind
                                <span className="text-orange-500"> The Service</span>
                            </h2>

                            <p className="mt-7 text-lg leading-9 text-slate-600">
                                Deepak Repairing Center has grown through years of
                                hands-on experience, dedication and strong relationships
                                with customers.
                            </p>

                            <p className="mt-5 text-lg leading-9 text-slate-600">
                                From power tool sales and professional repairs to genuine
                                spare parts, our focus has always been on providing
                                dependable solutions and quality workmanship.
                            </p>

                            {/* Highlights */}

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">

                                <div className="rounded-3xl border border-slate-200 bg-[#fafaf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg">

                                    <div className="flex items-center gap-4">

                                        <div className="rounded-2xl bg-orange-100 p-3 text-orange-500">
                                            <Wrench size={22} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900">
                                                Expert Repairs
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Professional workmanship
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="rounded-3xl border border-slate-200 bg-[#fafaf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg">

                                    <div className="flex items-center gap-4">

                                        <div className="rounded-2xl bg-orange-100 p-3 text-orange-500">
                                            <ShieldCheck size={22} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900">
                                                Genuine Parts
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                Quality you can trust
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          MACHINE SHOWCASE
      ===================================================== */}

            <section className="relative overflow-hidden bg-slate-950 px-6 py-24">

                {/* Glow */}

                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

                <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

                <div className="relative z-10 mx-auto max-w-7xl">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <div>

                            <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
                                Our Machines
                            </span>

                            <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                                A Workshop Built
                                <br />
                                <span className="text-orange-500">
                                    Around Expertise.
                                </span>
                            </h2>

                        </div>

                        <p className="max-w-md text-base leading-7 text-slate-400">
                            A wide range of professional power tools and equipment
                            handled with experience and care.
                        </p>

                    </div>


                    {/* Machine Grid */}

                    <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">

                        {machines.map((machine, index) => (
                            <div
                                key={index}
                                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-slate-900
                  ${index === 0 || index === 5
                                        ? "md:col-span-2 md:row-span-2"
                                        : ""}
                  ${index === 3 || index === 4
                                        ? "md:col-span-2"
                                        : ""}
                `}
                            >

                                <div
                                    className={`
                    relative
                    ${index === 0 || index === 5
                                            ? "h-[420px]"
                                            : "h-[230px]"}
                  `}
                                >

                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-5">

                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                                            Power Tool
                                        </p>

                                        <h3 className="mt-1 text-lg font-bold text-white">
                                            {machine.name}
                                        </h3>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          TRUST SECTION
      ===================================================== */}

            <section className="bg-[#f7f6f2] px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="font-semibold text-orange-500">
                            WHY CHOOSE US
                        </span>

                        <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">
                            Experience You Can
                            <span className="text-orange-500"> Rely On</span>
                        </h2>

                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-4">

                        {[
                            ["45+", "Years of Experience"],
                            ["Expert", "Repair Service"],
                            ["Genuine", "Spare Parts"],
                            ["24/7", "Availability"],
                        ].map(([title, text], index) => (
                            <div
                                key={index}
                                className="rounded-[28px] border border-white bg-white p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                <p className="text-3xl font-black text-orange-500">
                                    {title}
                                </p>

                                <p className="mt-3 font-semibold text-slate-700">
                                    {text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="bg-white px-6 py-20">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[35px] bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-14 text-center shadow-[0_25px_70px_rgba(249,115,22,0.25)] sm:px-12">

                    <h2 className="text-3xl font-black text-white sm:text-4xl">
                        Looking for Reliable Power Tool Services?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-orange-50">
                        Talk to Deepak Repairing Center for sales, repairs and
                        genuine spare parts.
                    </p>

                    <a
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-orange-600 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Contact Us
                        <ArrowRight size={19} />
                    </a>

                </div>

            </section>

        </main>
    );
};

export default About;