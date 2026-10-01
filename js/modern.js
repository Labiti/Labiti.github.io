/* ==========================================================================
   Modern Portfolio — Siphumze Labiti
   Includes: theme, particles, counters, filters, carousel, radar, typewriter
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ 1. THEME TOGGLE ============ */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      initParticles();
      updateRadarTheme();
    });
  }

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      root.setAttribute('data-theme', e.matches ? 'light' : 'dark');
      initParticles();
      updateRadarTheme();
    }
  });

  /* ============ 2. PRELOADER ============ */
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) setTimeout(() => preloader.classList.add('hidden'), 300);
  });

  /* ============ 3. NAVIGATION ============ */
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

  /* ============ 4. REVEAL ON SCROLL ============ */
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

  /* ============ 5. TYPEWRITER ============ */
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

  /* ============ 6. ANIMATED STAT COUNTERS ============ */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

  /* ============ 7. SMOOTH SCROLL ============ */
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

  /* ============ 8. ACTIVE NAV LINK ============ */
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

  /* ============ 9. CARD TILT ============ */
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

  /* ============ 10. PARTICLE BACKGROUND ============ */
  let particleAnimId = null;
  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    if (prefersReducedMotion) { canvas.style.display = 'none'; return; }

    const ctx = canvas.getContext('2d');
    let particles = [];
    const mouse = { x: null, y: null, radius: 140 };

    const styles = getComputedStyle(document.documentElement);
    const particleColor = styles.getPropertyValue('--particle-color').trim() || 'rgba(129,140,248,0.6)';
    const lineColor = styles.getPropertyValue('--particle-line').trim() || 'rgba(129,140,248,0.08)';

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }
    function createParticles() {
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
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        if (mouse.x !== null) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 2;
            p.y += (dy / dist) * force * 2;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });
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
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
    if (particleAnimId) cancelAnimationFrame(particleAnimId);
    resize();
    draw();
  }
  initParticles();

  /* ============ 11. CV DOWNLOAD FEEDBACK ============ */
  const cvBtn = document.querySelector('.btn-cv');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      cvBtn.style.opacity = '0.7';
      setTimeout(() => { cvBtn.style.opacity = '1'; }, 400);
    });
  }

  /* ============ 12. PROJECTS FILTER TABS ============ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const filterEmpty = document.getElementById('filterEmpty');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));

      let visibleCount = 0;
      projectCards.forEach(card => {
        const cats = (card.getAttribute('data-categories') || '').split(/\s+/);
        const show = filter === 'all' || cats.includes(filter);

        if (show) {
          visibleCount++;
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.98)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = '';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.98)';
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          setTimeout(() => {
            if (card.getAttribute('data-hidden') !== 'false') {
              card.style.display = 'none';
            }
          }, 300);
        }
      });

      // Show/hide empty state
      if (filterEmpty) {
        setTimeout(() => {
          filterEmpty.hidden = visibleCount > 0;
        }, 320);
      }
    });
  });

  /* ============ 13. TESTIMONIAL CAROUSEL ============ */
  (function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');
    const carousel = document.getElementById('testimonialCarousel');
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    const slides = Array.from(track.querySelectorAll('.carousel-slide'));
    let currentIndex = 0;
    let autoTimer = null;
    const AUTO_INTERVAL = 6000;

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
    const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

    function update() {
      // Slide track
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      // Update dots
      dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
      // Update slide aria
      slides.forEach((s, i) => s.setAttribute('aria-hidden', i === currentIndex ? 'false' : 'true'));
    }

    function goTo(index) {
      currentIndex = (index + slides.length) % slides.length;
      update();
      restartAuto();
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    function startAuto() {
      if (prefersReducedMotion) return;
      autoTimer = setInterval(next, AUTO_INTERVAL);
    }
    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }
    function restartAuto() { stopAuto(); startAuto(); }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // Pause on hover
    carousel?.addEventListener('mouseenter', stopAuto);
    carousel?.addEventListener('mouseleave', startAuto);

    // Pause when tab hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAuto();
      else startAuto();
    });

    // Keyboard
    carousel?.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    });
    carousel?.setAttribute('tabindex', '0');

    // Touch swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) dx > 0 ? prev() : next();
    });

    update();
    startAuto();
  })();

  /* ============ 14. SKILLS RADAR CHART ============ */
  let radarChart = null;

  function getRadarColors() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    return {
      text: isLight ? '#52525b' : '#a1a1aa',
      grid: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
      angleLine: isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)',
      fill: isLight ? 'rgba(99,102,241,0.2)' : 'rgba(129,140,248,0.25)',
      stroke: isLight ? '#4f46e5' : '#818cf8',
      point: isLight ? '#4f46e5' : '#818cf8'
    };
  }

  function initRadar() {
    const canvas = document.getElementById('skillsRadar');
    if (!canvas || typeof Chart === 'undefined') return;

    const c = getRadarColors();

    radarChart = new Chart(canvas, {
      type: 'radar',
      data: {
        labels: [
          'Backend',
          'Frontend',
          'Cloud & DevOps',
          'AI & ML',
          'Databases',
          'Testing',
          'Architecture',
          'Messaging'
        ],
        datasets: [{
          label: 'Proficiency',
          data: [92, 85, 88, 82, 85, 90, 87, 88],
          fill: true,
          backgroundColor: c.fill,
          borderColor: c.stroke,
          borderWidth: 2,
          pointBackgroundColor: c.point,
          pointBorderColor: c.point,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: c.stroke,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          duration: prefersReducedMotion ? 0 : 1400,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(20,20,30,0.95)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: c.stroke,
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (ctx) => `${ctx.parsed.r}%`
            }
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              color: c.text,
              backdropColor: 'transparent',
              font: { size: 10 },
              showLabelBackdrop: false
            },
            grid: { color: c.grid },
            angleLines: { color: c.angleLine },
            pointLabels: {
              color: c.text,
              font: {
                size: 11,
                weight: '500',
                family: 'Inter, sans-serif'
              }
            }
          }
        }
      }
    });
  }

  function updateRadarTheme() {
    if (!radarChart) return;
    const c = getRadarColors();
    radarChart.data.datasets[0].backgroundColor = c.fill;
    radarChart.data.datasets[0].borderColor = c.stroke;
    radarChart.data.datasets[0].pointBackgroundColor = c.point;
    radarChart.data.datasets[0].pointBorderColor = c.point;
    radarChart.options.scales.r.ticks.color = c.text;
    radarChart.options.scales.r.grid.color = c.grid;
    radarChart.options.scales.r.angleLines.color = c.angleLine;
    radarChart.options.scales.r.pointLabels.color = c.text;
    radarChart.update('none');
  }

  // Wait for Chart.js to be available (loaded with defer)
  window.addEventListener('load', () => {
    // Small delay to ensure Chart.js parsed
    setTimeout(() => {
      initRadar();
      // Only animate when section is visible
      const radarPanel = document.querySelector('.radar-panel');
      if (radarPanel && radarChart) {
        radarChart.options.animation.duration = 0;
        radarChart.update('none');
        const rObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              radarChart.options.animation.duration = prefersReducedMotion ? 0 : 1400;
              radarChart.update();
              rObserver.disconnect();
            }
          });
        }, { threshold: 0.3 });
        rObserver.observe(radarPanel);
      }
    }, 100);
  });

  // Re-init radar on language change (labels stay English)
  window.addEventListener('languagechange', () => {
    // Radar labels are technical — keep English; no re-init needed
  });

})();