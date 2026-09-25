export const contact = {
  whatsappNumber: "6282210899088",
  address: "Ngompuan, Platarejo, Kec. Giriwoyo, Kabupaten Wonogiri, Jawa Tengah",
  latitude: -8.021099,
  longitude: 110.907491,
};

export const defaultWhatsAppMessage = "Halo Bu Sum, saya mau tanya jajanan.";

export const createWhatsAppUrl = (message) => {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const createGoogleMapsUrl = (latitude, longitude) => {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
};
