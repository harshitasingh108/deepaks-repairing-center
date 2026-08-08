import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Wrench } from "lucide-react";

const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Gallery", path: "/gallery" },
    { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-md">

                        <Wrench
                            size={24}
                            className="text-white"
                        />

                    </div>

                    <div>

                        <h1 className="text-lg font-bold text-slate-900">
                            Deepak
                        </h1>

                        <p className="text-sm text-slate-500">
                            Repairing Center
                        </p>

                    </div>

                </NavLink>

                {/* Desktop Menu */}

                <ul className="hidden lg:flex items-center gap-8">

                    {navLinks.map((link) => (

                        <li key={link.id}>

                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "text-slate-700 hover:text-blue-600 transition"
                                }
                            >
                                {link.name}
                            </NavLink>

                        </li>

                    ))}

                </ul>

                {/* Right Side */}

                <div className="hidden lg:flex items-center gap-4">

                    <button
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition"
                    >
                        EN | हिन्दी
                    </button>

                    <a
                        href="tel:+91XXXXXXXXXX"
                        className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
                    >
                        <Phone size={18} />
                        Call Now
                    </a>

                </div>

                {/* Mobile Button */}

                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}

            {isOpen && (

                <div className="lg:hidden border-t border-slate-200 bg-white">

                    <div className="flex flex-col px-5 py-4">

                        {navLinks.map((link) => (

                            <NavLink
                                key={link.id}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-3 mb-2 transition
                  ${isActive
                                        ? "bg-blue-50 text-blue-600 font-semibold"
                                        : "text-slate-700 hover:bg-slate-100"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>

                        ))}

                        <button
                            className="mt-4 rounded-full border border-slate-300 py-3 text-sm font-medium"
                        >
                            🌐 English | हिन्दी
                        </button>

                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
                        >
                            <Phone size={18} />
                            Call Now
                        </a>

                    </div>

                </div>

            )}

        </nav>
    );
};

export default Navbar;