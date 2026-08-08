(() => {
  const heroAvatar = document.querySelector('.hero__card .avatar img');
  if (heroAvatar) {
    heroAvatar.alt = 'Ilustración de Javier Díaz con los brazos cruzados';
    heroAvatar.style.width = '100%';
    heroAvatar.style.height = 'clamp(390px, 48vw, 560px)';
    heroAvatar.style.objectFit = 'contain';
    heroAvatar.style.objectPosition = 'center top';
    heroAvatar.style.filter = 'none';

    const heroAvatarFrame = heroAvatar.closest('.avatar');
    if (heroAvatarFrame) {
      heroAvatarFrame.style.background = 'transparent';
      heroAvatarFrame.style.border = '0';
      heroAvatarFrame.style.boxShadow = 'none';
      heroAvatarFrame.style.overflow = 'hidden';
    }

    const heroParts = [
      './assets/hero/javi-crossed-arms-0.txt',
      './assets/hero/javi-crossed-arms-1.txt',
      './assets/hero/javi-crossed-arms-2.txt',
      './assets/hero/javi-crossed-arms-3a.txt',
      './assets/hero/javi-crossed-arms-3b.txt'
    ];

    Promise.all(heroParts.map(path => fetch(path, { cache: 'no-store' }).then(response => {
      if (!response.ok) throw new Error(`No se pudo cargar ${path}`);
      return response.text();
    })))
      .then(parts => {
        const base64 = parts.join('').replace(/[^A-Za-z0-9+/=]/g, '');
        if (!base64.startsWith('UklGR')) throw new Error('El recurso WebP no es válido');
        heroAvatar.onerror = () => {
          heroAvatar.onerror = null;
          heroAvatar.src = './assets/icons/icon-512.png';
        };
        heroAvatar.src = `data:image/webp;base64,${base64}`;
      })
      .catch(() => {
        heroAvatar.src = './assets/icons/icon-512.png';
      });
  }

  const cards = document.querySelector('#proyectos .cards');
  if (!cards) return;

  const loadEmbeddedImage = async (card, parts, fallback) => {
    try {
      const chunks = await Promise.all(parts.map(path => fetch(path, { cache: 'no-store' }).then(r => {
        if (!r.ok) throw new Error(`No se pudo cargar ${path}`);
        return r.text();
      })));
      const base64 = chunks.join('').replace(/[^A-Za-z0-9+/=]/g, '');
      card.style.backgroundImage = `url("data:image/webp;base64,${base64}")`;
    } catch {
      card.style.backgroundImage = fallback;
    }
  };

  cards.querySelectorAll('.proj--juego-otome').forEach(card => card.remove());

  let godotCard = cards.querySelector('.proj--godot');
  if (!godotCard) {
    godotCard = document.createElement('article');
    godotCard.className = 'proj proj--godot';
    godotCard.style.backgroundColor = '#11151f';
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

  godotCard.style.backgroundSize = 'cover';
  godotCard.style.backgroundPosition = 'center top';
  godotCard.style.backgroundRepeat = 'no-repeat';

  loadEmbeddedImage(godotCard, [
    './assets/projects/godot-card-image-0.txt',
    './assets/projects/godot-card-image-1.txt',
    './assets/projects/godot-card-image-2.txt',
    './assets/projects/godot-card-image-3.txt'
  ], 'radial-gradient(circle at 78% 22%, rgba(94, 190, 238, .34), transparent 28%), linear-gradient(135deg, #253a5a 0%, #15253e 50%, #09111f 100%)');

  const version = document.querySelector('.footer__version');
  if (version) {
    version.textContent = 'v0.3.12 · 09/08/2026';
    version.title = 'Publicada el 9 de agosto de 2026';
  }

  const versionMeta = document.querySelector('meta[name="application-version"]');
  if (versionMeta) versionMeta.setAttribute('content', '0.3.12');
})();
