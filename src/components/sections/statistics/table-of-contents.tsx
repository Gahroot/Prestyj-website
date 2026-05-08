"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { statCategories, totalStatCount } from "@/lib/statistics-data";
import {
  Clock,
  Video,
  Bot,
  Target,
  BarChart3,
} from "lucide-react";
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-3">
            {totalStatCount} cite-worthy statistics across {statCategories.length} categories
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Jump to a Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each statistic includes a source citation, year, and a copy button
            so you can cite it in your own content.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {statCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.id] || BarChart3;
            return (
              <AnimateOnScroll key={cat.id} delay={index * 0.08}>
                <Link
                  href={`#${cat.slug}`}
                  className="block p-5 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-card/80 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {cat.statistics.length} stats
                    </span>
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
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
