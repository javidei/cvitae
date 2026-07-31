const builds = {
  pc1: {
    owner: "Sue",
    period: "HISTÓRICO · 2015—2026",
    name: "PC 1 · Sue",
    title: "El equipo original, conservado tal como fue.",
    description: "Esta ficha es una fotografía histórica de su configuración completa antes del relevo. Aunque el SanDisk pasa después al PC 2, aquí permanece para recordar cómo estaba montado el PC 1.",
    status: "Configuración histórica",
    theme: "old",
    image: "assets/pc1-nox.webp",
    imageAlt: "Caja NOX Hummer MC Pro negra del PC 1 de Sue",
    caseName: "NOX Hummer MC Pro",
    cardYear: "2015",
    metrics: [
      ["Procesador", "4 núcleos / 8 hilos"],
      ["Memoria", "16 GB DDR4"],
      ["Gráfica", "8 GB VRAM"]
    ],
    parts: [
      ["CPU", "Intel Core i7-6700K", "La base original de 6.ª generación"],
      ["GPU", "NVIDIA RTX 2070 SUPER", "La mejora gráfica que alargó su vida · 8 GB"],
      ["Placa", "Gigabyte GA-Z170-HD3P", "Plataforma ATX de la configuración histórica"],
      ["RAM", "16 GB DDR4 · 2133 MHz", "Memoria del montaje original"],
      ["SSD", "SanDisk Plus · 480 GB", "Sistema y aplicaciones antes de pasar al PC 2"],
      ["HDD", "Toshiba · 2 TB", "Almacenamiento de archivos del PC 1"],
      ["Caja", "NOX Hummer MC Pro", "La torre negra con iluminación ARGB"],
      ["Fuente", "ATX · 750 W", "Modelo exacto no documentado"]
    ],
    history: [
      ["01 · ORIGEN", "La plataforma de 2015", "i7-6700K, placa Z170 y 16 GB DDR4 formaron el núcleo del equipo de Sue."],
      ["02 · GRÁFICA", "Actualización a la RTX 2070 SUPER", "El salto que permitió seguir jugando con solvencia durante más años."],
      ["03 · ALMACENAMIENTO", "SanDisk para velocidad y Toshiba para capacidad", "El SSD de 480 GB alojaba el sistema y el HDD de 2 TB guardaba los archivos."],
      ["04 · ARCHIVO", "El PC queda como registro histórico", "Su ficha no pierde componentes: muestra cómo era antes de que el SanDisk se trasladase al PC 2."]
    ]
  },
  pc2: {
    owner: "Sue",
    period: "CONFIGURACIÓN ACTUAL · 2026",
    name: "PC 2 · Sue",
    title: "Una plataforma moderna alrededor de la 2070 SUPER.",
    description: "El nuevo equipo de Sue renueva procesador, placa, almacenamiento principal, refrigeración y caja. Mantiene la RTX 2070 SUPER y suma el SanDisk de 480 GB procedente del PC 1.",
    status: "Equipo actual de Sue",
    theme: "sue",
    image: "assets/pc2-msi.webp",
    imageAlt: "Caja MSI MAG Forge 320R Airflow del PC 2 de Sue",
    caseName: "MSI MAG Forge 320R Airflow",
    cardYear: "2026",
    metrics: [
      ["Procesador", "12 núcleos / 20 hilos"],
      ["Memoria", "16 GB DDR4"],
      ["Gráfica", "8 GB VRAM"]
    ],
    parts: [
      ["CPU", "Intel Core i7-12700KF", "12 núcleos y 20 hilos"],
      ["GPU", "NVIDIA RTX 2070 SUPER", "8 GB reutilizados en la nueva plataforma"],
      ["Placa", "MSI PRO B760-P WiFi DDR4", "Plataforma ATX con conectividad Wi-Fi"],
      ["RAM", "16 GB DDR4", "Memoria actual en doble canal"],
      ["SSD principal", "Lexar EQ790 NVMe · 2 TB", "Almacenamiento M.2 rápido y de gran capacidad"],
      ["SSD secundario", "SanDisk Plus · 480 GB", "La única unidad trasladada desde el PC 1 por ahora"],
      ["Caja", "MSI MAG Forge 320R Airflow", "Frontal mallado y ventiladores ARGB"],
      ["Disipador", "Thermalright Phantom Spirit 120 SE", "Disipador de doble torre en color negro"],
      ["Soporte GPU", "Jonsbo VC-20", "Apoyo vertical para la gráfica"],
      ["Sistema", "Windows 11", "Sistema operativo del nuevo montaje"],
      ["Fuente", "Pendiente de confirmar", "Se estudia una fuente ATX modular de 750 W"]
    ],
    history: [
      ["01 · PLATAFORMA", "Salto al i7-12700KF", "Nueva placa B760 y una CPU con muchos más núcleos e hilos que la plataforma anterior."],
      ["02 · REUTILIZACIÓN", "La RTX 2070 SUPER sigue en servicio", "La gráfica mantiene su sitio en un equipo mucho más moderno y equilibrado."],
      ["03 · NVME", "Lexar EQ790 de 2 TB", "El nuevo M.2 se convierte en la unidad principal del PC 2."],
      ["04 · TRASLADO", "El SanDisk pasa del PC 1 al PC 2", "Por ahora es la única unidad de almacenamiento trasladada; el Toshiba no se mueve."],
      ["05 · CAJA Y AIRE", "MSI Forge 320R + Phantom Spirit", "La nueva torre y el disipador mejoran ventilación, espacio y facilidad de montaje."],
      ["06 · PENDIENTE", "Fuente de alimentación por cerrar", "El modelo exacto todavía no se da por confirmado en la configuración."]
    ]
  },
  pc3: {
    owner: "Javi",
    period: "CONFIGURACIÓN ACTUAL · 2026",
    name: "PC 3 · Javi",
    title: "Potencia moderna con un frontal de madera.",
    description: "El equipo de Javi reúne la plataforma de mayor rendimiento de la casa: 32 GB DDR5, RTX 5070 Ti, NVMe de 2 TB y la Fractal Design North como seña visual.",
    status: "Equipo actual de Javi",
    theme: "javi",
    image: "assets/pc3-fractal.webp",
    imageAlt: "Caja Fractal Design North negra con frontal de madera del PC 3 de Javi",
    caseName: "Fractal Design North",
    cardYear: "2026",
    metrics: [
      ["Procesador", "20 núcleos / 28 hilos"],
      ["Memoria", "32 GB DDR5"],
      ["Gráfica", "16 GB GDDR7"]
    ],
    parts: [
      ["CPU", "Intel Core i7-14700K", "20 núcleos y 28 hilos"],
      ["GPU", "ASUS Prime RTX 5070 Ti OC", "16 GB de memoria GDDR7"],
      ["Placa", "ASUS Prime B760-PLUS", "Plataforma ATX con memoria DDR5"],
      ["RAM", "Kingston Fury Beast · 32 GB", "DDR5-6000 CL36 en doble canal"],
      ["SSD", "Samsung 990 Pro · 2 TB", "NVMe de alto rendimiento"],
      ["Caja", "Fractal Design North", "Acabado negro y frontal de madera"],
      ["Fuente", "Gigabyte UD850GM · 850 W", "Potencia preparada para la RTX 5070 Ti"],
      ["Disipador", "Noctua NH-U12S chromax.black", "Refrigeración por aire en acabado negro"]
    ],
    history: [
      ["01 · PLATAFORMA", "Intel de 14.ª generación + DDR5", "El i7-14700K y los 32 GB DDR5 forman la base de mayor rendimiento de los tres equipos."],
      ["02 · GRÁFICA", "RTX 5070 Ti con 16 GB", "La nueva generación gráfica duplica la memoria disponible frente a la RTX 2070 SUPER."],
      ["03 · VELOCIDAD", "Samsung 990 Pro de 2 TB", "Sistema, aplicaciones y juegos principales se concentran en el NVMe."],
      ["04 · DISEÑO", "Fractal North con frontal de madera", "La caja combina ventilación y una estética más sobria para el PC de Javi."]
    ]
  }
};

const comparison = [
  ["Propietario", "Sue", "Sue", "Javi"],
  ["Estado", "Histórico", "Actual", "Actual"],
  ["Procesador", "i7-6700K", "i7-12700KF", "i7-14700K"],
  ["Gráfica", "RTX 2070 SUPER", "RTX 2070 SUPER", "RTX 5070 Ti"],
  ["Memoria", "16 GB DDR4-2133", "16 GB DDR4", "32 GB DDR5-6000"],
  ["Disco principal", "SanDisk 480 GB", "Lexar EQ790 2 TB", "Samsung 990 Pro 2 TB"],
  ["Disco secundario", "Toshiba 2 TB", "SanDisk 480 GB", "—"],
  ["Placa", "Gigabyte Z170", "MSI B760 DDR4", "ASUS B760 DDR5"],
  ["Caja", "NOX Hummer MC Pro", "MSI MAG Forge 320R", "Fractal Design North"],
  ["Fuente", "ATX 750 W", "Por confirmar", "Gigabyte 850 W"]
];

const validViews = new Set(["pc1", "pc2", "pc3", "comparativa"]);
const content = document.querySelector("#contenido");
const tabs = [...document.querySelectorAll("[data-view]")];
const closingAction = document.querySelector("#closing-action");
let currentView = "comparativa";

function partCards(parts, build) {
  return parts.map(([kind, name, detail], index) => `
    <article class="part-card">
      <img class="part-card__image" src="${build.image}" alt="" aria-hidden="true">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <small>${kind}</small>
      <h3>${name}</h3>
      <p>${detail}</p>
    </article>`).join("");
}

function historyItems(items) {
  return items.map(([step, title, text]) => `
    <li>
      <span>${step}</span>
      <div><h3>${title}</h3><p>${text}</p></div>
    </li>`).join("");
}

function buildView(build) {
  return `
    <section class="build-intro build-intro--${build.theme}">
      <div class="build-intro__copy">
        <p class="section-index">01 · ${build.period}</p>
        <div class="build-labels">
          <span class="status"><i></i>${build.status}</span>
          <span class="owner-badge">${build.owner}</span>
        </div>
        <h2>${build.name}</h2>
        <h3>${build.title}</h3>
        <p>${build.description}</p>
      </div>
      <div class="build-side">
        <figure class="build-portrait">
          <img src="${build.image}" alt="${build.imageAlt}">
          <figcaption><small>TORRE</small><strong>${build.caseName}</strong></figcaption>
        </figure>
        <dl class="metric-stack">
          ${build.metrics.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
        </dl>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <div><p class="section-index">02 · COMPONENTES</p><h2>La configuración <em>por dentro</em></h2></div>
        <p>Las piezas documentadas de este equipo, sin mezclar componentes de los otros PC.</p>
      </div>
      <div class="parts-grid">${partCards(build.parts, build)}</div>
    </section>

    <section class="section-block history-section">
      <div class="section-head">
        <div><p class="section-index">03 · HISTORIAL DE MEJORAS</p><h2>Cómo fue <em>evolucionando</em></h2></div>
        <p>Los cambios y decisiones que explican el estado de esta configuración.</p>
      </div>
      <ol class="history">${historyItems(build.history)}</ol>
    </section>`;
}

function buildChoice(key) {
  const build = builds[key];
  const summary = key === "pc1"
    ? "i7-6700K · RTX 2070 SUPER"
    : key === "pc2"
      ? "i7-12700KF · RTX 2070 SUPER"
      : "i7-14700K · RTX 5070 Ti";

  return `
    <button type="button" class="build-choice build-choice--${key}" data-go="${key}">
      <img class="build-choice__image" src="${build.image}" alt="" aria-hidden="true">
      <span>${key.slice(-1).padStart(2, "0")}</span>
      <div><small>${build.owner.toUpperCase()} · ${key === "pc1" ? "HISTÓRICO" : "ACTUAL"}</small><strong>${build.name}</strong><p>${summary}</p></div>
      <b>Explorar →</b>
    </button>`;
}

function comparisonView() {
  return `
    <section class="compare-intro">
      <p class="section-index">01 · UNIDAD FAMILIAR</p>
      <div class="compare-heading">
        <h2>Tres PC distintos,<br><em>cada uno en su sitio.</em></h2>
        <p>El PC 1 conserva la configuración histórica de Sue; el PC 2 muestra su equipo actual y el PC 3 corresponde al montaje de Javi con frontal de madera.</p>
      </div>
      <div class="build-choices">
        ${buildChoice("pc1")}
        ${buildChoice("pc2")}
        ${buildChoice("pc3")}
      </div>
    </section>

    <section class="section-block comparison-section">
      <div class="section-head">
        <div><p class="section-index">02 · COMPARATIVA DIRECTA</p><h2>Los tres, <em>componente a componente</em></h2></div>
        <p>El SanDisk figura en el PC 1 como parte de su historial y en el PC 2 como la única unidad trasladada por ahora.</p>
      </div>
      <div class="comparison-table" role="table" aria-label="Comparación de los tres equipos">
        <div class="comparison-row comparison-header" role="row">
          <span role="columnheader">Componente</span>
          <span role="columnheader">PC 1 · Sue</span>
          <span role="columnheader">PC 2 · Sue</span>
          <span role="columnheader">PC 3 · Javi</span>
        </div>
        ${comparison.map(([part, pc1, pc2, pc3]) => `
          <div class="comparison-row" role="row">
            <b role="cell">${part}</b>
            <span role="cell" data-label="PC 1 · Sue">${pc1}</span>
            <strong role="cell" data-label="PC 2 · Sue">${pc2}</strong>
            <em role="cell" data-label="PC 3 · Javi">${pc3}</em>
          </div>`).join("")}
      </div>
    </section>`;
}

function nextView(view) {
  return ({ comparativa: "pc1", pc1: "pc2", pc2: "pc3", pc3: "comparativa" })[view];
}

function viewLabel(view) {
  return ({ pc1: "PC 1 de Sue", pc2: "PC 2 de Sue", pc3: "PC 3 de Javi", comparativa: "la comparativa" })[view];
}

function render(view, options = {}) {
  currentView = validViews.has(view) ? view : "comparativa";
  content.innerHTML = currentView === "comparativa" ? comparisonView() : buildView(builds[currentView]);
  content.setAttribute("aria-labelledby", `tab-${currentView}`);

  tabs.forEach((tab) => {
    const selected = tab.dataset.view === currentView;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  const targetView = nextView(currentView);
  closingAction.innerHTML = `Ver ${viewLabel(targetView)} <span>→</span>`;
  const title = currentView === "comparativa" ? "Comparativa" : builds[currentView].name;
  document.title = `${title} · Sue & Javi`;

  if (options.updateHash !== false) history.replaceState(null, "", `#${currentView}`);
  if (options.scroll) content.scrollIntoView({ behavior: "smooth", block: "start" });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => render(tab.dataset.view, { scroll: true }));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let targetIndex = index;
    if (event.key === "ArrowRight") targetIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") targetIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") targetIndex = 0;
    if (event.key === "End") targetIndex = tabs.length - 1;
    tabs[targetIndex].focus();
    render(tabs[targetIndex].dataset.view, { scroll: false });
  });
});

content.addEventListener("click", (event) => {
  const target = event.target.closest("[data-go]");
  if (target) render(target.dataset.go, { scroll: true });
});

closingAction.addEventListener("click", () => render(nextView(currentView), { scroll: true }));
window.addEventListener("hashchange", () => render(location.hash.slice(1), { updateHash: false, scroll: true }));

render(location.hash.slice(1), { updateHash: false });
