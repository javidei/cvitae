const item = (number, name, price) => ({ number, name, price });

const menu = [
  {
    id: "pizzas",
    name: "Pizzas",
    note: "Todas las pizzas familiares: 15 €. Masa gruesa: +1,50 €.",
    items: [
      item("1", "Tomate, mozzarella y orégano", "7,70 €"),
      item("2", "Tomate, mozzarella y cochinito", "9,60 €"),
      item("3", "Tomate, mozzarella y bacon", "9,60 €"),
      item("4", "Tomate, mozzarella y jamón york", "9,60 €"),
      item("5", "Tomate, mozzarella, jamón york, champiñones y aceitunas", "9,60 €"),
      item("6", "Tomate, mozzarella, jamón york, champiñones y salmón", "9,60 €"),
      item("7", "Tomate, mozzarella, jamón york y chorizo", "9,60 €"),
      item("8", "Tomate, mozzarella, atún y cebolla", "9,60 €"),
      item("9", "Tomate, mozzarella, jamón york, champiñones y atún", "9,60 €"),
      item("10", "Tomate, mozzarella, jamón york, champiñones, pimiento y espárragos", "9,60 €"),
      item("11", "Tomate, mozzarella y roquefort", "9,60 €"),
      item("12", "Tomate, mozzarella, roquefort, atún, cebolla y un toque picante", "9,60 €"),
      item("13", "Tomate, mozzarella, gambas y mejillones", "9,60 €"),
      item("14", "Tomate, mozzarella, champiñones, york, espárragos, alcachofas, aceitunas, pimiento y anchoas", "9,60 €"),
      item("15", "Tomate, mozzarella, boloñesa y queso", "9,60 €"),
      item("16", "Tomate, mozzarella, champiñones, york, atún, gambas y mejillones", "9,60 €"),
      item("17", "Tomate, mozzarella, gambas y salmón", "9,60 €"),
      item("18", "Tomate, mozzarella y cuatro quesos", "9,60 €"),
      item("19", "Tomate, mozzarella, pepperoni y jamón york", "9,60 €"),
      item("20", "Tomate, mozzarella, champiñones, bacon, cebolla y carbonara", "9,60 €"),
      item("21", "Tomate, mozzarella, jamón york, chorizo y huevo", "9,60 €"),
      item("22", "Tomate, mozzarella, jamón york y salchichas", "9,60 €"),
      item("23", "Tomate, mozzarella, jamón york y topping de pollo", "9,60 €"),
      item("24", "Tomate, mozzarella, york, champiñones, piña, bacon y dátiles", "9,60 €"),
      item("25", "Tomate, mozzarella, york, champiñones, cebolla y guindillas", "9,60 €"),
      item("26", "Tomate, mozzarella, rodajas de tomate, ajo y aceite", "9,60 €"),
      item("27", "Tomate, mozzarella, carne picada, pimiento verde y cebolla", "9,60 €"),
      item("28", "Tomate, mozzarella, setas y jamón serrano", "9,60 €"),
      item("29", "Tomate, mozzarella, champiñones, cebolla, pepinillos y alcaparras", "9,60 €"),
      item("30", "Tomate, mozzarella, jamón serrano y aceite", "9,60 €"),
      item("31", "Barbacoa, mozzarella, patatas y carne picada", "9,60 €"),
      item("32", "Tomate, mozzarella, jamón york, piña y maíz", "9,60 €"),
      item("33", "Barbacoa, mozzarella y carne de kebab", "9,60 €"),
      item("34", "Calzone de tomate, mozzarella y atún", "9,60 €"),
      item("35", "Calzone especial de tomate, mozzarella, champiñones, york, atún, mejillones y gambas", "9,60 €")
    ]
  },
  {
    id: "novedades",
    name: "Novedades",
    note: "Algunas de las incorporaciones a la carta.",
    items: [
      item("", "Kebab", "3,90 €"),
      item("", "Pizza turca", "5,00 €"),
      item("", "Patatas asadas rellenas", "5,50 €"),
      item("", "Sándwich de york y queso", "2,00 €"),
      item("", "Pollo asado", "10,00 €"),
      item("", "Croquetas con patatas", "5,00 €")
    ]
  },
  {
    id: "menus",
    name: "Menús",
    note: "Todos los menús incluyen patatas y refresco.",
    items: [
      item("", "Campero + patatas + refresco", "8,80 €"),
      item("", "Campero de shawarma asado + patatas + refresco", "8,80 €"),
      item("", "Kebab o durum + patatas + refresco", "8,80 €"),
      item("", "Hot dog + patatas + refresco", "8,80 €"),
      item("", "Hamburguesa de cerdo o pollo + patatas + refresco", "8,80 €"),
      item("", "Baguette pizza + patatas + refresco", "8,80 €"),
      item("", "Pan baguette + patatas + refresco", "8,80 €")
    ]
  },
  {
    id: "ayuyas",
    name: "Ayuyas",
    note: "Todas las ayuyas tienen un precio de 10,50 €.",
    items: [
      item("", "Mozzarella, cochinito y queso", "10,50 €"),
      item("", "Mozzarella y atún con tomate", "10,50 €"),
      item("", "Mozzarella, bacon y queso", "10,50 €"),
      item("", "Mozzarella, jamón york y queso", "10,50 €"),
      item("", "Mozzarella, barbacoa y pollo, ternera o mixto", "10,50 €"),
      item("", "Mozzarella, chorizo y queso", "10,50 €")
    ]
  },
  {
    id: "baguette-pizza",
    name: "Baguette pizza",
    note: "Todas las baguettes pizza tienen un precio de 5,60 €.",
    items: [
      item("1", "Tomate, mozzarella y jamón york", "5,60 €"),
      item("2", "Tomate, mozzarella y pepperoni", "5,60 €"),
      item("3", "Tomate, mozzarella y atún", "5,60 €"),
      item("4", "Tomate, mozzarella y roquefort", "5,60 €"),
      item("5", "Tomate, mozzarella y boloñesa", "5,60 €"),
      item("6", "Tomate, mozzarella, roquefort, atún y cebolla", "5,60 €"),
      item("7", "Tomate, mozzarella, jamón york y chorizo", "5,60 €"),
      item("8", "Tomate, mozzarella, salmón y gambas", "5,60 €"),
      item("9", "Tomate, mozzarella, gambas y mejillones", "5,60 €"),
      item("10", "Tomate, mozzarella, jamón york y topping de pollo", "5,60 €"),
      item("11", "Tomate, mozzarella y tres quesos", "5,60 €"),
      item("12", "Tomate, mozzarella, jamón york y salchichas", "5,60 €"),
      item("13", "Barbacoa, mozzarella y pollo", "5,60 €")
    ]
  },
  {
    id: "camperos",
    name: "Camperos",
    note: "Pan redondo tostado con rellenos variados.",
    items: [
      item("1", "Campero de jamón york", "3,90 €"),
      item("2", "Campero de filete de pollo", "4,90 €"),
      item("3", "Campero de filete de cerdo", "4,90 €"),
      item("4", "Campero de shawarma", "4,90 €"),
      item("5", "Campero de bacon", "4,90 €"),
      item("6", "Campero de pollo asado", "5,40 €"),
      item("7", "Capricho Pizza Rica: queso, lechuga, tomate, pollo empanado y salsa", "5,90 €")
    ]
  },
  {
    id: "carnes",
    name: "Carnes",
    note: "Platos, bocadillos y raciones.",
    items: [
      item("1", "Flamenquín de pollo casero", "9,90 €"),
      item("2", "Ración de alitas fritas", "6,40 €"),
      item("3", "Pepito de pollo", "3,90 €"),
      item("4", "Serranito de pollo en baguette", "7,90 €"),
      item("5", "Churrasquito de pollo", "9,90 €"),
      item("6", "Filete de pollo con patatas", "4,50 €"),
      item("7", "Flamenquín de cerdo casero", "9,90 €"),
      item("8", "Serranito de cerdo en baguette", "7,90 €"),
      item("9", "Pepito con patatas", "3,80 €"),
      item("10", "Filete de cerdo con patatas", "4,50 €"),
      item("11", "Punta de solomillo a la plancha", "10,50 €"),
      item("12", "San Jacobo de pollo casero", "10,50 €"),
      item("13", "Nuggets de pollo con patatas", "6,80 €"),
      item("14", "Croquetas con patatas", "6,80 €"),
      item("15", "Crujiente de pollo gratinado", "6,90 €")
    ]
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    note: "Opciones frescas y completas.",
    items: [
      item("1", "Lechuga, tomate, cebolla y aceitunas", "5,90 €"),
      item("2", "Lechuga, tomate, cebolla, aceitunas, atún, espárragos y huevo", "6,20 €"),
      item("3", "Lechuga, tomate, cebolla, aceitunas, atún, espárragos, huevo, zanahoria, remolacha, maíz y york", "7,80 €"),
      item("4", "Lechuga, tomate, pollo, pimientos, huevo, maíz y mayonesa", "8,50 €"),
      item("5", "Queso azul, manchego, pollo, cebolla, zanahoria, maíz, aceitunas y tomate", "8,90 €")
    ]
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas y complementos",
    note: "Hamburguesas, patatas, hot dog, nachos y otros acompañamientos.",
    items: [
      item("1", "Hamburguesa con carne, lechuga, tomate, cebolla y patatas", "4,90 €"),
      item("2", "Hamburguesa con carne, lechuga, tomate, cebolla, pepinillo, queso y patatas", "5,30 €"),
      item("3", "Hamburguesa con carne, lechuga, tomate, cebolla, pepinillo, queso, huevo, bacon y patatas", "6,40 €"),
      item("4", "Hamburguesa con carne, tomate, cebolla, lomo adobado, queso y lechuga", "5,40 €"),
      item("5", "Hamburguesa de ternera con cebolla, tomate, lechuga, gouda y patatas", "6,40 €"),
      item("6", "Cono de patatas", "3,60 €"),
      item("7", "Cono de patatas picantonas", "4,90 €"),
      item("7", "Cono de patatas con cheddar", "4,90 €"),
      item("7", "Cono de patatas con barbacoa", "4,90 €"),
      item("8", "Burger baguette", "6,90 €"),
      item("9", "Hamburguesa de pollo empanado", "5,90 €"),
      item("10", "Patata asada rellena", "7,90 €"),
      item("13", "Hamburguesa de 200 g, 100 % ternera", "8,90 €"),
      item("14", "Hot dog con patatas", "3,90 €"),
      item("15", "Hamburguesa de pollo con queso", "1,90 €"),
      item("16", "Crispy chicken", "5,20 €"),
      item("17", "Nachos", "4,50 €")
    ]
  },
  {
    id: "kebab",
    name: "Kebab",
    note: "Disponible con pollo, ternera o carne mixta según la opción.",
    items: [
      item("1", "Kebab de pollo", "4,50 €"),
      item("2", "Durum de pollo", "4,50 €"),
      item("3", "Kebab o durum solo carne: pollo, ternera o mixto", "4,90 €"),
      item("4", "Pizza turca de pollo", "5,80 €"),
      item("5", "Pizza turca solo carne de pollo", "6,50 €"),
      item("6", "Combinado turco con carne, patatas, salsas, queso y gratinado", "6,90 €")
    ]
  },
  {
    id: "pan-baguette",
    name: "Pan baguette",
    note: "Todos los panes baguette tienen un precio de 5,50 €.",
    items: [
      item("1", "Cochinito", "5,50 €"),
      item("2", "Jamón, tomate y aceite", "5,50 €"),
      item("3", "Filetes y mayonesa", "5,50 €"),
      item("4", "Bacon y queso", "5,50 €"),
      item("5", "Huevo y atún", "5,50 €"),
      item("6", "Pan de ajo, tomate y mozzarella", "5,50 €"),
      item("7", "Tortilla de patatas, tomate, lechuga y mayonesa", "5,50 €"),
      item("8", "Filete de pollo, mayonesa, tomate y lechuga", "5,50 €"),
      item("9", "Lomo adobado y mayonesa", "5,50 €"),
      item("11", "Tortilla y pimientos fritos", "5,50 €")
    ]
  },
  {
    id: "postres",
    name: "Postres caseros",
    note: "Pregunta por los postres disponibles del día.",
    items: []
  },
  {
    id: "roscas",
    name: "Roscas",
    note: "Todas las roscas tienen un precio de 7,20 €.",
    items: [
      item("", "Cochinito y queso", "7,20 €"),
      item("", "Filete y queso", "7,20 €"),
      item("", "Jamón, tomate y aceite", "7,20 €"),
      item("", "Atún y tomate", "7,20 €"),
      item("", "Tortilla y pimiento", "7,20 €")
    ]
  },
  {
    id: "tapas-frias",
    name: "Tapas frías",
    note: "Todas las tapas frías tienen un precio de 4,80 €.",
    items: [
      item("", "Ensaladilla", "4,80 €"),
      item("", "Salmorejo", "4,80 €"),
      item("", "Aceitunas", "4,80 €"),
      item("", "Salpicón", "4,80 €"),
      item("", "Huevos rellenos", "4,80 €"),
      item("", "Ensalada de pasta", "4,80 €")
    ]
  },
  {
    id: "tostas",
    name: "Tostás gratinadas",
    note: "Tostadas con tomate, mozzarella y diferentes coberturas.",
    items: [
      item("1", "Tomate, mozzarella y jamón york", "3,95 €"),
      item("2", "Tomate, mozzarella y atún", "3,95 €"),
      item("3", "Tomate, mozzarella y salmón", "3,95 €"),
      item("4", "Tomate, mozzarella y roquefort", "3,95 €"),
      item("5", "Tomate, mozzarella y jamón serrano", "3,95 €"),
      item("6", "Tomate, mozzarella, jamón serrano y roquefort", "4,00 €"),
      item("7", "Tomate, mozzarella, salmón y roquefort", "4,00 €")
    ]
  }
];

const root = document.querySelector("#menu-root");
const categoryLinks = document.querySelector("#category-links");
const search = document.querySelector("#menu-search");
const result = document.querySelector("#menu-result");

let activeCategory = "all";

const escapeHTML = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const normalize = (value) => String(value)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .trim();

const categoryButtons = [
  { id: "all", name: "Toda la carta" },
  ...menu.map(({ id, name }) => ({ id, name }))
];

categoryLinks.innerHTML = categoryButtons.map(({ id, name }) => `
  <button
    class="category-link${id === "all" ? " is-active" : ""}"
    type="button"
    data-category="${escapeHTML(id)}"
  >${escapeHTML(name)}</button>
`).join("");

function renderMenu() {
  const query = normalize(search.value);
  let visibleItemCount = 0;

  const visibleCategories = menu
    .filter((category) => activeCategory === "all" || category.id === activeCategory)
    .map((category) => {
      const categoryMatches = normalize(`${category.name} ${category.note}`).includes(query);
      const visibleItems = query
        ? category.items.filter((entry) => categoryMatches || normalize(entry.name).includes(query))
        : category.items;

      visibleItemCount += visibleItems.length;
      return { ...category, visibleItems, categoryMatches };
    })
    .filter((category) => {
      if (!query) return true;
      return category.categoryMatches || category.visibleItems.length > 0;
    });

  if (!visibleCategories.length) {
    root.innerHTML = '<p class="no-results">No hemos encontrado ningún plato con esa búsqueda.</p>';
    result.textContent = "0 resultados";
    return;
  }

  root.innerHTML = visibleCategories.map((category, index) => {
    const shouldOpen = Boolean(query) || activeCategory !== "all" || index === 0;
    const countLabel = category.items.length === 1
      ? "1 opción"
      : `${category.items.length} opciones`;

    const itemsMarkup = category.visibleItems.length
      ? category.visibleItems.map((entry) => `
          <article class="menu-item">
            <div class="menu-item__copy">
              <strong>
                ${entry.number ? `<span class="menu-item__number">${escapeHTML(entry.number)}.</span>` : ""}
                ${escapeHTML(entry.name)}
              </strong>
            </div>
            <span class="menu-item__price">${escapeHTML(entry.price)}</span>
          </article>
        `).join("")
      : '<p class="menu-empty">Consulta los postres caseros disponibles al realizar tu pedido.</p>';

    return `
      <details class="menu-category" id="${escapeHTML(category.id)}"${shouldOpen ? " open" : ""}>
        <summary>
          <span class="menu-category__title">
            <strong>${escapeHTML(category.name)}</strong>
            <small>${escapeHTML(category.note)}</small>
          </span>
          <span class="menu-category__count">${escapeHTML(countLabel)}</span>
          <span class="menu-category__toggle" aria-hidden="true">+</span>
        </summary>
        <div class="menu-items">${itemsMarkup}</div>
      </details>
    `;
  }).join("");

  const categoryCount = visibleCategories.length;
  const categoryWord = categoryCount === 1 ? "categoría" : "categorías";
  const itemWord = visibleItemCount === 1 ? "plato" : "platos";
  result.textContent = `${categoryCount} ${categoryWord} · ${visibleItemCount} ${itemWord}`;
}

categoryLinks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  categoryLinks.querySelectorAll(".category-link").forEach((entry) => {
    entry.classList.toggle("is-active", entry === button);
  });
  renderMenu();
});

search.addEventListener("input", renderMenu);
renderMenu();
