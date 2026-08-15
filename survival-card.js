(() => {
  const VERSION = '0.3.25';
  const DATE = '15/08/2026';

  const applySurvivalCard = () => {
    const cards = document.querySelector('#proyectos .cards');
    if (!cards) return false;

    let card = cards.querySelector('.proj--naranjal-survival');
    if (!card) {
      card = document.createElement('article');
      card.className = 'proj proj--naranjal-survival';
      card.style.backgroundColor = '#0b1516';
      card.innerHTML = `
        <a class="proj__card-link" href="https://github.com/javidei/survival" target="_blank" rel="noopener noreferrer" aria-label="Abrir Naranjal Survival en GitHub"></a>
        <span class="proj__eyebrow">Survival 3D · Godot 4 · Alpha 0.2.0</span>
        <h3>Naranjal Survival</h3>
        <p>Survival 3D con crafting, construcción, fauna y ciclo día/noche en un bosque abierto.</p>
        <div class="links">
          <a class="repo-link" href="https://github.com/javidei/survival" target="_blank" rel="noopener noreferrer" aria-label="Abrir el repositorio de Naranjal Survival">
            <i class="fa-brands fa-github" aria-hidden="true"></i><span>survival</span>
          </a>
        </div>`;
      cards.prepend(card);
    }

    card.style.backgroundImage = "url('./assets/projects/naranjal-survival.webp')";
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center 48%';
    card.style.backgroundRepeat = 'no-repeat';

    const version = document.querySelector('.footer__version');
    if (version) {
      version.textContent = `v${VERSION} · ${DATE}`;
      version.title = 'Publicada el 15 de agosto de 2026';
    }
    const versionMeta = document.querySelector('meta[name="application-version"]');
    if (versionMeta) versionMeta.setAttribute('content', VERSION);

    return true;
  };

  const start = () => {
    let attempts = 0;
    const tryApply = () => {
      attempts += 1;
      if (applySurvivalCard()) return;
      if (attempts < 60) window.setTimeout(tryApply, 50);
    };
    tryApply();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
