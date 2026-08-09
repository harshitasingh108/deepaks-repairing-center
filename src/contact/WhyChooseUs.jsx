import {
    Award,
    ShieldCheck,
    Wrench,
    Users,
} from "lucide-react";

const features = [
    {
        icon: <Award size={34} />,
        title: "45+ Years Experience",
        desc: "Serving customers with trusted power tool sales and repair services for over four decades.",
    },
    {
        icon: <ShieldCheck size={34} />,
        title: "Genuine Spare Parts",
        desc: "Only high-quality and genuine spare parts for better machine performance.",
    },
    {
        icon: <Wrench size={34} />,
        title: "Expert Repair Service",
        desc: "Professional technicians for all major power tool brands and industrial machines.",
    },
    {
        icon: <Users size={34} />,
        title: "Customer Satisfaction",
        desc: "Hundreds of happy customers trust us for reliable and affordable service.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                        Why Choose Us
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Trusted By Professionals
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        We provide premium quality power tools, genuine spare parts,
                        and reliable repair services backed by decades of experience.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="
                group
                rounded-[30px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-400
                hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]
              "
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                                {item.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;