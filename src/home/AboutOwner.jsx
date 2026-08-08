import { useEffect, useState } from "react";
import {
    ArrowRight,
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
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

            {/* Background Glow */}

            <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-200/40 blur-[150px]" />

            <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-100/40 blur-[150px]" />

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-5">

                {/* LEFT */}

                <div className="relative lg:col-span-4">

                    <div className="relative overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

                        {/* Blur Background */}

                        <img
                            src={slides[current].image}
                            alt=""
                            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              scale-110
              blur-3xl
              brightness-50
            "
                        />

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Main Image */}

                        <div className="relative flex h-[720px] items-center justify-center">

                            <img
                                src={slides[current].image}
                                alt={slides[current].title}
                                className="
                max-h-[90%]
                max-w-[90%]
                object-contain
                transition-transform
                duration-[5000ms]
                hover:scale-105
              "
                            />

                        </div>

                        {/* Badge */}

                        <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

                            <span className="text-sm font-semibold text-white">

                                ⭐ Trusted Since 1980

                            </span>

                        </div>

                        {/* Bottom Content */}

                        <div className="absolute bottom-10 left-10">

                            <h2 className="text-5xl font-black text-white">

                                {slides[current].title}

                            </h2>

                            <p className="mt-3 text-xl text-white/90">

                                {slides[current].subtitle}

                            </p>

                        </div>

                        {/* Slider Dots */}

                        <div className="absolute bottom-10 right-10 flex gap-3">

                            {slides.map((_, index) => (

                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`transition-all duration-300 ${current === index
                                            ? "h-3 w-10 rounded-full bg-orange-500"
                                            : "h-3 w-3 rounded-full bg-white/70"
                                        }`}
                                />

                            ))}

                        </div>

                    </div>

                </div>
                {/* RIGHT SIDE */}

                <div className="relative lg:col-span-1">

                    <div className="sticky top-28 rounded-[35px] border border-white/60 bg-white/80 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl">

                        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">

                            <BadgeCheck size={16} />

                            Trusted Since 1980

                        </span>

                        <h2 className="mt-6 text-6xl font-black leading-none text-slate-900">

                            45+

                        </h2>

                        <p className="mt-2 text-xl font-semibold text-slate-700">

                            Years of Excellence

                        </p>

                        <p className="mt-6 leading-8 text-slate-600">

                            Deepak Repairing Center has been delivering trusted
                            Power Tool Sales, Professional Repair Services and
                            Genuine Spare Parts with quality workmanship for over
                            four decades.

                        </p>

                        <div className="mt-8 space-y-4">

                            <div className="flex items-center gap-3">

                                <BadgeCheck className="text-orange-500" size={20} />

                                <span>Power Tool Sales</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <BadgeCheck className="text-orange-500" size={20} />

                                <span>Professional Repair</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <BadgeCheck className="text-orange-500" size={20} />

                                <span>Genuine Spare Parts</span>

                            </div>

                            <div className="flex items-center gap-3">

                                <BadgeCheck className="text-orange-500" size={20} />

                                <span>Customer Satisfaction</span>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="mt-10 space-y-4">

                            <button
                                className="
                group
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
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-orange-300
              "
                            >

                                Get Quote

                                <ArrowRight
                                    size={18}
                                    className="transition group-hover:translate-x-1"
                                />

                            </button>

                            <button
                                className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-6
                py-4
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:border-orange-500
                hover:text-orange-500
              "
                            >

                                <Phone size={18} />

                                Call Now

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutOwner;