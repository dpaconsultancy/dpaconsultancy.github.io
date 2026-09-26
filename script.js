(() => {
  'use strict';
  const t = (key) => window.DPA_I18N.t(key);

  /* ---------- Nav: scroll state + mobile menu ---------- */
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'ui.menuClose' : 'ui.menuOpen'));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 70}ms`;
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Booking form ---------- */
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const submitLabel = document.getElementById('submitLabel');
  const dateInput = document.getElementById('preferredDate');

  const tomorrow = new Date(Date.now() + 864e5);
  dateInput.min = tomorrow.toISOString().split('T')[0];

  // Status is stored as a key so it re-translates if the language changes.
  let statusKey = null;
  const setStatus = (key, type) => {
    statusKey = key;
    status.textContent = key ? t(key) : '';
    status.className = `form__status${type ? ` is-${type}` : ''}`;
  };
  window.DPA_I18N.onChange(() => {
    if (statusKey) status.textContent = t(statusKey);
    toggle.setAttribute('aria-label', t(nav.classList.contains('is-open') ? 'ui.menuClose' : 'ui.menuOpen'));
  });

  const validate = () => {
    let firstInvalid = null;
    form.querySelectorAll('[required]').forEach((input) => {
      const wrap = input.closest('.field');
      const ok = input.checkValidity() && input.value.trim() !== '';
      wrap.classList.toggle('is-invalid', !ok);
      if (!ok && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  };

  form.addEventListener('input', (e) => {
    const wrap = e.target.closest('.field.is-invalid');
    if (wrap && e.target.checkValidity()) wrap.classList.remove('is-invalid');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus('', null);

    if (!validate()) {
      setStatus('f.invalid', 'error');
      return;
    }
    if (form._honey.value) return; // bot

    const endpoint = form.dataset.endpoint;
    const data = new FormData(form);
    const interests = data.getAll('interests');
    data.delete('interests');
    data.set('interests', interests.length ? interests.join(', ') : 'Not specified');
    data.set('_subject', `Consultation request: ${data.get('company')}`);
    data.set('_replyto', data.get('email'));
    data.set('_template', 'table');
    data.set('_captcha', 'false');
    data.set('language', window.DPA_I18N.lang.toUpperCase());

    submitBtn.disabled = true;
    submitLabel.textContent = t('f.sending');

    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === 'false') throw new Error(json.message || `HTTP ${res.status}`);
      form.reset();
      setStatus('f.success', 'success');
    } catch (err) {
      console.error('[DPA] Booking submit failed:', err);
      setStatus('f.error', 'error');
    } finally {
      submitBtn.disabled = false;
      submitLabel.textContent = t('f.submit');
    }
  });
})();
