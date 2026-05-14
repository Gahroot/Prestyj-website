import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers } from "@/lib/pricing-data";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Plans from $1,997/mo. No contracts. Cancel anytime.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => {
              const isPro = tier.id === "pro";
              return (
                <Card
                  key={tier.id}
                  className={`relative ${
                    isPro
                      ? "border-primary shadow-primary/10 border-2 shadow-lg"
                      : "bg-card border-border"
                  }`}
                >
                  {isPro && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-heading text-foreground mb-1 text-lg font-bold">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="font-heading text-foreground text-3xl font-bold">
                        ${tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                      <p className="text-muted-foreground mt-1 text-xs">
                        ${tier.setupFee.toLocaleString()} setup fee
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-6 text-sm">
                      <span className="text-foreground font-semibold">Best for: </span>
                      {tier.bestFor}
                    </p>
                    <div className="mb-6 space-y-2">
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      className="w-full"
                      variant={isPro ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/book-demo">
                        Book a Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mt-8 text-center">
          <Link
            href="/pricing"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-1 font-medium transition-colors"
          >
            See full comparison
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
