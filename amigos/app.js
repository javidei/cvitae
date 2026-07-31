const AUTH_KEY = "amigos-session-v1";
const PASSWORD_DIGEST = "235141cc8b362397c6e349788ddb681d32076ca2ee0b3c70d41f0d95619a33aa";
const PASSWORD_SALT = "entre-amigos-v1:";

async function digest(value) {
  const bytes = new TextEncoder().encode(PASSWORD_SALT + value);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, "0")).join("");
}

function unlock() {
  document.querySelector(".lock").hidden = true;
  document.body.classList.remove("is-locked");
}

function setupAccess() {
  const lock = document.querySelector(".lock");
  const form = document.querySelector("#access-form");
  const input = document.querySelector("#access-code");
  const error = document.querySelector("#access-error");

  if (sessionStorage.getItem(AUTH_KEY) === "ok") {
    unlock();
  } else {
    document.body.classList.add("is-locked");
    setTimeout(() => input.focus(), 50);
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const candidate = await digest(input.value.trim());
    if (candidate === PASSWORD_DIGEST) {
      sessionStorage.setItem(AUTH_KEY, "ok");
      error.textContent = "";
      form.reset();
      unlock();
      return;
    }
    error.textContent = "Ese código no es correcto.";
    input.select();
  });

  document.querySelector(".logout").addEventListener("click", () => {
    sessionStorage.removeItem(AUTH_KEY);
    location.reload();
  });
}

const escapeHtml = value => value.replace(/[&<>'"]/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
}[char]));

function setupCollection(config) {
  const form = document.querySelector(config.form);
  const container = document.querySelector(config.container);
  if (!form || !container) return;

  const read = () => JSON.parse(localStorage.getItem(config.key) || "[]");
  const save = items => localStorage.setItem(config.key, JSON.stringify(items));

  function render() {
    const items = read();
    if (!items.length) {
      container.innerHTML = `<div class="empty">${config.empty}</div>`;
      return;
    }
    container.innerHTML = items.map(item => config.template(item)).join("");
    container.querySelectorAll("[data-delete]").forEach(button => {
      button.addEventListener("click", () => {
        save(read().filter(item => item.id !== button.dataset.delete));
        render();
      });
    });
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const item = config.create(data);
    save([item, ...read()]);
    form.reset();
    render();
  });
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  setupAccess();
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  setupCollection({
    form: "#note-form",
    container: "#notes-list",
    key: "amigos-notes-v1",
    empty: "Todavía no hay notas. Escribe la primera.",
    create: data => ({ id: crypto.randomUUID(), title: data.get("title").trim(), text: data.get("text").trim(), date: new Date().toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" }) }),
    template: item => `<article class="note-card"><button class="delete" data-delete="${item.id}" aria-label="Eliminar nota">×</button><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><span class="card-date">${escapeHtml(item.date)}</span></article>`
  });

  setupCollection({
    form: "#plan-form",
    container: "#plans-list",
    key: "amigos-plans-v1",
    empty: "No hay planes guardados todavía. ¿Cuál será el primero?",
    create: data => ({ id: crypto.randomUUID(), title: data.get("title").trim(), date: data.get("date"), place: data.get("place").trim(), text: data.get("text").trim() }),
    template: item => `<article class="plan-card"><button class="delete" data-delete="${item.id}" aria-label="Eliminar plan">×</button><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text || "Plan pendiente de concretar.")}</p><div class="plan-meta"><span class="tag">📅 ${escapeHtml(item.date || "Sin fecha")}</span><span class="tag">📍 ${escapeHtml(item.place || "Sin lugar")}</span></div></article>`
  });
});
