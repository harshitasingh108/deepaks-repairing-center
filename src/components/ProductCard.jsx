import { ArrowRight, Wrench, ShoppingBag } from "lucide-react";

const ProductCard = ({ product }) => {
    return (
        <div
            className="
      group
      overflow-hidden
      rounded-[28px]
      border
      border-slate-200
      bg-white
      shadow-lg
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-orange-400
      hover:shadow-[0_25px_60px_rgba(249,115,22,0.25)]
    "
        >
            {/* Badge */}

            <div className="absolute z-10 m-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                {product.badge}
            </div>

            {/* Image */}

            <div className="overflow-hidden bg-slate-50">

                <img
                    src={product.image}
                    alt={product.name}
                    className="
            h-64
            w-full
            object-contain
            p-6
            transition-transform
            duration-700
            group-hover:scale-110
          "
                />

            </div>

            {/* Content */}

            <div className="space-y-5 p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                    {product.name}
                </h3>

                <p className="leading-7 text-slate-600">
                    {product.description}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-3">

                    {product.sale && (
                        <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                            <ShoppingBag size={16} />
                            Sales
                        </span>
                    )}

                    {product.repair && (
                        <span className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                            <Wrench size={16} />
                            Repair
                        </span>
                    )}

                </div>

                {/* Button */}

                <button
                    className="
          group/button
          mt-2
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-orange-500
          to-orange-600
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:shadow-xl
          hover:shadow-orange-300
        "
                >
                    Get Quote

                    <ArrowRight
                        size={18}
                        className="transition group-hover/button:translate-x-1"
                    />

                </button>

            </div>
        </div>
    );
};

export default ProductCard;