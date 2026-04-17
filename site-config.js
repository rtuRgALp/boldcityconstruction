// Bold City Construction — Site Configuration
// Edit this file to update all website content, then run: node build.js

module.exports = {

  // ── Business Info ──────────────────────────────────────────────
  business: {
    name: 'Bold City Construction & Handyman Services LLC',
    shortName: 'Bold City Construction',
    tagline: 'Making Your Visions Come To Life',
    phone: '(904) 553-8871',
    phoneRaw: '+19045538871',
    email: 'boldcityconstructionjax@gmail.com',
    address: {
      street: '14638 Bracknell Ct',
      city: 'Jacksonville',
      state: 'FL',
      zip: '32258',
    },
    license: '',
    licenseTitle: '',
    owner: 'Anis Serjani',
    foundedYear: 2016,
    copyrightYear: 2025,
    hours: {
      weekday: 'Monday — Saturday: 7:00 AM — 6:00 PM',
      weekend: 'Sunday: Closed',
      structured: {
        days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        opens: '07:00',
        closes: '18:00',
      },
    },
    social: {},
  },

  // ── SEO & Meta ─────────────────────────────────────────────────
  seo: {
    title: 'Bold City Construction & Handyman Services | Jacksonville FL',
    description: 'Bold City Construction & Handyman Services LLC — serving Jacksonville & Duval County since 2016. Free estimates for remodeling, construction & handyman services. Call (904) 553-8871.',
    keywords: 'Jacksonville contractor, handyman services Jacksonville, home remodeling Jacksonville FL, construction Jacksonville, kitchen remodeling Jacksonville, bathroom renovation Jacksonville FL, home repair Jacksonville, interior painting Jacksonville',
    ogDescription: 'Serving Jacksonville since 2016. No job too big or small — from handyman repairs to whole home makeovers. Free estimates!',
    twitterDescription: 'Construction & handyman services in Jacksonville FL. Remodeling, painting & more. Call (904) 553-8871 for a free estimate.',
    canonicalUrl: 'https://boldcityconstructionjax.com/',
    geo: {
      region: 'US-FL',
      placename: 'Jacksonville',
      latitude: 30.1435,
      longitude: -81.5447,
    },
  },

  // ── Logo ───────────────────────────────────────────────────────
  logo: {
    image: 'images/logo.png',
    alt: 'Bold City Construction logo',
  },

  // ── Favicon ────────────────────────────────────────────────────
  favicon: 'images/favicon.svg',

  // ── Hero Section ───────────────────────────────────────────────
  hero: {
    headline: "Jacksonville's Trusted<br>Construction & Handyman Pros",
    subtext: 'No job too big or too small. From a quick repair to a whole home makeover — we make your vision come to life.',
    badges: [
      'Insured',
      '10+ Years Experience',
      'Free Estimates',
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: {
    heading: 'Our Services',
    subheading: 'From small repairs to major renovations — we handle it all with expert craftsmanship.',
    items: [
      {
        title: 'Home Remodeling',
        description: 'Transform your living space with kitchen, bathroom, and whole-home renovations.',
        features: ['Kitchen remodeling', 'Bathroom renovation', 'Whole home makeovers', 'Interior upgrades'],
        icon: 'grid',
      },
      {
        title: 'Handyman Services',
        description: 'Quick fixes, repairs, and maintenance — no job is too small for our skilled team.',
        features: ['Drywall repair & patching', 'Fixture installation', 'Painting & touch-ups', 'General maintenance'],
        icon: 'wrench',
      },
      {
        title: 'Interior Painting',
        description: 'Professional interior painting that refreshes your home with clean, lasting results.',
        features: ['Wall & ceiling painting', 'Trim & baseboard finishing', 'Color consultation', 'Cabinet painting'],
        icon: 'paint',
      },
      {
        title: 'Flooring & Tile',
        description: 'Expert flooring installation including hardwood, tile, laminate, and vinyl plank.',
        features: ['Tile installation', 'Hardwood floors', 'Laminate & vinyl', 'Floor repair'],
        icon: 'tile',
      },
      {
        title: 'Outdoor & Exterior',
        description: 'Decks, patios, and exterior upgrades to enhance your outdoor living space.',
        features: ['Deck construction', 'Patio installation', 'Exterior repairs'],
        icon: 'shield',
      },
    ],
  },

  // ── Why Us / Trust ─────────────────────────────────────────────
  trust: {
    heading: 'Why Jacksonville Homeowners Choose Us',
    subheading: 'Trusted by families across Duval County for over a decade.',
    items: [
      {
        title: 'Insured',
        description: 'Your project is protected and handled by experienced professionals.',
        icon: 'shield-check',
      },
      {
        title: '10+ Years of Experience',
        description: 'Serving Jacksonville since 2016 with hundreds of successful projects — from quick fixes to full renovations.',
        icon: 'clock',
      },
      {
        title: 'Owner-Operated',
        description: 'Anis Serjani personally oversees every project. You speak directly with the person doing the work — no middlemen.',
        icon: 'user',
      },
      {
        title: 'Quality Guaranteed',
        description: 'We stand behind our work. Every project is completed to the highest standards with your complete satisfaction in mind.',
        icon: 'star',
      },
    ],
  },

  // ── Process Steps ──────────────────────────────────────────────
  process: {
    heading: 'Getting Started Is Easy',
    subheading: 'Three simple steps from first call to finished project.',
    steps: [
      {
        title: 'Request Your Free Estimate',
        description: 'Call us or fill out the form below. Tell us about your project and we\'ll schedule a time to take a look.',
      },
      {
        title: 'Get a Detailed Quote',
        description: 'We\'ll assess the job in person, answer your questions, and provide a clear, honest quote — no surprises.',
      },
      {
        title: 'We Get to Work',
        description: 'Once approved, our team starts bringing your vision to life — on time and on budget.',
      },
    ],
  },

  // ── Gallery ────────────────────────────────────────────────────
  gallery: {
    heading: 'Our Work Speaks for Itself',
    subheading: 'Browse recent projects completed across Jacksonville and Duval County.',
    images: [
      { src: 'images/work-01.jpg', alt: 'Construction project 1' },
      { src: 'images/work-02.jpg', alt: 'Construction project 2' },
      { src: 'images/work-03.jpg', alt: 'Construction project 3' },
      { src: 'images/work-04.jpg', alt: 'Construction project 4' },
      { src: 'images/work-05.jpg', alt: 'Construction project 5' },
      { src: 'images/work-06.jpg', alt: 'Construction project 6' },
      { src: 'images/work-07.jpg', alt: 'Construction project 7' },
      { src: 'images/work-08.jpg', alt: 'Construction project 8' },
      { src: 'images/work-09.jpg', alt: 'Construction project 9' },
      { src: 'images/work-10.jpg', alt: 'Construction project 10' },
      { src: 'images/work-11.jpg', alt: 'Construction project 11' },
      { src: 'images/work-12.jpg', alt: 'Construction project 12' },
      { src: 'images/work-13.jpg', alt: 'Construction project 13' },
      { src: 'images/work-14.jpg', alt: 'Construction project 14' },
      { src: 'images/work-15.jpg', alt: 'Construction project 15' },
      { src: 'images/work-16.jpg', alt: 'Construction project 16' },
      { src: 'images/work-17.jpg', alt: 'Construction project 17' },
      { src: 'images/work-18.jpg', alt: 'Construction project 18' },
      { src: 'images/work-19.jpg', alt: 'Construction project 19' },
      { src: 'images/work-20.jpg', alt: 'Construction project 20' },
      { src: 'images/work-21.jpg', alt: 'Construction project 21' },
      { src: 'images/work-22.jpg', alt: 'Construction project 22' },
      { src: 'images/work-23.jpg', alt: 'Construction project 23' },
    ],
  },

  // ── Service Areas ──────────────────────────────────────────────
  serviceAreas: {
    heading: 'Proudly Serving Jacksonville & Duval County',
    subheading: 'Local experts who know your neighborhood. We serve all of Northeast Florida.',
    areas: [
      'Jacksonville', 'Jacksonville Beach', 'Neptune Beach', 'Atlantic Beach',
      'Ponte Vedra', 'Arlington', 'Mandarin', 'Southside',
      'San Marco', 'Riverside', 'Avondale', 'Baymeadows',
      'Orange Park', 'St. Johns County',
    ],
  },

  // ── Contact Form ───────────────────────────────────────────────
  contact: {
    heading: 'Get Your Free Estimate Today',
    subheading: 'Tell us about your project and we\'ll get back to you within 24 hours.',
    formAction: 'https://formspree.io/f/your-form-id', // Replace with your Formspree ID
    formNote: 'We typically respond within a few hours during business days.',
    serviceOptions: [
      { value: 'home-remodeling', label: 'Home Remodeling' },
      { value: 'kitchen-remodel', label: 'Kitchen Remodel' },
      { value: 'bathroom-renovation', label: 'Bathroom Renovation' },
      { value: 'handyman', label: 'Handyman Services' },
      { value: 'painting', label: 'Interior Painting' },
      { value: 'flooring', label: 'Flooring & Tile' },
      { value: 'outdoor', label: 'Outdoor & Exterior' },
      { value: 'other', label: 'Other' },
    ],
  },

  // ── Footer ─────────────────────────────────────────────────────
  footer: {
    serviceLinks: [
      'Home Remodeling',
      'Handyman Services',
      'Interior Painting',
      'Flooring & Tile',
    ],
    companyLinks: [
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Our Work', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
