# Project Hub

Panel privado para centralizar proyectos de Javier Díaz.

## Versión

**0.2.1 — 07/08/2026**

## Fuentes de datos

- **GitHub:** consulta los repositorios públicos del usuario configurado mediante GitHub REST API.
- **Supabase:** guarda los repositorios sincronizados, los datos personalizados, los proyectos externos y las tareas.
- **Proyectos externos:** pueden crearse manualmente aunque no tengan repositorio.

## Configuración

1. Ejecutar [`supabase.sql`](supabase.sql) en **Supabase > SQL Editor**.
2. En Supabase, habilitar el proveedor **Email** dentro de Authentication.
3. Abrir Project Hub y pulsar **Configuración**.
4. Introducir el usuario de GitHub, la **Project URL** de Supabase y la **Publishable key** (`sb_publishable_...`). También se admite la antigua `anon key` de proyectos legacy.
5. Crear una cuenta o iniciar sesión.
6. Pulsar **Sincronizar GitHub**.

La URL y la clave pública se guardan en `localStorage` del navegador. Nunca debe introducirse una `Secret key`, la clave `service_role` ni la contraseña de la base de datos.

## Seguridad

Las tablas tienen RLS y cada usuario autenticado solo puede consultar o modificar sus propios registros.

## Limitación de GitHub

La sincronización desde el navegador obtiene repositorios públicos. Los repositorios privados requerirán en otra fase OAuth o una función segura que no exponga un token personal.
