#!/usr/bin/env node
// Bold City Construction — Static Site Builder
// Reads site-config.js and generates index.html
// Usage: node build.js

const fs = require('fs');
const path = require('path');
const config = require('./site-config');

const { business, seo, logo, favicon, hero, services, trust, process: proc, gallery, serviceAreas, contact, footer } = config;

// SVG icon library — referenced by name in config
const icons = {
  home: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  grid: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  wrench: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  paint: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>',
  tile: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  shield: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  'shield-check': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  clock: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  user: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  star: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  phoneLg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  facebook: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  arrow: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  image: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
};

function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function buildServiceCards() {
  return services.items.map(s => `
          <div class="service-card">
            <div class="service-icon">${icons[s.icon] || ''}</div>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.description)}</p>
            <ul class="service-features">
              ${s.features.map(f => `<li>${esc(f)}</li>`).join('\n              ')}
            </ul>
            <a href="#contact" class="service-link">Get a Quote &rarr;</a>
          </div>`).join('');
}

function buildTrustCards() {
  return trust.items.map(t => `
          <div class="trust-card">
            <div class="trust-icon">${icons[t.icon] || ''}</div>
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.description)}</p>
          </div>`).join('');
}

function buildProcessSteps() {
  return proc.steps.map((s, i) => {
    const step = `
          <div class="step">
            <div class="step-number">${i + 1}</div>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.description)}</p>
          </div>`;
    const arrow = i < proc.steps.length - 1
      ? `\n          <div class="step-arrow" aria-hidden="true">${icons.arrow}</div>`
      : '';
    return step + arrow;
  }).join('');
}

function buildGallery() {
  return gallery.images.map(img => `
          <div class="gallery-item">
            <img src="${esc(img.src)}" alt="${esc(img.alt)}" loading="lazy">
          </div>`).join('');
}

function buildAreaPills() {
  return serviceAreas.areas.map(a => `<span class="area-pill">${esc(a)}</span>`).join('\n          ');
}

function buildServiceOptions() {
  return contact.serviceOptions.map(o => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join('\n                ');
}

function buildFooterServiceLinks() {
  return footer.serviceLinks.map(l => `<a href="#services">${esc(l)}</a>`).join('\n            ');
}

function buildFooterCompanyLinks() {
  return footer.companyLinks.map(l => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join('\n            ');
}

function buildJsonLd() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": business.name,
    "description": `Serving ${business.address.city} & Duval County since ${business.foundedYear}. Remodeling, handyman services, painting, and more.`,
    "url": seo.canonicalUrl.replace(/\/$/, ''),
    "telephone": `+1-${business.phone.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}`,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": seo.geo.latitude,
      "longitude": seo.geo.longitude
    },
    "areaServed": {
      "@type": "City",
      "name": business.address.city,
      "containedInPlace": { "@type": "State", "name": "Florida" }
    },
    "founder": { "@type": "Person", "name": business.owner },
    "foundingDate": String(business.foundedYear),
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": business.hours.structured.days,
      "opens": business.hours.structured.opens,
      "closes": business.hours.structured.closes
    },
    "sameAs": Object.values(business.social),
    "makesOffer": services.items.slice(0, 3).map(s => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.description }
    }))
  }, null, 4);
}

function buildLogoHtml(extraClass) {
  const cls = extraClass ? ` class="${extraClass}"` : '';
  return `<img src="${esc(logo.image)}" alt="${esc(logo.alt)}"${cls}>`;
}

// ── Generate full HTML ───────────────────────────────────────────

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(seo.title)}</title>
  <meta name="description" content="${esc(seo.description)}">
  <meta name="keywords" content="${esc(seo.keywords)}">
  <meta name="robots" content="index, follow">
  <meta name="author" content="${esc(business.name)}">
  <link rel="canonical" href="${esc(seo.canonicalUrl)}">

  <!-- Open Graph -->
  <meta property="og:title" content="${esc(seo.title)}">
  <meta property="og:description" content="${esc(seo.ogDescription)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${esc(seo.canonicalUrl)}">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="${esc(business.name)}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(seo.title)}">
  <meta name="twitter:description" content="${esc(seo.twitterDescription)}">

  <!-- Geo Tags for Local SEO -->
  <meta name="geo.region" content="${esc(seo.geo.region)}">
  <meta name="geo.placename" content="${esc(seo.geo.placename)}">
  <meta name="geo.position" content="${seo.geo.latitude};${seo.geo.longitude}">
  <meta name="ICBM" content="${seo.geo.latitude}, ${seo.geo.longitude}">

  <link rel="stylesheet" href="styles.css">
  <link rel="icon" type="image/svg+xml" href="${esc(favicon)}">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  ${buildJsonLd()}
  </script>
</head>
<body>
  <!-- Skip Navigation -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <span>${esc(business.name)}</span>
      <a href="tel:${esc(business.phoneRaw)}">Call Now: ${esc(business.phone)}</a>
    </div>
  </div>

  <!-- Navigation -->
  <header class="navbar" id="navigation">
    <div class="container navbar-inner">
      <a href="#" class="logo" aria-label="${esc(business.shortName)} Home">
        ${buildLogoHtml('logo-img')}
        <span class="logo-text">${esc(business.shortName).replace(' Construction', '<span class="logo-accent"> Construction</span>')}</span>
      </a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav-links" role="navigation" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#why-us">Why Us</a>
        <a href="#gallery">Our Work</a>
        <a href="#contact" class="btn btn-primary btn-sm">Free Estimate</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <main id="main-content">
    <section class="hero" aria-label="Welcome">
      <div class="hero-bg"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <h1>${hero.headline}</h1>
          <p class="hero-sub">${esc(hero.subtext)}</p>
          <div class="hero-badges">
            ${hero.badges.map(b => `<span class="badge">${icons.check} ${esc(b)}</span>`).join('\n            ')}
          </div>
          <div class="hero-ctas">
            <a href="#contact" class="btn btn-primary btn-lg">Get a Free Estimate</a>
            <a href="tel:${esc(business.phoneRaw)}" class="btn btn-outline btn-lg">
              ${icons.phone}
              ${esc(business.phone)}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services" aria-label="Our Services">
      <div class="container">
        <div class="section-header">
          <h2>${esc(services.heading)}</h2>
          <p>${esc(services.subheading)}</p>
        </div>
        <div class="services-grid">${buildServiceCards()}
        </div>
      </div>
    </section>

    <!-- Why Us / Trust Section -->
    <section class="trust" id="why-us" aria-label="Why Choose Us">
      <div class="container">
        <div class="section-header">
          <h2>${esc(trust.heading)}</h2>
          <p>${esc(trust.subheading)}</p>
        </div>
        <div class="trust-grid">${buildTrustCards()}
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process" aria-label="How It Works">
      <div class="container">
        <div class="section-header">
          <h2>${esc(proc.heading)}</h2>
          <p>${esc(proc.subheading)}</p>
        </div>
        <div class="process-steps">${buildProcessSteps()}
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery" id="gallery" aria-label="Project Gallery">
      <div class="container">
        <div class="section-header">
          <h2>${esc(gallery.heading)}</h2>
          <p>${esc(gallery.subheading)}</p>
        </div>
        <div class="gallery-grid">${buildGallery()}
        </div>
      </div>
    </section>

    <!-- Service Area Section -->
    <section class="service-area" aria-label="Service Area">
      <div class="container">
        <div class="section-header">
          <h2>${esc(serviceAreas.heading)}</h2>
          <p>${esc(serviceAreas.subheading)}</p>
        </div>
        <div class="area-pills">
          ${buildAreaPills()}
        </div>
      </div>
    </section>

    <!-- Contact / Lead Gen Section -->
    <section class="contact" id="contact" aria-label="Contact Us">
      <div class="container">
        <div class="section-header">
          <h2>${esc(contact.heading)}</h2>
          <p>${esc(contact.subheading)}</p>
        </div>
        <div class="contact-grid">
          <form class="contact-form" action="${esc(contact.formAction)}" method="POST" aria-label="Request a free estimate">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="Your name" autocomplete="name">
              </div>
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required placeholder="(904) 555-0123" autocomplete="tel">
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="you@email.com" autocomplete="email">
            </div>
            <div class="form-group">
              <label for="service">Service Needed</label>
              <select id="service" name="service">
                <option value="">Select a service...</option>
                ${buildServiceOptions()}
              </select>
            </div>
            <div class="form-group">
              <label for="message">Project Details *</label>
              <textarea id="message" name="message" rows="4" required placeholder="Describe your project or what you need help with..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-full">Request Free Estimate</button>
            <p class="form-note">${esc(contact.formNote)}</p>
          </form>
          <div class="contact-info">
            <div class="contact-card">
              <h3>Prefer to Talk?</h3>
              <p>Give us a call — we're happy to discuss your project over the phone.</p>
              <a href="tel:${esc(business.phoneRaw)}" class="btn btn-outline btn-lg btn-full">
                ${icons.phoneLg}
                ${esc(business.phone)}
              </a>
            </div>
            <div class="contact-card">
              <h3>Send an Email</h3>
              <p>Email us your project details and we'll follow up with a quote.</p>
              <a href="mailto:${esc(business.email)}" class="btn btn-outline btn-lg btn-full">
                ${icons.mail}
                ${esc(business.email)}
              </a>
            </div>
            <div class="contact-card">
              <h3>Business Hours</h3>
              <p>${esc(business.hours.weekday)}<br>${esc(business.hours.weekend)}</p>
            </div>${business.social.facebook ? `
            <div class="contact-card">
              <h3>Follow Us</h3>
              <a href="${esc(business.social.facebook)}" target="_blank" rel="noopener noreferrer" class="social-link">
                ${icons.facebook}
                Facebook
              </a>
            </div>` : ''}
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer" role="contentinfo">
    <div class="container footer-inner">
      <div class="footer-main">
        <div class="footer-brand">
          ${buildLogoHtml('logo-img logo-img-footer')}
          <span class="logo-text">${esc(business.shortName).replace(' Construction', '<span class="logo-accent"> Construction</span>')}</span>
          <p>${esc(business.tagline)}</p>
        </div>
        <div class="footer-links">
          <div>
            <h4>Services</h4>
            ${buildFooterServiceLinks()}
          </div>
          <div>
            <h4>Company</h4>
            ${buildFooterCompanyLinks()}
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:${esc(business.phoneRaw)}">${esc(business.phone)}</a>
            <a href="mailto:${esc(business.email)}">Email Us</a>${business.social.facebook ? `
            <a href="${esc(business.social.facebook)}" target="_blank" rel="noopener noreferrer">Facebook</a>` : ''}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${business.copyrightYear} ${esc(business.name)}. All rights reserved.</p>
        <p>${esc(business.address.city)}, ${esc(business.address.state)} ${esc(business.address.zip)}</p>
      </div>
    </div>
  </footer>

  <!-- Sticky Mobile CTA -->
  <div class="mobile-cta">
    <a href="tel:${esc(business.phoneRaw)}" class="btn btn-primary btn-mobile">
      ${icons.phone}
      Call Now
    </a>
    <a href="#contact" class="btn btn-accent btn-mobile">Free Estimate</a>
  </div>

  <script>
    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
    // Close mobile nav on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  </script>
</body>
</html>
`;

const outPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outPath, html);
console.log(`Built ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
