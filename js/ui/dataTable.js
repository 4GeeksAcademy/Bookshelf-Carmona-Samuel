import { actionMenu, toggleMenu } from './dropdown.js';
import { paginate, pagerHtml } from './pagination.js';

const CELL = 'px-4 py-3';
const SEARCH_CLASS =
  'mb-4 w-full max-w-sm rounded border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-800';

const headHtml = (columns) =>
  `<tr>${columns.map((c) => `<th class="${CELL} text-left font-semibold">${c.label}</th>`).join('')}<th class="${CELL}"></th></tr>`;

const rowHtml = (row, columns, actions) => `
  <tr data-id="${row.id}" class="border-t border-slate-200 dark:border-slate-700">
    ${columns.map((c) => `<td class="${CELL}">${c.value(row)}</td>`).join('')}
    <td class="${CELL} text-right">${actionMenu(actions)}</td>
  </tr>`;

const emptyHtml = (colspan) =>
  `<tr><td colspan="${colspan}" class="${CELL} text-center text-slate-500">Sin resultados</td></tr>`;

// columns: [{ label, value(row) -> html }], actions: [{ label, run(row) }], searchKeys: row fields to filter by
export function createTable(container, { columns, actions, searchKeys }) {
  const state = { rows: [], query: '', page: 1 };

  container.innerHTML = `<input data-search type="search" placeholder="Buscar..." class="${SEARCH_CLASS}"><div data-body></div>`;
  const body = container.querySelector('[data-body]');

  const matchesQuery = (row) =>
    searchKeys.some((key) => String(row[key]).toLowerCase().includes(state.query.toLowerCase()));

  function draw() {
    const { items, pages, current } = paginate(state.rows.filter(matchesQuery), state.page);
    state.page = current;
    const rows = items.map((row) => rowHtml(row, columns, actions)).join('') || emptyHtml(columns.length + 1);
    body.innerHTML = `
      <table class="w-full border border-slate-200 bg-white text-sm dark:border-slate-700 dark:bg-slate-800">
        <thead class="bg-slate-100 dark:bg-slate-700">${headHtml(columns)}</thead>
        <tbody>${rows}</tbody>
      </table>${pagerHtml(pages, current)}`;
  }

  function runAction(actionButton) {
    const rowId = actionButton.closest('tr').dataset.id;
    const row = state.rows.find((item) => String(item.id) === rowId);
    actions[actionButton.dataset.action].run(row);
  }

  container.addEventListener('input', (event) => {
    state.query = event.target.value;
    state.page = 1;
    draw();
  });

  container.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-menu-toggle]');
    const action = event.target.closest('[data-action]');
    const pageButton = event.target.closest('[data-page]');
    if (toggle) toggleMenu(toggle);
    if (action) runAction(action);
    if (pageButton) {
      state.page = Number(pageButton.dataset.page);
      draw();
    }
  });

  return {
    setRows(rows) {
      state.rows = rows;
      draw();
    },
  };
}
