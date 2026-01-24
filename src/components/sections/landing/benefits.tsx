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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {content.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {content.subheadline}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.benefits.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="bg-card border-border h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
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
