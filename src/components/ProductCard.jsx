import { useState } from "react";
import { createWhatsAppUrl } from "../data/contact.js";

export default function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  const message = `Halo Bu Sum, saya habis melihat website Aneka Snack Bu Sum dan tertarik dengan produk ${product.name}. Saya ingin bertanya lebih lanjut mengenai produk ini, seperti harga dan minimal pesanannya. Terima kasih, Bu Sum.`;
  const whatsappUrl = createWhatsAppUrl(message);

  return (
    <article className="flex flex-col border border-sawo-matang/25 bg-putih-tulang">
      {imageError ? (
        <div
          role="img"
          aria-label={`Foto ${product.name} belum tersedia`}
          className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 border-b border-sawo-matang/25 bg-kertas-minyak px-4 text-center"
        >
          <p className="font-display text-lg font-semibold text-arang">
            {product.name}
          </p>
          <p className="text-sm text-sawo-matang">
            Foto produk sedang disiapkan.
          </p>
        </div>
      ) : (
        <img
          src={product.image}
          alt={`${product.name} Bu Sum`}
          loading="lazy"
          onError={() => setImageError(true)}
          className="aspect-[4/3] w-full border-b border-sawo-matang/25 object-cover"
        />
      )}

      <div className="flex flex-1 flex-col gap-2 p-4 md:p-5">
        <h3 className="font-display text-lg font-semibold text-arang md:text-xl">
          {product.name}
        </h3>
        <p className="text-sm text-arang md:text-base">{product.description}</p>
        <p className="text-sm text-sawo-matang">
          Harga &amp; minimal order sesuai pesanan
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-11 items-center justify-center bg-gula-jawa px-5 py-2.5 font-semibold text-arang transition-colors hover:bg-sawo-matang hover:text-putih-tulang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang focus-visible:ring-offset-2 focus-visible:ring-offset-putih-tulang"
        >
          Pesan
        </a>
      </div>
    </article>
  );
}
