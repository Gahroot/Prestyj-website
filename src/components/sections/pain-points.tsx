"use client";

import { motion } from "framer-motion";
import { Clock, PhoneMissed, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
  {
    icon: Clock,
    title: "Leads go cold while you're busy",
    description:
      "You're at a showing. A new lead comes in. By the time you call back, they've already talked to 3 other agents.",
    color: "text-warning",
  },
  {
    icon: PhoneMissed,
    title: "Missed calls = missed commissions",
    description:
      "78% of buyers work with the first agent who responds. Every unanswered call is money walking out the door.",
    color: "text-destructive",
  },
  {
    icon: DollarSign,
    title: "Hiring is expensive and unreliable",
    description:
      "A good ISA costs $4k/month plus commission. And they still call in sick, take vacations, and quit.",
    color: "text-primary",
  },
];

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

export function PainPointsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day, real estate agents lose deals they should have won. Here&apos;s why.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((point) => (
            <motion.div key={point.title} variants={itemVariants}>
              <Card className="bg-background border-border h-full">
                <CardContent className="p-6">
                  <point.icon className={`h-10 w-10 ${point.color} mb-4`} />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
