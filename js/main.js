!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('open');
    document.getElementById('hamburgerBtn').classList.add('open');
  }
  function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburgerBtn').classList.remove('open');
  }

// ── SCROLL PROGRESS BAR ──────────────────────────────────────────────────────
const scrollProgressBar = document.getElementById('scroll-progress');
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressBar.style.width = pct + '%';
}

// ── PARALLAX BLOBS ────────────────────────────────────────────────────────────
const blobEls = Array.from(document.querySelectorAll('[class*="-blob-"]'));
const parallaxFactors = [0.06, 0.1, 0.08, 0.12, 0.05, 0.09, 0.07];
blobEls.forEach(blob => {
  const computed = window.getComputedStyle(blob).transform;
  blob.dataset.baseTransform = (computed === 'none') ? '' : computed;
});
function updateParallax() {
  const scrollY = window.scrollY;
  blobEls.forEach((blob, i) => {
    const factor = parallaxFactors[i % parallaxFactors.length];
    const offset = scrollY * factor;
    const base = blob.dataset.baseTransform;
    blob.style.transform = base ? `${base} translateY(${offset}px)` : `translateY(${offset}px)`;
  });
}

// ── UNIFIED SCROLL HANDLER ────────────────────────────────────────────────────
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollProgress();
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
updateScrollProgress();

// ── STAGGERED CARD ENTRANCE ───────────────────────────────────────────────────
function staggerCards(sectionSelector, cardSelector, visibleClass) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;
  const cards = section.querySelectorAll(cardSelector);
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add(visibleClass), i * 200);
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.1 });
  obs.observe(section);
}
staggerCards('.offerings-section', '.offer-card', 'off-visible');
staggerCards('.benefits-section', '.ben-card', 'ben-visible');

// ── EXISTING OBSERVERS (non-card elements) ────────────────────────────────────
const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('intro-statement-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.intro-statement-animate').forEach(el => introObserver.observe(el));

const labelEl = document.getElementById('collabLabel');
  const labelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) labelEl.classList.add('collab-visible');
    });
  }, { threshold: 0.2 });
  labelObserver.observe(labelEl);

const offObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('off-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.off-animate:not(.offer-card)').forEach(el => offObserver.observe(el));

const benObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('ben-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.ben-animate:not(.ben-card)').forEach(el => benObserver.observe(el));

const comObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('com-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.com-animate').forEach(el => comObserver.observe(el));

const testObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('test-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.test-animate').forEach(el => testObserver.observe(el));

document.querySelectorAll('.intro-animate').forEach(el => {
    el.classList.add('intro-visible');
  });

const evObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('events-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.events-animate').forEach(el => evObserver.observe(el));

function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }
  const faqObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('faq-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.faq-animate').forEach(el => faqObserver.observe(el));

const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('cta-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.cta-animate').forEach(el => ctaObserver.observe(el));

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('footer-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.footer-animate').forEach(el => footerObserver.observe(el));

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(contactForm)).toString()
      }).then(() => {
        contactForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      }).catch(() => {
        contactForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
      });
    });
  }
