import { createClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase compartido. Usa la anon public key, protegida por las
 * políticas de RLS de cada tabla (ver supabase/schema.sql cuando exista):
 * lectura pública en modelos/colores, solo inserción en solicitudes/citas/
 * solicitudes_repuestos, inserción pública + lectura pública filtrada por
 * "aprobada" en reseñas.
 *
 * TODO: el proyecto de Supabase de Turín Motors todavía no existe --
 * PUBLIC_SUPABASE_URL/PUBLIC_SUPABASE_ANON_KEY no están configuradas
 * todavía, así que cualquier código que use este cliente falla en el
 * navegador hasta que se cree el proyecto y se agreguen esas variables.
 */
export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);
