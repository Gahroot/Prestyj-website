import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
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
  monthlyPriceLabel?: string;
  highlights: string[];
  cta: string;
};

const TIERS: Tier[] = [
  {
    id: "minimum",
    name: "Minimum Plan",
    tagline: "For founders who need to start posting consistently — yesterday.",
    setupFee: 2500,
    monthlyPrice: 2000,
    highlights: [
      "3 platforms",
      "30+ posts/day (~900/month)",
      "1 brand kit",
      "5 content automations",
      "AI-generated images & carousels",
      "Quarterly creative refresh",
      "Email support",
    ],
    cta: "Start with Minimum",
  },
  {
    id: "pro",
    name: "Pro Plan",
    tagline: "Where most clients start. The full content engine.",
    setupFee: 3500,
    monthlyPrice: 3000,
    highlights: [
      "5–6 platforms (IG, FB, TikTok, YT, LinkedIn, Threads)",
      "50+ posts/day (1,500+/month)",
      "1 brand kit + avatar rotation",
      "10 content automations",
      "AI image, carousel & short-form video",
      "Monthly creative refresh + reporting",
      "Direct Slack/text access",
    ],
    cta: "Get Pro — Most Popular",
  },
  {
    id: "max",
    name: "Max Plan",
    tagline: "For multi-brand operators and agencies running it for clients.",
    setupFee: 5000,
    monthlyPrice: 5000,
    monthlyPriceLabel: "5,000+",
    highlights: [
      "All 7+ platforms (incl. X, Reddit, Pinterest)",
      "Unlimited posting volume",
      "Multi-brand kits",
      "Unlimited automations",
      "Custom reporting dashboards",
      "Engagement management (DMs, comments)",
      "Dedicated strategist + priority access",
    ],
    cta: "Talk to Us",
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
            For less than the cost of one junior social media manager, you get an entire
            AI content department running 24/7. Less than $100/day for 50+ pieces of
            content — your freelancer charges that for one post.
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
                    <div className="mb-6">
                      <span className="text-4xl font-heading font-bold text-foreground">
                        ${tier.monthlyPriceLabel ?? tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-sm">/mo</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        ${tier.setupFee.toLocaleString()} setup fee
                      </p>
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

        <AnimateOnScroll delay={0.3} className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            All plans include onboarding, brand kit setup, platform connections, and direct
            access to the team that built it.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
