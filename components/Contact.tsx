"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { SectionWrapper } from "./ui/SectionWrapper";

const socialLinks = [
  {
    name: "LinkedIn",
    url: portfolioData.personalInfo.linkedin,
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    url: portfolioData.personalInfo.github,
    icon: Github,
    label: "View GitHub Profile",
  },
  {
    name: "Email",
    url: `mailto:${portfolioData.personalInfo.email}`,
    icon: Mail,
    label: "Send Email",
  },
];

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

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Build Something Remarkable"
      subtitle="Open to discussing new opportunities, collaborations, or just a good conversation about technology."
      align="center"
      narrow
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10 sm:mb-12"
      >
        <motion.div variants={item} className="mb-8 sm:mb-10">
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-slate-200 transition-colors hover:text-indigo-400 sm:text-2xl md:text-3xl"
          >
            <span className="break-all sm:break-normal">
              {portfolioData.personalInfo.email}
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 sm:h-6" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-300 transition-all hover:border-indigo-500/50 hover:bg-slate-800 hover:text-indigo-400 sm:px-5 sm:py-3 sm:text-base"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                <span className="font-medium">{link.name}</span>
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="border-t border-slate-800 pt-6 text-xs text-slate-500 sm:pt-8 sm:text-sm"
      >
        <p>
          Designed & Built by {portfolioData.personalInfo.name} ·{" "}
          {new Date().getFullYear()}
        </p>
        <p className="mt-1 sm:mt-2">
          Crafted with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
