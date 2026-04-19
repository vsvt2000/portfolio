"use client";

import { motion } from "framer-motion";
import { Award, Trophy, BookOpen } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

const typeIcons: Record<string, typeof Award> = {
  certification: Award,
  competition: Trophy,
  publication: BookOpen,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Academic() {
  return (
    <SectionWrapper
      id="academic"
      eyebrow="Academic Excellence"
      title="Certifications & Recognition"
      subtitle="Continuous learning and competitive achievements"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {portfolioData.academic.map((entry) => {
          const Icon = typeIcons[entry.type] || Award;
          return (
            <motion.div key={entry.id} variants={item}>
              <Card className="h-full p-4 sm:p-6">
                <div className="mb-3 flex items-start justify-between sm:mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4 text-indigo-400 sm:h-5 sm:w-5" />
                  </div>
                  <Badge variant={entry.highlight ? "highlight" : "outline"}>
                    {entry.badge}
                  </Badge>
                </div>

                <h3 className="mb-1 text-base font-semibold leading-tight text-slate-50 sm:mb-2 sm:text-lg">
                  {entry.title}
                </h3>

                <div className="mb-2 text-sm font-medium text-indigo-400 sm:mb-3">
                  {entry.issuer}
                </div>

                <div className="mb-3 text-xs text-slate-500 sm:mb-4">
                  {entry.year}
                </div>

                <p className="text-sm leading-relaxed text-slate-400">
                  {entry.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
