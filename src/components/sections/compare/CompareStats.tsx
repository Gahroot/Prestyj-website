"use client";

import { motion } from "framer-motion";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { StatItem } from "@/lib/compare/types";

interface CompareStatsProps {
  stats: StatItem[];
}

export function CompareStats({ stats }: CompareStatsProps) {
  const gridCols = stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <section className="border-b py-20">
      <div className="container">
        <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-lg border bg-card p-8 text-center"
              {...fadeInUp}
              transition={transitions.staggered(index)}
              viewport={viewport}
            >
              <div className="text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-lg font-semibold">{stat.label}</div>
              {stat.description && (
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
