import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { TrackedLink } from "@/components/ui/tracked-link";
import { defaultContentEngineConfig, type PricingConfig } from "@/lib/content-engine";

interface ContentEnginePricingProps {
  config?: PricingConfig;
  contentName?: string;
}

export function ContentEnginePricing({
  config = defaultContentEngineConfig.pricing,
  contentName = defaultContentEngineConfig.contentName,
}: ContentEnginePricingProps) {
  const { headline, subhead, tiers, customCta, addons, guarantees } = config;

  return (
    <section id="pricing" className="bg-muted/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => {
              const isPro = tier.isPro ?? false;
              return (
                <Card
                  key={tier.id}
                  className={`relative flex flex-col ${
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
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-foreground mb-1 text-lg font-bold">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 min-h-[2.5rem] text-sm">
                      {tier.tagline}
                    </p>
                    <div className="mb-5">
                      <span className="font-heading text-foreground text-4xl font-bold">
                        ${tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                      <p className="text-muted-foreground mt-1 text-xs">
                        ${tier.setupFee.toLocaleString()} setup fee
                      </p>
                    </div>
                    <div className="border-border bg-muted/30 text-muted-foreground mb-5 rounded-md border p-3 text-xs">
                      <span className="text-foreground font-semibold">Volume guarantee:</span>{" "}
                      {tier.guarantee}.
                    </div>
                    <div className="mb-6 flex-1 space-y-2.5">
                      {tier.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant={isPro ? "default" : "outline"} asChild>
                      <TrackedLink
                        href={isPro ? "/ai-content-department/intake" : "/book-demo"}
                        contentName={contentName}
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
          <Card className="border-primary/40 bg-card border-2">
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <h3 className="font-heading text-foreground mb-2 text-xl font-bold md:text-2xl">
                  {customCta.headline}
                </h3>
                <p className="text-muted-foreground">{customCta.description}</p>
              </div>
              <Button size="lg" className="w-full shrink-0 font-bold md:w-auto" asChild>
                <TrackedLink
                  href={customCta.href}
                  contentName={contentName}
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
          <div className="border-border bg-card rounded-lg border p-6 md:p-8">
            <h3 className="font-heading text-foreground mb-1 text-lg font-bold">Add-Ons</h3>
            <p className="text-muted-foreground mb-5 text-sm">Priced per engagement. Talk to us.</p>
            <div className="grid gap-4 md:grid-cols-3">
              {addons.map((addon) => (
                <div key={addon.title} className="border-border bg-muted/20 rounded-md border p-4">
                  <div className="font-heading text-foreground mb-1 font-semibold">
                    {addon.title}
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">{addon.description}</p>
                  <span className="text-primary text-xs font-semibold">Talk to us &rarr;</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.35} className="mt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="border-success/30 bg-success/5 flex items-start gap-3 rounded-lg border p-5"
              >
                <div className="bg-success/15 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full">
                  <g.icon className="text-success h-5 w-5" />
                </div>
                <div>
                  <div className="font-heading text-foreground mb-1 font-semibold">{g.title}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{g.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
