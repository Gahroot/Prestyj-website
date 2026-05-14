"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

type Stat = {
  value: string;
  label: string;
  source?: string;
};

const stats: Stat[] = [
  {
    value: "Under a minute",
    label: "Typical AI agent response time to a new inbound lead",
  },
  {
    value: "78%",
    label: "Of buyers purchase from the company that responds first",
    source: "Harvard Business Review, 2011",
  },
  {
    value: "24/7",
    label: "AI agents qualify and reply while your team sleeps",
  },
  {
    value: "Weeks, not quarters",
    label: "Time to deploy a working AI agent in your pipeline",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Built for results in 90 days.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Real performance data from businesses using Prestyj&apos;s AI agents.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <Card className="bg-card border-border h-full">
                <CardContent className="flex h-full flex-col p-6 text-center">
                  <p className="font-heading text-primary mb-2 text-3xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  {stat.source ? (
                    <p className="text-muted-foreground/70 mt-auto pt-3 text-xs">
                      Source: {stat.source}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
