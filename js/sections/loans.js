import { getBooks, getLoans, getMembers, returnLoan } from '../api.js';
import { activeLoans, isOverdue } from '../status.js';
import { badge } from '../ui/badge.js';
import { createTable } from '../ui/dataTable.js';
import { openModal } from '../ui/modal.js';

const findById = (list, id) => list.find((item) => item.id === id);

const dueDateHtml = (loan) => (loan.overdue ? `${loan.dueDate} ${badge('Vencido')}` : loan.dueDate);

const showDetail = (loan) =>
  openModal('Detalle del préstamo', [
    ['Prestatario', loan.borrower],
    ['Libro', loan.bookTitle],
    ['Fecha de préstamo', loan.loanDate],
    ['Fecha de devolución', dueDateHtml(loan)],
  ]);

async function markReturned(loan) {
  await returnLoan(loan.id);
  renderLoans();
}

const table = createTable(document.getElementById('loans-table'), {
  columns: [
    { label: 'Prestatario', value: (loan) => loan.borrower },
    { label: 'Libro', value: (loan) => loan.bookTitle },
    { label: 'Fecha de préstamo', value: (loan) => loan.loanDate },
    { label: 'Fecha de devolución', value: dueDateHtml },
  ],
  actions: [
    { label: 'Ver detalle', run: showDetail },
    { label: 'Marcar como devuelto', run: markReturned },
  ],
  searchKeys: ['borrower', 'bookTitle'],
});

export async function renderLoans() {
  const [books, loans, members] = await Promise.all([getBooks(), getLoans(), getMembers()]);
  table.setRows(
    activeLoans(loans).map((loan) => ({
      ...loan,
      borrower: findById(members, loan.memberId).name,
      bookTitle: findById(books, loan.bookId).title,
      overdue: isOverdue(loan),
    })),
  );
}
