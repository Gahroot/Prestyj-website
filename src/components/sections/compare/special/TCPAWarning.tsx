"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";

export function TCPAWarning() {
  return (
    <section className="border-b bg-destructive/5 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            {...fadeInUp}
            transition={transitions.default}
            viewport={viewport}
            className="text-center"
          >
            <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h3 className="mb-4 text-2xl font-bold">
              2026 TCPA Compliance Warning
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              New FCC rules effective January 2026 require one-to-one consent per seller.
              15+ states have mini-TCPA laws with varying requirements. Violations cost $500-$1,500 per call—not per consumer.
              Class action filings surged 285% in September 2025 alone.
            </p>
            <p className="text-sm text-muted-foreground">
              Managing TCPA compliance across offshore teams and 50+ offices creates significant legal exposure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
