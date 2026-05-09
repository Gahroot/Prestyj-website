import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { TrackedLink } from "@/components/ui/tracked-link";
import {
  defaultContentEngineConfig,
  type PricingConfig,
} from "@/lib/content-engine";

interface ContentEnginePricingProps {
  config?: PricingConfig;
}

export function ContentEnginePricing({
  config = defaultContentEngineConfig.pricing,
}: ContentEnginePricingProps) {
  const { headline, subhead, tiers, customCta, addons, guarantees } = config;

  return (
    <section id="pricing" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => {
              const isPro = tier.isPro ?? false;
              return (
                <Card
                  key={tier.id}
                  className={`relative flex flex-col ${
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
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 min-h-[2.5rem]">
                      {tier.tagline}
                    </p>
                    <div className="mb-5">
                      <span className="text-4xl font-heading font-bold text-foreground">
                        ${tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        ${tier.setupFee.toLocaleString()} setup fee
                      </p>
                    </div>
                    <div className="mb-5 rounded-md border border-border bg-muted/30 p-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Volume guarantee:
                      </span>{" "}
                      {tier.guarantee}.
                    </div>
                    <div className="space-y-2.5 mb-6 flex-1">
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full"
                      variant={isPro ? "default" : "outline"}
                      asChild
                    >
                      <TrackedLink
                        href={
                          isPro
                            ? "/done-for-you-social-media/intake"
                            : "/book-demo"
                        }
                        eventName="ContentEngineLeadIntent"
                        eventLabel={`pricing-${tier.id}`}
                      >
                        {tier.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </TrackedLink>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.25} className="mt-8">
          <Card className="border-primary/40 border-2 bg-card">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                  {customCta.headline}
                </h3>
                <p className="text-muted-foreground">
                  {customCta.description}
                </p>
              </div>
              <Button size="lg" className="font-bold w-full md:w-auto shrink-0" asChild>
                <TrackedLink
                  href={customCta.href}
                  eventName={customCta.eventName}
                  eventLabel={customCta.eventLabel}
                >
                  {customCta.buttonLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
              </Button>
            </CardContent>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="mt-10">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <h3 className="text-lg font-heading font-bold text-foreground mb-1">
              Add-Ons
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              Priced per engagement. Talk to us.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {addons.map((addon) => (
                <div
                  key={addon.title}
                  className="rounded-md border border-border bg-muted/20 p-4"
                >
                  <div className="font-heading font-semibold text-foreground mb-1">
                    {addon.title}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {addon.description}
                  </p>
                  <span className="text-xs font-semibold text-primary">
                    Talk to us &rarr;
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.35} className="mt-8">
          <div className="grid md:grid-cols-3 gap-4">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="flex items-start gap-3 rounded-lg border border-success/30 bg-success/5 p-5"
              >
                <div className="w-9 h-9 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
                  <g.icon className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground mb-1">
                    {g.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
