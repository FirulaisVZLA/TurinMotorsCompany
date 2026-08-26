-- Esquema inicial de Turín Motors, aplicado el 2026-08-26 al proyecto de
-- Supabase "FIAT Turin Motors" (ref noauybmniydnfoinwhnw) vía MCP.
-- Este archivo queda en el repo como referencia/backup -- no hace falta
-- volver a correrlo salvo que se recree el proyecto desde cero.

-- modelos: inventario editable (precio, specs numericas) -- lectura publica, sin escritura publica
create table if not exists modelos (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  nombre text not null,
  precio numeric,
  descripcion_corta text,
  created_at timestamptz not null default now()
);
alter table modelos enable row level security;
create policy "Lectura publica de modelos" on modelos for select using (true);

-- colores: por modelo, alimenta el selector de color del formulario de cotizacion
create table if not exists colores (
  id uuid primary key default gen_random_uuid(),
  modelo_id uuid references modelos(id) on delete cascade,
  nombre text not null,
  hex text not null,
  created_at timestamptz not null default now()
);
alter table colores enable row level security;
create policy "Lectura publica de colores" on colores for select using (true);

-- solicitudes: leads del formulario de cotizacion -- solo insert publico, nadie lee desde el sitio
create table if not exists solicitudes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  correo text,
  telefono text,
  modelo text,
  color text,
  mensaje text
);
alter table solicitudes enable row level security;
create policy "Insercion publica de solicitudes" on solicitudes for insert with check (true);

-- resenas: patron de moderacion -- insert publico siempre, select publico solo si aprobada
create table if not exists resenas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  comentario text not null,
  calificacion smallint not null check (calificacion between 1 and 5),
  aprobada boolean not null default false
);
alter table resenas enable row level security;
create policy "Insercion publica de resenas" on resenas for insert with check (true);
create policy "Lectura publica de resenas aprobadas" on resenas for select using (aprobada = true);

-- citas: agenda de servicio (AppointmentForm.astro) -- solo insert publico, datos personales protegidos
create table if not exists citas (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  correo text not null,
  telefono text not null,
  modelo text not null,
  tipo_servicio text not null,
  fecha_cita date not null,
  hora_cita time not null,
  mensaje text
);
alter table citas enable row level security;
create policy "Insercion publica de citas" on citas for insert with check (true);

-- horarios_ocupados: vista publica SOLO con fecha/hora (sin nombre/correo/telefono),
-- para que el calendario sepa que cupos estan tomados sin exponer datos personales.
-- Nota: el linter de seguridad de Supabase marca esta vista como
-- "Security Definer View" -- es intencional (el mismo patron que usa el
-- sitio de Kaiyi): al ser SECURITY DEFINER expone solo las 2 columnas que
-- selecciona, nunca nombre/correo/telefono, así que no hay fuga de datos.
create view horarios_ocupados as
  select fecha_cita, hora_cita from citas;
grant select on horarios_ocupados to anon, authenticated;

-- solicitudes_repuestos: formulario "Necesitas un repuesto" (PartsRequestForm.astro) -- solo insert publico
create table if not exists solicitudes_repuestos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  telefono text not null,
  mensaje text not null
);
alter table solicitudes_repuestos enable row level security;
create policy "Insercion publica de solicitudes_repuestos" on solicitudes_repuestos for insert with check (true);
