(() => {
  const portraitStyles = document.createElement('style');
  portraitStyles.textContent = `
    .hero {
      padding-bottom: 0 !important;
    }

    .hero__grid {
      align-items: stretch !important;
    }

    @media (min-width: 761px) {
      .hero__text {
        padding-bottom: 24px;
      }
    }

    .hero__card {
      min-height: 100%;
      display: flex !important;
      align-items: flex-end !important;
      justify-content: center !important;
      align-self: stretch;
      justify-self: stretch;
    }

    .hero__card .avatar {
      width: min(100%, 440px) !important;
      height: 100% !important;
      min-height: 0 !important;
      aspect-ratio: auto !important;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border: 0 !important;
      border-radius: 0 !important;
      overflow: visible !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    .hero__card .avatar img {
      width: 100% !important;
      height: auto !important;
      max-height: 650px !important;
      display: block;
      object-fit: contain !important;
      object-position: center bottom !important;
      border-radius: 0 !important;
      clip-path: none !important;
      filter: none !important;
    }

    #experiencia.section {
      padding-top: 0 !important;
    }

    @media (max-width: 760px) {
      html {
        scroll-padding-top: 112px;
      }

      .header__inner {
        padding-top: 8px;
      }

      .brand {
        min-height: 46px;
        gap: 9px;
      }

      .brand__dot {
        display: none;
      }

      .hero {
        padding: 28px 0 10px !important;
      }

      .hero__grid {
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 0 !important;
      }

      .hero__card {
        display: none !important;
      }

      #experiencia.section {
        padding-top: 32px !important;
      }
    }

    @media (max-width: 480px) {
      .header__inner {
        gap: 3px;
      }

      .brand {
        min-height: 42px;
      }

      .nav {
        padding-bottom: 7px;
      }

      .hero {
        padding-top: 22px !important;
      }
    }
  `;
  document.head.appendChild(portraitStyles);

  document.querySelectorAll('.mobile-profile-avatar').forEach(node => node.remove());

  const heroAvatar = document.querySelector('.hero__card .avatar img');

  if (heroAvatar) {
    heroAvatar.alt = 'Ilustración de Javier Díaz con los brazos cruzados';
    heroAvatar.style.width = '100%';
    heroAvatar.style.height = 'auto';
    heroAvatar.style.maxHeight = '650px';
    heroAvatar.style.objectFit = 'contain';
    heroAvatar.style.objectPosition = 'center bottom';
    heroAvatar.style.filter = 'none';
    heroAvatar.style.borderRadius = '0';

    const heroAvatarFrame = heroAvatar.closest('.avatar');
    if (heroAvatarFrame) {
      heroAvatarFrame.style.background = 'transparent';
      heroAvatarFrame.style.border = '0';
      heroAvatarFrame.style.borderRadius = '0';
      heroAvatarFrame.style.boxShadow = 'none';
      heroAvatarFrame.style.overflow = 'visible';
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
        const src = `data:image/webp;base64,${base64}`;

        heroAvatar.onerror = () => {
          heroAvatar.onerror = null;
          heroAvatar.src = './assets/icons/icon-512.png';
        };
        heroAvatar.src = src;
      })
      .catch(() => {
        heroAvatar.src = './assets/icons/icon-512.png';
      });
  }

  const contactIcons = document.querySelector('#contacto .contact__icons');
  if (contactIcons) {
    const githubContact = contactIcons.querySelector('a[aria-label="GitHub"]');
    if (githubContact) {
      githubContact.href = 'https://github.com/javidei';
      githubContact.title = 'GitHub · javidei';
    }

    let whatsappContact = contactIcons.querySelector('a[aria-label^="WhatsApp"]');
    if (!whatsappContact) {
      whatsappContact = document.createElement('a');
      whatsappContact.href = 'https://wa.me/34622854155';
      whatsappContact.target = '_blank';
      whatsappContact.rel = 'noopener noreferrer';
      whatsappContact.setAttribute('aria-label', 'WhatsApp · +34 622 854 155');
      whatsappContact.title = 'WhatsApp · +34 622 854 155';
      whatsappContact.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';
      contactIcons.appendChild(whatsappContact);
    }
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
      if (!base64.startsWith('UklGR')) throw new Error('El recurso WebP no es válido');
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
      <a class="proj__card-link" href="https://javidei.github.io/Godot/" target="_blank" rel="noopener noreferrer" aria-label="Jugar a Entre líneas: La octava silla"></a>
      <span class="proj__eyebrow">Early Access · Godot 4</span>
      <h3>Entre líneas: La octava silla</h3>
      <p>Novela visual con diálogos, decisiones y afinidad entre siete personajes.</p>
      <div class="links">
        <a href="https://javidei.github.io/Godot/" target="_blank" rel="noopener noreferrer" aria-label="Jugar a Entre líneas: La octava silla">
          <i class="fa-solid fa-gamepad" aria-hidden="true"></i><span>Jugar</span>
        </a>
        <a class="repo-link" href="https://github.com/javidei/Godot" aria-label="Abrir el repositorio de Godot">
          <i class="fa-brands fa-github" aria-hidden="true"></i><span>Godot</span>
        </a>
      </div>`;
    cards.appendChild(godotCard);
  }

  godotCard.style.backgroundSize = 'cover';
  godotCard.style.backgroundPosition = 'center 42%';
  godotCard.style.backgroundRepeat = 'no-repeat';

  loadEmbeddedImage(godotCard, [
    './assets/projects/godot-pirate-card-0.txt',
    './assets/projects/godot-pirate-card-1.txt',
    './assets/projects/godot-pirate-card-2.txt',
    './assets/projects/godot-pirate-card-3.txt',
    './assets/projects/godot-pirate-card-4.txt',
    './assets/projects/godot-pirate-card-5.txt'
  ], 'radial-gradient(circle at 78% 22%, rgba(94, 190, 238, .34), transparent 28%), linear-gradient(135deg, #253a5a 0%, #15253e 50%, #09111f 100%)');

  sortProjectsByLatestPush();

  const version = document.querySelector('.footer__version');
  if (version) {
    version.textContent = 'v0.3.21 · 10/08/2026';
    version.title = 'Publicada el 10 de agosto de 2026';
  }

  const versionMeta = document.querySelector('meta[name="application-version"]');
  if (versionMeta) versionMeta.setAttribute('content', '0.3.21');
})();
