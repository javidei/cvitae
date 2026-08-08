(() => {
  const cards = document.querySelector('#proyectos .cards');
  if (!cards) return;

  if (!cards.querySelector('.proj--juego-otome')) {
    const otomeCard = document.createElement('article');
    otomeCard.className = 'proj proj--juego-otome';
    otomeCard.style.backgroundImage = "url('https://javidei.github.io/juego-otome/assets/key-art.webp')";
    otomeCard.style.backgroundSize = 'cover';
    otomeCard.style.backgroundPosition = 'center 44%';
    otomeCard.innerHTML = `
      <a class="proj__card-link" href="https://javidei.github.io/juego-otome/" aria-label="Abrir Entre líneas"></a>
      <span class="proj__eyebrow">Juego web · Novela visual</span>
      <h3>Entre líneas</h3>
      <p>Demo otome con Javi, Sue y Smokey, decisiones, afinidad, guardado y animaciones.</p>
      <div class="links">
        <a class="repo-link" href="https://github.com/javidei/juego-otome" aria-label="Abrir el repositorio de Entre líneas">
          <i class="fa-brands fa-github" aria-hidden="true"></i><span>juego-otome</span>
        </a>
      </div>`;

    cards.appendChild(otomeCard);
  }

  if (!cards.querySelector('.proj--godot')) {
    const godotCard = document.createElement('article');
    godotCard.className = 'proj proj--godot';
    godotCard.style.backgroundImage = 'radial-gradient(circle at 78% 22%, rgba(94, 190, 238, .34), transparent 28%), linear-gradient(135deg, #253a5a 0%, #15253e 50%, #09111f 100%)';
    godotCard.style.backgroundSize = 'cover';
    godotCard.style.backgroundPosition = 'center';
    godotCard.innerHTML = `
      <a class="proj__card-link" href="https://github.com/javidei/Godot" aria-label="Abrir el proyecto Godot en GitHub"></a>
      <span class="proj__eyebrow">En desarrollo · Godot 4</span>
      <h3>Godot Game</h3>
      <p>Base inicial para un juego en Godot 4, preparada con escena principal y GDScript.</p>
      <div class="links">
        <a class="repo-link" href="https://github.com/javidei/Godot" aria-label="Abrir el repositorio de Godot">
          <i class="fa-brands fa-github" aria-hidden="true"></i><span>Godot</span>
        </a>
      </div>`;

    cards.appendChild(godotCard);
  }

  const version = document.querySelector('.footer__version');
  if (version) {
    version.textContent = 'v0.3.5 · 08/08/2026';
    version.title = 'Publicada el 8 de agosto de 2026';
  }

  const versionMeta = document.querySelector('meta[name="application-version"]');
  if (versionMeta) versionMeta.setAttribute('content', '0.3.5');
})();
