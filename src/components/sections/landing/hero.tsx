"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/ui/blur-text";
import ShinyText from "@/components/ui/shiny-text";
import ClickSpark from "@/components/ui/click-spark";

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              <ShinyText text={content.badge} speed={3} color="#b0b0b0" shineColor="#7058e3" />
            </Badge>
          </motion.div>

          <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <BlurText
              text={content.headline}
              delay={75}
              animateBy="words"
              className="justify-center"
            />
            <BlurText
              text={content.headlineAccent}
              delay={75}
              animateBy="words"
              className="text-primary justify-center"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              {/* CTA-sweep: cold traffic → batch offer */}
              <Button size="lg" className="px-8 text-lg" asChild>
                <Link href="/batch-video-ads">
                  Get 100 ads for $497
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ClickSpark>
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
            className="text-muted-foreground mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row"
          >
            {content.stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-2">
                {index > 0 && <div className="bg-border mr-6 hidden h-8 w-px sm:block" />}
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
