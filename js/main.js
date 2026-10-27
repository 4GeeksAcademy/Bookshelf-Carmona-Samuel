import { initRouter } from './router.js';
import { initTheme } from './theme.js';
import { renderCatalog } from './sections/catalog.js';
import { renderLoans } from './sections/loans.js';
import { renderMembers } from './sections/members.js';
import { closeMenusOnOutsideClick } from './ui/dropdown.js';
import { closeModalOnClick } from './ui/modal.js';

document.addEventListener('click', (event) => {
  closeMenusOnOutsideClick(event);
  closeModalOnClick(event);
});

initTheme();
initRouter({ catalog: renderCatalog, loans: renderLoans, members: renderMembers });
