import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { BATCH_TIER_LIST, type BatchTier } from "@/lib/batch-tiers";

function getTopHighlights(tier: BatchTier): string[] {
  return tier.highlights.slice(0, 3);
}

function getCardTone(tier: BatchTier): string {
  if (tier.id === "minimum") {
    return "border-primary shadow-primary/10 border-2 shadow-lg";
  }

  return "bg-card border-border";
}

export function BatchVideoAdsFeatureSection() {
  return (
    <section id="batch-video-ads" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Start at 300. Scale when you need more angles.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            The 100-ad pack exists if you only want to sample the system. The real starting point
            for cold traffic is 300 ads across 3 customer problems.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {BATCH_TIER_LIST.map((tier) => {
              const isMinimum = tier.id === "minimum";
              return (
                <Card key={tier.id} className={`relative h-full ${getCardTone(tier)}`}>
                  {isMinimum ? (
                    <span className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                      Recommended start
                    </span>
                  ) : null}
                  <CardContent className="flex h-full flex-col p-6">
                    <h3 className="font-heading text-foreground mb-1 text-lg font-bold">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-xs">{tier.tagline}</p>
                    <div className="mb-4 flex items-baseline gap-2">
                      <span className="font-heading text-foreground text-3xl font-bold">
                        {tier.priceLabel}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 text-sm">
                      <span className="text-foreground font-semibold">
                        {tier.adCount.toLocaleString()} ads
                      </span>{" "}
                      &middot; {tier.painPoints} pain point{tier.painPoints === 1 ? "" : "s"}
                    </p>
                    <div className="space-y-2">
                      {getTopHighlights(tier).map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/batch-video-ads#pricing">
              Get 300 ads for $1,497
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
