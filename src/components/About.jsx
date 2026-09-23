import { useState } from "react";
import { products } from "../data/products.js";

const aboutProduct = products[1] ?? null;

export default function About() {
  const [imageError, setImageError] = useState(false);

  const imageSource = aboutProduct?.image ?? null;
  const showImage = imageSource !== null && !imageError;
  const showImageArea = imageSource !== null;

  return (
    <section id="about">
      <div
        className={`mx-auto grid w-full max-w-[1120px] gap-8 px-4 py-10 md:px-6 md:py-14 ${
          showImageArea ? "md:grid-cols-2 md:items-center md:gap-12" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl font-semibold text-arang md:text-4xl">
            Tentang Aneka Snack Bu Sum
          </h2>
          <p className="max-w-[60ch] text-arang">
            Aneka Snack Bu Sum adalah usaha jajanan rumahan. Cerita dan informasi
            tentang usaha ini akan ditampilkan di sini.
          </p>
        </div>

        {showImageArea && (
          <div>
            {showImage ? (
              <img
                src={imageSource}
                alt={`${aboutProduct.name}, jajanan pasar Indonesia`}
                loading="lazy"
                onError={() => setImageError(true)}
                className="aspect-[4/3] w-full border border-sawo-matang/25 object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label="Foto produk Aneka Snack Bu Sum belum tersedia"
                className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border border-sawo-matang/25 bg-putih-tulang px-6 text-center"
              >
                <p className="font-display text-xl font-semibold text-arang">
                  Aneka Snack Bu Sum
                </p>
                <p className="text-sm text-sawo-matang">
                  Foto produk sedang disiapkan.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
