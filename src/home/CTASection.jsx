import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
    return (
        <section className="px-6 py-24">

            <div
                className="
        mx-auto
        max-w-7xl
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-r
        from-orange-500
        via-orange-600
        to-orange-500
        px-10
        py-16
        shadow-[0_30px_80px_rgba(249,115,22,0.35)]
      "
            >

                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

                    <div>

                        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">

                            Available 24×7

                        </span>

                        <h2 className="mt-6 text-5xl font-black text-white">

                            Need Expert Power Tool
                            <br />
                            Repair or New Machine?

                        </h2>

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-100">

                            We provide Power Tool Sales, Genuine Spare Parts
                            and Professional Repair Services with more than
                            45 years of trusted experience.

                        </p>

                    </div>

                    <div className="flex flex-wrap gap-5">

                        <a
                            href="tel:9871238460"
                            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-8
              py-4
              font-semibold
              text-orange-600
              transition-all
              duration-300
              hover:-translate-y-1
            "
                        >
                            <Phone size={20} />
                            Call Now
                        </a>

                        <a
                            href="https://wa.me/919871238460"
                            target="_blank"
                            rel="noreferrer"
                            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/30
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/20
            "
                        >
                            <MessageCircle size={20} />
                            WhatsApp
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CTASection;