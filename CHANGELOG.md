# Historial de versiones de cvitae

`cvitae` utiliza versionado semántico `MAJOR.MINOR.PATCH`.

Mientras el portfolio siga evolucionando antes de considerarse una versión estable, el número principal se mantiene en `0`. Los cambios funcionales o visuales importantes incrementan `MINOR` y las correcciones compatibles incrementan `PATCH`.

## 0.3.16 — 09/08/2026

- Elimina la pantalla de carga inicial con foto y nombre al abrir cvitae como PWA en móvil.
- La aplicación entra directamente al contenido sin esperar los 4 segundos del splash anterior.
- Mantiene intactos el icono de la PWA, el hero y el resto de recursos visuales.
- Renueva la caché y el versionado para publicar el cambio inmediatamente.

## 0.3.15 — 09/08/2026

- Sustituye la imagen de fondo de la tarjeta **Godot Game** por el arte de grupo aprobado.
- Integra el escenario nocturno pirata en pixel art detrás de los personajes.
- Ajusta el encuadre de la tarjeta para priorizar las caras y el grupo completo.
- Renueva la caché PWA con los nuevos recursos de Godot.

## 0.3.11 — 09/08/2026

- Corrige definitivamente la imagen del hero cargando el WebP real del personaje desde datos base64 completos y verificados.
- Elimina la dependencia del SVG contenedor que podía producir una imagen rota en GitHub Pages.
- Mantiene el personaje de brazos cruzados, transparencia y proporciones originales.
- Renueva la caché PWA con los nuevos recursos del hero.

## 0.3.10 — 09/08/2026

- Corrige la imagen rota del hero introducida en 0.3.9.
- Carga directamente la imagen rasterizada incluida en el recurso del personaje en lugar de pedir al navegador que renderice el SVG contenedor.
- Mantiene transparencia, proporciones y encaje del personaje de brazos cruzados.
- Renueva la caché de la PWA.

## 0.3.9 — 09/08/2026

- Sustituye la ilustración circular del hero por la nueva imagen de Javier con los brazos cruzados.
- Mantiene intactos los iconos de la PWA y el resto de imágenes del portfolio.
- Renueva la caché para publicar inmediatamente el nuevo recurso.

## 0.3.5 — 08/08/2026

- Añade la tarjeta base del proyecto **Godot** y su enlace al repositorio independiente.
- Sincroniza la versión visible del footer, metadatos y recursos PWA con `version.json`.
- Carga las tarjetas dinámicas directamente desde `index.html` para no depender del service worker en la primera visita.

## 0.3.4 — 08/08/2026

- Añade la tarjeta de **Entre líneas**, demo de novela visual/otome publicada en `javidei/juego-otome`.
- Enlaza la tarjeta con la demo de GitHub Pages y con su repositorio independiente.
- Utiliza el arte principal del propio juego como imagen representativa.
- Renueva la caché de la PWA para mostrar la nueva tarjeta.

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
