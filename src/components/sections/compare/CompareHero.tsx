"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { HeroSection } from "@/lib/compare/types";

interface CompareHeroProps {
  data: HeroSection;
}

export function CompareHero({ data }: CompareHeroProps) {
  const { badge, title, titleAccent, subtitle, description, keyStats } = data;

  // Split title by the accent word
  const titleParts = title.split(titleAccent);

  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            {...fadeInUp}
            transition={transitions.default}
            viewport={viewport}
          >
            <Badge variant="secondary" className="mb-4">
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            {...fadeInUp}
            transition={transitions.withDelay(0.1)}
            viewport={viewport}
          >
            {titleParts[0]}
            <span className="text-primary">{titleAccent}</span>
            {titleParts[1]}
          </motion.h1>

          <motion.p
            className="mb-6 text-xl text-muted-foreground"
            {...fadeInUp}
            transition={transitions.withDelay(0.2)}
            viewport={viewport}
          >
            {subtitle}
          </motion.p>

          <motion.p
            className="mb-8 text-lg text-muted-foreground"
            {...fadeInUp}
            transition={transitions.withDelay(0.3)}
            viewport={viewport}
          >
            {description}
          </motion.p>

          {keyStats && keyStats.length > 0 && (
            <motion.div
              className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
              {...fadeInUp}
              transition={transitions.withDelay(0.4)}
              viewport={viewport}
            >
              {keyStats.map((stat, index) => (
                <div key={index} className="rounded-lg border bg-card p-6">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
