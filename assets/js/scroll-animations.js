/* ============================================================
   Cinematic Scroll Animations
   Vanilla JS — IntersectionObserver, rAF parallax, canvas dust.
   Self-gates: only runs when body.home-cinematic exists.
   ============================================================ */
(function () {
  'use strict';

  if (!document.body.classList.contains('home-cinematic')) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Scroll progress bar ---------- */
  function initScrollProgress() {
    var bar = document.querySelector('.scroll-progress__bar');
    if (!bar) return;
    var ticking = false;
    function update() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ---------- 2. Reveal-on-scroll ---------- */
  function initReveal() {
    var targets = document.querySelectorAll('.reveal, .stagger');
    if (!targets.length || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 3. Hero blueprint reveal trigger ---------- */
  function initHeroReveal() {
    var hero = document.querySelector('.home-cinematic .hero');
    if (!hero) return;
    window.requestAnimationFrame(function () {
      hero.classList.add('is-revealed');
    });
  }

  /* ---------- 4. Parallax layers ---------- */
  function initParallax() {
    if (prefersReduced) return;
    var layers = document.querySelectorAll('[data-parallax]');
    if (!layers.length) return;
    var ticking = false;
    function update() {
      var y = window.scrollY || document.documentElement.scrollTop;
      layers.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        el.style.transform = 'translate3d(0,' + (y * speed * -1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ---------- 5. Dust / particle canvas ---------- */
  function initDust() {
    if (prefersReduced) return;
    var canvas = document.querySelector('.dust-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var w, h;

    function resize() {
      w = canvas.clientWidth = window.innerWidth;
      h = canvas.clientHeight = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles.length = 0;
      var count = Math.min(90, Math.floor((w * h) / 22000));
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.4 + Math.random() * 1.6,
          vx: (Math.random() - 0.5) * 0.12,
          vy: -0.05 - Math.random() * 0.22,
          a: 0.15 + Math.random() * 0.45
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 200, 130,' + p.a + ')';
        ctx.fill();
      }
      window.requestAnimationFrame(tick);
    }

    resize();
    seed();
    tick();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { resize(); seed(); }, 150);
    }, { passive: true });
  }

  /* ---------- 6. Hard hat physics drop (scroll-triggered) ---------- */
  function initHardHat() {
    var hat = document.querySelector('.hardhat-drop');
    var title = document.querySelector('.home-cinematic .hero__title');
    var hero = document.querySelector('.home-cinematic .hero');
    var impact = document.querySelector('.hardhat-impact');
    if (!hat || !title || !hero) return;

    var hasDropped = false;
    var restRot = -6;

    function computeTarget() {
      var titleRect = title.getBoundingClientRect();
      var heroRect = hero.getBoundingClientRect();
      var hatH = hat.offsetHeight || 184;
      // Center hat horizontally over the title; brim sits on top of title
      var targetX = (titleRect.left - heroRect.left) + titleRect.width / 2;
      var targetY = (titleRect.top - heroRect.top) - hatH * 0.72;
      if (targetY < 10) targetY = 10;
      return { x: targetX, y: targetY, hatH: hatH };
    }

    function placeImpact(target) {
      if (!impact) return;
      impact.style.left = target.x + 'px';
      impact.style.top = (target.y + target.hatH * 0.82) + 'px';
    }

    // Spawn dust particles on impact
    function spawnDust(target) {
      var count = 10;
      for (var i = 0; i < count; i++) {
        var p = document.createElement('div');
        p.className = 'hardhat-dust';
        var angle = (Math.PI / count) * i + Math.PI; // spread upward arc
        var dist = 40 + Math.random() * 60;
        var dx = Math.cos(angle) * dist;
        var dy = Math.sin(angle) * dist - 20;
        p.style.left = target.x + 'px';
        p.style.top = (target.y + target.hatH * 0.8) + 'px';
        p.style.setProperty('--dx', dx.toFixed(0) + 'px');
        p.style.setProperty('--dy', dy.toFixed(0) + 'px');
        p.style.setProperty('--dust-dur', (400 + Math.random() * 400).toFixed(0) + 'ms');
        p.style.width = (3 + Math.random() * 5) + 'px';
        p.style.height = p.style.width;
        p.style.background = Math.random() > 0.5
          ? 'rgba(245,158,11,' + (0.5 + Math.random() * 0.4).toFixed(2) + ')'
          : 'rgba(253,224,71,' + (0.4 + Math.random() * 0.3).toFixed(2) + ')';
        hero.appendChild(p);
        // Trigger animation next frame
        requestAnimationFrame(function(el) {
          return function() { el.classList.add('is-burst'); };
        }(p));
        // Cleanup
        setTimeout(function(el) {
          return function() { if (el.parentNode) el.parentNode.removeChild(el); };
        }(p), 1000);
      }
    }

    if (prefersReduced) {
      var t0 = computeTarget();
      hat.style.left = t0.x + 'px';
      hat.style.top = t0.y + 'px';
      hat.style.transform = 'translate(-50%, 0) rotate(' + restRot + 'deg)';
      hat.style.setProperty('--hat-rest-rot', restRot + 'deg');
      hat.classList.add('is-ready');
      placeImpact(t0);
      hasDropped = true;
      return;
    }

    function run() {
      if (hasDropped) return;
      hasDropped = true;

      var target = computeTarget();
      placeImpact(target);

      hat.style.left = target.x + 'px';
      hat.style.top = target.y + 'px';

      var startDelta = -(target.y + window.innerHeight * 0.6 + 200);
      var delta = startDelta;
      var vy = 0;
      var rot = -22;
      var vRot = 110;
      var g = 3600;             // px / s^2
      var restitution = 0.38;
      var rotDamping = 0.5;
      var bounces = 0;
      var settled = false;
      var last = null;

      hat.style.transform = 'translate(-50%, ' + delta + 'px) rotate(' + rot + 'deg)';
      hat.classList.add('is-ready');

      function triggerImpact(isBig) {
        if (!impact) return;
        impact.classList.remove('is-flash');
        void impact.offsetWidth;
        impact.classList.add('is-flash');
        setTimeout(function () { impact.classList.remove('is-flash'); }, 550);
        if (isBig) spawnDust(target);
      }

      function frame(ts) {
        if (last === null) last = ts;
        var dt = Math.min((ts - last) / 1000, 0.032);
        last = ts;

        vy += g * dt;
        delta += vy * dt;
        rot += vRot * dt;

        if (delta >= 0) {
          delta = 0;
          if (Math.abs(vy) < 120 || bounces >= 3) {
            vy = 0;
            settled = true;
          } else {
            vy = -vy * restitution;
            vRot = -vRot * rotDamping;
            bounces++;
            if (bounces === 1) {
              title.classList.add('is-thud');
              setTimeout(function () { title.classList.remove('is-thud'); }, 700);
              triggerImpact(true);
            } else {
              triggerImpact(false);
            }
          }
        }

        hat.style.transform = 'translate(-50%, ' + delta.toFixed(2) + 'px) rotate(' + rot.toFixed(2) + 'deg)';

        if (!settled) {
          window.requestAnimationFrame(frame);
        } else {
          hat.style.transition = 'transform 420ms cubic-bezier(.2,.9,.25,1)';
          hat.style.transform = 'translate(-50%, 0) rotate(' + restRot + 'deg)';
          hat.style.setProperty('--hat-rest-rot', restRot + 'deg');
          // Start gentle idle float after settle
          setTimeout(function () {
            hat.style.transition = '';
            hat.classList.add('is-settled');
          }, 500);
        }
      }

      window.requestAnimationFrame(frame);
    }

    // Drop after a short delay (defer guarantees DOM is ready)
    setTimeout(run, 600);

    // Reposition on resize (after settle)
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var t = computeTarget();
        placeImpact(t);
        hat.style.left = t.x + 'px';
        hat.style.top = t.y + 'px';
      }, 120);
    }, { passive: true });
  }

  /* ---------- 7. Scene triggers (tape, cone, harness, ledge, stats, stack) ---------- */
  function initSceneTriggers() {
    if (!('IntersectionObserver' in window)) return;

    var sceneMap = [
      { selector: '.safety-scene',   className: 'is-live'     },
      { selector: '.stats-section',  className: 'is-dropped'  },
      { selector: '.harness-scene',  className: 'is-snapped'  },
      { selector: '.ledge-scene',    className: 'is-rescued'  }
    ];

    sceneMap.forEach(function (entry) {
      document.querySelectorAll(entry.selector).forEach(function (el) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add(entry.className);
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.35 });
        io.observe(el);
      });
    });

    // Post cards: stagger a "stack" with slight per-card rotation
    var posts = document.querySelectorAll('.home-cinematic .post-card');
    posts.forEach(function (card, i) {
      card.style.setProperty('--stack-i', i);
      var rest = ((i % 2 === 0) ? -1 : 1) * (0.6 + Math.random() * 1.2);
      card.style.setProperty('--stack-rot', (rest * 3) + 'deg');
      card.style.setProperty('--stack-rest', rest.toFixed(2) + 'deg');
    });
    if (posts.length) {
      var postGrid = document.querySelector('.home-cinematic .post-grid');
      var pio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            posts.forEach(function (c) { c.classList.add('is-stacked'); });
            pio.disconnect();
          }
        });
      }, { threshold: 0.18 });
      if (postGrid) pio.observe(postGrid);
    }
  }

  /* ---------- Init ---------- */
  function init() {
    initScrollProgress();
    initReveal();
    initHeroReveal();
    initParallax();
    initDust();
    initHardHat();
    initSceneTriggers();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
