"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers } from "@/lib/pricing-data";

export function PricingTiersSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const isPro = tier.id === "pro";
            return (
              <AnimateOnScroll key={tier.id} delay={index * 0.1}>
                <Card
                  className={`relative h-full ${
                    isPro
                      ? "border-primary border-2 md:scale-105 z-10 shadow-lg shadow-primary/10"
                      : "bg-card border-border"
                  }`}
                >
                  {isPro && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {tier.tagline}
                    </p>

                    <div className="mb-2">
                      <span className="text-4xl font-heading font-bold text-foreground">
                        ${tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      ${tier.setupFee.toLocaleString()} one-time setup
                    </p>

                    <div className="space-y-3 mb-8">
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="w-full"
                      variant={isPro ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/book-demo">
                        Get Started
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
