import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#0B1120] text-white">

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company */}

                    <div>

                        <h2 className="text-3xl font-black">

                            Deepak
                            <span className="text-orange-500">
                                {" "}Repairing Center
                            </span>

                        </h2>

                        <p className="mt-6 leading-8 text-slate-300">

                            Trusted destination for Power Tool Sales,
                            Genuine Spare Parts and Professional
                            Repair Services.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-bold">

                            Quick Links

                        </h3>

                        <ul className="mt-6 space-y-4 text-slate-300">

                            <li><a href="/">Home</a></li>

                            <li><a href="/about">About</a></li>

                            <li><a href="/products">Products</a></li>

                            <li><a href="/services">Services</a></li>

                            <li><a href="/contact">Contact</a></li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-bold">

                            Contact

                        </h3>

                        <div className="mt-6 space-y-5">

                            <div className="flex gap-3">

                                <Phone className="text-orange-500" />

                                <a
                                    href="tel:+919871238460"
                                    className="text-slate-300 hover:text-orange-400"
                                >
                                    +91 98712 38460
                                </a>

                            </div>

                            <div className="flex gap-3">

                                <Mail className="text-orange-500" />

                                <a
                                    href="mailto:harshi786108@gmail.com"
                                    className="text-slate-300 hover:text-orange-400"
                                >
                                    harshi786108@gmail.com
                                </a>

                            </div>

                            <div className="flex gap-3">

                                <MapPin className="text-orange-500" />

                                <p className="text-slate-300">

                                    Near Sunhery Chowk,
                                    Prahladpur,
                                    Rohini,
                                    Delhi - 110042

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Developer */}

                    <div>

                        <h3 className="text-xl font-bold">

                            Designed & Developed By

                        </h3>

                        <h4 className="mt-5 text-2xl font-black">

                            Harshita Singh

                        </h4>

                        <p className="mt-3 text-slate-300">

                            Full Stack Developer

                        </p>

                        <div className="mt-8 flex gap-4">

                            <a
                                href="https://github.com/harshitasingh108"
                                target="_blank"
                                rel="noreferrer"
                                className="
                  rounded-2xl
                  bg-slate-800
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-500
                "
                            >

                                <FaGithub size={22} />

                            </a>

                            <a
                                href="https://www.linkedin.com/in/harshita-singh-284750305/"
                                target="_blank"
                                rel="noreferrer"
                                className="
                  rounded-2xl
                  bg-slate-800
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-orange-500
                "
                            >

                                <FaLinkedin size={22} />

                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 border-t border-slate-700 pt-8">

                    <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

                        <p className="text-slate-400">

                            © 2026 Deepak Repairing Center.
                            All Rights Reserved.

                        </p>

                        <p className="text-center text-slate-400">

                            Crafted with ❤️ by
                            <span className="ml-2 font-semibold text-orange-400">

                                Harshita Singh

                            </span>

                        </p>

                        <button
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                            className="
                rounded-full
                bg-orange-500
                p-4
                transition-all
                duration-300
                hover:scale-110
              "
                        >

                            <ArrowUp size={18} />

                        </button>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;