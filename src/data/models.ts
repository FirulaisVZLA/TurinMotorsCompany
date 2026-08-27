// Datos de marketing por modelo. Fuente estatica en codigo (no Supabase):
// galeria, ficha tecnica PDF, seguridad, garantia y carta de colores.
// El inventario (precio, specs numericas, colores por nombre+hex) vive en
// Supabase (ver src/lib/inventory.ts) una vez el cliente lo cargue.
//
// Orden de los modelos (y por lo tanto del menu del header, que se genera
// a partir de este array) confirmado por el cliente el 2026-08-26: Mobi,
// Argo, Cronos, Fiorino, Pulse, Fastback, Toro y por ultimo Abarth (seccion
// especial con transicion de color, ver AbarthSection/ModelSection).
//
// TODO pendientes de datos reales del cliente (no inventar):
// - texto de seguridad de Abarth, Fiorino, Pulse y Toro (sin ficha tecnica
//   PDF todavia no se puede extraer; garantia SI aplica a los 8, el cliente
//   confirmo "36 meses o 100.000 km, lo que ocurra primero" para todos)
// - foto real de cada color (los nombres+hex de abajo son el swatch de
//   color, no una foto del carro en ese color -- image queda null hasta
//   que el cliente la mande)
// - fichas tecnicas PDF de Abarth, Fiorino, Pulse y Toro (faltan)
//
// Los hex de FIAT_COLOR_HEX son aproximaciones visuales a partir del
// nombre oficial de Fiat -- los de Mobi/Argo/Cronos/Fastback vienen del
// nombre leido en su ficha tecnica; los de Pulse y Toro los dio el cliente
// directamente el 2026-08-26 (pidio explicitamente NO marcarlos como
// aproximados en el sitio, a diferencia de la ronda anterior).

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ColorOption {
  name: string;
  hex: string;
  image: string | null;
}

export interface ModelData {
  slug: string;
  name: string;
  gallery: GalleryImage[];
  fichaTecnicaPdf: string | null;
  seguridad: string[] | null;
  garantia: string | null;
  colores: ColorOption[] | null;
  videos?: { src: string; description: string }[];
}

// Hex por nombre de color Fiat (compartidos entre modelos que repiten el
// mismo nombre, ej. "Negro Vulcano" aparece en varias fichas).
const FIAT_COLOR_HEX: Record<string, string> = {
  "Blanco Banchisa": "#F1F1EE",
  "Blanco Alaska": "#F4F4F2",
  "Negro Vulcano": "#161616",
  "Rojo Montecarlo": "#B10E1E",
  "Gris Silverstone": "#8A8D8F",
  "Plata Bari": "#C7C9CB",
  "Gris Strato": "#A9ACAE",
  // Dados por el cliente para Toro (2026-08-26), sin ficha tecnica propia:
  "Blanco Ambiente / Blanco Polar": "#F4F4F2",
  "Negro Carbón": "#1A1A1C",
  "Rojo Tribal": "#B8202B",
  "Gris Billet": "#B7B9BB",
  "Gris Granite Crystal": "#4A4A4C",
  "Azul Jazz": "#1B4B8F",
  "Gris Sting": "#8B8D8E",
};

function color(name: string): ColorOption {
  return { name, hex: FIAT_COLOR_HEX[name], image: null };
}

export const models: ModelData[] = [
  {
    slug: "mobi",
    name: "Mobi",
    gallery: [
      { src: "/images/mobi/exterior/mobi-exterior-01.jpg", alt: "FIAT Mobi: Vista frontal 3/4 en estudio" },
      { src: "/images/mobi/exterior/mobi-exterior-04.jpg", alt: "FIAT Mobi: Vista trasera 3/4 en estudio" },
      { src: "/images/mobi/exterior/mobi-exterior-05.jpg", alt: "FIAT Mobi: Detalle de rueda delantera y faro antiniebla" },
      { src: "/images/mobi/exterior/mobi-exterior-03.jpg", alt: "FIAT Mobi: Detalle de la llanta trasera" },
      { src: "/images/mobi/exterior/mobi-exterior-02.jpg", alt: "FIAT Mobi: Detalle del faro delantero" },
      { src: "/images/mobi/interior/mobi-interior-06.jpg", alt: "FIAT Mobi: Vista amplia del volante, tablero y pantalla multimedia" },
      { src: "/images/mobi/interior/mobi-interior-04.jpg", alt: "FIAT Mobi: Volante y tablero de instrumentos (vista cercana)" },
      { src: "/images/mobi/interior/mobi-interior-05.jpg", alt: "FIAT Mobi: Detalle del tablero de instrumentos digital" },
      { src: "/images/mobi/interior/mobi-interior-03.jpg", alt: "FIAT Mobi: Pantalla multimedia con Apple CarPlay" },
      { src: "/images/mobi/interior/mobi-interior-02.jpg", alt: "FIAT Mobi: Controles de aire acondicionado" },
      { src: "/images/mobi/interior/mobi-interior-01.jpg", alt: "FIAT Mobi: Palanca de cambios" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_mobi.pdf",
    seguridad: [
      "2 Airbags (frontales conductor y pasajero)",
      "Alarma de seguridad con control remoto",
      "Control electrónico de estabilidad (ESC) y de tracción (TC)",
      "Sistema de frenos ABS + EBD",
      "Sistema de asistencia al arranque en pendiente (HLA)",
      "Sistema de Monitoreo de Presión de Neumáticos (TPMS)",
      "Sistema de sujeción de sillas para niños (ISOFIX)",
      "Cinturones de seguridad delanteros reg. en altura",
      "Cinturones de seguridad posteriores de 3 puntos",
      "Cierre centralizado de puertas a 20 Km/h",
    ],
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: [color("Blanco Banchisa"), color("Negro Vulcano"), color("Rojo Montecarlo"), color("Gris Silverstone")],
  },
  {
    slug: "argo-trekking",
    name: "Argo Trekking",
    gallery: [
      { src: "/images/argo-trekking/exterior/argo-trekking-exterior-02.jpeg", alt: "FIAT Argo Trekking: Vista frontal 3/4" },
      { src: "/images/argo-trekking/exterior/argo-trekking-exterior-01.jpeg", alt: "FIAT Argo Trekking: Vista trasera 3/4" },
      { src: "/images/argo-trekking/exterior/argo-trekking-exterior-03.jpeg", alt: "FIAT Argo Trekking: Perfil lateral" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-04.jpg", alt: "FIAT Argo Trekking: Vista amplia del volante, tablero y pantalla multimedia" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-05.jpg", alt: "FIAT Argo Trekking: Volante y tablero de instrumentos (vista cercana)" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-01.jpeg", alt: "FIAT Argo Trekking: Vista general del tablero con pantalla multimedia" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-03.jpg", alt: "FIAT Argo Trekking: Pantalla multimedia (radio)" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-02.jpeg", alt: "FIAT Argo Trekking: Palanca de cambios automática" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_argo.pdf",
    // Ficha tecnica tiene columnas "MT/CVT" (Trekking) y "Endurance" -- se usa
    // la columna MT/CVT (menciona "edicion Trekking" en Diseno), la Endurance
    // se descarta a pedido del cliente.
    seguridad: [
      "2 Airbags (frontales conductor y pasajero)",
      "Alarma de seguridad con control remoto",
      "Control electrónico de estabilidad (ESC) de tracción (TC)",
      "Sistema de frenos ABS + EBD",
      "Control de tracción avanzado + ABS off road",
      "Sistema de asistencia al arranque en pendiente (HLA)",
      "Sistema de Monitoreo de Presión de Neumáticos (TPMS)",
      "Sistema de sujeción de sillas para niños (ISOFIX)",
      "Cinturones de seguridad delanteros reg. en altura",
      "Cinturones de seguridad posteriores de 3 puntos",
      "Cierre centralizado de puertas a 20 Km/h",
      "Cámara de estacionamiento trasera",
    ],
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: [color("Blanco Banchisa"), color("Negro Vulcano"), color("Rojo Montecarlo"), color("Gris Silverstone")],
  },
  {
    slug: "cronos",
    name: "Cronos",
    gallery: [
      { src: "/images/cronos/exterior/cronos-exterior-01.png", alt: "FIAT Cronos: Vista frontal 3/4" },
      { src: "/images/cronos/exterior/cronos-exterior-02.jpg", alt: "FIAT Cronos: Vista trasera 3/4" },
      { src: "/images/cronos/interior/cronos-interior-02.jpg", alt: "FIAT Cronos: Volante y tablero de instrumentos" },
      { src: "/images/cronos/interior/cronos-interior-03.jpg", alt: "FIAT Cronos: Asientos traseros" },
      { src: "/images/cronos/interior/cronos-interior-01.jpg", alt: "FIAT Cronos: Palanca de cambios automática" },
      { src: "/images/cronos/interior/cronos-interior-04.jpg", alt: "FIAT Cronos: Detalle del faro delantero" },
      { src: "/images/cronos/interior/cronos-interior-05.jpg", alt: "FIAT Cronos: Detalle del motor" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_cronos.pdf",
    seguridad: [
      "2 Airbags (frontales conductor y pasajero)",
      "Alarma Perimetral",
      "Apoyacabezas regulables en altura (5)",
      "Control electrónico de tracción (TC) y estabilidad (ESC)",
      "Sistema de sujeción de sillas para niños (ISOFIX)",
      "Cinturones de seguridad delanteros reg. en altura",
      "Cinturones de seguridad posteriores de 3 puntos",
      "Cierre centralizado de puertas a 20 Km/h",
    ],
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: [color("Blanco Alaska"), color("Negro Vulcano"), color("Gris Silverstone"), color("Plata Bari")],
  },
  {
    slug: "fiorino",
    name: "Fiorino",
    gallery: [
      { src: "/images/fiorino/exterior/fiorino-exterior-01.jpg", alt: "FIAT Fiorino: Vista frontal recta" },
      { src: "/images/fiorino/exterior/fiorino-exterior-04.jpg", alt: "FIAT Fiorino: Vista trasera 3/4" },
      { src: "/images/fiorino/exterior/fiorino-exterior-02.jpg", alt: "FIAT Fiorino: Vista frontal 3/4" },
      { src: "/images/fiorino/exterior/fiorino-exterior-03.jpg", alt: "FIAT Fiorino: Perfil lateral" },
      { src: "/images/fiorino/exterior/fiorino-exterior-07.jpg", alt: "FIAT Fiorino: Puertas traseras abiertas, área de carga vacía" },
      { src: "/images/fiorino/exterior/fiorino-exterior-05.jpg", alt: "FIAT Fiorino: Puertas traseras abiertas con cajas de carga" },
      { src: "/images/fiorino/exterior/fiorino-exterior-06.jpg", alt: "FIAT Fiorino: Puertas traseras abiertas, carga vista desde atrás" },
      { src: "/images/fiorino/interior/fiorino-interior-03.jpg", alt: "FIAT Fiorino: Volante y tablero de instrumentos" },
      { src: "/images/fiorino/interior/fiorino-interior-01.jpg", alt: "FIAT Fiorino: Asientos delanteros" },
      { src: "/images/fiorino/interior/fiorino-interior-02.jpg", alt: "FIAT Fiorino: Detalle de compartimento de puerta" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: null,
  },
  {
    slug: "pulse",
    name: "Pulse",
    gallery: [
      { src: "/images/pulse/extra/pulse-extra-04.webp", alt: "FIAT Pulse: Vista frontal 3/4" },
      { src: "/images/pulse/extra/pulse-extra-03.jpg", alt: "FIAT Pulse: Vista trasera 3/4" },
      { src: "/images/pulse/extra/pulse-extra-02.jpg", alt: "FIAT Pulse: Volante y tablero de instrumentos (vista cercana)" },
      { src: "/images/pulse/extra/pulse-extra-01.jpg", alt: "FIAT Pulse: Vista amplia del tablero, volante y asientos" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: [
      color("Blanco Banchisa"),
      color("Rojo Montecarlo"),
      color("Negro Vulcano"),
      color("Plata Bari"),
      color("Gris Silverstone"),
      color("Gris Strato"),
    ],
  },
  {
    slug: "fastback",
    name: "Fastback",
    gallery: [
      { src: "/images/fastback/exterior/fastback-exterior-01.jpg", alt: "FIAT Fastback: Vista frontal 3/4 superior" },
      { src: "/images/fastback/exterior/fastback-exterior-02.jpg", alt: "FIAT Fastback: Vista trasera 3/4" },
      { src: "/images/fastback/exterior/fastback-exterior-03.jpg", alt: "FIAT Fastback: Perfil lateral" },
      { src: "/images/fastback/exterior/fastback-exterior-04.jpg", alt: "FIAT Fastback: Vista trasera recta" },
      { src: "/images/fastback/exterior/fastback-exterior-06.jpg", alt: "FIAT Fastback: Maletero con equipaje" },
      { src: "/images/fastback/exterior/fastback-exterior-05.jpg", alt: "FIAT Fastback: Detalle del motor" },
      { src: "/images/fastback/interior/fastback-interior-03.jpg", alt: "FIAT Fastback: Vista amplia del volante, tablero y pantalla multimedia" },
      { src: "/images/fastback/interior/fastback-interior-04.jpg", alt: "FIAT Fastback: Detalle de la pantalla multimedia con navegación" },
      { src: "/images/fastback/interior/fastback-interior-01.jpg", alt: "FIAT Fastback: Asientos delanteros" },
      { src: "/images/fastback/interior/fastback-interior-02.jpg", alt: "FIAT Fastback: Asientos traseros" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_fastback.pdf",
    seguridad: [
      "2 Airbags (frontales conductor y pasajero)",
      "2 Airbags laterales (protección tórax y cabeza)",
      "Alarma",
      "Control electrónico de estabilidad (ESC) de tracción (TC)",
      "Sistema de frenos ABS + EBD",
      "Control de tracción avanzado + ABS off road",
      "Sistema de asistencia al arranque en pendiente (HLA)",
      "Sistema de Monitoreo de Presión de Neumáticos (TPMS)",
      "Sistema de sujeción de sillas para niños (ISOFIX)",
      "Cinturones de seguridad delanteros reg. en altura",
      "Cinturones de seguridad posteriores de 3 puntos",
      "Sistema de mantenimiento de cambio de carril activo",
      "Frenado autónomo de emergencia",
    ],
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: [
      color("Blanco Banchisa"),
      color("Negro Vulcano"),
      color("Gris Strato"),
      color("Gris Silverstone"),
      color("Plata Bari"),
    ],
  },
  {
    slug: "toro",
    name: "Toro",
    gallery: [
      { src: "/images/toro/exterior/toro-exterior-06.jpg", alt: "FIAT Toro: Vista frontal recta" },
      { src: "/images/toro/exterior/toro-exterior-08.jpg", alt: "FIAT Toro: Vista trasera 3/4" },
      { src: "/images/toro/exterior/toro-exterior-07.jpg", alt: "FIAT Toro: Detalle del frontal con parrilla y faros" },
      { src: "/images/toro/exterior/toro-exterior-03.jpg", alt: "FIAT Toro: Detalle del faro delantero" },
      { src: "/images/toro/exterior/toro-exterior-02.jpg", alt: "FIAT Toro: Detalle de la llanta" },
      { src: "/images/toro/exterior/toro-exterior-01.jpg", alt: "FIAT Toro: Caja de carga con cobertor enrollable abierto" },
      { src: "/images/toro/exterior/toro-exterior-05.jpg", alt: "FIAT Toro: Vista del motor bajo el capó" },
      { src: "/images/toro/exterior/toro-exterior-04.jpg", alt: "FIAT Toro: Detalle del motor turbo diésel" },
      { src: "/images/toro/interior/toro-interior-08.jpg", alt: "FIAT Toro: Volante y tablero de instrumentos (vista cercana)" },
      { src: "/images/toro/interior/toro-interior-01.jpg", alt: "FIAT Toro: Vista amplia del tablero, volante, pantalla y asientos" },
      { src: "/images/toro/interior/toro-interior-02.jpg", alt: "FIAT Toro: Asientos delanteros" },
      { src: "/images/toro/interior/toro-interior-04.jpg", alt: "FIAT Toro: Pantalla multimedia con navegación" },
      { src: "/images/toro/interior/toro-interior-05.jpg", alt: "FIAT Toro: Tablero de instrumentos digital (alerta de colisión)" },
      { src: "/images/toro/interior/toro-interior-03.jpg", alt: "FIAT Toro: Cargador inalámbrico y palanca de cambios" },
      { src: "/images/toro/interior/toro-interior-06.jpg", alt: "FIAT Toro: Detalle del freno de estacionamiento electrónico" },
      { src: "/images/toro/interior/toro-interior-07.jpg", alt: "FIAT Toro: Botones de tracción 4x4" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    colores: [
      color("Blanco Ambiente / Blanco Polar"),
      color("Negro Carbón"),
      color("Rojo Tribal"),
      color("Gris Billet"),
      color("Gris Granite Crystal"),
      color("Azul Jazz"),
      color("Gris Sting"),
    ],
  },
  {
    slug: "abarth",
    name: "Abarth",
    gallery: [
      { src: "/images/abarth/extra/abarth-extra-01.jpg", alt: "FIAT Abarth: Vista frontal 3/4 en movimiento" },
      { src: "/images/abarth/exterior/abarth-exterior-01.jpg", alt: "FIAT Abarth: Vista trasera recta" },
      { src: "/images/abarth/exterior/abarth-exterior-07.jpg", alt: "FIAT Abarth: Vista superior del techo y parabrisas" },
      { src: "/images/abarth/exterior/abarth-exterior-04.jpg", alt: "FIAT Abarth: Detalle de puerta, espejo y emblema Abarth" },
      { src: "/images/abarth/exterior/abarth-exterior-02.jpg", alt: "FIAT Abarth: Detalle de faro delantero y parrilla" },
      { src: "/images/abarth/exterior/abarth-exterior-03.jpg", alt: "FIAT Abarth: Detalle de la parrilla con logo Abarth" },
      { src: "/images/abarth/exterior/abarth-exterior-06.jpg", alt: "FIAT Abarth: Detalle de la llanta" },
      { src: "/images/abarth/exterior/abarth-exterior-05.jpg", alt: "FIAT Abarth: Vista del motor bajo el capó" },
      { src: "/images/abarth/interior/abarth-interior-04.jpg", alt: "FIAT Abarth: Vista amplia del tablero, volante y asientos" },
      { src: "/images/abarth/interior/abarth-interior-06.jpg", alt: "FIAT Abarth: Detalle del centro del volante con logo Abarth" },
      { src: "/images/abarth/interior/abarth-interior-03.jpg", alt: "FIAT Abarth: Tablero de instrumentos digital" },
      { src: "/images/abarth/interior/abarth-interior-01.jpg", alt: "FIAT Abarth: Asientos delanteros con logo Abarth" },
      { src: "/images/abarth/interior/abarth-interior-02.jpg", alt: "FIAT Abarth: Cargador inalámbrico y palanca de cambios" },
      { src: "/images/abarth/interior/abarth-interior-05.jpg", alt: "FIAT Abarth: Detalle del panel de puerta y controles de vidrios" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    // El cliente confirmo que Abarth viene en los mismos rojo/negro/blanco
    // que los demas modelos -- se reusan los mismos nombres+hex en vez de
    // inventar unos nuevos.
    colores: [color("Blanco Banchisa"), color("Negro Vulcano"), color("Rojo Montecarlo")],
    videos: [
      {
        src: "/videos/abarth-alerta-de-saida-de-faixa.mp4",
        description: "Alerta de salida de carril: detecta si el vehículo se sale del carril sin usar la señal y avisa al conductor para corregir a tiempo.",
      },
      {
        src: "/videos/abarth-farol-automatico.mp4",
        description: "Faros automáticos: las luces delanteras se encienden y apagan solas según la luz ambiente, sin que el conductor tenga que hacerlo manualmente.",
      },
    ],
  },
];
