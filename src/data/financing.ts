/**
 * Opciones de financiamiento de Turín Motors.
 *
 * 1) Directo con FIAT: el cliente indicó que las fotos con la lista de
 *    recaudos (persona natural / persona jurídica) estaban en su carpeta,
 *    pero al revisar "PaginaWebTurin" el 2026-08-26 no se encontraron --
 *    solo apareció un banner de marketing sin relación. Las listas de abajo
 *    quedan como TODO explícito, NO inventadas, hasta que el cliente
 *    confirme dónde están esas fotos o las vuelva a enviar.
 *
 * 2) Kompii: el cliente pidió reusar el mismo link que en el sitio de
 *    Kaiyi. OJO -- ese link incluye un `prod_id` que en Kaiyi apunta al
 *    producto específico de Kaiyi dentro de la plataforma de Kompii; puede
 *    que para Turín Motors haga falta un producto/org distinto del lado de
 *    Kompii. Se avisó al cliente, se implementa el link tal cual lo pidió
 *    mientras tanto.
 */

export interface FinancingRequirement {
  label: string;
}

export interface DirectFinancing {
  name: string;
  description: string;
  requirementsByPersonType: {
    natural: FinancingRequirement[] | null;
    juridica: FinancingRequirement[] | null;
  };
}

export interface KompiiInfo {
  name: string;
  applicationUrl: string;
  downPayment: string;
  installments: string;
  requirements: string[];
}

export const directFinancing: DirectFinancing = {
  name: "Directo con FIAT",
  description: "Solicita tu crédito directamente con FIAT a través de Turín Motors.",
  requirementsByPersonType: {
    // TODO: pendiente -- el cliente mencionó fotos con esta lista que no se
    // encontraron en la carpeta compartida.
    natural: null,
    juridica: null,
  },
};

export const kompii: KompiiInfo = {
  name: "Kompii",
  applicationUrl:
    "https://client.kompii.com/quick-applications?org_id=5a1d256&prod_id=6686d22530b238dcb55be301",
  // TODO: inicial/cuotas/recaudos copiados tal cual del sitio de Kaiyi a
  // falta de datos propios de Turín Motors -- confirmar con el cliente si
  // aplican igual para FIAT o si Kompii maneja condiciones distintas aquí.
  downPayment: "Inicial mínima: 20% (persona natural o jurídica) -- por confirmar para Turín Motors",
  installments: "Cuotas amortizables",
  requirements: [
    "Factura Proforma",
    "Cédula de Identidad",
    "Licencia de conducir",
    "RIF vigente",
    "Comprobante de ingresos",
    "Últimos 3 estados de cuenta",
  ],
};
