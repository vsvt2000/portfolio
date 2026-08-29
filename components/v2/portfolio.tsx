"use client";

/**
 * ============================================================================
 * PORTFOLIO — single-file, self-contained page component (v2)
 * ============================================================================
 * Drop this file in as `app/page.tsx` (or import <Portfolio /> from wherever
 * you like — it's a plain default export that also accepts a `data` prop).
 *
 * WHAT'S NEW IN THIS VERSION (v2), based on portfolio review:
 *   1. Removed every self-assigned "X/10" score. Recruiters trust concrete,
 *      verifiable claims — not numbers you gave yourself. Metrics arrays now
 *      only hold things a third party could check (revenue, %, counts).
 *   2. Added a real CASE STUDY section — one flagship story told in depth
 *      (problem → approach → decisions → result) instead of four shallow
 *      bullet points. This is the single highest-leverage addition.
 *   3. Added PROOF LINKS everywhere a claim is made: projects can carry a
 *      `demoUrl` (a GIF/video loop) and a `github` link; academic entries
 *      can carry a `proofUrl` (the actual paper / certificate / deck).
 *   4. Added a resume download and an explicit "what I'm looking for" line —
 *      both were completely absent before, and both are near-zero effort
 *      for the recruiter-conversion value they add.
 *
 * ⚠️  SEARCH FOR "EDIT ME" BELOW — those are the fields you need to replace
 *     with your real links/files (resume PDF, demo GIFs, paper links, case
 *     study specifics) before publishing.
 *
 * Requires (already in package.json): next, react, framer-motion, lucide-react
 * ==========================================================================*/

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail,
  Calendar,
  Linkedin,
  Github,
  Building2,
  Award,
  Trophy,
  BookOpen,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  Download,
  Play,
  ImageOff,
  type LucideIcon,
} from "lucide-react";

/* ============================================================================
 * FONTS
 * ==========================================================================*/
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/* ============================================================================
 * DESIGN TOKENS
 * ==========================================================================*/
const COLOR = {
  midnight: "#013D5A",
  lionsmane: "#FCF3E3",
  celeste: "#BDD3CE",
  herb: "#708C69",
  marigold: "#F4A258",
} as const;

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/* ============================================================================
 * TYPES
 * ==========================================================================*/
export interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  bio: string;
  lookingFor: string; // one plain sentence: what role/work you want next
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string; // EDIT ME — link to your actual resume PDF
  photoUrl: string; // EDIT ME — path/URL to your professional photo
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Milestone {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  impact: string;
  tags: string[];
  metrics: Metric[]; // concrete, checkable numbers only — no self-graded scores
}

export type AcademicType = "certification" | "competition" | "publication";

export interface AcademicEntry {
  id: number;
  type: AcademicType;
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge: string;
  highlight: boolean;
  proofUrl?: string; // EDIT ME — link to the actual paper / certificate / deck
  proofLabel?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  outcome: string; // one concrete result claim, not a self-assigned score
  github?: string;
  demoUrl?: string; // EDIT ME — path/URL to a short screen-recording GIF or MP4
  highlight: boolean;
}

export interface LeadershipEntry {
  id: number;
  organization: string;
  role: string;
  period: string;
  description: string;
  impact: string;
  metrics: Metric[];
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  url: string;
}

export interface CaseStudyStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  eyebrow: string;
  title: string;
  context: string; // one line: role, company, timeframe
  problem: string;
  approach: CaseStudyStep[]; // a real sequence — numbering is earned here
  decisions: string[]; // key tradeoffs you made and why
  result: string;
  proofUrl?: string; // EDIT ME — link to a demo, repo, or write-up
  proofLabel?: string;
}

export interface PortfolioData {
  meta: { title: string; description: string };
  personalInfo: PersonalInfo;
  navLinks: NavLink[];
  highlightStats: Metric[];
  caseStudies: CaseStudy[];
  milestones: Milestone[];
  academic: AcademicEntry[];
  projects: Project[];
  leadership: LeadershipEntry[];
  blogPosts: BlogPost[];
}

/* ============================================================================
 * CONTENT — edit freely. The caseStudies[0] entry below is a first draft
 * built from what you told me about the Wiz feature; go through it and
 * replace the bracketed specifics with the real details before publishing.
 * ==========================================================================*/
export const defaultPortfolioData: PortfolioData = {
  meta: {
    title: "Vishnusai Viswajith Tharoor | MBA Candidate & Full-Stack Developer",
    description:
      "A sum of business acumen, product development expertise, and a passion for AI-driven innovation.",
  },
  personalInfo: {
    name: "Vishnusai Viswajith Tharoor",
    tagline: "MBA Candidate & Full-Stack Developer",
    headline: "Bridging the Gap Between Engineering and Strategy",
    subheadline:
      "A sum of business acumen, product development expertise, and a passion for AI-driven innovation — specializing in translating emerging technology into quantifiable value.",
    bio: "Strategic leader with a foundation in Computer Science Engineering and an MBA focus on Marketing and Strategy. Proven track record of delivering revenue-enabling software features, winning national-level strategy competitions at IIMs, and scaling organizations by over 80%. Expert at translating emerging technologies like Generative AI into measurable operational efficiency and market value.",
    // EDIT ME — one honest sentence. This single line does a lot of work:
    // it tells a recruiter exactly what conversation to start with you.
    lookingFor:
      "Open to product engineering and AI-strategy roles where I can ship customer-facing features end-to-end.",
    location: "Coimbatore, India",
    email: "viswajithvishnusai@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishnusai-viswajith-tharoor-9b77541a9",
    github: "https://github.com/vsvt2000",
    resumeUrl: "https://drive.google.com/file/d/1jUpGOMaFYvJFSy_ILXTxXr_y9RLz1due/view?usp=sharing", // EDIT ME — replace with your actual resume file/link
    photoUrl: "/profile.jpeg", // EDIT ME — replace with your actual photo file/link
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Case Study", href: "#case-study" },
    { label: "Experience", href: "#milestones" },
    { label: "Achievements", href: "#academic" },
    { label: "Projects", href: "#projects" },
    { label: "Leadership", href: "#leadership" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  highlightStats: [
    { label: "Years Experience", value: "3+" },
    { label: "Revenue Impact", value: "$100K+" },
    { label: "Organization Growth", value: "82%" },
  ],
  caseStudies: [
    {
      // EDIT ME — this whole entry is a first-draft scaffold. Replace every
      // bracketed detail with what actually happened: the real feature name,
      // the real constraint, the real tradeoff, the real outcome.
      eyebrow: "Flagship Case Study",
      title: "Shipping the feature that closed six-figure contracts",
      context: "Software Engineer @ Wiz · 2022 — 2024",
      problem:
        "Enterprise prospects in the pipeline needed to see RFQ working against their own data before they'd sign — and the existing product couldn't adapt it to multiple workflows without a custom demo for each deal, which was slow and expensive.",
      approach: [
        {
          title: "Diagnose",
          description:
            "Sat in on product calls to see exactly where prospects hesitated, and traced it back to a lack of workflow management rather than a pricing or positioning issue.",
        },
        {
          title: "Design",
          description:
            "Scoped a front-end feature that made the client's requirements visible and self-serve within the existing product, instead of a one-off custom demo — so it would compound across every future deal, not just the one in front of us.",
        },
        {
          title: "Build & ship",
          description:
            "Owned the front-end implementation end-to-end, working directly with the product teams to validate it against real prospect requirements before launch.",
        },
      ],
      decisions: [
        "Chose to build a reusable product feature over a one-off sales demo — highly complex logic, but it removed the same blocker from every subsequent deal instead of just one.",
        "Prioritized to hit the sales team's timeline without compromising long-term maintainability.",
      ],
      result:
        "The feature was cited directly in closing conversations for contracts worth $100,000+ in projected revenue, and became a standard part of the enterprise sales workflow going forward.",
      proofUrl: "#", // EDIT ME — link to a demo video, screenshots, or write-up if shareable
      proofLabel: "Demo Not Available",
    },
    {
  eyebrow: "Product Management Case Study",
  title: "Building a unified applicant tracking platform for 10+ MBA clubs",
  context: "Product Manager Project · Amrita School of Business · 2026",

  problem:
    "Every annual recruitment cycle, 10+ clubs and committees managed around 200 applicants through separate Microsoft Forms and spreadsheets. The process created duplicate registrations, manual consolidation, inconsistent selection workflows, and no visibility into applicant status or recruitment analytics.",

  approach: [
    {
      title: "Discover",
      description:
        "Mapped the end-to-end recruitment journey across applicants, committee members, and administrators. Identified repeated pain points such as multiple form submissions, spreadsheet reconciliation, interview tracking, and offer management."
    },
    {
      title: "Define the MVP",
      description:
        "Prioritized a centralized web application with three user portals — Applicant, Committee, and Admin. Scoped V1 around single registration, multi-club applications, configurable club-specific fields, status tracking, and committee dashboards while intentionally deferring notifications and advanced negotiation workflows to future releases."
    },
    {
      title: "Design the workflow",
      description:
        "Created a stage-based recruitment pipeline where applicants progress through configurable rounds, committee heads manage decisions from a dashboard, and all application data is stored in a single backend instead of multiple spreadsheets."
    }
  ],

  decisions: [
    "Prioritized one common registration flow with dynamic club-specific questions instead of separate forms for every club, reducing friction for applicants.",
    "Separated the platform into Applicant, Committee, and Admin portals to match stakeholder responsibilities and simplify permissions.",
    "Designed configurable recruitment stages so the same product could be reused every academic year without rebuilding workflows."
  ],

  result:
    "The proposed product replaces fragmented recruitment operations with a reusable applicant tracking system for 10+ clubs, supporting approximately 200 applicants annually while saving an estimated 20–80 volunteer hours per recruitment cycle through centralized workflows and dashboards.",

  // metrics: [
  //   "10+ clubs & committees supported",
  //   "200+ applicants in a single recruitment cycle",
  //   "20–80 volunteer hours saved annually",
  //   "Single registration replaces multiple Microsoft Forms"
  // ],
}
  ],
  milestones: [
    {
      id: 1,
      title: "Internship",
      company: "HARTS",
      period: "2026",
      location: "India",
      description:
        "Designed and implemented a prototype for an AI-driven problem-solving toolkit, demonstrating effective use of emerging technologies to address complex challenges.",
      impact: "Strategic Innovation",
      tags: ["Strategy", "Consulting", "Product Development"],
      metrics: [],
    },
    {
      id: 2,
      title: "Founding Developer",
      company: "Fintech Startup (Stealth)",
      period: "2025",
      location: "India",
      description:
        "Architected the initial technical prototype and defined the product roadmap for a scalable fintech solution.",
      impact: "Product Architecture",
      tags: ["Entrepreneurship", "Product Architecture", "Fintech"],
      metrics: [],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Wiz",
      period: "2022 — 2024",
      location: "India",
      description:
        "Spearheaded front-end development for a core product feature, directly enabling the closing of contracts worth $100,000+ in projected revenue. (See the full case study above.)",
      impact: "$100K+ Revenue Enabled",
      tags: ["Full-Stack", "Revenue Growth", "Stakeholder Management"],
      metrics: [{ label: "Revenue Impact", value: "$100K+" }],
    },
  ],
  academic: [
    {
      id: 1,
      type: "competition",
      title: "Runner-Up, Strategy Case Competition",
      issuer: "IIM Indore",
      year: "2025",
      description:
        "Engineered strategic and financial models for a healthcare brand; recognized by the CEO for delivering high-impact, actionable insights.",
      badge: "Runner-Up",
      highlight: true,
      proofUrl: "https://www.youtube.com/watch?v=bniju6Y01eA&pp=ygUbdmlzaG51c2FpIHZpc3dhaml0aCB0aGFyb29y", // EDIT ME — link to the case deck if shareable
      proofLabel: "View Testimonial",
    },
    {
      id: 2,
      type: "publication",
      title: "First Author, IEEE Publication",
      issuer: "IEEE",
      year: "2022",
      description:
        "Authored research on predictive analytics; developed a Random Forest model with 75% accuracy to predict sports outcomes.",
      badge: "IEEE Published",
      highlight: true,
      proofUrl: "https://ieeexplore.ieee.org/document/9783492", // EDIT ME — link to the published paper (IEEE Xplore, DOI, etc.)
      proofLabel: "Read the paper",
    },
    {
      id: 3,
      type: "certification",
      title: "Guest Speaker",
      issuer: "Times India Economic Conclave",
      year: "2025",
      description:
        "Delivered insights on the intersection of AI, sustainability, and workplace communication to a national audience of industry leaders.",
      badge: "Speaker",
      highlight: true,
      proofUrl: "https://www.youtube.com/watch?v=NCAX-k989g4", // EDIT ME — link to event coverage/photos/video if available
      proofLabel: "Event coverage",
    },
    {
      id: 4,
      type: "competition",
      title: "National Finalist (6th Place)",
      issuer: "SIBM Bangalore",
      year: "2026",
      description:
        "Developed a comprehensive GTM strategy for a skincare brand using advanced marketing and competitive frameworks.",
      badge: "National Finalist",
      highlight: false,
    },
  ],
  projects: [
    {
      id: 5,
      name: "Club Committee Applicant Tracking System",
      description:
        "Designed a centralized applicant tracking platform that streamlines annual recruitment for 10+ MBA clubs and committees through a single application portal, role-based dashboards, and configurable multi-round selection workflows.",
      tech: ["React", "Vite", "Google Apps Script", "Google Sheets"],
      outcome:
        "Designed a reusable recruitment workflow for 10+ clubs and ~200 applicants, with an estimated 20–80 volunteer hours saved per recruitment cycle by eliminating spreadsheet consolidation and manual tracking.",
      demoUrl: "",
      highlight: true,
    },
    {
      id: 1,
      name: "SlideShift",
      description:
        "AI-powered content generation engine that automates slide layout and content logic, cutting manual deck-building time.",
      tech: ["Google Gemini API", "React", "Vite"],
      outcome: "~50% reduction in average slide-deck creation time in early use",
      github: "https://github.com/vsvt2000/slideshift",
      demoUrl: "", // EDIT ME — add a path like "/demos/slideshift.mp4" or a hosted GIF URL
      highlight: true,
    },
    {
      id: 2,
      name: "VeriTrust",
      description:
        "An anti-influencer platform for market research designed to provide authentic consumer feedback loops; built as a rapid-prototype MVP.",
      tech: ["Lovable.ai", "Market Research"],
      outcome: "Rapid-prototype MVP built and validated with early test users",
      demoUrl: "",
      highlight: true,
    },
    {
      id: 3,
      name: "Review Sentiment Analyser",
      description:
        "NLP-driven dashboard providing e-commerce platforms with granular customer sentiment metrics and predictive trend analysis.",
      tech: ["React", "Google Gemini API", "NLP"],
      outcome: "Surfaces per-SKU sentiment trends instead of aggregate star ratings",
      github: "https://github.com/vsvt2000/ai_mr_dashboard",
      demoUrl: "",
      highlight: false,
    },
    {
      id: 4,
      name: "Leave Management System",
      description:
        "Automated university administrative workflows, eliminating manual overhead for hundreds of users.",
      tech: ["Next.js", "Google Sheets API", "Tailwind"],
      outcome: "Removed manual leave-tracking overhead for hundreds of students",
      github: "https://github.com/vsvt2000/leave_management_system",
      demoUrl: "",
      highlight: false,
    },
  ],
  leadership: [
    {
      id: 1,
      organization: "Naadam Classical Music Club",
      role: "President",
      period: "2021 — 2022",
      description:
        "Led a national-level cultural event and recruitment strategy, resulting in an 82% increase in active club membership within one year.",
      impact: "82% Membership Growth",
      metrics: [{ label: "Growth", value: "82%" }],
    },
    {
      id: 2,
      organization: "Classical Music",
      role: "Vocal and Veena Performer",
      period: "2007 — Present",
      description:
        "Demonstrated a decade-long commitment to performance excellence at various performances, and consistently performed at the Guruvayoor Chembai Sangeetholsavam.",
      impact: "12 Years Performance",
      metrics: [{ label: "Years", value: "12+" }],
    },
    {
      id: 3,
      organization: "BizConnect Club",
      role: "Vice President",
      period: "2025 — Present",
      description:
        "Spearheaded digital engagement by building a custom web app to bridge the gap between students and industry partners.",
      impact: "Digital Engagement",
      metrics: [],
    },
  ],
  blogPosts: [
  {
    id: 1,
    title: "Ask, and You May Get a Fabulous Project",
    date: "2026-08-01",
    excerpt:
      "A story about how a simple question led to an unexpected internship opportunity and the importance of taking initiative in your career.",
    readTime: "5 min read",
    url: "https://vishnusaiviswajith.substack.com/p/ask-and-you-may-get-a-fabulous-project",
  },
  {
    id: 2,
    title: "My Internship Journey at HARTS Consulting",
    date: "2026-07-01",
    excerpt:
      "Lessons from building AI-powered consulting tools, solving real business problems, and translating ideas into products during my internship at HARTS Consulting.",
    readTime: "7 min read",
    url: "https://vishnusaiviswajith.substack.com/p/my-internship-journey-at-harts-consulting",
  },
  {
    id: 3,
    title: "The McKinsey Way",
    date: "2026-06-01",
    excerpt:
      "Key takeaways from McKinsey's problem-solving philosophy and how structured thinking can improve decision-making and product strategy.",
    readTime: "6 min read",
    url: "https://vishnusaiviswajith.substack.com/p/the-mckinsey-way",
  },
  {
    id: 4,
    title: "The Art of Asking AI Better",
    date: "2026-05-01",
    excerpt:
      "A practical guide to writing better prompts, collaborating with AI systems effectively, and getting consistently better outputs.",
    readTime: "6 min read",
    url: "https://vishnusaiviswajith.substack.com/p/the-art-of-asking-ai-better",
  },
  {
    id: 5,
    title: "My Conversation About MCP with Claude",
    date: "2026-04-01",
    excerpt:
      "Exploring the Model Context Protocol through a conversation with Claude and what it means for the future of AI-powered applications.",
    readTime: "8 min read",
    url: "https://vishnusaiviswajith.substack.com/p/my-conversation-about-mcp-with-claude",
  },
  {
    id: 6,
    title: "The Real Calling",
    date: "2026-03-01",
    excerpt:
      "A personal reflection on careers, purpose, and finding meaningful work beyond titles and expectations.",
    readTime: "4 min read",
    url: "https://vishnusaiviswajith.substack.com/p/the-real-calling",
  },
  {
    id: 7,
    title: "What Can I Afford to Do?",
    date: "2025-12-01",
    excerpt:
      "A reflection on ambition, trade-offs, and making career decisions based on opportunities rather than limitations.",
    readTime: "5 min read",
    url: "https://medium.com/@viswajithvishnusai/what-can-i-afford-to-do-4f93e94647e1",
  },
  {
    id: 8,
    title: "Heartfelt Connections: The Emotional Perception of Animals",
    date: "2025-10-01",
    excerpt:
      "An exploration of empathy, emotions, and the often-overlooked emotional intelligence of animals.",
    readTime: "4 min read",
    url: "https://medium.com/@viswajithvishnusai/heartfelt-connections-the-emotional-perception-of-animals-7acbf16e5795",
  },
  {
    id: 9,
    title: "The Monkey Mind",
    date: "2025-08-01",
    excerpt:
      "Thoughts on overthinking, mindfulness, and learning to navigate a constantly distracted mind.",
    readTime: "5 min read",
    url: "https://medium.com/@viswajithvishnusai/the-monkey-mind-a567bbd5a948",
  },
  {
    id: 10,
    title: "A December at Chennai: The Carnatic Version",
    date: "2024-12-01",
    excerpt:
      "A tribute to Chennai's Margazhi season, Carnatic music, and the city's unique cultural atmosphere during December.",
    readTime: "6 min read",
    url: "https://medium.com/@viswajithvishnusai/a-december-at-chennai-the-carnatic-version-18facb538267",
  },
],
};

/* ============================================================================
 * ICON MAPS
 * ==========================================================================*/
const academicIconMap: Record<AcademicType, LucideIcon> = {
  certification: Award,
  competition: Trophy,
  publication: BookOpen,
};

const leadershipIconCycle: LucideIcon[] = [Users, TrendingUp, Heart, Sparkles];

/* ============================================================================
 * UI ATOMS
 * ==========================================================================*/
function Swatch({ color, name }: { color: string; name: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 sm:mb-4">
      <span className="h-3 w-3 rounded-[3px] sm:h-3.5 sm:w-3.5" style={{ backgroundColor: color }} aria-hidden />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#013D5A]/50 sm:text-xs">
        {name} · {color}
      </span>
    </div>
  );
}

function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline" | "highlight";
  className?: string;
}) {
  const variants: Record<string, string> = {
    default: "bg-[#708C69]/10 text-[#3f5139] border border-[#708C69]/20",
    outline: "border border-[#013D5A]/25 text-[#013D5A]/70 bg-transparent",
    highlight: "bg-[#F4A258]/20 text-[#7a3f0f] border border-[#F4A258]/40",
  };
  return (
    <span className={cn("inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  target,
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  ariaLabel?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013D5A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCF3E3] disabled:opacity-50";
  const variants: Record<string, string> = {
    primary:
      "bg-[#013D5A] text-[#FCF3E3] hover:bg-[#02547a] active:scale-[0.98] shadow-[0_8px_24px_-8px_rgba(1,61,90,0.5)]",
    outline: "border border-[#013D5A]/30 text-[#013D5A] hover:border-[#013D5A] hover:bg-[#013D5A]/5 active:scale-[0.98]",
    ghost: "text-[#013D5A]/70 hover:text-[#013D5A] hover:bg-[#013D5A]/5 active:scale-[0.98]",
  };
  const sizes: Record<string, string> = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

function ProofLink({ href, label, icon: Icon = ArrowUpRight }: { href: string; label: string; icon?: LucideIcon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
      style={{ color: COLOR.midnight }}
    >
      {label}
      <Icon className="h-4 w-4" />
    </a>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#013D5A]/10 bg-white/50 p-6 shadow-[0_1px_2px_rgba(1,61,90,0.04)] transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-[#013D5A]/20 hover:shadow-[0_16px_40px_-16px_rgba(1,61,90,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Shows a demo GIF/video if provided, otherwise an honest "coming soon" state
 *  instead of a fake or empty box. */
function DemoFrame({ demoUrl, projectName }: { demoUrl?: string; projectName: string }) {
  const isVideo = !!demoUrl && /\.(mp4|webm|mov)$/i.test(demoUrl);

  if (demoUrl && isVideo) {
    return (
      <div className="mb-4 overflow-hidden rounded-xl border border-[#013D5A]/10 bg-[#013D5A]/5 sm:mb-5">
        <video src={demoUrl} autoPlay loop muted playsInline className="aspect-video w-full object-cover" />
      </div>
    );
  }
  if (demoUrl) {
    return (
      <div className="mb-4 overflow-hidden rounded-xl border border-[#013D5A]/10 bg-[#013D5A]/5 sm:mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={demoUrl} alt={`${projectName} demo`} className="aspect-video w-full object-cover" />
      </div>
    );
  }
  return (
    <div className="mb-4 flex aspect-video w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#013D5A]/15 bg-[#013D5A]/[0.03] text-[#013D5A]/35 sm:mb-5">
      <ImageOff className="h-5 w-5" />
      <span className="text-xs">Demo loop coming soon</span>
    </div>
  );
}

function SectionWrapper({
  id,
  eyebrow,
  accentColor,
  accentName,
  title,
  subtitle,
  align = "left",
  narrow = false,
  tint,
  children,
}: {
  id: string;
  eyebrow: string;
  accentColor: string;
  accentName: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  narrow?: boolean;
  tint?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", tint && "bg-[#013D5A]/[0.025]")}>
      <div className={cn("mx-auto w-full px-6 md:px-8 lg:px-12", narrow ? "max-w-3xl" : "max-w-7xl")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={cn("mb-10 sm:mb-14", align === "center" && "text-center")}
        >
          {/* <div className={cn(align === "center" && "flex justify-center")}>
            <Swatch color={accentColor} name={accentName} />
          </div> */}
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#013D5A]/50 sm:text-sm">
            {eyebrow}
          </span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl font-bold tracking-tight text-[#013D5A] sm:text-3xl md:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm text-[#013D5A]/60 sm:mt-4 sm:text-base md:text-lg">{subtitle}</p>
          )}
          <div
            className={cn("mt-5 h-[3px] w-16 rounded-full sm:mt-6 sm:w-20", align === "center" && "mx-auto")}
            style={{ background: `linear-gradient(90deg, ${accentColor}, ${COLOR.marigold})` }}
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ============================================================================
 * SECTIONS
 * ==========================================================================*/
function Navbar({ data }: { data: PortfolioData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = data.navLinks.map((l) => l.href.replace("#", "")).reverse();
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.navLinks]);

  const goTo = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "border-b border-[#013D5A]/10 bg-[#FCF3E3]/80 py-3 backdrop-blur-md" : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ fontFamily: "var(--font-display)" }}
            className="text-lg font-bold text-[#013D5A] sm:text-xl"
          >
            {data.personalInfo.name.split(" ")[0]}{" "}
            <span style={{ color: COLOR.marigold }}>{data.personalInfo.name.split(" ").slice(1).join(" ")}</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {data.navLinks.map((link) => {
              const key = link.href.replace("#", "");
              const active = activeSection === key;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(link.href);
                    }}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-[#013D5A]",
                      active ? "text-[#013D5A]" : "text-[#013D5A]/60"
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: COLOR.marigold }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            
            <Button size="sm" onClick={() => goTo("#contact")}>
              Get in Touch
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="rounded-lg p-2 text-[#013D5A] transition-colors hover:bg-[#013D5A]/5 lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#013D5A]/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-72 flex-col bg-[#FCF3E3] p-6 pt-20 shadow-2xl lg:hidden"
            >
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute right-6 top-6 rounded-lg p-2 text-[#013D5A]/60 hover:bg-[#013D5A]/5"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <ul className="flex flex-col gap-6">
                {data.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(link.href);
                      }}
                      className="text-lg font-medium text-[#013D5A]/80 hover:text-[#013D5A]"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3">
                <Button variant="outline" className="w-full" href={data.personalInfo.resumeUrl} target="_blank">
                  <Download className="h-4 w-4" />
                  Download Résumé
                </Button>
                <Button className="w-full" onClick={() => goTo("#contact")}>
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero({ data }: { data: PortfolioData }) {
  const [typedText, setTypedText] = useState("");
  const fullText = data.personalInfo.headline;
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 130]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToAbout = () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FCF3E3] px-6 md:px-8 lg:px-12">
      <motion.div style={{ y: backgroundY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[18%] h-64 w-64 rounded-full opacity-40 blur-[110px] md:h-96 md:w-96" style={{ backgroundColor: COLOR.celeste }} />
        <div className="absolute right-[12%] top-[45%] h-56 w-56 rounded-full opacity-40 blur-[110px] md:h-80 md:w-80" style={{ backgroundColor: COLOR.marigold }} />
        <div className="absolute bottom-[10%] left-[40%] h-48 w-48 rounded-full opacity-30 blur-[110px] md:h-72 md:w-72" style={{ backgroundColor: COLOR.herb }} />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Professional photo — remove this block entirely if you'd rather stay text-only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 pt-30 flex justify-center"
        >
          <div
            className="h-50 w-40 md:h-72 md:w-60 overflow-hidden border-4 shadow-[0_12px_32px_-12px_rgba(1,61,90,0.35)] "
            style={{ borderColor: COLOR.lionsmane, boxShadow: `0 0 0 2px ${COLOR.celeste}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.personalInfo.photoUrl}
              alt={data.personalInfo.name}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
          <span
            className="inline-block rounded-full border px-4 py-2 text-sm font-medium"
            style={{ borderColor: `${COLOR.midnight}30`, backgroundColor: `${COLOR.midnight}0d`, color: COLOR.midnight }}
          >
            {data.personalInfo.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-4 min-h-[2.4em] text-3xl font-bold leading-tight tracking-tight text-[#013D5A] sm:text-4xl sm:leading-tight md:mb-6 md:text-5xl lg:text-6xl"
        >
          {typedText}
          <span className="ml-1 inline-block h-[0.9em] w-0.5 animate-pulse" style={{ backgroundColor: COLOR.marigold }} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mb-4 max-w-2xl px-4 text-base text-[#013D5A]/65 sm:text-lg md:text-xl"
        >
          {data.personalInfo.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mx-auto mb-8 max-w-xl px-4 text-sm font-medium sm:mb-10"
          style={{ color: COLOR.herb }}
        >
          {data.personalInfo.lookingFor}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={scrollToAbout}>
            View My Impact
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" href={data.personalInfo.resumeUrl} target="_blank">
            <Download className="h-5 w-5" />
            Download Résumé
          </Button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#013D5A]/50 transition-colors hover:text-[#013D5A]"
          aria-label="Scroll to About section"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={30} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}

function About({ data }: { data: PortfolioData }) {
  const stats: Metric[] = [...data.highlightStats, { label: "Projects Shipped", value: `${data.projects.length}` }];

  return (
    <SectionWrapper id="about" eyebrow="About Me" accentColor={COLOR.celeste} accentName="Celeste" title="Bridging Engineering & Strategy">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Card className="h-full">
          <p className="text-base leading-relaxed text-[#013D5A]/75 sm:text-lg">{data.personalInfo.bio}</p>
        </Card>

        <div className="space-y-4 sm:space-y-6">
          <Card>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#013D5A]/75 sm:text-base">
                <MapPin className="h-4 w-4" style={{ color: COLOR.herb }} />
                <span>{data.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#013D5A]/75 sm:text-base">
                <Mail className="h-4 w-4" style={{ color: COLOR.herb }} />
                <a href={`mailto:${data.personalInfo.email}`} className="break-all transition-colors hover:text-[#013D5A]">
                  {data.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#013D5A]/75 sm:text-base">
                <Calendar className="h-4 w-4" style={{ color: COLOR.herb }} />
                <span>MBA @ Amrita School of Business, Coimbatore</span>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#013D5A]/60 hover:text-[#013D5A]">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#013D5A]/60 hover:text-[#013D5A]">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={data.personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#013D5A]/60 hover:text-[#013D5A]">
                  <Download className="h-4 w-4" /> Résumé
                </a>
              </div>
            </div>
          </Card>

          <div className={cn("grid gap-3 sm:gap-4", stats.length % 2 === 0 ? "grid-cols-2" : "grid-cols-3")}>
            {stats.map((s) => (
              <Card key={s.label} className="p-3 text-center sm:p-4">
                <div style={{ fontFamily: "var(--font-display)", color: COLOR.midnight }} className="text-2xl font-bold sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-[#013D5A]/55 sm:text-sm">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/** The flagship, deep-dive story. Numbering here is earned — the steps are a
 *  real chronological process, not decoration. */
function CaseStudySection({ data }: { data: PortfolioData }) {
  if (data.caseStudies.length === 0) return null;

  return (
    <SectionWrapper
      id="case-study"
      eyebrow="How I Actually Work"
      accentColor={COLOR.marigold}
      accentName="Marigold"
      title="One Story, In Full"
      subtitle="Rather than a wall of bullet points, here's the real thinking behind my highest-impact piece of work."
      tint
    >
      <div className="space-y-10">
        {data.caseStudies.map((cs) => (
          <Card key={cs.title} className="p-6 sm:p-8 lg:p-10">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: COLOR.marigold }}>
              {cs.eyebrow}
            </span>
            <h3 style={{ fontFamily: "var(--font-display)" }} className="mb-1 text-xl font-bold text-[#013D5A] sm:text-2xl">
              {cs.title}
            </h3>
            <div className="mb-6 text-sm text-[#013D5A]/50 sm:mb-8">{cs.context}</div>

            <div className="mb-8 grid gap-6 sm:mb-10 lg:grid-cols-2 lg:gap-10">
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#013D5A]/50">The Problem</h4>
                <p className="text-sm leading-relaxed text-[#013D5A]/75 sm:text-base">{cs.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#013D5A]/50">Key Decisions</h4>
                <ul className="space-y-2">
                  {cs.decisions.map((d) => (
                    <li key={d} className="flex gap-2 text-sm leading-relaxed text-[#013D5A]/75 sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: COLOR.herb }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#013D5A]/50">The Approach</h4>
            <div className="mb-8 grid gap-4 sm:mb-10 sm:grid-cols-3 sm:gap-5">
              {cs.approach.map((step, i) => (
                <div key={step.title} className="rounded-xl border border-[#013D5A]/10 bg-[#FCF3E3] p-4 sm:p-5">
                  <div
                    className="mb-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${COLOR.midnight}12`, color: COLOR.midnight }}
                  >
                    {i + 1}
                  </div>
                  <h5 style={{ fontFamily: "var(--font-display)" }} className="mb-1.5 text-sm font-semibold text-[#013D5A] sm:text-base">
                    {step.title}
                  </h5>
                  <p className="text-xs leading-relaxed text-[#013D5A]/65 sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-5 sm:p-6" style={{ backgroundColor: `${COLOR.herb}12` }}>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide" style={{ color: COLOR.herb }}>
                Result
              </h4>
              <p className="text-sm leading-relaxed text-[#013D5A]/85 sm:text-base">{cs.result}</p>
            </div>

            {cs.proofUrl && (
              <div className="mt-6">
                <ProofLink href={cs.proofUrl} label={cs.proofLabel ?? "See proof"} icon={Play} />
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Milestones({ data }: { data: PortfolioData }) {
  return (
    <SectionWrapper
      id="milestones"
      eyebrow="Professional Journey"
      accentColor={COLOR.midnight}
      accentName="Midnight"
      title="Milestones That Define My Path"
      subtitle="A track record of delivering meaningful impact across industries."
    >
      <div className="relative">
        <div
          className="absolute left-4 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-px"
          style={{ background: `linear-gradient(to bottom, ${COLOR.herb}80, ${COLOR.herb}20, transparent)` }}
        />
        <div className="space-y-8 md:space-y-12">
          {data.milestones.map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex gap-4 md:gap-8"
            >
              <div
                className="absolute left-4 top-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-[#FCF3E3] md:left-1/2 md:-translate-x-1/2"
                style={{ borderColor: COLOR.herb }}
              >
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLOR.herb }} />
              </div>

              <div className="ml-12 flex-1 pb-2 md:ml-0 md:w-[calc(50%-3rem)] md:flex-none">
                <Card className="h-full">
                  <div className="mb-3 flex flex-col gap-2 md:mb-4 md:flex-row md:flex-wrap md:items-center md:gap-3">
                    <div className="flex items-center gap-2 text-[#013D5A]">
                      <Building2 className="h-4 w-4" style={{ color: COLOR.herb }} />
                      <span className="text-sm font-semibold md:text-base">{m.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#013D5A]/50 md:text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{m.location}</span>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "var(--font-display)" }} className="mb-1 text-lg font-semibold text-[#013D5A] md:text-xl">
                    {m.title}
                  </h3>
                  <div className="mb-3 text-xs text-[#013D5A]/50 md:mb-4 md:text-sm">{m.period}</div>
                  <p className="mb-4 text-sm leading-relaxed text-[#013D5A]/70 md:mb-6">{m.description}</p>

                  <div className="mb-4 flex flex-wrap gap-2 md:mb-5">
                    {m.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {m.metrics.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-4 md:mb-6 md:gap-5">
                      {m.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div style={{ color: COLOR.midnight }} className="text-base font-bold md:text-lg">
                            {metric.value}
                          </div>
                          <div className="text-xs text-[#013D5A]/50">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Badge variant="highlight">{m.impact}</Badge>
                </Card>
              </div>

              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function Academic({ data }: { data: PortfolioData }) {
  return (
    <SectionWrapper
      id="academic"
      eyebrow="Academic Excellence"
      accentColor={COLOR.herb}
      accentName="Herb"
      title="Certifications & Recognition"
      subtitle="Continuous learning and competitive achievements."
      tint
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.academic.map((entry, i) => {
          const Icon = academicIconMap[entry.type] ?? Award;
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="flex h-full flex-col">
                <div className="mb-3 flex items-start justify-between sm:mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10" style={{ backgroundColor: `${COLOR.herb}18` }}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: COLOR.herb }} />
                  </div>
                  <Badge variant={entry.highlight ? "highlight" : "outline"}>{entry.badge}</Badge>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)" }} className="mb-1 text-base font-semibold leading-tight text-[#013D5A] sm:mb-2 sm:text-lg">
                  {entry.title}
                </h3>
                <div className="mb-2 text-sm font-medium sm:mb-3" style={{ color: COLOR.herb }}>
                  {entry.issuer}
                </div>
                <div className="mb-3 text-xs text-[#013D5A]/45 sm:mb-4">{entry.year}</div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#013D5A]/65">{entry.description}</p>
                {entry.proofUrl && <ProofLink href={entry.proofUrl} label={entry.proofLabel ?? "View proof"} />}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

function Projects({ data }: { data: PortfolioData }) {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Technical Portfolio"
      accentColor={COLOR.marigold}
      accentName="Marigold"
      title="Projects That Push Boundaries"
      subtitle="From GenAI-powered platforms to enterprise-scale systems."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
        {data.projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Card className="group relative flex h-full flex-col">
              {p.highlight && (
                <div className="absolute right-4 top-4 z-10">
                  <Badge variant="highlight">Featured</Badge>
                </div>
              )}

              <DemoFrame demoUrl={p.demoUrl} projectName={p.name} />

              <h3 style={{ fontFamily: "var(--font-display)" }} className="mb-2 text-lg font-semibold text-[#013D5A] sm:mb-3 sm:text-xl">
                {p.name}
              </h3>
              <p className="mb-3 flex-1 text-sm leading-relaxed text-[#013D5A]/65 sm:mb-4">{p.description}</p>

              <div className="mb-4 text-sm font-medium sm:mb-5" style={{ color: COLOR.herb }}>
                {p.outcome}
              </div>

              <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-5 border-t border-[#013D5A]/10 pt-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: COLOR.midnight }}
                    aria-label={`View ${p.name} source on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: COLOR.midnight }}
                  >
                    <Play className="h-4 w-4" />
                    Demo
                  </a>
                )}
                {!p.github && !p.demoUrl && <span className="text-sm text-[#013D5A]/40">Write-up available on request</span>}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Leadership({ data }: { data: PortfolioData }) {
  return (
    <SectionWrapper
      id="leadership"
      eyebrow="Leadership & Impact"
      accentColor={COLOR.celeste}
      accentName="Celeste"
      title="Beyond The Code"
      subtitle="Growing teams, communities, and the next generation of builders."
      tint
    >
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
        {data.leadership.map((entry, i) => {
          const Icon = leadershipIconCycle[i % leadershipIconCycle.length];
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex items-start gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12" style={{ backgroundColor: `${COLOR.herb}18` }}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: COLOR.herb }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)" }} className="text-base font-semibold text-[#013D5A] sm:text-lg">
                      {entry.organization}
                    </h3>
                    <div className="mt-0.5 text-sm" style={{ color: COLOR.herb }}>
                      {entry.role} · {entry.period}
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#013D5A]/65 sm:mb-6">{entry.description}</p>
                {entry.metrics.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-4 sm:mb-6 sm:gap-6">
                    {entry.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div style={{ fontFamily: "var(--font-display)" }} className="text-xl font-bold text-[#013D5A] sm:text-2xl">
                          {metric.value}
                        </div>
                        <div className="text-xs text-[#013D5A]/50 sm:text-sm">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <Badge variant="highlight">{entry.impact}</Badge>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function Blog({ data }: { data: PortfolioData }) {
  if (data.blogPosts.length === 0) return null;
  return (
    <SectionWrapper
      id="blog"
      eyebrow="Insights & Writing"
      accentColor={COLOR.midnight}
      accentName="Midnight"
      title="From My Blog"
      subtitle="Thoughts on technology, strategy, and the intersection of engineering and business."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
        {data.blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <Card className="group flex h-full flex-col">
              <div className="mb-3 flex items-center gap-3 text-xs text-[#013D5A]/45 sm:mb-4 sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="mb-2 text-lg font-semibold leading-tight text-[#013D5A] transition-colors sm:mb-3 sm:text-xl">
                {post.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[#013D5A]/65 sm:mb-6">{post.excerpt}</p>
              <a href={post.url} className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: COLOR.marigold }}>
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Contact({ data }: { data: PortfolioData }) {
  const socialLinks: { name: string; url: string; icon: LucideIcon; label: string }[] = [
    { name: "LinkedIn", url: data.personalInfo.linkedin, icon: Linkedin, label: "Connect on LinkedIn" },
    { name: "GitHub", url: data.personalInfo.github, icon: Github, label: "View GitHub Profile" },
    { name: "Résumé", url: data.personalInfo.resumeUrl, icon: Download, label: "Download résumé" },
    { name: "Email", url: `mailto:${data.personalInfo.email}`, icon: Mail, label: "Send Email" },
  ];

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Get In Touch"
      accentColor={COLOR.marigold}
      accentName="Marigold"
      title="Let's Build Something Remarkable"
      subtitle={data.personalInfo.lookingFor}
      align="center"
      narrow
      tint
    >
      <div className="mb-10 sm:mb-12">
        <div className="mb-8 sm:mb-10">
          <a
            href={`mailto:${data.personalInfo.email}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-[#013D5A] transition-colors hover:opacity-70 sm:text-2xl md:text-3xl"
          >
            <span className="break-all sm:break-normal">{data.personalInfo.email}</span>
            <ArrowUpRight className="h-5 w-5 shrink-0 sm:h-6" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isExternalTab = link.name !== "Email";
            return (
              <a
                key={link.name}
                href={link.url}
                target={isExternalTab ? "_blank" : undefined}
                rel={isExternalTab ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 rounded-full border border-[#013D5A]/15 bg-white/40 px-4 py-2.5 text-sm text-[#013D5A]/75 transition-all hover:border-[#013D5A]/40 hover:text-[#013D5A] sm:px-5 sm:py-3 sm:text-base"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                <span className="font-medium">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#013D5A]/10 pt-6 text-xs text-[#013D5A]/45 sm:pt-8 sm:text-sm">
        <p>
          Designed &amp; Built by {data.personalInfo.name} · {new Date().getFullYear()}
        </p>
        <p className="mt-1 sm:mt-2">Crafted with Next.js, Tailwind CSS, and Framer Motion</p>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================================
 * PAGE
 * ==========================================================================*/
export default function Portfolio({ data = defaultPortfolioData }: { data?: PortfolioData }) {
  return (
    <div className={cn(displayFont.variable, bodyFont.variable, "min-h-screen bg-[#FCF3E3]")} style={{ fontFamily: "var(--font-body)" }}>
      <Navbar data={data} />
      <main>
        <Hero data={data} />
        <About data={data} />
        <CaseStudySection data={data} />
        <Milestones data={data} />
        <Academic data={data} />
        <Projects data={data} />
        <Leadership data={data} />
        <Blog data={data} />
        <Contact data={data} />
      </main>
    </div>
  );
}