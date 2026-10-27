export function initRouter(renderers) {
  const show = () => {
    const hash = location.hash.slice(1);
    const view = hash in renderers ? hash : 'catalog';

    document.querySelectorAll('[data-view]').forEach((section) => {
      section.classList.toggle('hidden', section.dataset.view !== view);
    });
    document.querySelectorAll('[data-link]').forEach((link) => {
      if (link.dataset.link === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    renderers[view]();
  };

  window.addEventListener('hashchange', show);
  show();
}
