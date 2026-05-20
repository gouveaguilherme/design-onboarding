/* =============================================================
   OVERLABS — Guia de Integração
   main.js
   ============================================================= */

/* -------------------------------------------------------------
   Theme Toggle
   ------------------------------------------------------------- */
function toggleTheme() {
  const html    = document.documentElement;
  const isDark  = html.getAttribute('data-theme') === 'dark';
  const next    = isDark ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  document.getElementById('toggle-label').textContent = isDark ? 'Dark' : 'Light';
}

/* -------------------------------------------------------------
   Scroll Fade-in (Intersection Observer)
   ------------------------------------------------------------- */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => fadeObserver.observe(el));
