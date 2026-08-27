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
 */
export async function getApprovedReviews(): Promise<ReviewRow[]> {
  const { data, error } = await supabase
    .from("resenas")
    .select("id, nombre, comentario, calificacion")
    .eq("aprobada", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`No se pudo leer la tabla "resenas" de Supabase: ${error.message}`);
  }
  return data ?? [];
}
