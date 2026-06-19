/**
 * Royal Kids International — Premium GSAP motion
 */
const RoyalSchoolGSAP = (function () {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let pageReady = false;

  function ready() {
    return typeof gsap !== 'undefined' && !reduced;
  }

  function showFallback() {
    document.body.classList.remove('is-loading');
    const loader = document.getElementById('pageLoader');
    if (loader) loader.hidden = true;
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    document.querySelectorAll('.program-card, .facility-card, .stat-card').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  function runLoader(onDone) {
    const loader = document.getElementById('pageLoader');
    const bar = document.getElementById('loaderProgress');
    if (!loader || !ready()) {
      document.body.classList.remove('is-loading');
      if (loader) loader.hidden = true;
      onDone();
      return;
    }

    const tl = gsap.timeline({
      onComplete() {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete() {
            loader.classList.add('is-done');
            loader.hidden = true;
            document.body.classList.remove('is-loading');
            onDone();
          },
        });
      },
    });

    tl.to(bar, { width: '100%', duration: 1.1, ease: 'power2.inOut' })
      .to('.loader-mark', { scale: 1.08, duration: 0.35, yoyo: true, repeat: 1, ease: 'power2.out' }, '-=0.4');
  }

  function animateCounters() {
    document.querySelectorAll('[data-stat]').forEach((el) => {
      const target = parseInt(el.getAttribute('data-stat'), 10);
      if (!Number.isFinite(target)) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        delay: 0.4,
        onUpdate() {
          const n = Math.round(obj.val);
          el.textContent = target === 98 ? `${n}%` : `${n}+`;
        },
      });
    });
  }

  function initHero() {
    const words = gsap.utils.toArray('.hero-word');
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(words, { y: '110%', opacity: 0, stagger: 0.06, duration: 0.85, delay: 0.15 })
      .from('.gsap-hero:not(h1):not(.hero-word)', { opacity: 0, y: 28, stagger: 0.08, duration: 0.65 }, '-=0.45')
      .from('.gsap-hero-photo', { opacity: 0, scale: 0.9, x: 50, duration: 1, ease: 'power3.out' }, '-=0.55')
      .from('.gsap-hero-card', { opacity: 0, y: 36, duration: 0.7 }, '-=0.65')
      .from('.hero-scroll-hint', { opacity: 0, y: -10, duration: 0.5 }, '-=0.3');

    const photo = document.querySelector('.hero-photo');
    const bg = document.querySelector('.hero-bg-img');
    if (photo) {
      gsap.to(photo, { scale: 1.1, duration: 16, ease: 'none', repeat: -1, yoyo: true });
    }
    if (bg) {
      gsap.to(bg, { scale: 1.12, duration: 20, ease: 'none', repeat: -1, yoyo: true });
    }

    gsap.utils.toArray('.hero-orb').forEach((orb, i) => {
      gsap.to(orb, {
        y: '+=30',
        x: i % 2 ? '+=16' : '-=16',
        duration: 4 + i * 0.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    animateCounters();
  }

  function initMarquee() {
    const wrap = document.getElementById('trustMarquee');
    if (!wrap || !ready()) return;
    const tracks = wrap.querySelectorAll('.trust-track');
    if (!tracks.length) return;

    const w = tracks[0].scrollWidth;
    gsap.to(tracks, {
      x: -w,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });
  }

  function initGallery() {
    const track = document.getElementById('galleryTrack');
    if (!track || !ready()) return;

    const items = track.querySelectorAll('.gallery-item');
    gsap.from(items, {
      scrollTrigger: { trigger: '#gallery', start: 'top 80%', toggleActions: 'play none none none' },
      opacity: 0,
      y: 40,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      immediateRender: false,
    });

    const totalWidth = track.scrollWidth;
    gsap.to(track, {
      x: () => -(totalWidth - window.innerWidth + 64),
      ease: 'none',
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top bottom',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  function initScroll() {
    if (typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.stat-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0,
        y: 40,
        scale: 0.88,
        duration: 0.65,
        delay: i * 0.07,
        ease: 'back.out(1.7)',
        immediateRender: false,
      });
    });

    gsap.utils.toArray('.program-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 0,
        y: 60,
        rotateX: -8,
        duration: 0.75,
        delay: i * 0.12,
        ease: 'power3.out',
        immediateRender: false,
      });
    });

    gsap.utils.toArray('.facility-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0,
        y: 44,
        duration: 0.65,
        delay: (i % 3) * 0.09,
        ease: 'power2.out',
        immediateRender: false,
      });
    });

    gsap.utils.toArray('.reveal').forEach((el) => {
      if (el.closest('.hero') || el.closest('#programsGrid') || el.closest('#facilitiesGrid')) return;
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' },
        opacity: 0,
        y: 36,
        duration: 0.65,
        immediateRender: false,
      });
    });

    gsap.utils.toArray('.highlight-card, .news-item').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
        opacity: 0,
        x: i % 2 ? 28 : -28,
        duration: 0.55,
        ease: 'power2.out',
        immediateRender: false,
      });
    });

    const principal = document.getElementById('principalBlock');
    if (principal) {
      gsap.from('.principal-photo', {
        scrollTrigger: { trigger: principal, start: 'top 78%', toggleActions: 'play none none none' },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out',
        immediateRender: false,
      });
      gsap.from('.principal-content', {
        scrollTrigger: { trigger: principal, start: 'top 78%', toggleActions: 'play none none none' },
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: 'power3.out',
        immediateRender: false,
      });
    }

    const aboutImg = document.querySelector('.about-visual img');
    if (aboutImg) {
      gsap.from(aboutImg, {
        scrollTrigger: { trigger: '.about-visual', start: 'top 80%', toggleActions: 'play none none none' },
        scale: 1.08,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        immediateRender: false,
      });
    }

    gsap.from('.cta-band', {
      scrollTrigger: { trigger: '.cta-band', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0,
      y: 50,
      scale: 0.97,
      duration: 0.8,
      ease: 'power3.out',
      immediateRender: false,
    });
  }

  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar || !ready()) return;

    gsap.to(bar, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.15,
      },
    });
  }

  function initPage() {
    if (!ready()) {
      showFallback();
      return;
    }

    try {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('visible');
        el.style.opacity = '';
        el.style.transform = '';
      });
      gsap.set('.program-card, .facility-card, .stat-card', { clearProps: 'all' });

      const start = () => {
        if (pageReady) return;
        pageReady = true;
        initHero();
        initScroll();
        initMarquee();
        initGallery();
        initScrollProgress();

        const fab = document.querySelector('.fab-wa');
        if (fab) gsap.to(fab, { scale: 1.07, duration: 1.4, ease: 'sine.inOut', repeat: -1, yoyo: true });
      };

      runLoader(start);
    } catch (err) {
      console.warn('RoyalSchoolGSAP init skipped:', err);
      showFallback();
    }
  }

  function pulseCard(card) {
    if (!ready() || !card) return;
    gsap.fromTo(card, { scale: 1 }, { scale: 1.03, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.out' });
  }

  function openModal(modal) {
    if (!modal || !ready()) return;
    const dialog = modal.querySelector('.program-modal-dialog');
    const backdrop = modal.querySelector('.program-modal-backdrop');
    const body = modal.querySelector('.program-modal-body');
    const cards = modal.querySelectorAll('.extracurricular-card');

    gsap.killTweensOf([dialog, backdrop, body, cards]);
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(dialog, { opacity: 0, y: 50, scale: 0.94 });

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to(backdrop, { opacity: 1, duration: 0.35 })
      .to(dialog, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.2')
      .from('.program-modal-hero img', { scale: 1.15, duration: 1, ease: 'power2.out' }, '-=0.35')
      .from(body.querySelectorAll('.program-modal-section'), { opacity: 0, y: 24, stagger: 0.09, duration: 0.45 }, '-=0.4')
      .from(cards, { opacity: 0, y: 18, stagger: 0.07, duration: 0.4 }, '-=0.3');
  }

  function closeModal(modal, onDone) {
    if (!modal) return;
    const dialog = modal.querySelector('.program-modal-dialog');
    const backdrop = modal.querySelector('.program-modal-backdrop');

    if (!ready()) {
      if (onDone) onDone();
      return;
    }

    gsap.to(dialog, { opacity: 0, y: 24, scale: 0.98, duration: 0.28, ease: 'power2.in' });
    gsap.to(backdrop, { opacity: 0, duration: 0.28, ease: 'power2.in', onComplete: onDone });
  }

  return { initPage, pulseCard, openModal, closeModal, ready };
})();
