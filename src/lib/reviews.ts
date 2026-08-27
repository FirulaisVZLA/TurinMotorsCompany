import { supabase } from "./supabase";

/** Fila de la tabla `resenas` ya aprobada para mostrarse en el sitio. */
export interface ReviewRow {
  id: string;
  nombre: string;
  comentario: string;
  calificacion: number;
}

/**
 * Trae las reseñas aprobadas (columna `aprobada = true`) en tiempo de
 * build. Las que no se han aprobado desde el Table Editor de Supabase no
 * son visibles aquí ni en el sitio público.
 *
 * Si Supabase no responde (ej. variables de entorno de Vercel todavía sin
 * configurar), no se revienta el build entero -- se registra el error y se
 * devuelve un array vacío, igual que "no hay reseñas aprobadas todavía"
 * (Testimonials.astro cae a los placeholders en ese caso).
 */
export async function getApprovedReviews(): Promise<ReviewRow[]> {
  try {
    const { data, error } = await supabase
      .from("resenas")
      .select("id, nombre, comentario, calificacion")
      .eq("aprobada", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error('No se pudo leer la tabla "resenas" de Supabase:', error.message);
      return [];
    }
    return data ?? [];
  } catch (err) {
    console.error("Error consultando Supabase para reseñas:", err);
    return [];
  }
}
