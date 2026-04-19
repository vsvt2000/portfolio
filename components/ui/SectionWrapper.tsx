"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  contained?: boolean;
  narrow?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  eyebrow,
  title,
  subtitle,
  align = "left",
  contained = true,
  narrow = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(" py-16 md:py-24 lg:py-32", className)}>
      <div className={cn(
        "w-full",
        narrow ? "max-w-3xl mx-auto px-6 md:px-8 lg:px-12" : "max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
      )}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={cn("mb-8 sm:mb-12", align === "center" && "text-center")}
        >
          {eyebrow && (
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-indigo-400 sm:mb-3 sm:text-sm">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base md:text-lg">
              {subtitle}
            </p>
          )}
          <div
            className={cn(
              "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 sm:mt-6 sm:w-20",
              align === "center" && "mx-auto"
            )}
          />
        </motion.div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}
