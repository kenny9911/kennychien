/* kennychien.com — app: render, i18n switching, routing, Kenny.AI chat */
(function () {
  'use strict';

  var KC = window.KC;
  var AT = String.fromCharCode(64); // email composed at runtime — survives obfuscation rewriters
  var EMAIL = 'kenny.chien' + AT + 'gmail.com';

  var state = {
    lang: (function () { try { return localStorage.getItem('kc_lang') || 'en'; } catch (e) { return 'en'; } })(),
    page: 'home', // 'home' | 'launch' | 'ontology' | 'fde'
    chatOpen: false,
    chatInput: '', // controlled draft — survives re-renders, like the prototype
    msgs: [],     // {role: 'user'|'ai', text}
    busy: false
  };
  if (!KC.I18N[state.lang]) state.lang = 'en';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function t() { return KC.I18N[state.lang] || KC.I18N.en; }

  /* ---------- language ---------- */
  function applyLang() {
    var L = state.lang;
    var tw = L === 'zh-TW';
    var sans = tw ? "'Noto Sans TC','Noto Sans SC'" : "'Noto Sans SC','Noto Sans TC'";
    var serif = tw ? "'Noto Serif TC','Noto Serif SC'" : "'Noto Serif SC','Noto Serif TC'";
    var root = document.documentElement;
    root.lang = L;
    root.style.setProperty('--fd', "'Archivo'," + sans + ',sans-serif');
    root.style.setProperty('--fb', "'Archivo'," + sans + ',sans-serif');
    root.style.setProperty('--fm', "'IBM Plex Mono'," + sans + ',monospace');
    root.style.setProperty('--fs', "'Newsreader'," + serif + ',Georgia,serif');
    applyTitle();
  }
  function applyTitle() {
    var base = KC.TITLES[state.lang] || KC.TITLES.en;
    if (state.page !== 'home' && t().pages[state.page]) {
      document.title = t().pages[state.page].title + ' — Kenny Chien';
    } else {
      document.title = base;
    }
  }
  function setLang(l) {
    if (!KC.I18N[l] || l === state.lang) return;
    try { localStorage.setItem('kc_lang', l); } catch (e) {}
    state.lang = l;
    applyLang();
    renderPage();
    renderChat();
  }

  /* ---------- markup ---------- */
  function navHtml() {
    var links = t().nav.map(function (label, i) {
      return '<a class="kc-nav-link" href="' + KC.HREFS[i] + '" data-section-link>' + esc(label) + '</a>';
    }).join('');
    var langBtn = function (code, label) {
      return '<button class="kc-lang' + (state.lang === code ? ' is-active' : '') + '" data-lang="' + code + '">' + label + '</button>';
    };
    return '<nav class="kc-nav">' +
      '<a class="kc-logo" href="#" data-go-home>KENNY CHIEN<b>.</b></a>' +
      '<div class="kc-nav-links">' + links + '</div>' +
      '<div class="kc-langs">' + langBtn('en', 'EN') + langBtn('zh-CN', '简') + langBtn('zh-TW', '繁') + '</div>' +
      '<a class="kc-nav-cta" href="#contact" data-section-link>' + esc(t().navContact) + '</a>' +
      '</nav>';
  }

  function heroHtml() {
    return '<header class="kc-hero" id="top">' +
      '<div>' +
        '<p class="kc-kicker"><span class="kc-kicker-sq"></span><span>' + esc(t().heroKicker) + '</span></p>' +
        '<h1 class="kc-hero-title">' + esc(t().heroL1) + '</h1>' +
        '<p class="kc-hero-line2">' + esc(t().heroL2a) + ' <b>' + esc(t().heroL2b) + '</b></p>' +
        '<p class="kc-hero-sub">' + esc(t().heroSub) + '</p>' +
        '<div class="kc-hero-ctas">' +
          '<a class="kc-btn-primary" href="#contact" data-section-link>' + esc(t().heroCta1) + ' →</a>' +
          '<button class="kc-btn-ghost" data-open-chat>✳ ' + esc(t().heroCta2) + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="kc-art" aria-hidden="true">' +
        '<div class="kc-art-ring"></div>' +
        '<div class="kc-art-circle"></div>' +
        '<div class="kc-art-hatch"></div>' +
        '<div class="kc-art-square"><span>ONTOLOGY.GRAPH</span></div>' +
        '<div class="kc-art-dot"></div>' +
        '<div class="kc-art-line"></div>' +
        '<div class="kc-art-agent"><i></i><span>AGENT_01</span></div>' +
        '<div class="kc-art-tool">TOOL_CALL ↺</div>' +
        '<span class="kc-art-plus1">＋</span>' +
        '<span class="kc-art-plus2">＋</span>' +
        '<div class="kc-art-figline">PLAN → ACT → VERIFY → LEARN</div>' +
        '<div class="kc-art-fig">FIG. 01 — THE AGENT LOOP</div>' +
      '</div>' +
    '</header>';
  }

  function marqueeHtml() {
    var loop = t().marquee.concat(t().marquee);
    var items = loop.map(function (w) {
      return '<span class="kc-marquee-item"><b>' + esc(w) + '</b><i>✦</i></span>';
    }).join('');
    return '<div class="kc-marquee"><div class="kc-marquee-track">' + items + '</div></div>';
  }

  function secHead(num, title, kicker, extra, tight) {
    return '<div class="kc-sechead' + (extra ? ' ' + extra : '') + '">' +
      '<span class="kc-secnum">' + num + '</span>' +
      '<h2 class="kc-sectitle' + (tight ? ' kc-sectitle--tight' : '') + '">' + esc(title) + '</h2>' +
      '<span class="kc-seckicker">' + esc(kicker) + '</span>' +
    '</div>';
  }

  function aboutHtml() {
    var rows = t().expertise.map(function (ex) {
      return '<div class="kc-exp-row"><span class="kc-exp-tag">' + esc(ex.tag) + '</span><p class="kc-exp-d">' + esc(ex.d) + '</p></div>';
    }).join('');
    return '<section id="about" class="kc-section kc-section--padtop">' +
      secHead('/01', t().aboutTitle, t().aboutKicker, 'kc-sechead--mb54', true) +
      '<div class="kc-about-grid">' +
        '<div><p class="kc-bio1">' + esc(t().bio1) + '</p><p class="kc-bio2">' + esc(t().bio2) + '</p></div>' +
        '<div>' + rows + '</div>' +
      '</div>' +
    '</section>';
  }

  function consultingHtml() {
    var rows = t().services.map(function (sv) {
      return '<a class="kc-svc-row" href="' + esc(sv.url) + '">' +
        '<span class="kc-svc-n">' + esc(sv.n) + '</span>' +
        '<h3 class="kc-svc-t">' + esc(sv.t) + '</h3>' +
        '<p class="kc-svc-d">' + esc(sv.d) + '</p>' +
        '<span class="kc-svc-m">' + esc(sv.m) + '</span>' +
        '<span class="kc-svc-arrow">↗</span>' +
      '</a>';
    }).join('');
    return '<section id="consulting" class="kc-section">' +
      secHead('/02', t().consultTitle, t().consultKicker) +
      '<div>' + rows + '</div>' +
    '</section>';
  }

  function productsHtml() {
    var cards = t().products.map(function (pr, i) {
      var sh = KC.SHAPES[i % KC.SHAPES.length];
      return '<a class="kc-prod-card" href="' + esc(pr.url) + '">' +
        '<div class="kc-prod-head">' +
          '<div class="kc-prod-shape" style="background:' + sh.sBg + ';border-radius:' + sh.sRad + ';border:' + sh.sBrd + '"></div>' +
          '<span class="kc-prod-tag">' + esc(pr.tag) + '</span>' +
        '</div>' +
        '<h3 class="kc-prod-t">' + esc(pr.t) + '</h3>' +
        '<p class="kc-prod-d">' + esc(pr.d) + '</p>' +
        '<span class="kc-prod-cta">' + esc(pr.cta) + ' →</span>' +
      '</a>';
    }).join('');
    return '<section id="products" class="kc-section">' +
      secHead('/03', t().prodTitle, t().prodKicker, 'kc-sechead--mb44') +
      '<div class="kc-grid3">' + cards + '</div>' +
    '</section>';
  }

  function coachingHtml() {
    var cols = t().coaching.map(function (co) {
      return '<div class="kc-coach-col">' +
        '<span class="kc-coach-m">' + esc(co.m) + '</span>' +
        '<h3 class="kc-coach-t">' + esc(co.t) + '</h3>' +
        '<p class="kc-coach-d">' + esc(co.d) + '</p>' +
        '<a class="kc-coach-cta" href="' + esc(co.url) + '">' + esc(co.cta) + ' →</a>' +
      '</div>';
    }).join('');
    return '<section id="coaching" class="kc-band">' +
      '<div class="kc-band-inner">' +
        secHead('/04', t().coachTitle, t().coachKicker, 'kc-sechead--dark') +
        '<div class="kc-coach-grid">' + cols + '</div>' +
      '</div>' +
    '</section>';
  }

  function ideasHtml() {
    var rows = t().ideas.map(function (idea, i) {
      return '<a class="kc-idea-row" href="' + esc(idea.url) + '">' +
        '<span class="kc-idea-n">0' + (i + 1) + '</span>' +
        '<h3 class="kc-idea-t">' + esc(idea.t) + '</h3>' +
        '<p class="kc-idea-d">' + esc(idea.d) + '</p>' +
      '</a>';
    }).join('');
    return '<section id="ideas" class="kc-section kc-section--padtop">' +
      secHead('/05', t().ideasTitle, t().ideasKicker) +
      '<div>' + rows + '</div>' +
    '</section>';
  }

  function podcastHtml() {
    var eps = t().episodes.map(function (ep) {
      return '<a class="kc-ep-row" href="/podcast">' +
        '<span class="kc-ep-n">' + esc(ep.n) + '</span>' +
        '<h4 class="kc-ep-t">' + esc(ep.t) + '</h4>' +
        '<span class="kc-ep-m">' + esc(ep.m) + '</span>' +
        '<span class="kc-ep-play">▶</span>' +
      '</a>';
    }).join('');
    return '<section id="podcast" class="kc-section">' +
      secHead('/06', t().podTitle, t().podKicker, 'kc-sechead--mb48') +
      '<div class="kc-pod-grid">' +
        '<div class="kc-pod-card">' +
          '<span class="kc-pod-label">PODCAST — HOSTED BY KENNY CHIEN</span>' +
          '<h3 class="kc-pod-title">The<br>Agentic<br>Hour</h3>' +
          '<div class="kc-pod-foot"><span class="kc-pod-sched">EVERY OTHER TUESDAY</span><div class="kc-pod-play">▶</div></div>' +
        '</div>' +
        '<div>' +
          '<p class="kc-pod-sub">' + esc(t().podSub) + '</p>' +
          eps +
          '<a class="kc-pod-cta" href="/podcast">' + esc(t().podCta) + ' →</a>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function blogHtml() {
    var cards = t().posts.map(function (po) {
      return '<a class="kc-post-card" href="' + esc(po.url) + '">' +
        '<span class="kc-post-d">' + esc(po.d) + '</span>' +
        '<h3 class="kc-post-t">' + esc(po.t) + '</h3>' +
        '<span class="kc-post-arrow">→</span>' +
      '</a>';
    }).join('');
    return '<section id="blog" class="kc-section kc-section--blog">' +
      secHead('/07', t().blogTitle, t().blogKicker, 'kc-sechead--mb44') +
      '<div class="kc-grid3">' + cards + '</div>' +
    '</section>';
  }

  function detailHtml() {
    var pg = t().pages[state.page];
    if (!pg) return '';
    var prins = pg.principles.map(function (p, i) {
      return '<div class="kc-prin"><span class="kc-prin-n">0' + (i + 1) + '</span>' +
        '<div><h3 class="kc-prin-t">' + esc(p.t) + '</h3><p class="kc-prin-d">' + esc(p.d) + '</p></div></div>';
    }).join('');
    var phases = pg.phases.map(function (ph) {
      return '<div class="kc-phase"><span class="kc-phase-w">' + esc(ph.w) + '</span>' +
        '<h3 class="kc-phase-t">' + esc(ph.t) + '</h3><p class="kc-phase-d">' + esc(ph.d) + '</p></div>';
    }).join('');
    var outs = pg.outcomes.map(function (oc) {
      return '<div class="kc-out"><i>→</i><p>' + esc(oc) + '</p></div>';
    }).join('');
    return '<article class="kc-detail">' +
      '<button class="kc-back" data-go-home>← ' + esc(t().back) + '</button>' +
      '<div class="kc-detail-metarow">' +
        '<span class="kc-detail-idx">' + esc(KC.PAGEIDX[state.page] || '') + '</span>' +
        '<span class="kc-detail-meta">' + esc(pg.meta) + '</span>' +
      '</div>' +
      '<h1 class="kc-detail-title">' + esc(pg.title) + '</h1>' +
      '<p class="kc-detail-sub">' + esc(pg.sub) + '</p>' +
      '<div class="kc-detail-intro"><p>' + esc(pg.intro1) + '</p><p>' + esc(pg.intro2) + '</p></div>' +
      '<div class="kc-pull"><p>“' + esc(pg.pull) + '”</p></div>' +
      '<div class="kc-detail-h"><i></i><h2>' + esc(pg.h1) + '</h2></div>' +
      '<div class="kc-prin-grid">' + prins + '</div>' +
      '<div class="kc-detail-h"><i></i><h2>' + esc(pg.h2) + '</h2></div>' +
      '<div class="kc-phases">' + phases + '</div>' +
      '<div class="kc-detail-h"><i></i><h2>' + esc(pg.h3) + '</h2></div>' +
      '<div class="kc-out-grid">' + outs + '</div>' +
      '<div class="kc-detail-cta">' +
        '<div><h2>' + esc(pg.ctaT) + '</h2><p>' + esc(pg.ctaD) + '</p></div>' +
        '<a class="kc-detail-cta-btn" href="mailto:' + EMAIL + '">' + EMAIL + ' →</a>' +
      '</div>' +
    '</article>';
  }

  function contactHtml() {
    return '<section id="contact" class="kc-contact">' +
      '<div class="kc-contact-inner">' +
        '<span class="kc-contact-label">/08 — CONTACT</span>' +
        '<h2 class="kc-contact-title">' + esc(t().contactTitle) + '</h2>' +
        '<p class="kc-contact-sub">' + esc(t().contactSub) + '</p>' +
        '<a class="kc-contact-email" href="mailto:' + EMAIL + '">' + EMAIL + '</a>' +
        '<div class="kc-socials">' +
          '<span class="kc-social">X / TWITTER ↗</span>' +
          '<span class="kc-social">LINKEDIN ↗</span>' +
          '<span class="kc-social">GITHUB ↗</span>' +
          '<span class="kc-social">YOUTUBE ↗</span>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  function footerHtml() {
    return '<footer class="kc-footer">' +
      '<div class="kc-footer-inner">' +
        '<span class="kc-footer-logo">KENNY CHIEN<b class="kc-dot">.</b></span>' +
        '<span class="kc-footer-tag">' + esc(t().footerTag) + '</span>' +
        '<span class="kc-footer-langs">ENGLISH · 简体中文 · 繁體中文</span>' +
        '<span class="kc-footer-rights">' + esc(t().footerRights) + '</span>' +
      '</div>' +
    '</footer>';
  }

  function renderPage() {
    var app = document.getElementById('app');
    var body = state.page === 'home'
      ? heroHtml() + marqueeHtml() + aboutHtml() + consultingHtml() + productsHtml() + coachingHtml() + ideasHtml() + podcastHtml() + blogHtml()
      : detailHtml();
    app.innerHTML = navHtml() + body + contactHtml() + footerHtml();
    applyTitle();
  }

  /* ---------- Kenny.AI chat ---------- */
  var chatRoot = document.createElement('div');

  function msgNode(role, text) {
    var d = document.createElement('div');
    d.className = 'kc-msg ' + (role === 'user' ? 'kc-msg--user' : 'kc-msg--ai');
    d.textContent = text;
    return d;
  }

  function renderChat(focusInput) {
    chatRoot.innerHTML = '<button class="kc-fab" data-toggle-chat aria-label="AI assistant">' + (state.chatOpen ? '✕' : '✳') + '</button>';
    if (state.chatOpen) {
      var panel = document.createElement('div');
      panel.className = 'kc-chat';
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-label', 'Kenny.AI');
      panel.innerHTML =
        '<div class="kc-chat-head">' +
          '<span class="kc-chat-dot"></span>' +
          '<span class="kc-chat-name">KENNY.AI</span>' +
          '<span class="kc-chat-sub">' + esc(t().chatSub) + '</span>' +
          '<button class="kc-chat-close" data-close-chat aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="kc-chat-body"></div>' +
        '<div class="kc-chat-note">' + esc(t().chatNote) + '</div>' +
        '<div class="kc-chat-inputrow">' +
          '<input class="kc-chat-input" placeholder="' + esc(t().chatPh) + '">' +
          '<button class="kc-chat-send"' + (state.busy ? ' disabled' : '') + '>' + esc(t().chatSend) + '</button>' +
        '</div>';
      var bodyEl = panel.querySelector('.kc-chat-body');
      bodyEl.appendChild(msgNode('ai', t().chatGreet));
      state.msgs.forEach(function (m) { bodyEl.appendChild(msgNode(m.role, m.text)); });
      if (state.busy) {
        var b = document.createElement('div');
        b.className = 'kc-msg kc-msg--busy';
        b.textContent = t().chatBusy;
        bodyEl.appendChild(b);
      }
      chatRoot.appendChild(panel);
      bodyEl.scrollTop = bodyEl.scrollHeight;
      var input = panel.querySelector('.kc-chat-input');
      input.value = state.chatInput;
      input.addEventListener('input', function () { state.chatInput = input.value; });
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendChat(); });
      if (focusInput) input.focus();
    }
  }

  function sendChat() {
    if (state.busy || !state.chatOpen) return;
    var q = state.chatInput.trim();
    if (!q) return;
    state.msgs.push({ role: 'user', text: q });
    state.chatInput = '';
    state.busy = true;
    renderChat(true);
    var payload = {
      lang: state.lang,
      messages: state.msgs.map(function (m) {
        return { role: m.role === 'user' ? 'user' : 'assistant', content: m.text };
      })
    };
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (data) {
      var reply = (data && data.reply ? String(data.reply) : '').trim();
      if (!reply) throw new Error('empty');
      state.msgs.push({ role: 'ai', text: reply });
    }).catch(function () {
      state.msgs.push({ role: 'ai', text: t().chatErr });
    }).then(function () {
      state.busy = false;
      renderChat();
    });
  }

  /* ---------- routing ---------- */
  function route(initial) {
    var h = location.hash;
    var m = h.match(/^#\/consulting\/(launch|ontology|fde)$/);
    if (m) {
      state.page = m[1];
      renderPage();
      window.scrollTo(0, 0); // CSS scroll-behavior:smooth animates this, matching the design
      return;
    }
    var wasDetail = state.page !== 'home';
    state.page = 'home';
    if (wasDetail || initial) renderPage();
    if (h && h.length > 1) {
      var el = document.querySelector(h);
      if (el && (wasDetail || initial)) {
        requestAnimationFrame(function () { el.scrollIntoView(); });
      }
      // already home: browser's native anchor scroll handles it
    } else if (wasDetail) {
      window.scrollTo(0, 0);
    }
  }

  function goHome(e) {
    e.preventDefault();
    if (state.page !== 'home') {
      // route() re-renders and scrolls to top
      if (location.hash) {
        history.pushState(null, '', location.pathname + location.search);
        route();
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ---------- events (delegated) ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-lang],[data-go-home],[data-open-chat],[data-toggle-chat],[data-close-chat],.kc-chat-send,[data-section-link]') : null;
    if (!el) return;
    if (el.hasAttribute('data-lang')) { setLang(el.getAttribute('data-lang')); return; }
    if (el.hasAttribute('data-go-home')) { goHome(e); return; }
    if (el.hasAttribute('data-open-chat')) { state.chatOpen = true; renderChat(true); return; }
    if (el.hasAttribute('data-toggle-chat')) { state.chatOpen = !state.chatOpen; renderChat(state.chatOpen); return; }
    if (el.hasAttribute('data-close-chat')) { state.chatOpen = false; renderChat(); return; }
    if (el.classList.contains('kc-chat-send')) { sendChat(); return; }
    if (el.hasAttribute('data-section-link') && state.page !== 'home') {
      // section anchors only exist on the home page; go home first, then scroll
      e.preventDefault();
      var href = el.getAttribute('href');
      state.page = 'home';
      renderPage();
      var target = document.querySelector(href);
      if (target) requestAnimationFrame(function () { target.scrollIntoView(); });
      history.replaceState(null, '', location.pathname + location.search + href);
    }
  });

  window.addEventListener('hashchange', function () { route(false); });

  /* ---------- boot ---------- */
  applyLang();
  document.body.appendChild(chatRoot);
  route(true);
  renderChat();
})();
