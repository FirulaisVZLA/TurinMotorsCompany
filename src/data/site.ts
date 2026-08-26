// Fuente única de verdad para nombre, contacto y redes del sitio.
// TODO pendientes de datos reales del cliente (no inventar):
// - correo de contacto
// - teléfono fijo (además del WhatsApp)
// - dirección en texto (solo tenemos el link de Google Maps)
// - horario de atención

export const siteInfo = {
  businessName: "Turín Motors",
  brand: "FIAT",
  city: "Maturín",
  state: "Monagas",
  country: "Venezuela",

  email: null as string | null, // TODO: falta
  phone: null as string | null, // TODO: falta (teléfono fijo, si existe)
  whatsapp: "+58 424-9402160",
  whatsappLink: "https://wa.me/584249402160",

  addressText: null as string | null, // TODO: falta dirección en texto
  mapsUrl:
    "https://www.google.com/maps/place/Tur%C3%ADn+Motors/@9.7337915,-63.1861699,17z/data=!4m6!3m5!1s0x8c3347001cee60cd:0x57bb9c2a4993db58!8m2!3d9.7337862!4d-63.183595!16s%2Fg%2F11x2vq0dlg",

  openingHours: null as { days: string; hours: string }[] | null, // TODO: falta horario

  social: {
    instagram: "https://www.instagram.com/fiatturinmotors",
    tiktok: "https://www.tiktok.com/@fiatturinmotors",
  },

  // Compromiso de tiempo de respuesta mostrado antes de enviar el formulario de cotización.
  // TODO: confirmar con el cliente si "24 horas hábiles" es el compromiso real.
  responseTimePromise: "Te contactaremos en menos de 24 horas hábiles.",
};
