// ===== Divine Ayu Wellness — interactions =====

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close menu when a link is tapped
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header shadow on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Scroll-reveal animation with subtle stagger
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Stagger cards within each grid
document.querySelectorAll('.cards-grid, .intro-grid, .gallery-grid').forEach((grid) => {
  [...grid.children].forEach((child, i) => {
    if (child.classList.contains('reveal')) {
      child.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;
    }
  });
});

// Contact popovers (Call / Text / WhatsApp)
const contactPops = document.querySelectorAll('.contact-pop');

function closeAllPops(except) {
  contactPops.forEach((pop) => {
    if (pop === except) return;
    pop.classList.remove('open');
    pop.querySelector('.contact-pop-trigger')?.setAttribute('aria-expanded', 'false');
  });
}

contactPops.forEach((pop) => {
  const trigger = pop.querySelector('.contact-pop-trigger');
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = pop.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(open));
    closeAllPops(pop);
  });
  // Let a menu choice close the popover
  pop.querySelectorAll('.contact-pop-menu a').forEach((a) => {
    a.addEventListener('click', () => closeAllPops());
  });
});

document.addEventListener('click', () => closeAllPops());
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllPops();
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
