/**
 * ============================================================================
 *  ZARAH AI — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  All site copy follows the official "Zarah AI LLP — Website Content" deck
 *  (lead-generation copy). Edit almost everything about the site here.
 *
 *  ⚠️ Items marked FILL are facts only you have — replace before launch.
 *
 *  To change BRAND COLORS / FONTS, edit src/app/globals.css (the :root block).
 * ============================================================================
 */

export const site = {
  name: "Zarah AI",
  legalName: "Zarah AI LLP",
  domain: "zarah-ai.com",
  url: "https://www.zarah-ai.com",

  // ---- POSITIONING ---------------------------------------------------------
  tagline: "Custom software & AI, engineered to fit.",
  description:
    "We build custom websites, AI solutions, and tailored CRM/ERP systems designed around your business. Senior engineering, AI that ships.",

  // ---- CONTACT  ⚠️ FILL WITH YOUR REAL DETAILS ----------------------------
  contact: {
    email: "zarah@zarah-ai.com",
    // WhatsApp number in full international format, digits only (for the link)
    whatsapp: "919315135625",
    // How the number should be displayed to visitors
    whatsappDisplay: "+91 93151 35625",
    whatsappMessage: "Hi Zarah AI, I'd like to book a free consultation.",
    location: "India",
  },

  // ---- SOCIAL (optional — leave "" to hide) -------------------------------
  social: {
    linkedin: "",
    instagram: "",
    x: "",
    github: "",
  },
} as const;

// ---- CTA BUTTON BANK (keep button text consistent site-wide) --------------
export const cta = {
  primary: "Book a Free Consultation",
  primaryLong: "Book Your Free Consultation",
  submit: "Book My Free Consultation",
  seeWork: "See what we've built",
  scope: "Let's scope your project",
} as const;

// ---- NAVIGATION -----------------------------------------------------------
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ---- HERO (homepage) ------------------------------------------------------
export const hero = {
  headline: {
    lead: "Software built around your business — ",
    accent: "not the other way around.",
  },
  subheadline:
    "Custom websites, AI solutions, and CRM/ERP systems built around how your business runs. Software that fits — and AI that actually ships.",
  // Rotating value line beneath the CTAs
  rotating: [
    "custom websites",
    "AI solutions",
    "tailored CRMs",
    "custom ERPs",
    "software that fits",
  ],
} as const;

// ---- THE PROBLEM (positioning section) ------------------------------------
export const problem = {
  headline: "Your business is one of a kind. Your software shouldn't be off-the-shelf.",
  body: [
    "Generic tools promise everything and fit no one. You bend your process to match the software, juggle subscriptions that don't talk to each other, and burn hours on manual work — while AI stays stuck in demo mode.",
    "Zarah AI builds the alternative: websites, AI, and CRM/ERP systems designed around your workflows, your data, and your goals — with AI built in where it creates real leverage.",
  ],
} as const;

// ---- SERVICES — "What we build" -------------------------------------------
export const servicesIntro =
  "Custom-engineered systems with AI where it counts — take one service or the entire stack.";

export const services = [
  {
    slug: "web-development",
    title: "Custom Web Development",
    summary:
      "Fast, secure, beautiful websites and web apps — engineered around your goals, not a template.",
    points: [
      "Marketing sites, portals & web applications",
      "Engineered around your goals — never a template",
      "Fast, secure, SEO-ready builds",
    ],
    icon: "code",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    summary:
      "AI, automation, and intelligent agents doing real work in your business — production-ready, not proof-of-concept.",
    points: [
      "Smart workflows & automation",
      "Intelligent agents & assistants",
      "Production-ready — not proof-of-concept",
    ],
    icon: "sparkles",
  },
  {
    slug: "custom-crm",
    title: "Custom CRM Development",
    summary:
      "A CRM shaped to your sales process — no per-seat fees, no features you'll never use.",
    points: [
      "Your pipeline, fields & automations",
      "No per-seat fees, no unused features",
      "You own the code and the data",
    ],
    icon: "users",
  },
  {
    slug: "custom-erp",
    title: "Custom ERP Development",
    summary:
      "One system for operations, inventory, finance, and teams — replacing spreadsheets and disconnected tools.",
    points: [
      "Operations, inventory, finance & teams",
      "One unified database — one source of truth",
      "AI where it adds leverage",
    ],
    icon: "layers",
  },
] as const;

// Smaller supporting row beneath the four core cards
export const capabilities = [
  "Mobile app development",
  "System & API integrations",
  "UI/UX design",
  "Cloud & DevOps",
  "Ongoing support & maintenance",
  "Digital marketing to launch what we build",
] as const;

// ---- HOW WE WORK — The Zarah Build Process --------------------------------
export const processIntro =
  "Custom software fails when coding starts before understanding does. Here's how a Zarah project runs.";

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We map how your business really works — workflows, data, goals, friction — before a single line of code.",
  },
  {
    step: "02",
    title: "Design & Architect",
    body: "We design the architecture and interfaces, and you approve the plan before we build. No surprises.",
  },
  {
    step: "03",
    title: "Build",
    body: "Senior engineers ship in agile sprints — you see working progress at every stage, not a black box.",
  },
  {
    step: "04",
    title: "Deploy & Scale",
    body: "We launch, train your team, and stay on to support and evolve the system as you grow.",
  },
] as const;

// ---- WHY ZARAH AI (differentiators) ---------------------------------------
export const whyZarah = [
  {
    title: "Built custom, not cookie-cutter",
    body: "Every system is engineered around how your business actually works — never resold, never templated.",
    icon: "code",
  },
  {
    title: "AI-native by design",
    body: "We ship AI that does real work in production — not demos stuck in pilot.",
    icon: "sparkles",
  },
  {
    title: "You own everything",
    body: "Full source code, full IP, no lock-in — what we build is yours, forever.",
    icon: "key",
  },
  {
    title: "Senior engineers, direct access",
    body: "You work directly with the people building your software. No layers, no juniors.",
    icon: "users",
  },
  {
    title: "Secure and scalable",
    body: "Architected for security, reliability, and growth from day one.",
    icon: "shield",
  },
  {
    title: "A long-term partner",
    body: "We support, maintain, and evolve what we build — for years, not weeks.",
    icon: "link",
  },
] as const;

// ---- CASE STUDIES / WORK — "Systems we've shipped" ------------------------
export const projects = [
  {
    slug: "liberty-india",
    name: "Liberty India",
    category: "Travel · Destination Management",
    url: "https://liberty-india.com/",
    tagline: "A premium destination-management platform for curated journeys across India.",
    summary:
      "A B2B gateway where tour operators, travel advisors, and corporate buyers commission bespoke India programs — built around authentic access, on-ground precision, and seamless execution.",
    challenge:
      "Liberty India needed to translate deep, hands-on travel expertise into a digital storefront that felt as premium as their itineraries — while turning browsing into qualified B2B inquiries.",
    delivered: [
      "Aspirational, photography-led marketing site",
      "Thematic experience & itinerary galleries",
      "Streamlined B2B inquiry and lead capture",
      "Fast, responsive, SEO-ready build",
    ],
    outcome:
      "A sophisticated online presence that blends storytelling with lead-generation infrastructure — positioning Liberty India as a premium DMC to a global travel-trade audience.",
  },
  {
    slug: "united-hotels",
    name: "Book United Hotels",
    category: "Hospitality · Booking Platform",
    url: "https://bookunitedhotels.com/",
    tagline: "A specialist hotel-booking and B2B distribution platform for Turkey.",
    summary:
      "A dual-purpose platform serving both individual travelers and travel-industry professionals — offering direct rates and verified rooms across Istanbul and beyond, competing on specialization rather than scale.",
    challenge:
      "To stand apart from global aggregators, the platform had to pair a trustworthy consumer booking experience with wholesale B2B distribution and genuine local expertise.",
    delivered: [
      "Consumer booking experience with direct rates",
      "Neighborhood & destination guides",
      "B2B wholesale, group & corporate allotments",
      "Structured support, FAQs & travel resources",
    ],
    outcome:
      "A niche, geography-focused platform that combines e-commerce booking with B2B distribution and local market expertise — a specialist alternative to the global giants.",
  },
] as const;

// ---- IMPACT STATS (outcome-style — swap in real figures when you have them)
export const stats = [
  { value: "2+", label: "Systems live in production" },
  { value: "100%", label: "Code & IP ownership — yours forever" },
  { value: "Weeks", label: "From idea to production, not months" },
  { value: "24/7", label: "Systems that never clock out" },
] as const;

// ---- INDUSTRIES (⚠️ FILL: keep only industries you genuinely serve) -------
export const industries = [
  "Travel & Tourism",
  "Hospitality",
  "E-Commerce & Retail",
  "Professional Services",
] as const;

// ---- WHAT WE BELIEVE (about page) -----------------------------------------
export const values = [
  {
    title: "Fit beats features",
    body: "Software that matches your business beats a bigger feature list you'll never use.",
  },
  {
    title: "Ship, don't demo",
    body: "AI only matters when it's running in production and creating real value.",
  },
  {
    title: "You own it",
    body: "Your code, your data, your IP — always.",
  },
  {
    title: "Partners, not vendors",
    body: "We build for the long term and stay to support what we ship.",
  },
] as const;

// ---- FINAL CTA (the money block) ------------------------------------------
export const finalCta = {
  headline: "Have a system worth building right?",
  subhead:
    "Tell us the problem you're solving and we'll give you an honest take — the right architecture, a realistic timeline, and where AI genuinely helps. No jargon, no obligation.",
} as const;

// ---- HELPERS --------------------------------------------------------------
export const whatsappLink = () =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage,
  )}`;

export const emailLink = (subject = "Free consultation request") =>
  `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
