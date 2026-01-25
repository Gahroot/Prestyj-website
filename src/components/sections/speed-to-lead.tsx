"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
} as const;

export function SpeedToLeadSection() {
  return (
    <section id="speed-to-lead" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left side - Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Badge variant="outline" className="border-primary/50 text-primary">
              Speed-to-Lead Solution
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Stop Losing Leads.
              <br />
              <span className="text-primary">Start Closing Deals.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Your AI agent responds to every lead in under 60 seconds, qualifies them, and books
              appointments on your calendar. 24/7. No salary. No commission splits.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-lg" asChild>
                <a href="#how-it-works">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right side - Stats cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            <motion.div
              className="bg-background p-6 rounded-xl border border-border text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-success" />
              </div>
              <span className="text-3xl font-bold text-success">47s</span>
              <p className="text-sm text-muted-foreground mt-1">avg. response time</p>
            </motion.div>

            <motion.div
              className="bg-background p-6 rounded-xl border border-border text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-primary">24/7</span>
              <p className="text-sm text-muted-foreground mt-1">availability</p>
            </motion.div>

            <motion.div
              className="bg-background p-6 rounded-xl border border-border text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
              <span className="text-3xl font-bold text-warning">3x</span>
              <p className="text-sm text-muted-foreground mt-1">more appointments</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
