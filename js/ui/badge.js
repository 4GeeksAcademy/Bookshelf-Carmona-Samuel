const COLORS = {
  Disponible: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'En préstamo': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Vencido: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
};

export const badge = (status) =>
  `<span class="rounded-full px-2 py-0.5 text-xs font-medium ${COLORS[status]}">${status}</span>`;
