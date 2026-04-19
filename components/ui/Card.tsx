"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition-all duration-200",
        hover &&
          "hover:border-indigo-500/50 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
