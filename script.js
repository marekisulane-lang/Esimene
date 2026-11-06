// Aasta jaluses
document.getElementById('year').textContent = new Date().getFullYear();

// Hele/tume teema (meelde jäetakse brauseris)
const root = document.documentElement;
const getStored = () => { try { return localStorage.getItem('theme'); } catch { return null; } };
const setStored = (v) => { try { localStorage.setItem('theme', v); } catch {} };

const initial = getStored() ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.dataset.theme = initial;

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  setStored(next);
});

// Mobiilimenüü
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Sektsioonide sujuv ilmumine kerimisel
const els = document.querySelectorAll('.section .container > *');
els.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
els.forEach(el => io.observe(el));
