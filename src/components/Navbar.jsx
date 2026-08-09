import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useIntl } from "react-intl";

import {
    Menu,
    X,
    Phone,
    Wrench,
    Sun,
    Moon,
    Languages,
    ChevronDown,
    ArrowUpRight,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const Navbar = ({ language, changeLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const { darkMode, toggleTheme } = useTheme();
    const intl = useIntl();

    const navLinks = [
        {
            name: intl.formatMessage({ id: "nav.home" }),
            path: "/",
        },
        {
            name: intl.formatMessage({ id: "nav.gallery" }),
            path: "/gallery",
        },
        {
            name: intl.formatMessage({ id: "nav.services" }),
            path: "/services",
        },
        {
            name: intl.formatMessage({ id: "nav.about" }),
            path: "/about",
        },
        {
            name: intl.formatMessage({ id: "nav.contact" }),
            path: "/contact",
        },
    ];

    const selectLanguage = (newLanguage) => {
        changeLanguage(newLanguage);
        setLanguageOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">

            <nav
                className={`
                    relative mx-auto max-w-7xl
                    overflow-visible
                    rounded-[22px]
                    border
                    backdrop-blur-2xl
                    transition-all duration-500

                    ${darkMode
                        ? `
                                border-white/[0.08]
                                bg-[#0a101d]/90
                                shadow-[0_20px_60px_rgba(0,0,0,0.40)]
                            `
                        : `
                                border-slate-200/80
                                bg-white/90
                                shadow-[0_20px_60px_rgba(15,23,42,0.09)]
                            `
                    }
                `}
            >

                {/* Orange top line */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-0
                        h-px
                        w-1/2
                        -translate-x-1/2
                        bg-gradient-to-r
                        from-transparent
                        via-orange-400/70
                        to-transparent
                    "
                />

                {/* Main Navbar */}

                <div
                    className="
                        flex
                        h-[72px]
                        items-center
                        justify-between
                        px-3
                        sm:px-5
                        lg:px-6
                    "
                >

                    {/* LOGO */}

                    <NavLink
                        to="/"
                        className="group flex shrink-0 items-center gap-3"
                    >

                        <div
                            className="
                                relative
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[15px]
                                bg-gradient-to-br
                                from-slate-950
                                to-slate-800
                                shadow-[0_8px_25px_rgba(15,23,42,0.22)]
                                transition-all
                                duration-500
                                group-hover:-translate-y-0.5
                                group-hover:shadow-[0_10px_30px_rgba(249,115,22,0.25)]
                            "
                        >

                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-orange-500/30
                                    via-transparent
                                    to-transparent
                                    opacity-0
                                    transition-opacity
                                    duration-500
                                    group-hover:opacity-100
                                "
                            />

                            <Wrench
                                size={21}
                                strokeWidth={2.2}
                                className="
                                    relative
                                    z-10
                                    text-white
                                    transition-all
                                    duration-500
                                    group-hover:rotate-[-10deg]
                                    group-hover:text-orange-300
                                "
                            />

                        </div>

                        <div className="hidden sm:block">

                            <h1
                                className={`
                                    text-[16px]
                                    font-black
                                    leading-none

                                    ${darkMode
                                        ? "text-white"
                                        : "text-slate-950"
                                    }
                                `}
                            >
                                Deepak
                                <span className="text-orange-500">
                                    {" "}Repairing
                                </span>
                            </h1>

                            <div className="mt-1.5 flex items-center gap-1.5">

                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                                <p
                                    className={`
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.22em]

                                        ${darkMode
                                            ? "text-slate-500"
                                            : "text-slate-400"
                                        }
                                    `}
                                >
                                    Power Tools & Repair
                                </p>

                            </div>

                        </div>

                    </NavLink>


                    {/* DESKTOP MENU */}

                    <div className="hidden items-center lg:flex">

                        <div
                            className={`
                                flex
                                items-center
                                gap-1
                                rounded-2xl
                                p-1

                                ${darkMode
                                    ? "bg-white/[0.035]"
                                    : "bg-slate-50/80"
                                }
                            `}
                        >

                            {navLinks.map((link) => (

                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) => `
                                        group
                                        relative
                                        rounded-xl
                                        px-3.5
                                        py-2.5
                                        text-[13px]
                                        font-bold
                                        transition-all
                                        duration-300

                                        ${isActive
                                            ? darkMode
                                                ? "text-white"
                                                : "text-slate-950"
                                            : darkMode
                                                ? "text-slate-400 hover:text-white"
                                                : "text-slate-500 hover:text-slate-950"
                                        }
                                    `}
                                >

                                    {({ isActive }) => (
                                        <>
                                            {link.name}

                                            <span
                                                className={`
                                                    absolute
                                                    bottom-1
                                                    left-1/2
                                                    h-[2px]
                                                    -translate-x-1/2
                                                    rounded-full
                                                    bg-orange-500
                                                    transition-all
                                                    duration-300

                                                    ${isActive
                                                        ? "w-5"
                                                        : "w-0 group-hover:w-3"
                                                    }
                                                `}
                                            />
                                        </>
                                    )}

                                </NavLink>

                            ))}

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="hidden items-center gap-2 lg:flex">

                        {/* LANGUAGE */}

                        <div className="relative">

                            <button
                                type="button"
                                onClick={() =>
                                    setLanguageOpen(
                                        (previous) => !previous
                                    )
                                }
                                className={`
                                    flex
                                    h-10
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    px-3
                                    text-xs
                                    font-black
                                    transition-all

                                    ${darkMode
                                        ? `
                                                border-white/10
                                                bg-white/[0.04]
                                                text-slate-300
                                                hover:border-orange-400/30
                                            `
                                        : `
                                                border-slate-200
                                                bg-white
                                                text-slate-600
                                                hover:border-orange-300
                                            `
                                    }
                                `}
                            >

                                <Languages
                                    size={15}
                                    className="text-orange-500"
                                />

                                {language === "en" ? "EN" : "हिंदी"}

                                <ChevronDown
                                    size={13}
                                    className={`
                                        transition-transform
                                        ${languageOpen
                                            ? "rotate-180"
                                            : ""
                                        }
                                    `}
                                />

                            </button>


                            {languageOpen && (

                                <div
                                    className={`
                                        absolute
                                        right-0
                                        top-12
                                        z-[100]
                                        w-36
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        p-1.5
                                        shadow-2xl

                                        ${darkMode
                                            ? "border-white/10 bg-[#111827]"
                                            : "border-slate-200 bg-white"
                                        }
                                    `}
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            selectLanguage("en")
                                        }
                                        className={`
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            rounded-xl
                                            px-3
                                            py-2.5
                                            text-left
                                            text-xs
                                            font-bold

                                            ${language === "en"
                                                ? "bg-orange-500 text-white"
                                                : darkMode
                                                    ? "text-slate-300 hover:bg-white/5"
                                                    : "text-slate-600 hover:bg-orange-50"
                                            }
                                        `}
                                    >
                                        English

                                        {language === "en" && "✓"}

                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            selectLanguage("hi")
                                        }
                                        className={`
                                            mt-1
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            rounded-xl
                                            px-3
                                            py-2.5
                                            text-left
                                            text-xs
                                            font-bold

                                            ${language === "hi"
                                                ? "bg-orange-500 text-white"
                                                : darkMode
                                                    ? "text-slate-300 hover:bg-white/5"
                                                    : "text-slate-600 hover:bg-orange-50"
                                            }
                                        `}
                                    >
                                        हिंदी

                                        {language === "hi" && "✓"}

                                    </button>

                                </div>

                            )}

                        </div>


                        {/* DARK / LIGHT */}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle light and dark mode"
                            className={`
                                relative
                                h-10
                                w-[72px]
                                overflow-hidden
                                rounded-full
                                border
                                p-1
                                transition-all
                                duration-500

                                ${darkMode
                                    ? "border-white/10 bg-[#151d2d]"
                                    : "border-slate-200 bg-slate-100"
                                }
                            `}
                        >

                            <span
                                className={`
                                    absolute
                                    top-1
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-full
                                    shadow-md
                                    transition-all
                                    duration-500

                                    ${darkMode
                                        ? "left-[36px] bg-slate-900 text-yellow-300"
                                        : "left-1 bg-white text-orange-500"
                                    }
                                `}
                            >

                                {darkMode ? (
                                    <Moon size={15} />
                                ) : (
                                    <Sun size={15} />
                                )}

                            </span>

                        </button>


                        {/* CALL NOW */}

                        <a
                            href="tel:+919871238460"
                            className="
                                group
                                flex
                                h-10
                                items-center
                                gap-2
                                rounded-xl
                                bg-gradient-to-r
                                from-orange-500
                                to-orange-600
                                px-4
                                text-xs
                                font-black
                                text-white
                                shadow-[0_8px_25px_rgba(249,115,22,0.25)]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-[0_12px_35px_rgba(249,115,22,0.35)]
                            "
                        >

                            <span
                                className="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-white/15
                                "
                            >
                                <Phone size={13} />
                            </span>

                            <span className="hidden xl:block">
                                +91 98712 38460
                            </span>

                            <span className="xl:hidden">
                                {intl.formatMessage({
                                    id: "nav.callNow",
                                })}
                            </span>

                            <ArrowUpRight size={13} />

                        </a>

                    </div>


                    {/* MOBILE BUTTON */}

                    <button
                        type="button"
                        onClick={() =>
                            setIsOpen(
                                (previous) => !previous
                            )
                        }
                        aria-label="Toggle menu"
                        className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-[14px]
                            border
                            lg:hidden

                            ${darkMode
                                ? "border-white/10 bg-white/5 text-white"
                                : "border-slate-200 bg-slate-50 text-slate-800"
                            }
                        `}
                    >

                        {isOpen ? (
                            <X size={21} />
                        ) : (
                            <Menu size={21} />
                        )}

                    </button>

                </div>


                {/* MOBILE MENU */}

                {isOpen && (

                    <div
                        className={`
                            border-t
                            px-3
                            pb-4
                            pt-3
                            lg:hidden

                            ${darkMode
                                ? "border-white/[0.08]"
                                : "border-slate-100"
                            }
                        `}
                    >

                        <div className="space-y-1">

                            {navLinks.map((link) => (

                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() =>
                                        setIsOpen(false)
                                    }
                                    className={({ isActive }) => `
                                        block
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        font-bold

                                        ${isActive
                                            ? "bg-orange-500 text-white"
                                            : darkMode
                                                ? "text-slate-300 hover:bg-white/5"
                                                : "text-slate-600 hover:bg-orange-50"
                                        }
                                    `}
                                >
                                    {link.name}
                                </NavLink>

                            ))}


                            {/* MOBILE LANGUAGE + THEME */}

                            <div className="mt-4 grid grid-cols-2 gap-2">

                                <button
                                    type="button"
                                    onClick={() =>
                                        selectLanguage(
                                            language === "en"
                                                ? "hi"
                                                : "en"
                                        )
                                    }
                                    className={`
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        py-3
                                        text-xs
                                        font-bold

                                        ${darkMode
                                            ? "border-white/10 bg-white/5 text-slate-200"
                                            : "border-slate-200 bg-slate-50 text-slate-700"
                                        }
                                    `}
                                >

                                    <Languages
                                        size={15}
                                        className="text-orange-500"
                                    />

                                    {language === "en"
                                        ? "हिंदी"
                                        : "English"}

                                </button>


                                <button
                                    type="button"
                                    onClick={toggleTheme}
                                    className={`
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        border
                                        py-3
                                        text-xs
                                        font-bold

                                        ${darkMode
                                            ? "border-white/10 bg-white/5 text-yellow-300"
                                            : "border-slate-200 bg-slate-50 text-slate-700"
                                        }
                                    `}
                                >

                                    {darkMode ? (
                                        <>
                                            <Sun size={15} />
                                            Light
                                        </>
                                    ) : (
                                        <>
                                            <Moon size={15} />
                                            Dark
                                        </>
                                    )}

                                </button>

                            </div>


                            {/* MOBILE CALL */}

                            <a
                                href="tel:+919871238460"
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-orange-600
                                    py-3.5
                                    text-sm
                                    font-black
                                    text-white
                                    shadow-lg
                                    shadow-orange-500/20
                                "
                            >

                                <Phone size={17} />

                                {intl.formatMessage({
                                    id: "nav.callNow",
                                })}

                                <ArrowUpRight size={15} />

                            </a>

                        </div>

                    </div>

                )}

            </nav>

        </header>
    );
};

export default Navbar;