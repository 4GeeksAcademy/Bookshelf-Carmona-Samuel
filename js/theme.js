export function initTheme() {
  document
    .getElementById('theme-toggle')
    .addEventListener('click', () => document.documentElement.classList.toggle('dark'));
}
