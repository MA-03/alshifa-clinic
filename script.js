/**
 * AL-Shifa Clinic — script.js
 * All interactivity: entry screen, cursor, particles,
 * scroll handling, reveal animations, 3D tilts, clinic status.
 */

(function () {
  'use strict';

  /* ────────────────────────────────────────────
     Utility helpers
  ──────────────────────────────────────────── */
  var $ = function (sel, ctx) {
    return (ctx || document).querySelector(sel);
  };

  var $$ = function (sel, ctx) {
    return Array.prototype.slice.call(
      (ctx || document).querySelectorAll(sel)
    );
  };

  var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  /* Re-run Lucide icon render after DOM is ready */
  document.addEventListener('DOMContentLoaded', function () {
    window._icons && window._icons();
  });

  /* ────────────────────────────────────────────
     THEME — dark / light toggle
  ──────────────────────────────────────────── */
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('als_theme', t); } catch (e) {}

    var el = $('#themeIcon');
    if (el) el.setAttribute('data-lucide', t === 'dark' ? 'sun' : 'moon');
    window._icons && window._icons();
  }

  /* Apply saved or default theme on load */
  var savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('als_theme') || 'dark'; } catch (e) {}
  setTheme(savedTheme);

  var themeBtn = $('#themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ────────────────────────────────────────────
     ENTRY SCREEN — 3D curtain splash
  ──────────────────────────────────────────── */
  (function () {
    var entry  = $('#entry');
    var bar    = $('#ebar');
    if (!entry || !bar) return;

    var prog   = 0;
    var opened = false;

    /* Lock body scroll while splash is visible */
    document.body.style.overflow = 'hidden';

    /* Animate loading progress bar */
    var ticker = setInterval(function () {
      prog += Math.random() * 13 + 5;
      if (prog >= 100) { prog = 100; clearInterval(ticker); }
      bar.style.width = prog + '%';
    }, 110);

    function openEntry() {
      if (opened) return;
      opened = true;
      clearInterval(ticker);
      bar.style.width = '100%';

      entry.classList.add('exit');
      entry.style.pointerEvents = 'none';
      document.body.style.overflow = '';

      /* Remove from DOM after CSS animation fully completes (2.2s transition + buffer) */
      setTimeout(function () {
        if (entry && entry.parentNode) {
          entry.parentNode.removeChild(entry);
        }
      }, 2600);
    }

    entry.addEventListener('click',      openEntry);
    entry.addEventListener('touchstart', openEntry, { passive: true });
    window.addEventListener('wheel',     openEntry, { once: true, passive: true });
    window.addEventListener('touchmove', openEntry, { once: true, passive: true });

    window.addEventListener('keydown', function kh(e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        openEntry();
        window.removeEventListener('keydown', kh);
      }
    });

    /* Auto-open failsafe after 4.5 seconds */
    setTimeout(openEntry, 4500);
  }());

  /* ────────────────────────────────────────────
     CUSTOM CURSOR — fine pointer (desktop) only
  ──────────────────────────────────────────── */
  if (!isTouch) {
    var cdot  = $('.cdot');
    var cring = $('.cring');
    var mx = 0, my = 0, rx = 0, ry = 0;

    if (cdot && cring) {
      document.addEventListener('mousemove', function (e) {
        mx = e.clientX;
        my = e.clientY;
        document.body.classList.add('con');
        cdot.style.left = mx + 'px';
        cdot.style.top  = my + 'px';
      });

      /* Lerp ring for smooth lag-follow effect */
      (function lerpRing() {
        rx += (mx - rx) * 0.13;
        ry += (my - ry) * 0.13;
        cring.style.left = rx + 'px';
        cring.style.top  = ry + 'px';
        requestAnimationFrame(lerpRing);
      }());

      document.addEventListener('mousedown', function () {
        document.body.classList.add('cclk');
      });
      document.addEventListener('mouseup', function () {
        document.body.classList.remove('cclk');
      });

      /* Expand ring on interactive elements */
      var hoverTargets = [
        'a', 'button', '.svccard', '.tcard', '.acard',
        '.doccard', '.specbadge', '.cbtn', '.mapbadge'
      ].join(', ');

      $$(hoverTargets).forEach(function (el) {
        el.addEventListener('mouseenter', function () {
          document.body.classList.add('chov');
        });
        el.addEventListener('mouseleave', function () {
          document.body.classList.remove('chov');
        });
      });
    }
  }

  /* ────────────────────────────────────────────
     PARTICLE SYSTEM — hero background
  ──────────────────────────────────────────── */
  if (!isTouch) {
    var canvas = $('#ptcl');
    if (canvas) {
      var ctx = canvas.getContext('2d');
      var W, H;
      var particles = [];

      function resizeCanvas() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
      }
      resizeCanvas();

      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(resizeCanvas).observe(canvas);
      } else {
        window.addEventListener('resize', resizeCanvas, { passive: true });
      }

      function Particle() {
        this.reset();
        /* Start at a random point in the lifetime so they don't all fade in together */
        this.life = Math.random() * this.maxLife;
      }

      Particle.prototype.reset = function () {
        this.x        = Math.random() * W;
        this.y        = H + 8;
        this.vx       = (Math.random() - 0.5) * 0.38;
        this.vy       = -(Math.random() * 0.65 + 0.22);
        this.r        = Math.random() * 1.7 + 0.5;
        this.life     = 0;
        this.maxLife  = Math.random() * 210 + 130;
        this.maxAlpha = Math.random() * 0.4 + 0.07;
      };

      Particle.prototype.tick = function () {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        var t = this.life / this.maxLife;
        this.alpha = t < 0.2
          ? (t / 0.2) * this.maxAlpha
          : t > 0.8
            ? ((1 - t) / 0.2) * this.maxAlpha
            : this.maxAlpha;
        if (this.life >= this.maxLife || this.y < -8) this.reset();
      };

      Particle.prototype.draw = function () {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle   = '#c8a85a';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      for (var i = 0; i < 28; i++) particles.push(new Particle());

      (function animParticles() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(function (p) { p.tick(); p.draw(); });
        requestAnimationFrame(animParticles);
      }());
    }
  }

  /* ────────────────────────────────────────────
     SCROLL HANDLER — RAF-throttled
  ──────────────────────────────────────────── */
  (function () {
    var rafPending = false;
    var nav      = $('#mainnav');
    var topB     = $('#topBtn');
    var spbar    = $('#spbar');
    var heroEl   = $('#hero');
    var smartbar = $('.smartbar');

    /* Track scroll direction for smartbar auto-hide */
    var lastSY      = 0;
    var sbHideThresh = 80;  /* px scrolled before bar hides */
    var sbHideDelta  = 0;   /* accumulated downward scroll */

    function onScroll() {
      var sy  = window.scrollY || window.pageYOffset || 0;
      var max = document.body.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (sy / max) * 100 : 0;
      var dy  = sy - lastSY;

      if (spbar) spbar.style.width = pct + '%';
      if (nav)   nav.classList.toggle('stuck', sy > 60);
      if (topB)  topB.classList.toggle('show', pct > 22);

      /* Subtle parallax fade on hero while scrolling */
      if (heroEl) {
        var fade = 1 - Math.min(sy / (heroEl.offsetHeight * 0.7), 1) * 0.28;
        heroEl.style.opacity = String(fade);
      }

      /* Smart bar: hide when scrolling down, reveal on scroll-up
         Only applies on mobile (smartbar is display:none at ≥768px) */
      if (smartbar && window.innerWidth < 768) {
        if (dy > 0) {
          /* Scrolling down — accumulate and hide after threshold */
          sbHideDelta += dy;
          if (sbHideDelta > sbHideThresh) {
            smartbar.classList.add('sb-hidden');
          }
        } else {
          /* Scrolling up — immediately reveal and reset counter */
          sbHideDelta = 0;
          smartbar.classList.remove('sb-hidden');
        }
        /* Always show smartbar at top of page */
        if (sy < 40) smartbar.classList.remove('sb-hidden');
      }

      lastSY     = sy;
      rafPending = false;
    }

    window.addEventListener('scroll', function () {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(onScroll);
      }
    }, { passive: true });

    var topBtn = $('#topBtn');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }());

  /* ────────────────────────────────────────────
     SECTION + NAV TRACKING
  ──────────────────────────────────────────── */
  (function () {
    var ids = ['hero', 'about', 'services', 'trust', 'doctor', 'contact'];
    var sections = ids
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var links = $$('.nlink');
    var dots  = $$('.ndot');

    function setActive(id) {
      links.forEach(function (l) {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
      dots.forEach(function (d) {
        d.classList.toggle('active', d.dataset.t === id);
      });
    }

    /* Primary: IntersectionObserver */
    if (typeof IntersectionObserver !== 'undefined') {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.30) {
            setActive(entry.target.id);
          }
        });
      }, { threshold: 0.30, rootMargin: '-8% 0px -50% 0px' });

      sections.forEach(function (s) { io.observe(s); });
    }

    /* Fallback: scroll position check */
    var timer;
    window.addEventListener('scroll', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var best = sections.length ? sections[0].id : 'hero';
        var bestDist = Infinity;
        sections.forEach(function (s) {
          var dist = Math.abs(s.getBoundingClientRect().top + s.offsetHeight * 0.1);
          if (dist < bestDist) { bestDist = dist; best = s.id; }
        });
        setActive(best);
      }, 80);
    }, { passive: true });
  }());

  /* ────────────────────────────────────────────
     NAV DOT CLICK
  ──────────────────────────────────────────── */
  $$('.ndot').forEach(function (d) {
    d.addEventListener('click', function () {
      var target = document.getElementById(d.dataset.t);
      if (!target) return;
      /* scrollIntoView() does not reliably respect scroll-padding-top on Safari <15.4,
         causing sections to scroll behind the fixed navbar. Use scrollTo() with an
         explicit offset derived from the --nav-h CSS variable (default 72px). */
      var navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72',
        10
      );
      var top = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ────────────────────────────────────────────
     REVEAL ANIMATIONS — scroll-triggered
  ──────────────────────────────────────────── */
  (function () {
    /* Fallback for browsers without IntersectionObserver */
    if (typeof IntersectionObserver === 'undefined') {
      $$('.rv, .grule').forEach(function (el) { el.classList.add('vis'); });
      $$('.sdiv').forEach(function (el) { el.classList.add('vis'); });
      return;
    }

    var revIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('vis');
        $$('.rv',    el).forEach(function (c) { c.classList.add('vis'); });
        $$('.grule', el).forEach(function (r) { r.classList.add('vis'); });
        revIO.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -48px 0px' });

    /* Separate observer for section dividers */
    $$('.sdiv').forEach(function (d) {
      var dIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('vis');
            dIO.unobserve(en.target);
          }
        });
      }, { threshold: 0.4 });
      dIO.observe(d);
    });

    $$('.rv, .grule').forEach(function (el) { revIO.observe(el); });
    $$('section').forEach(function (s) { revIO.observe(s); });
  }());

  /* ────────────────────────────────────────────
     3D TILT EFFECTS — desktop only
  ──────────────────────────────────────────── */
  if (!isTouch) {

    /* Service cards — spotlight + 3D tilt */
    $$('.svccard').forEach(function (c) {
      /* Set transition once on mouseenter, not on every mousemove frame */
      c.addEventListener('mouseenter', function () {
        c.style.transition = 'border-color 0.3s, box-shadow 0.1s';
      });
      c.addEventListener('mousemove', function (e) {
        var r  = c.getBoundingClientRect();
        var x  = e.clientX - r.left;
        var y  = e.clientY - r.top;
        c.style.setProperty('--cx', x + 'px');
        c.style.setProperty('--cy', y + 'px');
        var tY = ((x / r.width)  - 0.5) * 13;
        var tX = ((y / r.height) - 0.5) * -13;
        c.style.transform  = 'perspective(720px) rotateY(' + tY + 'deg) rotateX(' + tX + 'deg) scale(1.015)';
      });
      c.addEventListener('mouseleave', function () {
        c.style.transform  = '';
        c.style.transition = '';
      });
    });

    /* Trust cards */
    $$('.tcard').forEach(function (c) {
      /* Set transition once on mouseenter — not on every mousemove frame.
         Replace 'all' with specific properties to avoid evaluating every
         CSS property on each frame (major style recalculation cost). */
      c.addEventListener('mouseenter', function () {
        c.style.transition = 'transform 0.12s ease-out, box-shadow 0.12s ease-out';
      });
      c.addEventListener('mousemove', function (e) {
        var r  = c.getBoundingClientRect();
        var tY = ((e.clientX - r.left) / r.width  - 0.5) * 9;
        var tX = ((e.clientY - r.top)  / r.height - 0.5) * -9;
        c.style.transform  = 'perspective(600px) rotateY(' + tY + 'deg) rotateX(' + tX + 'deg) translateY(-5px)';
      });
      c.addEventListener('mouseleave', function () {
        c.style.transform  = '';
        c.style.transition = '';
      });
    });

    /* Doctor photo tilt */
    var dp = $('#docphoto');
    if (dp) {
      dp.addEventListener('mouseenter', function () {
        dp.style.transition = 'transform 0.1s ease-out';
      });
      dp.addEventListener('mousemove', function (e) {
        var r  = dp.getBoundingClientRect();
        var tY = ((e.clientX - r.left) / r.width  - 0.5) * 7;
        var tX = ((e.clientY - r.top)  / r.height - 0.5) * -7;
        dp.style.transform  = 'perspective(580px) rotateY(' + tY + 'deg) rotateX(' + tX + 'deg)';
      });
      dp.addEventListener('mouseleave', function () {
        dp.style.transform  = '';
        dp.style.transition = 'transform 0.5s ease-out';
      });
    }

    /* About card tilt */
    var ac = $('.acard');
    if (ac) {
      ac.addEventListener('mouseenter', function () {
        ac.style.transition = 'transform 0.12s ease-out';
      });
      ac.addEventListener('mousemove', function (e) {
        var r  = ac.getBoundingClientRect();
        var tY = ((e.clientX - r.left) / r.width  - 0.5) * 11;
        var tX = ((e.clientY - r.top)  / r.height - 0.5) * -11;
        ac.style.transform  = 'perspective(800px) rotateY(' + tY + 'deg) rotateX(' + tX + 'deg) scale(1.02)';
      });
      ac.addEventListener('mouseleave', function () {
        ac.style.transform  = '';
        ac.style.transition = 'transform 0.5s ease-out';
      });
    }
  }

  /* ────────────────────────────────────────────
     HERO ICON PARALLAX — mouse-tracking
  ──────────────────────────────────────────── */
  if (!isTouch) {
    var heroSection = $('#hero');
    var hicons = $$('.hicon');
    var pmx = window.innerWidth / 2;
    var pmy = window.innerHeight / 2;
    /* Track hero visibility to pause the RAF loop when off-screen.
       Previously getBoundingClientRect() fired every frame for the entire
       page session — now it only runs while hero is in the viewport. */
    var heroVisible = true;
    var parallaxRaf = null;

    document.addEventListener('mousemove', function (e) {
      pmx = e.clientX;
      pmy = e.clientY;
    });

    if (heroSection && typeof IntersectionObserver !== 'undefined') {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        /* Resume loop when hero comes back into view */
        if (heroVisible && !parallaxRaf) {
          parallaxRaf = requestAnimationFrame(parallaxLoop);
        }
      }, { threshold: 0 }).observe(heroSection);
    }

    function parallaxLoop() {
      parallaxRaf = null;
      if (!heroVisible) return; /* stop RAF — hero is off-screen */
      if (heroSection) {
        var rect = heroSection.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          var cx = rect.left + rect.width  / 2;
          var cy = rect.top  + rect.height / 2;
          var dx = (pmx - cx) / rect.width;
          var dy = (pmy - cy) / rect.height;
          hicons.forEach(function (ic, idx) {
            var depth = (idx + 1) * 5;
            ic.style.transform = 'translate(' + (dx * depth) + 'px, ' + (dy * depth) + 'px)';
          });
        }
      }
      parallaxRaf = requestAnimationFrame(parallaxLoop);
    }

    parallaxRaf = requestAnimationFrame(parallaxLoop);
  }

  /* ────────────────────────────────────────────
     MAGNETIC BUTTONS — desktop only
  ──────────────────────────────────────────── */
  if (!isTouch) {
    $$('.mag').forEach(function (wrap) {
      var btn = wrap.querySelector('.btn, .cbtn');
      if (!btn) return;
      wrap.addEventListener('mousemove', function (e) {
        var r  = wrap.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width  / 2) * 0.22;
        var dy = (e.clientY - r.top  - r.height / 2) * 0.22;
        btn.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
      });
      wrap.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ────────────────────────────────────────────
     RIPPLE EFFECT — click and touch
  ──────────────────────────────────────────── */
  $$('.btn, .cbtn, .sbb').forEach(function (b) {

    function spawnRipple(x, y) {
      var r    = b.getBoundingClientRect();
      var size = Math.max(r.width, r.height);
      var el   = document.createElement('span');
      el.className = 'ripple';
      el.style.cssText = [
        'width:'  + size + 'px',
        'height:' + size + 'px',
        'left:'   + (x - r.left - size / 2) + 'px',
        'top:'    + (y - r.top  - size / 2) + 'px'
      ].join(';');
      b.appendChild(el);
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 700);
    }

    /* Desktop — mouse click (no vibrate here — would double-fire on touch
       because touchstart already vibrated and click fires ~150ms later) */
    b.addEventListener('click', function (e) {
      if (!isTouch) spawnRipple(e.clientX, e.clientY);
    });

    /* Touch — ripple + single haptic on finger-down */
    b.addEventListener('touchstart', function (e) {
      var t = e.touches[0];
      if (t) spawnRipple(t.clientX, t.clientY);
      if (navigator.vibrate) navigator.vibrate(6);
    }, { passive: true });

  });

  /* Hero CTA glow on cursor proximity */
  if (!isTouch) {
    var cta = $('#heroCta');
    if (cta) {
      document.addEventListener('mousemove', function (e) {
        var r = cta.getBoundingClientRect();
        var d = Math.hypot(
          e.clientX - (r.left + r.width  / 2),
          e.clientY - (r.top  + r.height / 2)
        );
        cta.classList.toggle('glow', d < 165);
      });
    }
  }

  /* ────────────────────────────────────────────
     TOUCH CARD FEEDBACK
     CSS :active can be slow or unreliable on Android.
     JS touchstart/touchend gives instant visual response.
  ──────────────────────────────────────────── */
  if (isTouch) {
    var touchTargets = $$('.svccard, .tcard, .acard, .specbadge');

    touchTargets.forEach(function (el) {
      el.addEventListener('touchstart', function () {
        el.classList.add('touch-pressed');
      }, { passive: true });

      function releaseTouchPressed() {
        el.classList.remove('touch-pressed');
      }

      el.addEventListener('touchend',    releaseTouchPressed, { passive: true });
      el.addEventListener('touchcancel', releaseTouchPressed, { passive: true });
    });
  }

  /* ────────────────────────────────────────────
     CLINIC STATUS BADGE — live open/closed
  ──────────────────────────────────────────── */

  /**
   * Returns a Date object representing the current time in IST (UTC+5:30).
   * Clinic hours are IST-based; using the user's local clock produces wrong
   * open/closed status for visitors outside India (diaspora, international).
   */
  function getNowIST() {
    var now    = new Date();
    /* UTC ms + IST offset (5h 30m = 330 minutes = 19800 seconds = 19800000 ms) */
    var istMs  = now.getTime() + (now.getTimezoneOffset() * 60000) + (330 * 60000);
    return new Date(istMs);
  }

  function updateStatus() {
    var now   = getNowIST();
    var day   = now.getDay();   /* 0 = Sun, 1 = Mon … 6 = Sat */
    var hours = now.getHours() + now.getMinutes() / 60;
    var dot   = $('#sdot');
    var text  = $('#stxt');
    if (!dot || !text) return;

    var open = false;
    var msg  = '';

    if (day === 0) {
      /* Sunday — closed */
      msg = 'Closed \u2014 Opens Monday at 10:00 AM';

    } else if (day === 5) {
      /* Friday — split hours: 10:00–12:30 and 16:00–19:00 */
      if ((hours >= 10 && hours < 12.5) || (hours >= 16 && hours < 19)) {
        open = true;
        msg  = 'Clinic is Open Now';
      } else if (hours < 10) {
        msg = 'Opens Today at 10:00 AM';
      } else if (hours >= 12.5 && hours < 16) {
        msg = 'Opens Again at 4:00 PM';
      } else {
        msg = 'Opens Saturday at 10:00 AM';
      }

    } else {
      /* Mon–Thu, Sat — 10:00–19:00 */
      if (hours >= 10 && hours < 19) {
        open = true;
        msg  = 'Clinic is Open Now';
      } else if (hours < 10) {
        msg = 'Opens Today at 10:00 AM';
      } else if (day === 6) {
        msg = 'Opens Monday at 10:00 AM';
      } else {
        msg = 'Opens Tomorrow at 10:00 AM';
      }
    }

    var newClass = 'sdot ' + (open ? 'open' : 'closed');
    /* Only assign if changed — prevents MutationObserver pulse firing
       every 60s even when status hasn't changed (e.g., Open all morning) */
    if (dot.className !== newClass) dot.className = newClass;
    text.textContent = msg;
  }

  updateStatus();
  /* Single consolidated interval — both status badge and next-slot
     previously had separate setInterval(fn, 60000) calls that drifted
     out of phase and could fire nearly simultaneously, causing a double
     pulse animation. Now one clock drives both. */
  setInterval(function () {
    updateStatus();
    /* refreshNextSlot is defined later in an IIFE — call via a wrapper
       that tolerates it not existing yet on first tick */
    if (typeof window._refreshNextSlot === 'function') {
      window._refreshNextSlot();
    }
  }, 60000);

  /* ────────────────────────────────────────────
     HAMBURGER / MOBILE MENU
  ──────────────────────────────────────────── */
  var hamBtn  = $('#hamBtn');
  var mobmenu = $('#mobmenu');

  function closeMob() {
    if (!mobmenu || !hamBtn) return;
    mobmenu.classList.remove('open');
    hamBtn.classList.remove('open');
    hamBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamBtn && mobmenu) {
    hamBtn.addEventListener('click', function () {
      var isOpen = mobmenu.classList.toggle('open');
      hamBtn.classList.toggle('open', isOpen);
      hamBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on any mobile nav link click */
    $$('.moblink').forEach(function (l) {
      l.addEventListener('click', closeMob);
    });

    /* Close on Call / WhatsApp button click in mobile menu.
       Previously these buttons did not close the menu, leaving the
       full-screen overlay open after the user initiated a call or chat. */
    $$('.mobacts a').forEach(function (a) {
      a.addEventListener('click', closeMob);
    });

    /* Close on backdrop click */
    mobmenu.addEventListener('click', function (e) {
      if (e.target === mobmenu) closeMob();
    });
  }

  /* Close mobile menu on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMob();
  });

  /* ════════════════════════════════════════════
     ENHANCEMENTS v4  — appended, non-destructive
     ════════════════════════════════════════════ */

  /* ────────────────────────────────────────────
     BLUR-UP + SKELETON — doctor image
     Removes blur class when image has loaded.
     Fades out the shimmer skeleton overlay.
  ──────────────────────────────────────────── */
  (function () {
    var img  = $('#docphoto-img');
    var wrap = $('#docphoto');
    if (!img || !wrap) return;

    /* Inject shimmer skeleton overlay behind the image */
    var skel = document.createElement('div');
    skel.className = 'docphoto-skel skel';
    wrap.appendChild(skel);

    function onImgLoad() {
      img.classList.add('loaded');    /* removes blur */
      skel.classList.add('done');     /* fades out skeleton */
    }

    if (img.complete && img.naturalWidth > 0) {
      /* Already cached — fire immediately */
      onImgLoad();
    } else {
      img.addEventListener('load',  onImgLoad);
      img.addEventListener('error', onImgLoad); /* fail gracefully */
    }
  }());

  /* ────────────────────────────────────────────
     BLUR-UP — logo images (nav + footer only)
     Excludes .elogoimg which has its own filter animation
  ──────────────────────────────────────────── */
  (function () {
    $$('img[src="logo.png"]').forEach(function (img) {
      if (img.classList.contains('elogoimg')) return; /* skip entry screen logo */
      img.classList.add('blur-up');
      function onLoad() { img.classList.add('loaded'); }
      if (img.complete && img.naturalWidth > 0) {
        onLoad();
      } else {
        img.addEventListener('load',  onLoad);
        img.addEventListener('error', onLoad);
      }
    });
  }());

  /* ────────────────────────────────────────────
     EXTENDED STATUS — next available slot
     Extends the existing updateStatus() result
     to also populate #next-slot-text display.
  ──────────────────────────────────────────── */
  (function () {
    var slotWrap = $('#next-slot');
    var slotText = $('#next-slot-text');
    if (!slotWrap || !slotText) return;

    /* Day names for readable messages */
    var DAY_NAME = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    function fmt12(h) {
      /* Convert decimal hour (e.g. 16.5) to "4:30 PM" */
      var hh   = Math.floor(h);
      var mm   = Math.round((h - hh) * 60);
      var ampm = hh >= 12 ? 'PM' : 'AM';
      var disp = hh % 12 || 12;
      return disp + (mm > 0 ? ':' + (mm < 10 ? '0' : '') + mm : ':00') + ' ' + ampm;
    }

    function nextDayName(day) {
      return DAY_NAME[(day + 1) % 7];
    }

    function computeNextSlot() {
      var now   = getNowIST();
      var day   = now.getDay();
      var h     = now.getHours() + now.getMinutes() / 60;

      if (day === 0) {
        /* Sunday — next is Monday 10 AM */
        return { open: false, label: 'Opens Monday at 10:00 AM' };
      }

      if (day === 5) {
        /* Friday split: 10:00–12:30 and 16:00–19:00 */
        if (h >= 10 && h < 12.5) {
          return { open: true,  label: 'Open now \u2022 Closes at ' + fmt12(12.5) };
        }
        if (h >= 12.5 && h < 16) {
          return { open: false, label: 'Re-opens today at ' + fmt12(16) };
        }
        if (h >= 16 && h < 19) {
          return { open: true,  label: 'Open now \u2022 Closes at ' + fmt12(19) };
        }
        return { open: false, label: 'Opens Saturday at ' + fmt12(10) };
      }

      /* Mon–Thu, Sat: 10:00–19:00 */
      if (h < 10) {
        return { open: false, label: 'Opens today at ' + fmt12(10) };
      }
      if (h >= 10 && h < 19) {
        return { open: true,  label: 'Open now \u2022 Closes at ' + fmt12(19) };
      }
      /* After 19:00 — find next opening */
      if (day === 6) {
        return { open: false, label: 'Opens Monday at ' + fmt12(10) };
      }
      return { open: false, label: 'Opens ' + nextDayName(day) + ' at ' + fmt12(10) };
    }

    function refreshNextSlot() {
      var s = computeNextSlot();
      /* textContent is safer than innerHTML — no XSS surface even if
         label construction is ever modified to include dynamic data */
      slotText.textContent = s.label;
      slotWrap.style.display = 'inline-flex';
      /* _icons() call removed — clock icon is static HTML, never re-rendered */
    }

    /* Expose for the consolidated 60s interval in updateStatus block */
    window._refreshNextSlot = refreshNextSlot;

    refreshNextSlot();
    /* Standalone interval removed — consolidated into the single
       setInterval in updateStatus to prevent double-pulse at drift overlap */
  }());

  /* ────────────────────────────────────────────
     STATUS BADGE — pulse micro-interaction
     MutationObserver watches sdot className changes
     and fires a brief pulse animation.
  ──────────────────────────────────────────── */
  (function () {
    var dot  = $('#sdot');
    var text = $('#stxt');
    if (!dot || !text) return;

    var prevClass = dot.className;

    var mo = new MutationObserver(function () {
      var cur = dot.className;
      if (cur === prevClass) return;
      prevClass = cur;

      /* Fade text out, let updateStatus set new value, fade back in */
      text.classList.add('fading');
      setTimeout(function () { text.classList.remove('fading'); }, 150);

      /* Pulse the dot */
      var pulseClass = cur.indexOf('open') !== -1
        ? 'do-pulse-open'
        : 'do-pulse-closed';

      dot.classList.remove('do-pulse-open', 'do-pulse-closed');
      /* Force reflow to restart animation */
      void dot.offsetWidth;
      dot.classList.add(pulseClass);
      setTimeout(function () {
        dot.classList.remove('do-pulse-open', 'do-pulse-closed');
      }, 900);
    });

    mo.observe(dot, { attributes: true, attributeFilter: ['class'] });
  }());

  /* ────────────────────────────────────────────
     SERVICE CARD EXPAND / COLLAPSE
     Touch tap toggles .svc-expanded on each card.
     Desktop: unchanged (hover states via CSS).
  ──────────────────────────────────────────── */
  (function () {
    if (!isTouch) return;

    $$('.svccard').forEach(function (card) {
      /* Make card reachable and operable by keyboard on touch/hybrid devices */
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-expanded', 'false');

      function toggleCard(e) {
        /* If the interaction was directly on the CTA link, let it through */
        if (e.target && e.target.closest && e.target.closest('.svc-cta-link')) return;

        var wasOpen = card.classList.contains('svc-expanded');

        /* Collapse any other open card first */
        $$('.svccard.svc-expanded').forEach(function (other) {
          if (other !== card) {
            other.classList.remove('svc-expanded');
            other.setAttribute('aria-expanded', 'false');
          }
        });

        card.classList.toggle('svc-expanded', !wasOpen);
        card.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
        window._icons && window._icons();
      }

      card.addEventListener('click', toggleCard);

      /* Keyboard: Enter and Space trigger expand, matching button behaviour */
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCard(e);
        }
      });
    });
  }());

  /* ────────────────────────────────────────────
     SERVICES SECTION PROGRESS INDICATOR
     Tracks how many cards have entered the viewport
     and updates the "X of 9" counter + progress bar.
  ──────────────────────────────────────────── */
  (function () {
    var progressWrap = $('#svc-progress');
    var countEl      = $('#svc-count');
    var fillEl       = $('#svc-progress-fill');
    var cards        = $$('.svccard');
    if (!progressWrap || !countEl || !fillEl || !cards.length) return;

    var total   = cards.length;   /* 9 */
    var visible = 0;

    /* Show the counter once the user has scrolled into services */
    var svcSection = $('#services');
    if (svcSection && typeof IntersectionObserver !== 'undefined') {
      var svcIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          progressWrap.classList.toggle('visible', en.isIntersecting);
        });
      }, { threshold: 0.1 });
      svcIO.observe(svcSection);
    }

    if (typeof IntersectionObserver === 'undefined') return;

    var cardIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          visible = Math.min(visible + 1, total);
        } else {
          visible = Math.max(visible - 1, 0);
        }
        countEl.textContent = Math.max(visible, 1) + ' of ' + total;
        fillEl.style.width  = ((visible / total) * 100) + '%';
      });
    }, { threshold: 0.5 });

    cards.forEach(function (c) { cardIO.observe(c); });
  }());

  /* ────────────────────────────────────────────
     SECTION HEADING REVEAL
     Marks .svchdr and .tbody as .vis when in viewport
     so the animated CSS underlines on h2 can trigger.
  ──────────────────────────────────────────── */
  (function () {
    if (typeof IntersectionObserver === 'undefined') {
      $$('.svchdr, .tbody').forEach(function (el) { el.classList.add('vis'); });
      return;
    }
    var hdIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('vis');
          hdIO.unobserve(en.target);
        }
      });
    }, { threshold: 0.25 });
    $$('.svchdr, .tbody').forEach(function (el) { hdIO.observe(el); });
  }());

  /* ────────────────────────────────────────────
     TEXT ANIMATION SYSTEM
     Letter fade-up, word stagger, hero sub gradient
  ──────────────────────────────────────────── */
  (function () {

    /* 1. Hero subtitle — add .hero-sub class to the white span
       so the gradient-flow shine animation targets it precisely */
    var heroSubSpan = document.querySelector('.htitle span[style]');
    if (heroSubSpan) {
      heroSubSpan.classList.add('hero-sub');
    }

    /* 2. Entry screen .ename — letter fade-up
       Splits "AL-Shifa Clinic" into individual char spans with
       staggered animation-delay. Fires immediately (entry is visible). */
    var ename = $('.ename');
    if (ename && !isTouch) {
      var text   = ename.textContent;
      var BASE   = 0.08;  /* seconds between each char */
      var html   = text.split('').map(function (ch, i) {
        if (ch === ' ') {
          return '<span class="fade-word-space"> </span>';
        }
        var delay  = (i * BASE).toFixed(2);
        return '<span class="ename-char" style="animation-delay:' + delay + 's">'
          + (ch === '&' ? '&amp;' : ch)
          + '</span>';
      }).join('');
      ename.innerHTML = html;
    }

    /* 3. Section .h2 headings with .underline-reveal — word fade-up
       Split each heading into word spans so they stagger in
       instead of appearing as one flat block.
       Only applies once, triggered by IntersectionObserver. */
    if (typeof IntersectionObserver === 'undefined') return;

    var h2ELS = $$('.underline-reveal.rv');

    var wordIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;

        /* Skip if already split */
        if (el.dataset.wordSplit) return;
        el.dataset.wordSplit = '1';

        /* Collect lines — headings may have <br> elements */
        /* Flatten to a text array preserving <br> as a line break token */
        var nodes  = Array.prototype.slice.call(el.childNodes);
        var words  = [];
        nodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent.trim().split(/\s+/).forEach(function (w) {
              if (w) words.push({ type: 'word', text: w });
            });
          } else if (node.nodeName === 'BR') {
            words.push({ type: 'br' });
          } else if (node.nodeName === 'SPAN' || node.nodeName === 'EM') {
            /* Preserve inner HTML nodes (e.g. .tgold span) as a single word unit */
            words.push({ type: 'node', html: node.outerHTML });
          }
        });

        var BASE_DELAY = 0.05; /* 50ms between words */
        var wordCount  = 0;
        var result     = words.map(function (w) {
          if (w.type === 'br') return '<br>';
          var delay  = (wordCount * BASE_DELAY).toFixed(2);
          wordCount++;
          var inner  = w.type === 'node' ? w.html : w.text;
          return '<span class="fade-word" style="animation-delay:' + delay + 's">'
            + inner
            + '</span> ';
        }).join('');

        el.innerHTML = result;
        wordIO.unobserve(el);
      });
    }, { threshold: 0.3 });

    h2ELS.forEach(function (el) { wordIO.observe(el); });

  }());

}()); /* end IIFE */
