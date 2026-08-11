import { useEffect, useState } from "react";
import {
    BadgeCheck,
    Phone,
} from "lucide-react";

const slides = [
    {
        image: "/images/about/owner.jpg",
        title: "Meet Our Founder",
        subtitle: "45+ Years of Experience",
    },
    {
        image: "/images/about/shop.jpg",
        title: "Our Store",
        subtitle: "Power Tool Sales",
    },
    {
        image: "/images/about/workshop.jpg",
        title: "Professional Workshop",
        subtitle: "Expert Repair Services",
    },
    {
        image: "/images/about/repair.jpg",
        title: "Machine Repair",
        subtitle: "Trusted by Customers",
    },
    {
        image: "/images/about/products.jpg",
        title: "Premium Power Tools",
        subtitle: "Sales & Genuine Parts",
    },
];

const AboutOwner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-14 sm:py-20 lg:py-24">

            {/* Background Glow */}

            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-[130px] sm:h-96 sm:w-96" />

            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-orange-100/30 blur-[130px] sm:h-96 sm:w-96" />

            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-5">

                {/* ================= LEFT IMAGE SLIDER ================= */}

                <div className="relative lg:col-span-4">

                    <div
                        className="
              relative
              overflow-hidden
              rounded-[28px]
              shadow-[0_25px_70px_rgba(0,0,0,0.16)]
              sm:rounded-[40px]
            "
                    >

                        {/* Blur Background */}

                        <img
                            src={slides[current].image}
                            alt=""
                            aria-hidden="true"
                            className="
                absolute
                inset-0
                h-full
                w-full
                scale-110
                object-cover
                blur-3xl
                brightness-50
              "
                        />

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-black/25" />

                        {/* Main Image */}

                        <div
                            className="
                relative
                flex
                h-[430px]
                items-center
                justify-center
                sm:h-[560px]
                lg:h-[720px]
              "
                        >
                            <img
                                src={slides[current].image}
                                alt={slides[current].title}
                                className="
                  max-h-[82%]
                  max-w-[88%]
                  object-contain
                  transition-transform
                  duration-[5000ms]
                  hover:scale-105
                  sm:max-h-[90%]
                  sm:max-w-[90%]
                "
                            />
                        </div>

                        {/* ================= TOP BADGE ================= */}

                        <div
                            className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-2
                backdrop-blur-xl
                sm:left-8
                sm:top-8
                sm:px-5
                sm:py-3
              "
                        >
                            <span className="text-[11px] font-semibold text-white sm:text-sm">
                                ⭐ Trusted Since 1980
                            </span>
                        </div>

                        {/* ================= BOTTOM CONTENT ================= */}

                        <div
                            className="
                absolute
                bottom-5
                left-5
                right-5
                sm:bottom-10
                sm:left-10
                sm:right-auto
              "
                        >
                            <h2
                                className="
                  text-2xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
                            >
                                {slides[current].title}
                            </h2>

                            <p className="mt-2 text-sm text-white/90 sm:mt-3 sm:text-xl">
                                {slides[current].subtitle}
                            </p>
                        </div>

                        {/* ================= SLIDER DOTS ================= */}

                        <div
                            className="
                absolute
                bottom-5
                right-5
                flex
                items-center
                gap-2
                sm:bottom-10
                sm:right-10
                sm:gap-3
              "
                        >
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.image}
                                    type="button"
                                    aria-label={`Show ${slide.title}`}
                                    aria-current={current === index ? "true" : "false"}
                                    onClick={() => setCurrent(index)}
                                    className={`
                    transition-all
                    duration-300
                    ${current === index
                                            ? "h-2.5 w-7 rounded-full bg-orange-500 sm:h-3 sm:w-10"
                                            : "h-2.5 w-2.5 rounded-full bg-white/70 hover:bg-white sm:h-3 sm:w-3"
                                        }
                  `}
                                />
                            ))}
                        </div>

                    </div>
                </div>

                {/* ================= RIGHT INFO CARD ================= */}

                <div className="relative lg:col-span-1">

                    <div
                        className="
              rounded-[28px]
              border
              border-white/60
              bg-white/90
              p-5
              shadow-[0_20px_55px_rgba(0,0,0,0.10)]
              backdrop-blur-2xl
              sm:rounded-[35px]
              sm:p-8
              lg:sticky
              lg:top-28
            "
                    >

                        {/* Badge */}

                        <span
                            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-100
                px-3
                py-2
                text-xs
                font-bold
                text-orange-600
                sm:px-4
                sm:text-sm
              "
                        >
                            <BadgeCheck size={16} />
                            Trusted Since 1980
                        </span>

                        {/* Experience */}

                        <h2
                            className="
                mt-5
                text-5xl
                font-black
                leading-none
                text-slate-900
                sm:mt-6
                sm:text-6xl
              "
                        >
                            45+
                        </h2>

                        <p className="mt-2 text-lg font-semibold text-slate-700 sm:text-xl">
                            Years of Excellence
                        </p>

                        {/* Description */}

                        <p
                            className="
                mt-5
                text-sm
                leading-7
                text-slate-600
                sm:mt-6
                sm:text-base
                sm:leading-8
              "
                        >
                            Deepak Repairing Center has been delivering trusted
                            Power Tool Sales, Professional Repair Services and
                            Genuine Spare Parts with quality workmanship for over
                            four decades.
                        </p>

                        {/* ================= SERVICES ================= */}

                        <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">

                            <div className="flex items-center gap-3">
                                <BadgeCheck
                                    className="shrink-0 text-orange-500"
                                    size={20}
                                />
                                <span className="text-sm font-medium text-slate-700 sm:text-base">
                                    Power Tool Sales
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <BadgeCheck
                                    className="shrink-0 text-orange-500"
                                    size={20}
                                />
                                <span className="text-sm font-medium text-slate-700 sm:text-base">
                                    Professional Repair
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <BadgeCheck
                                    className="shrink-0 text-orange-500"
                                    size={20}
                                />
                                <span className="text-sm font-medium text-slate-700 sm:text-base">
                                    Genuine Spare Parts
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <BadgeCheck
                                    className="shrink-0 text-orange-500"
                                    size={20}
                                />
                                <span className="text-sm font-medium text-slate-700 sm:text-base">
                                    Customer Satisfaction
                                </span>
                            </div>

                        </div>

                        {/* ================= CALL BUTTON ================= */}

                        <div className="mt-8 sm:mt-10">

                            <a
                                href="tel:+919871238460"
                                aria-label="Call Deepak Repairing Center"
                                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  to-orange-600
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-orange-200
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-orange-300
                  active:scale-[0.98]
                  sm:text-base
                "
                            >
                                <Phone size={18} />
                                Call Now
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutOwner;