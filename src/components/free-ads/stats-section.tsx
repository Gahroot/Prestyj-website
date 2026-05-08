"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { freeAdsStats } from "@/lib/free-ads-data";

export function FreeAdsStatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Why Video Ads Win for Service Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data-driven proof that batch video ads and AI-powered follow-up
            outperform traditional advertising.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeAdsStats.map((stat, index) => (
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
