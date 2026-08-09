import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
    Clock,
    ExternalLink,
    Code2,
    Heart,
} from "lucide-react";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden bg-[#080c16] text-white">

            {/* ================= GLOW ================= */}

            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />

            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />

            {/* ================= MAIN ================= */}

            <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

                    {/* =====================================================
              BRAND
          ===================================================== */}

                    <div className="lg:col-span-1">

                        <div className="flex items-center gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xl font-black shadow-lg shadow-orange-500/20">
                                D
                            </div>

                            <div>
                                <h2 className="text-xl font-black">
                                    Deepak
                                    <span className="text-orange-500">
                                        {" "}Repairing Center
                                    </span>
                                </h2>

                                <p className="mt-1 text-xs text-slate-500">
                                    Power Tools • Repair • Spare Parts
                                </p>
                            </div>

                        </div>


                        <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
                            Trusted destination for power tool sales, genuine spare
                            parts and professional repair services.
                        </p>


                        {/* Availability */}

                        <div className="mt-7 flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">

                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                <Clock size={18} />
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                    Availability
                                </p>

                                <p className="mt-0.5 text-sm font-semibold text-white">
                                    24 Hours Available
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* =====================================================
              QUICK LINKS
          ===================================================== */}

                    <div>

                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                            Quick Links
                        </h3>

                        <div className="mt-6 space-y-4">

                            {[
                                ["Home", "/"],
                                ["About", "/about"],
                                ["Products", "/products"],
                                ["Services", "/services"],
                                ["Contact", "/contact"],
                            ].map(([name, link]) => (

                                <a
                                    key={name}
                                    href={link}
                                    className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                                >

                                    <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />

                                    {name}

                                </a>

                            ))}

                        </div>

                    </div>


                    {/* =====================================================
              CONTACT
          ===================================================== */}

                    <div>

                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-5">

                            {/* Phone */}

                            <a
                                href="tel:+919871238460"
                                className="group flex gap-3"
                            >

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <Phone size={18} />
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-sm text-slate-300 group-hover:text-white">
                                        +91 98712 38460
                                    </p>
                                </div>

                            </a>


                            {/* Email */}

                            <a
                                href="mailto:harshi786108@gmail.com"
                                className="group flex gap-3"
                            >

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <Mail size={18} />
                                </div>

                                <div className="min-w-0">

                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Email
                                    </p>

                                    <p className="mt-1 break-all text-sm text-slate-300 group-hover:text-white">
                                        harshi786108@gmail.com
                                    </p>

                                </div>

                            </a>


                            {/* Location */}

                            <a
                                href="https://www.google.com/maps/place/Deepak+repairing+center/@28.7443679,77.0979262,17z"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex gap-3"
                            >

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                    <MapPin size={18} />
                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wider text-slate-500">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-300 group-hover:text-white">
                                        Near Sunhery Chowk,
                                        <br />
                                        Prahladpur, Rohini,
                                        <br />
                                        Delhi - 110042
                                    </p>

                                </div>

                            </a>

                        </div>

                    </div>


                    {/* =====================================================
              DEVELOPER
          ===================================================== */}

                    <div>

                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                            Developer
                        </h3>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                <Code2 size={21} />
                            </div>

                            <p className="mt-5 text-xs uppercase tracking-wider text-slate-500">
                                Designed & Developed By
                            </p>

                            <h4 className="mt-2 text-2xl font-black">
                                Harshita
                            </h4>

                            <p className="mt-1 text-sm text-slate-400">
                                Full Stack Developer
                            </p>


                            {/* Developer Links */}

                            <div className="mt-6 grid grid-cols-2 gap-2">

                                <a
                                    href="https://github.com/harshitasingh108"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2.5
                    text-center
                    text-xs
                    font-semibold
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-orange-500/40
                    hover:bg-orange-500
                    hover:text-white
                  "
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/harshita-singh-284750305/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2.5
                    text-center
                    text-xs
                    font-semibold
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-orange-500/40
                    hover:bg-orange-500
                    hover:text-white
                  "
                                >
                                    LinkedIn
                                </a>

                                <a
                                    href="mailto:harshi786108@gmail.com"
                                    className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2.5
                    text-center
                    text-xs
                    font-semibold
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-orange-500/40
                    hover:bg-orange-500
                    hover:text-white
                  "
                                >
                                    Email
                                </a>

                                <a
                                    href="tel:+918287200132"
                                    className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2.5
                    text-center
                    text-xs
                    font-semibold
                    text-slate-300
                    transition-all
                    duration-300
                    hover:border-orange-500/40
                    hover:bg-orange-500
                    hover:text-white
                  "
                                >
                                    Call
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
            DEVELOPER STRIP
        ===================================================== */}

                <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent px-5 py-5 sm:px-7">

                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

                        <div>

                            <p className="text-sm font-semibold text-slate-300">
                                Website crafted by{" "}
                                <span className="text-orange-400">
                                    Harshita
                                </span>
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                Full Stack Development • UI • Backend
                            </p>

                        </div>

                        <a
                            href="mailto:harshi786108@gmail.com"
                            className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-orange-500/20
                bg-orange-500/10
                px-4
                py-2.5
                text-xs
                font-semibold
                text-orange-400
                transition-all
                duration-300
                hover:bg-orange-500
                hover:text-white
              "
                        >
                            Get In Touch
                            <ExternalLink size={14} />
                        </a>

                    </div>

                </div>


                {/* =====================================================
            BOTTOM
        ===================================================== */}

                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">

                    <p className="text-xs text-slate-500 sm:text-sm">
                        © 2026 Deepak Repairing Center. All Rights Reserved.
                    </p>

                    <p className="flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
                        Made with
                        <Heart
                            size={13}
                            className="fill-orange-500 text-orange-500"
                        />
                        by
                        <span className="font-semibold text-orange-400">
                            Harshita
                        </span>
                    </p>

                    <button
                        onClick={scrollTop}
                        aria-label="Back to top"
                        className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-orange-400
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-orange-500
              hover:text-white
            "
                    >
                        <ArrowUp size={17} />
                    </button>

                </div>

            </div>

        </footer>
    );
};

export default Footer;