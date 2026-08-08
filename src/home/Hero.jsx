import { ArrowRight, Phone, ShieldCheck, Wrench } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* ================= Background Video ================= */}

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/cover.mp4" type="video/mp4" />
            </video>

            {/* ================= Overlay ================= */}

            <div className="absolute inset-0 bg-black/60"></div>

            {/* ================= Hero Content ================= */}

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">

                <div className="max-w-3xl">

                    {/* Badge */}

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-300 backdrop-blur-xl">

                        <ShieldCheck size={18} />

                        Trusted Since 1980 • 45+ Years Experience

                    </div>

                    {/* Heading */}

                    <h1 className="font-heading text-5xl font-extrabold leading-tight text-white md:text-7xl">

                        Power Tool

                        <span className="block text-orange-400">

                            Sales & Repair

                        </span>

                        Center

                    </h1>

                    {/* Description */}

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">

                        We specialize in the sales and repair of Drill Machines,
                        Demolition Hammers, Rotary Hammers,
                        Angle Grinders, Marble Cutters,
                        Tile Cutters and Industrial Power Tools
                        with genuine spare parts and expert technicians.

                    </p>

                    {/* Features */}

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-lg">

                            <Wrench className="text-orange-400" />

                            <span className="text-white">

                                Genuine Spare Parts

                            </span>

                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-lg">

                            <ShieldCheck className="text-orange-400" />

                            <span className="text-white">

                                Trusted Repair Service

                            </span>

                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-5">

                        <button className="group flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600">

                            Explore Products

                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />

                        </button>

                        <button className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/20">

                            <Phone size={18} />

                            Call Now

                        </button>

                    </div>
                    {/* Bottom Info Cards */}

                    <div className="mt-14 grid gap-5 sm:grid-cols-3">

                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/20">

                            <h2 className="text-4xl font-bold text-orange-400">
                                45+
                            </h2>

                            <p className="mt-2 text-sm text-slate-200">
                                Years of Experience
                            </p>

                        </div>

                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/20">

                            <h2 className="text-4xl font-bold text-orange-400">
                                Sales
                            </h2>

                            <p className="mt-2 text-sm text-slate-200">
                                Industrial Power Tools
                            </p>

                        </div>

                        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/20">

                            <h2 className="text-4xl font-bold text-orange-400">
                                Repair
                            </h2>

                            <p className="mt-2 text-sm text-slate-200">
                                All Major Brands
                            </p>

                        </div>

                    </div>

                </div>

                {/* Floating Card */}

                <div className="absolute bottom-12 right-6 hidden rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-xl lg:block">

                    <p className="text-sm font-semibold text-orange-300">
                        Trusted Workshop
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                        45+
                    </h3>

                    <p className="text-sm text-slate-300">
                        Years Serving Customers
                    </p>

                </div>

            </div>

            {/* Bottom Gradient */}

            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent"></div>

            {/* Scroll Down */}

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex">

                <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white">

                    <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white"></div>

                </div>

            </div>

        </section>
    );
};

export default Hero;