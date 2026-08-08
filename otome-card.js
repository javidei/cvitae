(() => {
  const cards = document.querySelector('#proyectos .cards');
  if (!cards) return;

  const loadEmbeddedImage = async (card, parts) => {
    try {
      const chunks = await Promise.all(parts.map(path => fetch(path, { cache: 'force-cache' }).then(r => {
        if (!r.ok) throw new Error(`No se pudo cargar ${path}`);
        return r.text();
      })));
      const base64 = chunks.join('').replace(/[^A-Za-z0-9+/=]/g, '');
      card.style.backgroundImage = `url("data:image/webp;base64,${base64}")`;
    } catch {
      card.style.backgroundImage = "url('https://javidei.github.io/juego-otome/assets/key-art.webp')";
    }
  };

  let otomeCard = cards.querySelector('.proj--juego-otome');
  if (!otomeCard) {
    otomeCard = document.createElement('article');
    otomeCard.className = 'proj proj--juego-otome';
    otomeCard.style.backgroundSize = 'cover';
    otomeCard.style.backgroundPosition = 'center 44%';
    otomeCard.style.backgroundColor = '#1b1110';
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

  loadEmbeddedImage(otomeCard, [
    './assets/projects/entre-lineas-image-0.txt',
    './assets/projects/entre-lineas-image-1.txt',
    './assets/projects/entre-lineas-image-2.txt',
    './assets/projects/entre-lineas-image-3.txt'
  ]);

  if (!cards.querySelector('.proj--godot')) {
    const godotCard = document.createElement('article');
    godotCard.className = 'proj proj--godot';
    godotCard.style.backgroundImage = 'radial-gradient(circle at 78% 22%, rgba(94, 190, 238, .34), transparent 28%), linear-gradient(135deg, #253a5a 0%, #15253e 50%, #09111f 100%)';
    godotCard.style.backgroundSize = 'cover';
    godotCard.style.backgroundPosition = 'center';
    godotCard.innerHTML = `
      <a class="proj__card-link" href="https://javidei.github.io/cvitae/godot/" aria-label="Jugar a Godot Game"></a>
      <span class="proj__eyebrow">En desarrollo · Godot 4</span>
      <h3>Godot Game</h3>
      <p>Demo narrativa en Godot 4 con diálogos, decisiones, afinidad y animaciones.</p>
      <div class="links">
        <a class="repo-link" href="https://github.com/javidei/Godot" aria-label="Abrir el repositorio de Godot">
          <i class="fa-brands fa-github" aria-hidden="true"></i><span>Godot</span>
        </a>
      </div>`;
    cards.appendChild(godotCard);
  }

  const version = document.querySelector('.footer__version');
  if (version) {
    version.textContent = 'v0.3.7 · 08/08/2026';
    version.title = 'Publicada el 8 de agosto de 2026';
  }

  const versionMeta = document.querySelector('meta[name="application-version"]');
  if (versionMeta) versionMeta.setAttribute('content', '0.3.7');
})();