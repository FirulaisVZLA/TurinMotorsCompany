export interface Testimonial {
  name: string;
  text: string;
  /** 1 a 5 */
  rating: number;
}

// PLACEHOLDER: reemplazar con reseñas reales de clientes de Turín Motors.
// Estas 3 son solo de ejemplo para probar el componente -- no son reseñas
// verdaderas. Se muestran solo mientras no haya ninguna reseña real aprobada.
export const testimonials: Testimonial[] = [
  {
    name: "[Ejemplo] Nombre del cliente",
    text: "[Ejemplo] Comentario de prueba sobre la experiencia de compra -- reemplazar con una reseña real.",
    rating: 5,
  },
  {
    name: "[Ejemplo] Nombre del cliente",
    text: "[Ejemplo] Comentario de prueba sobre la atención recibida -- reemplazar con una reseña real.",
    rating: 5,
  },
  {
    name: "[Ejemplo] Nombre del cliente",
    text: "[Ejemplo] Comentario de prueba sobre el vehículo adquirido -- reemplazar con una reseña real.",
    rating: 4,
  },
];
