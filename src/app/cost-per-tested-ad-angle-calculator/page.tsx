import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CostPerTestedAngleCalculator } from "@/components/sections/calculator/cost-per-tested-angle-calculator";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { HowToJsonLd } from "@/components/seo/how-to-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const PAGE_URL = "https://prestyj.com/cost-per-tested-ad-angle-calculator";
const BLOG_URL =
  "https://prestyj.com/blog/cost-per-tested-ad-angle-the-only-metric-that-matters-2026";

export const metadata: Metadata = {
  title: "Cost Per Tested Ad Angle Calculator | Prestyj",
  description:
    "Compare cost per tested ad angle across agency, freelance, UGC marketplace, AI avatar, in-house, and Prestyj batch pipeline. See breakeven, cost per winner, and which approach fits your testing volume.",
  keywords: [
    "cost per tested ad angle calculator",
    "creative testing cost calculator",
    "cost per winning ad calculator",
    "ad angle benchmark calculator",
    "agency vs UGC vs AI avatar cost",
    "video ad production cost comparison",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Cost Per Tested Ad Angle Calculator",
    description:
      "Compare cost per tested angle across six production approaches. See breakeven, cost per winner, and which approach fits your testing volume.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Per Tested Ad Angle Calculator",
    description:
      "Agency vs freelance vs UGC vs AI avatar vs in-house vs Prestyj — see cost per tested angle, cost per winner, and breakeven at your volume.",
  },
};

export default function CostPerTestedAngleCalculatorPage() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cost Per Tested Ad Angle Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: PAGE_URL,
    description:
      "Free calculator that compares cost per tested ad angle across six creative production approaches: premium agency, freelance editor, UGC marketplace, AI avatar tool, in-house team, and Prestyj batch pipeline.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Cost per tested angle for six production approaches",
      "Monthly and annual cost projections at your volume",
      "Cost per winner using realistic 9–14% winner rates",
      "Breakeven analysis vs your current creative spend",
      "Capacity warnings when an approach can't keep up with your volume",
      "Rational-zone (<$300) and dominant-zone (<$150) benchmarks",
    ],
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
  };

  return (
    <>
      <SafeJsonLd data={softwareApplicationJsonLd} />
      <HowToJsonLd
        name="How to compare cost per tested ad angle across production approaches"
        description="Two inputs — angles you want to test per month and what you currently pay per tested angle — return a six-approach cost comparison, breakeven analysis, and a recommendation."
        totalTime="PT2M"
        estimatedCost={{ currency: "USD", value: "0" }}
        steps={[
          {
            name: "Enter angles you want to test per month",
            text: "A genuine angle = distinct hook × visual × pacing × audience × offer. Andromeda-class accounts need 20+ per month to compound.",
          },
          {
            name: "Enter what you currently pay per tested angle",
            text: "Total quarterly creative spend divided by distinct angles shipped. Most teams find the real number is 2–4× higher than expected.",
          },
          {
            name: "Review the six-approach comparison table",
            text: "Premium agency, freelance, UGC marketplace, AI avatar, in-house, and Prestyj batch pipeline — each with cost per angle, monthly total, capacity ceiling, cost per winner, and zone classification.",
          },
          {
            name: "Edit any benchmark cell to model your own numbers",
            text: "Override defaults with quotes you have on hand. Defaults match the midpoint of the 2026 published ranges.",
          },
          {
            name: "Review breakeven cards",
            text: "Monthly and annual savings vs current spend, plus how many additional angles you could test at the same budget.",
          },
          {
            name: "Read the recommendation",
            text: "Picks the approach with the lowest cost per winner that can meet your requested monthly angle volume.",
          },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Cost Per Tested Ad Angle Calculator", url: PAGE_URL },
        ]}
      />
      <Navbar />
      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b pt-16">
        {/* Hero */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Calculator className="h-4 w-4" />
              Cost Per Tested Ad Angle Calculator
            </div>
            <h1 className="font-heading mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">
              What Are You Really Paying <span className="text-primary">Per Tested Angle?</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Two inputs. Six production approaches side-by-side. See cost per angle, cost per
              winner, capacity ceilings, and 12-month savings — so you can pick the model the
              Andromeda-era algorithm actually rewards.
            </p>
            <p className="text-muted-foreground mt-4 text-sm">
              Pairs with our{" "}
              <Link
                href={BLOG_URL.replace("https://prestyj.com", "")}
                className="text-primary underline-offset-2 hover:underline"
              >
                full benchmark breakdown
              </Link>{" "}
              of cost per tested angle in 2026.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <CostPerTestedAngleCalculator />

            {/* Methodology */}
            <div className="bg-muted/30 border-border mt-8 rounded-xl border p-6">
              <h2 className="font-heading mb-3 font-semibold">How We Calculate This</h2>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <strong>Cost per tested angle</strong> defaults to the midpoint of the 2026
                  published range for each approach (agency $9.6K–$19.2K, freelance $1.5K–$3.2K, UGC
                  $1.08K–$3.84K, AI avatar $160–$240, in-house $6.6K–$11.1K, Prestyj $80–$260).
                  Override any cell to model your own quotes.
                </li>
                <li>
                  <strong>Monthly total</strong> = cost per angle × angles delivered. If your
                  requested volume exceeds the approach&apos;s realistic capacity, the row caps at
                  capacity and flags the shortfall — no fantasy-volume projections.
                </li>
                <li>
                  <strong>Cost per winner</strong> = cost per angle ÷ winner rate (9–14% by
                  approach, per the cost-per-winner table in the source article).
                </li>
                <li>
                  <strong>Breakeven</strong> compares each approach&apos;s monthly total against
                  your current spend (angles/month × current $/angle), and shows how many additional
                  angles you could test at the same budget.
                </li>
                <li>
                  <strong>Zone classification:</strong> under $300/angle = rational zone, under
                  $150/angle = dominant zone, above $1,500 = structurally irrational at most
                  budgets.
                </li>
              </ul>
              <p className="text-muted-foreground mt-3 text-xs">
                Benchmarks are illustrative, not guarantees. Real-world cost varies by offer
                complexity, talent rates, market, and account history. The math doesn&apos;t lie —
                but the headline rate often does.
              </p>
            </div>

            {/* Related */}
            <div className="border-border mt-8 rounded-xl border p-6">
              <h2 className="font-heading mb-4 font-semibold">Related Reading</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/blog/cost-per-tested-ad-angle-the-only-metric-that-matters-2026"
                  className="group border-border hover:border-primary/40 hover:bg-primary/5 block rounded-lg border p-4 transition-colors"
                >
                  <p className="font-heading text-foreground group-hover:text-primary mb-1 font-semibold">
                    Cost Per Tested Ad Angle: The Only Metric That Matters (2026)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Full benchmark breakdown across every production model with the 100x spread
                    chart.
                  </p>
                  <span className="text-primary mt-2 inline-flex items-center gap-1 text-xs font-medium">
                    Read article <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
                <Link
                  href="/batch-video-ad-roi-calculator"
                  className="group border-border hover:border-primary/40 hover:bg-primary/5 block rounded-lg border p-4 transition-colors"
                >
                  <p className="font-heading text-foreground group-hover:text-primary mb-1 font-semibold">
                    Batch Video Ad ROI Calculator
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Project monthly winners, CPA improvement, and payback against Prestyj plans from
                    your ad spend.
                  </p>
                  <span className="text-primary mt-2 inline-flex items-center gap-1 text-xs font-medium">
                    Open calculator <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
