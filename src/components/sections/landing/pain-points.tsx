"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { getIcon } from "@/lib/solutions/icon-map";
import type { SolutionPainPoints } from "@/lib/solutions/types";

const colorClasses = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  destructive: "text-destructive",
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface LandingPainPointsProps {
  content: SolutionPainPoints;
}

export function LandingPainPoints({ content }: LandingPainPointsProps) {
  return (
    <section className="py-24 bg-card">
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
          className="grid md:grid-cols-3 gap-8"
        >
          {content.points.map((point) => {
            const Icon = getIcon(point.icon);
            return (
              <motion.div key={point.title} variants={itemVariants}>
                <Card className="bg-background border-border h-full">
                  <CardContent className="p-6">
                    <Icon className={`h-10 w-10 ${colorClasses[point.color]} mb-4`} />
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground">{point.description}</p>
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
