const searchInput = document.querySelector("#menu-search");
const filterButtons = [...document.querySelectorAll(".filter")];
const menuCards = [...document.querySelectorAll(".menu-card")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

let activeFilter = "todos";

const normalize = (value) =>
  value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const updateMenu = () => {
  const query = normalize(searchInput.value);
  let visible = 0;

  menuCards.forEach((card) => {
    const categoryMatches =
      activeFilter === "todos" || card.dataset.category === activeFilter;
    const text = normalize(`${card.dataset.search} ${card.textContent}`);
    const searchMatches = !query || text.includes(query);
    const shouldShow = categoryMatches && searchMatches;

    card.hidden = !shouldShow;
    if (shouldShow) visible += 1;
  });

  resultCount.textContent = `${visible} ${visible === 1 ? "opción encontrada" : "opciones encontradas"}`;
  emptyState.hidden = visible !== 0;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    updateMenu();
  });
});

searchInput.addEventListener("input", updateMenu);
updateMenu();
