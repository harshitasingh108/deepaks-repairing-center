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
    MapPin,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import { MAP_URL, openGoogleMaps } from "../constants/map";

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
            name: "Track Repair",
            path: "/track-repair",
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

    const closeMobileMenu = () => {
        setIsOpen(false);
        setLanguageOpen(false);
    };

    return (
        <header className="sticky top-0 z-[100] px-2.5 pt-2.5 sm:px-4 sm:pt-3">
            <nav
                className={`
          relative mx-auto max-w-7xl
          overflow-visible
          rounded-[20px] sm:rounded-[24px]
          border
          backdrop-blur-2xl
          transition-all duration-500

          ${darkMode
                        ? `
                border-white/[0.10]
                bg-[#080D18]/90
                shadow-[0_20px_70px_rgba(0,0,0,0.45)]
              `
                        : `
                border-slate-200/70
                bg-white/90
                shadow-[0_20px_70px_rgba(15,23,42,0.10)]
              `
                    }
        `}
            >
                {/* =====================================================
            PREMIUM TOP ACCENT
        ===================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[2px]
            w-2/3
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-orange-500
            to-transparent
            opacity-90
          "
                />

                {/* =====================================================
            MAIN NAVBAR
        ===================================================== */}

                <div
                    className="
            flex
            h-[66px]
            items-center
            justify-between
            px-2.5
            sm:h-[72px]
            sm:px-5
            lg:px-6
          "
                >
                    {/* ================= LOGO ================= */}

                    <NavLink
                        to="/"
                        onClick={closeMobileMenu}
                        className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
                    >
                        {/* Logo Icon */}

                        <div
                            className="
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[14px]
                bg-gradient-to-br
                from-orange-500
                via-orange-600
                to-orange-700
                shadow-[0_8px_25px_rgba(249,115,22,0.25)]
                transition-all
                duration-500
                group-hover:-translate-y-0.5
                group-hover:shadow-[0_12px_35px_rgba(249,115,22,0.35)]
                sm:h-11
                sm:w-11
              "
                        >
                            <div
                                className="
                  absolute
                  inset-[1px]
                  rounded-[13px]
                  bg-gradient-to-br
                  from-orange-400
                  to-orange-700
                  opacity-80
                "
                            />

                            <Wrench
                                size={21}
                                strokeWidth={2.4}
                                className="
                  relative
                  z-10
                  text-white
                  transition-transform
                  duration-500
                  group-hover:rotate-[-12deg]
                "
                            />

                            {/* Small shine */}

                            <div
                                className="
                  absolute
                  -right-3
                  -top-3
                  h-8
                  w-8
                  rounded-full
                  bg-white/30
                  blur-md
                "
                            />
                        </div>

                        {/* Brand */}

                        <div className="min-w-0">
                            <h1
                                className={`
                  truncate
                  text-[14px]
                  font-black
                  leading-none
                  tracking-tight
                  sm:text-[17px]

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

                            <div className="mt-1.5 hidden items-center gap-1.5 sm:flex">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                                <p
                                    className={`
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.20em]

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

                    {/* ================= DESKTOP MENU ================= */}

                    <div className="hidden items-center lg:flex">
                        <div
                            className={`
                flex
                items-center
                gap-0.5
                rounded-2xl
                border
                p-1

                ${darkMode
                                    ? "border-white/[0.06] bg-white/[0.035]"
                                    : "border-slate-100 bg-slate-50/80"
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
                    px-3
                    py-2.5
                    text-[12px]
                    font-bold
                    transition-all
                    duration-300

                    ${isActive
                                            ? darkMode
                                                ? "bg-white/[0.08] text-white"
                                                : "bg-white text-slate-950 shadow-sm"
                                            : darkMode
                                                ? "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                                                : "text-slate-500 hover:bg-white hover:text-slate-950"
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

                    {/* ================= DESKTOP RIGHT ================= */}

                    <div className="hidden items-center gap-2 lg:flex">

                        {/* LANGUAGE */}

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() =>
                                    setLanguageOpen((previous) => !previous)
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
                        hover:bg-orange-500/5
                      `
                                        : `
                        border-slate-200
                        bg-white
                        text-slate-600
                        hover:border-orange-300
                        hover:bg-orange-50/50
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
                    ${languageOpen ? "rotate-180" : ""}
                  `}
                                />
                            </button>

                            {languageOpen && (
                                <div
                                    className={`
                    absolute
                    right-0
                    top-12
                    z-[200]
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
                                        onClick={() => selectLanguage("en")}
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
                                        onClick={() => selectLanguage("hi")}
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

                        {/* THEME */}

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label="Toggle light and dark mode"
                            className={`
                relative
                h-10
                w-[70px]
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
                                        ? "left-[34px] bg-slate-900 text-yellow-300"
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

                        {/* CALL */}

                        <a
                            href="tel:+919871238460"
                            aria-label="Call Deepak Repairing Center"
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
                px-3.5
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

                    {/* ================= MOBILE MENU BUTTON ================= */}

                    <button
                        type="button"
                        onClick={() =>
                            setIsOpen((previous) => !previous)
                        }
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className={`
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-[14px]
              border
              transition-all
              duration-300
              lg:hidden

              ${isOpen
                                ? "border-orange-400/40 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                : darkMode
                                    ? "border-white/10 bg-white/5 text-white hover:border-orange-400/30"
                                    : "border-slate-200 bg-slate-50 text-slate-800 hover:border-orange-300 hover:bg-orange-50"
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

                {/* =====================================================
            MOBILE MENU
        ===================================================== */}

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

                        {/* Mobile Navigation */}

                        <div className="space-y-1.5">

                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) => `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-3.5
                    text-sm
                    font-bold
                    transition-all
                    duration-300

                    ${isActive
                                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                                            : darkMode
                                                ? "text-slate-300 hover:bg-white/5 hover:text-white"
                                                : "text-slate-600 hover:bg-orange-50 hover:text-slate-950"
                                        }
                  `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span>{link.name}</span>

                                            <ArrowUpRight
                                                size={15}
                                                className={`
                          transition-all
                          ${isActive
                                                        ? "opacity-100"
                                                        : "opacity-30 group-hover:translate-x-0.5 group-hover:opacity-70"
                                                    }
                        `}
                                            />
                                        </>
                                    )}
                                </NavLink>
                            ))}

                        </div>

                        {/* Quick Actions */}

                        <div className="mt-4 grid grid-cols-2 gap-2">

                            {/* Language */}

                            <button
                                type="button"
                                onClick={() =>
                                    selectLanguage(
                                        language === "en" ? "hi" : "en"
                                    )
                                }
                                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  py-3.5
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

                                {language === "en" ? "हिंदी" : "English"}
                            </button>

                            {/* Theme */}

                            <button
                                type="button"
                                onClick={toggleTheme}
                                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  py-3.5
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
                                        Light Mode
                                    </>
                                ) : (
                                    <>
                                        <Moon size={15} />
                                        Dark Mode
                                    </>
                                )}
                            </button>
                        </div>



                        {/* Call */}

                        <a
                            href="tel:+919871238460"
                            onClick={closeMobileMenu}
                            className="
                mt-2
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-orange-500
                to-orange-600
                py-3.5
                text-sm
                font-black
                text-white
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-300
                active:scale-[0.98]
              "
                        >
                            <Phone size={17} />

                            {intl.formatMessage({
                                id: "nav.callNow",
                            })}

                            <ArrowUpRight size={15} />
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;