import { createClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase compartido. Usa la anon public key, protegida por las
 * políticas de RLS de cada tabla (ver supabase/schema.sql): lectura pública
 * en modelos/colores/reseñas aprobadas, solo inserción en solicitudes/
 * citas/solicitudes_repuestos/reseñas.
 *
 * `createClient` lanza una excepción de inmediato si la URL viene vacía --
 * eso rompió el build de Vercel el 2026-08-26 (las variables de entorno
 * PUBLIC_SUPABASE_URL/PUBLIC_SUPABASE_ANON_KEY existen en `.env` local pero
 * todavía no se agregaron en Vercel → Project Settings → Environment
 * Variables). Mientras falten ahí, se usa una URL de relleno para que el
 * cliente se construya sin tronar el build entero; las consultas reales
 * simplemente fallan en tiempo de ejecución (y el código que las usa ya
 * maneja ese error, ej. reviews.ts cae a los placeholders).
 */
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
