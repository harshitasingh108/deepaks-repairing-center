import { Award, ArrowDown } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-[#F8F7F4]">

            {/* ================= LIGHT SHOP BACKGROUND ================= */}

            <div className="absolute inset-0">

                <img
                    src="/images/about/shop.jpg"
                    alt="Deepak Repairing Center"
                    className="h-full w-full object-cover opacity-[0.13]"
                />

                {/* Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-[#F8F7F4]/95" />

            </div>

            {/* ================= ORANGE GLOW ================= */}

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

            <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28">

                <div className="mx-auto max-w-4xl text-center">

                    {/* Badge */}

                    <div
                        className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-orange-200
              bg-white/80
              px-5
              py-2
              text-sm
              font-semibold
              text-orange-600
              shadow-sm
              backdrop-blur-xl
            "
                    >

                        <Award size={17} />

                        Trusted Since 1980

                    </div>

                    {/* Heading */}

                    <h1
                        className="
              mt-7
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-6xl
              md:text-7xl
            "
                    >

                        More Than
                        <span className="text-orange-500"> 45 Years </span>

                        of Trust.

                    </h1>

                    {/* Description */}

                    <p
                        className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
            "
                    >

                        Deepak Repairing Center has been serving customers
                        with reliable power tools, professional repair services
                        and genuine spare parts for decades.

                    </p>

                    {/* Button */}

                    <a
                        href="#our-story"
                        className="
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-slate-900
              px-7
              py-4
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-orange-500
            "
                    >

                        Discover Our Story

                        <ArrowDown size={18} />

                    </a>

                </div>

                {/* ================= STATS ================= */}

                <div className="mx-auto mt-20 max-w-5xl">

                    <div
                        className="
              grid
              overflow-hidden
              rounded-[32px]
              border
              border-white/80
              bg-white/80
              shadow-[0_25px_70px_rgba(15,23,42,0.10)]
              backdrop-blur-2xl
              sm:grid-cols-3
            "
                    >

                        {/* 45+ */}

                        <div className="group p-8 text-center transition hover:bg-orange-50 sm:p-10">

                            <p className="text-5xl font-black text-slate-900">
                                45+
                            </p>

                            <p className="mt-3 font-semibold text-slate-600">
                                Years of Experience
                            </p>

                        </div>

                        {/* 1980 */}

                        <div
                            className="
                border-y
                border-slate-200
                p-8
                text-center
                transition
                hover:bg-orange-50
                sm:border-x
                sm:border-y-0
                sm:p-10
              "
                        >

                            <p className="text-5xl font-black text-slate-900">
                                1980
                            </p>

                            <p className="mt-3 font-semibold text-slate-600">
                                Serving Since
                            </p>

                        </div>

                        {/* Rating */}

                        <div className="group p-8 text-center transition hover:bg-orange-50 sm:p-10">

                            <p className="text-5xl font-black text-slate-900">
                                5.0
                            </p>

                            <p className="mt-3 font-semibold text-slate-600">
                                Google Rating
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutHero;