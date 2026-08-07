# Historial de versiones de cvitae

`cvitae` utiliza versionado semántico `MAJOR.MINOR.PATCH`.

Mientras el portfolio siga evolucionando antes de considerarse una versión estable, el número principal se mantiene en `0`. Los cambios funcionales o visuales importantes incrementan `MINOR` y las correcciones compatibles incrementan `PATCH`.

## 0.3.3 — 08/08/2026

- Separa completamente Project Hub de `cvitae` y mantiene su código funcional en `javidei/panel-central`.
- Conserva en `cvitae` la tarjeta y la imagen representativa de Project Hub.
- Actualiza la tarjeta para abrir la web y el repositorio independientes.
- Elimina la carpeta interna `project-hub` de `cvitae`.
- Desacopla Project Hub de la caché PWA del portfolio y renueva la caché de `cvitae`.

## 0.3.0 — 07/08/2026

- Añade Project Hub, un panel central responsive para gestionar proyectos y tareas.
- Incorpora una tarjeta representativa de Project Hub al catálogo de proyectos.
- Incluye CRUD local, estados, prioridades, versiones, tecnologías, enlaces y tareas.
- Añade exportación e importación JSON y preparación para una futura conexión con Supabase.
- Mejora el service worker para almacenar y recuperar correctamente las rutas internas.
- Actualiza la caché y el versionado general del portfolio.

## 0.2.1 — 07/08/2026

- Sustituye el texto genérico de GitHub por el icono y el nombre real de cada repositorio.
- Corrige el enlace de Librería Stilton para que apunte a `javidei/stilton`.
- Renueva la caché de la PWA para publicar los cambios inmediatamente.

## 0.2.0 — 07/08/2026

- Añade versión y fecha de publicación visibles en el footer.
- Convierte la sección de proyectos en una cuadrícula compacta de tres, dos o una columna según el dispositivo.
- Reduce la altura, el texto y los elementos secundarios de las tarjetas.
- Integra Learn English y Recetario de Javi directamente en `index.html`.
- Elimina la generación dinámica de tarjetas desde el service worker.
- Renueva la caché de la PWA y fuerza la retirada de versiones antiguas.

## 0.1.0 — 31/07/2026

- Primera versión del portfolio publicada en GitHub Pages.
- Añade perfil, experiencia, skills, formación, proyectos y contacto.
- Incorpora diseño responsive y soporte como PWA.

## 1.0.0 — Pendiente

Se reservará para una versión estable, revisada y lista para usarse como portfolio definitivo.
