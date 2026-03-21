/**
 * AL-Shifa Clinic — festival-banner.js  v5.0
 *
 * ── TEST MODE ─────────────────────────────────────────────────
 *   FST_TEST_DATE = '2026-03-21'  → Eid ul-Fitr  (today)
 *   FST_TEST_DATE = '2026-05-27'  → Eid ul-Adha
 *   FST_TEST_DATE = '2026-03-04'  → Holi
 *   FST_TEST_DATE = '2026-01-26'  → Republic Day
 *   FST_TEST_DATE = '2026-08-15'  → Independence Day
 * Set to '' for live production.
 * ──────────────────────────────────────────────────────────────
 */
(function () {
  'use strict';

  var FST_TEST_DATE = '';

  /* ── IST ────────────────────────────────────────────────── */
  function todayIST() {
    if (FST_TEST_DATE) return FST_TEST_DATE;
    var now = new Date();
    var d   = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (330 * 60000));
    return d.getFullYear() + '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
      ('0' + d.getDate()).slice(-2);
  }
  function todayMD() { return todayIST().slice(5); }

  /* ── Festival data ──────────────────────────────────────── */
  var F = {
    'eid-fitr': {
      label: 'Eid ul-Fitr',
      greeting: 'Eid ul-Fitr Mubarak \u262E',
      sub: 'Clinic closed today & tomorrow \u00B7 Wishing you joy and peace',
      badgeText: 'Closed \u2014 Eid Mubarak',
      statusLabel: 'Closed Today',
      pillType: 'closed',
      dates: ['2025-03-30','2025-03-31','2026-03-20','2026-03-21','2027-03-09','2027-03-10']
    },
    'eid-adha': {
      label: 'Eid ul-Adha',
      greeting: 'Eid ul-Adha Mubarak \u262E',
      sub: 'Clinic closed today & tomorrow \u00B7 Wishing you joy and peace',
      badgeText: 'Closed \u2014 Eid Mubarak',
      statusLabel: 'Closed Today',
      pillType: 'closed',
      dates: ['2025-06-07','2025-06-08','2026-05-27','2026-05-28','2027-05-17','2027-05-18']
    },
    'holi': {
      label: 'Holi',
      greeting: 'Happy Holi \uD83C\uDF88',
      sub: 'Clinic closed today \u00B7 Wishing you colour and joy',
      badgeText: 'Closed \u2014 Happy Holi',
      statusLabel: 'Closed Today',
      pillType: 'closed',
      dates: ['2025-03-14','2026-03-04','2027-03-22']
    },
    'republic': {
      label: 'Republic Day',
      greeting: 'Happy Republic Day',
      sub: 'Half day \u00B7 Open 10:00 AM \u2013 2:00 PM only',
      badgeText: 'Half Day \u2014 Republic Day',
      statusLabel: 'Half Day',
      pillType: 'halfday',
      monthDay: '01-26'
    },
    'independence': {
      label: 'Independence Day',
      greeting: 'Happy Independence Day \uD83C\uDDEE\uD83C\uDDF3',
      sub: 'Clinic closed today \u00B7 Jai Hind',
      badgeText: 'Closed \u2014 Independence Day \u00B7 Jai Hind',
      statusLabel: 'Closed Today',
      pillType: 'closed',
      monthDay: '08-15'
    }
  };

  /* ── Detect ─────────────────────────────────────────────── */
  function detect() {
    var today = todayIST(), md = todayMD(), k, f;
    for (k in F) {
      if (!F.hasOwnProperty(k)) continue;
      f = F[k];
      if (f.monthDay && f.monthDay === md) return { key: k, info: f };
      if (f.dates) for (var i = 0; i < f.dates.length; i++)
        if (f.dates[i] === today) return { key: k, info: f };
    }
    return null;
  }

  var det = detect();
  if (!det) return;

  var KEY  = det.key;
  var INFO = det.info;

  /* Global flag — script.js checks this to skip updateStatus() */
  window._fstActive = det;

  /* Apply theme attribute before first paint */
  document.documentElement.setAttribute('data-festival', KEY);

  /* ── Inject ambient page overlay ────────────────────────────
   *
   *  WHY JS INJECTION:
   *  `body::before` with z-index:-1 is invisible in most browsers
   *  because body{overflow-x:hidden} creates a stacking context —
   *  z-index:-1 children go behind the body background, not above it.
   *
   *  Injecting a real <div> as body's first child with z-index:1
   *  and pointer-events:none bypasses this entirely.
   * ──────────────────────────────────────────────────────── */
  function injectOverlay() {
    var overlay = document.createElement('div');
    overlay.className = 'fst-page-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    /* Insert as very first child of body */
    if (document.body.firstChild) {
      document.body.insertBefore(overlay, document.body.firstChild);
    } else {
      document.body.appendChild(overlay);
    }
  }

  /* ── SVG helper ─────────────────────────────────────────── */
  function svgEl(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var a in attrs) if (attrs.hasOwnProperty(a)) el.setAttribute(a, attrs[a]);
    return el;
  }

  /* ── Decorations ────────────────────────────────────────── */
  function buildEidDecor() {
    var bg = document.createElement('div');
    bg.className = 'fst-bg';
    bg.setAttribute('aria-hidden', 'true');

    var wrap = document.createElement('div');
    wrap.className = 'fst-crescent-wrap';
    wrap.setAttribute('aria-hidden', 'true');
    var svg = svgEl('svg', { viewBox:'0 0 100 100', class:'fst-crescent-svg', 'aria-hidden':'true' });
    svg.appendChild(svgEl('circle', { cx:'62',cy:'50',r:'34', fill:'rgba(200,160,50,0.06)' }));
    svg.appendChild(svgEl('path', { d:'M 62 18 A 32 32 0 1 1 62 82 A 22 22 0 1 0 62 18 Z', fill:'#e8c060' }));
    svg.appendChild(svgEl('path', { d:'M 58 24 A 26 26 0 0 1 58 76',
      fill:'none', stroke:'rgba(255,240,180,0.38)', 'stroke-width':'2', 'stroke-linecap':'round' }));
    wrap.appendChild(svg);
    bg.appendChild(wrap);

    var stars = [
      {l:'6%', t:'18%',s:2.5,op1:.15,op2:.85,dx:3, dy:-4, td:22,tt:4.2,dl:0   },
      {l:'12%',t:'72%',s:1.8,op1:.10,op2:.70,dx:-3,dy:-3, td:19,tt:3.5,dl:.8  },
      {l:'22%',t:'38%',s:3.0,op1:.20,op2:.95,dx:4, dy:-5, td:25,tt:5.0,dl:1.5 },
      {l:'31%',t:'82%',s:1.5,op1:.08,op2:.60,dx:-4,dy:-2, td:20,tt:3.2,dl:.3  },
      {l:'38%',t:'22%',s:2.2,op1:.12,op2:.80,dx:5, dy:-6, td:23,tt:4.8,dl:2.1 },
      {l:'47%',t:'65%',s:2.8,op1:.18,op2:.90,dx:-5,dy:-4, td:21,tt:4.0,dl:1.0 },
      {l:'55%',t:'15%',s:1.6,op1:.10,op2:.65,dx:3, dy:-3, td:18,tt:3.8,dl:.5  },
      {l:'17%',t:'52%',s:1.4,op1:.08,op2:.55,dx:4, dy:-2, td:17,tt:3.0,dl:.7  },
      {l:'43%',t:'88%',s:2.4,op1:.15,op2:.80,dx:-2,dy:-4, td:26,tt:4.5,dl:2.4 },
      {l:'28%',t:'10%',s:1.8,op1:.10,op2:.68,dx:5, dy:-3, td:20,tt:3.6,dl:1.2 },
      {l:'52%',t:'42%',s:2.6,op1:.16,op2:.88,dx:-4,dy:-6, td:22,tt:4.8,dl:.4  },
      {l:'9%', t:'88%',s:1.2,op1:.08,op2:.50,dx:2, dy:-2, td:16,tt:2.8,dl:1.6 }
    ];
    stars.forEach(function (s) {
      var el = document.createElement('div');
      el.className = 'fst-star';
      el.style.cssText =
        'left:'+s.l+';top:'+s.t+';width:'+s.s+'px;height:'+s.s+'px;' +
        '--op-min:'+s.op1+';--op-max:'+s.op2+';' +
        '--dx:'+s.dx+'px;--dy:'+s.dy+'px;' +
        '--td:'+s.td+'s;--tt:'+s.tt+'s;' +
        '--delay:'+s.dl+'s;--delay2:'+(s.dl+.3)+'s;';
      bg.appendChild(el);
    });
    return bg;
  }

  function buildHoliDecor() {
    var bg = document.createElement('div');
    bg.className = 'fst-bg';
    bg.setAttribute('aria-hidden', 'true');
    var blobs = [
      {color:'#ff3030',size:22,l:2,  blur:9, td:3.2,dl:0   },
      {color:'#ff7700',size:16,l:9,  blur:7, td:2.8,dl:.35 },
      {color:'#ffdd00',size:28,l:16, blur:11,td:3.8,dl:.7  },
      {color:'#44ee44',size:18,l:24, blur:8, td:3.0,dl:1.05},
      {color:'#00ccff',size:24,l:31, blur:10,td:3.5,dl:.25 },
      {color:'#8844ff',size:20,l:39, blur:9, td:3.3,dl:.8  },
      {color:'#ff44cc',size:26,l:46, blur:11,td:4.0,dl:1.3 },
      {color:'#ff5500',size:14,l:54, blur:6, td:2.6,dl:.5  },
      {color:'#aaff44',size:22,l:61, blur:9, td:3.4,dl:.15 },
      {color:'#4466ff',size:18,l:68, blur:8, td:2.9,dl:.9  },
      {color:'#ff3333',size:30,l:75, blur:12,td:4.2,dl:.6  },
      {color:'#ffcc00',size:16,l:82, blur:7, td:2.7,dl:1.1 },
      {color:'#44ffcc',size:24,l:88, blur:10,td:3.6,dl:.4  },
      {color:'#cc44ff',size:20,l:94, blur:8, td:3.1,dl:1.4 }
    ];
    blobs.forEach(function (b, i) {
      var el = document.createElement('div');
      el.className = 'fst-blob';
      el.style.cssText =
        'left:'+b.l+'%;width:'+b.size+'px;height:'+b.size+'px;' +
        'background:'+b.color+';--blur:'+b.blur+'px;' +
        '--rot:'+(i*17)+'deg;--td:'+b.td+'s;--delay:'+b.dl+'s;';
      bg.appendChild(el);
    });
    return bg;
  }

  function buildChakra() {
    var wrap = document.createElement('div');
    wrap.className = 'fst-chakra-wrap';
    wrap.setAttribute('aria-hidden', 'true');
    var svg = svgEl('svg', { viewBox:'0 0 100 100' });
    svg.appendChild(svgEl('circle',{cx:'50',cy:'50',r:'46',fill:'none',stroke:'#003580','stroke-width':'3.2'}));
    svg.appendChild(svgEl('circle',{cx:'50',cy:'50',r:'11',fill:'none',stroke:'#003580','stroke-width':'1.8'}));
    svg.appendChild(svgEl('circle',{cx:'50',cy:'50',r:'4.5',fill:'#003580'}));
    for (var i = 0; i < 24; i++) {
      var a = (i*15)*Math.PI/180, a1=a-.2, a2=a+.2, tr=41;
      svg.appendChild(svgEl('line',{
        x1:(50+12*Math.cos(a)).toFixed(2),y1:(50+12*Math.sin(a)).toFixed(2),
        x2:(50+44*Math.cos(a)).toFixed(2),y2:(50+44*Math.sin(a)).toFixed(2),
        stroke:'#003580','stroke-width':'1.4','stroke-linecap':'round'
      }));
      svg.appendChild(svgEl('path',{
        d:'M'+(50+44*Math.cos(a)).toFixed(1)+','+(50+44*Math.sin(a)).toFixed(1)+
          ' L'+(50+tr*Math.cos(a1)).toFixed(1)+','+(50+tr*Math.sin(a1)).toFixed(1)+
          ' L'+(50+tr*Math.cos(a2)).toFixed(1)+','+(50+tr*Math.sin(a2)).toFixed(1)+' Z',
        fill:'#003580'
      }));
    }
    wrap.appendChild(svg);
    return wrap;
  }

  function buildRibbon() {
    var r = document.createElement('div');
    r.className = 'fst-ribbon';
    r.setAttribute('aria-hidden', 'true');
    ['saffron','white','green'].forEach(function (c) {
      var s = document.createElement('div');
      s.className = 'fst-ribbon-'+c;
      r.appendChild(s);
    });
    return r;
  }

  function buildConfetti() {
    var bg = document.createElement('div');
    bg.className = 'fst-bg';
    bg.setAttribute('aria-hidden', 'true');
    var colors = ['#FF9933','#f5f5f5','#138808'];
    for (var i = 0; i < 18; i++) {
      var p = document.createElement('div');
      p.className = 'fst-confetti';
      p.style.cssText =
        'left:'+(2+i*5.5)+'%;' +
        '--w:'+(3+(i%5)*1.5)+'px;--h:'+(7+(i%4)*3)+'px;' +
        'background:'+colors[i%3]+';' +
        '--spin:'+(280+i*26)+'deg;' +
        '--delay:'+(i*.16)+'s;--td:'+(2.0+(i%5)*.4)+'s;';
      bg.appendChild(p);
    }
    return bg;
  }

  /* ── Build banner ───────────────────────────────────────── */
  function buildBanner() {
    var el = document.createElement('div');
    el.id        = 'fst-banner';
    el.className = 'fst-' + KEY;
    el.setAttribute('role',       'region');
    el.setAttribute('aria-label', INFO.label + ' \u2014 clinic notice');
    el.setAttribute('tabindex',   '0');

    if      (KEY==='eid-fitr'||KEY==='eid-adha') el.appendChild(buildEidDecor());
    else if (KEY==='holi')                        el.appendChild(buildHoliDecor());
    else if (KEY==='republic')   { el.appendChild(buildRibbon()); el.appendChild(buildChakra()); }
    else if (KEY==='independence'){ el.appendChild(buildRibbon()); el.appendChild(buildConfetti()); }

    var inner = document.createElement('div');
    inner.className = 'fst-inner';

    var text = document.createElement('div');
    text.className = 'fst-text';

    var g = document.createElement('strong');
    g.className   = 'fst-greeting';
    g.textContent = INFO.greeting;

    var s = document.createElement('span');
    s.className   = 'fst-sub';
    s.textContent = INFO.sub;

    text.appendChild(g); text.appendChild(s);

    var pill = document.createElement('div');
    pill.className = 'fst-pill fst-pill--' + INFO.pillType;
    pill.setAttribute('aria-label', INFO.statusLabel);

    var dot = document.createElement('span');
    dot.className = 'fst-dot';
    dot.setAttribute('aria-hidden', 'true');

    var lbl = document.createElement('span');
    lbl.className   = 'fst-status';
    lbl.textContent = INFO.statusLabel;

    pill.appendChild(dot); pill.appendChild(lbl);
    inner.appendChild(text); inner.appendChild(pill);
    el.appendChild(inner);
    return el;
  }

  /* ── Hero badge sync ────────────────────────────────────────
   *  Root fix: script.js's updateStatus() returns early when
   *  window._fstActive is set. This MO is a safety net only.
   * ──────────────────────────────────────────────────────── */
  function syncBadge() {
    function applyBadge() {
      var dot  = document.getElementById('sdot');
      var text = document.getElementById('stxt');
      if (!dot || !text) return;

      if (INFO.pillType === 'halfday') {
        dot.className = 'sdot';
        dot.style.cssText = 'background:#f59e0b;box-shadow:0 0 8px rgba(245,158,11,0.6)';
      } else {
        dot.className = 'sdot closed';
        dot.removeAttribute('style');
      }
      if (text.textContent !== INFO.badgeText) text.textContent = INFO.badgeText;
    }

    setTimeout(function () {
      applyBadge();
      if (typeof MutationObserver === 'undefined') return;

      var stxt = document.getElementById('stxt');
      var sdot = document.getElementById('sdot');
      if (!stxt) return;

      var busy = false;

      new MutationObserver(function () {
        if (busy) return;
        if (stxt.textContent !== INFO.badgeText) {
          busy = true; applyBadge();
          setTimeout(function () { busy = false; }, 80);
        }
      }).observe(stxt, { childList:true, characterData:true, subtree:true });

      if (sdot) {
        var exp = INFO.pillType === 'halfday' ? 'sdot' : 'sdot closed';
        new MutationObserver(function () {
          if (busy) return;
          if (sdot.className !== exp) {
            busy = true; applyBadge();
            setTimeout(function () { busy = false; }, 80);
          }
        }).observe(sdot, { attributes:true, attributeFilter:['class','style'] });
      }
    }, 360);
  }

  /* ── Show when entry screen leaves ─────────────────────── */
  function showWhenReady(banner) {
    function show() {
      setTimeout(function () {
        banner.classList.add('fst-visible');
        /* Blur activates after entrance finishes */
        setTimeout(function () { banner.classList.add('fst-settled'); }, 750);
      }, 130);
    }

    var entry = document.getElementById('entry');
    if (!entry) { show(); return; }

    if (typeof MutationObserver !== 'undefined') {
      var mo = new MutationObserver(function (muts) {
        muts.forEach(function (m) {
          m.removedNodes.forEach(function (n) {
            if (n.id === 'entry') { mo.disconnect(); show(); }
          });
        });
      });
      mo.observe(document.body, { childList:true });
    } else {
      setTimeout(show, 7500);
    }
  }

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    /* 1. Inject ambient page overlay (bypasses body stacking context) */
    injectOverlay();

    /* 2. Build and insert banner pill */
    var banner = buildBanner();
    /* Insert after overlay but before other content */
    var overlay = document.querySelector('.fst-page-overlay');
    if (overlay && overlay.nextSibling) {
      document.body.insertBefore(banner, overlay.nextSibling);
    } else {
      document.body.appendChild(banner);
    }

    /* 3. Sync hero badge */
    syncBadge();

    /* 4. Animate in */
    showWhenReady(banner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
