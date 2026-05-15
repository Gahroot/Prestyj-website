"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/solutions/icon-map";
import type { SolutionBenefits } from "@/lib/solutions/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface LandingBenefitsProps {
  content: SolutionBenefits;
}

export function LandingBenefits({ content }: LandingBenefitsProps) {
  return (
    <section id="benefits" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            {content.headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{content.subheadline}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {content.benefits.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="bg-card border-border hover:border-primary/50 h-full transition-colors">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
