import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid() {
  return (
    <section id="produk" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pattern-kawung fade-corner-tr pointer-events-none absolute -top-4 -right-4 h-20 w-28 opacity-60 md:h-28 md:w-40"
      />
      <div className="relative z-10 mx-auto w-full max-w-280 px-4 py-10 md:px-6 md:py-14">
        <h2 className="font-display text-3xl font-semibold text-arang md:text-4xl">
          Produk
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
