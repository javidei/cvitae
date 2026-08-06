const CACHE_PREFIX = "cvitae-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v16-project-cards-compact`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=thirty-paused-visible-20260806-2",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/projects/book-affinity.svg",
  "./assets/projects/learn.svg",
  "./assets/projects/recetas.svg",
  "./assets/projects/thirty.svg",
  "./assets/projects/sam.svg",
  "./assets/projects/entre-amigos.svg",
  "./assets/projects/mis-pcs.jpg"
];

const PORTFOLIO_URL = new URL("./", self.registration.scope);
const PORTFOLIO_INDEX_URL = new URL("./index.html", self.registration.scope);
const APP_SHELL_URLS = new Set(APP_SHELL.map(path => new URL(path, self.registration.scope).href));

const COMPACT_PROJECT_STYLES = `
<style id="compact-project-cards">
  #proyectos .section__head p {
    max-width: 520px;
  }

  #proyectos .cards {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }

  #proyectos .proj {
    min-height: 190px !important;
    padding: 18px !important;
    border-radius: 16px;
    background-position: center;
  }

  #proyectos .proj::before {
    background: linear-gradient(180deg, rgba(5, 8, 13, .2) 0%, rgba(5, 8, 13, .88) 70%, rgba(5, 8, 13, .97) 100%);
  }

  #proyectos .proj > *:not(.proj__card-link) {
    max-width: 100% !important;
  }

  #proyectos .proj__eyebrow {
    max-width: 100%;
    margin-bottom: 6px;
    overflow: hidden;
    color: rgba(255, 255, 255, .72);
    font-size: 9px;
    letter-spacing: .08em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #proyectos .proj h3 {
    margin: auto 0 5px;
    font-size: 17px;
    line-height: 1.2;
  }

  #proyectos .proj p {
    display: -webkit-box;
    margin: 0;
    overflow: hidden;
    color: rgba(255, 255, 255, .76);
    font-size: 12.5px;
    line-height: 1.4;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  #proyectos .proj p .muted,
  #proyectos .proj .chips,
  #proyectos .proj [role="status"] {
    display: none !important;
  }

  #proyectos .proj .links {
    margin-top: 10px;
    padding-top: 0;
    gap: 10px;
    font-size: 11px;
  }

  #proyectos .proj .links a {
    padding: 4px 8px;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 999px;
    background: rgba(0, 0, 0, .28);
    color: rgba(255, 255, 255, .86);
  }

  #proyectos .proj:hover,
  #proyectos .proj:focus-within {
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    #proyectos .cards {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }

  @media (max-width: 560px) {
    #proyectos .cards {
      grid-template-columns: minmax(0, 1fr) !important;
      gap: 12px !important;
    }

    #proyectos .proj {
      min-height: 164px !important;
      padding: 16px !important;
    }

    #proyectos .proj h3 {
      font-size: 16px;
    }
  }
</style>`;

function isPortfolioNavigation(url) {
  const portfolioPath = PORTFOLIO_URL.pathname.replace(/\/$/, "");
  const requestPath = url.pathname.replace(/\/$/, "");
  return requestPath === portfolioPath || url.pathname === PORTFOLIO_INDEX_URL.pathname;
}

function ensureThirtyStatus(html) {
  const start = html.indexOf('<article class="proj proj--thirty"');
  if (start < 0) return html;

  const end = html.indexOf('<article', start + 20);
  const cardEnd = end < 0 ? html.length : end;
  let card = html.slice(start, cardEnd);

  card = card.replace(
    /<span class="proj__eyebrow">[\s\S]*?<\/span>/,
    '<span class="proj__eyebrow">Pausado · En desarrollo</span>'
  );

  card = card.replace(/\s*<div role="status"[\s\S]*?<\/div>/, "");

  card = card.replace(
    /<p>[\s\S]*?<\/p>/,
    `<p>Red social nostálgica pausada mientras se resuelve el almacenamiento.</p>`
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
            <span class="proj__eyebrow">Inglés · Aprendizaje</span>
            <h3>Learn English</h3>
            <p>Ruta gamificada de 90 días para aprender inglés desde cero.</p>
            <div class="links">
              <a href="https://github.com/javidei/learn">GitHub</a>
            </div>
          </article>

          `;

  return html.slice(0, insertAt) + card + html.slice(insertAt);
}

function ensureRecipesCard(html) {
  if (html.includes('proj--recipes')) return html;

  const marker = '<article class="proj proj--thirty"';
  const insertAt = html.indexOf(marker);
  if (insertAt < 0) return html;

  const card = `<article class="proj proj--recipes"
            style="background-image: url('assets/projects/recetas.svg'); background-size: cover; background-position: center;">
            <a class="proj__card-link" href="https://javidei.github.io/recetas/" aria-label="Abrir Recetario de Javi"></a>
            <span class="proj__eyebrow">Recetas · Buscador</span>
            <h3>Recetario de Javi</h3>
            <p>Recetario personal con filtros, favoritos y fichas detalladas.</p>
            <div class="links">
              <a href="https://github.com/javidei/recetas">GitHub</a>
            </div>
          </article>

          `;

  return html.slice(0, insertAt) + card + html.slice(insertAt);
}

function ensureCompactProjectCards(html) {
  if (html.includes('id="compact-project-cards"')) return html;
  return html.replace('</head>', `${COMPACT_PROJECT_STYLES}\n</head>`);
}

async function fetchFresh(request) {
  return fetch(new Request(request, { cache: "reload" }));
}

async function preparePortfolioResponse(response) {
  let html = ensureThirtyStatus(await response.text());
  html = ensureLearnCard(html);
  html = ensureRecipesCard(html);
  html = ensureCompactProjectCards(html);

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
