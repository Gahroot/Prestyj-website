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
    <section className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {content.headline}
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            {content.subheadline}
          </p>
          <Button size="lg" className="px-10 py-6 text-lg" asChild>
            <Link href={content.buttonHref}>
              {content.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {content.footnote && (
            <p className="text-muted-foreground mt-6 text-sm">{content.footnote}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
