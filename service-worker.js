const PORTFOLIO_VERSION = "0.3.5";
const CACHE_PREFIX = "cvitae-shell-";
const CACHE_NAME = `${CACHE_PREFIX}${PORTFOLIO_VERSION}-standalone-projects`;

const APP_SHELL = [
  "./",
  "./index.html",
  `./styles.css?v=${PORTFOLIO_VERSION}`,
  "./manifest.webmanifest",
  "./otome-card.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/projects/book-affinity.svg",
  "./assets/projects/learn.svg",
  "./assets/projects/recetas.svg",
  "./assets/projects/thirty.svg",
  "./assets/projects/sam.svg",
  "./assets/projects/entre-amigos.svg",
  "./assets/projects/mis-pcs.jpg",
  "./assets/projects/project-hub.svg"
];

const INDEX_URL = new URL("./index.html", self.registration.scope).href;

async function fetchFresh(request) {
  return fetch(new Request(request, { cache: "no-store" }));
}

async function withProjectCards(response) {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return response;

  const html = await response.text();
  if (html.includes("otome-card.js")) {
    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }

  const injected = html.replace(
    "</body>",
    `<script src="./otome-card.js?v=${PORTFOLIO_VERSION}"></script>\n</body>`
  );
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("content-encoding");
  headers.delete("etag");

  return new Response(injected, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(APP_SHELL.map(async path => {
      try {
        const url = new URL(path, self.registration.scope).href;
        const response = await fetchFresh(url);
        if (response.ok) await cache.put(url, response);
      } catch {
        // Los recursos externos y opcionales no bloquean la instalación.
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.all(clients.map(async client => {
      client.postMessage({ type: "CVITAE_UPDATED", version: PORTFOLIO_VERSION });
      try { await client.navigate(client.url); } catch { /* La siguiente navegación cargará la versión nueva. */ }
    }));
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const networkResponse = await fetchFresh(request);
        const response = networkResponse.ok ? await withProjectCards(networkResponse) : networkResponse;
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        return (await cache.match(request))
          || (await cache.match(url.pathname.endsWith('/') ? `${url.href}index.html` : request))
          || (await cache.match(INDEX_URL))
          || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetchFresh(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch {
      return (await cache.match(request)) || Response.error();
    }
  })());
});