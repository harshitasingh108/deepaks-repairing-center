import {
    ArrowUpRight,
    Wrench,
    ShoppingBag,
    MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "919871238460";

const ProductCard = ({ product }) => {
    const quoteMessage = encodeURIComponent(
        `Hello Deepak Repairing Center, I am interested in ${product.name}. Please share the price and details.`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${quoteMessage}`;

    return (
        <article
            className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-slate-200
        bg-white
        shadow-[0_12px_35px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-orange-300
        hover:shadow-[0_25px_60px_rgba(249,115,22,0.18)]
        sm:rounded-[28px]
      "
        >
            {/* ================= BADGE ================= */}

            {product.badge && (
                <div
                    className="
            absolute
            left-4
            top-4
            z-10
            rounded-full
            bg-orange-500
            px-3
            py-1.5
            text-[10px]
            font-bold
            text-white
            shadow-lg
            sm:left-5
            sm:top-5
            sm:px-4
            sm:py-2
            sm:text-xs
          "
                >
                    {product.badge}
                </div>
            )}

            {/* ================= IMAGE ================= */}

            <div
                className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-slate-50
          to-white
        "
            >
                {/* Soft background glow */}

                <div
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-36
            w-36
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-100/40
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-orange-200/50
          "
                />

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="
            relative
            h-56
            w-full
            object-contain
            p-5
            transition-transform
            duration-700
            group-hover:scale-105
            sm:h-64
            sm:p-6
          "
                />
            </div>

            {/* ================= CONTENT ================= */}

            <div className="space-y-4 p-5 sm:space-y-5 sm:p-6">

                {/* Product name */}

                <h3
                    className="
            line-clamp-2
            text-xl
            font-black
            leading-tight
            text-slate-900
            sm:text-2xl
          "
                >
                    {product.name}
                </h3>

                {/* Description */}

                <p
                    className="
            line-clamp-3
            text-sm
            leading-6
            text-slate-600
            sm:leading-7
          "
                >
                    {product.description}
                </p>

                {/* ================= TAGS ================= */}

                {(product.sale || product.repair) && (
                    <div className="flex flex-wrap gap-2">

                        {product.sale && (
                            <span
                                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-green-50
                  px-3
                  py-1.5
                  text-[11px]
                  font-bold
                  text-green-700
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
                            >
                                <ShoppingBag size={14} />
                                Sales
                            </span>
                        )}

                        {product.repair && (
                            <span
                                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-orange-50
                  px-3
                  py-1.5
                  text-[11px]
                  font-bold
                  text-orange-600
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
                            >
                                <Wrench size={14} />
                                Repair
                            </span>
                        )}

                    </div>
                )}

                {/* ================= WHATSAPP QUOTE ================= */}

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get a quote for ${product.name} on WhatsApp`}
                    className="
            group/button
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            px-4
            py-3.5
            text-sm
            font-black
            text-white
            shadow-[0_10px_25px_rgba(249,115,22,0.18)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_15px_35px_rgba(249,115,22,0.28)]
            active:scale-[0.98]
            sm:py-4
          "
                >
                    <MessageCircle
                        size={18}
                        className="shrink-0"
                    />

                    Get Quote on WhatsApp

                    <ArrowUpRight
                        size={17}
                        className="
              shrink-0
              transition-transform
              duration-300
              group-hover/button:translate-x-0.5
              group-hover/button:-translate-y-0.5
            "
                    />
                </a>

            </div>
        </article>
    );
};

export default ProductCard;