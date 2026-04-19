"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
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

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Blog() {
  return (
    <SectionWrapper
      id="blog"
      eyebrow="Insights & Writing"
      title="From My Blog"
      subtitle="Thoughts on technology, strategy, and the intersection of engineering and business"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:grid-cols-2 lg:gap-6"
      >
        {portfolioData.blogPosts.map((post) => (
          <motion.div key={post.id} variants={item}>
            <Card className="group flex h-full flex-col p-4 sm:p-6">
              {/* Date & Read Time */}
              <div className="mb-3 flex items-center gap-3 text-xs text-slate-500 sm:mb-4 sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <span className="text-slate-600">·</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold leading-tight text-slate-50 sm:mb-3 sm:text-xl group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400 sm:mb-6">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <a
                href={post.url}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
