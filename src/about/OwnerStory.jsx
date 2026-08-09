import { Award, BadgeCheck, Wrench, ShieldCheck } from "lucide-react";

const OwnerStory = () => {
    return (
        <section
            id="our-story"
            className="relative overflow-hidden bg-[#F8F7F4] px-6 py-24"
        >
            {/* Background Glow */}

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-400/10 blur-[120px]" />

            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Section Heading */}

                <div className="mb-16 max-w-3xl">

                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                        <Award size={17} />
                        Our Story
                    </span>

                    <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                        The Person Behind
                        <span className="text-orange-500"> The Work</span>
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Built through years of experience, dedication and a strong
                        commitment to quality service.
                    </p>

                </div>

                {/* Main Content */}

                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* ================= OWNER IMAGE ================= */}

                    <div className="relative">

                        {/* Decorative Border */}

                        <div className="absolute -left-4 -top-4 h-full w-full rounded-[35px] border-2 border-orange-200" />

                        <div
                            className="
                relative
                overflow-hidden
                rounded-[35px]
                bg-white
                p-3
                shadow-[0_30px_70px_rgba(15,23,42,0.12)]
              "
                        >

                            <img
                                src="/images/owner/owner.jpg"
                                alt="Owner of Deepak Repairing Center"
                                className="
                  h-[520px]
                  w-full
                  rounded-[28px]
                  object-contain
                  bg-slate-100
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
                            />

                            {/* Experience Badge */}

                            <div
                                className="
                  absolute
                  bottom-8
                  left-8
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/90
                  px-6
                  py-4
                  shadow-xl
                  backdrop-blur-xl
                "
                            >

                                <p className="text-3xl font-black text-orange-500">
                                    45+
                                </p>

                                <p className="text-sm font-semibold text-slate-700">
                                    Years of Experience
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ================= STORY ================= */}

                    <div>

                        <p className="text-lg leading-9 text-slate-600">

                            Deepak Repairing Center has grown through years of hands-on
                            experience, trusted customer relationships and a commitment
                            to quality workmanship.

                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">

                            From power tool sales to professional repair services and
                            genuine spare parts, the focus has always remained on
                            providing dependable solutions and helping customers choose
                            the right tools for their work.

                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-600">

                            Today, that same dedication continues with the same goal —
                            honest service, reliable repairs and long-term customer trust.

                        </p>

                        {/* Highlights */}

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">

                            {/* Card 1 */}

                            <div
                                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-300
                  hover:shadow-lg
                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                                        <BadgeCheck size={23} />
                                    </div>

                                    <div>

                                        <h3 className="font-bold text-slate-900">
                                            Trusted Service
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Built on experience
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Card 2 */}

                            <div
                                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-300
                  hover:shadow-lg
                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                                        <Wrench size={23} />
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

                            {/* Card 3 */}

                            <div
                                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-300
                  hover:shadow-lg
                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                                        <ShieldCheck size={23} />
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

                            {/* Card 4 */}

                            <div
                                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-300
                  hover:shadow-lg
                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                                        <Award size={23} />
                                    </div>

                                    <div>

                                        <h3 className="font-bold text-slate-900">
                                            45+ Years
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Experience matters
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OwnerStory;