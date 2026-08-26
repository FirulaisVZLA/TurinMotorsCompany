// Fuente única de verdad para nombre, contacto y redes del sitio.
// TODO pendientes de datos reales del cliente (no inventar):
// - horario de atención (bloquea el calendario de "Agenda tu Servicio")

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

  // TODO: falta horario de atención (días + horas de mañana/tarde). Bloquea
  // el calendario de citas de "Agenda tu Servicio" -- sin esto no se pueden
  // generar los cupos disponibles, no se debe inventar un horario de relleno.
  openingHours: null as {
    label: string;
    days: string[]; // nombres en inglés de Date.getDay(), ej. "Monday"
    morning: { opens: string; closes: string };
    afternoon: { opens: string; closes: string };
  } | null,

  social: {
    instagram: "https://www.instagram.com/fiatturinmotors",
    tiktok: "https://www.tiktok.com/@fiatturinmotors",
  },

  // Compromiso de tiempo de respuesta mostrado antes de enviar el formulario de cotización.
  // TODO: confirmar con el cliente si "24 horas hábiles" es el compromiso real.
  responseTimePromise: "Te contactaremos en menos de 24 horas hábiles.",
};
