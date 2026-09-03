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

export interface SpecItem {
  label: string;
  value: string;
}

// Una "version" es una variante/trim del mismo modelo con su propia ficha
// tecnica (ej. Cronos: Like/Drive Plus/Stile/Precision) -- se muestra como
// botones clicables sobre una tabla de especificaciones que cambia. La
// galeria principal del modelo se queda fija; `gallery` aqui es opcional,
// solo para versiones con fotos propias (ej. Argo Endurance), se muestra
// como una cuadricula chica debajo de la tabla de specs de esa version.
export interface ModelVersion {
  name: string;
  specs: SpecItem[];
  gallery?: GalleryImage[];
}

export interface ModelData {
  slug: string;
  name: string;
  gallery: GalleryImage[];
  fichaTecnicaPdf: string | null;
  seguridad: string[] | null;
  garantia: string | null;
  colores: ColorOption[] | null;
  versions?: ModelVersion[];
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
    // Ficha tecnica del cliente (2026-09-03) trae 2 columnas: Trekking y
    // Endurance. Endurance ahora si tiene sus propias fotos (carpeta
    // Argo/endurance del cliente, agregadas 2026-09-03).
    versions: [
      {
        name: "Trekking",
        specs: [
          { label: "Carrocería", value: "5 puertas" },
          { label: "Motor", value: "Firefly 1.3, 4 en línea, 2 válvulas/cilindro, 1.332 cc" },
          { label: "Potencia máxima", value: "99 CV / 6.000 rpm" },
          { label: "Par máximo", value: "218 Nm / 4.000 rpm" },
          { label: "Distribución", value: "Cadena \"for life\"" },
          { label: "Alimentación", value: "Inyección electrónica multipunto, gasolina" },
          { label: "Dirección", value: "Asistencia eléctrica, diámetro de giro 10,4 m" },
          { label: "Transmisión", value: "Delantera, caja manual de 5 velocidades o CVT de 7 velocidades" },
          { label: "Neumáticos", value: "185/60 R15 ATR" },
          { label: "Tanque de combustible", value: "48 l" },
          { label: "Peso en orden de marcha", value: "1.187 kg" },
          { label: "Capacidad de baúl", value: "300 l" },
        ],
      },
      {
        name: "Endurance",
        specs: [
          { label: "Carrocería", value: "5 puertas" },
          { label: "Motor", value: "Firefly 1.3, 4 en línea, 2 válvulas/cilindro, 1.332 cc" },
          { label: "Potencia máxima", value: "99 CV / 6.000 rpm" },
          { label: "Par máximo", value: "128 Nm / 4.000 rpm" },
          { label: "Distribución", value: "Cadena \"for life\"" },
          { label: "Alimentación", value: "Inyección electrónica multipunto, gasolina (hasta 5% etanol)" },
          { label: "Dirección", value: "Asistencia eléctrica, diámetro de giro 10 m" },
          { label: "Transmisión", value: "4x2 delantera, caja manual de 5 velocidades" },
          { label: "Neumáticos", value: "205/60 R15 ATR" },
          { label: "Tanque de combustible", value: "47 l" },
          { label: "Peso en orden de marcha", value: "1.131 kg" },
          { label: "Capacidad de baúl", value: "300 l" },
        ],
        gallery: [
          { src: "/images/argo-endurance/argo-endurance-01.jpg", alt: "FIAT Argo Endurance: Vista frontal 3/4" },
          { src: "/images/argo-endurance/argo-endurance-02.jpg", alt: "FIAT Argo Endurance: Detalle del faro delantero" },
          { src: "/images/argo-endurance/argo-endurance-03.jpg", alt: "FIAT Argo Endurance: Vista del motor bajo el capó" },
          { src: "/images/argo-endurance/argo-endurance-04.webp", alt: "FIAT Argo Endurance: Pantalla de cámara de retroceso" },
        ],
      },
    ],
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
    // Ficha tecnica del cliente (2026-09-03): 4 versiones. Las especificaciones
    // mecanicas son identicas entre versiones salvo la caja de cambios
    // (Like/Drive Plus/Stile = manual, Precision = CVT), tal como aparece
    // en la ficha.
    versions: (() => {
      const sharedSpecs: SpecItem[] = [
        { label: "Motor", value: "4 en línea, 2 válvulas/cilindro, 1.332 cc" },
        { label: "Potencia máxima", value: "99 CV / 6.000 rpm" },
        { label: "Par máximo", value: "13,0 kgm / 4.000 rpm" },
        { label: "Nivel de emisiones", value: "Euro 5" },
        { label: "Distribución", value: "Cadena \"for life\", árbol de levas 1 a la cabeza" },
        { label: "Alimentación", value: "Inyección electrónica multipunto, nafta" },
        { label: "Dirección", value: "Asistencia eléctrica con piñón y cremallera, diámetro de giro 10,4 m" },
        { label: "Suspensión delantera", value: "Independiente McPherson, brazos oscilantes inferiores, resortes helicoidales y barra estabilizadora" },
        { label: "Suspensión trasera", value: "Eje de torsión con ruedas semi independientes, amortiguadores y resortes helicoidales" },
        { label: "Frenos (delantero / trasero)", value: "Discos ventilados / Tambor" },
      ];
      return ["Like", "Drive Plus", "Stile", "Precision"].map((name) => ({
        name,
        specs: [{ label: "Caja de cambios", value: name === "Precision" ? "CVT" : "Manual" }, ...sharedSpecs],
      }));
    })(),
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
    fichaTecnicaPdf: "/docs/ficha_tecnica_fiorino.pdf",
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
    fichaTecnicaPdf: "/docs/ficha_tecnica_pulse.pdf",
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
    // Ficha tecnica del cliente (2026-09-03): 5 versiones, 2 motores
    // distintos (1.3 Firefly atmosferico en Drive/S-Design, 1.0 T200 turbo
    // en Audace/Impetus).
    versions: (() => {
      const sharedSpecs: SpecItem[] = [
        { label: "Distribución", value: "Cadena \"for life\"" },
        { label: "Alimentación", value: "Inyección electrónica multipunto, nafta" },
        { label: "Dirección", value: "Asistencia eléctrica, diámetro de giro 10,5 m" },
        { label: "Suspensión delantera", value: "Independiente McPherson, brazos oscilantes transversales, resortes helicoidales y barra estabilizadora" },
        { label: "Suspensión trasera", value: "Eje de torsión con ruedas semi independientes, resortes helicoidales" },
        { label: "Frenos (delantero / trasero)", value: "Disco sólido / Tambor" },
        { label: "Tracción", value: "4x2 delantera" },
        { label: "Tanque de combustible", value: "47 l" },
        { label: "Capacidad de baúl", value: "370 l" },
      ];
      const atmospheric: SpecItem[] = [
        { label: "Motor", value: "1.3 Firefly, 4 en línea, 2 válvulas/cilindro, 1.332 cc" },
        { label: "Potencia máxima", value: "99 CV / 6.000 rpm" },
        { label: "Par máximo", value: "128 Nm / 4.000 rpm" },
        { label: "Neumáticos", value: "195/60 R16" },
      ];
      const turbo: SpecItem[] = [
        { label: "Motor", value: "1.0 T200 Turbonafta, 3 en línea, 4 válvulas/cilindro, 999 cc" },
        { label: "Potencia máxima", value: "120 CV / 5.750 rpm" },
        { label: "Par máximo", value: "200 Nm / 1.750 rpm" },
        { label: "Neumáticos", value: "205/50 R17" },
      ];
      return [
        { name: "Drive MT", specs: [...atmospheric, { label: "Caja de cambios", value: "Manual, 5 vel." }, { label: "Peso en orden de marcha", value: "1.140 kg" }, ...sharedSpecs] },
        { name: "Drive AT", specs: [...atmospheric, { label: "Caja de cambios", value: "CVT, 7 vel." }, { label: "Peso en orden de marcha", value: "1.187 kg" }, ...sharedSpecs] },
        { name: "S-Design AT", specs: [...atmospheric, { label: "Caja de cambios", value: "CVT, 7 vel." }, { label: "Peso en orden de marcha", value: "1.187 kg" }, ...sharedSpecs] },
        { name: "Audace Turbo AT", specs: [...turbo, { label: "Caja de cambios", value: "CVT, 7 vel." }, { label: "Peso en orden de marcha", value: "1.234 kg" }, ...sharedSpecs] },
        { name: "Impetus Turbo AT", specs: [...turbo, { label: "Caja de cambios", value: "CVT, 7 vel." }, { label: "Peso en orden de marcha", value: "1.237 kg" }, ...sharedSpecs] },
      ];
    })(),
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
    fichaTecnicaPdf: "/docs/ficha_tecnica_toro.pdf",
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
    // Ficha tecnica escaneada del cliente (2026-09-03) -- version unica
    // (Freedom T270), sin variantes.
    versions: [
      {
        name: "Freedom T270",
        specs: [
          { label: "Cabina", value: "Doble / 4 puertas" },
          { label: "Motor", value: "Firefly T270 16v, 4 en línea, 4 válvulas/cilindro, 1.332 cc" },
          { label: "Potencia máxima", value: "173 CV / 5.750 rpm" },
          { label: "Par máximo", value: "270 Nm / 1.850 rpm" },
          { label: "Distribución", value: "Cadena; árbol de levas Multiair III en admisión y 1 a la cabeza en escape" },
          { label: "Alimentación", value: "Inyección electrónica digital incorporada, gasolina" },
          { label: "Dirección", value: "Asistencia eléctrica, diámetro de giro 12,2 m" },
          { label: "Suspensión delantera", value: "Independiente McPherson con barra estabilizadora, amortiguadores hidráulicos presurizados y resortes helicoidales" },
          { label: "Suspensión trasera", value: "Independiente Multi-link con barra estabilizadora, amortiguadores hidráulicos presurizados y resortes helicoidales" },
          { label: "Frenos (delantero / trasero)", value: "Disco ventilado Ø305 mm / Tambor Ø295 mm" },
          { label: "Transmisión", value: "4x2 delantera, caja automática de 6 velocidades" },
        ],
      },
    ],
  },
  {
    slug: "abarth",
    // Renombrado el 2026-09-03: la ficha tecnica que mando el cliente
    // confirma que estas fotos y esta seccion especial en realidad son del
    // "Fastback Abarth" (motor 1.3 T270 turbo, trim ABARTH del Fastback),
    // no un modelo "Abarth" generico -- la matricula "FASTBACK" que salia
    // en una de las fotos no era un error, era correcta.
    name: "Fastback Abarth",
    gallery: [
      { src: "/images/abarth/extra/abarth-extra-01.jpg", alt: "FIAT Fastback Abarth: Vista frontal 3/4 en movimiento" },
      { src: "/images/abarth/exterior/abarth-exterior-01.jpg", alt: "FIAT Fastback Abarth: Vista trasera recta" },
      { src: "/images/abarth/exterior/abarth-exterior-07.jpg", alt: "FIAT Fastback Abarth: Vista superior del techo y parabrisas" },
      { src: "/images/abarth/exterior/abarth-exterior-04.jpg", alt: "FIAT Fastback Abarth: Detalle de puerta, espejo y emblema Abarth" },
      { src: "/images/abarth/exterior/abarth-exterior-02.jpg", alt: "FIAT Fastback Abarth: Detalle de faro delantero y parrilla" },
      { src: "/images/abarth/exterior/abarth-exterior-03.jpg", alt: "FIAT Fastback Abarth: Detalle de la parrilla con logo Abarth" },
      { src: "/images/abarth/exterior/abarth-exterior-06.jpg", alt: "FIAT Fastback Abarth: Detalle de la llanta" },
      { src: "/images/abarth/exterior/abarth-exterior-05.jpg", alt: "FIAT Fastback Abarth: Vista del motor bajo el capó" },
      { src: "/images/abarth/interior/abarth-interior-04.jpg", alt: "FIAT Fastback Abarth: Vista amplia del tablero, volante y asientos" },
      { src: "/images/abarth/interior/abarth-interior-06.jpg", alt: "FIAT Fastback Abarth: Detalle del centro del volante con logo Abarth" },
      { src: "/images/abarth/interior/abarth-interior-03.jpg", alt: "FIAT Fastback Abarth: Tablero de instrumentos digital" },
      { src: "/images/abarth/interior/abarth-interior-01.jpg", alt: "FIAT Fastback Abarth: Asientos delanteros con logo Abarth" },
      { src: "/images/abarth/interior/abarth-interior-02.jpg", alt: "FIAT Fastback Abarth: Cargador inalámbrico y palanca de cambios" },
      { src: "/images/abarth/interior/abarth-interior-05.jpg", alt: "FIAT Fastback Abarth: Detalle del panel de puerta y controles de vidrios" },
    ],
    fichaTecnicaPdf: "/docs/ficha_tecnica_fastback_abarth.jpg",
    seguridad: null,
    garantia: "36 meses o 100.000 km, lo que ocurra primero.",
    // El cliente confirmo que Abarth viene en los mismos rojo/negro/blanco
    // que los demas modelos -- se reusan los mismos nombres+hex en vez de
    // inventar unos nuevos.
    colores: [color("Blanco Banchisa"), color("Negro Vulcano"), color("Rojo Montecarlo")],
    // Especificaciones de la ficha tecnica escaneada del cliente
    // (2026-09-03) -- version unica, sin variantes, se muestra como una
    // sola "version" para reusar la misma tabla que Cronos/Pulse/Argo.
    versions: [
      {
        name: "1.3 T270 Turbo",
        specs: [
          { label: "Motor", value: "1.3 T270 Turbo, 4 en línea, 4 válvulas/cilindro, 1.332 cc" },
          { label: "Potencia máxima", value: "185 CV" },
          { label: "Par máximo", value: "270 Nm / 1.750 rpm" },
          { label: "Distribución", value: "Cadena" },
          { label: "Alimentación", value: "Inyección electrónica multipunto, gasolina" },
          { label: "Dirección", value: "Eléctrica con piñón y cremallera, diámetro de giro 10,7 m" },
          { label: "Suspensión delantera", value: "Independiente McPherson, brazos oscilantes transversales, resortes helicoidales y barra estabilizadora" },
          { label: "Suspensión trasera", value: "Eje de torsión con ruedas semi independientes, resortes helicoidales" },
          { label: "Frenos (delantero / trasero)", value: "Disco 305 mm / Tambor 203 mm" },
          { label: "Transmisión", value: "4x2 delantera, automática de 6 vel. con convertidor de par" },
          { label: "Neumáticos", value: "215/45 R18 93V" },
          { label: "Tanque de combustible", value: "47 l" },
          { label: "Peso en orden de marcha", value: "1.310 kg" },
          { label: "Capacidad de baúl", value: "600 l" },
          { label: "Dimensiones (largo × ancho × alto)", value: "4.440 × 1.780 × 1.545 mm" },
          { label: "Distancia entre ejes", value: "2.530 mm" },
        ],
      },
    ],
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
