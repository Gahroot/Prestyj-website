import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import { bulkAdPricingTiers } from "@/lib/bulk-ad-pricing-data";

export const metadata: Metadata = {
  title: "Batch Video Ad Pricing | 300, 500, or 1,000 Ads | PRESTYJ",
  description:
    "Transparent pricing for batch video ad creative testing. 300, 500, or 1,000 scripted ads. Pick how many customer problems you want each ad to speak to. 1–2 business day turnaround.",
  openGraph: {
    title: "Batch Video Ad Pricing | PRESTYJ",
    description: "Transparent pricing for batch video ad creative testing. 300, 500, or 1,000 ads.",
    type: "website",
  },
};

export default function BulkVideoAdPricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Batch Video Ad Pricing
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
              Pick how many customer problems you want each ad to speak to. 300, 500, or 1,000
              scripted ads — delivered in 1–2 business days.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Choose Your Batch
            </h2>
            <p className="text-muted-foreground text-lg">
              The more angles you run, the faster you find what wins.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {bulkAdPricingTiers.map((tier, index) => (
              <AnimateOnScroll key={tier.name} delay={index * 0.1}>
                <BorderGlow
                  borderRadius={18}
                  innerClassName="p-8 flex flex-col"
                  className={`relative ${tier.popular ? "shadow-primary/10 shadow-xl" : ""}`}
                >
                  {tier.popular && (
                    <span className="bg-primary text-primary-foreground absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-bold">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-heading text-foreground mb-1 text-2xl font-bold">
                    {tier.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{tier.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-foreground text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground text-sm">one-time</span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
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
                    <Link href="/book-demo">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="px-4 py-8">
        <p className="text-muted-foreground mx-auto max-w-2xl text-center text-xs">
          Turnaround measured in business days from when we receive your footage. Revisions for
          errors only — this is ad creative testing, not boutique edit work.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Ready to Stop Guessing?
            </h2>
            <p className="text-muted-foreground mb-8 text-xl">
              One recording session. Hundreds of angles. Winners found in days.
            </p>
            <Button
              size="lg"
              className="shadow-primary/25 rounded-lg px-12 py-7 text-lg font-bold shadow-lg"
              asChild
            >
              <Link href="/book-demo">
                Start My Batch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
