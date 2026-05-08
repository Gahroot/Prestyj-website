import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Clock, Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

type Tier = {
  id: "minimum" | "pro" | "max";
  name: string;
  tagline: string;
  setupFee: number;
  monthlyPrice: number;
  accounts: string;
  postsTarget: string;
  guarantee: string;
  highlights: string[];
  cta: string;
};

const TIERS: Tier[] = [
  {
    id: "minimum",
    name: "Minimum Plan",
    tagline: "Get one account posting daily.",
    setupFee: 1500,
    monthlyPrice: 1997,
    accounts: "1 account (brand OR personal)",
    postsTarget: "~270 posts/month",
    guarantee: "250 posts in 30 days or we credit the difference",
    highlights: [
      "1 account (brand OR personal)",
      "3 platforms",
      "~270 posts/month",
      "AI images, carousels, captions",
      "1 brand kit",
      "Quarterly creative refresh",
      "Email support",
    ],
    cta: "Start with Minimum",
  },
  {
    id: "pro",
    name: "Pro Plan",
    tagline: "Brand + personal brand. The full swarm.",
    setupFee: 2500,
    monthlyPrice: 2997,
    accounts: "2 accounts (brand + personal)",
    postsTarget: "~900 posts/month",
    guarantee: "750 posts in 30 days or we credit the difference",
    highlights: [
      "2 accounts (brand + personal)",
      "5 platforms each",
      "~900 posts/month",
      "AI images, carousels, short-form video",
      "Avatar rotation + hook A/B testing",
      "Monthly creative refresh + strategy call",
      "Direct Slack access",
    ],
    cta: "Get Pro — Most Popular",
  },
  {
    id: "max",
    name: "Max Plan",
    tagline: "3 accounts. Full omnichannel coverage.",
    setupFee: 4500,
    monthlyPrice: 4997,
    accounts: "3 accounts (brand + personal + niche)",
    postsTarget: "~2,700 posts/month",
    guarantee: "2,250 posts in 30 days or we credit the difference",
    highlights: [
      "3 accounts (brand + personal + niche)",
      "All 7 platforms",
      "~2,700 posts/month",
      "Multi-brand kits",
      "Bi-weekly strategy calls",
      "Custom reporting dashboard",
      "Dedicated strategist",
    ],
    cta: "Get Max",
  },
];

const ADDONS = [
  {
    title: "AI Creator / Branded Persona",
    description:
      "We build and run a faceless or AI-persona account on top of your plan.",
  },
  {
    title: "Engagement Layer",
    description: "DMs, comments, replies handled by us.",
  },
  {
    title: "Ad-Ready Repurposing",
    description: "Every post pre-cut and hook-tested for paid ads.",
  },
];

const GUARANTEES = [
  {
    icon: Clock,
    title: "Live in 24 hours",
    description:
      "From the moment you grant account access, or your setup fee is refunded.",
  },
  {
    icon: ShieldCheck,
    title: "Volume guarantee",
    description:
      "We hit your post count in 30 days, or we credit the shortfall to next month.",
  },
  {
    icon: Ban,
    title: "Cancel anytime",
    description: "Month-to-month after setup. No long contracts.",
  },
];

export function ContentEnginePricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Pricing That Embarrasses Your Agency.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All-inclusive. No per-post fees. No surprise invoices.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => {
              const isPro = tier.id === "pro";
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
                      <Link href="/book-demo">
                        {tier.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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
                  Running 4+ accounts? Agency reselling? Multi-brand operator?
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll build something custom — your account count, your
                  platforms, your stack.
                </p>
              </div>
              <Button size="lg" className="font-bold w-full md:w-auto shrink-0" asChild>
                <Link href="/book-demo">
                  Talk to Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
              {ADDONS.map((addon) => (
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
                    Talk to us →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.35} className="mt-8">
          <div className="grid md:grid-cols-3 gap-4">
            {GUARANTEES.map((g) => (
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
