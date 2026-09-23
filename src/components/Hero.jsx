import { useState } from "react";
import { createWhatsAppUrl, defaultWhatsAppMessage } from "../data/contact.js";
import { products } from "../data/products.js";

const heroImageSource = products[0]?.image ?? null;

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const showImage = heroImageSource !== null && !imageError;

  return (
    <section id="home">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-16">
        <div className="flex flex-col items-start gap-4">
          <h1 className="font-display text-4xl font-semibold text-arang md:text-5xl">
            Aneka Snack Bu Sum
          </h1>
          <p className="text-lg text-arang">
            Jajanan rumahan, dibuat segar sesuai pesanan.
          </p>
          <a
            href={createWhatsAppUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-gula-jawa px-6 py-3 font-semibold text-arang transition-colors hover:bg-sawo-matang hover:text-putih-tulang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang focus-visible:ring-offset-2 focus-visible:ring-offset-kertas-minyak"
          >
            Chat via WhatsApp
          </a>
        </div>

        <div>
          {showImage ? (
            <img
              src={heroImageSource}
              alt="Kue lapis, jajanan pasar Indonesia"
              loading="eager"
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
      </div>
    </section>
  );
}
