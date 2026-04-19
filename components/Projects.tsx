"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="Technical Portfolio"
      title="Projects That Push Boundaries"
      subtitle="From GenAI-powered platforms to enterprise-scale systems"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:grid-cols-2 lg:gap-6"
      >
        {portfolioData.projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <Card className="group relative flex h-full flex-col p-4 sm:p-6">
              {project.highlight && (
                <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                  <Badge variant="highlight">Featured</Badge>
                </div>
              )}

              <h3 className="mb-2 pr-16 text-lg font-semibold text-slate-50 sm:mb-3 sm:text-xl">
                {project.name}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400 sm:mb-6">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                {project.tech.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <Star className="h-4 w-4" />
                  <span>Impact: {project.impactScore}/10</span>
                </div>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="text-sm text-slate-500">No Demo Available</span>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
