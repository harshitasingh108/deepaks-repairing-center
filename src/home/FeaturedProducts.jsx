import products from "../data/products";
import ProductCard from "../components/ProductCard";
import AboutOwner from "./AboutOwner";

const FeaturedProducts = () => {
    const topProducts = products.slice(0, 4);
    const bottomProducts = products.slice(4, 8);

    return (
        <section className="bg-gradient-to-b from-white via-orange-50/30 to-white py-24">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mb-16 text-center">

                    <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                        Featured Products
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">
                        Power Tools For Every Professional
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        We offer premium quality power tools, genuine spare parts,
                        and professional repair services for industrial and commercial use.
                    </p>

                </div>

                {/* Top Products */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {topProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>

            {/* Owner Section */}

            <div className="my-24">

                <AboutOwner />

            </div>

            {/* Bottom Products */}

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

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