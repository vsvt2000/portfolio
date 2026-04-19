"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        align === "center" && "text-center",
        className
      )}
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
    </div>
  );
}
