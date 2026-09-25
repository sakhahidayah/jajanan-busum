import { MapPin } from "lucide-react";
import {
  contact,
  createGoogleMapsUrl,
  createWhatsAppUrl,
  defaultWhatsAppMessage,
} from "../data/contact.js";

export default function Contact() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-putih-tulang">
      <div
        aria-hidden="true"
        className="pattern-kawung fade-corner-br pointer-events-none absolute -bottom-4 -right-4 h-28 w-36 opacity-60 md:h-36 md:w-48"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-280 gap-8 px-4 py-10 md:grid-cols-2 md:gap-12 md:px-6 md:py-14">
        <div className="flex flex-col gap-4">
          <div aria-hidden="true" className="pattern-lurik h-1.5 w-16" />
          <h2 className="font-display text-3xl font-semibold text-arang md:text-4xl">
            Mau pesan atau tanya-tanya?
          </h2>
          <p className="max-w-[60ch] text-arang">
            Kalau sedang menyiapkan arisan, syukuran, rapat, atau acara lainnya,
            bisa langsung menghubungi Bu Sum melalui WhatsApp. Sampaikan jajanan
            yang ingin dipesan dan kebutuhan acaranya, nanti bisa ditanyakan
            lebih lanjut.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-semibold text-sawo-matang">Alamat</p>
            <address className="not-italic">
              <a
                href={createGoogleMapsUrl(contact.latitude, contact.longitude)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat lokasi ${contact.address} di Google Maps`}
                className="mt-2 flex min-h-11 items-start gap-2 text-arang underline-offset-4 transition-colors hover:text-sawo-matang hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang focus-visible:ring-offset-2 focus-visible:ring-offset-putih-tulang"
              >
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-sawo-matang"
                />
                <span>{contact.address}</span>
              </a>
            </address>
          </div>

          <div>
            <a
              href={createWhatsAppUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center bg-gula-jawa px-6 py-3 font-semibold text-arang transition-colors hover:bg-sawo-matang hover:text-putih-tulang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang focus-visible:ring-offset-2 focus-visible:ring-offset-putih-tulang"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
