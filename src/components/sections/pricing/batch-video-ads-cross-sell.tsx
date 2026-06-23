import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers } from "@/lib/pricing-data";

export function BatchVideoAdsCrossSellSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="border-primary/30 bg-card rounded-2xl border p-8 sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="space-y-3">
                <h3 className="font-heading text-foreground text-2xl font-bold sm:text-3xl">
                  Your plan includes batch video ads. Need more? Scale up.
                </h3>
                <p className="text-muted-foreground">
                  Every Prestyj plan includes batch video ads — scripted vertical video variations
                  from a single recording session, ready to run on Meta, TikTok, and YouTube Shorts.
                  Here&apos;s what&apos;s included in each plan:
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  {pricingTiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={
                        tier.id === "pro"
                          ? "border-primary rounded-lg border-2 px-4 py-2"
                          : "border-border rounded-lg border px-4 py-2"
                      }
                    >
                      <span className="font-heading text-foreground font-bold">{tier.name}</span>
                      <span className="text-muted-foreground ml-2 text-sm">{tier.batchAds}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* CTA: scale up your ad volume */}
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Scale up your ads
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
