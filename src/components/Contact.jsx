import { MapPin } from "lucide-react";
import {
  contact,
  createWhatsAppUrl,
  defaultWhatsAppMessage,
} from "../data/contact.js";

export default function Contact() {
  return (
    <section id="kontak">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-10 md:px-6 md:py-14">
        <h2 className="font-display text-3xl font-semibold text-arang md:text-4xl">
          Mau pesan atau tanya-tanya?
        </h2>
        <p className="mt-4 max-w-[60ch] text-arang">
          Silakan hubungi Bu Sum melalui WhatsApp.
        </p>

        <address className="mt-5 flex items-start gap-2 not-italic text-arang">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-sawo-matang"
          />
          <span>{contact.address}</span>
        </address>

        <a
          href={createWhatsAppUrl(defaultWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center justify-center bg-gula-jawa px-6 py-3 font-semibold text-arang transition-colors hover:bg-sawo-matang hover:text-putih-tulang focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sawo-matang focus-visible:ring-offset-2 focus-visible:ring-offset-kertas-minyak"
        >
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
