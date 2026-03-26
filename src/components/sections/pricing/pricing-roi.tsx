"use client";

import { DollarSign, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stats = [
  {
    icon: DollarSign,
    value: "$8K–$25K",
    label: "Average commission per closing",
    description: "One closed deal from an ad lead pays for months of service.",
  },
  {
    icon: Users,
    value: "78%",
    label: "Work with first responder",
    description:
      "Buyers and sellers hire the agent who responds first. Be that agent.",
  },
  {
    icon: Zap,
    value: "< 60s",
    label: "AI response time",
    description:
      "Your agent responds before competitors even see the notification.",
  },
];

export function PricingROISection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              One Closing Pays for{" "}
              <span className="text-primary">Months of Service</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The average real estate commission on a $400K home is $10K–$12K.
              Your AI pays for itself with the first appointment that converts —
              and every deal after that is pure ROI.
            </p>
            <p className="text-muted-foreground mb-4">
              The math is simple: the cost of missing one lead is higher than an
              entire year of service. Every minute you wait to respond, your
              close rate drops. Every lead that goes unanswered is a commission
              walking out the door.
            </p>
            <p className="text-muted-foreground">
              Your AI agent doesn&apos;t take breaks, doesn&apos;t call in sick,
              and never forgets to follow up. It&apos;s the highest-ROI hire
              you&apos;ll ever make.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="space-y-6">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-heading font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {stat.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
