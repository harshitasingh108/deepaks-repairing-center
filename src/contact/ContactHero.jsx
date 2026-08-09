import {
    Phone,
    MessageCircle,
    ChevronDown,
} from "lucide-react";

const ContactHero = () => {
    return (
        <section className="relative flex h-[75vh] min-h-[550px] items-center justify-center overflow-hidden">

            {/* ================= BACKGROUND VIDEO ================= */}

            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source
                    src="/images/products/blade.mp4"
                    type="video/mp4"
                />

                Your browser does not support the video tag.
            </video>

            {/* ================= DARK OVERLAY ================= */}

            <div className="absolute inset-0 bg-black/45" />

            {/* ================= ORANGE GLOW ================= */}

            <div
                className="
          absolute
          left-0
          top-0
          h-72
          w-72
          rounded-full
          bg-orange-500/20
          blur-[120px]
        "
            />

            <div
                className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-orange-400/20
          blur-[120px]
        "
            />

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

                {/* Badge */}

                <span
                    className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/30
            bg-white/10
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            shadow-lg
            backdrop-blur-xl
          "
                >
                    📍 Contact Deepak Repairing Center
                </span>

                {/* Heading */}

                <h1
                    className="
            mt-8
            text-5xl
            font-black
            leading-tight
            tracking-tight
            text-white
            drop-shadow-2xl
            sm:text-6xl
            md:text-7xl
          "
                >
                    Let's Connect
                </h1>

                {/* Description */}

                <p
                    className="
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-8
            text-white/85
            sm:text-lg
          "
                >
                    Looking for Power Tool Sales, Professional Repairs or
                    Genuine Spare Parts? Our team is always ready to help.
                </p>

                {/* ================= BUTTONS ================= */}

                <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">

                    {/* Call */}

                    <a
                        href="tel:+919871238460"
                        className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              bg-orange-500
              px-7
              py-4
              font-semibold
              text-white
              shadow-[0_15px_35px_rgba(249,115,22,0.35)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-orange-600
              hover:shadow-[0_20px_45px_rgba(249,115,22,0.45)]
              sm:px-8
            "
                    >
                        <Phone
                            size={20}
                            className="transition-transform duration-300 group-hover:rotate-12"
                        />

                        Call Now
                    </a>

                    {/* WhatsApp */}

                    <a
                        href="https://wa.me/919871238460"
                        target="_blank"
                        rel="noreferrer"
                        className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/30
              bg-white/10
              px-7
              py-4
              font-semibold
              text-white
              shadow-lg
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/20
              sm:px-8
            "
                    >
                        <MessageCircle
                            size={20}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />

                        WhatsApp
                    </a>

                </div>

            </div>

            {/* ================= SCROLL INDICATOR ================= */}

            <div
                className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          animate-bounce
          text-white
        "
            >
                <div
                    className="
            flex
            h-11
            w-7
            items-start
            justify-center
            rounded-full
            border
            border-white/40
            p-1
          "
                >
                    <ChevronDown size={20} />
                </div>
            </div>

        </section>
    );
};

export default ContactHero;