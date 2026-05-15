"use client";

import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers } from "@/lib/pricing-data";
import BorderGlow from "@/components/ui/border-glow";

export function PricingStoriesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Which Plan Fits Your Business?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
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
                <Badge variant={tier.id === "pro" ? "default" : "secondary"} className="mb-4">
                  {tier.name} Plan
                </Badge>
                <p className="text-muted-foreground mb-4">{tier.story}</p>
                <div className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-sm">
                  Best for: {tier.bestFor}
                </div>
              </div>
              <div className="w-full flex-1">
                <BorderGlow borderRadius={10} innerClassName="p-8 text-center">
                  <p className="font-heading text-foreground mb-2 text-3xl font-bold">
                    ${tier.monthlyPrice.toLocaleString()}/mo
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {tier.adBudget} &middot; {tier.batchAds} batch ads
                  </p>
                </BorderGlow>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
