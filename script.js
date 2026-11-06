// Aasta jaluses
document.getElementById('year').textContent = new Date().getFullYear();

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

// Sujuv ilmumine kerimisel
const els = document.querySelectorAll('.section-head, .cards > *, .tiers > *, .steps > *, .contact > *');
els.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
els.forEach(el => io.observe(el));
