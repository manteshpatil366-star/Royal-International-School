(function () {
  'use strict';

  const CFG = window.RoyalSchoolConfig || {};
  try {
    if (CFG.applyDOM) CFG.applyDOM();
  } catch (err) {
    console.error('RoyalSchoolConfig applyDOM failed:', err);
  }

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', scrollY > 48);
    const sticky = document.getElementById('stickyCta');
    if (sticky) sticky.classList.toggle('is-visible', scrollY > 500);
  }, { passive: true });

  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let id = '';
    sections.forEach((s) => {
      if (scrollY >= s.offsetTop - 100) id = s.id;
    });
    document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
    });
  }, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof RoyalSchoolGSAP !== 'undefined') {
    RoyalSchoolGSAP.initPage();
  } else if (reduced) {
    reveals.forEach((el) => el.classList.add('visible'));
  } else {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => obs.observe(el));
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const top = t.getBoundingClientRect().top + scrollY - 76;
      scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  document.getElementById('admissionForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = (fd.get('name') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const grade = (fd.get('grade') || '').toString().trim();
    const c = CFG.contact || {};
    const school = CFG.school?.name || 'Royal Kids International';
    const text = `*Admission Enquiry — ${school}*\n\nName: ${name}\nPhone: ${phone}\nGrade applying for: ${grade}\n\n— Sent from school website`;
    const wa = c.whatsapp || '918012345678';
    window.location.href = `https://api.whatsapp.com/send?phone=${wa}&text=${encodeURIComponent(text)}`;
    const msg = document.getElementById('formMsg');
    if (msg) {
      msg.hidden = false;
      msg.textContent = 'WhatsApp opened — tap Send to submit your enquiry.';
    }
  });

  /* Grade level detail modal */
  const modal = document.getElementById('programModal');
  const backdrop = document.getElementById('programModalBackdrop');
  const closeBtn = document.getElementById('programModalClose');
  const heroImg = document.getElementById('programModalHero');
  const gallery = document.getElementById('programModalGallery');
  const programs = CFG.programs || [];

  function getProgram(id) {
    return programs.find((p) => p.id === id);
  }

  function setHeroImage(src, alt) {
    if (!heroImg) return;
    heroImg.src = src;
    heroImg.alt = alt;
    gallery?.querySelectorAll('img').forEach((img) => {
      img.classList.toggle('active', img.getAttribute('src') === src);
    });
  }

  function openProgramModal(id) {
    const p = getProgram(id);
    if (!p || !modal) return;

    const card = document.querySelector(`[data-program-id="${id}"]`);
    if (typeof RoyalSchoolGSAP !== 'undefined') RoyalSchoolGSAP.pulseCard(card);

    document.getElementById('programModalTitle').textContent = p.title;
    document.getElementById('programModalGrades').textContent = p.grades;
    document.getElementById('programModalAbout').textContent = p.about || p.desc;
    document.getElementById('programModalAcademics').innerHTML = (p.academics || [])
      .map((item) => `<li>${item}</li>`).join('');

    const extra = document.getElementById('programModalExtra');
    if (extra) {
      extra.innerHTML = (p.extracurricular || []).map((item) => `
        <div class="extracurricular-card">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>
      `).join('');
    }

    const images = p.gallery?.length ? p.gallery : [p.image];
    if (gallery) {
      if (images.length <= 1) {
        gallery.hidden = true;
        gallery.innerHTML = '';
      } else {
        gallery.hidden = false;
        gallery.innerHTML = images.map((src, i) => `
          <img src="${src}" alt="${p.title} — photo ${i + 1}" width="800" height="500" loading="lazy" decoding="async"${i === 0 ? ' class="active"' : ''}>
        `).join('');
        gallery.querySelectorAll('img').forEach((img) => {
          img.addEventListener('click', () => setHeroImage(img.getAttribute('src'), img.alt));
        });
      }
    }

    const heroWrap = document.querySelector('.program-modal-hero');
    if (heroWrap) {
      heroWrap.className = `program-modal-hero program-modal-hero-${p.icon || p.id}`;
    }

    setHeroImage(p.image, `${p.title} at ${CFG.school?.name || 'Royal Kids International'}`);

    const cta = document.getElementById('programModalCta');
    if (cta) cta.textContent = `Apply for ${p.title}`;

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('program-modal-open');
    closeBtn?.focus();

    if (typeof RoyalSchoolGSAP !== 'undefined') {
      RoyalSchoolGSAP.openModal(modal);
    }
  }

  function closeProgramModal() {
    if (!modal) return;

    const finish = () => {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('program-modal-open');
    };

    if (typeof RoyalSchoolGSAP !== 'undefined' && RoyalSchoolGSAP.ready()) {
      RoyalSchoolGSAP.closeModal(modal, finish);
    } else {
      finish();
    }
  }

  document.getElementById('programsGrid')?.addEventListener('click', (e) => {
    const card = e.target.closest('[data-program-id]');
    if (!card) return;
    openProgramModal(card.getAttribute('data-program-id'));
  });

  document.getElementById('programsGrid')?.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-program-id]');
    if (!card) return;
    e.preventDefault();
    openProgramModal(card.getAttribute('data-program-id'));
  });

  closeBtn?.addEventListener('click', closeProgramModal);
  backdrop?.addEventListener('click', closeProgramModal);

  document.getElementById('programModalCta')?.addEventListener('click', () => {
    closeProgramModal();
  });

  /* Facility detail modal */
  const facilityModal = document.getElementById('facilityModal');
  const facilityBackdrop = document.getElementById('facilityModalBackdrop');
  const facilityCloseBtn = document.getElementById('facilityModalClose');
  const facilityHeroImg = document.getElementById('facilityModalHero');
  const facilityGallery = document.getElementById('facilityModalGallery');
  const facilities = CFG.facilities || [];

  function getFacility(id) {
    return facilities.find((f) => f.id === id);
  }

  function setFacilityHeroImage(src, alt) {
    if (!facilityHeroImg) return;
    facilityHeroImg.src = src;
    facilityHeroImg.alt = alt;
    facilityGallery?.querySelectorAll('img').forEach((img) => {
      img.classList.toggle('active', img.getAttribute('src') === src);
    });
  }

  function openFacilityModal(id) {
    const f = getFacility(id);
    if (!f || !facilityModal) return;

    const card = document.querySelector(`[data-facility-id="${id}"]`);
    if (typeof RoyalSchoolGSAP !== 'undefined') RoyalSchoolGSAP.pulseCard(card);

    document.getElementById('facilityModalTitle').textContent = f.title;
    document.getElementById('facilityModalAbout').textContent = f.about || f.text;
    document.getElementById('facilityModalFeatures').innerHTML = (f.features || [])
      .map((item) => `<li>${item}</li>`).join('');

    const images = f.gallery?.length ? f.gallery : [f.image];
    if (facilityGallery) {
      if (images.length <= 1) {
        facilityGallery.hidden = true;
        facilityGallery.innerHTML = '';
      } else {
        facilityGallery.hidden = false;
        facilityGallery.innerHTML = images.map((src, i) => `
          <img src="${src}" alt="${f.title} — photo ${i + 1}" loading="lazy" decoding="async"${i === 0 ? ' class="active"' : ''}>
        `).join('');
        facilityGallery.querySelectorAll('img').forEach((img) => {
          img.addEventListener('click', () => setFacilityHeroImage(img.getAttribute('src'), img.alt));
        });
      }
    }

    setFacilityHeroImage(f.image, `${f.title} at ${CFG.school?.name || 'Royal Kids International'}`);

    facilityModal.hidden = false;
    facilityModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('program-modal-open');
    facilityCloseBtn?.focus();

    if (typeof RoyalSchoolGSAP !== 'undefined') {
      RoyalSchoolGSAP.openModal(facilityModal);
    }
  }

  function closeFacilityModal() {
    if (!facilityModal) return;

    const finish = () => {
      facilityModal.hidden = true;
      facilityModal.setAttribute('aria-hidden', 'true');
      if (!modal || modal.hidden) document.body.classList.remove('program-modal-open');
    };

    if (typeof RoyalSchoolGSAP !== 'undefined' && RoyalSchoolGSAP.ready()) {
      RoyalSchoolGSAP.closeModal(facilityModal, finish);
    } else {
      finish();
    }
  }

  document.getElementById('facilitiesGrid')?.addEventListener('click', (e) => {
    const card = e.target.closest('[data-facility-id]');
    if (!card) return;
    openFacilityModal(card.getAttribute('data-facility-id'));
  });

  document.getElementById('facilitiesGrid')?.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-facility-id]');
    if (!card) return;
    e.preventDefault();
    openFacilityModal(card.getAttribute('data-facility-id'));
  });

  facilityCloseBtn?.addEventListener('click', closeFacilityModal);
  facilityBackdrop?.addEventListener('click', closeFacilityModal);
  document.getElementById('facilityModalCta')?.addEventListener('click', closeFacilityModal);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (modal && !modal.hidden) closeProgramModal();
    if (facilityModal && !facilityModal.hidden) closeFacilityModal();
  });

  /* FAQ accordion */
  document.getElementById('faqList')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const panel = item?.querySelector('.faq-a');
    const inner = panel?.querySelector('.faq-a-inner');
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.faq-item.is-open').forEach((open) => {
      if (open === item) return;
      open.classList.remove('is-open');
      open.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
      const p = open.querySelector('.faq-a');
      if (p) p.style.maxHeight = '0';
    });

    if (!item || !panel || !inner) return;
    item.classList.toggle('is-open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.style.maxHeight = !isOpen ? `${inner.scrollHeight}px` : '0';
  });

  /* Testimonial carousel */
  const track = document.getElementById('testimonialTrack');
  const slides = track ? [...track.children] : [];
  let testimonialIndex = 0;
  let testimonialTimer;

  function goTestimonial(i) {
    if (!track || !slides.length) return;
    testimonialIndex = (i + slides.length) % slides.length;
    const offset = testimonialIndex * track.parentElement.offsetWidth;
    if (typeof gsap !== 'undefined' && RoyalSchoolGSAP?.ready?.()) {
      gsap.to(track, { x: -offset, duration: 0.65, ease: 'power3.inOut' });
    } else {
      track.style.transform = `translateX(-${offset}px)`;
    }
    document.querySelectorAll('.testimonial-dot').forEach((d, idx) => {
      d.classList.toggle('active', idx === testimonialIndex);
    });
  }

  function startTestimonialAutoplay() {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(() => goTestimonial(testimonialIndex + 1), 5500);
  }

  if (slides.length) {
    goTestimonial(0);
    startTestimonialAutoplay();
    document.getElementById('testimonialPrev')?.addEventListener('click', () => {
      goTestimonial(testimonialIndex - 1);
      startTestimonialAutoplay();
    });
    document.getElementById('testimonialNext')?.addEventListener('click', () => {
      goTestimonial(testimonialIndex + 1);
      startTestimonialAutoplay();
    });
    document.getElementById('testimonialDots')?.addEventListener('click', (e) => {
      const dot = e.target.closest('.testimonial-dot');
      if (!dot) return;
      goTestimonial(parseInt(dot.getAttribute('data-index'), 10));
      startTestimonialAutoplay();
    });
  }
})();
