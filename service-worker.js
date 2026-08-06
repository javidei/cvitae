const CACHE_PREFIX = "cvitae-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v13-learn-card`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=thirty-paused-visible-20260806-2",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/projects/book-affinity.svg",
  "./assets/projects/learn.svg",
  "./assets/projects/thirty.svg",
  "./assets/projects/sam.svg",
  "./assets/projects/entre-amigos.svg",
  "./assets/projects/mis-pcs.jpg"
];

const PORTFOLIO_URL = new URL("./", self.registration.scope);
const PORTFOLIO_INDEX_URL = new URL("./index.html", self.registration.scope);
const APP_SHELL_URLS = new Set(APP_SHELL.map(path => new URL(path, self.registration.scope).href));

function isPortfolioNavigation(url) {
  return url.href === PORTFOLIO_URL.href || url.href === PORTFOLIO_INDEX_URL.href;
}

function ensureThirtyStatus(html) {
  const start = html.indexOf('<article class="proj proj--thirty"');
  if (start < 0) return html;

  const end = html.indexOf('<article', start + 20);
  const cardEnd = end < 0 ? html.length : end;
  let card = html.slice(start, cardEnd);

  card = card.replace(
    /<span class="proj__eyebrow">[\s\S]*?<\/span>/,
    '<span class="proj__eyebrow">Pausado temporalmente · Se sigue trabajando</span>'
  );

  if (!card.includes('Estado actual: proyecto pausado por capacidad de almacenamiento')) {
    card = card.replace(
      '<h3>Thirty</h3>',
      `<h3>Thirty</h3>
            <div role="status" style="margin:4px 0 14px;padding:10px 12px;border:1px solid rgba(255,197,92,.8);border-radius:10px;background:rgba(120,70,0,.82);color:#fff4d2;font-size:13px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;">
              Estado actual: proyecto pausado por capacidad de almacenamiento
            </div>`
    );
  }

  card = card.replace(
    /<p>[\s\S]*?<\/p>/,
    `<p>
              Thirty está pausado temporalmente por los límites de almacenamiento necesarios para una red social con fotos, música y vídeos.
              <span class="muted">El desarrollo continúa mientras se estudia una solución de almacenamiento viable para poder abrirla a los amigos.</span>
            </p>`
  );

  card = card.replace(
    /<div class="chips">[\s\S]*?<\/div>/,
    `<div class="chips">
              <span class="chip">Pausado</span><span class="chip">Se sigue desarrollando</span><span class="chip">Almacenamiento pendiente</span>
            </div>`
  );

  return html.slice(0, start) + card + html.slice(cardEnd);
}

function ensureLearnCard(html) {
  if (html.includes('proj--learn')) return html;

  const marker = '<article class="proj proj--thirty"';
  const insertAt = html.indexOf(marker);
  if (insertAt < 0) return html;

  const card = `<article class="proj proj--learn"
            style="background-image: url('assets/projects/learn.svg'); background-size: cover; background-position: center;">
            <a class="proj__card-link" href="https://javidei.github.io/learn/" aria-label="Abrir Learn English"></a>
            <span class="proj__eyebrow">Inglés · Aprendizaje gamificado</span>
            <h3>Learn English</h3>
            <p>
              Aplicación visual para aprender inglés desde cero mediante una ruta progresiva de 90 días.
              <span class="muted">Lecciones, vocabulario, gramática, pronunciación, conversación, inmersión, XP y logros con progreso guardado en el dispositivo.</span>
            </p>
            <div class="chips">
              <span class="chip">Responsive</span><span class="chip">Gamificación</span><span class="chip">LocalStorage</span>
            </div>
            <div class="links">
              <a href="https://github.com/javidei/learn">GitHub</a>
            </div>
          </article>

          `;

  return html.slice(0, insertAt) + card + html.slice(insertAt);
}

async function fetchFresh(request) {
  return fetch(new Request(request, { cache: "reload" }));
}

async function preparePortfolioResponse(response) {
  let html = ensureThirtyStatus(await response.text());
  html = ensureLearnCard(html);
  const headers = new Headers(response.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "no-cache");
  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    await Promise.all(APP_SHELL.map(async path => {
      const url = new URL(path, self.registration.scope);
      const response = await fetchFresh(url.href);
      if (!response.ok) return;

      const prepared = isPortfolioNavigation(url)
        ? await preparePortfolioResponse(response)
        : response;

      await cache.put(url.href, prepared);
    }));

    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    );

    await self.clients.claim();

    const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.all(
      clients
        .filter(client => client.url.startsWith(self.registration.scope))
        .map(client => client.navigate(client.url))
    );
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    if (!isPortfolioNavigation(url)) return;

    event.respondWith((async () => {
      try {
        const networkResponse = await fetchFresh(request);
        const response = await preparePortfolioResponse(networkResponse);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(PORTFOLIO_INDEX_URL.href, response.clone());
        }

        return response;
      } catch {
        return (await caches.match(PORTFOLIO_INDEX_URL.href)) || Response.error();
      }
    })());
    return;
  }

  if (!APP_SHELL_URLS.has(url.href)) return;

  event.respondWith((async () => {
    try {
      const response = await fetchFresh(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      return (await caches.match(request)) || Response.error();
    }
  })());
});
