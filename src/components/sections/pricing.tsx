import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
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
            Plans from $1,997/mo + one-time setup. No contracts. Cancel anytime.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => {
              const isPro = tier.id === "pro";
              const firstMonthTotal = tier.monthlyPrice + tier.setupFee;
              return (
                <Card
                  key={tier.id}
                  className={`relative ${
                    isPro
                      ? "border-primary shadow-primary/10 border-2 shadow-lg"
                      : "bg-card border-border"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-heading text-foreground mb-3 text-lg font-bold">
                      {tier.name}
                    </h3>
                    <div className="mb-2 flex flex-wrap items-baseline gap-x-2">
                      <span className="font-heading text-foreground text-2xl font-bold">
                        ${tier.monthlyPrice.toLocaleString()}
                        <span className="text-muted-foreground text-sm font-normal">/mo</span>
                      </span>
                      <span className="text-muted-foreground">+</span>
                      <span className="font-heading text-foreground text-2xl font-bold">
                        ${tier.setupFee.toLocaleString()}
                        <span className="text-muted-foreground text-sm font-normal"> setup</span>
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 text-xs">
                      Total first month:{" "}
                      <span className="text-foreground font-semibold">
                        ${firstMonthTotal.toLocaleString()}
                      </span>{" "}
                      &middot; then ${tier.monthlyPrice.toLocaleString()}/mo
                    </p>
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
                    <div className="border-border mb-6 rounded-md border border-dashed p-3">
                      <p className="text-foreground mb-1.5 text-[11px] font-semibold tracking-wide uppercase">
                        Setup covers
                      </p>
                      <ul className="space-y-1">
                        {tier.setupIncludes.map((item) => (
                          <li
                            key={item}
                            className="text-muted-foreground flex items-start gap-2 text-xs"
                          >
                            <span className="bg-primary mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
