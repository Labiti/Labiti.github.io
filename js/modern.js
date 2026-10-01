/* ==========================================================================
   Modern Portfolio — Siphumze Labiti
   Features: theme toggle, particles, mesh, typewriter, reveal, smooth scroll
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =========================================================
     1. THEME TOGGLE (with localStorage persistence)
     ========================================================= */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  // Determine initial theme (saved > system > dark default)
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initialTheme);

  // Toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      // Re-init particles with new colors
      initParticles();
    });
  }

  // Listen to OS changes (only if user hasn't set a preference)
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      root.setAttribute('data-theme', e.matches ? 'light' : 'dark');
      initParticles();
    }
  });

  /* =========================================================
     2. PRELOADER
     ========================================================= */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) setTimeout(() => preloader.classList.add('hidden'), 300);
  });

  /* =========================================================
     3. NAVIGATION
     ========================================================= */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('open');
      navMenu?.classList.remove('open');
    });
  });

  /* =========================================================
     4. REVEAL ON SCROLL
     ========================================================= */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* =========================================================
     5. TYPEWRITER
     ========================================================= */
  const typewriterEl = document.getElementById('typewriter');
  const roles = [
    'Software Engineer',
    'Azure Developer',
    'AI Developer',
    'Agentic AI Engineer',
    'Full Stack Developer'
  ];

  if (typewriterEl && !prefersReducedMotion) {
    let roleIndex = 0, charIndex = 0, isDeleting = false, speed = 80;
    const loop = () => {
      const role = roles[roleIndex];
      typewriterEl.textContent = isDeleting
        ? role.substring(0, charIndex - 1)
        : role.substring(0, charIndex + 1);
      charIndex += isDeleting ? -1 : 1;
      speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === role.length) { speed = 1800; isDeleting = true; }
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
      }
      setTimeout(loop, speed);
    };
    loop();
  } else if (typewriterEl) {
    typewriterEl.textContent = roles[0];
  }

  /* =========================================================
     6. SMOOTH SCROLL
     ========================================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* =========================================================
     7. ACTIVE NAV LINK
     ========================================================= */
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            link.style.color = href === `#${id}` ? 'var(--text)' : '';
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
  );
  document.querySelectorAll('section[id]').forEach(s => activeObserver.observe(s));

  /* =========================================================
     8. CARD TILT
     ========================================================= */
  if (!prefersReducedMotion) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * 4;
        const rotateY = (x - 0.5) * -4;
        card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* =========================================================
     9. PARTICLE BACKGROUND
     ========================================================= */
  let particleAnimId = null;

  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    if (prefersReducedMotion) { canvas.style.display = 'none'; return; }

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    // Read theme colors from CSS variables
    const styles = getComputedStyle(document.documentElement);
    const particleColor = styles.getPropertyValue('--particle-color').trim() || 'rgba(129,140,248,0.6)';
    const lineColor = styles.getPropertyValue('--particle-line').trim() || 'rgba(129,140,248,0.08)';

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    function createParticles() {
      // Density based on screen size
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 18000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 0.6
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 2;
            p.y += (dy / dist) * force * 2;
          }
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1 - dist / 130;
            ctx.stroke();
          }
        }
      }

      particleAnimId = requestAnimationFrame(draw);
    }

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    // Mouse tracking
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Start
    if (particleAnimId) cancelAnimationFrame(particleAnimId);
    resize();
    draw();
  }

  initParticles();

  /* =========================================================
     10. CV DOWNLOAD FEEDBACK
     ========================================================= */
  const cvBtn = document.querySelector('.btn-cv');
  if (cvBtn) {
    cvBtn.addEventListener('click', (e) => {
      // Optional: check if file exists before downloading
      // If you want to log analytics or show a toast, do it here
      cvBtn.style.opacity = '0.7';
      setTimeout(() => { cvBtn.style.opacity = '1'; }, 400);
    });
  }

})();