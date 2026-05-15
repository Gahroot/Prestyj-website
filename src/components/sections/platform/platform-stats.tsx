"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { platformStats } from "@/lib/platform-data";

export function PlatformStatsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Built for Performance
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            The platform metrics that drive real revenue for service businesses.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platformStats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6 text-center">
                  <p className="font-heading text-primary mb-2 text-3xl font-bold">{stat.value}</p>
                  <p className="text-foreground mb-1 text-sm font-medium">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
