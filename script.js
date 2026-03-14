/* ===========================
   PARTICLE SYSTEM
   =========================== */
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
      this.ctx.fill();

      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }

      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.x += dx * force * 0.02;
        p.y += dy * force * 0.02;
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

/* ===========================
   SCROLL ANIMATIONS
   =========================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}

/* ===========================
   NAVBAR
   =========================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ===========================
   MOBILE MENU
   =========================== */
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

/* ===========================
   SMOOTH SCROLL
   =========================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
}

/* ===========================
   CONTACT FORM (EmailJS)
   =========================== */
// Initialize EmailJS
try {
  emailjs.init("jAlwthIYGnaClOnlH");
} catch (error) {
  console.warn("EmailJS could not be initialized. Ensure the SDK is loaded.");
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');
  const submitBtn = document.querySelector('.form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) return;

    // Get translations for current language
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'en';
    const t = translations[lang];

    // Loading State
    submitBtn.textContent = t.contactBtnSending || 'Sending...';
    submitBtn.disabled = true;
    toast.classList.remove('show', 'error');

    console.log("Contact form submitted:", {
      name: name,
      email: email,
      message: message
    });
    console.log("Sending email via EmailJS...");

    // Send email via EmailJS
    emailjs.send("service_nd89ssm", "template_fjfpxsy", {
      name: name,
      email: email,
      message: message
    }).then(function(response) {
      console.log("Email successfully sent via EmailJS");
      console.log("Response:", response);

      // Success Feedback
      toast.textContent = t.contactToastSuccess || "✓ Message sent successfully!";
      toast.classList.add('show');
      form.reset();

      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }).catch(function(error) {
      console.error("Email sending failed");
      console.error("Error details:", error);
      
      // Error Feedback
      toast.textContent = t.contactToastError || "✕ Something went wrong. Please try again.";
      toast.classList.add('error');
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
      }, 4000);
    }).finally(function() {
      // Restore Button State
      submitBtn.textContent = t.contactBtn || 'Send Message';
      submitBtn.disabled = false;
    });
  });
}

/* ===========================
   DOWNLOAD CV
   =========================== */
function initDownloadCV() {
  const btn = document.getElementById('cv-download-btn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = localStorage.getItem('portfolio-lang') || 'en';
    const fileName = lang === 'es' ? 'CV-Español.pdf' : 'CV-English.pdf';
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = `./assets/${fileName}`;
    link.download = fileName; // Provide default download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/* ===========================
   INTERNATIONALIZATION (i18n)
   =========================== */
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n text elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update all data-i18n-html elements (HTML content like spans inside)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // Update label
  const label = document.getElementById('lang-label');
  if (label) {
    label.textContent = lang.toUpperCase();
  }

  // Persist
  localStorage.setItem('portfolio-lang', lang);

  // Add transition class for smooth text change
  document.body.classList.add('lang-transitioning');
  setTimeout(() => {
    document.body.classList.remove('lang-transitioning');
  }, 400);
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang);
}

function initI18n() {
  const savedLang = localStorage.getItem('portfolio-lang') || 'en';
  setLanguage(savedLang);
}

/* ===========================
   INITIALIZATION
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  // Particle system
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    new ParticleSystem(canvas);
  }

  // Init all modules
  initScrollAnimations();
  initNavbar();
  initSmoothScroll();
  initContactForm();
  initDownloadCV();
  initI18n();
});
