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
    value: "300",
    label: "Finished vertical ads in the minimum paid testing pack",
  },
  {
    value: "3",
    label: "Customer pain points covered in the 300-ad sprint",
  },
  {
    value: "1",
    label: "Selfie-style recording session required from you",
  },
  {
    value: "1–2 days",
    label: "Typical delivery window after we receive your footage",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Clear output. Clear scope. No agency fog.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            You are not buying vague marketing help. You are buying a specific creative testing
            asset: 300 finished ads built from your offer and customer problems.
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
