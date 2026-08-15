(() => {
  const VERSION = '0.3.26';
  const DATE = '15/08/2026';
  const PLAY_URL = 'https://javidei.github.io/survival/';
  const REPO_URL = 'https://github.com/javidei/survival';

  const applySurvivalCard = () => {
    const cards = document.querySelector('#proyectos .cards');
    if (!cards) return false;

    let card = cards.querySelector('.proj--naranjal-survival');
    if (!card) {
      card = document.createElement('article');
      card.className = 'proj proj--naranjal-survival';
      card.style.backgroundColor = '#0b1516';
      card.innerHTML = `
        <a class="proj__card-link" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Jugar a Naranjal Survival"></a>
        <span class="proj__eyebrow">Survival 3D · Godot 4 · Alpha 0.2.0</span>
        <h3>Naranjal Survival</h3>
        <p>Survival 3D con crafting, construcción, fauna y ciclo día/noche en un bosque abierto.</p>
        <div class="links">
          <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Jugar a Naranjal Survival">
            <i class="fa-solid fa-gamepad" aria-hidden="true"></i><span>Jugar</span>
          </a>
          <a class="repo-link" href="${REPO_URL}" target="_blank" rel="noopener noreferrer" aria-label="Abrir el repositorio de Naranjal Survival">
            <i class="fa-brands fa-github" aria-hidden="true"></i><span>survival</span>
          </a>
        </div>`;
      cards.prepend(card);
    }

    card.style.backgroundImage = "url('./assets/projects/naranjal-survival.webp')";
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center 48%';
    card.style.backgroundRepeat = 'no-repeat';

    const playLink = card.querySelector('.proj__card-link');
    if (playLink) playLink.href = PLAY_URL;

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
