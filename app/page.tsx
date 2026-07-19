"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Milestones } from "@/components/Milestones";
import { Academic } from "@/components/Academic";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import Portfolio from "@/components/v2/portfolio";

// Component registry - maps section types to components
// To add a new section: create component, add to registry, add to portfolioData.json
const componentRegistry: Record<string, React.ComponentType> = {
  hero: Hero,
  about: About,
  milestones: Milestones,
  academic: Academic,
  projects: Projects,
  leadership: Leadership,
  blog: Blog,
  contact: Contact,
};

export default function Home() {
  return (
    <div>
      <Portfolio/>
    </div>
  );
}
