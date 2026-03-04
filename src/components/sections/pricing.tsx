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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Pricing That Makes Sense
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Less than the cost of one missed deal. Way less than hiring a sales
            assistant.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => {
              const isPro = tier.id === "pro";
              return (
                <Card
                  key={tier.id}
                  className={`relative ${
                    isPro
                      ? "border-primary border-2 shadow-lg shadow-primary/10"
                      : "bg-card border-border"
                  }`}
                >
                  {isPro && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge>Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-heading font-bold text-foreground">
                        ${tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        /mo
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        ${tier.setupFee.toLocaleString()} setup fee
                      </p>
                    </div>
                    <div className="space-y-2 mb-6">
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">
                            {item}
                          </span>
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
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="text-center mt-8">
          <Link
            href="/pricing"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            See full comparison
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
