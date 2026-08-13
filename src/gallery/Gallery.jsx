import {
    ArrowRight,
    Images,
    Wrench,
    Sparkles,
    MapPin,
    Navigation,
    ExternalLink,
} from "lucide-react";
import { MAP_EMBED_URL, MAP_URL, openGoogleMaps } from "../constants/map";

const galleryItems = [
    {
        image: "/images/products/air-blower.jpg",
        title: "Air Blower",
        category: "Power Tools",
    },
    {
        image: "/images/products/angle-grinder.png",
        title: "Angle Grinder",
        category: "Grinding Tools",
    },
    {
        image: "/images/products/armature.png",
        title: "Armature",
        category: "Spare Parts",
    },
    {
        image: "/images/products/bearning.jpg",
        title: "Machine Bearings",
        category: "Spare Parts",
    },
    {
        image: "/images/products/bit.png",
        title: "Drill Bits",
        category: "Accessories",
    },
    {
        image: "/images/products/cutting-tool.png",
        title: "Cutting Tool",
        category: "Cutting Tools",
    },
    {
        image: "/images/products/demolition.png",
        title: "Demolition Hammer",
        category: "Heavy Duty",
    },
    {
        image: "/images/products/drill.png",
        title: "Professional Drill",
        category: "Power Tools",
    },
    {
        image: "/images/products/grinding-wheel.png",
        title: "Grinding Wheels",
        category: "Accessories",
    },
    {
        image: "/images/products/hammer-drill.png",
        title: "Hammer Drill",
        category: "Drilling Tools",
    },
    {
        image: "/images/products/hardware.webp",
        title: "Hardware Collection",
        category: "Hardware",
    },
    {
        image: "/images/products/hitachi.png",
        title: "Professional Machine",
        category: "Power Tools",
    },
    {
        image: "/images/products/hole-saw.png",
        title: "Hole Saw",
        category: "Accessories",
    },
    {
        image: "/images/products/images.jpg",
        title: "Tool Collection",
        category: "Our Collection",
    },
    {
        image: "/images/products/machine-collection.jpg",
        title: "Machine Collection",
        category: "Machines",
    },
    {
        image: "/images/products/machine-tools.png",
        title: "Machine Tools",
        category: "Workshop",
    },
    {
        image: "/images/products/makita-hand-tool.png",
        title: "Makita Hand Tools",
        category: "Hand Tools",
    },
    {
        image: "/images/products/manufacturing-tools.png",
        title: "Manufacturing Tools",
        category: "Industrial Tools",
    },
    {
        image: "/images/products/marble-cutter.png",
        title: "Marble Cutter",
        category: "Cutting Tools",
    },
    {
        image: "/images/products/mechanic-hand-tools.png",
        title: "Mechanic Hand Tools",
        category: "Hand Tools",
    },
    {
        image: "/images/products/multifunction-tool.png",
        title: "Multifunction Tool",
        category: "Workshop Tools",
    },
    {
        image: "/images/products/polisher-angle-grinder.png",
        title: "Polisher & Grinder",
        category: "Grinding Tools",
    },
    {
        image: "/images/products/power-drills.png",
        title: "Power Drills",
        category: "Power Tools",
    },
    {
        image: "/images/products/power-tools-bearing.png",
        title: "Power Tool Bearings",
        category: "Spare Parts",
    },
    {
        image: "/images/products/power.jpg",
        title: "Power Tool Components",
        category: "Spare Parts",
    },
    {
        image: "/images/products/renting-cutting-tools.png",
        title: "Cutting Tools",
        category: "Tools",
    },
    {
        image: "/images/products/rotary-hammer.png",
        title: "Rotary Hammer",
        category: "Heavy Duty",
    },
    {
        image: "/images/products/rotor_machine_armature.png",
        title: "Rotor & Armature",
        category: "Spare Parts",
    },
    {
        image: "/images/products/tile-cutter.png",
        title: "Tile Cutter",
        category: "Cutting Tools",
    },
    {
        image: "/images/products/woodcutter-machine.png",
        title: "Wood Cutter Machine",
        category: "Cutting Tools",
    },
];

const Gallery = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-950">

            {/* =====================================================
          FULL PAGE BACKGROUND VIDEO
      ===================================================== */}

            <div className="pointer-events-none absolute inset-0">

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
            opacity-[0.28]
          "
                >
                    <source
                        src="https://res.cloudinary.com/wziscl0n/video/upload/v1786389753/blade.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Dark cinematic overlay */}

                <div className="absolute inset-0 bg-slate-950/55" />

                {/* Light center glow */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.16),transparent_42%)]" />

                {/* Orange glow */}

                <div className="absolute -left-40 top-[25%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

                <div className="absolute -right-40 top-[55%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

            </div>


            {/* =====================================================
          CONTENT ABOVE VIDEO
      ===================================================== */}

            <div className="relative z-10">


                {/* ===================================================
            HERO
        =================================================== */}

                <section className="px-5 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:pt-28">

                    <div className="mx-auto max-w-7xl">

                        <div className="mx-auto max-w-4xl text-center">

                            {/* Badge */}

                            <div
                                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-300
                  shadow-lg
                  backdrop-blur-xl
                "
                            >

                                <Images size={16} />

                                Our Gallery

                            </div>


                            {/* Heading */}

                            <h1
                                className="
                  mt-7
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
                            >

                                Tools That
                                <span className="text-orange-400">
                                    {" "}Power
                                </span>

                                <br />

                                Your Work.

                            </h1>


                            <p
                                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-300
                  sm:text-lg
                  sm:leading-8
                "
                            >
                                Explore our collection of professional machines,
                                power tools, accessories and genuine spare parts.
                            </p>


                            {/* Small stats */}

                            <div className="mt-8 flex flex-wrap justify-center gap-3">

                                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                                    Professional Tools
                                </div>

                                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                                    Genuine Spare Parts
                                </div>

                                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                                    Repair Support
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================
            FEATURED GLASS PANEL
        =================================================== */}

                <section className="px-5 pb-12 sm:px-6 sm:pb-16">

                    <div className="mx-auto max-w-7xl">

                        <div
                            className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/15
                bg-white/[0.08]
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                sm:rounded-[40px]
                sm:p-8
                lg:p-10
              "
                        >

                            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                                <div className="max-w-2xl">

                                    <div className="flex items-center gap-2 text-orange-400">

                                        <Sparkles size={17} />

                                        <span className="text-xs font-bold uppercase tracking-[0.18em]">
                                            Deepak Repairing Center
                                        </span>

                                    </div>

                                    <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl lg:text-4xl">

                                        Professional Tools.
                                        <span className="text-orange-400">
                                            {" "}Professional Results.
                                        </span>

                                    </h2>

                                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">

                                        Quality machines and tools for construction,
                                        workshop and professional requirements.

                                    </p>

                                </div>


                                <a
                                    href="/contact"
                                    className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-orange-500
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-orange-600
                  "
                                >

                                    Enquire Now

                                    <ArrowRight size={18} />

                                </a>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ===================================================
            PREMIUM CARDS
        =================================================== */}

                <section className="px-5 pb-20 sm:px-6 sm:pb-28">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-8 sm:mb-10">

                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                                Explore Collection
                            </p>

                            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                                Machines & Tools
                            </h2>

                        </div>


                        {/* Card Grid */}

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {galleryItems.map((item, index) => (

                                <article
                                    key={`${item.title}-${index}`}
                                    className="
                    group
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/15
                    bg-white/[0.10]
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-orange-400/40
                    hover:bg-white/[0.15]
                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  "
                                >

                                    {/* Image */}

                                    <div className="relative flex h-60 items-center justify-center overflow-hidden bg-white/[0.06] p-7 sm:h-64">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.src = "/images/products/machine-tools.png";
                                            }}
                                            className="
                        h-full
                        w-full
                        object-contain
                        drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                                        />


                                        {/* Category */}

                                        <div
                                            className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-white
                        backdrop-blur-xl
                      "
                                        >
                                            {item.category}
                                        </div>

                                    </div>


                                    {/* Card Content */}

                                    <div className="p-5 sm:p-6">

                                        <h3 className="text-lg font-black text-white">
                                            {item.title}
                                        </h3>


                                        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-300">

                                            <Wrench
                                                size={14}
                                                className="text-orange-400"
                                            />

                                            Deepak Repairing Center

                                        </div>


                                        <a
                                            href="/contact"
                                            className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-white/15
                        bg-white/[0.06]
                        px-4
                        py-3
                        text-xs
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:border-orange-400
                        hover:bg-orange-500
                      "
                                        >

                                            Enquire About This

                                            <ArrowRight size={15} />

                                        </a>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ===================================================
            MAP
        =================================================== */}

                <section className="px-5 pb-16 sm:px-6 sm:pb-24">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-7 text-center">

                            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-orange-300 backdrop-blur-xl">

                                <MapPin size={15} />

                                Find Us

                            </div>

                            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                                Visit Our Store
                            </h2>

                        </div>


                        <div
                            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/15
                bg-white/10
                p-2
                shadow-[0_25px_80px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
                sm:rounded-[40px]
                sm:p-3
              "
                        >

                            <div className="relative overflow-hidden rounded-[26px] sm:rounded-[32px]">

                                <iframe
                                    src={MAP_EMBED_URL}
                                    width="100%"
                                    height="430"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="Deepak Repairing Center Location"
                                    className="h-[300px] w-full sm:h-[380px] lg:h-[430px]"
                                />

                                <a
                                    href={MAP_URL}
                                    onClick={openGoogleMaps}
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

                    </div>

                </section>

            </div>

        </main>
    );
};

export default Gallery;