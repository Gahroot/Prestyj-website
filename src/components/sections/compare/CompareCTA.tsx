"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { CTASection } from "@/lib/compare/types";

interface CompareCTAProps {
  data: CTASection;
}

export function CompareCTA({ data }: CompareCTAProps) {
  const { title, titleAccent, description, buttonText, buttonHref, disclaimer } = data;

  // Split title by the accent word if provided
  const titleParts = titleAccent ? title.split(titleAccent) : [title];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            {...fadeInUp}
            transition={transitions.default}
            viewport={viewport}
          >
            {titleAccent ? (
              <>
                {titleParts[0]}
                <span className="text-primary">{titleAccent}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </motion.h2>

          <motion.p
            className="mb-8 text-lg text-muted-foreground"
            {...fadeInUp}
            transition={transitions.withDelay(0.1)}
            viewport={viewport}
          >
            {description}
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={transitions.withDelay(0.2)}
            viewport={viewport}
          >
            <Button size="lg" asChild>
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </motion.div>

          {disclaimer && (
            <motion.p
              className="mt-6 text-sm text-muted-foreground"
              {...fadeInUp}
              transition={transitions.withDelay(0.3)}
              viewport={viewport}
            >
              {disclaimer}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
