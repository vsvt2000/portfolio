"use client";

/**
 * ============================================================================
 * PORTFOLIO — single-file, self-contained page component
 * ============================================================================
 * Drop this file in as `app/page.tsx` (or import <Portfolio /> from wherever
 * you like — it's a plain default export that also accepts a `data` prop).
 *
 * TO ADD CONTENT: scroll to the "CONTENT" block below and push a new object
 * into the relevant array (milestones, academic, projects, leadership,
 * blogPosts). Every section maps over its array automatically — there is no
 * hardcoded count anywhere, so the layout, timeline, and stats all grow with
 * the data.
 *
 * Requires (already in package.json): next, react, framer-motion, lucide-react
 * ============================================================================
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Space_Grotesk, DM_Sans } from "next/font/google";
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
  Star,
  type LucideIcon,
} from "lucide-react";

/* ============================================================================
 * FONTS — a sleek geometric display face paired with a neutral workhorse body
 * face. Loaded once at module scope; every heading opts in via inline style
 * rather than a Tailwind config edit, so this file works regardless of your
 * tailwind.config.
 * ==========================================================================*/
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/* ============================================================================
 * DESIGN TOKENS — the five brand colors, used verbatim (no re-tinting).
 * ==========================================================================*/
const COLOR = {
  midnight: "#013D5A", // primary — ink, headings, dark surfaces
  lionsmane: "#FCF3E3", // primary — page background, light surfaces
  celeste: "#BDD3CE", // secondary — cool accent, calm sections
  herb: "#708C69", // secondary — growth / leadership / tags
  marigold: "#F4A258", // secondary — energy, CTAs, featured markers
} as const;

type ColorKey = keyof typeof COLOR;

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/* ============================================================================
 * TYPES — every content shape the page understands. Add a field here first,
 * then it's available everywhere.
 * ==========================================================================*/
export interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
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
  metrics: Metric[];
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
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  impactScore: number;
  github?: string;
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
  date: string; // ISO date string
  excerpt: string;
  readTime: string;
  url: string;
}

export interface PortfolioData {
  meta: {
    title: string;
    description: string;
  };
  personalInfo: PersonalInfo;
  navLinks: NavLink[];
  highlightStats: Metric[]; // hand-authored stats (things not derivable from array lengths)
  milestones: Milestone[];
  academic: AcademicEntry[];
  projects: Project[];
  leadership: LeadershipEntry[];
  blogPosts: BlogPost[];
}

/* ============================================================================
 * CONTENT — edit freely. Nothing below this block needs to change when you
 * add a new job, award, project, org, or post.
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
    bio: "Strategic leader with a foundation in Computer Science Engineering and an MBA focus on Marketing and Strategy. Proven track record of delivering revenue-enabling software features (+$100K impact), winning national-level strategy competitions at IIMs, and scaling organizations by over 80%. Expert at translating emerging technologies like Generative AI into measurable operational efficiency and market value.",
    location: "Coimbatore, India",
    email: "viswajithvishnusai@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishnusai-viswajith-tharoor-9b77541a9",
    github: "https://github.com/vsvt2000",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#milestones" },
    { label: "Academic", href: "#academic" },
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
  milestones: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Wiz",
      period: "2022 — 2024",
      location: "India",
      description:
        "Spearheaded front-end development for a core product feature, directly enabling the closing of contracts worth $100,000+ in projected revenue.",
      impact: "$100K+ Revenue Enabled",
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
      description:
        "Architected the initial technical prototype and defined the product roadmap for a scalable fintech solution.",
      impact: "Product Architecture",
      tags: ["Entrepreneurship", "Product Architecture", "Fintech"],
      metrics: [{ label: "Architecture Score", value: "9.0/10" }],
    },
    {
      id: 3,
      title: "Engineering Recognition",
      company: "Wiz",
      period: "April 2024",
      location: "India",
      description:
        "Recognized as 'Best Team of the Month' for accelerating the delivery of 3 critical full-stack features ahead of schedule.",
      impact: "Best Team of the Month",
      tags: ["Leadership", "Agile Delivery"],
      metrics: [
        { label: "Delivery Score", value: "8.5/10" },
        { label: "Features Delivered", value: "3" },
      ],
    },
    {
      id: 4,
      title: "Internship",
      company: "HARTS",
      period: "2026",
      location: "India",
      description:
        "Designed and implemented a prototype for an AI-driven problem-solving toolkit, demonstrating effective use of emerging technologies to address complex challenges.",
      impact: "Strategic Innovation",
      tags: ["Strategy", "Consulting", "Product Development"],
      metrics: [{ label: "Architecture Score", value: "9.0/10" }],
    },
  ],
  academic: [
    {
      id: 1,
      type: "competition",
      title: "Runner-Up, Strategy Case Competition",
      issuer: "IIM Indore",
      year: "2024",
      description:
        "Engineered strategic and financial models for a healthcare brand; recognized by the CEO for delivering high-impact, actionable insights.",
      badge: "Runner-Up",
      highlight: true,
    },
    {
      id: 2,
      type: "publication",
      title: "First Author, IEEE Publication",
      issuer: "IEEE",
      year: "2024",
      description:
        "Authored research on predictive analytics; developed a Random Forest model with 75% accuracy to predict sports outcomes.",
      badge: "IEEE Published",
      highlight: true,
    },
    {
      id: 3,
      type: "certification",
      title: "Guest Speaker",
      issuer: "Times India Economic Conclave",
      year: "2024",
      description:
        "Delivered insights on the intersection of AI, sustainability, and workplace communication to a national audience of industry leaders.",
      badge: "Speaker",
      highlight: true,
    },
    {
      id: 4,
      type: "competition",
      title: "National Finalist (6th Place)",
      issuer: "SIBM Bangalore",
      year: "2024",
      description:
        "Developed a comprehensive GTM strategy for a skincare brand using advanced marketing and competitive frameworks.",
      badge: "National Finalist",
      highlight: false,
    },
  ],
  projects: [
    {
      id: 1,
      name: "SlideShift",
      description:
        "AI-powered content generation engine that reduces slide design time by an estimated 50% through automated layout and content logic.",
      tech: ["Google Gemini API", "React", "Vite"],
      impactScore: 9.5,
      github: "https://github.com/vsvt2000/slideshift",
      highlight: true,
    },
    {
      id: 2,
      name: "VeriTrust",
      description:
        "An anti-influencer platform for market research designed to provide authentic consumer feedback loops; built as a rapid-prototype MVP.",
      tech: ["Lovable.ai", "Market Research"],
      impactScore: 9.0,
      highlight: true,
    },
    {
      id: 3,
      name: "Review Sentiment Analyser",
      description:
        "NLP-driven dashboard providing e-commerce platforms with granular customer sentiment metrics and predictive trend analysis.",
      tech: ["React", "Google Gemini API", "NLP"],
      impactScore: 8.8,
      github: "https://github.com/vsvt2000/ai_mr_dashboard",
      highlight: false,
    },
    {
      id: 4,
      name: "Leave Management System",
      description:
        "Automated university administrative workflows, eliminating manual overhead for hundreds of users.",
      tech: ["Next.js", "Google Sheets API", "Tailwind"],
      impactScore: 8.2,
      github: "https://github.com/vsvt2000/leave_management_system",
      highlight: false,
    },
  ],
  leadership: [
    {
      id: 1,
      organization: "Naadam Classical Music Club",
      role: "President",
      period: "2023 — Present",
      description:
        "Led a national-level cultural event and recruitment strategy, resulting in an 82% increase in active club membership within one year.",
      impact: "82% Membership Growth",
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
      description:
        "Demonstrated a decade-long commitment to performance excellence at the Guruvayoor Chembai Sangeetholsavam.",
      impact: "12 Years Performance",
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
      description:
        "Spearheaded digital engagement by building a custom web app to bridge the gap between students and industry partners.",
      impact: "Digital Engagement",
      metrics: [{ label: "Score", value: "9.0/10" }],
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "Building AI-Powered Applications: Lessons from the Trenches",
      date: "2024-03-15",
      excerpt:
        "After shipping multiple GenAI features in production, here are the key insights I gathered about integrating LLMs into real products.",
      readTime: "8 min read",
      url: "#",
    },
    {
      id: 2,
      title: "The MBA-Engineer Divide: Why Technical Leaders Need Business Strategy",
      date: "2024-02-28",
      excerpt:
        "How combining a computer science background with an MBA transformed my approach to product development and stakeholder management.",
      readTime: "6 min read",
      url: "#",
    },
    {
      id: 3,
      title: "From Code to Strategy: My Journey into Product Management",
      date: "2024-01-20",
      excerpt:
        "Reflections on transitioning from pure engineering to strategic product roles, and why the hybrid skillset is becoming increasingly valuable.",
      readTime: "5 min read",
      url: "#",
    },
  ],
};

/* ============================================================================
 * ICON MAPS — indexed/cycled, never hardcoded to a specific id, so adding a
 * 5th leadership entry or a 4th academic type doesn't require touching code.
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
      <span
        className="h-3 w-3 rounded-[3px] sm:h-3.5 sm:w-3.5"
        style={{ backgroundColor: color }}
        aria-hidden
      />
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
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
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
    outline:
      "border border-[#013D5A]/30 text-[#013D5A] hover:border-[#013D5A] hover:bg-[#013D5A]/5 active:scale-[0.98]",
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
      <div
        className={cn(
          "mx-auto w-full px-6 md:px-8 lg:px-12",
          narrow ? "max-w-3xl" : "max-w-7xl"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={cn("mb-10 sm:mb-14", align === "center" && "text-center")}
        >
          <div className={cn(align === "center" && "flex justify-center")}>
            {/* <Swatch color={accentColor} name={accentName} /> */}
          </div>
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
            <p className="mt-3 max-w-2xl text-sm text-[#013D5A]/60 sm:mt-4 sm:text-base md:text-lg">
              {subtitle}
            </p>
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

          <ul className="hidden items-center gap-8 lg:flex">
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

          <div className="hidden lg:block">
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
              <div className="mt-auto">
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
          className="mx-auto mb-8 max-w-2xl px-4 text-base text-[#013D5A]/65 sm:text-lg md:mb-10 md:text-xl"
        >
          {data.personalInfo.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={scrollToAbout}>
            View My Impact
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Projects
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
  const stats: Metric[] = [
    ...data.highlightStats,
    { label: "Projects Shipped", value: `${data.projects.length}` },
  ];

  return (
    <SectionWrapper
      id="about"
      eyebrow="About Me"
      accentColor={COLOR.celeste}
      accentName="Celeste"
      title="Bridging Engineering & Strategy"
    >
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
              <div className="flex gap-4 pt-2">
                <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#013D5A]/60 hover:text-[#013D5A]">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#013D5A]/60 hover:text-[#013D5A]">
                  <Github className="h-4 w-4" /> GitHub
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

function Milestones({ data }: { data: PortfolioData }) {
  return (
    <SectionWrapper
      id="milestones"
      eyebrow="Professional Journey"
      accentColor={COLOR.midnight}
      accentName="Midnight"
      title="Milestones That Define My Path"
      subtitle="A track record of delivering meaningful impact across industries."
      tint
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
                      <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                  </div>

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
              <Card className="h-full">
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
                <p className="text-sm leading-relaxed text-[#013D5A]/65">{entry.description}</p>
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
      tint
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
                <div className="absolute right-4 top-4">
                  <Badge variant="highlight">Featured</Badge>
                </div>
              )}
              <h3 style={{ fontFamily: "var(--font-display)" }} className="mb-2 pr-16 text-lg font-semibold text-[#013D5A] sm:mb-3 sm:text-xl">
                {p.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[#013D5A]/65 sm:mb-6">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#013D5A]/10 pt-4">
                <div className="flex items-center gap-1.5 text-sm text-[#013D5A]/50">
                  <Star className="h-4 w-4" />
                  <span>Impact: {p.impactScore}/10</span>
                </div>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: COLOR.midnight }}
                    aria-label={`View ${p.name} on GitHub`}
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="text-sm text-[#013D5A]/40">No Demo Available</span>
                )}
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
      tint
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
              <a
                href={post.url}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: COLOR.marigold }}
              >
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
    { name: "Email", url: `mailto:${data.personalInfo.email}`, icon: Mail, label: "Send Email" },
  ];

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Get In Touch"
      accentColor={COLOR.marigold}
      accentName="Marigold"
      title="Let's Build Something Remarkable"
      subtitle="Open to discussing new opportunities, collaborations, or just a good conversation about technology."
      align="center"
      narrow
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
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
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
 * PAGE — assembles every section in order. Pass a `data` prop to override
 * the default content entirely (e.g. fetched from a CMS).
 * ==========================================================================*/
export default function Portfolio({ data = defaultPortfolioData }: { data?: PortfolioData }) {
  return (
    <div
      className={cn(displayFont.variable, bodyFont.variable, "min-h-screen bg-[#FCF3E3]")}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <Navbar data={data} />
      <main>
        <Hero data={data} />
        <About data={data} />
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