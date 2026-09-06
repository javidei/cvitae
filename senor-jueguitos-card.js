(() => {
  const VERSION = '0.3.30';
  const DATE = '06/09/2026';
  const PLAY_URL = 'https://javidei.github.io/senor-jueguitos/';
  const REPO_URL = 'https://github.com/javidei/senor-jueguitos';

  const ensureSenorJueguitosStyles = () => {
    if (document.getElementById('senor-jueguitos-card-styles')) return;

    const style = document.createElement('style');
    style.id = 'senor-jueguitos-card-styles';
    style.textContent = `
      #proyectos .proj--senor-jueguitos {
        border-color: rgba(196, 148, 255, .62);
        background-color: #1a0f2e;
        background-image:
          radial-gradient(circle at 18% 22%, rgba(251, 191, 36, .28), transparent 34%),
          radial-gradient(circle at 82% 18%, rgba(168, 85, 247, .42), transparent 36%),
          linear-gradient(145deg, #2d1b4e 0%, #4c1d95 42%, #1a0f2e 100%) !important;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }

      #proyectos .proj--senor-jueguitos::before {
        background: linear-gradient(
          180deg,
          rgba(12, 6, 22, .08) 0%,
          rgba(12, 6, 22, .22) 36%,
          rgba(12, 6, 22, .84) 74%,
          rgba(12, 6, 22, .97) 100%
        ) !important;
      }

      #proyectos .proj--senor-jueguitos .proj__eyebrow {
        color: #fcd34d;
      }

      #proyectos .proj--senor-jueguitos .links a {
        color: #e9d5ff;
      }
    `;
    document.head.appendChild(style);
  };

  const applySenorJueguitosCard = () => {
    const cards = document.querySelector('#proyectos .cards');
    if (!cards) return false;

    ensureSenorJueguitosStyles();

    let card = cards.querySelector('.proj--senor-jueguitos');
    if (!card) {
      card = document.createElement('article');
      card.className = 'proj proj--senor-jueguitos';
      card.innerHTML = `
        <a class="proj__card-link" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Jugar a Señor Jueguitos"></a>
        <span class="proj__eyebrow">Hub de minijuegos · HTML5</span>
        <h3>Señor Jueguitos</h3>
        <p>Menú hub con Sudoku, Memoria y Serpiente en el navegador, y más minijuegos por llegar.</p>
        <div class="links">
          <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Jugar a Señor Jueguitos">
            <i class="fa-solid fa-gamepad" aria-hidden="true"></i><span>Jugar</span>
          </a>
          <a class="repo-link" href="${REPO_URL}" target="_blank" rel="noopener noreferrer" aria-label="Abrir el repositorio de Señor Jueguitos">
            <i class="fa-brands fa-github" aria-hidden="true"></i><span>senor-jueguitos</span>
          </a>
        </div>`;
      cards.prepend(card);
    }

    const eyebrow = card.querySelector('.proj__eyebrow');
    if (eyebrow) eyebrow.textContent = 'Hub de minijuegos · HTML5';

    const playLink = card.querySelector('.proj__card-link');
    if (playLink) playLink.href = PLAY_URL;

    const version = document.querySelector('.footer__version');
    if (version) {
      version.textContent = `v${VERSION} · ${DATE}`;
      version.title = 'Publicada el 6 de septiembre de 2026';
    }
    const versionMeta = document.querySelector('meta[name="application-version"]');
    if (versionMeta) versionMeta.setAttribute('content', VERSION);

    return true;
  };

  const start = () => {
    let attempts = 0;
    const tryApply = () => {
      attempts += 1;
      if (applySenorJueguitosCard()) return;
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
