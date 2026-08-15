(() => {
  const VERSION = '0.3.25';
  const DATE = '15/08/2026';

  const applyPixelAdventureCard = async () => {
    const card = document.querySelector('#proyectos .proj--pixel-adventure');
    if (!card) return false;

    const parts = [
      './assets/projects/pixel-adventure-card-0.txt',
      './assets/projects/pixel-adventure-card-1.txt',
      './assets/projects/pixel-adventure-card-2.txt'
    ];

    try {
      const chunks = await Promise.all(parts.map(path => fetch(path, { cache: 'no-store' }).then(response => {
        if (!response.ok) throw new Error(`No se pudo cargar ${path}`);
        return response.text();
      })));
      const base64 = chunks.join('').replace(/[^A-Za-z0-9+/=]/g, '');
      if (!base64.startsWith('UklGR')) throw new Error('La portada WebP no es válida');
      card.style.backgroundImage = `url("data:image/webp;base64,${base64}")`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center 46%';
      card.style.backgroundRepeat = 'no-repeat';
    } catch {
      // Conserva el fondo degradado existente como respaldo.
    }

    const version = document.querySelector('.footer__version');
    if (version) {
      version.textContent = `v${VERSION} · ${DATE}`;
      version.title = `Publicada el ${DATE.replaceAll('/', ' de ')}`;
    }
    const versionMeta = document.querySelector('meta[name="application-version"]');
    if (versionMeta) versionMeta.setAttribute('content', VERSION);
    return true;
  };

  const start = () => {
    let attempts = 0;
    const tryApply = async () => {
      attempts += 1;
      if (await applyPixelAdventureCard()) return;
      if (attempts < 40) window.setTimeout(tryApply, 50);
    };
    tryApply();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
