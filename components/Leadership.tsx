"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Heart } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";

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

const iconMap: Record<number, typeof Users> = {
  1: Users,
  2: TrendingUp,
  3: Heart,
};

export function Leadership() {
  return (
    <SectionWrapper
      id="leadership"
      eyebrow="Leadership & Impact"
      title="Beyond The Code"
      subtitle="Growing teams, communities, and the next generation of builders"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8"
      >
        {portfolioData.leadership.map((entry) => {
          const Icon = iconMap[entry.id] || Users;
          return (
            <motion.div key={entry.id} variants={item}>
              <Card className="h-full p-4 sm:p-6">
                <div className="mb-4 flex items-start gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-indigo-400 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                      {entry.organization}
                    </h3>
                    <div className="mt-0.5 text-sm text-indigo-400">
                      {entry.role} · {entry.period}
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-400 sm:mb-6">
                  {entry.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-4 sm:mb-6 sm:gap-6">
                  {entry.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-xl font-bold text-slate-50 sm:text-2xl">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-500 sm:text-sm">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {entry.impact}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
