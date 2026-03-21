/**
 * AL-Shifa Clinic — script.js  v5.0  PRODUCTION
 * Clean consolidated build — all conflicts resolved
 */
(function () {
  'use strict';

  /* ─── Utilities ─── */
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* Shared flag — used by parallax and CTA glow blocks */
  var heroVisible = true;

  var isTouch = (typeof window.matchMedia === 'function')
    ? window.matchMedia('(pointer: coarse)').matches
    : ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  document.addEventListener('DOMContentLoaded', function () {
    window._icons && window._icons();
  });

  /* IST TIMEZONE HELPER */
  function getNowIST() {
    var now   = new Date();
    var istMs = now.getTime() + (now.getTimezoneOffset() * 60000) + (330 * 60000);
    return new Date(istMs);
  }

  /* THEME */
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('als_theme', t); } catch (e) {}
    var el = $('#themeIcon');
    if (el) el.setAttribute('data-lucide', t === 'dark' ? 'sun' : 'moon');
    window._icons && window._icons();
  }
  var savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('als_theme') || 'dark'; } catch (e) {}
  setTheme(savedTheme);

  var themeBtn = $('#themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ENTRY SCREEN */
  (function () {
    var entry = $('#entry');
    var bar   = $('#ebar');
    if (!entry || !bar) return;

    var prog = 0, opened = false, autoTimer;
    document.body.style.overflow = 'hidden';

    var ticker = setInterval(function () {
      prog += Math.random() * 13 + 5;
      if (prog >= 100) { prog = 100; clearInterval(ticker); }
      bar.style.width = prog + '%';
    }, 110);

    function openEntry() {
      if (opened) return;
      opened = true;
      clearInterval(ticker);
      clearTimeout(autoTimer);
      bar.style.width = '100%';
      entry.classList.add('exit');
      entry.style.pointerEvents = 'none';
      document.body.style.overflow = '';
      setTimeout(function () {
        if (entry && entry.parentNode) entry.parentNode.removeChild(entry);
      }, 2600);
    }

    entry.addEventListener('click',      openEntry);
    entry.addEventListener('touchstart', openEntry, { passive: true });
    window.addEventListener('wheel',     openEntry, { once: true, passive: true });
    window.addEventListener('touchmove', openEntry, { once: true, passive: true });
    window.addEventListener('keydown', function kh(e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        openEntry(); window.removeEventListener('keydown', kh);
      }
    });
    autoTimer = setTimeout(openEntry, 4500);
  }());

  /* CUSTOM CURSOR — desktop only */
  if (!isTouch) {
    var cdot  = $('.cdot');
    var cring = $('.cring');
    var mx = 0, my = 0, rx = 0, ry = 0, ringSettled = true, ringRafId = null;

    if (cdot && cring) {
      document.addEventListener('mousemove', function (e) {
        mx = e.clientX; my = e.clientY;
        document.body.classList.add('con');
        cdot.style.left = mx + 'px'; cdot.style.top = my + 'px';
        if (ringSettled) { ringSettled = false; ringRafId = requestAnimationFrame(lerpRing); }
      });

      function lerpRing() {
        rx += (mx - rx) * 0.10; ry += (my - ry) * 0.10;
        cring.style.left = rx + 'px'; cring.style.top = ry + 'px';
        if (Math.abs(mx - rx) > 0.15 || Math.abs(my - ry) > 0.15) {
          ringRafId = requestAnimationFrame(lerpRing);
        } else {
          ringSettled = true; ringRafId = null;
        }
      }

      document.addEventListener('mousedown', function () { document.body.classList.add('cclk'); });
      document.addEventListener('mouseup',   function () { document.body.classList.remove('cclk'); });

      var hoverSel = 'a,button,.svccard,.tcard,.acard,.doccard,.specbadge,.cbtn,.mapbadge';
      $$(hoverSel).forEach(function (el) {
        el.addEventListener('mouseenter', function () { document.body.classList.add('chov'); });
        el.addEventListener('mouseleave', function () { document.body.classList.remove('chov'); });
      });
    }
  }

  /* PARTICLE SYSTEM — hero, desktop only */
  if (!isTouch) {
    var canvas = $('#ptcl');
    if (canvas) {
      var ctx = canvas.getContext('2d');
      if (!ctx) return;
      var W = 0, H = 0;

      function resizeCanvas() {
        var w = canvas.offsetWidth, h = canvas.offsetHeight;
        if (w > 0 && h > 0) { W = canvas.width = w; H = canvas.height = h; }
      }
      resizeCanvas();
      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(resizeCanvas).observe(canvas);
      } else {
        window.addEventListener('resize', resizeCanvas, { passive: true });
      }

      function Particle() { this.reset(); this.life = Math.random() * this.maxLife; }
      Particle.prototype.reset = function () {
        this.x = Math.random() * W; this.y = H + 8;
        this.vx = (Math.random() - 0.5) * 0.38;
        this.vy = -(Math.random() * 0.65 + 0.22);
        this.r  = Math.random() * 1.7 + 0.5;
        this.life = 0; this.maxLife = Math.random() * 210 + 130;
        this.maxAlpha = Math.random() * 0.4 + 0.07;
      };
      Particle.prototype.tick = function () {
        this.x += this.vx; this.y += this.vy; this.life++;
        var t = this.life / this.maxLife;
        this.alpha = t < 0.2 ? (t / 0.2) * this.maxAlpha : t > 0.8 ? ((1 - t) / 0.2) * this.maxAlpha : this.maxAlpha;
        if (this.life >= this.maxLife || this.y < -8) this.reset();
      };
      Particle.prototype.draw = function () {
        ctx.save(); ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#c8a85a'; ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      };
      var particles = [];
      for (var i = 0; i < 28; i++) particles.push(new Particle());

      var ptclVisible = true;
      var ptclRaf = null;

      if (typeof IntersectionObserver !== 'undefined') {
        new IntersectionObserver(function (entries) {
          ptclVisible = entries[0].isIntersecting;
          if (ptclVisible && !ptclRaf) ptclRaf = requestAnimationFrame(animParticles);
        }, { threshold: 0 }).observe(canvas);
      } else {
        ptclVisible = true;
      }

      function animParticles() {
        ptclRaf = null;
        if (!ptclVisible) return;
        ctx.clearRect(0, 0, W, H);
        particles.forEach(function (p) { p.tick(); p.draw(); });
        ptclRaf = requestAnimationFrame(animParticles);
      }
      ptclRaf = requestAnimationFrame(animParticles);
    }
  }

  /* SCROLL HANDLER — RAF throttled */
  (function () {
    var rafPending = false;
    var nav        = $('#mainnav');
    var topB       = $('#topBtn');
    var spbar      = $('#spbar');
    var heroEl     = $('#hero');
    var smartbar   = $('.smartbar');
    var lastSY = 0, sbHideDelta = 0;

    function onScroll() {
      var sy  = window.scrollY || window.pageYOffset || 0;
      var max = document.body.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (sy / max) * 100 : 0;
      var dy  = sy - lastSY;

      if (spbar) {
        spbar.style.width = pct + '%';
        spbar.classList.toggle('active', pct > 0);
      }
      if (nav)   nav.classList.toggle('stuck', sy > 60);
      if (topB)  topB.classList.toggle('show', pct > 22);

      if (heroEl) {
        heroEl.style.opacity = String(1 - Math.min(sy / (heroEl.offsetHeight * 0.85), 1) * 0.22);
      }

      if (smartbar && window.innerWidth < 768) {
        if (dy > 2) {
          sbHideDelta++;
          if (sbHideDelta >= 3) smartbar.classList.add('sb-hidden');
        } else if (dy < -2) {
          sbHideDelta = 0; smartbar.classList.remove('sb-hidden');
        }
        if (sy < 40) { sbHideDelta = 0; smartbar.classList.remove('sb-hidden'); }
      }

      lastSY = sy; rafPending = false;
    }

    window.addEventListener('scroll', function () {
      if (!rafPending) { rafPending = true; requestAnimationFrame(onScroll); }
    }, { passive: true });

    var topBtn = $('#topBtn');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }());

  /* SECTION + NAV TRACKING */
  (function () {
    var ids      = ['hero', 'about', 'services', 'trust', 'doctor', 'contact'];
    var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var links    = $$('.nlink');
    var dots     = $$('.ndot');

    function setActive(id) {
      links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + id); });
      dots.forEach(function  (d) { d.classList.toggle('active', d.dataset.t === id); });
    }

    if (typeof IntersectionObserver !== 'undefined') {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.30) setActive(entry.target.id);
        });
      }, { threshold: 0.30, rootMargin: '-8% 0px -50% 0px' });
      sections.forEach(function (s) { io.observe(s); });
    }

    if (typeof IntersectionObserver === 'undefined') {
      var timer;
      window.addEventListener('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          var best = sections.length ? sections[0].id : 'hero', bestDist = Infinity;
          sections.forEach(function (s) {
            var dist = Math.abs(s.getBoundingClientRect().top + s.offsetHeight * 0.1);
            if (dist < bestDist) { bestDist = dist; best = s.id; }
          });
          setActive(best);
        }, 80);
      }, { passive: true });
    }
  }());

  /* NAV DOT CLICK */
  $$('.ndot').forEach(function (d) {
    d.addEventListener('click', function () {
      var target = document.getElementById(d.dataset.t);
      if (!target) return;
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72', 10);
      var top  = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* REVEAL ANIMATIONS */
  (function () {
    if (typeof IntersectionObserver === 'undefined') {
      $$('.rv,.grule,.sdiv').forEach(function (el) { el.classList.add('vis'); });
      return;
    }

    var revIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('vis');
        $$('.rv,.grule', el).forEach(function (c) { c.classList.add('vis'); });
        revIO.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    $$('.sdiv').forEach(function (d) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('vis'); }
        });
      }, { threshold: 0.3 }).observe(d);
    });

    $$('.rv,.grule').forEach(function (el) { revIO.observe(el); });
    $$('section').forEach(function (s)     { revIO.observe(s); });
  }());

  /* 3D TILT — desktop only */
  if (!isTouch) {
    $$('.svccard').forEach(function (c) {
      c.addEventListener('mouseenter', function () {
        c.style.transition = 'border-color .3s, box-shadow .1s';
      });
      c.addEventListener('mousemove', function (e) {
        var r = c.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        c.style.setProperty('--cx', x + 'px');
        c.style.setProperty('--cy', y + 'px');
        c.style.transform = 'perspective(720px) rotateY(' + ((x / r.width - .5) * 12) + 'deg) rotateX(' + ((y / r.height - .5) * -12) + 'deg) scale(1.015)';
      });
      c.addEventListener('mouseleave', function () { c.style.transform = ''; c.style.transition = ''; });
    });

    $$('.tcard').forEach(function (c) {
      c.addEventListener('mouseenter', function () {
        c.style.transition = 'transform .12s ease-out, box-shadow .12s ease-out';
      });
      c.addEventListener('mousemove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.transform = 'perspective(600px) rotateY(' + ((e.clientX - r.left) / r.width - .5) * 9 + 'deg) rotateX(' + ((e.clientY - r.top) / r.height - .5) * -9 + 'deg) translateY(-5px)';
      });
      c.addEventListener('mouseleave', function () { c.style.transform = ''; c.style.transition = ''; });
    });

    var dp = $('#docphoto');
    if (dp) {
      dp.addEventListener('mouseenter', function () { dp.style.transition = 'transform .1s ease-out'; });
      dp.addEventListener('mousemove', function (e) {
        var r = dp.getBoundingClientRect();
        dp.style.transform = 'perspective(580px) rotateY(' + ((e.clientX - r.left) / r.width - .5) * 7 + 'deg) rotateX(' + ((e.clientY - r.top) / r.height - .5) * -7 + 'deg)';
      });
      dp.addEventListener('mouseleave', function () {
        dp.style.transform = ''; dp.style.transition = 'transform .5s ease-out';
      });
    }

    var ac = $('.acard');
    if (ac) {
      ac.addEventListener('mouseenter', function () { ac.style.transition = 'transform .12s ease-out'; });
      ac.addEventListener('mousemove', function (e) {
        var r = ac.getBoundingClientRect();
        ac.style.transform = 'perspective(800px) rotateY(' + ((e.clientX - r.left) / r.width - .5) * 11 + 'deg) rotateX(' + ((e.clientY - r.top) / r.height - .5) * -11 + 'deg) scale(1.02)';
      });
      ac.addEventListener('mouseleave', function () {
        ac.style.transform = ''; ac.style.transition = 'transform .5s ease-out';
      });
    }
  }

  /* HERO ICON PARALLAX — pauses when hero off-screen */
  if (!isTouch) {
    var heroSection = $('#hero');
    var hicons      = $$('.hicon');
    var pmx = window.innerWidth / 2, pmy = window.innerHeight / 2;
    var parallaxRaf = null;

    document.addEventListener('mousemove', function (e) { pmx = e.clientX; pmy = e.clientY; });

    if (heroSection && typeof IntersectionObserver !== 'undefined') {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        if (heroVisible && !parallaxRaf) parallaxRaf = requestAnimationFrame(parallaxLoop);
      }, { threshold: 0 }).observe(heroSection);
    }

    function parallaxLoop() {
      parallaxRaf = null;
      if (!heroVisible) return;
      if (heroSection) {
        var rect = heroSection.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          var cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
          var dx = (pmx - cx) / rect.width, dy = (pmy - cy) / rect.height;
          hicons.forEach(function (ic, idx) {
            var d = (idx + 1) * 5;
            ic.style.transform = 'translate(' + (dx * d) + 'px,' + (dy * d) + 'px)';
          });
        }
      }
      parallaxRaf = requestAnimationFrame(parallaxLoop);
    }
    parallaxRaf = requestAnimationFrame(parallaxLoop);
  }

  /* MAGNETIC BUTTONS */
  if (!isTouch) {
    $$('.mag').forEach(function (wrap) {
      var btn = wrap.querySelector('.btn,.cbtn');
      if (!btn) return;
      wrap.addEventListener('mousemove', function (e) {
        var r = wrap.getBoundingClientRect();
        btn.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.22 + 'px,' + (e.clientY - r.top - r.height / 2) * 0.22 + 'px)';
      });
      wrap.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* RIPPLE EFFECT */
  $$('.btn,.cbtn,.sbb').forEach(function (b) {
    function spawnRipple(x, y) {
      var r    = b.getBoundingClientRect();
      var size = Math.max(r.width, r.height);
      var el   = document.createElement('span');
      el.className = 'ripple';
      el.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (x - r.left - size / 2) + 'px;top:' + (y - r.top - size / 2) + 'px';
      b.appendChild(el);
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 700);
    }
    b.addEventListener('click', function (e) { if (!isTouch) spawnRipple(e.clientX, e.clientY); });
    b.addEventListener('touchstart', function (e) {
      var t = e.touches[0]; if (t) spawnRipple(t.clientX, t.clientY);
      if (navigator.vibrate) navigator.vibrate(6);
    }, { passive: true });
  });

  /* Hero CTA glow */
  if (!isTouch) {
    var cta = $('#heroCta');
    if (cta) {
      document.addEventListener('mousemove', function (e) {
        if (!heroVisible) return;
        var r = cta.getBoundingClientRect();
        cta.classList.toggle('glow', Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) < 165);
      });
    }
  }

  /* TOUCH CARD FEEDBACK */
  if (isTouch) {
    $$('.svccard,.tcard,.acard,.specbadge').forEach(function (el) {
      el.addEventListener('touchstart',  function () { el.classList.add('touch-pressed'); },    { passive: true });
      el.addEventListener('touchend',    function () { el.classList.remove('touch-pressed'); }, { passive: true });
      el.addEventListener('touchcancel', function () { el.classList.remove('touch-pressed'); }, { passive: true });
    });
  }

  /* CLINIC STATUS — IST timezone */
  function updateStatus() {
    /* On festival days, badge is owned by festival-banner.js */
    if (window._fstActive) return;
    var now   = getNowIST();
    var day   = now.getDay();
    var hours = now.getHours() + now.getMinutes() / 60;
    var dot   = $('#sdot'), text = $('#stxt');
    if (!dot || !text) return;

    var open = false, msg = '';
    if (day === 0) {
      msg = 'Closed \u2014 Opens Monday at 10:00 AM';
    } else if (day === 5) {
      if ((hours >= 10 && hours < 12.5) || (hours >= 16 && hours < 19)) {
        open = true; msg = 'Clinic is Open Now';
      } else if (hours < 10) {
        msg = 'Opens Today at 10:00 AM';
      } else if (hours >= 12.5 && hours < 16) {
        msg = 'Opens Again at 4:00 PM';
      } else {
        msg = 'Opens Saturday at 10:00 AM';
      }
    } else {
      if (hours >= 10 && hours < 19) { open = true; msg = 'Clinic is Open Now'; }
      else if (hours < 10)           { msg = 'Opens Today at 10:00 AM'; }
      else if (day === 6)            { msg = 'Opens Monday at 10:00 AM'; }
      else if (day === 4)            { msg = 'Opens Friday at 10:00 AM (midday break 12:30–4:00 PM)'; }
      else                           { msg = 'Opens Tomorrow at 10:00 AM'; }
    }

    var newClass = 'sdot ' + (open ? 'open' : 'closed');
    if (dot.className !== newClass) dot.className = newClass;

    text.classList.add('fading');
    setTimeout(function () { text.textContent = msg; text.classList.remove('fading'); }, 150);
  }
  updateStatus();

  /* STATUS BADGE PULSE */
  (function () {
    var dot = $('#sdot');
    if (!dot || typeof MutationObserver === 'undefined') return;
    var prevClass = dot.className;
    new MutationObserver(function () {
      var cur = dot.className;
      if (cur === prevClass) return;
      prevClass = cur;
      var pulseClass = cur.indexOf('open') !== -1 ? 'do-pulse-open' : 'do-pulse-closed';
      dot.classList.remove('do-pulse-open', 'do-pulse-closed');
      void dot.offsetWidth;
      dot.classList.add(pulseClass);
      setTimeout(function () { dot.classList.remove('do-pulse-open', 'do-pulse-closed'); }, 900);
    }).observe(dot, { attributes: true, attributeFilter: ['class'] });
  }());

  /* NEXT SLOT INDICATOR */
  (function () {
    var slotWrap = $('#next-slot'), slotText = $('#next-slot-text');
    if (!slotWrap || !slotText) return;

    var DAY_NAME = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    function fmt12(h) {
      var hh = Math.floor(h), mm = Math.round((h - hh) * 60);
      return (hh % 12 || 12) + (mm > 0 ? ':' + (mm < 10 ? '0' : '') + mm : ':00') + (hh >= 12 ? ' PM' : ' AM');
    }

    function computeNextSlot() {
      var now = getNowIST(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
      if (day === 0) return { label: 'Opens Monday at ' + fmt12(10) };
      if (day === 5) {
        if (h >= 10 && h < 12.5) return { label: 'Open now \u2022 Closes at ' + fmt12(12.5) };
        if (h >= 12.5 && h < 16) return { label: 'Re-opens today at ' + fmt12(16) };
        if (h >= 16 && h < 19)   return { label: 'Open now \u2022 Closes at ' + fmt12(19) };
        return { label: 'Opens Saturday at ' + fmt12(10) };
      }
      if (h < 10)            return { label: 'Opens today at ' + fmt12(10) };
      if (h >= 10 && h < 19) return { label: 'Open now \u2022 Closes at ' + fmt12(19) };
      if (day === 6)         return { label: 'Opens Monday at ' + fmt12(10) };
      return { label: 'Opens ' + DAY_NAME[(day + 1) % 7] + ' at ' + fmt12(10) };
    }

    function refreshNextSlot() {
      slotText.textContent = computeNextSlot().label;
      slotWrap.style.visibility = 'visible';
      slotWrap.style.opacity    = '1';
    }
    window._refreshNextSlot = refreshNextSlot;
    refreshNextSlot();
  }());

  /* Single 60s interval for both status updates — paused in background tab */
  var statusInterval = setInterval(function () {
    updateStatus();
    if (typeof window._refreshNextSlot === 'function') window._refreshNextSlot();
  }, 60000);

  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      updateStatus();
      if (typeof window._refreshNextSlot === 'function') window._refreshNextSlot();
    }
  });

  /* HAMBURGER / MOBILE MENU */
  var hamBtn  = $('#hamBtn');
  var mobmenu = $('#mobmenu');

  function closeMob() {
    if (!mobmenu || !hamBtn) return;
    mobmenu.classList.remove('open'); hamBtn.classList.remove('open');
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
    $$('.moblink').forEach(function (l) { l.addEventListener('click', closeMob); });
    $$('.mobacts a').forEach(function (a) { a.addEventListener('click', closeMob); });
    mobmenu.addEventListener('click', function (e) { if (e.target === mobmenu) closeMob(); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMob(); });

  /* Swipe-up to close mobile menu */
  if (isTouch && mobmenu) {
    var swipeStartY = 0, swipeStartX = 0;
    mobmenu.addEventListener('touchstart', function (e) {
      swipeStartY = e.touches[0].clientY; swipeStartX = e.touches[0].clientX;
    }, { passive: true });
    mobmenu.addEventListener('touchend', function (e) {
      if (e.changedTouches[0].clientY - swipeStartY < -60 ||
          Math.abs(e.changedTouches[0].clientX - swipeStartX) > window.innerWidth * 0.25) closeMob();
    }, { passive: true });
  }

  /* DOCTOR IMAGE BLUR-UP + SKELETON */
  (function () {
    var img  = $('#docphoto-img');
    var wrap = $('#docphoto');
    if (!img || !wrap) return;
    var skel = document.createElement('div');
    skel.className = 'docphoto-skel skel';
    wrap.appendChild(skel);
    function onLoad() { img.classList.add('loaded'); skel.classList.add('done'); }
    function onError() {
      skel.classList.add('done');
      img.style.display = 'none';
      var ph = document.createElement('div');
      ph.className = 'docphoto-placeholder';
      ph.setAttribute('aria-label', 'Doctor photo unavailable');
      ph.innerHTML = '<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="72" height="72"><circle cx="40" cy="28" r="16" stroke="rgba(200,168,90,0.5)" stroke-width="1.5"/><path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" stroke="rgba(200,168,90,0.5)" stroke-width="1.5" stroke-linecap="round"/></svg>';
      wrap.appendChild(ph);
    }
    if (img.complete && img.naturalWidth > 0) { onLoad(); }
    else if (img.complete && img.naturalWidth === 0) { onError(); }
    else { img.addEventListener('load', onLoad); img.addEventListener('error', onError); }
  }());

  /* BLUR-UP — logo images (excludes entry screen) */
  (function () {
    $$('.logo-img').forEach(function (img) {
      if (img.classList.contains('elogoimg')) return;
      img.classList.add('blur-up');
      function onLoad() { img.classList.add('loaded'); }
      if (img.complete && img.naturalWidth > 0) { onLoad(); }
      else { img.addEventListener('load', onLoad); img.addEventListener('error', onLoad); }
    });
  }());

  /* SERVICE CARD EXPAND (touch) */
  (function () {
    if (!isTouch) return;
    $$('.svccard').forEach(function (card) {
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-expanded', 'false');

      function toggleCard(e) {
        if (e.target && e.target.closest && e.target.closest('.svc-cta-link')) return;
        var wasOpen = card.classList.contains('svc-expanded');
        $$('.svccard.svc-expanded').forEach(function (other) {
          if (other !== card) { other.classList.remove('svc-expanded'); other.setAttribute('aria-expanded', 'false'); }
        });
        card.classList.toggle('svc-expanded', !wasOpen);
        card.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
        /* Scope icon re-render to this card only — avoids full DOM rescan */
        try { if (typeof lucide !== 'undefined') lucide.createIcons({ nameAttr: 'data-lucide', nodes: [card] }); } catch (e) {}
      }
      card.addEventListener('click', toggleCard);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCard(e); }
      });
    });
  }());

  /* SERVICE PROGRESS INDICATOR */
  (function () {
    var progressWrap = $('#svc-progress');
    var countEl      = $('#svc-count');
    var fillEl       = $('#svc-progress-fill');
    var cards        = $$('.svccard');
    if (!progressWrap || !countEl || !fillEl || !cards.length) return;
    if (typeof IntersectionObserver === 'undefined') return;

    var total = cards.length, visibleSet = {};

    new IntersectionObserver(function (entries) {
      progressWrap.classList.toggle('visible', entries[0].isIntersecting);
    }, { threshold: 0.1 }).observe($('#services') || progressWrap);

    var cardIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var idx = cards.indexOf(en.target);
        if (idx >= 0) visibleSet[idx] = en.isIntersecting;
      });
      var count = Object.keys(visibleSet).filter(function (k) { return visibleSet[k]; }).length;
      countEl.textContent = count + ' of ' + total;
      fillEl.style.width = (total > 0 ? (count / total) * 100 : 0) + '%';
    }, { threshold: 0.5 });
    cards.forEach(function (c) { cardIO.observe(c); });
  }());

  /* MAP FALLBACK */
  (function () {
    var frame    = $('.mframe');
    var fallback = $('.map-fallback');
    if (!frame || !fallback) return;

    function showFallback() {
      fallback.classList.add('visible');
      frame.style.display = 'none';
      window._icons && window._icons();
    }

    /* iframes never fire 'error' — use load + size heuristic instead */
    frame.addEventListener('load', function () {
      try {
        /* Cross-origin: throws → map loaded (Google Maps is cross-origin) */
        var doc = frame.contentDocument;
        /* Same-origin blocked content often loads with tiny/zero body */
        if (doc && doc.body && doc.body.innerHTML.length < 50) showFallback();
      } catch (e) { /* cross-origin — assume map loaded fine, do nothing */ }
    });

    /* Final safety net: if iframe has no visible height after 9s it likely failed */
    setTimeout(function () {
      if (frame.offsetHeight < 10) showFallback();
    }, 9000);
  }());

  /* SECTION HEADING REVEAL */
  (function () {
    if (typeof IntersectionObserver === 'undefined') {
      $$('.svchdr,.tbody').forEach(function (el) { el.classList.add('vis'); });
      return;
    }
    var hdIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('vis'); hdIO.unobserve(en.target); }
      });
    }, { threshold: 0.25 });
    $$('.svchdr,.tbody').forEach(function (el) { hdIO.observe(el); });
  }());

  /* STATUS DOT PULSE KEYFRAMES — injected once */
  (function () {
    if (!document.head.querySelector('style[data-als-pulse]')) {
      var style = document.createElement('style');
      style.setAttribute('data-als-pulse', '1');
      style.textContent = [
        '@keyframes statusPulseOpen{0%{box-shadow:0 0 0 0 rgba(34,197,94,.55)}60%,100%{box-shadow:0 0 0 7px rgba(34,197,94,0)}}',
        '@keyframes statusPulseClosed{0%{box-shadow:0 0 0 0 rgba(239,68,68,.55)}60%,100%{box-shadow:0 0 0 7px rgba(239,68,68,0)}}',
        '.sdot.do-pulse-open{animation:statusPulseOpen .8s ease-out}',
        '.sdot.do-pulse-closed{animation:statusPulseClosed .8s ease-out}'
      ].join('');
      document.head.appendChild(style);
    }
  }());

}()); /* end IIFE */
