"use client";

import { motion } from "framer-motion";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { StatItem } from "@/lib/compare/types";
import BorderGlow from "@/components/ui/border-glow";

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
              {...fadeInUp}
              transition={transitions.staggered(index)}
              viewport={viewport}
            >
              <BorderGlow borderRadius={10} innerClassName="p-8 text-center">
                <div className="text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                {stat.description && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                )}
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
