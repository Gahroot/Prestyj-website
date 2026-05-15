"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/ui/blur-text";
import ShinyText from "@/components/ui/shiny-text";
import CountUp from "@/components/ui/count-up";
import ClickSpark from "@/components/ui/click-spark";

export function HeroSection() {
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
              <ShinyText
                text="AI Sales Agents for Real Estate"
                speed={3}
                color="#b0b0b0"
                shineColor="#7058e3"
              />
            </Badge>
          </motion.div>

          <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <BlurText
              text="Stop Losing Leads."
              delay={75}
              animateBy="words"
              className="justify-center"
            />
            <BlurText
              text="Start Closing Deals."
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
            Your AI agent responds to every lead in under 60 seconds, qualifies them, and books
            appointments on your calendar. 24/7. No salary. No commission splits.
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
              <a href="#how-it-works">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row"
          >
            <div className="flex items-center gap-2">
              <CountUp to={47} duration={2} className="text-success text-2xl font-bold" />
              <span className="text-success text-2xl font-bold">s</span>
              <span className="text-sm">avg. response time</span>
            </div>
            <div className="bg-border hidden h-8 w-px sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">24/7</span>
              <span className="text-sm">availability</span>
            </div>
            <div className="bg-border hidden h-8 w-px sm:block" />
            <div className="flex items-center gap-2">
              <CountUp to={3} duration={1.5} className="text-warning text-2xl font-bold" />
              <span className="text-warning text-2xl font-bold">x</span>
              <span className="text-sm">more appointments</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
