/**
 * Lumière Skin & Hair Clinic — Main JavaScript
 */

(function () {
  'use strict';

  /* ============================================
     Data
     ============================================ */
  const treatments = [
    {
      title: 'Acne Treatment',
      desc: 'Comprehensive acne management with medical-grade products, peels, and laser therapy for clear, blemish-free skin.',
      image: 'images/treatments/acne.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>'
    },
    {
      title: 'Acne Scar Removal',
      desc: 'Advanced microneedling, fractional laser, and subcision techniques to smooth and restore scarred skin texture.',
      image: 'images/treatments/acne-scars.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
    },
    {
      title: 'Pigmentation Treatment',
      desc: 'Target dark spots, sun damage, and uneven tone with Q-switched laser, chemical peels, and topical therapies.',
      image: 'images/treatments/pigmentation.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    },
    {
      title: 'Melasma',
      desc: 'Specialized protocols combining tranexamic acid, peels, and laser treatments to reduce melasma patches effectively.',
      image: 'images/treatments/melasma.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'
    },
    {
      title: 'Hair Fall Treatment',
      desc: 'Diagnose and treat hair loss with PRP, mesotherapy, oral medications, and personalized hair care regimens.',
      image: 'images/treatments/hair-fall.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    },
    {
      title: 'PRP Therapy',
      desc: 'Platelet-rich plasma injections stimulate natural collagen production for skin rejuvenation and hair regrowth.',
      image: 'images/treatments/prp.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
    },
    {
      title: 'HydraFacial',
      desc: 'Multi-step facial that cleanses, exfoliates, extracts, and hydrates for an instant glow with zero downtime.',
      image: 'images/treatments/hydrafacial.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>'
    },
    {
      title: 'Chemical Peels',
      desc: 'Medical-grade peels from superficial to deep to address acne, pigmentation, fine lines, and dull complexion.',
      image: 'images/treatments/chemical-peels.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
    },
    {
      title: 'Laser Hair Removal',
      desc: 'FDA-approved diode laser for permanent hair reduction on face and body with minimal discomfort.',
      image: 'images/treatments/laser-hair.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
    },
    {
      title: 'Anti-Aging Treatments',
      desc: 'Turn back the clock with RF microneedling, HIFU, and advanced serums for firmer, youthful skin.',
      image: 'images/treatments/anti-aging.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
    },
    {
      title: 'Botox & Fillers',
      desc: 'Expert injectables to smooth wrinkles, restore volume, and enhance facial contours with natural-looking results.',
      image: 'images/treatments/botox.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
    },
    {
      title: 'Skin Brightening',
      desc: 'Glutathione drips, vitamin C therapies, and brightening facials for a luminous, even-toned complexion.',
      image: 'images/treatments/brightening.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    },
    {
      title: 'Wart & Mole Removal',
      desc: 'Safe, precise removal of warts, moles, and skin tags using radiofrequency or laser with minimal scarring.',
      image: 'images/treatments/wart-mole.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
    },
    {
      title: 'Eczema & Psoriasis',
      desc: 'Evidence-based management including biologics, phototherapy, and topical treatments for chronic skin conditions.',
      image: 'images/treatments/eczema.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    },
    {
      title: 'Skin Allergy Treatment',
      desc: 'Patch testing, allergy identification, and customized treatment plans to relieve itching, rashes, and irritation.',
      image: 'images/treatments/allergy.jpg',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    }
  ];

  const galleryItems = [
    {
      title: 'Acne Treatment',
      image: 'images/gallery/before-after/acne-comparison.png',
      alt: 'Before and after acne treatment comparison'
    },
    {
      title: 'Redness Treatment',
      image: 'images/gallery/before-after/redness-comparison.png',
      alt: 'Before and after facial redness treatment comparison'
    },
    {
      title: 'Anti-Aging Treatment',
      image: 'images/gallery/before-after/anti-aging-comparison.png',
      alt: 'Before and after anti-aging skin treatment comparison'
    },
    {
      title: 'Skin Allergy Treatment',
      image: 'images/gallery/before-after/allergy-comparison.png',
      alt: 'Before and after skin allergy treatment comparison'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Mehta',
      treatment: 'Acne Treatment',
      photo: 'images/testimonials/patient-1.jpg',
      text: 'After struggling with acne for years, Dr. Sharma\'s personalized treatment plan completely transformed my skin. I finally feel confident going out without makeup. The clinic is beautiful and the staff is incredibly caring.'
    },
    {
      name: 'Rahul Kapoor',
      treatment: 'Hair Restoration — PRP',
      photo: 'images/testimonials/patient-2.jpg',
      text: 'I noticed significant hair regrowth after just 3 PRP sessions. Dr. Ananya explained every step of the process and the results exceeded my expectations. Highly recommend for anyone dealing with hair loss.'
    },
    {
      name: 'Sneha Reddy',
      treatment: 'Pigmentation & Melasma',
      photo: 'images/testimonials/patient-3.jpg',
      text: 'My melasma was affecting my self-esteem for years. The combination of laser and topical treatments at Lumière Clinic faded my dark patches remarkably. Professional, hygienic, and truly effective.'
    },
    {
      name: 'Anjali Desai',
      treatment: 'HydraFacial & Anti-Aging',
      photo: 'images/testimonials/patient-4.jpg',
      text: 'The HydraFacial gave me an instant glow before my wedding! I\'ve since started their anti-aging program and my skin has never looked better. Lumière Clinic is my go-to for all skin care needs.'
    },
    {
      name: 'Vikram Singh',
      treatment: 'Laser Hair Removal',
      photo: 'images/testimonials/patient-5.jpg',
      text: 'Painless and effective laser hair removal sessions. The technology they use is top-notch and the pricing is very reasonable compared to other clinics I visited. Great experience overall.'
    }
  ];

  const faqItems = [
    {
      question: 'What are the consultation fees?',
      answer: 'Our initial consultation fee is ₹1,500, which includes a comprehensive skin assessment and personalized treatment plan. This fee is adjusted against your first treatment if you proceed within 30 days.'
    },
    {
      question: 'How long do treatments typically take?',
      answer: 'Treatment duration varies by procedure. Consultations take 30–45 minutes, facials 45–60 minutes, laser sessions 15–45 minutes, and injectable treatments 20–30 minutes. We\'ll provide exact timelines during your consultation.'
    },
    {
      question: 'Are there any side effects?',
      answer: 'Most treatments have minimal side effects such as temporary redness, mild swelling, or dryness. Dr. Sharma will discuss all potential side effects specific to your treatment during the consultation and provide aftercare instructions.'
    },
    {
      question: 'What is the recovery time?',
      answer: 'Recovery depends on the treatment. HydraFacials have zero downtime, chemical peels may require 3–7 days, while laser treatments typically need 5–10 days. We always schedule treatments considering your lifestyle and events.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Medical dermatology treatments for conditions like eczema, psoriasis, and skin allergies may be covered by insurance. Cosmetic and aesthetic procedures are generally not covered. We provide detailed invoices for reimbursement claims.'
    },
    {
      question: 'How often are follow-up visits needed?',
      answer: 'Follow-up frequency depends on your treatment plan. Acne patients typically visit every 4–6 weeks, laser hair removal every 4–8 weeks, and anti-aging maintenance every 3–6 months. We\'ll create a schedule tailored to you.'
    }
  ];

  /* ============================================
     DOM Elements
     ============================================ */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');
  const bookingReset = document.getElementById('booking-reset');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxComparison = document.getElementById('lightbox-comparison');
  const lightboxCaption = document.getElementById('lightbox-caption');

  let currentTestimonial = 0;
  let currentLightboxIndex = 0;
  let testimonialAutoplay;

  /* ============================================
     Navigation
     ============================================ */
  function initNavigation() {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
      updateActiveNavLink();
    });
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ============================================
     Scroll Reveal
     ============================================ */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  }

  /* ============================================
     Render Treatments
     ============================================ */
  function renderTreatments() {
    const grid = document.getElementById('treatments-grid');
    if (!grid) return;

    grid.innerHTML = treatments.map((t, i) => `
      <article class="treatment-card reveal${i % 3 === 1 ? ' reveal--delay' : i % 3 === 2 ? ' reveal--delay-2' : ''}">
        <div class="treatment-card__icon">${t.icon}</div>
        <div class="treatment-card__body">
          <h3>${t.title}</h3>
          <p>${t.desc}</p>
          <a href="#booking" class="btn btn--primary btn--sm">Book Consultation</a>
        </div>
      </article>
    `).join('');

    initScrollReveal();
  }

  /* ============================================
     Before/After Slider
     ============================================ */
  function createBaSlider(beforeSrc, afterSrc, alt) {
    const slider = document.createElement('div');
    slider.className = 'ba-slider';
    slider.innerHTML = `
      <div class="ba-slider__after">
        <img src="${afterSrc}" alt="${alt} - after treatment" loading="lazy">
      </div>
      <div class="ba-slider__before">
        <img src="${beforeSrc}" alt="${alt} - before treatment" loading="lazy">
      </div>
      <div class="ba-slider__handle"></div>
      <span class="ba-slider__label ba-slider__label--before">Before</span>
      <span class="ba-slider__label ba-slider__label--after">After</span>
    `;

    initBaSlider(slider);
    return slider;
  }

  function initBaSlider(slider) {
    const before = slider.querySelector('.ba-slider__before');
    const handle = slider.querySelector('.ba-slider__handle');
    const beforeImg = slider.querySelector('.ba-slider__before img');
    let isDragging = false;

    function setPosition(x) {
      const rect = slider.getBoundingClientRect();
      let pos = ((x - rect.left) / rect.width) * 100;
      pos = Math.max(5, Math.min(95, pos));

      before.style.width = pos + '%';
      handle.style.left = pos + '%';
      beforeImg.style.setProperty('--ba-width', rect.width + 'px');
    }

    function onMove(e) {
      if (!isDragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPosition(x);
    }

    function onStart(e) {
      isDragging = true;
      slider.style.cursor = 'col-resize';
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPosition(x);
    }

    function onEnd() {
      isDragging = false;
      slider.style.cursor = 'col-resize';
    }

    slider.addEventListener('mousedown', onStart);
    slider.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);

    const resizeObserver = new ResizeObserver(() => {
      beforeImg.style.setProperty('--ba-width', slider.offsetWidth + 'px');
    });
    resizeObserver.observe(slider);

    setPosition(slider.getBoundingClientRect().left + slider.offsetWidth * 0.5);
  }

  function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = galleryItems.map((item, i) => `
      <div class="gallery-item reveal${i % 2 === 1 ? ' reveal--delay' : ''}" data-index="${i}">
        <div class="gallery-item__header">
          <h3>${item.title}</h3>
          <button class="gallery-item__expand" aria-label="Expand ${item.title} comparison">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
          </button>
        </div>
        <div class="gallery-item__slider"></div>
      </div>
    `).join('');

    grid.querySelectorAll('.gallery-item').forEach((el, i) => {
      const sliderContainer = el.querySelector('.gallery-item__slider');
      const image = document.createElement('img');
      image.className = 'gallery-item__comparison-image';
      image.src = galleryItems[i].image;
      image.alt = galleryItems[i].alt || galleryItems[i].title;
      image.loading = 'lazy';
      sliderContainer.appendChild(image);

      el.querySelector('.gallery-item__expand').addEventListener('click', () => openLightbox(i));
      image.addEventListener('dblclick', () => openLightbox(i));
    });

    initScrollReveal();
  }

  /* ============================================
     Lightbox
     ============================================ */
  function openLightbox(index) {
    currentLightboxIndex = index;
    renderLightboxContent();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    lightboxComparison.innerHTML = '';
  }

  function renderLightboxContent() {
    const item = galleryItems[currentLightboxIndex];
    lightboxComparison.innerHTML = '';
    const image = document.createElement('img');
    image.className = 'gallery-item__comparison-image gallery-item__comparison-image--lightbox';
    image.src = item.image;
    image.alt = item.alt || item.title;
    lightboxComparison.appendChild(image);
    lightboxCaption.textContent = item.title + ' - Before & After';
  }

  function initLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    lightboxPrev.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
      renderLightboxContent();
    });

    lightboxNext.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
      renderLightboxContent();
    });

    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev.click();
      if (e.key === 'ArrowRight') lightboxNext.click();
    });
  }

  /* ============================================
     Testimonials Carousel
     ============================================ */
  function renderTestimonials() {
    const track = document.getElementById('testimonials-track');
    const dots = document.getElementById('testimonials-dots');
    if (!track || !dots) return;

    const starSvg = '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

    track.innerHTML = testimonials.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-card__inner">
          <img class="testimonial-card__photo" src="${t.photo}" alt="${t.name}" width="80" height="80" loading="lazy">
          <div class="testimonial-card__stars">${starSvg.repeat(5)}</div>
          <p class="testimonial-card__text">"${t.text}"</p>
          <p class="testimonial-card__author">${t.name}</p>
          <p class="testimonial-card__treatment">${t.treatment}</p>
        </div>
      </div>
    `).join('');

    dots.innerHTML = testimonials.map((_, i) =>
      `<button class="testimonials__dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
    ).join('');

    dots.querySelectorAll('.testimonials__dot').forEach(dot => {
      dot.addEventListener('click', () => goToTestimonial(parseInt(dot.dataset.index)));
    });
  }

  function goToTestimonial(index) {
    currentTestimonial = index;
    const track = document.getElementById('testimonials-track');
    const dots = document.querySelectorAll('.testimonials__dot');

    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function initTestimonials() {
    document.getElementById('testimonial-prev').addEventListener('click', () => {
      goToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
      resetAutoplay();
    });

    document.getElementById('testimonial-next').addEventListener('click', () => {
      goToTestimonial((currentTestimonial + 1) % testimonials.length);
      resetAutoplay();
    });

    testimonialAutoplay = setInterval(() => {
      goToTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 6000);
  }

  function resetAutoplay() {
    clearInterval(testimonialAutoplay);
    testimonialAutoplay = setInterval(() => {
      goToTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 6000);
  }

  /* ============================================
     FAQ Accordion
     ============================================ */
  function renderFAQ() {
    const list = document.getElementById('faq-list');
    if (!list) return;

    list.innerHTML = faqItems.map((item, i) => `
      <div class="faq-item${i === 0 ? ' active' : ''}">
        <button class="faq-item__question" aria-expanded="${i === 0}">
          ${item.question}
          <span class="faq-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </span>
        </button>
        <div class="faq-item__answer">
          <p>${item.answer}</p>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.faq-item__question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');

        list.querySelectorAll('.faq-item').forEach(el => {
          el.classList.remove('active');
          el.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ============================================
     Booking Form
     ============================================ */
  function initBookingForm() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    bookingForm.addEventListener('submit', e => {
      e.preventDefault();

      const fields = bookingForm.querySelectorAll('[required]');
      let valid = true;

      fields.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      const email = document.getElementById('email');
      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      if (!valid) return;

      bookingForm.hidden = true;
      bookingSuccess.hidden = false;
      bookingForm.reset();
    });

    bookingReset.addEventListener('click', () => {
      bookingSuccess.hidden = true;
      bookingForm.hidden = false;
    });
  }

  /* ============================================
     Initialize
     ============================================ */
  function init() {
    initNavigation();
    initScrollReveal();
    renderTreatments();
    renderGallery();
    renderTestimonials();
    initTestimonials();
    renderFAQ();
    initBookingForm();
    initLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
