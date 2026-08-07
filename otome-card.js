(() => {
  const cards = document.querySelector('#proyectos .cards');
  if (!cards || cards.querySelector('.proj--juego-otome')) return;

  const card = document.createElement('article');
  card.className = 'proj proj--juego-otome';
  card.style.backgroundImage = "url('https://javidei.github.io/juego-otome/assets/key-art.webp')";
  card.style.backgroundSize = 'cover';
  card.style.backgroundPosition = 'center 44%';
  card.innerHTML = `
    <a class="proj__card-link" href="https://javidei.github.io/juego-otome/" aria-label="Abrir Entre líneas"></a>
    <span class="proj__eyebrow">Juego web · Novela visual</span>
    <h3>Entre líneas</h3>
    <p>Demo otome con Javi, Sue y Smokey, decisiones, afinidad, guardado y animaciones.</p>
    <div class="links">
      <a class="repo-link" href="https://github.com/javidei/juego-otome" aria-label="Abrir el repositorio de Entre líneas">
        <i class="fa-brands fa-github" aria-hidden="true"></i><span>juego-otome</span>
      </a>
    </div>`;

  cards.appendChild(card);

  const version = document.querySelector('.footer__version');
  if (version) {
    version.textContent = 'v0.3.4 · 08/08/2026';
    version.title = 'Publicada el 8 de agosto de 2026';
  }

  const versionMeta = document.querySelector('meta[name="application-version"]');
  if (versionMeta) versionMeta.setAttribute('content', '0.3.4');
})();
