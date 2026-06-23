"use client";

import { DollarSign, Users, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stats = [
  {
    icon: DollarSign,
    value: "$8K–$25K",
    label: "Average value per closed lead",
    description: "One closed job from an ad lead pays for months of service.",
  },
  {
    icon: Users,
    value: "78%",
    label: "Hire the first responder",
    description: "Customers go with the business that responds first. Be that business.",
  },
  {
    icon: Zap,
    value: "< 60s",
    label: "AI agent response time",
    description: "Your AI agents respond before competitors even see the notification.",
  },
  {
    icon: TrendingUp,
    value: "3–5x",
    label: "Average ROI in first 90 days",
    description: "Clients typically see 3–5x return on investment within the first quarter.",
  },
];

export function PricingROISection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl">
              One Closed Job Pays for <span className="text-primary">Months of Service</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Whether it&apos;s a real estate commission, a roofing job, or a dental implant case, a
              single closed lead from your AI agents and ad production typically covers months of
              service — and every deal after that is pure ROI.
            </p>
            <p className="text-muted-foreground mb-4">
              The math is simple: the cost of missing one lead is higher than an entire year of
              service. Every minute you wait to respond, your close rate drops. Every lead that goes
              unanswered is revenue walking out the door.
            </p>
            <p className="text-muted-foreground">
              Your AI agents don&apos;t take breaks, don&apos;t call in sick, and never forget to
              follow up. Combined with batch video ads and managed ad spend, it&apos;s the
              highest-ROI marketing and sales system you&apos;ll ever deploy.
            </p>
            <div className="mt-6">
              <Link
                href="/done-for-you-ai-agents"
                className="text-primary hover:text-primary/80 text-sm underline underline-offset-2"
              >
                See how our done-for-you AI agents work →
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="space-y-6">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={0.3 + index * 0.1}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <stat.icon className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-heading text-foreground text-2xl font-bold">
                          {stat.value}
                        </p>
                        <p className="text-foreground mb-1 text-sm font-medium">{stat.label}</p>
                        <p className="text-muted-foreground text-sm">{stat.description}</p>
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
