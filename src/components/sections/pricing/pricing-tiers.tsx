"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers } from "@/lib/pricing-data";

export function PricingTiersSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => {
            const isPro = tier.id === "pro";
            const firstMonthTotal = tier.monthlyPrice + tier.setupFee;
            return (
              <AnimateOnScroll key={tier.id} delay={index * 0.1}>
                <Card
                  className={`relative h-full ${
                    isPro
                      ? "border-primary shadow-primary/10 z-10 border-2 shadow-lg md:scale-105"
                      : "bg-card border-border"
                  }`}
                >
                  <CardContent className="p-8">
                    <h3 className="font-heading text-foreground mb-1 text-xl font-bold">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm">{tier.tagline}</p>

                    <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-heading text-foreground text-3xl font-bold">
                        ${tier.monthlyPrice.toLocaleString()}
                        <span className="text-muted-foreground text-base font-normal">/mo</span>
                      </span>
                      <span className="text-muted-foreground text-lg">+</span>
                      <span className="font-heading text-foreground text-3xl font-bold">
                        ${tier.setupFee.toLocaleString()}
                        <span className="text-muted-foreground text-base font-normal"> setup</span>
                      </span>
                    </div>
                    <div className="bg-muted/40 border-border mb-6 rounded-md border px-3 py-2">
                      <p className="text-muted-foreground text-xs">Total first month</p>
                      <p className="font-heading text-foreground text-lg font-bold">
                        ${firstMonthTotal.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Then ${tier.monthlyPrice.toLocaleString()}/mo, month-to-month
                      </p>
                    </div>

                    <div className="mb-8 space-y-3">
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-border mb-8 rounded-md border border-dashed p-4">
                      <p className="text-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
                        Your ${tier.setupFee.toLocaleString()} setup covers
                      </p>
                      <ul className="space-y-1.5">
                        {tier.setupIncludes.map((item) => (
                          <li
                            key={item}
                            className="text-muted-foreground flex items-start gap-2 text-xs"
                          >
                            <span className="text-primary mt-1 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-current" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-muted-foreground mt-2 text-xs">
                        One-time. You&apos;re live in 7–10 business days.
                      </p>
                    </div>

                    <Button
                      size="lg"
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
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
