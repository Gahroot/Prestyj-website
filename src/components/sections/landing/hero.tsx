"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/effects/spotlight";
import type { SolutionHero } from "@/lib/solutions/types";

const colorClasses = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
} as const;

interface LandingHeroProps {
  content: SolutionHero;
}

export function LandingHero({ content }: LandingHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <Spotlight />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              {content.badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6"
          >
            {content.headline}
            <br />
            <span className="text-primary">{content.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-lg" asChild>
              <a href="#benefits">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
          >
            {content.stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-2">
                {index > 0 && <div className="hidden sm:block w-px h-8 bg-border mr-6" />}
                <span className={`text-2xl font-bold ${colorClasses[stat.color]}`}>
                  {stat.value}
                </span>
                <span className="text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
