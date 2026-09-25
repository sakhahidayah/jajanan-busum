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
          <div aria-hidden="true" className="pattern-lurik h-1.5 w-16" />
          <h2 className="font-display text-3xl font-semibold text-arang md:text-4xl">
            Tentang Jajanan Bu Sum
          </h2>
          <p className="max-w-[60ch] text-arang">
            Jajanan Bu Sum adalah usaha jajanan rumahan yang menerima pesanan
            untuk berbagai kebutuhan acara. Jajanan dibuat sesuai pesanan,
            sehingga dapat disiapkan untuk kegiatan seperti arisan, syukuran,
            rapat desa, maupun acara berkumpul lainnya.
          </p>
          <p className="max-w-[60ch] text-arang">
            Lihat pilihan jajanan kami, lalu hubungi Bu Sum melalui WhatsApp
            untuk menanyakan harga dan pemesanan.
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
