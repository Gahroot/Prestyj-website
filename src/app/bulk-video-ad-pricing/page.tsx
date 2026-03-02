import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Bulk Video Ad Pricing | 300, 500, or 1000 Ads | PRESTYJ",
  description:
    "Transparent pricing for bulk video ad production. 300, 500, or 1000 video ads with volume discounts. Compare packages and find the right fit for your business.",
  openGraph: {
    title: "Bulk Video Ad Pricing | PRESTYJ",
    description:
      "Transparent pricing for bulk video ad production. Volume discounts available.",
    type: "website",
  },
};

const TIERS = [
  {
    name: "300 Ads",
    regularPrice: "$3,000",
    subscriberPrice: "$1,500",
    popular: false,
    features: [
      "300 unique video ads",
      "5-10 hook variations",
      "Multiple formats (15s, 30s, 60s)",
      "Professional editing",
      "Delivered in 24-48 hours",
      "Commercial license included",
    ],
  },
  {
    name: "500 Ads",
    regularPrice: "$4,000",
    subscriberPrice: "$2,000",
    popular: true,
    features: [
      "500 unique video ads",
      "10-15 hook variations",
      "All formats (15s, 30s, 60s, 90s)",
      "Priority editing queue",
      "Delivered in 24 hours",
      "Commercial license included",
      "Ad copy suggestions included",
    ],
  },
  {
    name: "1000 Ads",
    regularPrice: "$5,000",
    subscriberPrice: "$2,500",
    popular: false,
    features: [
      "1000 unique video ads",
      "20+ hook variations",
      "All formats + experimental variations",
      "White-glove editing service",
      "Delivered in 24 hours or less",
      "Commercial license included",
      "Ad copy + targeting suggestions",
      "Monthly refresh options available",
    ],
  },
];

const COMPARISON = [
  { feature: "Cost Per Ad", traditional: "$150-500", us: "$3-5" },
  { feature: "Turnaround Time", traditional: "2-4 weeks", us: "24-48 hours" },
  { feature: "Minimum Order", traditional: "5-10 ads", us: "300 ads" },
  { feature: "Revisions Included", traditional: "2-3 per ad", us: "Unlimited" },
  { feature: "Script Writing", traditional: "+$50/ad", us: "Included" },
  { feature: "Commercial License", traditional: "+$100/ad", us: "Included" },
];

export default function BulkVideoAdPricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Bulk Video Ad Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              300, 500, or 1000 video ads with transparent, volume-based pricing.
              <br />
              No hidden fees. No surprises.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Free Offer Banner */}
      <section className="py-8 px-4 bg-primary/5 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground">
            <span className="font-bold">First time?</span>{" "}
            <Link href="/free-ads" className="text-primary underline hover:no-underline font-semibold">
              Get your first 300 ads FREE
            </Link>
            {" "}— just cover your ad spend.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p className="text-muted-foreground text-lg">
              All packages include professional editing, fast turnaround, and commercial licensing.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, index) => (
              <AnimateOnScroll key={tier.name} delay={index * 0.1}>
                <div
                  className={`relative bg-card border rounded-2xl p-8 flex flex-col ${
                    tier.popular ? "border-primary shadow-xl shadow-primary/10" : "border-border"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-success">
                        {tier.subscriberPrice}
                      </span>
                      {tier.regularPrice !== tier.subscriberPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {tier.regularPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Subscriber price •{" "}
                      <Link href="/free-ads" className="text-primary hover:underline">
                        qualify for discount
                      </Link>
                    </p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full font-bold"
                    asChild
                  >
                    <Link href="/free-ads">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Traditional vs. Bulk Production
            </h2>
            <p className="text-muted-foreground text-lg">
              See why volume changes everything.
            </p>
          </AnimateOnScroll>

          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-heading font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-left p-6 font-heading font-semibold text-muted-foreground">
                    Traditional Agencies
                  </th>
                  <th className="text-left p-6 font-heading font-semibold text-primary">
                    PRESTYJ Bulk Ads
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50 last:border-0">
                    <td className="p-6 font-medium text-foreground">{row.feature}</td>
                    <td className="p-6 text-muted-foreground">{row.traditional}</td>
                    <td className="p-6 font-semibold text-primary">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Common Questions
            </h2>
          </AnimateOnScroll>

          <div className="space-y-6">
            {[
              {
                q: "How do you deliver 300 ads in 24 hours?",
                a: "We use a streamlined production process. You send us your raw footage (we provide scripts and filming instructions), and our team creates variations using different hooks, formats, and editing styles. We've optimized this down to a science.",
              },
              {
                q: "What footage do I need to provide?",
                a: "Just record yourself reading our scripts on your phone. No fancy equipment needed—relatability sells better than production value. We'll guide you through exactly what to film.",
              },
              {
                q: "Can I get custom ads instead of variations?",
                a: "Yes. Our 1000-ad package includes more customization. For fully custom concepts beyond our script library, let's discuss your needs.",
              },
              {
                q: "Do I own the ads?",
                a: "Yes. You get full commercial licensing rights to use the ads across all platforms indefinitely.",
              },
              {
                q: "What if I need changes?",
                a: "We include unlimited revisions within the production window. Since we're creating variations, it's easy to adjust hooks, CTAs, or styling.",
              },
            ].map((item, index) => (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <details className="group bg-card border border-border rounded-xl">
                  <summary className="cursor-pointer p-6 font-heading font-semibold text-foreground flex items-center justify-between">
                    {item.q}
                    <span className="transition group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {item.a}
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Scale Your Ads?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get 300 free video ads to start. Just cover your ad spend.
            </p>
            <Button
              size="lg"
              className="font-bold text-lg px-12 py-7 rounded-lg shadow-lg shadow-primary/25"
              asChild
            >
              <Link href="/free-ads">
                Get My FREE Ads
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
