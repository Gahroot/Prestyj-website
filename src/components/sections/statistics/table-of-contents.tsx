"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { statCategories, totalStatCount } from "@/lib/statistics-data";
import { Clock, Video, Bot, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

const categoryIcons: Record<string, typeof Clock> = {
  "speed-to-lead": Clock,
  "video-advertising": Video,
  "ai-adoption": Bot,
  "lead-conversion": Target,
  "industry-benchmarks": BarChart3,
};

export function StatisticsTableOfContents() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll className="mb-12 text-center">
          <p className="text-primary mb-3 text-sm font-medium">
            {totalStatCount} cite-worthy statistics across {statCategories.length} categories
          </p>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Jump to a Category
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Each statistic includes a source citation, year, and a copy button so you can cite it in
            your own content.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.id] || BarChart3;
            return (
              <AnimateOnScroll key={cat.id} delay={index * 0.08}>
                <Link
                  href={`#${cat.slug}`}
                  className="bg-card border-border hover:border-primary/40 hover:bg-card/80 group block rounded-xl border p-5 transition-all"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Icon className="text-primary h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground text-xs font-medium">
                      {cat.statistics.length} stats
                    </span>
                  </div>
                  <h3 className="font-heading text-foreground group-hover:text-primary text-sm font-semibold transition-colors">
                    {cat.title}
                  </h3>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
