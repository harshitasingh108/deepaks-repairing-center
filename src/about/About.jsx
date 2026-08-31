import {
    ArrowRight,
    ArrowUpRight,
    Award,
    BadgeCheck,
    CalendarDays,
    CheckCircle2,
    Phone,
    ShieldCheck,
    Sparkles,
    Star,
    Wrench,
} from "lucide-react";

import SEO from "../components/SEO";

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
            <SEO
                title="About Us | Deepak Repairing Center - 45+ Years of Excellence"
                description="Learn about Deepak Repairing Center in Delhi. Serving customers since 1980 with quality power tool repair, sales, and genuine machine spare parts."
                path="/about"
                breadcrumbs={[
                    { name: "Home", item: "/" },
                    { name: "About Us", item: "/about" }
                ]}
            />



            {/* =========================================================
                HERO
            ========================================================= */}

            <section
                className="
                    relative
                    min-h-[calc(100vh-88px)]
                    overflow-hidden
                    px-5
                    py-16
                    sm:px-6
                    sm:py-20
                    lg:px-8
                    lg:py-24
                "
            >

                {/* Background */}

                <div className="pointer-events-none absolute inset-0">

                    <img
                        src="/images/about/shop.jpg"
                        alt=""
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            scale-105
                            object-cover
                            opacity-[0.12]
                            dark:opacity-[0.18]
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-white
                            via-[#f6f5f1]/95
                            to-orange-50/70
                            dark:from-[#070B14]
                            dark:via-[#070B14]/95
                            dark:to-[#0d1726]
                        "
                    />

                </div>


                {/* Animated glows */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        top-20
                        h-96
                        w-96
                        rounded-full
                        bg-orange-500/10
                        blur-[140px]
                        animate-[pulse_7s_ease-in-out_infinite]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        bottom-10
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-orange-400/10
                        blur-[150px]
                        animate-[pulse_9s_ease-in-out_infinite]
                    "
                />


                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        max-w-7xl
                    "
                >

                    <div
                        className="
                            grid
                            items-center
                            gap-12
                            lg:grid-cols-[1fr_0.9fr]
                            lg:gap-20
                        "
                    >

                        {/* =================================================
                            LEFT
                        ================================================= */}

                        <div>

                            {/* Badge */}

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
                                    py-2.5
                                    text-[10px]
                                    font-black
                                    uppercase
                                    tracking-[0.2em]
                                    text-orange-600
                                    shadow-sm
                                    backdrop-blur-xl
                                    dark:border-orange-400/20
                                    dark:bg-orange-500/5
                                    dark:text-orange-300
                                "
                            >

                                <span
                                    className="
                                        flex
                                        h-6
                                        w-6
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-orange-500
                                        text-white
                                    "
                                >
                                    <Award size={13} />
                                </span>

                                Trusted Since 1980

                                <Sparkles
                                    size={13}
                                    className="animate-pulse"
                                />

                            </div>


                            {/* Heading */}

                            <h1
                                className="
                                    mt-7
                                    max-w-3xl
                                    text-5xl
                                    font-black
                                    leading-[0.98]
                                    tracking-[-0.055em]
                                    text-slate-950
                                    sm:text-6xl
                                    md:text-7xl
                                    lg:text-[76px]
                                    dark:text-white
                                "
                            >

                                More Than

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
                                    45 Years
                                </span>

                                of Trust.

                            </h1>


                            {/* Description */}

                            <p
                                className="
                                    mt-7
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                    sm:leading-8
                                    dark:text-slate-400
                                "
                            >
                                Deepak Repairing Center has built its
                                reputation through reliable power tools,
                                professional repairs, genuine spare parts
                                and long-term customer relationships.
                            </p>


                            {/* Buttons */}

                            <div
                                className="
                                    mt-8
                                    flex
                                    flex-col
                                    gap-3
                                    sm:flex-row
                                "
                            >

                                <a
                                    href="#our-story"
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-2xl
                                        bg-slate-950
                                        px-6
                                        py-4
                                        text-sm
                                        font-black
                                        text-white
                                        shadow-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-orange-500
                                        hover:shadow-orange-500/25
                                        dark:bg-white
                                        dark:text-slate-950
                                        dark:hover:bg-orange-500
                                        dark:hover:text-white
                                    "
                                >

                                    Explore Our Story

                                    <ArrowRight
                                        size={17}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />

                                </a>


                                <a
                                    href="tel:+919871238460"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white/70
                                        px-6
                                        py-4
                                        text-sm
                                        font-bold
                                        text-slate-700
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-orange-400
                                        hover:text-orange-500
                                        dark:border-white/10
                                        dark:bg-white/[0.04]
                                        dark:text-slate-300
                                        dark:hover:border-orange-500
                                        dark:hover:text-orange-400
                                    "
                                >

                                    <Phone
                                        size={17}
                                        className="text-orange-500"
                                    />

                                    +91 98712 38460

                                </a>

                            </div>


                            {/* Mini stats */}

                            <div
                                className="
                                    mt-12
                                    grid
                                    max-w-2xl
                                    grid-cols-3
                                    gap-2
                                    sm:gap-3
                                "
                            >

                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white/70
                                        p-4
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-orange-300
                                        hover:shadow-xl
                                        sm:rounded-3xl
                                        sm:p-5
                                        dark:border-white/10
                                        dark:bg-white/[0.04]
                                    "
                                >

                                    <p className="text-3xl font-black sm:text-4xl">
                                        45<span className="text-orange-500">+</span>
                                    </p>

                                    <p className="mt-1 text-[10px] font-bold text-slate-500 sm:text-xs dark:text-slate-400">
                                        Years Experience
                                    </p>

                                </div>


                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white/70
                                        p-4
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-orange-300
                                        hover:shadow-xl
                                        sm:rounded-3xl
                                        sm:p-5
                                        dark:border-white/10
                                        dark:bg-white/[0.04]
                                    "
                                >

                                    <p className="text-3xl font-black sm:text-4xl">
                                        1980
                                    </p>

                                    <p className="mt-1 text-[10px] font-bold text-slate-500 sm:text-xs dark:text-slate-400">
                                        Serving Since
                                    </p>

                                </div>


                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white/70
                                        p-4
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-orange-300
                                        hover:shadow-xl
                                        sm:rounded-3xl
                                        sm:p-5
                                        dark:border-white/10
                                        dark:bg-white/[0.04]
                                    "
                                >

                                    <div className="flex items-center gap-1">

                                        <p className="text-3xl font-black sm:text-4xl">
                                            5.0
                                        </p>

                                        <Star
                                            size={16}
                                            fill="currentColor"
                                            className="text-orange-500"
                                        />

                                    </div>

                                    <p className="mt-1 text-[10px] font-bold text-slate-500 sm:text-xs dark:text-slate-400">
                                        Google Rating
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT VISUAL
                        ================================================= */}

                        <div
                            className="
                                relative
                                mx-auto
                                w-full
                                max-w-xl
                            "
                        >

                            {/* Outer frame */}

                            <div
                                className="
                                    relative
                                    rounded-[38px]
                                    border
                                    border-white/80
                                    bg-white/40
                                    p-3
                                    shadow-[0_35px_90px_rgba(15,23,42,0.15)]
                                    backdrop-blur-xl
                                    dark:border-white/10
                                    dark:bg-white/[0.04]
                                "
                            >

                                <div
                                    className="
                                        relative
                                        h-[470px]
                                        overflow-hidden
                                        rounded-[30px]
                                        bg-slate-950
                                        sm:h-[540px]
                                    "
                                >

                                    <img
                                        src="/images/about/shop.jpg"
                                        alt="Deepak Repairing Center workshop"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-[1500ms]
                                            hover:scale-105
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/85
                                            via-black/20
                                            to-transparent
                                        "
                                    />


                                    {/* Image text */}

                                    <div
                                        className="
                                            absolute
                                            bottom-7
                                            left-7
                                            right-7
                                        "
                                    >

                                        <p
                                            className="
                                                text-[10px]
                                                font-black
                                                uppercase
                                                tracking-[0.22em]
                                                text-orange-300
                                            "
                                        >
                                            Deepak Repairing Center
                                        </p>

                                        <h2
                                            className="
                                                mt-2
                                                max-w-md
                                                text-2xl
                                                font-black
                                                text-white
                                                sm:text-3xl
                                            "
                                        >
                                            Experience Behind
                                            Every Repair.
                                        </h2>

                                    </div>

                                </div>

                            </div>


                            {/* Floating 45+ */}

                            <div
                                className="
                                    absolute
                                    -left-3
                                    top-10
                                    rounded-3xl
                                    border
                                    border-white/80
                                    bg-white/90
                                    p-5
                                    shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                                    backdrop-blur-2xl
                                    animate-[bounce_5s_ease-in-out_infinite]
                                    dark:border-white/10
                                    dark:bg-[#111827]/90
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-orange-500
                                            text-white
                                            shadow-lg
                                            shadow-orange-500/25
                                        "
                                    >
                                        <Award size={20} />
                                    </div>

                                    <div>

                                        <p className="text-2xl font-black">
                                            45+
                                        </p>

                                        <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                                            Years Trust
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Floating 1980 */}

                            <div
                                className="
                                    absolute
                                    -right-3
                                    bottom-16
                                    rounded-3xl
                                    border
                                    border-white/80
                                    bg-white/90
                                    p-5
                                    shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                                    backdrop-blur-2xl
                                    animate-[bounce_6s_ease-in-out_infinite]
                                    dark:border-white/10
                                    dark:bg-[#111827]/90
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-slate-950
                                            text-white
                                            dark:bg-white
                                            dark:text-slate-950
                                        "
                                    >
                                        <CalendarDays size={19} />
                                    </div>

                                    <div>

                                        <p className="text-2xl font-black">
                                            1980
                                        </p>

                                        <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                                            Our Beginning
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                STORY
            ========================================================= */}

            <section
                id="our-story"
                className="
                    relative
                    overflow-hidden
                    bg-white
                    px-5
                    py-20
                    dark:bg-[#0a111d]
                    sm:px-6
                    sm:py-28
                    lg:px-8
                "
            >

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        top-20
                        h-96
                        w-96
                        rounded-full
                        bg-orange-500/10
                        blur-[140px]
                    "
                />

                <div className="relative mx-auto max-w-7xl">

                    <div
                        className="
                            grid
                            items-center
                            gap-12
                            lg:grid-cols-[0.9fr_1.1fr]
                            lg:gap-20
                        "
                    >

                        {/* Owner image */}

                        <div className="relative">

                            <div
                                className="
                                    absolute
                                    -left-4
                                    -top-4
                                    h-full
                                    w-full
                                    rounded-[38px]
                                    border-2
                                    border-orange-300/40
                                "
                            />

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[38px]
                                    bg-slate-100
                                    p-3
                                    shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                                    dark:bg-slate-900
                                "
                            >

                                <img
                                    src="/images/about/owner.jpg"
                                    alt="Owner of Deepak Repairing Center"
                                    className="
                                        h-[500px]
                                        w-full
                                        rounded-[30px]
                                        object-cover
                                        transition-transform
                                        duration-1000
                                        hover:scale-105
                                        sm:h-[580px]
                                    "
                                />


                                {/* Bottom overlay */}

                                <div
                                    className="
                                        absolute
                                        bottom-7
                                        left-7
                                        right-7
                                        rounded-2xl
                                        border
                                        border-white/20
                                        bg-black/50
                                        p-5
                                        text-white
                                        backdrop-blur-xl
                                    "
                                >

                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-300">
                                        Built Through Experience
                                    </p>

                                    <p className="mt-2 text-xl font-black">
                                        A legacy of honest service.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Story */}

                        <div>

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-orange-500/10
                                    px-4
                                    py-2
                                    text-xs
                                    font-black
                                    uppercase
                                    tracking-[0.15em]
                                    text-orange-500
                                "
                            >
                                <BadgeCheck size={15} />
                                Our Story
                            </span>


                            <h2
                                className="
                                    mt-6
                                    max-w-2xl
                                    text-4xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-slate-950
                                    sm:text-5xl
                                    dark:text-white
                                "
                            >
                                Experience Behind

                                <span className="text-orange-500">
                                    {" "}The Service.
                                </span>
                            </h2>


                            <p
                                className="
                                    mt-7
                                    text-base
                                    leading-8
                                    text-slate-600
                                    sm:text-lg
                                    dark:text-slate-400
                                "
                            >
                                Deepak Repairing Center has grown through
                                years of hands-on experience, dedication
                                and strong relationships with customers.
                            </p>

                            <p
                                className="
                                    mt-5
                                    text-base
                                    leading-8
                                    text-slate-600
                                    sm:text-lg
                                    dark:text-slate-400
                                "
                            >
                                From power tool sales and professional
                                repairs to genuine spare parts, our focus
                                has always been on providing dependable
                                solutions and quality workmanship.
                            </p>


                            {/* Timeline */}

                            <div className="relative mt-10 space-y-7">

                                <div
                                    className="
                                        absolute
                                        left-[15px]
                                        top-3
                                        h-[calc(100%-24px)]
                                        w-px
                                        bg-orange-200
                                        dark:bg-orange-500/20
                                    "
                                />

                                {[
                                    {
                                        year: "1980",
                                        title: "The Beginning",
                                        text: "A journey built around practical knowledge and customer trust.",
                                    },
                                    {
                                        year: "45+",
                                        title: "Years of Experience",
                                        text: "Growing through repairs, power tools and genuine spare parts.",
                                    },
                                    {
                                        year: "Today",
                                        title: "Still Moving Forward",
                                        text: "Continuing the same commitment to reliable service.",
                                    },
                                ].map((item) => (

                                    <div
                                        key={item.year}
                                        className="relative flex gap-5"
                                    >

                                        <div
                                            className="
                                                relative
                                                z-10
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border-4
                                                border-white
                                                bg-orange-500
                                                shadow-md
                                                dark:border-[#0a111d]
                                            "
                                        />

                                        <div>

                                            <div className="flex items-center gap-3">

                                                <span className="text-xs font-black uppercase tracking-wider text-orange-500">
                                                    {item.year}
                                                </span>

                                                <h3 className="font-black text-slate-900 dark:text-white">
                                                    {item.title}
                                                </h3>

                                            </div>

                                            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>


                            {/* Highlights */}

                            <div className="mt-10 grid gap-3 sm:grid-cols-2">

                                {[
                                    {
                                        icon: Wrench,
                                        title: "Expert Repairs",
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: "Genuine Parts",
                                    },
                                ].map((item) => {

                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="
                                                flex
                                                items-center
                                                gap-4
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                bg-slate-50
                                                p-4
                                                transition-all
                                                duration-300
                                                hover:-translate-y-1
                                                hover:border-orange-300
                                                dark:border-white/10
                                                dark:bg-white/[0.03]
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
                                                    text-orange-500
                                                "
                                            >
                                                <Icon size={20} />
                                            </div>

                                            <div>

                                                <p className="text-sm font-black text-slate-900 dark:text-white">
                                                    {item.title}
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    Quality you can trust
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                MACHINE SHOWCASE
            ========================================================= */}

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

                {/* Glows */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        top-20
                        h-96
                        w-96
                        rounded-full
                        bg-orange-500/10
                        blur-[140px]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-40
                        bottom-20
                        h-96
                        w-96
                        rounded-full
                        bg-orange-500/10
                        blur-[140px]
                    "
                />


                <div className="relative mx-auto max-w-7xl">

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-6
                            md:flex-row
                            md:items-end
                        "
                    >

                        <div>

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-orange-400/20
                                    bg-orange-500/10
                                    px-4
                                    py-2
                                    text-[10px]
                                    font-black
                                    uppercase
                                    tracking-[0.2em]
                                    text-orange-400
                                "
                            >
                                <Wrench size={13} />
                                Our Machines
                            </span>

                            <h2
                                className="
                                    mt-5
                                    text-4xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    sm:text-5xl
                                "
                            >
                                A Workshop Built

                                <span className="block text-orange-500">
                                    Around Expertise.
                                </span>
                            </h2>

                        </div>


                        <p
                            className="
                                max-w-md
                                text-sm
                                leading-7
                                text-slate-400
                                sm:text-base
                            "
                        >
                            A range of professional power tools and
                            equipment handled with experience and care.
                        </p>

                    </div>


                    {/* Machine grid */}

                    <div
                        className="
                            mt-12
                            grid
                            grid-cols-2
                            gap-3
                            sm:gap-4
                            md:grid-cols-4
                        "
                    >

                        {machines.map((machine, index) => {

                            const large =
                                index === 0 || index === 5;

                            return (
                                <div
                                    key={machine.name}
                                    className={`
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[24px]
                                        border
                                        border-white/10
                                        bg-slate-900
                                        ${large
                                            ? "md:col-span-2 md:row-span-2"
                                            : ""
                                        }
                                    `}
                                >

                                    <div
                                        className={`
                                            relative
                                            ${large
                                                ? "h-[350px] sm:h-[430px]"
                                                : "h-[210px] sm:h-[250px]"
                                            }
                                        `}
                                    >

                                        <img
                                            src={machine.image}
                                            alt={machine.name}
                                            loading="lazy"
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-110
                                            "
                                        />


                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black
                                                via-black/10
                                                to-transparent
                                            "
                                        />


                                        {/* Number */}

                                        <span
                                            className="
                                                absolute
                                                right-4
                                                top-4
                                                rounded-full
                                                border
                                                border-white/20
                                                bg-black/30
                                                px-3
                                                py-1
                                                text-[9px]
                                                font-black
                                                text-white
                                                backdrop-blur-md
                                            "
                                        >
                                            0{index + 1}
                                        </span>


                                        {/* Content */}

                                        <div
                                            className="
                                                absolute
                                                bottom-0
                                                left-0
                                                right-0
                                                p-4
                                                sm:p-5
                                            "
                                        >

                                            <p
                                                className="
                                                    text-[8px]
                                                    font-black
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-orange-400
                                                "
                                            >
                                                Power Tool
                                            </p>

                                            <div className="mt-1 flex items-end justify-between gap-2">

                                                <h3
                                                    className="
                                                        text-sm
                                                        font-black
                                                        text-white
                                                        sm:text-lg
                                                    "
                                                >
                                                    {machine.name}
                                                </h3>

                                                <span
                                                    className="
                                                        flex
                                                        h-8
                                                        w-8
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-white/10
                                                        text-white
                                                        opacity-0
                                                        backdrop-blur-md
                                                        transition-all
                                                        duration-300
                                                        group-hover:translate-x-0
                                                        group-hover:opacity-100
                                                    "
                                                >
                                                    <ArrowUpRight size={15} />
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                TRUST
            ========================================================= */}

            <section
                className="
                    bg-[#f6f5f1]
                    px-5
                    py-20
                    dark:bg-[#070B14]
                    sm:px-6
                    sm:py-28
                    lg:px-8
                "
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-3xl text-center">

                        <p
                            className="
                                text-[10px]
                                font-black
                                uppercase
                                tracking-[0.22em]
                                text-orange-500
                            "
                        >
                            Why Choose Us
                        </p>

                        <h2
                            className="
                                mt-4
                                text-4xl
                                font-black
                                tracking-tight
                                text-slate-950
                                sm:text-5xl
                                dark:text-white
                            "
                        >
                            Experience You Can

                            <span className="text-orange-500">
                                {" "}Rely On.
                            </span>
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-sm
                                leading-7
                                text-slate-500
                                dark:text-slate-400
                            "
                        >
                            Reliable tools, professional repairs and
                            genuine parts backed by years of experience.
                        </p>

                    </div>


                    <div
                        className="
                            mt-12
                            grid
                            gap-4
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {[
                            {
                                value: "45+",
                                title: "Years",
                                text: "of experience",
                                icon: Award,
                            },
                            {
                                value: "Expert",
                                title: "Repairs",
                                text: "professional service",
                                icon: Wrench,
                            },
                            {
                                value: "Genuine",
                                title: "Parts",
                                text: "quality components",
                                icon: ShieldCheck,
                            },
                            {
                                value: "5.0",
                                title: "Rating",
                                text: "customer trust",
                                icon: Star,
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[28px]
                                        border
                                        border-slate-200
                                        bg-white
                                        p-6
                                        shadow-[0_20px_50px_rgba(15,23,42,0.06)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-orange-300
                                        hover:shadow-[0_25px_60px_rgba(249,115,22,0.12)]
                                        dark:border-white/10
                                        dark:bg-white/[0.035]
                                    "
                                >

                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-0
                                            h-24
                                            w-24
                                            rounded-full
                                            bg-orange-500/10
                                            blur-2xl
                                            transition-transform
                                            duration-500
                                            group-hover:scale-150
                                        "
                                    />

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-orange-500/10
                                            text-orange-500
                                        "
                                    >
                                        <Icon size={20} />
                                    </div>

                                    <p
                                        className="
                                            relative
                                            mt-6
                                            text-2xl
                                            font-black
                                            text-slate-950
                                            dark:text-white
                                        "
                                    >
                                        {item.value}
                                    </p>

                                    <p
                                        className="
                                            relative
                                            mt-1
                                            text-sm
                                            font-black
                                            text-orange-500
                                        "
                                    >
                                        {item.title}
                                    </p>

                                    <p
                                        className="
                                            relative
                                            mt-2
                                            text-xs
                                            font-medium
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                                    >
                                        {item.text}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section
                className="
                    bg-[#f6f5f1]
                    px-5
                    pb-20
                    dark:bg-[#070B14]
                    sm:px-6
                    sm:pb-28
                    lg:px-8
                "
            >

                <div
                    className="
                        relative
                        mx-auto
                        max-w-5xl
                        overflow-hidden
                        rounded-[34px]
                        bg-gradient-to-br
                        from-orange-500
                        via-orange-500
                        to-orange-600
                        px-7
                        py-14
                        text-center
                        shadow-[0_30px_90px_rgba(249,115,22,0.25)]
                        sm:px-12
                        sm:py-16
                    "
                >

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
                            -bottom-20
                            -left-20
                            h-60
                            w-60
                            rounded-full
                            bg-black/10
                            blur-3xl
                        "
                    />


                    <div className="relative">

                        <div
                            className="
                                mx-auto
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-white/15
                                text-white
                                backdrop-blur-xl
                            "
                        >
                            <Wrench size={24} />
                        </div>

                        <h2
                            className="
                                mt-6
                                text-3xl
                                font-black
                                text-white
                                sm:text-4xl
                            "
                        >
                            Your Tool.
                            <span className="block">
                                Our Expertise.
                            </span>
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-sm
                                leading-7
                                text-orange-50
                                sm:text-base
                            "
                        >
                            Looking for reliable power tools,
                            professional repairs or genuine spare parts?
                            Talk to us.
                        </p>


                        <div
                            className="
                                mt-8
                                flex
                                flex-col
                                justify-center
                                gap-3
                                sm:flex-row
                            "
                        >

                            <a
                                href="tel:+919871238460"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
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

                                <Phone size={17} />

                                Call Now

                            </a>


                            <a
                                href="/contact"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
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

                                Contact Us

                                <ArrowUpRight size={17} />

                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default About;