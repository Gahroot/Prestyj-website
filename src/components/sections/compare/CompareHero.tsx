"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { HeroSection } from "@/lib/compare/types";
import BorderGlow from "@/components/ui/border-glow";

interface CompareHeroProps {
  data: HeroSection;
}

export function CompareHero({ data }: CompareHeroProps) {
  const { badge, title, titleAccent, subtitle, description, keyStats } = data;

  // If the accent appears as a substring of the title, highlight it inline.
  // Otherwise render it as a styled second line so it isn't silently dropped.
  const accentInTitle = titleAccent.length > 0 && title.includes(titleAccent);
  const titleParts = accentInTitle ? title.split(titleAccent) : null;

  if (process.env.NODE_ENV !== "production" && !accentInTitle && titleAccent) {
    console.warn(
      `[CompareHero] titleAccent "${titleAccent}" not found as a substring of title "${title}". ` +
        `Rendering accent as a second line. Update the data so titleAccent appears inside title to highlight it inline.`,
    );
  }

  return (
    <section className="from-background to-muted/20 relative overflow-hidden border-b bg-gradient-to-b py-20">
      <div className="relative z-10 container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div {...fadeInUp} transition={transitions.default} viewport={viewport}>
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
            {titleParts ? (
              <>
                {titleParts[0]}
                <span className="text-primary">{titleAccent}</span>
                {titleParts.slice(1).join(titleAccent)}
              </>
            ) : (
              <>
                {title}
                <br />
                <span className="text-primary">{titleAccent}</span>
              </>
            )}
          </motion.h1>

          <motion.p
            className="text-muted-foreground mb-6 text-xl"
            {...fadeInUp}
            transition={transitions.withDelay(0.2)}
            viewport={viewport}
          >
            {subtitle}
          </motion.p>

          <motion.p
            className="text-muted-foreground mb-8 text-lg"
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
                <BorderGlow key={index} borderRadius={10} innerClassName="p-6">
                  <div className="text-primary text-3xl font-bold">{stat.value}</div>
                  <div className="text-muted-foreground mt-2 text-sm">{stat.label}</div>
                </BorderGlow>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
