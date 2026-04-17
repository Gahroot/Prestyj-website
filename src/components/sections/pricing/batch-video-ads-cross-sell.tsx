import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const tiers = [
  { price: "$1,497", label: "300 ads" },
  { price: "$2,497", label: "600 ads", featured: true },
  { price: "$3,997", label: "1,000 ads" },
];

export function BatchVideoAdsCrossSellSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-primary/30 bg-card p-8 sm:p-10">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  Looking for one-time batch video ads instead?
                </h3>
                <p className="text-muted-foreground">
                  300–1,000 scripted vertical video ads shipped in 24 hours. Real faces, combinatorial creative, ready to run on Meta, TikTok, and YouTube Shorts.
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  {tiers.map((tier) => (
                    <div
                      key={tier.price}
                      className={
                        tier.featured
                          ? "rounded-lg border-2 border-primary px-4 py-2"
                          : "rounded-lg border border-border px-4 py-2"
                      }
                    >
                      <span className="font-heading font-bold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {tier.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href="/batch-video-ads#pricing">
                  See Batch Pricing
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
