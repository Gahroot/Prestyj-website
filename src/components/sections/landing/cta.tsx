"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SolutionCTA } from "@/lib/solutions/types";

interface LandingCTAProps {
  content: SolutionCTA;
}

export function LandingCTA({ content }: LandingCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-success/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {content.headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.subheadline}
          </p>
          <Button size="lg" className="text-lg px-10 py-6" asChild>
            <Link href={content.buttonHref}>
              {content.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {content.footnote && (
            <p className="text-sm text-muted-foreground mt-6">{content.footnote}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
