"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "I was skeptical at first. An AI handling my leads? But it booked 12 appointments in the first week. I'm a believer now.",
    name: "Sarah Mitchell",
    role: "Real Estate Agent, Austin TX",
    initials: "SM",
  },
  {
    quote:
      "My response time went from 4 hours to 47 seconds. I'm closing deals I would have lost before.",
    name: "Marcus Chen",
    role: "Broker, Seattle WA",
    initials: "MC",
  },
  {
    quote:
      "Fired my ISA and replaced it with PRESTYJ. Better results, fraction of the cost. No more HR headaches.",
    name: "Jennifer Adams",
    role: "Team Lead, Miami FL",
    initials: "JA",
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

export function TestimonialsSection() {
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
            Agents Like You Are Winning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what happens when you let AI handle your leads.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6">
                  <p className="text-foreground mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
