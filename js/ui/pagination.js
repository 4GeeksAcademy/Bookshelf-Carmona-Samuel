export const PAGE_SIZE = 5;

export function paginate(rows, page) {
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const start = (current - 1) * PAGE_SIZE;
  return { items: rows.slice(start, start + PAGE_SIZE), pages, current };
}

const pageButton = (number, current) =>
  `<button data-page="${number}" ${number === current ? 'aria-current="page"' : ''} class="rounded px-3 py-1 text-sm hover:bg-slate-200 dark:hover:bg-slate-700 aria-[current=page]:bg-indigo-600 aria-[current=page]:text-white">${number}</button>`;

export function pagerHtml(pages, current) {
  if (pages === 1) return '';
  const numbers = Array.from({ length: pages }, (_, index) => index + 1);
  return `<nav class="mt-4 flex justify-end gap-1">${numbers.map((n) => pageButton(n, current)).join('')}</nav>`;
}
