const modalRoot = () => document.getElementById('modal');

// fields: array of [label, htmlValue] pairs
export function openModal(title, fields) {
  const rows = fields
    .map(
      ([label, value]) =>
        `<div class="flex justify-between gap-4"><dt class="text-slate-500 dark:text-slate-400">${label}</dt><dd>${value}</dd></div>`,
    )
    .join('');

  modalRoot().innerHTML = `
    <div data-modal-backdrop class="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
      <div role="dialog" aria-modal="true" class="w-full max-w-md rounded border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-lg font-semibold">${title}</h2>
          <button data-modal-close aria-label="Cerrar" class="rounded px-2 hover:bg-slate-100 dark:hover:bg-slate-700">✕</button>
        </div>
        <dl class="space-y-2 text-sm">${rows}</dl>
      </div>
    </div>`;
}

export function closeModalOnClick(event) {
  const isCloseButton = event.target.closest('[data-modal-close]');
  const isBackdrop = event.target.matches('[data-modal-backdrop]');
  if (isCloseButton || isBackdrop) modalRoot().innerHTML = '';
}
