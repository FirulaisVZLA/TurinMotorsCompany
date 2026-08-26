// Datos de marketing por modelo. Fuente estatica en codigo (no Supabase):
// galeria, ficha tecnica PDF, seguridad, garantia y carta de colores.
// El inventario (precio, specs numericas, colores por nombre+hex) vive en
// Supabase (ver src/lib/inventory.ts) una vez el cliente lo cargue.
//
// TODO pendientes de datos reales del cliente (no inventar):
// - orden curado de fotos por modelo (por ahora: orden alfabetico de archivo,
//   exterior antes que interior)
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
    slug: "abarth",
    name: "Abarth",
    gallery: [
      { src: "/images/abarth/exterior/abarth-exterior-01.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/exterior/abarth-exterior-02.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/exterior/abarth-exterior-03.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/exterior/abarth-exterior-04.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/exterior/abarth-exterior-05.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/exterior/abarth-exterior-06.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/exterior/abarth-exterior-07.jpg", alt: "FIAT Abarth - exterior" },
      { src: "/images/abarth/interior/abarth-interior-01.jpg", alt: "FIAT Abarth - interior" },
      { src: "/images/abarth/interior/abarth-interior-02.jpg", alt: "FIAT Abarth - interior" },
      { src: "/images/abarth/interior/abarth-interior-03.jpg", alt: "FIAT Abarth - interior" },
      { src: "/images/abarth/interior/abarth-interior-04.jpg", alt: "FIAT Abarth - interior" },
      { src: "/images/abarth/interior/abarth-interior-05.jpg", alt: "FIAT Abarth - interior" },
      { src: "/images/abarth/interior/abarth-interior-06.jpg", alt: "FIAT Abarth - interior" },
      { src: "/images/abarth/extra/abarth-extra-01.jpg", alt: "FIAT Abarth" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: null,
    colores: null,
    videos: [
      { src: "/videos/abarth-alerta-de-saida-de-faixa.mp4", description: "TODO: descripcion en espanol de esta caracteristica de seguridad (video de referencia en portugues)." },
      { src: "/videos/abarth-farol-automatico.mp4", description: "TODO: descripcion en espanol de esta caracteristica de seguridad (video de referencia en portugues)." }
    ],
  },
  {
    slug: "argo-trekking",
    name: "Argo Trekking",
    gallery: [
      { src: "/images/argo-trekking/exterior/argo-trekking-exterior-01.jpeg", alt: "FIAT Argo Trekking - exterior" },
      { src: "/images/argo-trekking/exterior/argo-trekking-exterior-02.jpeg", alt: "FIAT Argo Trekking - exterior" },
      { src: "/images/argo-trekking/exterior/argo-trekking-exterior-03.jpeg", alt: "FIAT Argo Trekking - exterior" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-01.jpeg", alt: "FIAT Argo Trekking - interior" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-02.jpeg", alt: "FIAT Argo Trekking - interior" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-03.jpg", alt: "FIAT Argo Trekking - interior" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-04.jpg", alt: "FIAT Argo Trekking - interior" },
      { src: "/images/argo-trekking/interior/argo-trekking-interior-05.jpg", alt: "FIAT Argo Trekking - interior" },
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
      { src: "/images/cronos/exterior/cronos-exterior-01.png", alt: "FIAT Cronos - exterior" },
      { src: "/images/cronos/exterior/cronos-exterior-02.jpg", alt: "FIAT Cronos - exterior" },
      { src: "/images/cronos/interior/cronos-interior-01.jpg", alt: "FIAT Cronos - interior" },
      { src: "/images/cronos/interior/cronos-interior-02.jpg", alt: "FIAT Cronos - interior" },
      { src: "/images/cronos/interior/cronos-interior-03.jpg", alt: "FIAT Cronos - interior" },
      { src: "/images/cronos/interior/cronos-interior-04.jpg", alt: "FIAT Cronos - interior" },
      { src: "/images/cronos/interior/cronos-interior-05.jpg", alt: "FIAT Cronos - interior" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_cronos.pdf",
    seguridad: null,
    garantia: null,
    colores: null,
  },
  {
    slug: "fastback",
    name: "Fastback",
    gallery: [
      { src: "/images/fastback/exterior/fastback-exterior-01.jpg", alt: "FIAT Fastback - exterior" },
      { src: "/images/fastback/exterior/fastback-exterior-02.jpg", alt: "FIAT Fastback - exterior" },
      { src: "/images/fastback/exterior/fastback-exterior-03.jpg", alt: "FIAT Fastback - exterior" },
      { src: "/images/fastback/exterior/fastback-exterior-04.jpg", alt: "FIAT Fastback - exterior" },
      { src: "/images/fastback/exterior/fastback-exterior-05.jpg", alt: "FIAT Fastback - exterior" },
      { src: "/images/fastback/exterior/fastback-exterior-06.jpg", alt: "FIAT Fastback - exterior" },
      { src: "/images/fastback/interior/fastback-interior-01.jpg", alt: "FIAT Fastback - interior" },
      { src: "/images/fastback/interior/fastback-interior-02.jpg", alt: "FIAT Fastback - interior" },
      { src: "/images/fastback/interior/fastback-interior-03.jpg", alt: "FIAT Fastback - interior" },
      { src: "/images/fastback/interior/fastback-interior-04.jpg", alt: "FIAT Fastback - interior" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_fastback.pdf",
    seguridad: null,
    garantia: null,
    colores: null,
  },
  {
    slug: "fiorino",
    name: "Fiorino",
    gallery: [
      { src: "/images/fiorino/exterior/fiorino-exterior-01.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/exterior/fiorino-exterior-02.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/exterior/fiorino-exterior-03.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/exterior/fiorino-exterior-04.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/exterior/fiorino-exterior-05.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/exterior/fiorino-exterior-06.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/exterior/fiorino-exterior-07.jpg", alt: "FIAT Fiorino - exterior" },
      { src: "/images/fiorino/interior/fiorino-interior-01.jpg", alt: "FIAT Fiorino - interior" },
      { src: "/images/fiorino/interior/fiorino-interior-02.jpg", alt: "FIAT Fiorino - interior" },
      { src: "/images/fiorino/interior/fiorino-interior-03.jpg", alt: "FIAT Fiorino - interior" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: null,
    colores: null,
  },
  {
    slug: "mobi",
    name: "Mobi",
    gallery: [
      { src: "/images/mobi/exterior/mobi-exterior-01.jpg", alt: "FIAT Mobi - exterior" },
      { src: "/images/mobi/exterior/mobi-exterior-02.jpg", alt: "FIAT Mobi - exterior" },
      { src: "/images/mobi/exterior/mobi-exterior-03.jpg", alt: "FIAT Mobi - exterior" },
      { src: "/images/mobi/exterior/mobi-exterior-04.jpg", alt: "FIAT Mobi - exterior" },
      { src: "/images/mobi/exterior/mobi-exterior-05.jpg", alt: "FIAT Mobi - exterior" },
      { src: "/images/mobi/interior/mobi-interior-01.jpg", alt: "FIAT Mobi - interior" },
      { src: "/images/mobi/interior/mobi-interior-02.jpg", alt: "FIAT Mobi - interior" },
      { src: "/images/mobi/interior/mobi-interior-03.jpg", alt: "FIAT Mobi - interior" },
      { src: "/images/mobi/interior/mobi-interior-04.jpg", alt: "FIAT Mobi - interior" },
      { src: "/images/mobi/interior/mobi-interior-05.jpg", alt: "FIAT Mobi - interior" },
      { src: "/images/mobi/interior/mobi-interior-06.jpg", alt: "FIAT Mobi - interior" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_mobi.pdf",
    seguridad: null,
    garantia: null,
    colores: null,
  },
  {
    slug: "pulse",
    name: "Pulse",
    gallery: [
      { src: "/images/pulse/extra/pulse-extra-01.jpg", alt: "FIAT Pulse" },
      { src: "/images/pulse/extra/pulse-extra-02.jpg", alt: "FIAT Pulse" },
      { src: "/images/pulse/extra/pulse-extra-03.jpg", alt: "FIAT Pulse" },
      { src: "/images/pulse/extra/pulse-extra-04.webp", alt: "FIAT Pulse" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: null,
    colores: null,
  },
  {
    slug: "toro",
    name: "Toro",
    gallery: [
      { src: "/images/toro/exterior/toro-exterior-01.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-02.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-03.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-04.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-05.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-06.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-07.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/exterior/toro-exterior-08.jpg", alt: "FIAT Toro - exterior" },
      { src: "/images/toro/interior/toro-interior-01.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-02.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-03.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-04.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-05.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-06.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-07.jpg", alt: "FIAT Toro - interior" },
      { src: "/images/toro/interior/toro-interior-08.jpg", alt: "FIAT Toro - interior" },
    ],
    fichaTecnicaPdf: null,
    seguridad: null,
    garantia: null,
    colores: null,
  },
];
