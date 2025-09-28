// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Set active nav by page filename
(function(){
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('#site-nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if (!href) return;
    const file = href.split('/').pop().toLowerCase();
    if (file === current) a.classList.add('active');
  });
})();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
function closeNav(){ nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
function openNav(){ nav.classList.add('open'); toggle.setAttribute('aria-expanded','true'); }

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  expanded ? closeNav() : openNav();
});

document.addEventListener('click', e => {
  if (!nav.classList.contains('open')) return;
  const within = nav.contains(e.target) || toggle.contains(e.target);
  if (!within) closeNav();
});