import { getLoans, getMembers } from '../api.js';
import { activeLoanCount } from '../status.js';
import { createTable } from '../ui/dataTable.js';
import { openModal } from '../ui/modal.js';

const showDetail = (member) =>
  openModal(member.name, [
    ['Correo electrónico', member.email],
    ['Socio desde', member.joinedAt],
    ['Préstamos activos', member.activeLoans],
  ]);

const table = createTable(document.getElementById('members-table'), {
  columns: [
    { label: 'Nombre', value: (member) => member.name },
    { label: 'Correo electrónico', value: (member) => member.email },
    { label: 'Préstamos activos', value: (member) => member.activeLoans },
  ],
  actions: [{ label: 'Ver detalle', run: showDetail }],
  searchKeys: ['name', 'email'],
});

export async function renderMembers() {
  const [members, loans] = await Promise.all([getMembers(), getLoans()]);
  table.setRows(members.map((member) => ({ ...member, activeLoans: activeLoanCount(loans, member.id) })));
}
