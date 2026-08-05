const CACHE_PREFIX = "cvitae-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v8-thirty`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=book-affinity-1",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/projects/book-affinity.svg",
  "./assets/projects/thirty.svg",
  "./assets/projects/sam.svg",
  "./assets/projects/entre-amigos.svg",
  "./assets/projects/mis-pcs.jpg"
];

const PORTFOLIO_URL = new URL("./", self.registration.scope);
const PORTFOLIO_INDEX_URL = new URL("./index.html", self.registration.scope);
const APP_SHELL_URLS = new Set(
  APP_SHELL.map(path => new URL(path, self.registration.scope).href)
);

const THIRTY_CARD = `
          <article class="proj proj--thirty"
            style="background-image: url('assets/projects/thirty.svg'); background-size: cover; background-position: center;">
            <a class="proj__card-link" href="https://javidei.github.io/colorines/" aria-label="Abrir Thirty"></a>
            <span class="proj__eyebrow">Red social privada · Nostalgia 2000</span>
            <h3>Thirty</h3>
            <p>
              Una pequeña red social nostálgica para los amigos de siempre.
              <span class="muted">Perfil, tablón, fotos, mensajes, gente, eventos y chat en una demo local sin conexiones externas.</span>
            </p>
            <div class="chips">
              <span class="chip">JavaScript</span><span class="chip">LocalStorage</span><span class="chip">Responsive</span>
            </div>
            <div class="links">
              <a href="https://github.com/javidei/colorines">GitHub</a>
            </div>
          </article>

`;

function isPortfolioNavigation(url) {
  return url.href === PORTFOLIO_URL.href || url.href === PORTFOLIO_INDEX_URL.href;
}

function includeThirtyCard(html) {
  if (html.includes('<h3>Thirty</h3>')) return html;
  const marker = '          <article class="proj proj--kebab"';
  return html.includes(marker) ? html.replace(marker, THIRTY_CARD + marker) : html;
}

async function portfolioResponse(response) {
  const html = includeThirtyCard(await response.text());
  const headers = new Headers(response.headers);
  headers.set('content-type', 'text/html; charset=utf-8');
  return new Response(html, { status: response.status, statusText: response.statusText, headers });
}

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then(clients => Promise.all(
        clients
          .filter(client => isPortfolioNavigation(new URL(client.url)))
          .map(client => client.navigate(client.url))
      ))
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    if (!isPortfolioNavigation(url)) return;

    event.respondWith(
      fetch(request)
        .then(portfolioResponse)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(PORTFOLIO_INDEX_URL, copy));
          }
          return response;
        })
        .catch(() => caches.match(PORTFOLIO_INDEX_URL))
    );
    return;
  }

  if (!APP_SHELL_URLS.has(url.href)) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
