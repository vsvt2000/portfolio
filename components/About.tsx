"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Calendar, Linkedin, Github } from "lucide-react";
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

export function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About Me"
      title="Bridging Engineering & Strategy"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 lg:grid-cols-2 lg:gap-8"
      >
        <motion.div variants={item}>
          <Card className="h-full p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg space-y-4">
                {portfolioData.personalInfo.bio}
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item} className="space-y-4 sm:space-y-6">
          <Card className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                <MapPin className="h-4 w-4 text-indigo-400 sm:h-5 sm:w-5" />
                <span>{portfolioData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                <Mail className="h-4 w-4 text-indigo-400 sm:h-5 sm:w-5" />
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="transition-colors hover:text-indigo-400"
                >
                  {portfolioData.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 sm:text-base">
                <Calendar className="h-4 w-4 text-indigo-400 sm:h-5 sm:w-5" />
                <span>MBA @ Amrita School of Business, Coimbatore</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Card className="p-3 text-center sm:p-4">
              <div className="text-2xl font-bold text-indigo-400 sm:text-3xl">
                3+
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                Years Experience
              </div>
            </Card>
            <Card className="p-3 text-center sm:p-4">
              <div className="text-2xl font-bold text-indigo-400 sm:text-3xl">
                $100K+
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                Revenue Impact
              </div>
            </Card>
            <Card className="p-3 text-center sm:p-4">
              <div className="text-2xl font-bold text-indigo-400 sm:text-3xl">
                82%
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                Organization Growth
              </div>
            </Card>
            <Card className="p-3 text-center sm:p-4">
              <div className="text-2xl font-bold text-indigo-400 sm:text-3xl">
                4
              </div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                Projects Built
              </div>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
