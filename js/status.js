// Fixed date so the sample data always shows the same overdue loans.
export const TODAY = '2026-10-27';

export const isOverdue = (loan) => loan.dueDate < TODAY;

export const activeLoans = (loans) => loans.filter((loan) => !loan.returned);

export function bookStatus(loans, bookId) {
  const loan = activeLoans(loans).find((item) => item.bookId === bookId);
  if (!loan) return 'Disponible';
  return isOverdue(loan) ? 'Vencido' : 'En préstamo';
}

export const activeLoanCount = (loans, memberId) =>
  activeLoans(loans).filter((loan) => loan.memberId === memberId).length;
