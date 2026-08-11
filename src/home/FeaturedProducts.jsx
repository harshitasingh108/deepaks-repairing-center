import products from "../data/products";
import ProductCard from "../components/ProductCard";
import AboutOwner from "./AboutOwner";

const FeaturedProducts = () => {
    const topProducts = products.slice(0, 4);
    const bottomProducts = products.slice(4, 8);

    return (
        <section className="overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-14 sm:py-20 lg:py-24">

            {/* ================= HEADING ================= */}

            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                <div className="mb-10 text-center sm:mb-14 lg:mb-16">

                    <span
                        className="
              inline-flex
              rounded-full
              bg-orange-100
              px-4 py-2
              text-xs
              font-bold
              text-orange-600
              sm:px-5
              sm:text-sm
            "
                    >
                        Featured Products
                    </span>

                    <h2
                        className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
          "
                    >
                        Power Tools For Every Professional
                    </h2>

                    <p
                        className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:mt-5
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
                    >
                        We offer premium quality power tools, genuine spare parts,
                        and professional repair services for industrial and commercial use.
                    </p>

                </div>

                {/* ================= TOP PRODUCTS ================= */}

                <div
                    className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            xl:grid-cols-4
            xl:gap-8
          "
                >
                    {topProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>

            {/* ================= OWNER ================= */}

            <div className="my-16 sm:my-20 lg:my-24">
                <AboutOwner />
            </div>

            {/* ================= BOTTOM PRODUCTS ================= */}

            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                <div
                    className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            xl:grid-cols-4
            xl:gap-8
          "
                >
                    {bottomProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default FeaturedProducts;