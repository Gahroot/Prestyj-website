"use client";

import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers } from "@/lib/pricing-data";

export function PricingStoriesSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Which Plan Fits Your Business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real scenarios for real service businesses.
          </p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {pricingTiers.map((tier, index) => (
            <AnimateOnScroll
              key={tier.id}
              delay={index * 0.1}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              <div className="flex-1">
                <Badge
                  variant={tier.id === "pro" ? "default" : "secondary"}
                  className="mb-4"
                >
                  {tier.name} Plan
                </Badge>
                <p className="text-muted-foreground mb-4">{tier.story}</p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Best for: {tier.bestFor}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-card border border-border rounded-lg p-8 text-center">
                  <p className="text-3xl font-heading font-bold text-foreground mb-2">
                    ${tier.monthlyPrice.toLocaleString()}/mo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {tier.adBudget} &middot; {tier.batchAds} batch ads
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
