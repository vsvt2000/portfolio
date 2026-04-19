"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";

export function Milestones() {
  return (
    <SectionWrapper
      id="milestones"
      eyebrow="Professional Journey"
      title="Milestones That Define My Path"
      subtitle="A track record of delivering meaningful impact across industries"
    >
      <div className="relative">
        {/* Vertical Line - left-aligned on mobile, centered on desktop */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent md:left-1/2 md:-translate-x-px lg:left-1/2 lg:-translate-x-px" />

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-12">
          {portfolioData.milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-4 md:gap-8"
            >
              {/* Timeline Node - always left-aligned on mobile, centered on desktop */}
              <div className="absolute left-4 top-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500 bg-slate-950 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
              </div>

              {/* Content Card - left-aligned on mobile, alternating on desktop */}
              <div className="ml-12 flex-1 pb-2 md:ml-0 md:flex-none md:w-[calc(50%-3rem)] lg:ml-0 lg:flex-none lg:w-[calc(50%-3rem)]">
                <Card className="h-full p-4 md:p-6">
                  <div className="mb-3 flex flex-col gap-2 md:mb-4 md:flex-row md:items-center md:flex-wrap md:gap-3">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Building2 className="h-4 w-4 text-indigo-400" />
                      <span className="text-sm font-semibold md:text-base">
                        {milestone.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 md:text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>{milestone.location}</span>
                    </div>
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-slate-50 md:text-xl">
                    {milestone.title}
                  </h3>
                  <div className="mb-3 text-xs text-slate-500 md:mb-4 md:text-sm">
                    {milestone.period}
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-slate-400 md:mb-6">
                    {milestone.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-3 md:mb-6 md:gap-4">
                    {milestone.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-bold text-indigo-400 md:text-lg">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    {milestone.impact}
                  </div>
                </Card>
              </div>

              {/* Empty space for alignment on desktop */}
              <div className="hidden md:block md:w-[calc(50%-3rem)] lg:hidden lg:block lg:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
