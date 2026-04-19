// ============================================================
// PORTFOLIO CONTENT — Edit this file to update your portfolio
// ============================================================

export const personalInfo = {
  name: "Vishnusai Viswajith Tharoor",
  tagline: "A sum of Business Acumen, Product Development Expertise, and a Passion for AI-Driven Innovation.",
  headline: "Bridging the Gap Between Engineering and Strategy",
  subheadline:
    "MBA Candidate & Full-Stack Developer specializing in AI-driven business transformation and quantifiable value creation.",
  bio: "Strategic leader with a foundation in Computer Science Engineering and an MBA focus on Marketing and Strategy. Proven track record of delivering revenue-enabling software features (+$100K impact), winning national-level strategy competitions at IIMs, and scaling organizations by over 80%. Expert at translating emerging technologies like Generative AI into measurable operational efficiency and market value.",
  location: "India",
  email: "svishwa2000@gmail.com",
  linkedin: "https://linkedin.com/in/vsvt2000",
  github: "https://github.com/vsvt2000",
};

// Navigation links
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#milestones" },
  { label: "Academic", href: "#academic" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

// Professional Milestones — Work Experience
export const milestones = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Wiz",
    period: "2022 — 2024",
    location: "India",
    description: "Spearheaded front-end development for a core product feature, directly enabling the closing of contracts worth $100,000+ in projected revenue.",
    impact: "$100K+ Revenue Enabled",
    score: 9.5,
    tags: ["Full-Stack", "Revenue Growth", "Stakeholder Management"],
    metrics: [
      { label: "Revenue Impact", value: "$100K+" },
      { label: "Score", value: "9.5/10" },
    ],
  },
  {
    id: 2,
    title: "Founding Developer",
    company: "Fintech Startup (Stealth)",
    period: "2025",
    location: "India",
    description: "Architected the initial technical prototype and defined the product roadmap for a scalable fintech solution.",
    impact: "Product Architecture",
    score: 9.0,
    tags: ["Entrepreneurship", "Product Architecture", "Fintech"],
    metrics: [
      { label: "Architecture Score", value: "9.0/10" },
    ],
  },
  {
    id: 3,
    title: "Engineering Recognition",
    company: "Wiz",
    period: "April 2024",
    location: "India",
    description: "Recognized as 'Best Team of the Month' for accelerating the delivery of 3 critical full-stack features ahead of schedule.",
    impact: "Best Team of the Month",
    score: 8.5,
    tags: ["Leadership", "Agile Delivery"],
    metrics: [
      { label: "Delivery Score", value: "8.5/10" },
      { label: "Features Delivered", value: "3" },
    ],
  },
];

// Academic Excellence — Certifications, Competitions, Research
export const academic = [
  {
    id: 1,
    type: "competition",
    title: "Runner-Up, Strategy Case Competition",
    issuer: "IIM Indore",
    year: "2024",
    description: "Engineered strategic and financial models for a healthcare brand; recognized by the CEO for delivering high-impact, actionable insights.",
    badge: "Runner-Up",
    highlight: true,
    score: 9.8,
  },
  {
    id: 2,
    type: "publication",
    title: "First Author, IEEE Publication",
    issuer: "IEEE",
    year: "2024",
    description: "Authored research on predictive analytics; developed a Random Forest model with 75% accuracy to predict sports outcomes.",
    badge: "IEEE Published",
    highlight: true,
    score: 8.8,
  },
  {
    id: 3,
    type: "certification",
    title: "Guest Speaker",
    issuer: "Times India Economic Conclave",
    year: "2024",
    description: "Delivered insights on the intersection of AI, Sustainability, and workplace communication to a national audience of industry leaders.",
    badge: "Speaker",
    highlight: true,
    score: 8.5,
  },
  {
    id: 4,
    type: "competition",
    title: "National Finalist (6th Place)",
    issuer: "SIBM Bangalore",
    year: "2024",
    description: "Developed a comprehensive GTM strategy for a skincare brand using advanced marketing and competitive frameworks.",
    badge: "National Finalist",
    highlight: false,
    score: 9.0,
  },
];

// Technical Portfolio — Projects
export const projects = [
  {
    id: 1,
    name: "SlideShift",
    description: "AI-powered content generation engine that reduces slide design time by an estimated 50% through automated layout and content logic.",
    tech: ["Google Gemini API", "React", "Vite"],
    impactScore: 9.5,
    github: "https://github.com/vsvt2000/slideshift",
    highlight: true,
  },
  {
    id: 2,
    name: "VeriTrust",
    description: "An anti-influencer platform for Market Research designed to provide authentic consumer feedback loops; built as a rapid-prototype MVP.",
    tech: ["Lovable.ai", "Market Research"],
    impactScore: 9.0,
    highlight: true,
  },
  {
    id: 3,
    name: "Review Sentiment Analyser",
    description: "NLP-driven dashboard providing e-commerce platforms with granular customer sentiment metrics and predictive trend analysis.",
    tech: ["React", "Google Gemini API", "NLP"],
    impactScore: 8.8,
    github: "https://github.com/vsvt2000/ai_mr_dashboard",
    highlight: false,
  },
  {
    id: 4,
    name: "Leave Management System",
    description: "Automated university administrative workflows, eliminating manual overhead for hundreds of users.",
    tech: ["NextJS", "Google Sheets API", "Tailwind"],
    impactScore: 8.2,
    github: "https://github.com/vsvt2000/leave_management_system",
    highlight: false,
  },
];

// Leadership & Extra-curriculars
export const leadership = [
  {
    id: 1,
    organization: "Naadam Classical Music Club",
    role: "President",
    period: "2023 — Present",
    description: "Led a national-level cultural event and recruitment strategy, resulting in an 82% increase in active club membership within one year.",
    impact: "82% Membership Growth",
    score: 9.8,
    metrics: [
      { label: "Growth", value: "82%" },
      { label: "Score", value: "9.8/10" },
    ],
  },
  {
    id: 2,
    organization: "Classical Music",
    role: "National Performance Artist",
    period: "2013 — 2025",
    description: "Demonstrated a decade-long commitment to performance excellence at the Guruvayoor Chembai Sangeetholsavam.",
    impact: "12 Years Performance",
    score: 9.5,
    metrics: [
      { label: "Years", value: "12+" },
      { label: "Score", value: "9.5/10" },
    ],
  },
  {
    id: 3,
    organization: "BizConnect Club",
    role: "Vice President",
    period: "2023 — Present",
    description: "Spearheaded digital engagement by building a custom web-app to bridge the gap between students and industry partners.",
    impact: "Digital Engagement",
    score: 9.0,
    metrics: [
      { label: "Score", value: "9.0/10" },
    ],
  },
];
