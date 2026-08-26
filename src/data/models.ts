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
// - texto de seguridad y garantia por modelo
// - carta de colores (nombre + hex + foto) por modelo
// - fichas tecnicas PDF de Abarth, Fiorino, Pulse y Toro (faltan)

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ModelData {
  slug: string;
  name: string;
  gallery: GalleryImage[];
  fichaTecnicaPdf: string | null;
  seguridad: string[] | null;
  garantia: string | null;
  colores: { name: string; hex: string; image: string | null }[] | null;
  videos?: { src: string; description: string }[];
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
    seguridad: null,
    garantia: null,
    colores: null,
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
    seguridad: null,
    garantia: null,
    colores: null,
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
    seguridad: null,
    garantia: null,
    colores: null,
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
    garantia: null,
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
    garantia: null,
    colores: null,
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
    seguridad: null,
    garantia: null,
    colores: null,
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
    garantia: null,
    colores: null,
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
    garantia: null,
    colores: null,
    videos: [
      { src: "/videos/abarth-alerta-de-saida-de-faixa.mp4", description: "TODO: descripcion en espanol de esta caracteristica de seguridad (video de referencia en portugues)." },
      { src: "/videos/abarth-farol-automatico.mp4", description: "TODO: descripcion en espanol de esta caracteristica de seguridad (video de referencia en portugues)." },
    ],
  },
];
