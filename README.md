# Bold City Construction & Handyman Services LLC

Static website for **Bold City Construction & Handyman Services LLC**, a Florida Certified General Contractor (License #CGC1523929) serving Jacksonville and Duval County since 2016.

**Live site:** [boldcityconstructionjax.com](https://boldcityconstructionjax.com)

## Overview

A single-page, static website designed for lead generation and local SEO. Built with vanilla HTML/CSS — no frameworks, no build step.

## Features

- Responsive, mobile-first design inspired by the Thumbtack design system
- Sticky mobile CTA bar for phone calls and free estimate requests
- Contact form for lead capture (powered by Formspree)
- JSON-LD structured data for local business SEO
- Open Graph and Twitter Card meta tags
- Sitemap and robots.txt

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

**Setup:** Go to repo Settings > Pages > Source and select **GitHub Actions**.

## Project Structure

```
├── index.html          # Main page
├── styles.css          # Stylesheet
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Crawler directives
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## Contact Form

The form uses [Formspree](https://formspree.io). To activate it:

1. Create a free Formspree account
2. Create a new form pointing to `boldcityconstructionjax@gmail.com`
3. Replace `your-form-id` in `index.html` with your Formspree form ID

## License

All rights reserved. Bold City Construction & Handyman Services LLC.
