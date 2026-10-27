import { getBooks, getLoans } from '../api.js';
import { bookStatus } from '../status.js';
import { badge } from '../ui/badge.js';
import { createTable } from '../ui/dataTable.js';
import { openModal } from '../ui/modal.js';

const showDetail = (book) =>
  openModal(book.title, [
    ['Autor', book.author],
    ['Género', book.genre],
    ['Año', book.year],
    ['Estado', badge(book.status)],
  ]);

const table = createTable(document.getElementById('catalog-table'), {
  columns: [
    { label: 'Título', value: (book) => book.title },
    { label: 'Autor', value: (book) => book.author },
    { label: 'Género', value: (book) => book.genre },
    { label: 'Estado', value: (book) => badge(book.status) },
  ],
  actions: [
    { label: 'Ver detalle', run: showDetail },
    { label: 'Eliminar', run: () => {} },
  ],
  searchKeys: ['title', 'author', 'genre', 'status'],
});

export async function renderCatalog() {
  const [books, loans] = await Promise.all([getBooks(), getLoans()]);
  table.setRows(books.map((book) => ({ ...book, status: bookStatus(loans, book.id) })));
}
