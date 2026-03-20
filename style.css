/* ============================================================
   AL-SHIFA CLINIC — style.css  v5.0  PRODUCTION
   Clean consolidated build — all conflicts resolved
   ============================================================ */

:root {
  --sp1:4px; --sp2:8px; --sp3:16px; --sp4:24px;
  --sp5:32px; --sp6:48px; --sp7:64px; --sp8:96px; --sp9:128px;
  --r1:8px; --r2:12px; --r3:16px; --r4:24px; --rF:9999px;
  --mw:1200px; --pad:clamp(16px,5vw,56px); --nav-h:72px;
  --fs-2xs:.625rem; --fs-xs:.75rem; --fs-sm:.875rem;
  --fs-md:1rem; --fs-lg:1.125rem; --fs-xl:1.25rem;
  --fs-2xl:1.5rem; --fs-3xl:2rem; --fs-4xl:2.5rem;
  --lh-tight:1.2; --lh-snug:1.35; --lh-normal:1.6;
  --lh-relaxed:1.75; --lh-loose:1.9;
  --easeOut:cubic-bezier(0.22,1,0.36,1);
  --easeSpring:cubic-bezier(0.34,1.56,0.64,1);
  --easeInOut:cubic-bezier(0.4,0,0.2,1);
  --t-micro:150ms; --t-base:300ms; --t-smooth:400ms; --t-reveal:600ms;
  --bg0:#070a10; --bg1:#0a0e18; --bg2:#0e1422; --bg3:#12192e;
  --surf:#141d30; --surf2:#1a2540;
  --bd:rgba(255,255,255,0.06); --bd2:rgba(255,255,255,0.11);
  --tx1:#edf1f7; --tx2:#b0c4d8; --tx3:#5a6e82;
  --gold:#c8a85a; --goldD:rgba(200,168,90,0.14); --goldB:rgba(200,168,90,0.30);
  --red:#9b1e1e; --redD:rgba(155,30,30,0.18);
  --sh1:0 2px 8px rgba(0,0,0,0.35);
  --sh2:0 8px 32px rgba(0,0,0,0.45);
  --sh3:0 24px 72px rgba(0,0,0,0.55);
  --sh4:0 32px 80px rgba(0,0,0,0.60);
  --gradGold:linear-gradient(135deg,#a87030,#dfc07a,#a87030);
  --gradBrand:linear-gradient(135deg,#9b1e1e,#c8a85a,#9b1e1e);
  --gradHero:linear-gradient(160deg,#060910 0%,#0d1626 55%,#060910 100%);
  --smartbar-h:68px;
}

[data-theme="light"] {
  --bg0:#f0f4fa; --bg1:#e8edf7; --bg2:#dde5f3; --bg3:#d4ddef;
  --surf:#ffffff; --surf2:#f4f7fd;
  --bd:rgba(0,0,0,0.08); --bd2:rgba(0,0,0,0.15);
  --tx1:#07101e; --tx2:#2c4060; --tx3:#5a6e82;
  --gold:#7a5010; --goldD:rgba(122,80,16,0.10); --goldB:rgba(122,80,16,0.25);
  --red:#861010; --redD:rgba(134,16,16,0.09);
  --sh1:0 2px 8px rgba(0,0,0,0.06); --sh2:0 8px 32px rgba(0,0,0,0.09);
  --sh3:0 24px 72px rgba(0,0,0,0.12); --sh4:0 32px 80px rgba(0,0,0,0.15);
  --gradGold:linear-gradient(135deg,#6a4008,#b88020,#6a4008);
  --gradBrand:linear-gradient(135deg,#861010,#b88020,#861010);
  --gradHero:linear-gradient(160deg,#e8edf7 0%,#f0f4fa 55%,#e8edf7 100%);
}

[data-theme="light"] #hero { background:var(--gradHero); }
[data-theme="light"] #trust { background:linear-gradient(160deg,#0c1525 0%,#172238 50%,#0c1525 100%); }

@media (prefers-reduced-motion:reduce) {
  *,*::before,*::after {
    animation-duration:0.01ms !important; animation-delay:0ms !important;
    animation-iteration-count:1 !important; transition-duration:0.01ms !important;
    scroll-behavior:auto !important;
  }
  .htitle,.hdesc,.hacts,.hbadge,.scrollhint {
    opacity:1 !important; transform:none !important; animation:none !important;
  }
  .underline-reveal::after { width:100% !important; transition:none !important; }
  .typing-line { width:auto !important; overflow:visible !important; white-space:normal !important; border-right:none !important; animation:none !important; }
  .soft-pulse,.doccard.rv.vis .docname,.grule.vis { animation:none !important; }
  .smartbar { animation:none !important; transform:translateY(0) !important; }
}

*,*::before,*::after { margin:0; padding:0; box-sizing:border-box; }

html {
  font-size:16px; scroll-behavior:smooth; scroll-padding-top:var(--nav-h);
  -webkit-text-size-adjust:100%; text-size-adjust:100%;
  text-underline-offset:3px; overscroll-behavior-y:contain;
}
::-webkit-scrollbar { width:4px; }
::-webkit-scrollbar-track { background:var(--bg0); }
::-webkit-scrollbar-thumb { background:var(--red); border-radius:var(--rF); }
::-webkit-scrollbar-thumb:hover { background:var(--gold); }

body {
  font-family:'Outfit',sans-serif; background:var(--bg0); color:var(--tx1);
  line-height:var(--lh-normal); overflow-x:hidden;
  -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
  text-rendering:optimizeLegibility; padding-bottom:var(--smartbar-h);
  transition:background .4s var(--easeInOut),color .4s var(--easeInOut);
}
@media (pointer:coarse) { body,* { cursor:auto !important; } }
body.con { cursor:none; }

:focus-visible {
  outline:none;
  box-shadow:0 0 0 2px var(--bg0),0 0 0 4px rgba(200,168,90,.5);
  border-radius:var(--r1);
}
::selection { background:var(--red); color:#fff; }
a { text-decoration:none; color:inherit; transition:color var(--t-base) var(--easeInOut); }
img { display:block; max-width:100%; height:auto; }
ul,ol { list-style:none; }
p { font-size:var(--fs-md); line-height:var(--lh-relaxed); color:var(--tx2); margin-bottom:var(--sp4); }
p:last-child { margin-bottom:0; }
h1,h2,h3,h4,.h1,.h2,.h3 { overflow-wrap:break-word; word-break:break-word; }

@keyframes goldmove { to { background-position:200% center; } }
@keyframes hfade    { to { opacity:1; transform:none; } }
@keyframes bshift   { 0% { background-position:200% 0; } 100% { background-position:-200% 0; } }
@keyframes bfloat   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-6px); } }
@keyframes rpulse   { 0%,100% { transform:scale(1); opacity:.6; } 50% { transform:scale(1.04); opacity:1; } }
@keyframes espin    { to { transform:rotate(360deg); } }
@keyframes elogopulse {
  0%,100% { filter:drop-shadow(0 0 16px rgba(200,168,90,.5)); transform:scale(1); }
  50%     { filter:drop-shadow(0 0 40px rgba(200,168,90,.9)); transform:scale(1.04); }
}
@keyframes barshine { 0% { transform:translateX(-100%); } 100% { transform:translateX(200%); } }
@keyframes hpulse   { 0%,100% { transform:scaleY(.45); opacity:.4; } 50% { transform:scaleY(1); opacity:1; } }
@keyframes shlpulse { 0%,100% { transform:scaleY(.4); opacity:.4; } 50% { transform:scaleY(1); opacity:1; } }
@keyframes sdotBreath {
  0%,100% { box-shadow:0 0 5px rgba(34,197,94,.4); transform:scale(1); }
  50%     { box-shadow:0 0 14px rgba(34,197,94,.75); transform:scale(1.2); }
}
@keyframes o1f { 0%,100% { transform:translate(0,0) scale(1); } 50% { transform:translate(60px,40px) scale(1.1); } }
@keyframes o2f { 0%,100% { transform:translate(0,0) scale(1); } 50% { transform:translate(-40px,60px) scale(1.15); } }
@keyframes o3f { 0%,100% { transform:translate(-50%,-50%) scale(1); } 50% { transform:translate(-50%,-60%) scale(1.2); } }
@keyframes hf1 { 0%,100% { transform:translateY(0) rotate(0deg); } 50% { transform:translateY(-18px) rotate(5deg); } }
@keyframes hf2 { 0%,100% { transform:translateY(0) rotate(0deg); } 50% { transform:translateY(-22px) rotate(-4deg); } }
@keyframes hf3 { 0%,100% { transform:translateY(0) rotate(0deg); } 50% { transform:translateY(-14px) rotate(6deg); } }
@keyframes hf4 { 0%,100% { transform:translateY(0) rotate(0deg); } 50% { transform:translateY(-20px) rotate(-5deg); } }
@keyframes raysway { 0%,100% { opacity:.4; } 50% { opacity:.9; } }
@keyframes eFlareBloom {
  0%   { opacity:0; transform:translate(-50%,-50%) scale(.85); }
  25%  { opacity:.7; transform:translate(-50%,-50%) scale(1); }
  100% { opacity:0; transform:translate(-50%,-50%) scale(1.25); }
}
@keyframes smartSlide { from { transform:translateY(110%); } to { transform:translateY(0); } }
@keyframes navFadeIn  { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
@keyframes credStar {
  0%,45% { opacity:0; transform:scale(.6) rotate(-20deg); }
  60%    { opacity:1; transform:scale(1.2) rotate(10deg); }
  80%    { opacity:.8; transform:scale(1) rotate(0); }
  100%   { opacity:0; transform:scale(.6) rotate(20deg); }
}
@keyframes waping    { 0% { transform:scale(1); opacity:.4; } 100% { transform:scale(1.08); opacity:0; } }
@keyframes ripout    { to { transform:scale(4.5); opacity:0; } }
@keyframes skelShimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
@keyframes goldGlow  { 0%,100% { filter:drop-shadow(0 0 0px rgba(200,168,90,0)); } 50% { filter:drop-shadow(0 0 16px rgba(200,168,90,.2)); } }
@keyframes orbitCW   { to { transform:rotate(360deg); } }
@keyframes orbitCCW  { to { transform:rotate(-360deg); } }
@keyframes drawUnderline { from { width:0; opacity:0; } to { width:100%; opacity:1; } }
@keyframes pulseSoft { 0%,100% { transform:scale(1); } 50% { transform:scale(1.03); } }
@keyframes typingReveal { from { width:0; } to { width:100%; } }
@keyframes cursorBlink { 0%,100% { border-right-color:rgba(155,30,30,.8); } 50% { border-right-color:transparent; } }
@keyframes meshDrift {
  0%,100% { transform:translate(0,0) scale(1); }
  33%     { transform:translate(30px,-20px) scale(1.08); }
  66%     { transform:translate(-20px,25px) scale(.95); }
}
@keyframes cardBreath {
  0%,100% { box-shadow:var(--sh3); }
  50%     { box-shadow:var(--sh3),0 0 48px rgba(200,168,90,.05); }
}
@keyframes divShimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
@keyframes scanPass { from { transform:translateX(-100%); } to { transform:translateX(200%); } }
@keyframes docNameReveal { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
@keyframes eyebrowLine { from { width:0; opacity:0; } to { width:18px; opacity:1; } }
@keyframes icoBreathe { 0%,100% { box-shadow:none; } 50% { box-shadow:0 0 12px rgba(155,30,30,.12); } }
@keyframes cinfoGlow  { 0%,100% { opacity:.55; } 50% { opacity:1; } }
@keyframes heroBreath { 0%,100% { opacity:.55; transform:scale(1); } 50% { opacity:1; transform:scale(1.04); } }

.skip-link {
  position:fixed; top:-100%; left:var(--sp3); z-index:999999;
  background:var(--gold); color:#1a0e00;
  padding:var(--sp2) var(--sp4); border-radius:var(--r1);
  font-family:'Outfit',sans-serif; font-size:var(--fs-sm); font-weight:600;
  letter-spacing:.04em; text-decoration:none; transition:top .2s var(--easeOut);
}
.skip-link:focus { top:var(--sp3); }

.cdot,.cring {
  pointer-events:none; position:fixed; border-radius:50%;
  z-index:99999; transform:translate(-50%,-50%); top:0; left:0; opacity:0;
}
.cdot { width:6px; height:6px; background:var(--gold); transition:opacity .3s,width var(--t-micro),height var(--t-micro),background var(--t-micro); }
.cring { width:36px; height:36px; border:1.5px solid rgba(200,168,90,.4); transition:opacity .3s,width .22s var(--easeOut),height .22s var(--easeOut),border-color var(--t-micro); }
body.con .cdot,body.con .cring { opacity:1; }
body.chov .cring { width:52px; height:52px; border-color:var(--gold); background:rgba(200,168,90,.06); }
body.cclk .cdot  { width:10px; height:10px; background:var(--red); }
@media (pointer:coarse) { .cdot,.cring { display:none !important; } }

#spbar {
  position:fixed; top:0; left:0; height:3px; width:0;
  background:var(--gradBrand); background-size:200%;
  z-index:9998; pointer-events:none;
  box-shadow:0 0 8px rgba(200,168,90,.4);
  transition:width .1s linear; animation:bshift 2.5s linear infinite;
}

#entry {
  position:fixed; inset:0; z-index:9999;
  display:flex; align-items:center; justify-content:center;
  overflow:hidden; cursor:pointer; perspective:1400px;
}
.ep-l,.ep-r {
  position:absolute; top:0; bottom:0; width:50%;
  background:linear-gradient(170deg,#06091a 0%,#0c1630 60%,#06091a 100%);
  will-change:transform;
}
.ep-l { left:0; transform-origin:left center; transition:transform 2.2s cubic-bezier(.16,1,.3,1); }
.ep-r { right:0; transform-origin:right center; transition:transform 2.2s cubic-bezier(.16,1,.3,1) .06s; }
.ep-l::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,rgba(200,168,90,.04),transparent 60%); }
.ep-r::after { content:''; position:absolute; inset:0; background:linear-gradient(-90deg,rgba(200,168,90,.04),transparent 60%); }
#entry.exit .ep-l { transform:rotateY(-6deg) translateX(-106%); }
#entry.exit .ep-r { transform:rotateY(6deg) translateX(106%); }
.erays { position:absolute; inset:0; pointer-events:none; overflow:hidden; z-index:1; opacity:0; transition:opacity .5s ease .2s; }
#entry.exit .erays { opacity:1; }
.eray { position:absolute; bottom:0; width:2px; border-radius:var(--rF); background:linear-gradient(to top,transparent,rgba(200,168,90,.15),transparent); filter:blur(1.5px); animation:raysway 5s ease-in-out infinite; }
.eray:nth-child(1) { left:28%; height:62%; animation-delay:0s; }
.eray:nth-child(2) { left:45%; height:85%; width:3px; opacity:.7; animation-delay:.4s; }
.eray:nth-child(3) { left:58%; height:72%; animation-delay:.8s; }
.eray:nth-child(4) { left:70%; height:54%; opacity:.5; animation-delay:1.2s; }
.eflare { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:280px; height:280px; border-radius:50%; background:radial-gradient(circle,rgba(200,168,90,.1) 0%,rgba(255,200,80,.04) 40%,transparent 70%); pointer-events:none; z-index:2; opacity:0; }
#entry.exit .eflare { animation:eFlareBloom 2.4s cubic-bezier(.16,1,.3,1) forwards; }
.einner { position:relative; z-index:3; display:flex; flex-direction:column; align-items:center; gap:var(--sp5); text-align:center; padding:0 var(--sp4); transition:opacity .55s cubic-bezier(.16,1,.3,1) .08s,transform .55s cubic-bezier(.16,1,.3,1) .08s; }
#entry.exit .einner { opacity:0; transform:translateY(-6px); }
.erings { position:absolute; inset:-60vh; pointer-events:none; display:flex; align-items:center; justify-content:center; }
.ering  { position:absolute; border-radius:50%; border:1px solid rgba(200,168,90,.07); animation:rpulse 4.5s ease-in-out infinite; }
.ering:nth-child(1) { width:260px; height:260px; animation-delay:0s; }
.ering:nth-child(2) { width:460px; height:460px; animation-delay:.6s; border-color:rgba(200,168,90,.04); }
.ering:nth-child(3) { width:680px; height:680px; animation-delay:1.2s; border-color:rgba(200,168,90,.025); }
.ering:nth-child(4) { width:920px; height:920px; animation-delay:1.8s; border-color:rgba(200,168,90,.015); }
.elogowrap { position:relative; width:180px; height:180px; display:flex; align-items:center; justify-content:center; filter:drop-shadow(0 8px 40px rgba(200,168,90,.25)); }
.elogowrap svg { position:absolute; inset:0; width:100%; height:100%; animation:espin 8s linear infinite; }
.elogowrap svg circle { fill:none; stroke:url(#eg); stroke-width:1.2; stroke-dasharray:82 218; stroke-linecap:round; }
.elogoimg { width:120px; height:auto; animation:elogopulse 3s ease-in-out infinite; }
.ename { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,6.5vw,3.8rem); font-weight:400; letter-spacing:.1em; color:#fff; line-height:var(--lh-tight); text-shadow:0 2px 30px rgba(200,168,90,.15); }
.esub  { font-family:'DM Mono',monospace; font-size:var(--fs-xs); letter-spacing:.22em; text-transform:uppercase; color:var(--gold); }
.ebarwrap { width:140px; height:2.5px; background:rgba(255,255,255,.08); border-radius:var(--rF); overflow:hidden; }
.ebar { height:100%; width:0; background:var(--gradGold); border-radius:var(--rF); position:relative; overflow:hidden; }
.ebar::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent); animation:barshine 1.1s linear infinite; }
.ehint { display:flex; flex-direction:column; align-items:center; gap:var(--sp2); font-family:'DM Mono',monospace; font-size:var(--fs-2xs); letter-spacing:.18em; text-transform:uppercase; color:rgba(255,255,255,.28); }
.ehintline { width:1px; height:32px; background:linear-gradient(to bottom,var(--gold),transparent); animation:hpulse 2.8s ease-in-out infinite; }
@media (max-width:479px) { .ering:nth-child(3),.ering:nth-child(4) { display:none; } .ename { letter-spacing:.05em; } }

nav { position:fixed; top:0; left:0; right:0; z-index:1000; padding:var(--sp5) var(--pad); display:flex; align-items:center; justify-content:space-between; gap:var(--sp4); transition:padding 0.7s var(--easeOut),background 0.7s var(--easeOut),box-shadow 0.7s var(--easeOut); }
#mainnav { animation:navFadeIn .5s cubic-bezier(.22,1,.36,1) .3s both; }
nav.stuck { padding:var(--sp3) var(--pad); background:rgba(7,10,16,.94); backdrop-filter:blur(24px) saturate(1.5); -webkit-backdrop-filter:blur(24px) saturate(1.5); border-bottom:1px solid var(--bd); box-shadow:var(--sh1); }
[data-theme="light"] nav.stuck { background:rgba(240,244,250,.96); }

.nlogo { display:flex; align-items:center; gap:var(--sp3); flex-shrink:0; }
.nlogo img { height:40px; width:auto; transition:transform var(--t-smooth) var(--easeOut); }
.nlogo:hover img { transform:scale(1.06); }
.soft-pulse { animation:pulseSoft 3.5s ease-in-out infinite; }
.nlogo:hover .soft-pulse { animation-play-state:paused; }
.nlogoname { font-family:'Cormorant Garamond',serif; font-size:var(--fs-xl); font-weight:500; letter-spacing:.03em; line-height:var(--lh-tight); display:none; background:linear-gradient(135deg,var(--gold) 0%,#f0d080 50%,var(--gold) 100%); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:goldmove 8s linear infinite; }

.nlinks { display:none; align-items:center; gap:var(--sp6); }
.nlink { font-size:var(--fs-sm); font-weight:500; letter-spacing:.05em; color:var(--tx2); padding:var(--sp2) 0; position:relative; transition:color var(--t-base) var(--easeOut); white-space:nowrap; }
.nlink::after { content:''; position:absolute; bottom:-1px; left:50%; right:50%; height:1px; background:var(--gold); box-shadow:0 1px 8px rgba(200,168,90,.3); transition:left var(--t-base) var(--easeOut),right var(--t-base) var(--easeOut); }
.nlink:hover { color:var(--tx1); }
.nlink.active { color:var(--gold); }
.nlink:hover::after,.nlink.active::after { left:0; right:0; }

.nav-cta { display:none; align-items:center; gap:var(--sp2); padding:var(--sp2) var(--sp4); background:var(--red); color:#fff; border-radius:var(--rF); font-family:'Outfit',sans-serif; font-size:var(--fs-sm); font-weight:600; letter-spacing:.04em; white-space:nowrap; box-shadow:0 3px 0 rgba(0,0,0,.4),0 6px 16px rgba(155,30,30,.2),inset 0 1px 0 rgba(255,255,255,.08); transition:transform var(--t-micro) var(--easeOut),box-shadow var(--t-micro),color var(--t-micro); }
.nav-cta i { width:14px; height:14px; flex-shrink:0; }
.nav-cta:hover { transform:translateY(-2px); color:#fff; box-shadow:0 5px 0 rgba(0,0,0,.4),0 12px 28px rgba(155,30,30,.35),inset 0 1px 0 rgba(255,255,255,.1); }

.nham { display:flex; flex-direction:column; gap:var(--sp1); background:transparent; border:none; cursor:pointer; padding:var(--sp2); z-index:1001; -webkit-tap-highlight-color:transparent; }
.nhaml { width:22px; height:1.5px; background:var(--tx1); border-radius:var(--rF); transition:transform var(--t-base) var(--easeOut),opacity var(--t-base); }
.nham.open .nhaml:nth-child(1) { transform:translateY(5.5px) rotate(45deg); }
.nham.open .nhaml:nth-child(2) { opacity:0; transform:scaleX(0); }
.nham.open .nhaml:nth-child(3) { transform:translateY(-5.5px) rotate(-45deg); }

.mobmenu { position:fixed; inset:0; z-index:999; background:rgba(6,8,18,.98); backdrop-filter:blur(28px); -webkit-backdrop-filter:blur(28px); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:var(--sp7); opacity:0; visibility:hidden; transition:opacity var(--t-base) var(--easeOut),visibility var(--t-base); }
[data-theme="light"] .mobmenu { background:rgba(236,242,250,.98); }
.mobmenu.open { opacity:1; visibility:visible; }
.moblinks { display:flex; flex-direction:column; align-items:center; gap:var(--sp5); }
.moblink { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,8vw,2.8rem); font-weight:400; letter-spacing:.04em; color:var(--tx2); transform:translateY(24px); opacity:0; transition:color var(--t-base) var(--easeOut),opacity var(--t-reveal) var(--easeOut),transform var(--t-reveal) var(--easeOut); }
.mobmenu.open .moblink { opacity:1; transform:none; }
.mobmenu.open .moblink:nth-child(1) { transition-delay:.04s; }
.mobmenu.open .moblink:nth-child(2) { transition-delay:.10s; }
.mobmenu.open .moblink:nth-child(3) { transition-delay:.16s; }
.mobmenu.open .moblink:nth-child(4) { transition-delay:.22s; }
.moblink:hover { color:var(--gold); }
.mobacts { display:flex; gap:var(--sp3); flex-wrap:wrap; justify-content:center; padding:0 var(--sp4); }
.mobacts .btn { opacity:0; transform:translateY(12px); transition:opacity var(--t-reveal) var(--easeOut),transform var(--t-reveal) var(--easeOut); }
.mobmenu.open .mobacts .btn { opacity:1; transform:none; }
.mobmenu.open .mobacts .btn:nth-child(1) { transition-delay:.28s; }
.mobmenu.open .mobacts .btn:nth-child(2) { transition-delay:.34s; }

.ndots { position:fixed; right:var(--sp4); top:50%; transform:translateY(-50%); display:none; flex-direction:column; gap:var(--sp3); z-index:999; }
.ndot { appearance:none; -webkit-appearance:none; border:none; padding:0; width:7px; height:7px; border-radius:50%; background:rgba(200,168,90,.22); cursor:pointer; position:relative; transition:background var(--t-base) var(--easeOut),transform var(--t-base) var(--easeSpring),box-shadow var(--t-smooth); }
.ndot::after { content:''; position:absolute; inset:-5px; border-radius:50%; border:1px solid transparent; transition:border-color var(--t-base) var(--easeOut),transform var(--t-base) var(--easeSpring); }
.ndot:hover { background:rgba(200,168,90,.45); transform:scale(1.3); }
.ndot.active { background:var(--gold); transform:scale(1.35); box-shadow:0 0 10px rgba(200,168,90,.4); }
.ndot.active::after { border-color:rgba(200,168,90,.38); transform:scale(1.6); }

.wrap { max-width:var(--mw); margin:0 auto; padding:0 var(--pad); }
section { position:relative; overflow:hidden; isolation:isolate; }

.sdiv { padding:var(--sp5) 0; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.sdiv::after { content:''; height:1.5px; width:0; border-radius:var(--rF); background:linear-gradient(90deg,transparent,rgba(200,168,90,0.45),rgba(155,30,30,0.35),rgba(200,168,90,0.45),transparent); background-size:200% auto; filter:blur(0.6px); transition:width 1.2s var(--easeOut); }
.sdiv.vis::after { width:55%; animation:divShimmer 14s ease-in-out 1.4s infinite; }

.eyebrow { display:inline-flex; align-items:center; gap:var(--sp2); font-family:'DM Mono',monospace; font-size:var(--fs-xs); letter-spacing:.22em; text-transform:uppercase; color:var(--gold); margin-bottom:var(--sp4); }
/* Eyebrow always leads h2 — negative delay so it fades in before its sibling heading */
.eyebrow.rv { transition-delay:-0.06s; }
.eyebrow::before { content:''; display:block; width:0; height:1px; background:var(--gold); }
.eyebrow.rv.vis::before { animation:eyebrowLine .9s var(--easeOut) forwards; }
.eyebrow.ctr { justify-content:center; }
.eyebrow.ctr::before { display:none; }

.grule { height:1.5px; width:0; background:var(--gradGold); border-radius:var(--rF); margin-bottom:var(--sp5); transition:width 1.2s var(--easeOut); }
.grule.vis { width:56px; background-size:200% 100%; animation:goldmove 6s linear 1.4s infinite; }
.grule.ctr { margin:0 auto var(--sp4); }

.h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.8rem,9vw,6.5rem); font-weight:300; line-height:1.04; letter-spacing:-.03em; color:var(--tx1); }
.h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,5vw,3.6rem); font-weight:400; line-height:1.12; letter-spacing:-.02em; color:var(--tx1); margin-bottom:var(--sp4); }
.h3 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.2rem,3vw,1.45rem); font-weight:500; line-height:var(--lh-snug); letter-spacing:-.01em; color:var(--tx1); margin-bottom:var(--sp3); }

.tgold { background:var(--gradGold); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:goldmove 5s linear infinite; display:inline; }

.underline-reveal { position:relative; display:inline-block; }
.underline-reveal::after { content:''; position:absolute; left:0; bottom:-5px; width:0; height:2px; background:linear-gradient(90deg,var(--red),var(--gold)); background-size:200% auto; border-radius:var(--rF); transition:width .7s var(--easeOut); animation:goldmove 4s linear infinite; }
.underline-reveal:hover::after { width:100%; }
/* Triggered by own .vis OR parent's .vis (when span is inside .rv heading) */
.underline-reveal.rv.vis::after,
.rv.vis .underline-reveal::after { width:100%; transition-delay:.3s; }

.rv { opacity:0; transition:opacity 0.75s var(--easeOut),transform 0.75s var(--easeOut); will-change:opacity,transform; }
.rv.up    { transform:translateY(20px); }
.rv.left  { transform:translateX(-20px); }
.rv.right { transform:translateX(20px); }
.rv.sc    { transform:scale(.96); }
.rv.vis   { opacity:1 !important; transform:none !important; will-change:auto; }
.d1 { transition-delay:.08s; } .d2 { transition-delay:.16s; } .d3 { transition-delay:.24s; }
.d4 { transition-delay:.32s; } .d5 { transition-delay:.40s; } .d6 { transition-delay:.48s; }
@media (max-width:767px) { .rv { transition-duration:0.55s; } .rv.up { transform:translateY(14px); } .rv.left { transform:translateX(-14px); } .rv.right { transform:translateX(14px); } }

.btn { display:inline-flex; align-items:center; justify-content:center; gap:var(--sp2); padding:var(--sp3) var(--sp5); font-family:'Outfit',sans-serif; font-size:var(--fs-sm); font-weight:500; letter-spacing:.05em; border-radius:var(--r2); border:none; cursor:pointer; position:relative; overflow:hidden; white-space:nowrap; line-height:var(--lh-tight); min-height:44px; transition:transform 0.35s var(--easeOut),box-shadow 0.35s var(--easeOut),background 0.35s var(--easeOut),border-color 0.35s var(--easeOut),color 0.35s var(--easeOut); }
@media (pointer:fine) { .btn { cursor:none; } }
.btn i { width:14px; height:14px; flex-shrink:0; transition:transform var(--t-base) var(--easeOut); }
.btn:hover i { transform:translateX(4px); }
.btn-p { background:linear-gradient(170deg,#b52020 0%,#9b1e1e 55%,#7a1515 100%); color:#fff; box-shadow:0 4px 0 rgba(0,0,0,.5),0 8px 28px rgba(155,30,30,.25),inset 0 1px 0 rgba(255,255,255,.1); }
.btn-p:hover { transform:translateY(-2px); box-shadow:0 6px 0 rgba(0,0,0,.45),0 16px 40px rgba(155,30,30,.4),inset 0 1px 0 rgba(255,255,255,.12); }
.btn-p:active { transform:translateY(1px); box-shadow:0 2px 0 rgba(0,0,0,.5); }
.btn-p.glow { box-shadow:0 4px 0 rgba(0,0,0,.5),0 0 50px rgba(155,30,30,.65),0 0 100px rgba(155,30,30,.25); }
.btn-o { background:transparent; color:var(--tx1); border:1px solid var(--bd2); }
.btn-o:hover { border-color:var(--gold); color:var(--gold); background:var(--goldD); }
#hero .btn-o { color:rgba(255,255,255,.85); border-color:rgba(255,255,255,.22); }
#hero .btn-o:hover { color:var(--gold); border-color:var(--gold); background:rgba(200,168,90,.12); }
.mag { display:inline-block; }
.ripple { position:absolute; border-radius:50%; background:rgba(255,255,255,.22); transform:scale(0); pointer-events:none; animation:ripout .65s linear forwards; }

#hero { min-height:100svh; display:flex; align-items:center; background:var(--gradHero); padding:clamp(100px,14vh,140px) 0 clamp(var(--sp7),10vh,var(--sp9)); overflow:hidden; }
.heroBg { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
.orb { position:absolute; border-radius:50%; filter:blur(90px); will-change:transform; }
.o1 { width:clamp(300px,50vw,600px); height:clamp(300px,50vw,600px); background:radial-gradient(circle,rgba(155,30,30,.16) 0%,transparent 70%); top:-180px; left:-140px; animation:o1f 24s ease-in-out infinite; }
.o2 { width:clamp(250px,40vw,500px); height:clamp(250px,40vw,500px); background:radial-gradient(circle,rgba(200,168,90,.09) 0%,transparent 70%); bottom:-80px; right:-100px; animation:o2f 30s ease-in-out infinite; }
.o3 { width:280px; height:280px; background:radial-gradient(circle,rgba(200,168,90,.07) 0%,transparent 70%); top:40%; left:52%; animation:o3f 20s ease-in-out infinite; }
.hgrid { position:absolute; inset:0; pointer-events:none; opacity:.018; background-image:linear-gradient(rgba(200,168,90,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,168,90,1) 1px,transparent 1px); background-size:72px 72px; mask-image:radial-gradient(ellipse 80% 80% at 50% 0%,black 0%,transparent 100%); -webkit-mask-image:radial-gradient(ellipse 80% 80% at 50% 0%,black 0%,transparent 100%); }
#ptcl { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:1; }
.hicons { position:absolute; inset:0; pointer-events:none; z-index:1; }
.hicon { position:absolute; width:52px; height:52px; display:flex; align-items:center; justify-content:center; border-radius:var(--r3); background:rgba(255,255,255,.025); border:1px solid rgba(200,168,90,.1); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px); box-shadow:0 4px 16px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.04); }
.hi1 { top:18%; left:7%; animation:hf1 8s ease-in-out infinite; }
.hi2 { top:12%; right:10%; animation:hf2 10s ease-in-out infinite; }
.hi3 { bottom:25%; left:4%; animation:hf3 9s ease-in-out infinite; display:none; }
.hi4 { bottom:18%; right:7%; animation:hf4 7s ease-in-out infinite; display:none; }
@media (pointer:coarse) {
  #hero::after { content:''; position:absolute; inset:0; pointer-events:none; z-index:1; background:radial-gradient(ellipse 70% 50% at 18% 65%,rgba(155,30,30,.1) 0%,transparent 65%),radial-gradient(ellipse 55% 40% at 82% 28%,rgba(200,168,90,.07) 0%,transparent 65%); animation:heroBreath 7s ease-in-out infinite; }
  .hi1,.hi2 { display:flex; }
}
.heroin { position:relative; z-index:2; }
.hbadge { display:inline-flex; align-items:center; gap:var(--sp2); padding:var(--sp2) var(--sp4); background:rgba(255,255,255,.04); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.09); border-radius:var(--rF); font-family:'DM Mono',monospace; font-size:var(--fs-xs); letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.55); margin-bottom:var(--sp4); opacity:0; transform:translateY(-8px); animation:hfade .8s 2.2s cubic-bezier(.22,1,.36,1) forwards; }
.sdot { width:6px; height:6px; border-radius:50%; flex-shrink:0; }
.sdot.open   { background:#22c55e; box-shadow:0 0 8px rgba(34,197,94,.6); animation:sdotBreath 2.8s ease-in-out infinite; }
.sdot.closed { background:#ef4444; box-shadow:0 0 8px rgba(239,68,68,.6); }
#stxt { transition:opacity var(--t-micro) ease; }
#stxt.fading { opacity:0; }
.htitle { margin-bottom:var(--sp4); color:#fff; opacity:0; transform:translateY(28px); animation:hfade 1.1s 2.4s cubic-bezier(.22,1,.36,1) forwards; text-shadow:0 2px 40px rgba(0,0,0,.45); }
.hdesc  { font-size:clamp(.95rem,2vw,1.1rem); line-height:var(--lh-loose); color:rgba(255,255,255,.62); max-width:560px; margin-bottom:var(--sp6); opacity:0; transform:translateY(20px); animation:hfade .9s 2.8s cubic-bezier(.22,1,.36,1) forwards; }
.hacts  { display:flex; align-items:center; gap:var(--sp4); flex-wrap:wrap; opacity:0; transform:translateY(16px); animation:hfade .8s 3.1s cubic-bezier(.22,1,.36,1) forwards; }
.scrollhint { position:absolute; bottom:var(--sp6); left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:var(--sp2); font-family:'DM Mono',monospace; font-size:var(--fs-2xs); letter-spacing:.18em; text-transform:uppercase; color:rgba(255,255,255,.35); z-index:2; opacity:0; animation:hfade .8s 3.5s ease forwards; }
.shl { width:1px; height:38px; background:linear-gradient(to bottom,var(--gold),transparent); animation:shlpulse 2.4s ease-in-out infinite; }

.sect-transition { display:block; line-height:0; overflow:hidden; margin-bottom:-1px; pointer-events:none; }
.sect-transition svg { display:block; width:100%; height:48px; }
.st-fill-services,.st-fill-contact { fill:var(--bg0); }
.st-about  { background:var(--bg1); }
.st-doctor { background:var(--bg1); }
[data-theme="light"] .st-fill-services,[data-theme="light"] .st-fill-contact { fill:var(--bg0); }
[data-theme="light"] .st-about,[data-theme="light"] .st-doctor { background:var(--bg1); }

#about { background:var(--bg1); padding:var(--sp7) 0; position:relative; isolation:isolate; }
#about::before { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(ellipse 55% 45% at 15% 20%,rgba(200,168,90,.05) 0%,transparent 65%),radial-gradient(ellipse 45% 55% at 85% 75%,rgba(155,30,30,.04) 0%,transparent 65%); animation:meshDrift 28s ease-in-out infinite; }
#about > .wrap { position:relative; z-index:1; }
.agrid { display:grid; grid-template-columns:1fr; gap:var(--sp5); align-items:start; }
.aquote { margin-top:var(--sp5); padding:var(--sp4) var(--sp5); border-left:2px solid var(--gold); background:rgba(200,168,90,.05); border-radius:0 var(--r2) var(--r2) 0; box-shadow:inset 4px 0 20px rgba(200,168,90,.04); position:relative; }
.aquote::before { content:'\201C'; position:absolute; top:-12px; left:var(--sp4); font-family:'Cormorant Garamond',serif; font-size:4rem; line-height:1; color:var(--gold); opacity:.35; pointer-events:none; user-select:none; }
.aquote p { font-family:'Cormorant Garamond',serif; font-size:clamp(1.1rem,3vw,1.35rem); font-style:italic; font-weight:400; color:var(--gold); line-height:1.45; margin:0; }
[data-theme="light"] .aquote { background:rgba(122,80,16,.06); }
.acard { position:relative; border-radius:var(--r4); background:linear-gradient(145deg,var(--surf) 0%,var(--surf2) 100%); border:1px solid var(--bd); overflow:hidden; min-height:340px; display:flex; align-items:center; justify-content:center; box-shadow:var(--sh3),inset 0 1px 0 rgba(255,255,255,.055); transition:transform var(--t-smooth) var(--easeOut),box-shadow var(--t-smooth) var(--easeOut); animation:cardBreath 7s ease-in-out infinite; }
.acard::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 30% 30%,rgba(200,168,90,.09) 0%,transparent 52%),radial-gradient(circle at 70% 70%,rgba(155,30,30,.07) 0%,transparent 52%); }
.acard:hover { transform:translateY(-4px); box-shadow:var(--sh4),0 0 60px rgba(200,168,90,.08),inset 0 1px 0 rgba(255,255,255,.08); }
.acard img { width:52%; max-width:255px; position:relative; z-index:1; filter:drop-shadow(0 20px 40px rgba(0,0,0,.3)); transition:transform .9s var(--easeOut); }
.acard:hover img { transform:scale(1.07) rotate(2deg); }
.acardsheen { position:absolute; top:0; left:-100%; width:50%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.055),transparent); transition:left .9s var(--easeOut); z-index:2; }
.acard:hover .acardsheen { left:160%; }
.acardbadge { position:absolute; bottom:var(--sp4); right:var(--sp4); z-index:3; display:flex; align-items:center; gap:var(--sp2); padding:var(--sp2) var(--sp3); background:var(--gradBrand); border-radius:var(--r2); font-size:var(--fs-2xs); font-family:'DM Mono',monospace; letter-spacing:.08em; color:#fff; box-shadow:var(--sh2); animation:bfloat 3.5s ease-in-out infinite; }
.acardbadge i { width:12px; height:12px; stroke:#fff; }

#services { background:var(--bg0); padding:var(--sp7) 0; position:relative; isolation:isolate; }
#services::before { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(ellipse 60% 50% at 80% 15%,rgba(155,30,30,.055) 0%,transparent 65%),radial-gradient(ellipse 50% 60% at 10% 80%,rgba(200,168,90,.04) 0%,transparent 65%); animation:meshDrift 32s ease-in-out infinite reverse; }
#services > .wrap { position:relative; z-index:1; }
.svchdr { text-align:center; margin-bottom:var(--sp7); display:flex; flex-direction:column; align-items:center; }
.svchdr .h2 { text-align:center; }
.svcgrid { display:grid; grid-template-columns:1fr; gap:var(--sp4); }
.svccard { background:linear-gradient(145deg,var(--surf) 0%,var(--surf2) 100%); border:1px solid var(--bd); border-radius:var(--r4); padding:var(--sp4); position:relative; overflow:hidden; cursor:default; display:flex; flex-direction:column; box-shadow:var(--sh1),inset 0 1px 0 rgba(255,255,255,.055); transition:border-color 0.45s var(--easeOut),box-shadow 0.45s var(--easeOut),transform 0.45s var(--easeOut); }
.svccard:hover { border-color:rgba(200,168,90,.25); box-shadow:var(--sh2),0 0 0 1px rgba(200,168,90,.06),0 0 40px rgba(200,168,90,.07),inset 0 1px 0 rgba(255,255,255,.07); transform:translateY(-4px); }
.svccard::before { content:''; position:absolute; inset:0; background:radial-gradient(circle 200px at var(--cx,50%) var(--cy,50%),rgba(200,168,90,.07) 0%,transparent 100%); opacity:0; transition:opacity var(--t-base); pointer-events:none; }
.svccard:hover::before { opacity:1; }
.svccard::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--gradBrand); transform:scaleX(0); transform-origin:left; transition:transform var(--t-smooth) var(--easeOut); }
.svccard:hover::after { transform:scaleX(1); }
.svcico { width:48px; height:48px; border-radius:var(--r3); background:var(--redD); border:1px solid rgba(155,30,30,.16); display:flex; align-items:center; justify-content:center; margin-bottom:var(--sp3); flex-shrink:0; position:relative; z-index:1; transition:background var(--t-base) var(--easeOut),border-color var(--t-base),transform var(--t-base) var(--easeSpring),box-shadow var(--t-base); animation:icoBreathe 5s ease-in-out infinite; }
.svcico i { width:19px; height:19px; stroke:var(--red); stroke-width:1.7; transition:stroke var(--t-base); }
.svccard:hover .svcico { background:var(--red); border-color:var(--red); transform:scale(1.1) rotate(-4deg); box-shadow:0 4px 16px rgba(155,30,30,.35); animation:none; }
.svccard:hover .svcico i { stroke:#fff; }
.svcico.gold { background:var(--goldD); border-color:rgba(200,168,90,.16); animation:none; }
.svcico.gold i { stroke:var(--gold); }
.svccard:hover .svcico.gold { background:var(--gold); border-color:var(--gold); box-shadow:0 4px 16px rgba(200,168,90,.35); }
.svccard:hover .svcico.gold i { stroke:#1a0e00; }
.svctitle { font-family:'Cormorant Garamond',serif; font-size:clamp(1.1rem,3vw,1.2rem); font-weight:500; line-height:var(--lh-snug); letter-spacing:-.01em; color:var(--tx1); margin-bottom:var(--sp3); position:relative; z-index:1; transition:color var(--t-base); }
.svccard:hover .svctitle { color:var(--gold); }
.svclist { list-style:none; display:flex; flex-direction:column; gap:var(--sp2); position:relative; z-index:1; }
.svclist li { display:flex; align-items:flex-start; gap:var(--sp2); font-size:var(--fs-sm); line-height:var(--lh-normal); color:var(--tx2); }
.svclist li i { width:10px; height:10px; stroke:var(--gold); flex-shrink:0; margin-top:4px; }
.svc-cta { display:none; align-items:center; justify-content:flex-start; gap:var(--sp2); margin-top:var(--sp3); padding-top:var(--sp3); border-top:1px solid var(--bd); opacity:0; }
.svccard.svc-expanded .svc-cta { display:flex; animation:hfade .25s var(--easeOut) forwards; }
.svc-cta-link { display:inline-flex; align-items:center; gap:var(--sp2); font-family:'Outfit',sans-serif; font-size:var(--fs-xs); font-weight:600; letter-spacing:.04em; color:var(--gold); -webkit-tap-highlight-color:transparent; transition:opacity var(--t-micro); }
.svc-cta-link:active { opacity:.7; }
.svc-cta-link i { width:13px; height:13px; stroke:var(--gold); }
.svc-expand-hint { display:none; align-items:center; gap:4px; margin-top:var(--sp2); padding-top:var(--sp2); font-family:'DM Mono',monospace; font-size:var(--fs-2xs); color:var(--tx3); letter-spacing:.08em; }
.svc-expand-hint i { width:11px; height:11px; stroke:var(--tx3); transition:transform var(--t-base) var(--easeOut),stroke var(--t-base); flex-shrink:0; }
@media (pointer:coarse) { .svc-expand-hint { display:flex; } }
.svccard.svc-expanded .svc-expand-hint { color:var(--gold); }
.svccard.svc-expanded .svc-expand-hint i { transform:rotate(180deg); stroke:var(--gold); }
#svc-progress { display:flex; align-items:center; justify-content:flex-end; gap:var(--sp3); margin-bottom:var(--sp4); opacity:0; transition:opacity var(--t-base); }
#svc-progress.visible { opacity:1; }
#svc-count { font-family:'DM Mono',monospace; font-size:var(--fs-2xs); color:var(--tx3); letter-spacing:.1em; white-space:nowrap; }
#svc-progress-bar { width:72px; height:2px; background:var(--bd); border-radius:var(--rF); overflow:hidden; flex-shrink:0; }
#svc-progress-fill { height:100%; width:0; background:var(--gradGold); background-size:200% 100%; border-radius:var(--rF); transition:width .3s var(--easeOut); animation:goldmove 3s linear infinite; }
@media (pointer:coarse) {
  .svccard:active,.svccard.touch-pressed { border-color:rgba(200,168,90,.28); box-shadow:var(--sh2),0 0 0 1px rgba(200,168,90,.08); transform:scale(.975); transition:transform .1s var(--easeInOut),border-color .1s,box-shadow .1s; }
  .tcard:active,.tcard.touch-pressed { background:rgba(200,168,90,.06); border-color:rgba(200,168,90,.25); transform:scale(.975); transition:transform .1s var(--easeInOut),background .1s,border-color .1s; }
  .specbadge:active,.specbadge.touch-pressed { background:var(--gold); color:#1a0e00; transform:scale(.94); transition:transform .1s,background .1s,color .1s; }
  .btn:active { transform:scale(.94) !important; transition:transform .1s !important; }
  .btn-p:active { background:#7a1515 !important; box-shadow:0 1px 0 rgba(0,0,0,.5) !important; }
  .cbtn:active { transform:scale(.95) !important; opacity:.88 !important; transition:transform .1s !important; }
  .acard:active { transform:scale(.98); transition:transform .15s var(--easeInOut); }
}

#trust { background:linear-gradient(160deg,#060810 0%,#0d1526 50%,#060810 100%); padding:var(--sp7) 0; position:relative; }
.twave { position:absolute; top:0; left:0; right:0; overflow:hidden; line-height:0; mask-image:linear-gradient(to bottom,black 55%,transparent 100%); -webkit-mask-image:linear-gradient(to bottom,black 55%,transparent 100%); }
.twave svg { display:block; width:calc(100% + 2px); height:52px; margin-left:-1px; }
.twavefill { fill:var(--bg0); }
.tbody { position:relative; z-index:1; text-align:center; }
.tbody .h2 { color:#fff; }
.tbody > p { color:rgba(255,255,255,.58); max-width:520px; margin:0 auto; }
.tcards { display:grid; grid-template-columns:1fr; gap:var(--sp4); margin-top:var(--sp6); }
.tcard { background:rgba(255,255,255,.028); border:1px solid rgba(255,255,255,.06); border-radius:var(--r4); padding:var(--sp5) var(--sp4); text-align:center; position:relative; overflow:hidden; cursor:default; box-shadow:0 4px 24px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.06); transition:background 0.45s var(--easeOut),border-color 0.45s var(--easeOut),transform 0.45s var(--easeOut),box-shadow 0.45s var(--easeOut); }
.tcard::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--gradBrand); transform:scaleX(0); transform-origin:center; transition:transform var(--t-smooth) var(--easeOut); }
.tcard:hover { background:rgba(200,168,90,.05); border-color:rgba(200,168,90,.22); transform:translateY(-6px); box-shadow:0 24px 56px rgba(0,0,0,.45),0 0 50px rgba(200,168,90,.07),inset 0 1px 0 rgba(255,255,255,.08); }
.tcard:hover::before { transform:scaleX(1); }
.tico { width:64px; height:64px; border-radius:var(--r3); background:rgba(200,168,90,.07); border:1px solid rgba(200,168,90,.12); display:flex; align-items:center; justify-content:center; margin:0 auto var(--sp4); position:relative; z-index:1; transition:background var(--t-base) var(--easeOut),border-color var(--t-base) var(--easeOut),transform var(--t-base) var(--easeOut); }
.tico::before { content:''; position:absolute; inset:-8px; border:1px solid rgba(200,168,90,.1); border-radius:50%; animation:orbitCW 20s linear infinite; pointer-events:none; }
.tico::after  { content:''; position:absolute; inset:-16px; border:1px dashed rgba(200,168,90,.055); border-radius:50%; animation:orbitCCW 30s linear infinite; pointer-events:none; }
.tico i { width:26px; height:26px; stroke:var(--gold); stroke-width:1.3; transition:stroke var(--t-base); }
.tcard:hover .tico { background:var(--gold); border-color:var(--gold); transform:scale(1.1) rotate(6deg); }
.tcard:hover .tico i { stroke:#1a0e00; }
.tcard:hover .tico::before,.tcard:hover .tico::after { animation:none; }
[data-theme="light"] .tico::before { border-color:rgba(122,80,16,.22); }
[data-theme="light"] .tico::after  { border-color:rgba(134,16,16,.14); }
@media (max-width:767px) { .tico::after { display:none; } .tico::before { inset:-5px; } }
.ttitle { font-family:'Cormorant Garamond',serif; font-size:clamp(1.1rem,3vw,1.3rem); font-weight:500; color:#fff; margin-bottom:var(--sp2); line-height:var(--lh-snug); transition:color var(--t-base); }
.tcard:hover .ttitle { color:var(--gold); }
.tdesc { font-size:var(--fs-sm); color:rgba(255,255,255,.55); line-height:var(--lh-relaxed); margin:0; }
@media (min-width:768px) { .tcards { align-items:stretch; } .tcard { display:flex; flex-direction:column; } .tdesc { flex:1; } }

#doctor { background:var(--bg1); padding:var(--sp7) 0; position:relative; isolation:isolate; }
#doctor::before { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(ellipse 50% 55% at 90% 85%,rgba(200,168,90,.055) 0%,transparent 65%),radial-gradient(ellipse 40% 45% at 5% 20%,rgba(155,30,30,.04) 0%,transparent 60%); animation:meshDrift 24s ease-in-out infinite 4s; }
#doctor > .wrap { position:relative; z-index:1; }
.doccard { background:linear-gradient(160deg,var(--surf) 0%,var(--surf2) 100%); border:1px solid var(--bd); border-radius:var(--r4); overflow:hidden; box-shadow:var(--sh3),inset 0 1px 0 rgba(255,255,255,.04); display:grid; grid-template-columns:1fr; position:relative; transition:box-shadow var(--t-smooth) var(--easeOut); }
.doccard:hover { box-shadow:var(--sh3),0 0 80px rgba(200,168,90,.07),inset 0 1px 0 rgba(255,255,255,.06); }
.vbadge { position:absolute; top:var(--sp3); right:var(--sp3); width:40px; height:40px; background:var(--gradBrand); border-radius:var(--r2); display:flex; align-items:center; justify-content:center; box-shadow:var(--sh2),0 0 20px rgba(155,30,30,.25); z-index:5; animation:bfloat 4s ease-in-out infinite; }
.vbadge i { width:18px; height:18px; stroke:#fff; }
.docphoto { position:relative; overflow:hidden; height:280px; background:linear-gradient(145deg,var(--surf2) 0%,var(--surf) 100%); }
.docphoto::before { content:''; position:absolute; inset:0; background:radial-gradient(circle at 50% 90%,rgba(200,168,90,.07) 0%,transparent 60%); z-index:1; }
.docphoto img { width:100%; height:100%; object-fit:cover; object-position:center top; display:block; transition:transform .9s var(--easeOut); }
.doccard:hover .docphoto img { transform:scale(1.04); }
img.blur-up { filter:blur(6px); transform:scale(1.02); transition:filter .55s ease,transform .55s ease; will-change:filter,transform; }
img.blur-up.loaded { filter:blur(0); transform:scale(1); will-change:auto; }
.skel { background:linear-gradient(90deg,var(--surf) 25%,var(--surf2) 50%,var(--surf) 75%); background-size:200% 100%; animation:skelShimmer 1.6s ease-in-out infinite; border-radius:var(--r2); }
.docphoto-skel { position:absolute; inset:0; z-index:3; border-radius:0; transition:opacity .45s ease; }
.docphoto-skel.done { opacity:0; pointer-events:none; }
.docinfo { padding:var(--sp5); display:flex; flex-direction:column; justify-content:center; }
.docinfo .eyebrow { margin-bottom:var(--sp2); }
.docname { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,5vw,2.6rem); font-weight:400; line-height:1.15; letter-spacing:-.02em; margin-bottom:var(--sp2); position:relative; background:linear-gradient(135deg,var(--tx1) 55%,rgba(200,168,90,0.55) 100%); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:goldmove 18s linear infinite; }
.doccard.rv.vis .docname { animation:docNameReveal .75s var(--easeOut) .15s both, goldmove 18s linear 1s infinite; }
.docname::after { content:''; position:absolute; bottom:-4px; left:0; width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(200,168,90,0.35),transparent); background-size:200% 100%; border-radius:var(--rF); opacity:0; animation:docNameReveal 1.2s var(--easeOut) .4s forwards, goldmove 12s linear 1.6s infinite; }
.docrole { font-family:'DM Mono',monospace; font-size:var(--fs-xs); letter-spacing:.16em; text-transform:uppercase; color:var(--red); margin-bottom:var(--sp5); display:block; position:relative; overflow:hidden; opacity:0.85; }
.docrole::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(155,30,30,.18),transparent); transform:translateX(-100%); animation:scanPass 2.5s var(--easeOut) .8s 1 forwards; }
.docbio { font-size:var(--fs-md); line-height:var(--lh-loose); color:var(--tx2); margin-bottom:var(--sp5); }
.specgrp { display:flex; flex-wrap:wrap; gap:6px; row-gap:6px; margin-bottom:var(--sp4); }
.docinfo .specgrp:first-of-type { padding-top:var(--sp4); border-top:1px solid var(--bd); }
.specbadge { display:inline-flex; align-items:center; gap:var(--sp2); padding:var(--sp2) var(--sp3); background:var(--goldD); border:1px solid rgba(200,168,90,.15); border-radius:var(--rF); font-size:var(--fs-xs); font-weight:500; color:var(--tx1); white-space:nowrap; transition:background var(--t-micro),color var(--t-micro),border-color var(--t-micro),transform var(--t-smooth) var(--easeSpring),box-shadow var(--t-micro); }
.specbadge i { width:11px; height:11px; stroke:var(--gold); transition:stroke var(--t-micro); }
.specbadge:hover { background:var(--gold); color:#1a0e00; transform:translateY(-2px); box-shadow:0 4px 14px rgba(200,168,90,.25); }
.specbadge:hover i { stroke:#1a0e00; }

#contact { background:var(--bg0); padding:var(--sp7) 0; position:relative; isolation:isolate; }
#contact::before { content:''; position:absolute; inset:0; pointer-events:none; z-index:0; background:radial-gradient(ellipse 45% 50% at 95% 5%,rgba(200,168,90,.045) 0%,transparent 60%),radial-gradient(ellipse 35% 40% at 5% 95%,rgba(155,30,30,.035) 0%,transparent 60%); animation:meshDrift 36s ease-in-out infinite 6s; }
#contact > .wrap { position:relative; z-index:1; }
.ccard { background:linear-gradient(145deg,var(--surf) 0%,var(--surf2) 100%); border:1px solid var(--bd); border-radius:var(--r4); overflow:hidden; box-shadow:var(--sh3),inset 0 1px 0 rgba(255,255,255,.04); display:grid; grid-template-columns:1fr; }
.cinfo { background:linear-gradient(145deg,#0b1220,#0f1c30); padding:var(--sp5); display:flex; flex-direction:column; gap:var(--sp4); position:relative; overflow:hidden; }
.cinfo::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 380px 380px at 50% 110%,rgba(200,168,90,.06) 0%,transparent 60%); pointer-events:none; animation:cinfoGlow 9s ease-in-out infinite; }
[data-theme="light"] .cinfo { background:linear-gradient(145deg,#0c1525,#11203a); }
.cihd .h2 { font-size:clamp(1.8rem,3.5vw,2.6rem); color:#fff; line-height:1.1; margin-bottom:var(--sp2); }
.cihd p { color:rgba(255,255,255,.55); margin:0; }
.cbody { flex:1; display:flex; flex-direction:column; gap:var(--sp4); }
.cbody address { font-style:normal; }
.cbody > * { padding-bottom:var(--sp3); border-bottom:1px solid rgba(255,255,255,.05); }
.cbody > *:last-child { border-bottom:none; padding-bottom:0; }
.ilbl { font-family:'DM Mono',monospace; font-size:var(--fs-2xs); letter-spacing:.22em; text-transform:uppercase; color:var(--gold); display:block; margin-bottom:var(--sp2); }
.ival { font-family:'Cormorant Garamond',serif; font-size:var(--fs-lg); font-weight:400; color:#fff; line-height:1.5; }
.itimetable { display:grid; grid-template-columns:auto 1fr; column-gap:var(--sp5); row-gap:var(--sp2); margin-top:var(--sp3); }
.itimetable dt { font-family:'Outfit',sans-serif; font-size:var(--fs-sm); font-weight:400; color:rgba(255,255,255,.50); white-space:nowrap; padding-top:1px; }
.itimetable dd { font-family:'DM Mono',monospace; font-size:var(--fs-xs); color:rgba(255,255,255,.80); letter-spacing:.04em; line-height:1.55; margin:0; font-variant-numeric:tabular-nums; }
.itimetable dt:last-of-type,.itimetable dd:last-of-type { color:rgba(255,255,255,.35); }
.next-slot { display:inline-flex; align-items:center; gap:var(--sp2); margin-top:var(--sp3); padding:var(--sp2) var(--sp3); background:rgba(200,168,90,.07); border:1px solid rgba(200,168,90,.18); border-radius:var(--r2); font-family:'DM Mono',monospace; font-size:var(--fs-2xs); color:rgba(255,255,255,.7); letter-spacing:.06em; }
.next-slot i { width:11px; height:11px; stroke:var(--gold); flex-shrink:0; }
.next-slot strong { color:var(--gold); font-weight:500; }
.cacts { display:flex; flex-direction:column; gap:var(--sp3); margin-top:auto; padding-top:var(--sp3); }
.cbtn { display:flex; align-items:center; justify-content:center; gap:var(--sp3); padding:var(--sp4); border-radius:var(--r2); color:#fff; font-family:'Outfit',sans-serif; font-size:var(--fs-sm); font-weight:600; letter-spacing:.04em; cursor:pointer; position:relative; overflow:hidden; min-height:48px; transition:transform var(--t-micro) var(--easeOut),box-shadow var(--t-micro),background var(--t-micro),border-color var(--t-micro); }
@media (pointer:fine) { .cbtn { cursor:none; } }
.cbtn i { width:16px; height:16px; flex-shrink:0; }
.cbcall { background:linear-gradient(160deg,#b52020 0%,#9b1e1e 100%); box-shadow:0 4px 0 rgba(0,0,0,.4),0 8px 20px rgba(155,30,30,.2); border:1px solid rgba(155,30,30,.4); }
.cbcall:hover { transform:translateY(-2px); box-shadow:0 6px 0 rgba(0,0,0,.4),0 16px 40px rgba(155,30,30,.35); }
.cbwa { background:transparent; border:1px solid rgba(255,255,255,.12); }
.cbwa i { stroke:#25d366; }
.cbwa::before { content:''; position:absolute; inset:0; border-radius:inherit; border:1px solid #25d366; opacity:0; animation:waping 3s ease-out infinite; }
.cbwa:hover { background:rgba(37,211,102,.07); border-color:#25d366; box-shadow:0 0 24px rgba(37,211,102,.12); }
.cmap { position:relative; background:var(--bg0); overflow:hidden; min-height:280px; display:flex; flex-direction:column; }
.mframe { width:100%; flex:1; min-height:280px; border:none; display:block; filter:grayscale(100%) contrast(1.1) brightness(.55); transition:filter .7s ease,transform .7s ease; transform:scale(1); }
[data-theme="light"] .mframe { filter:grayscale(80%) contrast(1.05) brightness(1); }
.cmap:hover .mframe { filter:grayscale(0%) brightness(1); }
[data-theme="light"] .cmap:hover .mframe { filter:grayscale(0%); }
.map-review { display:flex; align-items:center; gap:var(--sp3); padding:var(--sp3) var(--sp4); background:linear-gradient(135deg,#0a1525 0%,#0e1e35 100%); border-bottom:1px solid rgba(200,168,90,.12); flex-shrink:0; flex-wrap:wrap; }
.map-review-stars { font-size:.85rem; color:var(--gold); letter-spacing:.06em; flex-shrink:0; line-height:1; }
.map-review-text { font-family:'Outfit',sans-serif; font-size:var(--fs-xs); color:rgba(255,255,255,.55); margin:0; flex:1; min-width:120px; line-height:var(--lh-normal); }
.map-review-btn { display:inline-flex; align-items:center; gap:var(--sp2); padding:var(--sp2) var(--sp4); background:var(--gold); color:#1a0e00; border-radius:var(--rF); font-family:'Outfit',sans-serif; font-size:var(--fs-xs); font-weight:700; letter-spacing:.05em; white-space:nowrap; flex-shrink:0; transition:transform var(--t-micro) var(--easeOut),box-shadow var(--t-micro),filter var(--t-micro); -webkit-tap-highlight-color:transparent; }
.map-review-btn i { width:13px; height:13px; stroke:#1a0e00; flex-shrink:0; }
.map-review-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(200,168,90,.4); filter:brightness(1.08); color:#1a0e00; }
.map-review-btn:active { transform:scale(.96); box-shadow:none; }
@media (max-width:479px) { .map-review { gap:var(--sp2); padding:var(--sp3); } .map-review-text { flex-basis:100%; order:3; } .map-review-btn { margin-left:auto; } }
.mapbadge { position:absolute; bottom:var(--sp4); right:var(--sp4); display:flex; align-items:center; gap:var(--sp2); padding:var(--sp2) var(--sp4); background:var(--surf); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,.1); border-radius:var(--rF); font-size:var(--fs-xs); font-weight:500; color:var(--tx1); box-shadow:var(--sh2); cursor:pointer; transition:transform var(--t-base) var(--easeSpring),box-shadow var(--t-base); font-family:'DM Mono',monospace; letter-spacing:.08em; }
.mapbadge:hover { transform:translateY(-3px) scale(1.02); box-shadow:var(--sh3),0 0 16px rgba(200,168,90,.15); color:var(--gold); }
.mapbadge i { width:13px; height:13px; stroke:var(--gold); }
.map-fallback { display:none; position:absolute; inset:0; z-index:6; background:var(--surf); flex-direction:column; align-items:center; justify-content:center; gap:var(--sp4); padding:var(--sp6) var(--sp5); text-align:center; }
.map-fallback.visible { display:flex; }
.map-fallback-icon { width:56px; height:56px; border-radius:var(--r3); background:var(--redD); border:1px solid rgba(155,30,30,.2); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.map-fallback-icon i { width:24px; height:24px; stroke:var(--red); }
.map-fallback h4 { font-family:'Cormorant Garamond',serif; font-size:var(--fs-2xl); font-weight:400; color:var(--tx1); margin-bottom:var(--sp2); line-height:var(--lh-tight); }
.map-fallback p  { font-size:var(--fs-sm); color:var(--tx2); margin:0; line-height:var(--lh-relaxed); }
.map-open-btn { display:inline-flex; align-items:center; gap:var(--sp2); padding:var(--sp3) var(--sp5); background:var(--red); color:#fff; border-radius:var(--r2); font-family:'Outfit',sans-serif; font-size:var(--fs-sm); font-weight:600; letter-spacing:.04em; box-shadow:0 4px 0 rgba(0,0,0,.4),var(--sh2); transition:transform var(--t-micro) var(--easeOut),box-shadow var(--t-micro); -webkit-tap-highlight-color:transparent; }
.map-open-btn:hover,.map-open-btn:active { transform:translateY(-2px); box-shadow:0 6px 0 rgba(0,0,0,.4),0 12px 32px rgba(155,30,30,.35); color:#fff; }
.map-open-btn i { width:14px; height:14px; stroke:#fff; flex-shrink:0; }

footer { background:var(--bg0); border-top:1px solid var(--bd); padding:var(--sp6) 0; text-align:center; position:relative; }
footer::before { content:''; position:absolute; top:0; left:50%; transform:translateX(-50%); width:120px; height:1.5px; background:linear-gradient(90deg,transparent,var(--gold),transparent); opacity:.4; }
.fotin { display:flex; flex-direction:column; align-items:center; gap:var(--sp3); text-align:center; }
.fotlogo { display:flex; align-items:center; gap:var(--sp3); opacity:.68; transition:opacity var(--t-base); }
.fotlogo:hover { opacity:1; }
.fotlogo img { height:36px; }
.fotlogo span { font-family:'Cormorant Garamond',serif; font-size:var(--fs-lg); font-weight:400; color:var(--tx2); }
.fotcopy { font-family:'DM Mono',monospace; font-size:var(--fs-2xs); letter-spacing:.1em; color:var(--tx3); }
.fotcred { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:var(--fs-lg); letter-spacing:.04em; position:relative; display:inline-block; cursor:default; background:var(--gradBrand); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:goldmove 6s linear infinite; }
.fotcred::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:var(--gradBrand); background-size:200% auto; border-radius:var(--rF); animation:goldmove 4s linear infinite; transition:width .6s cubic-bezier(.22,1,.36,1); }
.fotcred:hover::after { width:100%; }
.fotcred::before { content:'\2736'; font-style:normal; font-size:var(--fs-2xs); position:absolute; right:-14px; top:2px; -webkit-text-fill-color:var(--gold); color:var(--gold); opacity:0; animation:credStar 3s ease-in-out infinite; }

.ctrlbtn { position:fixed; z-index:1001; width:44px; height:44px; border-radius:50%; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:transform var(--t-base) var(--easeOut),box-shadow var(--t-base); line-height:1; -webkit-tap-highlight-color:transparent; }
@media (pointer:fine) { .ctrlbtn { cursor:none; } }
.ctrlbtn:hover { transform:translateY(-3px); }
#themeBtn { bottom:var(--sp5); right:var(--pad); background:linear-gradient(135deg,#d4a840,#c8a85a,#b89040); color:#1a0e00; box-shadow:0 4px 16px rgba(200,168,90,.35); }
#themeBtn:hover { transform:translateY(-3px) rotate(22deg); box-shadow:0 6px 24px rgba(200,168,90,.45); }
#themeBtn i { width:18px; height:18px; pointer-events:none; }
#topBtn { bottom:calc(var(--sp5) + 44px + var(--sp3)); right:var(--pad); background:var(--surf); border:1px solid var(--bd); box-shadow:var(--sh2); color:var(--tx1); opacity:0; visibility:hidden; transform:translateY(var(--sp4)); transition:opacity var(--t-base),visibility var(--t-base),transform var(--t-base) var(--easeOut),box-shadow var(--t-base); }
#topBtn.show { opacity:1; visibility:visible; transform:translateY(0); }
#topBtn:hover { box-shadow:var(--sh3); border-color:rgba(200,168,90,.2); }
#topBtn i { width:16px; height:16px; }
@media (max-width:767px) { #themeBtn { bottom:calc(var(--smartbar-h) + var(--sp3)); right:var(--sp3); width:40px; height:40px; } #topBtn { bottom:calc(var(--smartbar-h) + var(--sp3) + 40px + var(--sp2)); right:var(--sp3); } }

.smartbar { display:block; position:fixed; bottom:0; left:0; right:0; z-index:9997; background:rgba(6,8,16,.96); backdrop-filter:blur(20px) saturate(1.8); -webkit-backdrop-filter:blur(20px) saturate(1.8); border-top:1px solid var(--bd); padding:var(--sp2) var(--sp4); padding-bottom:max(var(--sp2),env(safe-area-inset-bottom)); animation:smartSlide .55s cubic-bezier(.22,1,.36,1) 1.2s both; transition:transform .32s var(--easeInOut); will-change:transform; }
.smartbar.sb-hidden { transform:translateY(calc(100% + env(safe-area-inset-bottom))); }
[data-theme="light"] .smartbar { background:rgba(240,244,250,.97); border-top-color:rgba(0,0,0,.08); }
.sbi { display:flex; gap:var(--sp2); }
.sbb { flex:1; min-height:52px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; padding:var(--sp2) var(--sp1); border-radius:var(--r2); background:rgba(128,128,128,.1); border:1px solid rgba(255,255,255,.06); color:var(--tx2); font-size:10px; font-weight:500; font-family:'Outfit',sans-serif; letter-spacing:.04em; cursor:pointer; -webkit-tap-highlight-color:transparent; position:relative; overflow:hidden; transition:background var(--t-micro),color var(--t-micro),border-color var(--t-micro),transform var(--t-micro) var(--easeSpring),box-shadow var(--t-micro); }
[data-theme="light"] .sbb { background:rgba(0,0,0,.04); border-color:rgba(0,0,0,.07); color:var(--tx2); }
.sbb i { width:17px; height:17px; flex-shrink:0; stroke:var(--tx2); transition:transform var(--t-micro) var(--easeSpring),stroke var(--t-micro); }
.sbb:nth-child(2) i { stroke:#25d366; }
.sbb:nth-child(3) i { stroke:var(--gold); }
.sbb.p { background:linear-gradient(160deg,#b52020,#9b1e1e); color:#fff; border-color:rgba(155,30,30,.5); box-shadow:0 0 20px rgba(155,30,30,.25); }
.sbb.p i { stroke:#fff; }
.sbb:active { transform:scale(.91); background:rgba(200,168,90,.14); border-color:rgba(200,168,90,.25); color:var(--gold); box-shadow:none; }
.sbb.p:active { background:#7a1515; border-color:rgba(155,30,30,.6); color:#fff; }
.sbb.p:active i { stroke:#fff; }
@media (max-width:359px) { .sbb { font-size:0; gap:0; padding:var(--sp2); min-height:44px; } .sbb i { width:20px; height:20px; } }

@media (min-width:640px) {
  #about,#services,#trust,#doctor,#contact { padding:var(--sp8) 0; }
  .nlogoname { display:block; }
  .svcgrid { grid-template-columns:repeat(2,1fr); }
  .tcards  { grid-template-columns:repeat(2,1fr); }
  .acard   { min-height:400px; }
  .docphoto { height:340px; }
  .cmap { min-height:360px; }
  .mframe { min-height:360px; }
  .hacts { flex-direction:row; }
  .hacts .mag { width:auto; }
  .hacts .btn { justify-content:flex-start; }
}
@media (min-width:768px) {
  body { padding-bottom:0; }
  .smartbar { display:none !important; }
  .nham { display:none; } .nlinks { display:flex; } .nav-cta { display:inline-flex; } .ndots { display:flex; }
  #themeBtn { bottom:var(--sp5); right:var(--pad); } #topBtn { bottom:calc(var(--sp5) + 44px + var(--sp3)); right:var(--pad); }
  .agrid { grid-template-columns:1fr 1fr; gap:var(--sp7); align-items:start; }
  .tcards { grid-template-columns:repeat(3,1fr); }
  .doccard { grid-template-columns:280px 1fr; } .docphoto { height:auto; min-height:440px; } .docinfo { padding:var(--sp6); }
  .vbadge { width:46px; height:46px; top:var(--sp4); right:var(--sp4); } .vbadge i { width:20px; height:20px; }
  .ccard { grid-template-columns:1fr 1.7fr; min-height:480px; } .cmap { min-height:unset; } .mframe { min-height:100%; } .cinfo { padding:var(--sp6); }
  .hi3,.hi4 { display:flex; }
}
@media (min-width:1024px) {
  #about,#services,#trust,#doctor,#contact { padding:var(--sp9) 0; }
  .svcgrid { grid-template-columns:repeat(3,1fr); gap:var(--sp5); }
  .doccard { grid-template-columns:320px 1fr; } .docinfo { padding:var(--sp7); }
  .ccard { grid-template-columns:1fr 1.7fr; min-height:540px; } .cinfo { padding:var(--sp7); }
  .hi1,.hi2 { display:flex; }
}
@media (min-width:1280px) { .svcgrid { gap:var(--sp5); } .tcards { gap:var(--sp5); } .agrid { gap:var(--sp8); } }
@media (max-width:479px) {
  .hacts { flex-direction:column; align-items:stretch; }
  .hacts .mag { width:100%; } .hacts .btn { width:100%; justify-content:center; min-height:52px; }
  .docphoto { height:auto; aspect-ratio:3/4; min-height:300px; }
  .docphoto img { object-fit:cover !important; object-position:top center !important; width:100% !important; height:100% !important; }
  .docinfo { padding:var(--sp4); } .docname { font-size:clamp(1.6rem,8vw,2rem); } .docrole { font-size:var(--fs-2xs); letter-spacing:.14em; } .docbio { font-size:var(--fs-sm); }
  .cinfo { padding:var(--sp4); } .cbtn { min-height:52px; }
}
@media (max-width:399px) { .docphoto { aspect-ratio:4/5; min-height:260px; } }

@media print {
  #entry,.cdot,.cring,#spbar,.ndots,.mobmenu,header,nav,#hero,#about,#services,#trust,.sect-transition,.scrollhint,.heroBg,.hicons,#ptcl,.smartbar,#topBtn,#themeBtn,.cmap,.cacts,footer,.vbadge,.svc-expand-hint,.svc-cta { display:none !important; }
  *,*::before,*::after { animation:none !important; transition:none !important; box-shadow:none !important; }
  html,body { background:#fff !important; color:#111 !important; font-family:Georgia,serif !important; font-size:12pt !important; cursor:auto !important; padding:0 !important; }
  body::before { content:'AL-Shifa Clinic \B7 Near UBI, Station Road, Mohammadabad Gohna, Mau \B7 +91 78394 75476'; display:block; font-family:Arial,sans-serif; font-size:9pt; color:#444; padding:8pt 12pt; border-bottom:1.5pt solid #9b1e1e; margin-bottom:12pt; }
  main { display:block !important; }
  #doctor { display:block !important; padding:0 12pt !important; page-break-inside:avoid; }
  .doccard { display:flex !important; flex-direction:row !important; border:1pt solid #ccc !important; border-radius:6pt !important; overflow:hidden !important; padding:0 !important; background:#fff !important; }
  .docphoto { width:110pt !important; height:140pt !important; min-height:unset !important; aspect-ratio:unset !important; flex-shrink:0 !important; }
  .docphoto img { width:100% !important; height:100% !important; object-fit:cover !important; filter:none !important; }
  .docinfo { padding:10pt !important; background:#fff !important; }
  .docname { color:#111 !important; font-size:16pt !important; -webkit-text-fill-color:#111 !important; background:none !important; animation:none !important; }
  .docrole { color:#9b1e1e !important; font-size:8pt !important; }
  .docbio  { color:#333 !important; font-size:9pt !important; }
  .specbadge { background:#f5f5f5 !important; border:1pt solid #ddd !important; color:#333 !important; -webkit-text-fill-color:#333 !important; }
  .eyebrow { color:#666 !important; -webkit-text-fill-color:#666 !important; }
  .fotcred { -webkit-text-fill-color:#333 !important; background:none !important; color:#333 !important; animation:none !important; }
  .nlogoname { -webkit-text-fill-color:var(--tx1) !important; background:none !important; animation:none !important; }
  #contact { display:block !important; padding:12pt !important; page-break-inside:avoid; }
  .ccard { display:block !important; border:1pt solid #ccc !important; border-radius:6pt !important; overflow:visible !important; background:#fff !important; }
  .cinfo { background:#fff !important; padding:10pt !important; }
  .cinfo::before { display:none !important; }
  .cihd .h2 { color:#111 !important; font-size:14pt !important; -webkit-text-fill-color:#111 !important; background:none !important; }
  .cihd p { color:#555 !important; } .ilbl { color:#9b1e1e !important; font-size:7pt !important; } .ival { color:#111 !important; -webkit-text-fill-color:#111 !important; }
  .itimetable dt,.itimetable dd { color:#333 !important; }
}
@media (pointer:coarse) {
  .acard,#about::before,#services::before,#doctor::before,#contact::before { animation:none; }
  .grule.vis,.svcico,.nlink.active::after { animation:none; }
}
