const CACHE_PREFIX = "cvitae-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v11-cache-reset`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=thirty-paused-visible-20260806-2",
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
const APP_SHELL_URLS = new Set(APP_SHELL.map(path => new URL(path, self.registration.scope).href));

function isPortfolioNavigation(url) {
  return url.href === PORTFOLIO_URL.href || url.href === PORTFOLIO_INDEX_URL.href;
}

async function fetchFresh(request) {
  return fetch(new Request(request, { cache: "reload" }));
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async path => {
      const url = new URL(path, self.registration.scope);
      const response = await fetchFresh(url.href);
      if (response.ok) await cache.put(url.href, response);
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
        const response = await fetchFresh(request);
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
