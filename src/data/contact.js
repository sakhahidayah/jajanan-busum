export const contact = {
  whatsappNumber: "6282210899088",
  address: "Ngampohan RT 002 / RW 001, Platarejo",
};

export const defaultWhatsAppMessage = "Halo Bu Sum, saya mau tanya jajanan.";

export const createWhatsAppUrl = (message) => {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
