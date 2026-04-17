import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";

export const metadata: Metadata = {
  title: "Batch Video Ad Pricing | Minimum, Pro, Max | PRESTYJ",
  description:
    "Transparent pricing for batch video ad creative testing. 300, 500, or 1000 scripted ads. Pick how many pain points you want to test. 24-hour turnaround.",
  openGraph: {
    title: "Batch Video Ad Pricing | PRESTYJ",
    description:
      "Transparent pricing for batch video ad creative testing. Pick your pain point count.",
    type: "website",
  },
};

const TIERS = [
  {
    name: "Minimum",
    price: "$1,497",
    tagline: "Test your first angles",
    popular: false,
    features: [
      "300 unique vertical video ads",
      "3 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
    ],
  },
  {
    name: "Pro",
    price: "$2,497",
    tagline: "The sweet spot",
    popular: true,
    features: [
      "500 unique vertical video ads",
      "5 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
      "Priority queue",
    ],
  },
  {
    name: "Max",
    price: "$3,997",
    tagline: "Go wide, find winners fast",
    popular: false,
    features: [
      "1000 unique vertical video ads",
      "10 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
      "Priority queue",
      "Full-spectrum angle coverage",
    ],
  },
];

export default function BulkVideoAdPricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Batch Video Ad Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Pick how many pain points you want to test. 300, 500, or 1000 scripted
              ads — delivered in 24 hours.*
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Choose Your Batch
            </h2>
            <p className="text-muted-foreground text-lg">
              The more angles you run, the faster you find what wins.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, index) => (
              <AnimateOnScroll key={tier.name} delay={index * 0.1}>
                <BorderGlow
                  borderRadius={18}
                  innerClassName="p-8 flex flex-col"
                  className={`relative ${tier.popular ? "shadow-xl shadow-primary/10" : ""}`}
                >
                  {tier.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-sm text-muted-foreground">one-time</span>
                    </div>
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
                    <Link href="/batch-video-ads#pricing">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="py-8 px-4">
        <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          *24 hours from when we receive your footage. Weekends: footage received
          Sunday counts as Monday — delivered by end of day Tuesday. Revisions for
          errors only — this is ad creative testing, not boutique edit work.
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Stop Guessing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              One recording session. Hundreds of angles. Winners found in days.
            </p>
            <Button
              size="lg"
              className="font-bold text-lg px-12 py-7 rounded-lg shadow-lg shadow-primary/25"
              asChild
            >
              <Link href="/batch-video-ads#pricing">
                Start My Batch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
