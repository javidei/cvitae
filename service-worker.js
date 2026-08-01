const CACHE_PREFIX = "cvitae-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v5-sam-project`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=sam-1",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/projects/colorines.svg",
  "./assets/projects/sam.svg",
  "./assets/projects/entre-amigos.svg",
  "./assets/projects/mis-pcs.jpg"
];

const PORTFOLIO_URL = new URL("./", self.registration.scope);
const PORTFOLIO_INDEX_URL = new URL("./index.html", self.registration.scope);
const APP_SHELL_URLS = new Set(
  APP_SHELL.map(path => new URL(path, self.registration.scope).href)
);

function isPortfolioNavigation(url) {
  return url.href === PORTFOLIO_URL.href || url.href === PORTFOLIO_INDEX_URL.href;
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
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    // La caché de la app solo responde a la portada del portfolio.
    // Los proyectos viven ahora en repositorios y sitios independientes.
    if (!isPortfolioNavigation(url)) return;

    event.respondWith(
      fetch(request)
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

  // No almacenar ningún recurso que no pertenezca al shell de cvitae.
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
