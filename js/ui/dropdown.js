const ITEM_CLASS = 'block w-full px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-700';

export function actionMenu(actions) {
  const items = actions
    .map((action, index) => `<button data-action="${index}" class="${ITEM_CLASS}">${action.label}</button>`)
    .join('');

  return `
    <div class="relative inline-block">
      <button data-menu-toggle aria-label="Acciones" class="rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700">⋮</button>
      <div data-menu class="absolute right-0 z-10 mt-1 hidden w-44 rounded border border-slate-200 bg-white text-left dark:border-slate-700 dark:bg-slate-800">${items}</div>
    </div>`;
}

const closeAllMenus = () =>
  document.querySelectorAll('[data-menu]').forEach((menu) => menu.classList.add('hidden'));

export function toggleMenu(toggleButton) {
  const menu = toggleButton.nextElementSibling;
  const wasHidden = menu.classList.contains('hidden');
  closeAllMenus();
  menu.classList.toggle('hidden', !wasHidden);
}

export function closeMenusOnOutsideClick(event) {
  if (!event.target.closest('[data-menu-toggle]')) closeAllMenus();
}
