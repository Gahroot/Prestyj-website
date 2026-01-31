"use client";

import { motion } from "framer-motion";
import { fadeInUp, transitions, viewport } from "@/lib/compare/animations";
import type { WhySwitchSection } from "@/lib/compare/types";

interface CompareWhySwitchProps {
  data: WhySwitchSection;
}

export function CompareWhySwitch({ data }: CompareWhySwitchProps) {
  const { title, description, reasons } = data;

  return (
    <section className="border-b py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-lg border bg-card p-8"
                  {...fadeInUp}
                  transition={transitions.staggered(index)}
                  viewport={viewport}
                >
                  <Icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-3 text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
