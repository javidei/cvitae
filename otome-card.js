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

  const getRepositoryName = card => {
    const repoLink = card.querySelector('.repo-link[href*="github.com/javidei/"]');
    if (!repoLink) return null;

    try {
      const url = new URL(repoLink.href);
      const parts = url.pathname.split('/').filter(Boolean);
      if (parts.length < 2 || parts[0].toLowerCase() !== 'javidei') return null;
      return parts[1].replace(/\.git$/i, '').toLowerCase();
    } catch {
      return null;
    }
  };

  const sortProjectsByLatestPush = async () => {
    const projectCards = [...cards.querySelectorAll(':scope > .proj')];
    if (projectCards.length < 2) return;

    const originalOrder = new Map(projectCards.map((card, index) => [card, index]));

    try {
      const response = await fetch('https://api.github.com/users/javidei/repos?per_page=100&sort=pushed&direction=desc', {
        cache: 'no-store',
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!response.ok) return;

      const repos = await response.json();
      const pushedAt = new Map(repos.map(repo => [
        String(repo.name || '').toLowerCase(),
        Date.parse(repo.pushed_at || repo.updated_at || '') || 0
      ]));

      projectCards.sort((a, b) => {
        const aRepo = getRepositoryName(a);
        const bRepo = getRepositoryName(b);
        const aDate = aRepo ? (pushedAt.get(aRepo) || 0) : 0;
        const bDate = bRepo ? (pushedAt.get(bRepo) || 0) : 0;

        if (aDate !== bDate) return bDate - aDate;
        return originalOrder.get(a) - originalOrder.get(b);
      });

      projectCards.forEach(card => cards.appendChild(card));
    } catch {
      // Si GitHub no responde o limita la API, se conserva el orden original.
    }
  };

  cards.querySelectorAll('.proj--juego-otome').forEach(card => card.remove());

  const kebabCard = cards.querySelector('.proj--kebab');
  if (kebabCard) {
    kebabCard.style.backgroundImage = "url('https://images.unsplash.com/photo-1773620494884-940e0db95e46?auto=format&fit=crop&w=1200&q=80')";
    kebabCard.style.backgroundSize = 'cover';
    kebabCard.style.backgroundPosition = 'center 58%';
    kebabCard.style.backgroundRepeat = 'no-repeat';
  }

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

  sortProjectsByLatestPush();

  const version = document.querySelector('.footer__version');
  if (version) {
    version.textContent = 'v0.3.14 · 09/08/2026';
    version.title = 'Publicada el 9 de agosto de 2026';
  }

  const versionMeta = document.querySelector('meta[name="application-version"]');
  if (versionMeta) versionMeta.setAttribute('content', '0.3.14');
})();