# Portfolio Website Specification

## 1. Project Overview
- **Name**: Executive-Tech Portfolio
- **Type**: Personal portfolio website (Next.js App Router)
- **Core Functionality**: High-end, professional portfolio showcasing career milestones, academic achievements, technical projects, and leadership experience with sophisticated animations
- **Target Users**: Recruiters, hiring managers, peers, and professional network

## 2. Design Language

### Aesthetic Direction
"Executive-Tech" — clean, sophisticated, premium. Think Stripe meets a top-tier consulting firm's website. Minimal but impactful, with purposeful whitespace and refined micro-interactions.

### Color Palette
| Role | Color | Tailwind |
|------|-------|----------|
| Background Primary | Slate-950 | `#020617` |
| Background Secondary | Slate-900 | `#0f172a` |
| Surface | Slate-800 | `#1e293b` |
| Accent Primary | Indigo-500 | `#6366f1` |
| Accent Hover | Indigo-400 | `#818cf8` |
| Accent Glow | Indigo-600 | `#4f46e5` |
| Text Primary | Slate-50 | `#f8fafc` |
| Text Secondary | Slate-400 | `#94a3b8` |
| Text Muted | Slate-500 | `#64748b` |
| Success | Emerald-500 | `#10b981` |
| Gradient Start | Indigo-600 | `#4f46e5` |
| Gradient End | Purple-600 | `#9333ea` |

### Typography
- **Font Family**: DM Sans (Google Fonts) — weights 400, 500, 600, 700
- **Headings**: DM Sans Bold (700)
- **Body**: DM Sans Regular (400)
- **Scale**:
  - Hero: 4rem (64px) desktop, 2.5rem mobile
  - H1: 3rem desktop
  - H2: 2rem desktop
  - H3: 1.5rem
  - Body: 1rem (16px)
  - Small: 0.875rem

### Spatial System
- Section padding: 6rem vertical (desktop), 4rem (mobile)
- Container max-width: 1280px
- Grid gap: 2rem
- Card padding: 1.5rem
- Border radius: 0.75rem (cards), 0.5rem (buttons)

### Motion Philosophy
- **Entrance animations**: fade-up with stagger, 0.5s duration, ease-out
- **Scroll reveals**: triggered at 20% viewport entry
- **Hover states**: 200ms transitions, subtle scale (1.02) and glow effects
- **Parallax**: Hero background moves at 0.3x scroll speed
- **Page feel**: Smooth, intentional, premium — never jarring

### Visual Assets
- Icons: Lucide React (consistent, clean line icons)
- No emoji — use SVG icons only
- Subtle grain texture overlay on hero (optional)
- Gradient orbs as decorative elements (blurred, low opacity)

## 3. Layout & Structure

### Page Architecture
```
[Navbar - sticky glassmorphism]
[Hero - full viewport height]
[About - ~60vh]
[Professional Milestones - timeline]
[Academic Excellence - grid]
[Technical Portfolio - cards grid]
[Leadership - metrics + commitments]
[Contact Footer]
```

### Navbar
- Desktop: Fixed top, glassmorphism (backdrop-blur-md, bg-slate-900/70)
- Mobile: Hamburger menu with slide-in drawer
- Links: smooth scroll to sections
- Active state: Indigo underline

### Hero Section
- Full viewport height (100vh)
- Animated gradient background with floating orbs
- Large headline with typing animation (optional) or parallax text
- Sub-headline
- CTA button with hover glow effect

### Responsive Strategy
- Mobile-first breakpoints
- Stack layouts on mobile, grid on desktop (md: 768px, lg: 1024px)
- Hamburger menu below lg breakpoint

## 4. Features & Interactions

### Navbar
- Scroll-triggered background opacity change
- Active section highlighting
- Mobile drawer: slide from right, overlay background

### Hero
- Typing animation for headline (typewriter effect) OR parallax
- CTA button: indigo glow on hover
- Scroll indicator animation (bouncing chevron)

### Cards (Projects, Milestones)
- Default: Subtle border, bg-slate-800
- Hover: Border brightens to indigo, slight lift (translate-y -2px), shadow glow
- Transition: 200ms ease-out

### Timeline (Professional Milestones)
- Vertical line with nodes
- Cards alternate left/right on desktop
- Mobile: All left-aligned

### Contact Footer
- Icon links with hover scale effect
- Email, LinkedIn, GitHub

### Accessibility
- All interactive elements have ARIA labels
- Focus-visible states
- Reduced motion media query respected
- Semantic HTML (nav, main, section, footer)

## 5. Component Inventory

### Navbar
- States: default (transparent), scrolled (glassmorphism)
- Mobile: hamburger icon, drawer open/closed

### Hero
- Animated background (gradient orbs)
- Headline (DM Sans Bold, large)
- Sub-headline (text-secondary)
- CTA button (indigo bg, glow hover)

### Section Heading
- Eyebrow text (uppercase, small, indigo)
- Main heading (DM Sans Bold)
- Underline accent (indigo gradient)

### Timeline Item
- Node (indigo circle)
- Content card (milestone details)
- Connector line

### Project Card
- Title, description
- Tech tags (pill badges)
- Hover glow effect

### Metric Card
- Large number (DM Sans Bold)
- Label below
- Optional icon

### Footer
- Social links (icon + hover)
- Copyright

## 6. Technical Approach

### Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Next font/google (DM Sans)

### Project Structure
```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main page assembling sections
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Milestones.tsx
│   ├── Academic.tsx
│   ├── Projects.tsx
│   ├── Leadership.tsx
│   ├── Contact.tsx
│   └── ui/
│       ├── SectionHeading.tsx
│       ├── Card.tsx
│       ├── TimelineItem.tsx
│       └── Button.tsx
├── data/
│   └── content.ts          # All portfolio data (easy to edit)
├── lib/
│   └── utils.ts            # cn() helper
└── public/
    └── (assets)
```

### Data Architecture
All user-specific content lives in `data/content.ts`:
- `personalInfo` — name, tagline, bio
- `milestones[]` — title, company, period, description, impact
- `academic[]` — certification, issuer, year, description
- `projects[]` — name, description, tech[], link
- `leadership[]` — organization, role, impact metrics
- `socialLinks` — LinkedIn, GitHub, Email URLs

This allows complete content updates without touching UI code.
