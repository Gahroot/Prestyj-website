"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { platformStats } from "@/lib/platform-data";

export function PlatformStatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Built for Performance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The platform metrics that drive real revenue for service businesses.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformStats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
