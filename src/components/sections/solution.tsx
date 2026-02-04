"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar, Zap, Moon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Leads get a response in under 60 seconds. Every time.",
  },
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description: "Your leads won't know they're talking to AI.",
  },
  {
    icon: Calendar,
    title: "Books Appointments",
    description: "Qualified leads land directly on your calendar.",
  },
  {
    icon: Moon,
    title: "Never Sleeps",
    description: "24/7 coverage. Nights, weekends, holidays.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              An AI Agent That
              <br />
              <span className="text-primary">Actually Converts</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your agent handles lead follow-up so you can focus on what you do best: growing your business.
              No more missed calls. No more cold leads. No more hiring headaches.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No salary to pay</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No overhead costs</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No sick days or vacations</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No training required</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
