/**
 * ROYAL KIDS INTERNATIONAL — Edit all school details here.
 */
const RoyalSchoolConfig = (function () {
  'use strict';

  const config = {
    school: {
      name: 'Royal Kids International',
      shortName: 'RKI',
      tagline: 'Excellence in Education · Character · Leadership',
      motto: 'Learn · Lead · Serve',
      established: '2026',
      board: 'CBSE',
      grades: 'Nursery to Grade XII',
    },

    contact: {
      phone: '918105249726',
      phoneDisplay: '+91 81052 49726',
      email: 'info@royalinternationalschool.edu.in',
      whatsapp: '918105249726',
      address: 'Main Road, Devadurga, Raichur District, Karnataka 584111',
      addressShort: 'Devadurga, Karnataka',
      hours: 'Mon–Fri 8:00 AM – 4:00 PM',
      mapEmbed: 'https://maps.google.com/maps?q=Devadurga+Karnataka+584111&z=14&output=embed',
      mapLink: 'https://maps.google.com/?q=Devadurga+Karnataka+584111',
    },

    hero: {
      headline: 'Shaping Tomorrow\'s Leaders',
      subheadline: 'A world-class CBSE school in Devadurga with modern labs, sports, arts & values-based education.',
      ctaPrimary: 'Apply for Admission',
      ctaSecondary: 'Download Prospectus',
      image: 'images/campus/hero-campus.jpg',
      imageAlt: 'Royal Kids International campus in Devadurga',
    },

    stats: [],

    about: {
      title: 'About Royal Kids International',
      paragraphs: [
        'Royal Kids International is a brand-new CBSE school in Devadurga, opening for session 2026–27 with holistic education from Nursery through Grade XII.',
        'We blend academic rigour with co-curricular excellence — science labs, digital classrooms, sports grounds, music & art studios, and leadership programmes that prepare students for the future.',
        'Our campus is a safe, inclusive community where every child is known, nurtured, and challenged to reach their full potential.',
      ],
    },

    programs: [
      {
        id: 'early',
        icon: 'early',
        title: 'Early Years',
        grades: 'Nursery – UKG',
        desc: 'Play-based learning, phonics, motor skills & social development in a caring environment.',
        image: 'images/programs/early-years.jpg',
        gallery: [
          'images/programs/early-years.jpg',
          'images/campus/arts.jpg',
        ],
        about: 'Our Early Years programme creates a warm, joyful start to school life. Children learn through stories, songs, hands-on play, and guided activities that build language, numeracy, and social confidence. Small class sizes ensure every child receives individual attention from trained early-years educators.',
        academics: ['Phonics & pre-reading', 'Number sense & patterns', 'Environmental awareness', 'Kannada & English introduction', 'Fine & gross motor development', 'Values & social skills'],
        extracurricular: [
          { name: 'Art & Craft Studio', desc: 'Painting, clay modelling, collage & festival crafts every week.' },
          { name: 'Music & Movement', desc: 'Rhymes, rhythm instruments, dance & annual cultural performances.' },
          { name: 'Outdoor Play Park', desc: 'Sand play, slides, balance games & supervised free play.' },
          { name: 'Story & Drama Corner', desc: 'Puppet shows, role-play & storytelling to build imagination.' },
          { name: 'Splash Pool (Summer)', desc: 'Safe water play sessions under teacher supervision.' },
        ],
      },
      {
        id: 'primary',
        icon: 'primary',
        title: 'Primary School',
        grades: 'Grade I – V',
        desc: 'Strong foundations in English, Kannada, Maths & EVS with activity-based teaching.',
        image: 'images/programs/primary.jpg',
        gallery: [
          'images/programs/primary.jpg',
          'images/campus/sports.jpg',
        ],
        about: 'Primary years focus on strong fundamentals through CBSE-aligned curriculum, smart classrooms, and continuous assessment. Students develop reading fluency, mathematical reasoning, scientific curiosity, and digital literacy in a structured yet engaging environment.',
        academics: ['English & Kannada language', 'Mathematics & mental math', 'EVS & general science', 'Computer basics & coding intro', 'CBSE continuous evaluation', 'Life skills & citizenship'],
        extracurricular: [
          { name: 'Sports & Games', desc: 'Cricket, football, athletics, kabaddi & inter-house tournaments.' },
          { name: 'Scouts & Guides / Cubs', desc: 'Discipline, camping skills & community service activities.' },
          { name: 'Art, Music & Dance', desc: 'Weekly classes plus participation in Annual Day & competitions.' },
          { name: 'Reading & Library Club', desc: 'Book weeks, storytelling contests & reading challenges.' },
          { name: 'Science & Nature Club', desc: 'Garden projects, simple experiments & science fair entries.' },
          { name: 'Yoga & Wellness', desc: 'Morning yoga, meditation & health awareness sessions.' },
        ],
      },
      {
        id: 'middle',
        icon: 'middle',
        title: 'Middle School',
        grades: 'Grade VI – VIII',
        desc: 'Conceptual learning, STEM clubs, languages & life skills for growing minds.',
        image: 'images/programs/middle.jpg',
        gallery: [
          'images/programs/middle.jpg',
          'images/campus/hero-campus.jpg',
        ],
        about: 'Middle school bridges foundational learning with deeper subject mastery. Students explore laboratory science, advanced mathematics, third languages, and critical thinking through projects, debates, and technology-integrated lessons.',
        academics: ['Physics, Chemistry, Biology labs', 'Algebra, geometry & data handling', 'History, geography & civics', 'Hindi / Sanskrit options', 'ICT & robotics basics', 'Career awareness workshops'],
        extracurricular: [
          { name: 'Robotics & STEM Lab', desc: 'Arduino kits, coding clubs & inter-school robotics meets.' },
          { name: 'Debate & Literary Society', desc: 'Elocution, essay writing, MUN prep & quiz competitions.' },
          { name: 'Sports Academy', desc: 'Specialized coaching in cricket, basketball, badminton & chess.' },
          { name: 'Performing Arts', desc: 'Band, classical dance, western music & theatre workshops.' },
          { name: 'Eco & Social Service Club', desc: 'Tree plantation, cleanliness drives & NGO partnerships.' },
          { name: 'Leadership Camps', desc: 'House captain roles, outbound trips & team-building retreats.' },
        ],
      },
      {
        id: 'senior',
        icon: 'senior',
        title: 'Senior Secondary',
        grades: 'Grade IX – XII',
        desc: 'Science, Commerce & Humanities streams with board exam coaching & career guidance.',
        image: 'images/programs/senior.jpg',
        gallery: [
          'images/programs/senior.jpg',
          'images/campus/arts.jpg',
        ],
        about: 'Senior students choose Science, Commerce, or Humanities streams with expert faculty, rigorous board preparation, mock tests, and personalised counselling for JEE, NEET, CA foundation, and university admissions in India and abroad.',
        academics: ['Science: PCM / PCB streams', 'Commerce: Accounts, Business, Economics', 'Humanities: History, Polity, Psychology', 'Board exam coaching & test series', 'Career & college counselling', 'Research projects & internships'],
        extracurricular: [
          { name: 'Olympiad & Competitive Prep', desc: 'NTSE, Olympiads, JEE/NEET foundation & aptitude training.' },
          { name: 'Sports & Athletics', desc: 'District-level teams, annual sports meet & fitness programmes.' },
          { name: 'Cultural & Fine Arts', desc: 'Annual day, youth festivals, photography & film-making clubs.' },
          { name: 'Entrepreneurship Cell', desc: 'Startup ideas, business plans & market-day events.' },
          { name: 'Community Leadership', desc: 'Student council, peer mentoring & social outreach projects.' },
          { name: 'Foreign Language & Exchange', desc: 'German/French clubs & cultural exchange programmes.' },
        ],
      },
    ],

    facilities: [
      {
        id: 'classrooms',
        title: 'Smart Classrooms',
        text: 'Digital boards, projectors & interactive learning in every wing.',
        image: 'images/campus/hero-campus.jpg',
        gallery: ['images/campus/hero-campus.jpg', 'images/programs/primary.jpg', 'images/programs/early-years.jpg'],
        about: 'Every classroom at Royal Kids International is a smart learning space equipped with interactive digital boards, high-speed connectivity, and multimedia tools. Teachers use visual aids, simulations, and collaborative apps to make lessons engaging across all grades — from storytelling in early years to concept mapping in senior classes.',
        features: ['75″ interactive smart boards in every room', 'High-speed Wi-Fi & secure student network', 'CBSE-aligned digital content library', 'Air-conditioned, ergonomically designed seating', 'Real-time parent updates via school app'],
      },
      {
        id: 'labs',
        title: 'Science & Computer Labs',
        text: 'Fully equipped labs for hands-on experiments & coding.',
        image: 'images/programs/middle.jpg',
        gallery: ['images/programs/middle.jpg', 'images/programs/senior.jpg', 'images/programs/primary.jpg'],
        about: 'Our science and computer laboratories give students the freedom to explore, experiment, and innovate. Physics, Chemistry, and Biology labs follow strict safety standards with modern apparatus. The computer lab hosts coding, robotics, and digital literacy programmes aligned with NEP 2020 skills.',
        features: ['Separate Physics, Chemistry & Biology labs', 'Certified lab instructors & safety equipment', '40+ computer stations with coding curriculum', 'Robotics kits & Arduino workshops', 'Annual science exhibition & project showcase'],
      },
      {
        id: 'sports',
        title: 'Sports Complex',
        text: 'Cricket, football, basketball courts & athletics track.',
        image: 'images/campus/sports.jpg',
        gallery: ['images/campus/sports.jpg', 'images/campus/hero-campus.jpg', 'images/programs/primary.jpg'],
        about: 'Physical fitness and teamwork are central to life at RKI. Our sprawling sports complex includes cricket and football grounds, basketball courts, athletics track, and indoor games facilities. Professional coaches train students for inter-house, district, and state-level competitions.',
        features: ['Full-size cricket & football grounds', 'Basketball, badminton & volleyball courts', '200m athletics track & field events zone', 'Indoor chess, table tennis & carrom', 'Annual sports meet & house championships'],
      },
      {
        id: 'arts',
        title: 'Arts & Music Studios',
        text: 'Dance, drama, music rooms for creative expression.',
        image: 'images/campus/arts.jpg',
        gallery: ['images/campus/arts.jpg', 'images/programs/early-years.jpg', 'images/campus/sports.jpg'],
        about: 'Creativity finds a home in our dedicated arts wing. Students explore classical and contemporary dance, vocal and instrumental music, theatre, and fine arts under expert mentors. The auditorium hosts annual day, inter-school festivals, and weekly cultural assemblies.',
        features: ['Sound-proof music & recording rooms', 'Dance studio with mirrors & sprung floor', 'Art room for painting, sculpture & crafts', '500-seat auditorium with stage lighting', 'Annual day & youth festival productions'],
      },
      {
        id: 'library',
        title: 'Library & Reading Hub',
        text: '8,000+ books, quiet study zones & digital resources.',
        image: 'images/programs/senior.jpg',
        gallery: ['images/programs/senior.jpg', 'images/programs/primary.jpg', 'images/campus/hero-campus.jpg'],
        about: 'The Royal Kids International library is a quiet haven for readers and researchers. With over 8,000 books, reference materials, newspapers, and digital databases, students build reading habits and research skills. Senior students access dedicated study carrels for board exam preparation.',
        features: ['8,000+ books, journals & reference titles', 'Digital library & e-book subscriptions', 'Quiet reading zones & group study areas', 'Weekly book club & reading challenges', 'Librarian-led research skills workshops'],
      },
      {
        id: 'transport',
        title: 'Safe Transport & Security',
        text: 'GPS-enabled buses, CCTV campus & trained staff.',
        image: 'images/campus/hero-campus.jpg',
        gallery: ['images/campus/hero-campus.jpg', 'images/campus/sports.jpg', 'images/programs/middle.jpg'],
        about: 'Student safety is our highest priority. A fleet of GPS-enabled school buses covers major routes across Devadurga and Raichur district with trained attendants. The campus is monitored 24/7 with CCTV, controlled entry points, and trained security personnel. Fire safety drills and first-aid teams are always on standby.',
        features: ['GPS-tracked buses with parent SMS alerts', 'Trained bus attendants on every route', 'CCTV across campus & perimeter fencing', 'Controlled visitor entry & ID verification', 'Regular fire drills & on-campus first-aid team'],
      },
    ],

    admissions: {
      session: '2026–27',
      open: true,
      steps: [
        'Fill the online enquiry form or visit campus',
        'Attend interaction / assessment (as per grade)',
        'Submit documents & pay registration fee',
        'Confirm admission & complete fee payment',
      ],
      documents: ['Birth certificate', 'Previous report card', 'Transfer certificate (if applicable)', 'Aadhaar & address proof', 'Passport-size photos'],
    },

    highlights: [
      { title: 'CBSE Curriculum', text: 'Nationally recognised syllabus with continuous assessment.' },
      { title: 'Trained Faculty', text: 'Experienced teachers with regular professional development.' },
      { title: 'Holistic Growth', text: 'Sports, arts, debates, robotics & community service.' },
      { title: 'Parent Partnership', text: 'Regular PTMs, app updates & transparent communication.' },
    ],

    testimonials: [
      { name: 'Mrs. Priya Reddy', role: 'Parent, Grade 8', text: 'My daughter has grown in confidence. The teachers genuinely care about every student.' },
      { name: 'Mr. Arun Kumar', role: 'Parent, Grade 5', text: 'Excellent infrastructure and discipline. Worth every rupee for quality education in Raichur.' },
      { name: 'Ananya S.', role: 'Alumni, Class of 2024', text: 'RKI prepared me well for college. The science labs and mentorship made the difference.' },
    ],

    news: [
      { date: 'Mar 2026', title: 'Annual Day 2026 — registrations open for cultural performances' },
      { date: 'Feb 2026', title: 'Inter-school science exhibition — RKI wins 3 gold medals' },
      { date: 'Jan 2026', title: 'Admissions 2026–27 now open for all grades' },
    ],

    trust: [
      'CBSE Affiliated',
      'Nursery to Grade XII',
      'New School · Session 2026–27',
      'Admissions Open',
      'Safe & Secure Campus',
      'GPS-Enabled Transport',
      'Holistic Education',
      'Devadurga, Karnataka',
    ],

    principal: {
      name: 'Dr. Meera Krishnan',
      title: 'Principal, Royal Kids International',
      quote: 'Every child carries unique potential. Our role is to create an environment where curiosity thrives, character grows, and academic excellence becomes a natural outcome — not pressure.',
      image: 'images/programs/senior.jpg',
    },

    gallery: [
      { image: 'images/campus/hero-campus.jpg', caption: 'Our sprawling green campus' },
      { image: 'images/programs/early-years.jpg', caption: 'Joyful early-years classrooms' },
      { image: 'images/programs/primary.jpg', caption: 'Interactive primary learning' },
      { image: 'images/programs/middle.jpg', caption: 'State-of-the-art science labs' },
      { image: 'images/campus/sports.jpg', caption: 'Championship sports facilities' },
      { image: 'images/campus/arts.jpg', caption: 'Annual cultural celebrations' },
      { image: 'images/programs/senior.jpg', caption: 'Senior students & mentorship' },
    ],

    faq: [
      { q: 'What curriculum does Royal Kids International follow?', a: 'We follow the CBSE curriculum from Nursery through Grade XII, with continuous assessment, structured academics, and rich co-curricular programmes.' },
      { q: 'When are admissions open for 2026–27?', a: 'Admissions for session 2026–27 are now open across all grades. Submit the enquiry form or visit campus to begin the process.' },
      { q: 'Does the school provide transport?', a: 'Yes. GPS-enabled buses cover major routes in Devadurga and surrounding areas with trained attendants and strict safety protocols.' },
      { q: 'What extracurricular activities are offered?', a: 'Sports, music, dance, robotics, debates, scouts, community service, Olympiad prep, and leadership programmes across all grade levels.' },
      { q: 'Can I schedule a campus tour?', a: 'Absolutely. Call our admissions office or send a WhatsApp enquiry to book a personalised campus walkthrough.' },
    ],

    footer: {
      blurb: 'A new premier CBSE school in Devadurga. Nurturing academic excellence, character & leadership from day one.',
      explore: [
        { label: 'About Us', href: '#about' },
        { label: 'Academics', href: '#programs' },
        { label: 'Campus', href: '#facilities' },
        { label: 'Admissions', href: '#admissions' },
      ],
      admissions: [
        { label: 'Apply Online', href: '#admissions' },
        { label: 'Documents Required', href: '#admissions' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  };

  function splitHeadline(el, text) {
    if (!el || !text) return;
    const words = text.trim().split(/\s+/);
    const mid = Math.ceil(words.length / 2);
    const line = (arr) => arr.map((w) => `<span class="hero-word">${w}</span>`).join(' ');
    el.innerHTML = `<span class="hero-line">${line(words.slice(0, mid))}</span><span class="hero-line">${line(words.slice(mid))}</span>`;
  }

  function trustItem(label) {
    return `<span class="trust-item"><span class="trust-dot"></span>${label}</span>`;
  }

  function applyDOM() {
    const s = config.school;
    const c = config.contact;
    const h = config.hero;

    document.title = `${s.name} | ${s.board} School in Devadurga`;

    document.querySelectorAll('[data-cfg="school-name"]').forEach((el) => { el.textContent = s.name; });
    document.querySelectorAll('[data-cfg="short-name"]').forEach((el) => { el.textContent = s.shortName; });
    const navSchool = document.getElementById('navSchoolName');
    if (navSchool) navSchool.textContent = s.name;
    const loaderName = document.getElementById('loaderSchoolName');
    if (loaderName) loaderName.textContent = s.name;
    document.querySelectorAll('[data-cfg="tagline"]').forEach((el) => { el.textContent = s.tagline; });
    document.querySelectorAll('[data-cfg="motto"]').forEach((el) => { el.textContent = s.motto; });
    document.querySelectorAll('[data-cfg="board"]').forEach((el) => { el.textContent = s.board; });
    document.querySelectorAll('[data-cfg="grades"]').forEach((el) => { el.textContent = s.grades; });
    document.querySelectorAll('[data-cfg="established"]').forEach((el) => { el.textContent = s.established; });

    const heroH = document.getElementById('heroHeadline') || document.querySelector('[data-cfg="hero-headline"]');
    if (heroH) splitHeadline(heroH, h.headline);
    const heroS = document.querySelector('[data-cfg="hero-sub"]');
    if (heroS) heroS.textContent = h.subheadline;

    const heroBg = document.getElementById('heroBgImg');
    if (heroBg && h.image) {
      heroBg.src = h.image;
      heroBg.alt = '';
    }

    const statsEl = document.getElementById('statsGrid');
    if (statsEl && config.stats.length) {
      statsEl.innerHTML = config.stats.map((st) => `
        <div class="stat-card">
          <strong>${st.value}</strong>
          <span>${st.label}</span>
        </div>
      `).join('');
    }

    const aboutP = document.getElementById('aboutText');
    if (aboutP && config.about.paragraphs.length) {
      const [first, ...rest] = config.about.paragraphs;
      aboutP.innerHTML = `<p class="lead">${first}</p>${rest.map((p) => `<p>${p}</p>`).join('')}`;
    }

    const trustHtml = config.trust.map(trustItem).join('');
    const trackA = document.getElementById('trustTrackA');
    const trackB = document.getElementById('trustTrackB');
    if (trackA) trackA.innerHTML = trustHtml;
    if (trackB) trackB.innerHTML = trustHtml;

    const principal = document.getElementById('principalBlock');
    if (principal && config.principal) {
      const p = config.principal;
      principal.innerHTML = `
        <div class="principal-photo">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="principal-content">
          <span class="section-label">Leadership</span>
          <p class="principal-quote">"${p.quote}"</p>
          <div class="principal-meta">
            <strong>${p.name}</strong>
            <span>${p.title}</span>
          </div>
        </div>
      `;
    }

    const gallery = document.getElementById('galleryTrack');
    if (gallery) {
      gallery.innerHTML = config.gallery.map((g) => `
        <figure class="gallery-item">
          <img src="${g.image}" alt="${g.caption}" loading="lazy">
          <figcaption>${g.caption}</figcaption>
        </figure>
      `).join('');
    }

    const prog = document.getElementById('programsGrid');
    if (prog) {
      prog.innerHTML = config.programs.map((p) => `
        <article class="program-card premium-card" data-program-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title} details">
          <div class="program-card-media program-card-img-${p.icon}">
            <img src="${p.image}" alt="${p.title} at Royal Kids International" loading="lazy" decoding="async">
            <div class="program-card-overlay">
              <span class="program-grades">${p.grades}</span>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <span class="program-explore">View programme &amp; activities →</span>
            </div>
          </div>
        </article>
      `).join('');
    }

    const fac = document.getElementById('facilitiesGrid');
    if (fac) {
      fac.innerHTML = config.facilities.map((f) => `
        <li>
          <article class="facility-card" data-facility-id="${f.id}" role="button" tabindex="0" aria-label="View ${f.title} details">
            <div class="facility-card-img">
              <img src="${f.image}" alt="${f.title}" loading="lazy" decoding="async">
              <span class="facility-card-tap">Tap to explore →</span>
            </div>
            <div class="facility-card-body">
              <h3>${f.title}</h3>
              <p>${f.text}</p>
            </div>
          </article>
        </li>
      `).join('');
    }

    const steps = document.getElementById('admissionSteps');
    if (steps) {
      steps.innerHTML = config.admissions.steps.map((st, i) => `
        <li><span class="step-num">${i + 1}</span>${st}</li>
      `).join('');
    }

    const docs = document.getElementById('admissionDocs');
    if (docs) {
      docs.innerHTML = config.admissions.documents.map((d) => `<li>${d}</li>`).join('');
    }

    const sessionBadge = document.getElementById('sessionBadge');
    if (sessionBadge) sessionBadge.textContent = `Session ${config.admissions.session}`;

    const highlights = document.getElementById('highlightsGrid');
    if (highlights) {
      highlights.innerHTML = config.highlights.map((h2) => `
        <article class="highlight-card">
          <h3>${h2.title}</h3>
          <p>${h2.text}</p>
        </article>
      `).join('');
    }

    const reviews = document.getElementById('testimonialTrack');
    const dots = document.getElementById('testimonialDots');
    if (reviews) {
      reviews.innerHTML = config.testimonials.map((t) => `
        <div class="testimonial-slide">
          <div class="stars" aria-hidden="true">★★★★★</div>
          <blockquote>"${t.text}"</blockquote>
          <footer><strong>${t.name}</strong><span>${t.role}</span></footer>
        </div>
      `).join('');
    }
    if (dots) {
      dots.innerHTML = config.testimonials.map((_, i) => `
        <button type="button" class="testimonial-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Review ${i + 1}"></button>
      `).join('');
    }

    const faq = document.getElementById('faqList');
    if (faq) {
      faq.innerHTML = config.faq.map((item, i) => `
        <div class="faq-item" id="faq-${i}">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
            <span>${item.q}</span><span aria-hidden="true">+</span>
          </button>
          <div class="faq-a" id="faq-a-${i}" role="region">
            <div class="faq-a-inner">${item.a}</div>
          </div>
        </div>
      `).join('');
    }

    const footer = document.getElementById('footerGrid');
    if (footer) {
      const f = config.footer;
      footer.innerHTML = `
        <div class="footer-brand">
          <div class="logo-text">${s.name}</div>
          <p>${f.blurb}</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul>${f.explore.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-col">
          <h4>Admissions</h4>
          <ul>${f.admissions.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>${c.addressShort}</li>
            <li><a href="tel:+${c.phone}">${c.phoneDisplay}</a></li>
            <li><a href="mailto:${c.email}">${c.email}</a></li>
          </ul>
        </div>
      `;
    }

    const stickyCall = document.getElementById('stickyCall');
    if (stickyCall) stickyCall.href = `tel:+${c.phone}`;

    const news = document.getElementById('newsList');
    if (news) {
      news.innerHTML = config.news.map((n) => `
        <article class="news-item">
          <time>${n.date}</time>
          <h3>${n.title}</h3>
        </article>
      `).join('');
    }

    const contactList = document.getElementById('contactList');
    if (contactList) {
      contactList.innerHTML = `
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${c.address}</li>
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.7 1.5 1.5 1.72 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+${c.phone}">${c.phoneDisplay}</a></li>
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:${c.email}">${c.email}</a></li>
        <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${c.hours}</li>
      `;
    }

    const map = document.getElementById('schoolMap');
    if (map && c.mapEmbed) map.src = c.mapEmbed;
    const mapLink = document.getElementById('mapLink');
    if (mapLink && c.mapLink) mapLink.href = c.mapLink;

    const waBtn = document.getElementById('whatsappBtn');
    if (waBtn) {
      const msg = encodeURIComponent(`Hello, I would like to enquire about admission at ${s.name}.`);
      waBtn.href = `https://api.whatsapp.com/send?phone=${c.whatsapp}&text=${msg}`;
    }
  }

  return Object.assign({}, config, { applyDOM });
})();

window.RoyalSchoolConfig = RoyalSchoolConfig;
