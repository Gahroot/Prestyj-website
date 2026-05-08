"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stats = [
  {
    value: "300+",
    label: "Video ads from a single 15-minute recording",
  },
  {
    value: "47s",
    label: "Average lead response time",
  },
  {
    value: "78%",
    label: "Of buyers choose the first responder",
  },
  {
    value: "3–5x",
    label: "Average ROI within 90 days",
  },
  {
    value: "< 60s",
    label: "AI response vs. 4+ hour industry average",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real performance data from businesses using Prestyj&apos;s batch
            video ads and AI lead response platform.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 0.1}>
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
