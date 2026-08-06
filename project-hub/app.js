'use strict';

const STORAGE_KEY = 'projectHubDataV1';
const VERSION = '0.1.0';

const seedData = {
  projects: [
    { id: 'cvitae', name: 'cvitae', description: 'Portfolio central con perfil profesional y acceso a todos los proyectos.', status: 'active', priority: 'high', version: '0.3.0', category: 'Portfolio', tech: ['HTML','CSS','JavaScript'], liveUrl: 'https://javidei.github.io/cvitae/', repoUrl: 'https://github.com/javidei/cvitae', updatedAt: '2026-08-07' },
    { id: 'sam', name: 'SAM', description: 'Catálogo de servicios, productos personalizados y panel de administración.', status: 'active', priority: 'high', version: '—', category: 'Negocio local', tech: ['HTML','CSS','Supabase'], liveUrl: 'https://javidei.github.io/Sam/', repoUrl: 'https://github.com/javidei/Sam', updatedAt: '2026-08-01' },
    { id: 'book-affinity', name: 'Book Affinity', description: 'Biblioteca personal para registrar lecturas, estados y progreso.', status: 'active', priority: 'high', version: '—', category: 'Productividad', tech: ['JavaScript','Supabase'], liveUrl: 'https://javidei.github.io/book-affinity/', repoUrl: 'https://github.com/javidei/book-affinity', updatedAt: '2026-08-05' },
    { id: 'learn', name: 'Learn English', description: 'Ruta gamificada de 90 días para aprender inglés desde cero.', status: 'active', priority: 'medium', version: '—', category: 'Educación', tech: ['HTML','CSS','JavaScript'], liveUrl: 'https://javidei.github.io/learn/', repoUrl: 'https://github.com/javidei/learn', updatedAt: '2026-08-06' },
    { id: 'recetas', name: 'Recetario de Javi', description: 'Recetas propias con notas, filtros y fichas de preparación.', status: 'active', priority: 'medium', version: '—', category: 'Herramienta personal', tech: ['HTML','CSS','JavaScript'], liveUrl: 'https://javidei.github.io/recetas/', repoUrl: 'https://github.com/javidei/recetas', updatedAt: '2026-08-06' },
    { id: 'thirty', name: 'Thirty', description: 'Proyecto social nostálgico pausado mientras se define el almacenamiento.', status: 'paused', priority: 'low', version: '—', category: 'Red social', tech: ['JavaScript','Supabase'], liveUrl: 'https://javidei.github.io/colorines/', repoUrl: 'https://github.com/javidei/colorines', updatedAt: '2026-08-01' },
    { id: 'al-salimi', name: 'Al Salimi Kebab', description: 'Carta digital responsive con especialidades, contacto y ubicación.', status: 'complete', priority: 'low', version: '—', category: 'Restauración', tech: ['HTML','CSS','JavaScript'], liveUrl: 'https://javidei.github.io/al-salimi/', repoUrl: 'https://github.com/javidei/al-salimi', updatedAt: '2026-07-31' },
    { id: 'pizza-rica', name: 'Pizza Rica', description: 'Carta interactiva, posible pedido, galería y contacto directo.', status: 'complete', priority: 'low', version: '—', category: 'Restauración', tech: ['HTML','CSS','JavaScript'], liveUrl: 'https://javidei.github.io/pizza-rica/', repoUrl: 'https://github.com/javidei/pizza-rica', updatedAt: '2026-07-31' },
    { id: 'mis-pcs', name: 'PC de casa', description: 'Comparador visual de componentes y evolución de varios equipos.', status: 'active', priority: 'medium', version: '—', category: 'Hardware', tech: ['HTML','CSS'], liveUrl: 'https://javidei.github.io/mis-pcs/', repoUrl: 'https://github.com/javidei/mis-pcs', updatedAt: '2026-07-31' },
    { id: 'entre-amigos', name: 'Entre Amigos', description: 'Espacio privado para ideas, notas y planes compartidos.', status: 'active', priority: 'medium', version: '—', category: 'Privado', tech: ['HTML','CSS','JavaScript'], liveUrl: 'https://javidei.github.io/entre-amigos/', repoUrl: 'https://github.com/javidei/entre-amigos', updatedAt: '2026-07-31' },
    { id: 'stilton', name: 'Librería Stilton', description: 'Buscador de libros con datos ampliados y contenidos en vídeo.', status: 'complete', priority: 'low', version: '—', category: 'Libros', tech: ['Google Books API','JavaScript'], liveUrl: 'https://javidei.github.io/stilton/', repoUrl: 'https://github.com/javidei/stilton', updatedAt: '2026-08-05' },
    { id: 'project-hub', name: 'Project Hub', description: 'Panel central para controlar proyectos, versiones, enlaces y tareas.', status: 'active', priority: 'high', version: VERSION, category: 'Productividad', tech: ['HTML','CSS','JavaScript','localStorage'], liveUrl: './', repoUrl: 'https://github.com/javidei/cvitae/tree/main/project-hub', updatedAt: '2026-08-07' }
  ],
  tasks: [
    { id: 'task-1', projectId: 'project-hub', title: 'Conectar el panel con Supabase', priority: 'high', dueDate: '', done: false },
    { id: 'task-2', projectId: 'sam', title: 'Revisar el CRUD y almacenamiento de imágenes', priority: 'high', dueDate: '', done: false },
    { id: 'task-3', projectId: 'book-affinity', title: 'Completar los scripts de tablas y políticas', priority: 'medium', dueDate: '', done: false },
    { id: 'task-4', projectId: 'cvitae', title: 'Mantener las tarjetas y versiones actualizadas', priority: 'medium', dueDate: '', done: true },
    { id: 'task-5', projectId: 'learn', title: 'Definir las siguientes unidades del curso', priority: 'low', dueDate: '', done: false }
  ]
};

const state = loadState();
const els = {
  sidebar: document.getElementById('sidebar'), menuToggle: document.getElementById('menuToggle'), overlay: document.getElementById('overlay'), viewTitle: document.getElementById('viewTitle'),
  statsGrid: document.getElementById('statsGrid'), priorityList: document.getElementById('priorityList'), overviewTasks: document.getElementById('overviewTasks'),
  projectGrid: document.getElementById('projectGrid'), projectEmpty: document.getElementById('projectEmpty'), projectSearch: document.getElementById('projectSearch'), statusFilter: document.getElementById('statusFilter'), sortProjects: document.getElementById('sortProjects'),
  taskSearch: document.getElementById('taskSearch'), taskProjectFilter: document.getElementById('taskProjectFilter'), taskStatusFilter: document.getElementById('taskStatusFilter'), pendingTasks: document.getElementById('pendingTasks'), doneTasks: document.getElementById('doneTasks'), pendingCount: document.getElementById('pendingCount'), doneCount: document.getElementById('doneCount'),
  projectModal: document.getElementById('projectModal'), projectForm: document.getElementById('projectForm'), projectModalTitle: document.getElementById('projectModalTitle'),
  taskModal: document.getElementById('taskModal'), taskForm: document.getElementById('taskForm'), detailsModal: document.getElementById('detailsModal'), detailsTitle: document.getElementById('detailsTitle'), detailsContent: document.getElementById('detailsContent'), toast: document.getElementById('toast')
};

const statusLabels = { active: 'Activo', paused: 'Pausado', idea: 'Idea', complete: 'Terminado' };
const priorityLabels = { high: 'Alta', medium: 'Media', low: 'Baja' };
const viewLabels = { overview: 'Resumen', projects: 'Proyectos', tasks: 'Tareas', settings: 'Ajustes' };

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.projects) && Array.isArray(saved.tasks)) return saved;
  } catch (_) {}
  return clone(seedData);
}
function saveState(message) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderAll();
  if (message) showToast(message);
}
function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`; }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function safeUrl(value) { try { const url = new URL(value, location.href); return ['http:','https:'].includes(url.protocol) ? url.href : '#'; } catch (_) { return '#'; } }
function projectById(id) { return state.projects.find(project => project.id === id); }
function formatDate(value) { if (!value) return 'Sin fecha'; const date = new Date(`${value}T00:00:00`); return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('es-ES',{day:'2-digit',month:'short',year:'numeric'}).format(date); }
function initials(name) { return name.split(/\s+/).filter(Boolean).slice(0,2).map(part => part[0]).join('').toUpperCase(); }

function renderAll() {
  renderStats(); renderPriority(); renderOverviewTasks(); renderProjects(); fillProjectSelects(); renderTasks();
}
function renderStats() {
  const stats = [
    ['Proyectos', state.projects.length, '▦', 'Registrados'],
    ['Activos', state.projects.filter(p => p.status === 'active').length, '↗', 'En evolución'],
    ['Tareas pendientes', state.tasks.filter(t => !t.done).length, '✓', 'Por completar'],
    ['Pausados', state.projects.filter(p => p.status === 'paused').length, 'Ⅱ', 'En espera']
  ];
  els.statsGrid.innerHTML = stats.map(([label,value,icon,caption]) => `<article class="stat"><div class="stat__top"><span>${label}</span><span class="stat__icon">${icon}</span></div><strong>${value}</strong><small>${caption}</small></article>`).join('');
}
function renderPriority() {
  const order = { high: 0, medium: 1, low: 2 };
  const projects = [...state.projects].filter(p => p.status === 'active').sort((a,b) => order[a.priority]-order[b.priority]).slice(0,5);
  els.priorityList.innerHTML = projects.length ? projects.map(project => {
    const pending = state.tasks.filter(task => task.projectId === project.id && !task.done).length;
    return `<button class="priority-item" type="button" data-details="${escapeHtml(project.id)}"><span class="project-monogram">${escapeHtml(initials(project.name))}</span><span><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.category || 'Sin categoría')} · ${pending} tarea${pending === 1 ? '' : 's'} pendiente${pending === 1 ? '' : 's'}</p></span><span class="status status--${project.status}">${statusLabels[project.status]}</span></button>`;
  }).join('') : '<p class="empty-copy">No hay proyectos activos.</p>';
}
function renderOverviewTasks() {
  const tasks = state.tasks.filter(task => !task.done).sort(sortTasks).slice(0,6);
  els.overviewTasks.innerHTML = tasks.length ? tasks.map(task => `<div class="mini-task"><span class="mini-task__dot"></span><span><strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(projectById(task.projectId)?.name || 'Proyecto eliminado')}</small></span></div>`).join('') : '<p class="empty-copy">No hay tareas pendientes.</p>';
}
function sortTasks(a,b) { const order = { high: 0, medium: 1, low: 2 }; return order[a.priority]-order[b.priority]; }
function filteredProjects() {
  const query = els.projectSearch.value.trim().toLowerCase();
  const status = els.statusFilter.value;
  const sort = els.sortProjects.value;
  const order = { high: 0, medium: 1, low: 2 };
  const projects = state.projects.filter(project => {
    const haystack = [project.name,project.description,project.category,...project.tech].join(' ').toLowerCase();
    return (!query || haystack.includes(query)) && (status === 'all' || project.status === status);
  });
  projects.sort((a,b) => sort === 'name' ? a.name.localeCompare(b.name,'es') : sort === 'updated' ? String(b.updatedAt).localeCompare(String(a.updatedAt)) : order[a.priority]-order[b.priority] || a.name.localeCompare(b.name,'es'));
  return projects;
}
function renderProjects() {
  const projects = filteredProjects();
  els.projectEmpty.hidden = projects.length > 0;
  els.projectGrid.innerHTML = projects.map(project => {
    const pending = state.tasks.filter(task => task.projectId === project.id && !task.done).length;
    const tech = project.tech.slice(0,4).map(item => `<span>${escapeHtml(item)}</span>`).join('');
    const live = project.liveUrl ? `<a class="primary" href="${safeUrl(project.liveUrl)}" target="_blank" rel="noopener">Abrir web</a>` : '';
    const repo = project.repoUrl ? `<a href="${safeUrl(project.repoUrl)}" target="_blank" rel="noopener">Repositorio</a>` : '';
    return `<article class="project-card">
      <div class="project-card__top"><span class="status status--${project.status}">${statusLabels[project.status]}</span><div class="project-card__menu"><button type="button" data-edit="${escapeHtml(project.id)}" title="Editar">✎</button><button type="button" data-delete-project="${escapeHtml(project.id)}" title="Eliminar">×</button></div></div>
      <h2>${escapeHtml(project.name)}</h2><p class="project-card__desc">${escapeHtml(project.description || 'Sin descripción.')}</p>
      <div class="tech-list">${tech || '<span>Sin tecnologías</span>'}</div>
      <div class="project-card__meta"><div><small>Versión</small><strong>${escapeHtml(project.version || '—')}</strong></div><div><small>Pendientes</small><strong>${pending} tarea${pending === 1 ? '' : 's'}</strong></div></div>
      <div class="project-card__actions"><button type="button" data-details="${escapeHtml(project.id)}">Detalles</button>${repo}${live}</div>
    </article>`;
  }).join('');
}
function fillProjectSelects() {
  const options = state.projects.slice().sort((a,b) => a.name.localeCompare(b.name,'es')).map(project => `<option value="${escapeHtml(project.id)}">${escapeHtml(project.name)}</option>`).join('');
  const filterValue = els.taskProjectFilter.value || 'all';
  els.taskProjectFilter.innerHTML = `<option value="all">Todos los proyectos</option>${options}`;
  els.taskProjectFilter.value = state.projects.some(project => project.id === filterValue) ? filterValue : 'all';
  document.getElementById('taskProject').innerHTML = options;
}
function filteredTasks() {
  const query = els.taskSearch.value.trim().toLowerCase();
  const project = els.taskProjectFilter.value;
  const status = els.taskStatusFilter.value;
  return state.tasks.filter(task => {
    const name = projectById(task.projectId)?.name || '';
    return (!query || `${task.title} ${name}`.toLowerCase().includes(query)) && (project === 'all' || task.projectId === project) && (status === 'all' || (status === 'done') === task.done);
  }).sort(sortTasks);
}
function renderTasks() {
  const tasks = filteredTasks();
  const pending = tasks.filter(task => !task.done);
  const done = tasks.filter(task => task.done);
  els.pendingCount.textContent = pending.length;
  els.doneCount.textContent = done.length;
  els.pendingTasks.innerHTML = renderTaskCards(pending) || '<p class="empty-copy">No hay tareas pendientes.</p>';
  els.doneTasks.innerHTML = renderTaskCards(done) || '<p class="empty-copy">No hay tareas completadas.</p>';
}
function renderTaskCards(tasks) {
  return tasks.map(task => `<article class="task-card ${task.done ? 'is-done' : ''}"><input type="checkbox" data-toggle-task="${escapeHtml(task.id)}" ${task.done ? 'checked' : ''} aria-label="Cambiar estado"><div><h3>${escapeHtml(task.title)}</h3><p><span class="priority-dot priority-dot--${task.priority}"></span>${priorityLabels[task.priority]} · ${escapeHtml(projectById(task.projectId)?.name || 'Proyecto eliminado')} · ${formatDate(task.dueDate)}</p></div><button class="delete-task" type="button" data-delete-task="${escapeHtml(task.id)}" aria-label="Eliminar tarea">×</button></article>`).join('');
}
function switchView(view) {
  document.querySelectorAll('[data-view-panel]').forEach(panel => panel.classList.toggle('is-active', panel.dataset.viewPanel === view));
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('is-active', item.dataset.view === view));
  els.viewTitle.textContent = viewLabels[view] || 'Project Hub';
  closeSidebar();
}
function openSidebar() { els.sidebar.classList.add('is-open'); els.overlay.hidden = false; }
function closeSidebar() { els.sidebar.classList.remove('is-open'); els.overlay.hidden = true; }
function openProjectModal(project = null) {
  els.projectForm.reset();
  document.getElementById('projectId').value = project?.id || '';
  els.projectModalTitle.textContent = project ? 'Editar proyecto' : 'Nuevo proyecto';
  if (project) {
    document.getElementById('projectName').value = project.name;
    document.getElementById('projectStatus').value = project.status;
    document.getElementById('projectPriority').value = project.priority;
    document.getElementById('projectVersion').value = project.version || '';
    document.getElementById('projectCategory').value = project.category || '';
    document.getElementById('projectDescription').value = project.description || '';
    document.getElementById('projectTech').value = project.tech.join(', ');
    document.getElementById('projectLiveUrl').value = project.liveUrl || '';
    document.getElementById('projectRepoUrl').value = project.repoUrl || '';
  }
  els.projectModal.showModal();
}
function submitProject(event) {
  event.preventDefault();
  const name = document.getElementById('projectName').value.trim();
  if (!name) { showToast('Escribe un nombre para el proyecto.'); return; }
  const existingId = document.getElementById('projectId').value;
  const project = {
    id: existingId || uid('project'), name,
    status: document.getElementById('projectStatus').value,
    priority: document.getElementById('projectPriority').value,
    version: document.getElementById('projectVersion').value.trim() || '—',
    category: document.getElementById('projectCategory').value.trim() || 'Sin categoría',
    description: document.getElementById('projectDescription').value.trim(),
    tech: document.getElementById('projectTech').value.split(',').map(item => item.trim()).filter(Boolean),
    liveUrl: document.getElementById('projectLiveUrl').value.trim(),
    repoUrl: document.getElementById('projectRepoUrl').value.trim(),
    updatedAt: new Date().toISOString().slice(0,10)
  };
  if (existingId) state.projects[state.projects.findIndex(item => item.id === existingId)] = project; else state.projects.push(project);
  els.projectModal.close();
  saveState(existingId ? 'Proyecto actualizado.' : 'Proyecto creado.');
}
function deleteProject(id) {
  const project = projectById(id);
  if (!project || !confirm(`¿Eliminar "${project.name}" y sus tareas?`)) return;
  state.projects = state.projects.filter(item => item.id !== id);
  state.tasks = state.tasks.filter(task => task.projectId !== id);
  saveState('Proyecto eliminado.');
}
function openTaskModal() {
  if (!state.projects.length) { showToast('Crea primero un proyecto.'); return; }
  els.taskForm.reset(); fillProjectSelects(); els.taskModal.showModal();
}
function submitTask(event) {
  event.preventDefault();
  const title = document.getElementById('taskTitle').value.trim();
  const projectId = document.getElementById('taskProject').value;
  if (!title || !projectId) { showToast('Completa el proyecto y la tarea.'); return; }
  state.tasks.push({ id: uid('task'), projectId, title, priority: document.getElementById('taskPriority').value, dueDate: document.getElementById('taskDueDate').value, done: false });
  els.taskModal.close(); saveState('Tarea creada.');
}
function toggleTask(id) { const task = state.tasks.find(item => item.id === id); if (task) { task.done = !task.done; saveState(task.done ? 'Tarea completada.' : 'Tarea reabierta.'); } }
function deleteTask(id) { if (!confirm('¿Eliminar esta tarea?')) return; state.tasks = state.tasks.filter(task => task.id !== id); saveState('Tarea eliminada.'); }
function openDetails(id) {
  const project = projectById(id); if (!project) return;
  const tasks = state.tasks.filter(task => task.projectId === id);
  els.detailsTitle.textContent = project.name;
  els.detailsContent.innerHTML = `<div class="details-grid"><div class="details-stat"><small>Estado</small><strong>${statusLabels[project.status]}</strong></div><div class="details-stat"><small>Versión</small><strong>${escapeHtml(project.version || '—')}</strong></div><div class="details-stat"><small>Prioridad</small><strong>${priorityLabels[project.priority]}</strong></div></div><p class="details-description">${escapeHtml(project.description || 'Sin descripción.')}</p><div class="tech-list">${project.tech.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div><div class="details-stat"><small>Tareas</small><strong>${tasks.filter(task => !task.done).length} pendientes · ${tasks.filter(task => task.done).length} completadas</strong></div><div class="details-links">${project.liveUrl ? `<a class="btn" href="${safeUrl(project.liveUrl)}" target="_blank" rel="noopener">Abrir web</a>` : ''}${project.repoUrl ? `<a class="btn btn--secondary" href="${safeUrl(project.repoUrl)}" target="_blank" rel="noopener">Ver repositorio</a>` : ''}<button class="btn btn--secondary" type="button" data-edit-from-details="${escapeHtml(project.id)}">Editar proyecto</button></div>`;
  els.detailsModal.showModal();
}
function exportData() {
  const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString(), version: VERSION }, null, 2)], { type: 'application/json' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `project-hub-${new Date().toISOString().slice(0,10)}.json`; link.click(); URL.revokeObjectURL(link.href); showToast('Copia exportada.');
}
function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.projects) || !Array.isArray(data.tasks)) throw new Error('Formato no válido');
      state.projects = data.projects; state.tasks = data.tasks; saveState('Datos importados correctamente.');
    } catch (_) { showToast('No se pudo importar el archivo.'); }
  };
  reader.readAsText(file);
}
function resetData() { if (!confirm('¿Restablecer todos los datos de demostración?')) return; state.projects = clone(seedData.projects); state.tasks = clone(seedData.tasks); saveState('Información restablecida.'); }
let toastTimer;
function showToast(message) { clearTimeout(toastTimer); els.toast.textContent = message; els.toast.classList.add('is-visible'); toastTimer = setTimeout(() => els.toast.classList.remove('is-visible'), 2300); }

function bindEvents() {
  document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => switchView(item.dataset.view)));
  document.querySelectorAll('[data-go-view]').forEach(item => item.addEventListener('click', () => switchView(item.dataset.goView)));
  els.menuToggle.addEventListener('click', openSidebar); els.overlay.addEventListener('click', closeSidebar);
  [document.getElementById('newProjectBtn'), document.getElementById('heroNewProjectBtn')].forEach(button => button.addEventListener('click', () => openProjectModal()));
  document.getElementById('newTaskBtn').addEventListener('click', openTaskModal);
  els.projectForm.addEventListener('submit', submitProject); els.taskForm.addEventListener('submit', submitTask);
  [els.projectSearch, els.statusFilter, els.sortProjects].forEach(input => input.addEventListener('input', renderProjects));
  [els.taskSearch, els.taskProjectFilter, els.taskStatusFilter].forEach(input => input.addEventListener('input', renderTasks));
  document.addEventListener('click', event => {
    const edit = event.target.closest('[data-edit]'); if (edit) openProjectModal(projectById(edit.dataset.edit));
    const remove = event.target.closest('[data-delete-project]'); if (remove) deleteProject(remove.dataset.deleteProject);
    const details = event.target.closest('[data-details]'); if (details) openDetails(details.dataset.details);
    const toggle = event.target.closest('[data-toggle-task]'); if (toggle) toggleTask(toggle.dataset.toggleTask);
    const deleteButton = event.target.closest('[data-delete-task]'); if (deleteButton) deleteTask(deleteButton.dataset.deleteTask);
    const editDetails = event.target.closest('[data-edit-from-details]'); if (editDetails) { els.detailsModal.close(); openProjectModal(projectById(editDetails.dataset.editFromDetails)); }
  });
  document.getElementById('closeDetailsBtn').addEventListener('click', () => els.detailsModal.close());
  [document.getElementById('exportBtn'), document.getElementById('settingsExportBtn')].forEach(button => button.addEventListener('click', exportData));
  document.getElementById('importInput').addEventListener('change', event => importData(event.target.files[0]));
  document.getElementById('resetBtn').addEventListener('click', resetData);
}

document.getElementById('year').textContent = new Date().getFullYear();
bindEvents(); renderAll();
