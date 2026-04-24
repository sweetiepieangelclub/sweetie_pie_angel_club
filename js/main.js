!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('open');
    document.getElementById('hamburgerBtn').classList.add('open');
  }
  function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburgerBtn').classList.remove('open');
  }

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
  document.querySelectorAll('.off-animate').forEach(el => offObserver.observe(el));

const benObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ben-visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.ben-animate').forEach(el => benObserver.observe(el));

const comObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('com-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.com-animate').forEach(el => comObserver.observe(el));

const testObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('test-visible');
      }
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