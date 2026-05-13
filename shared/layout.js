/* Shared nav + footer + i18n + theme toggle + reveal. Defaults locked, no tweaks UI. */

(function() {
  // Centralised contact details — single source of truth.
  const CONTACT = {
    qa: { wa: '97474000821',  display: '7400-0821' },
    bd: { wa: '8801936399433', display: '01936-399-433' }
  };
  const waUrl = (k) => `https://wa.me/${CONTACT[k].wa}`;

  const CURRENT = (document.body.dataset.page || '').toLowerCase();

  const I18N = {
    en: {
      nav: { home:'Home', manpower:'Manpower', student:'Students', documents:'Documents', contact:'Contact' },
      waCta: 'WhatsApp',
      footerText: 'DYUTI Group provides manpower support for Qatar work opportunities and student consultancy for Finland, the Netherlands, Italy, and Austria, alongside IELTS, GRE, and TOEFL coaching.',
      services: 'Services',
      qatarOffice: 'Qatar Office',
      bnOffice: 'Bangladesh Office',
      footerTag: 'Manpower · Visa · Students',
      footerCopy: '© DYUTI Group · Qatar & Bangladesh',
      qaAddr1: 'Level 22, Tornado Tower',
      qaAddr2: 'West Bay, Doha, Qatar',
      qaAddr3: 'ZIP 00000',
      qaWa: 'WhatsApp 7400-0821 →',
      bdAddr1: 'House 13, Road 11',
      bdAddr2: 'Gudaraghat, Badda, Dhaka',
      bdAddr3: 'ZIP 1212',
      bdWa: 'WhatsApp 01936-399-433 →'
    },
    bn: {
      nav: { home:'হোম', manpower:'ম্যানপাওয়ার', student:'স্টুডেন্ট', documents:'কাগজপত্র', contact:'যোগাযোগ' },
      waCta: 'হোয়াটসঅ্যাপ',
      footerText: 'DYUTI Group কাতারের কাজের সুযোগের জন্য ম্যানপাওয়ার সাপোর্ট এবং ফিনল্যান্ড, নেদারল্যান্ডস, ইতালি ও অস্ট্রিয়ার জন্য স্টুডেন্ট কনসালটেন্সি প্রদান করে, পাশাপাশি IELTS, GRE ও TOEFL কোচিংও দেয়।',
      services: 'সেবাসমূহ',
      qatarOffice: 'কাতার অফিস',
      bnOffice: 'বাংলাদেশ অফিস',
      footerTag: 'ম্যানপাওয়ার · ভিসা · স্টুডেন্ট',
      footerCopy: '© DYUTI Group · কাতার ও বাংলাদেশ',
      qaAddr1: 'লেভেল ২২, টর্নেডো টাওয়ার',
      qaAddr2: 'ওয়েস্ট বে, দোহা, কাতার',
      qaAddr3: 'জিপ ০০০০০',
      qaWa: 'হোয়াটসঅ্যাপ ৭৪০০-০৮২১ →',
      bdAddr1: 'হাউজ ১৩, রোড ১১',
      bdAddr2: 'গুদারাঘাট, বাড্ডা, ঢাকা',
      bdAddr3: 'জিপ ১২১২',
      bdWa: 'হোয়াটসঅ্যাপ ০১৯৩৬-৩৯৯-৪৩৩ →'
    },
    ar: {
      nav: { home:'الرئيسية', manpower:'القوى العاملة', student:'الطلاب', documents:'المستندات', contact:'التواصل' },
      waCta: 'واتساب',
      footerText: 'تقدم DYUTI Group دعم القوى العاملة لفرص العمل في قطر، والاستشارات الطلابية لفنلندا وهولندا وإيطاليا والنمسا، إلى جانب تدريب IELTS وGRE وTOEFL.',
      services: 'الخدمات',
      qatarOffice: 'مكتب قطر',
      bnOffice: 'مكتب بنغلاديش',
      footerTag: 'القوى العاملة · التأشيرات · الطلاب',
      footerCopy: '© DYUTI Group · قطر وبنغلاديش',
      qaAddr1: 'الطابق 22، برج تورنادو',
      qaAddr2: 'الخليج الغربي، الدوحة، قطر',
      qaAddr3: 'الرمز البريدي 00000',
      qaWa: 'واتساب 7400-0821 ←',
      bdAddr1: 'منزل 13، طريق 11',
      bdAddr2: 'غوداراغهات، بادا، دكا',
      bdAddr3: 'الرمز البريدي 1212',
      bdWa: 'واتساب 01936-399-433 ←'
    }
  };

  const navHTML = `
    <nav class="nav" role="navigation" aria-label="Primary">
      <div class="wrap nav-inner">
        <a href="index.html" class="brand" aria-label="DYUTI Group, home" style="padding: 10px">
          DYUTI
        </a>
        <button class="nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" id="primary-nav">
          <a href="index.html"${CURRENT==='home'?' aria-current="page"':''} data-i18n="nav.home">Home</a>
          <a href="manpower.html"${CURRENT==='manpower'?' aria-current="page"':''} data-i18n="nav.manpower">Manpower</a>
          <a href="student.html"${CURRENT==='student'?' aria-current="page"':''} data-i18n="nav.student">Students</a>
          <a href="documents.html"${CURRENT==='documents'?' aria-current="page"':''} data-i18n="nav.documents">Documents</a>
          <a href="contact.html"${CURRENT==='contact'?' aria-current="page"':''} data-i18n="nav.contact">Contact</a>
        </div>
        <div class="nav-tools">
          <div class="lang-switch" role="group" aria-label="Language">
            <button data-lang="en" type="button">EN</button>
            <button data-lang="bn" type="button">বাং</button>
            <button data-lang="ar" type="button">ع</button>
          </div>
          <button class="theme-toggle" type="button" aria-label="Toggle theme">
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          </button>
          <a data-wa="qa" href="#" target="_blank" rel="noopener" class="nav-cta" data-i18n="waCta">WhatsApp</a>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-inner">
        <a href="index.html"${CURRENT==='home'?' aria-current="page"':''} data-i18n="nav.home">Home</a>
        <a href="manpower.html"${CURRENT==='manpower'?' aria-current="page"':''} data-i18n="nav.manpower">Manpower</a>
        <a href="student.html"${CURRENT==='student'?' aria-current="page"':''} data-i18n="nav.student">Students</a>
        <a href="documents.html"${CURRENT==='documents'?' aria-current="page"':''} data-i18n="nav.documents">Documents</a>
        <a href="contact.html"${CURRENT==='contact'?' aria-current="page"':''} data-i18n="nav.contact">Contact</a>
        <a data-wa="qa" href="#" target="_blank" rel="noopener" class="mobile-cta">WhatsApp · Qatar 7400-0821</a>
        <a data-wa="bd" href="#" target="_blank" rel="noopener" class="mobile-cta">WhatsApp · Bangladesh 01936-399-433</a>
      </div>
    </div>
  `;

  const footerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <div class="wordmark">DYUTI<em>.</em></div>
            <p data-i18n="footerText" style="max-width:34ch;color:var(--ink-soft);font-size:14px;line-height:1.6">
              DYUTI Group provides manpower support for Qatar work opportunities and student
              consultancy for Finland, the Netherlands, Italy, and Austria, alongside IELTS,
              GRE, and TOEFL coaching.
            </p>
          </div>
          <div>
            <h4 data-i18n="services">Services</h4>
            <ul>
              <li><a href="manpower.html" data-i18n="nav.manpower">Manpower</a></li>
              <li><a href="student.html" data-i18n="nav.student">Students</a></li>
              <li><a href="documents.html" data-i18n="nav.documents">Documents</a></li>
              <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="qatarOffice">Qatar Office</h4>
            <ul>
              <li data-i18n="qaAddr1">Level 22, Tornado Tower</li>
              <li data-i18n="qaAddr2">West Bay, Doha, Qatar</li>
              <li data-i18n="qaAddr3">ZIP 00000</li>
              <li style="margin-top:12px"><a data-wa="qa" href="#" target="_blank" rel="noopener" data-i18n="qaWa">WhatsApp 7400-0821 →</a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="bnOffice">Bangladesh Office</h4>
            <ul>
              <li data-i18n="bdAddr1">House 13, Road 11</li>
              <li data-i18n="bdAddr2">Gudaraghat, Badda, Dhaka</li>
              <li data-i18n="bdAddr3">ZIP 1212</li>
              <li style="margin-top:12px"><a data-wa="bd" href="#" target="_blank" rel="noopener" data-i18n="bdWa">WhatsApp 01936-399-433 →</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span data-i18n="footerCopy">© DYUTI Group · Qatar & Bangladesh</span>
          <span data-i18n="footerTag">Manpower · Visa · Students</span>
        </div>
      </div>
    </footer>
  `;

  // Apply theme BEFORE first paint to avoid flash
  (function applyStoredTheme(){
    const t = localStorage.getItem('dyuti-theme') || 'light';
    document.documentElement.setAttribute('data-theme', t);
  })();

  document.addEventListener('DOMContentLoaded', () => {
    const navSlot = document.getElementById('nav-slot');
    if (navSlot) navSlot.outerHTML = navHTML;
    else document.body.insertAdjacentHTML('afterbegin', navHTML);

    const footerSlot = document.getElementById('footer-slot');
    if (footerSlot) footerSlot.outerHTML = footerHTML;
    else document.body.insertAdjacentHTML('beforeend', footerHTML);

    initWhatsAppLinks();
    initLang();
    initTheme();
    initBurger();
    initReveal();
  });

  function initBurger() {
    const btn = document.querySelector('.nav-burger');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    const close = () => {
      btn.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-hidden','true');
      document.documentElement.classList.remove('menu-open');
    };
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      if (open) { close(); return; }
      btn.setAttribute('aria-expanded','true');
      menu.setAttribute('aria-hidden','false');
      document.documentElement.classList.add('menu-open');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  function initWhatsAppLinks() {
    document.querySelectorAll('a[data-wa]').forEach(a => {
      const k = a.dataset.wa;
      if (CONTACT[k]) a.setAttribute('href', waUrl(k));
    });
  }

  function initLang() {
    const stored = localStorage.getItem('dyuti-lang');
    const initial = (stored && I18N[stored]) ? stored : 'en';
    setLang(initial);
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }
  function setLang(lang) {
    if (!I18N[lang]) return;
    const isRtl = (lang === 'ar');
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : (lang === 'ar' ? 'ar' : 'en'));
    localStorage.setItem('dyuti-lang', lang);

    // Merge page-specific translations from <script id="page-i18n">
    let pageDict = {};
    const pageScript = document.getElementById('page-i18n');
    if (pageScript) {
      try {
        pageDict = JSON.parse(pageScript.textContent || '{}');
      } catch(e) {
        console.warn('[DYUTI] page-i18n JSON parse failed:', e.message);
      }
    }
    const dict = Object.assign({}, I18N[lang], pageDict[lang] || {});

    document.querySelectorAll('[data-i18n]').forEach(el => {
      // Cache original (EN) on first encounter so we can restore it.
      if (!('i18nOrig' in el.dataset)) {
        el.dataset.i18nOrig = (el.dataset.i18nHtml === 'true') ? el.innerHTML : el.textContent;
      }
      const key = el.getAttribute('data-i18n');
      const val = key.split('.').reduce((o, k) => (o ? o[k] : undefined), dict);
      const useHtml = el.dataset.i18nHtml === 'true';
      if (typeof val === 'string') {
        if (useHtml) el.innerHTML = val; else el.textContent = val;
      } else {
        // Fallback: restore original (EN) text
        if (useHtml) el.innerHTML = el.dataset.i18nOrig;
        else el.textContent = el.dataset.i18nOrig;
      }
    });
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initTheme() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('dyuti-theme', next);
    });
  }

  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    els.forEach(e => io.observe(e));
  }
})();
