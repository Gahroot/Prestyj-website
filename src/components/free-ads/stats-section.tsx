"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { freeAdsStats } from "@/lib/free-ads-data";

export function FreeAdsStatsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Why Video Ads Win for Service Businesses
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Data-driven proof that batch video ads and AI-powered follow-up outperform traditional
            advertising.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {freeAdsStats.map((stat, index) => (
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
