// Fuente única de verdad para nombre, contacto y redes del sitio.

export const siteInfo = {
  businessName: "Turín Motors",
  brand: "FIAT",
  city: "Maturín",
  state: "Monagas",
  country: "Venezuela",

  email: "Turinmotorscompanyca@gmail.com",

  // El cliente confirmó que el WhatsApp ES el teléfono de contacto (no hay
  // teléfono fijo aparte) -- se usa un solo campo para ambos.
  whatsapp: "+58 424-9402160",
  whatsappLink: "https://wa.me/584249402160",

  addressText: "Av. Juncal Sur, Maturín 6201, Monagas, Venezuela",
  mapsUrl: "https://maps.app.goo.gl/chBLPev1Yj5qwdbAA?g_st=ic",
  // Coordenadas exactas del pin de Turín Motors en Google Maps, resueltas
  // del link corto de arriba (mismo ftid 0x8c3347001cee60cd:0x57bb9c2a4993db58
  // que ya traía "contacto fiat.docx") -- se usan para el mapa embebido, más
  // preciso que buscar por texto de dirección.
  mapsLat: 9.7337862,
  mapsLng: -63.183595,

  // Mismo horario que Turín Motors confirmó usar (igual al de Kaiyi):
  // lunes a viernes, jornada partida.
  openingHours: {
    label: "Lunes a viernes de 8:00am a 12:00pm y de 2:00pm a 5:00pm",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    morning: { opens: "08:00", closes: "12:00" },
    afternoon: { opens: "14:00", closes: "17:00" },
  },

  social: {
    instagram: "https://www.instagram.com/fiatturinmotors",
    tiktok: "https://www.tiktok.com/@fiatturinmotors",
  },

  // Compromiso de tiempo de respuesta mostrado antes de enviar el formulario de cotización.
  // TODO: confirmar con el cliente si "24 horas hábiles" es el compromiso real.
  responseTimePromise: "Te contactaremos en menos de 24 horas hábiles.",
};
