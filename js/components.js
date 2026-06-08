(() => {
  const inPages = window.location.pathname.includes('/pages/');
  const root    = inPages ? '../' : './';

  /* ── Google Analytics ──────────────────────────────────────── */
  if (!document.querySelector('script[src*="gtag"]')) {
    const s = document.createElement('script');
    s.async = true;
    s.src   = 'https://www.googletagmanager.com/gtag/js?id=G-18WJKMXTNQ';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-18WJKMXTNQ');
  }

  /* ── Nav items ─────────────────────────────────────────────── */
  const p = (file) => inPages ? file : `./pages/${file}`;

  const navItems = [
    { short: 'Somos casagestalt',   label: 'Somos casagestalt',                 href: p('1.html') },
    { short: 'Quienes nos eligen',  label: 'Quienes nos eligen',                href: p('2.html') },
    { short: 'Formación',           label: 'Opciones de formación',             href: p('3.html') },
    { short: 'Organizaciones',      label: 'Soluciones para organizaciones',    href: p('4.html') },
    { short: 'Testimonios',         label: 'Testimonios',                       href: p('5.html') },
    { short: 'Conversemos',         label: 'Conversemos sobre tus necesidades', href: p('6.html'), mobileOnly: true },
    { short: 'Nuestro equipo',      label: 'Nuestro equipo',                    href: p('7.html') },
  ];

  const ctaHref = 'https://forms.gle/KLwi8UTeVCCmMYkWA';

  const desktopLinks = navItems.filter(n => !n.mobileOnly).map(n =>
    `<a href="${n.href}">${n.short}</a>`
  ).join('');

  const mobileLinks = navItems.map(n =>
    `<a href="${n.href}">${n.label}</a>`
  ).join('');

  /* ── Header ────────────────────────────────────────────────── */
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.innerHTML = `
      <header class="site-header" id="main-header">
        <div class="container">
          <nav class="nav-inner">
            <a href="${root}index.html" class="logo" aria-label="Casa Gestalt inicio">
              <img src="${root}img/logo.png" alt="Casa Gestalt Uruguay" width="140" height="32">
            </a>

            <div class="nav-menu" id="nav-menu">
              ${desktopLinks}
            </div>

            <a href="${ctaHref}" target="_blank" rel="noopener" class="btn btn-accent nav-cta">
              Hacé tu consulta
            </a>

            <button class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-drawer">
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      <div class="mobile-menu" id="mobile-drawer" aria-hidden="true">
        ${mobileLinks}
        <a href="${ctaHref}" target="_blank" rel="noopener" class="btn btn-primary">
          Hacé tu consulta
        </a>
      </div>
    `;
  }

  /* ── Footer ────────────────────────────────────────────────── */
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="footer-banner">
        <img src="${root}img/inicio/footer.webp" alt="" aria-hidden="true" loading="lazy">
      </div>
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">

            <div class="footer-redes">
              <h3>Seguinos en redes</h3>
              <div class="icons">
                <a href="https://www.facebook.com/CasaGestalt/" target="_blank" rel="noopener" aria-label="Facebook">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.instagram.com/casagestalt_mvd" target="_blank" rel="noopener" aria-label="Instagram">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="https://uy.linkedin.com/company/casagestalt" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="footer-contacto">
              <div class="contacto-item">
                <i class="fa-solid fa-calendar-check"></i>
                <p><a href="${ctaHref}" target="_blank" rel="noopener">Agendá una charla informativa gratuita</a></p>
              </div>
              <div class="contacto-item">
                <i class="fa-solid fa-envelope"></i>
                <p><a href="mailto:comunicaciones@casagestalt.com">comunicaciones@casagestalt.com</a></p>
              </div>
              <div class="contacto-item">
                <i class="fa-brands fa-whatsapp"></i>
                <p><a href="https://api.whatsapp.com/send?phone=59892403643" target="_blank" rel="noopener">092 403 643</a></p>
              </div>
              <div class="contacto-item">
                <i class="fa-solid fa-location-dot"></i>
                <p>Luis de la Torre 614 of. 4</p>
              </div>
            </div>

          </div>
          <div class="footer-base">
            <p>© 2025 Casa Gestalt Uruguay — Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    `;
  }

  /* ── WhatsApp flotante ─────────────────────────────────────── */
  const wa = document.createElement('a');
  wa.href      = 'https://api.whatsapp.com/send?phone=59892403643';
  wa.target    = '_blank';
  wa.rel       = 'noopener';
  wa.className = 'whatsapp-float';
  wa.setAttribute('aria-label', 'Contactar por WhatsApp');
  wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  document.body.appendChild(wa);

  /* ── Burger toggle ─────────────────────────────────────────── */
  const burger  = document.getElementById('burger');
  const drawer  = document.getElementById('mobile-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      drawer.setAttribute('aria-hidden', !open);
    });

    document.addEventListener('click', e => {
      if (!burger.contains(e.target) && !drawer.contains(e.target)) {
        burger.classList.remove('open');
        drawer.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ── Header scroll ─────────────────────────────────────────── */
  const mainHeader = document.getElementById('main-header');
  if (mainHeader) {
    const onScroll = () =>
      mainHeader.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Reveal on scroll ──────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }
})();
