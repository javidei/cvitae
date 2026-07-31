const builds = {
  pc2015: {
    period: "2015 — 2026",
    name: "La vieja guardia",
    title: "El PC que aguantó toda una década.",
    description: "Una plataforma Intel sólida que fue creciendo con una gráfica más capaz y más almacenamiento. El punto de partida de toda la comparativa.",
    status: "Configuración anterior",
    theme: "old",
    metrics: [
      ["Procesador", "4 núcleos / 8 hilos"],
      ["Memoria", "16 GB DDR4"],
      ["Gráfica", "8 GB VRAM"]
    ],
    parts: [
      ["CPU", "Intel Core i7-6700K", "La base original de 6.ª generación"],
      ["GPU", "NVIDIA RTX 2070 SUPER", "La gran mejora gráfica · 8 GB"],
      ["Placa", "Gigabyte GA-Z170-HD3P", "Plataforma ATX con soporte M.2"],
      ["RAM", "16 GB DDR4 · 2133 MHz", "Capacidad suficiente durante años"],
      ["Sistema", "SSD · 480 GB", "Arranque y aplicaciones"],
      ["Archivo", "HDD · 2 TB", "Almacenamiento de gran capacidad"]
    ],
    history: [
      ["01 · ORIGEN", "La plataforma de 2015", "i7-6700K, placa Z170 y 16 GB DDR4 como núcleo del equipo."],
      ["02 · GRÁFICA", "Salto a la RTX 2070 SUPER", "La actualización que alargó su vida para seguir jugando con solvencia."],
      ["03 · ESPACIO", "SSD para velocidad + HDD para capacidad", "Un reparto práctico entre sistema, programas, juegos y archivos."],
      ["04 · RELEVO", "Once años después, toca cambiar de base", "CPU, memoria y plataforma marcan el límite y dan paso al equipo de 2026."]
    ]
  },
  pc2026: {
    period: "NUEVA GENERACIÓN · 2026",
    name: "El salto de nivel",
    title: "Más potencia para jugar, programar y durar.",
    description: "Una renovación completa: más núcleos, el doble de memoria, almacenamiento NVMe y una GPU de nueva generación dentro de una caja sobria.",
    status: "Configuración actual",
    theme: "new",
    metrics: [
      ["Procesador", "20 núcleos / 28 hilos"],
      ["Memoria", "32 GB DDR5"],
      ["Gráfica", "16 GB GDDR7"]
    ],
    parts: [
      ["CPU", "Intel Core i7-14700K", "20 núcleos y 28 hilos"],
      ["GPU", "ASUS Prime RTX 5070 Ti", "16 GB de memoria GDDR7"],
      ["Placa", "ASUS Prime B760-PLUS", "Plataforma ATX y memoria DDR5"],
      ["RAM", "Kingston Fury Beast · 32 GB", "DDR5-6000 en doble canal"],
      ["SSD", "Samsung 990 Pro · 2 TB", "NVMe de alto rendimiento"],
      ["Caja", "Fractal Design North", "Frontal de madera y buen flujo"],
      ["Fuente", "Gigabyte UD850GM · 850 W", "Potencia preparada para la GPU"],
      ["Disipador", "Noctua NH-U12S chromax.black", "Formato compacto y diseño negro"],
      ["Aire", "Corsair RS120 · Pack de 3", "Ventilación adicional de la caja"]
    ],
    history: [
      ["01 · PLATAFORMA", "Nueva base Intel + DDR5", "El i7-14700K multiplica los núcleos y abre el salto a memoria DDR5."],
      ["02 · GRÁFICA", "RTX 5070 Ti con 16 GB", "El doble de memoria gráfica y una generación preparada para juegos más exigentes."],
      ["03 · VELOCIDAD", "Samsung 990 Pro de 2 TB", "El NVMe concentra sistema, aplicaciones y juegos principales."],
      ["04 · ACABADO", "Fractal North y ventilación cuidada", "Un montaje más limpio, sobrio y pensado para mover aire con menos ruido."]
    ]
  }
};

const comparison = [
  ["Procesador", "i7-6700K", "i7-14700K", "4/8 → 20/28 núcleos e hilos"],
  ["Gráfica", "RTX 2070 SUPER", "RTX 5070 Ti", "8 GB → 16 GB de memoria gráfica"],
  ["Memoria", "16 GB DDR4", "32 GB DDR5", "Doble capacidad y nueva generación"],
  ["Disco principal", "SSD 480 GB", "NVMe 2 TB", "Más capacidad y conexión PCIe"],
  ["Plataforma", "Z170", "B760", "De la 6.ª a la 14.ª generación Intel"]
];

const validViews = new Set(["pc2015", "pc2026", "comparativa"]);
const content = document.querySelector("#contenido");
const tabs = [...document.querySelectorAll("[data-view]")];
const closingAction = document.querySelector("#closing-action");
let currentView = "comparativa";

function partCards(parts) {
  return parts.map(([kind, name, detail], index) => `
    <article class="part-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <small>${kind}</small>
      <h3>${name}</h3>
      <p>${detail}</p>
    </article>`).join("");
}

function historyItems(history) {
  return history.map(([step, title, text]) => `
    <li>
      <span>${step}</span>
      <div><h3>${title}</h3><p>${text}</p></div>
    </li>`).join("");
}

function buildView(build) {
  return `
    <section class="build-intro build-intro--${build.theme}">
      <div>
        <p class="section-index">01 · ${build.period}</p>
        <span class="status"><i></i>${build.status}</span>
        <h2>${build.name}</h2>
        <h3>${build.title}</h3>
        <p>${build.description}</p>
      </div>
      <dl class="metric-stack">
        ${build.metrics.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
      </dl>
    </section>

    <section class="section-block">
      <div class="section-head">
        <div><p class="section-index">02 · COMPONENTES</p><h2>La configuración <em>por dentro</em></h2></div>
        <p>Las piezas que definieron esta generación del equipo.</p>
      </div>
      <div class="parts-grid">${partCards(build.parts)}</div>
    </section>

    <section class="section-block history-section">
      <div class="section-head">
        <div><p class="section-index">03 · HISTORIAL DE MEJORAS</p><h2>Cómo fue <em>evolucionando</em></h2></div>
        <p>Los cambios clave que explican el estado final de este PC.</p>
      </div>
      <ol class="history">${historyItems(build.history)}</ol>
    </section>`;
}

function comparisonView() {
  return `
    <section class="compare-intro">
      <p class="section-index">01 · COMPARATIVA DIRECTA</p>
      <div class="compare-heading">
        <h2>Once años de diferencia,<br><em>componente a componente.</em></h2>
        <p>Una vista limpia para entender dónde está el salto real entre ambos equipos, sin cifras de rendimiento inventadas.</p>
      </div>
      <div class="build-choices">
        <button type="button" data-go="pc2015"><span>2015</span><div><small>PC ANTERIOR</small><strong>i7-6700K</strong><p>RTX 2070 SUPER · 16 GB DDR4</p></div><b>Explorar →</b></button>
        <button type="button" class="current" data-go="pc2026"><span>2026</span><div><small>PC ACTUAL</small><strong>i7-14700K</strong><p>RTX 5070 Ti · 32 GB DDR5</p></div><b>Explorar →</b></button>
      </div>
    </section>

    <section class="section-block comparison-section">
      <div class="section-head">
        <div><p class="section-index">02 · EL SALTO</p><h2>Antes <em>vs.</em> ahora</h2></div>
        <p>Cambios medibles en capacidad, generación y arquitectura.</p>
      </div>
      <div class="comparison-table" role="table" aria-label="Comparación de componentes">
        <div class="comparison-row comparison-header" role="row"><span role="columnheader">Componente</span><span role="columnheader">PC 2015</span><span role="columnheader">PC 2026</span><span role="columnheader">Mejora</span></div>
        ${comparison.map(([part, oldValue, newValue, gain]) => `<div class="comparison-row" role="row"><b role="cell">${part}</b><span role="cell">${oldValue}</span><strong role="cell">${newValue}</strong><em role="cell">${gain}</em></div>`).join("")}
      </div>
    </section>`;
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

  closingAction.innerHTML = currentView === "pc2015" ? "Ver PC 2026 <span>→</span>" : "Ver PC 2015 <span>→</span>";
  document.title = `${currentView === "comparativa" ? "Comparativa" : currentView === "pc2015" ? "PC 2015" : "PC 2026"} · Mis PC`;

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

closingAction.addEventListener("click", () => render(currentView === "pc2015" ? "pc2026" : "pc2015", { scroll: true }));
window.addEventListener("hashchange", () => render(location.hash.slice(1), { updateHash: false, scroll: true }));

render(location.hash.slice(1), { updateHash: false });
