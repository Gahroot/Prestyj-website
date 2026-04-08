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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <ShinyText text="AI Sales Agents for Real Estate" speed={3} color="#b0b0b0" shineColor="#7058e3" />
            </Badge>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            <BlurText text="Stop Losing Leads." delay={75} animateBy="words" className="justify-center" />
            <BlurText text="Start Closing Deals." delay={75} animateBy="words" className="justify-center text-primary" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Your AI agent responds to every lead in under 60 seconds, qualifies them, and books
            appointments on your calendar. 24/7. No salary. No commission splits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/book-demo">
                  Book a Demo
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
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CountUp to={47} duration={2} className="text-2xl font-bold text-success" /><span className="text-2xl font-bold text-success">s</span>
              <span className="text-sm">avg. response time</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">24/7</span>
              <span className="text-sm">availability</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <CountUp to={3} duration={1.5} className="text-2xl font-bold text-warning" /><span className="text-2xl font-bold text-warning">x</span>
              <span className="text-sm">more appointments</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
