"use client";

import { DollarSign, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stats = [
  {
    icon: DollarSign,
    value: "$10K–$50K",
    label: "Average job value",
    description: "One closed roofing or HVAC job pays for months of service.",
  },
  {
    icon: Users,
    value: "78%",
    label: "Work with first responder",
    description:
      "Homeowners hire the first company that responds. Be that company.",
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
              One Job Pays for{" "}
              <span className="text-primary">Months of Service</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A single roofing job is worth $10K–$50K. A new HVAC install runs
              $5K–$15K. A window replacement closes at $8K–$25K. Your AI agent
              pays for itself with the first booked appointment.
            </p>
            <p className="text-muted-foreground mb-4">
              The math is simple: the cost of missing one lead is higher than an
              entire year of service. Every minute you wait to respond, your
              close rate drops. Every lead that goes to voicemail is money
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
