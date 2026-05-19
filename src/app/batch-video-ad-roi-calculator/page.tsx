import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BatchVideoAdRoiCalculator } from "@/components/sections/calculator/batch-video-ad-roi-calculator";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { HowToJsonLd } from "@/components/seo/how-to-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

const PAGE_URL = "https://prestyj.com/batch-video-ad-roi-calculator";

export const metadata: Metadata = {
  title: "Batch Video Ad ROI Calculator | Prestyj",
  description:
    "See how many winning ad angles batch video testing produces, your projected CPA drop, extra leads gained, and payback period vs Prestyj pricing tiers.",
  keywords: [
    "batch video ad ROI calculator",
    "creative testing calculator",
    "ad creative ROI",
    "CPA reduction calculator",
    "winning ad angles",
    "video ad winner rate",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Batch Video Ad ROI Calculator",
    description:
      "Project monthly winners, CPA improvement, leads gained, and payback vs Prestyj pricing tiers from your current ad account numbers.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Batch Video Ad ROI Calculator",
    description:
      "Project monthly winners, CPA improvement, leads gained, and payback vs Prestyj pricing tiers.",
  },
};

export default function BatchVideoAdRoiCalculatorPage() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Batch Video Ad ROI Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: PAGE_URL,
    description:
      "Free calculator that models the ROI of batch video ad creative testing — projected monthly winners, CPA improvement, leads gained, and payback vs Prestyj pricing tiers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Projected monthly winning ad angles",
      "Projected CPA improvement",
      "Projected leads gained per month and per year",
      "Payback period vs Prestyj Starter, Pro, and Scale plans",
      "12-month ROI estimate",
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
        name="How to estimate ROI from batch video ad testing"
        description="Five inputs from your ad account project monthly winners, CPA improvement, extra leads, and payback against Prestyj pricing tiers."
        totalTime="PT2M"
        estimatedCost={{ currency: "USD", value: "0" }}
        steps={[
          {
            name: "Enter monthly ad spend",
            text: "Combined monthly spend across Meta, TikTok, and YouTube.",
          },
          {
            name: "Enter current cost per acquisition (CPA)",
            text: "Average dollars spent per lead, booking, or purchase today.",
          },
          {
            name: "Enter creative angles tested per month",
            text: "Distinct hook-and-offer combinations launched into your account each month.",
          },
          {
            name: "Enter average winner rate",
            text: "Percentage of tested angles that beat the control. Industry average is 10–20%.",
          },
          {
            name: "Enter average CPA lift per winner",
            text: "How much each winner reduces CPA. Typical range is 15–35%.",
          },
          {
            name: "Review projections and payback",
            text: "See projected monthly winners, new CPA, extra leads, and payback period vs Prestyj Starter, Pro, and Scale plans.",
          },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Batch Video Ad ROI Calculator", url: PAGE_URL },
        ]}
      />
      <Navbar />
      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b pt-16">
        {/* Hero */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Calculator className="h-4 w-4" />
              Batch Video Ad ROI Calculator
            </div>
            <h1 className="font-heading mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">
              How Much Would Batch Creative Testing{" "}
              <span className="text-primary">Drop Your CPA?</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Five inputs from your ad account. See projected winners per month, new CPA, extra
              leads gained, and how fast each Prestyj plan pays for itself.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <BatchVideoAdRoiCalculator />

            {/* Methodology */}
            <div className="bg-muted/30 border-border mt-8 rounded-xl border p-6">
              <h2 className="font-heading mb-3 font-semibold">How We Calculate This</h2>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <strong>Baseline leads:</strong> monthly ad spend ÷ current CPA.
                </li>
                <li>
                  <strong>Projected winners:</strong> angles tested × winner rate.
                </li>
                <li>
                  <strong>Projected CPA:</strong> winners compound your CPA down by the lift
                  percentage. We cap the floor at 10% of starting CPA so the model never claims an
                  impossible $0 acquisition cost.
                </li>
                <li>
                  <strong>Leads gained:</strong> ad spend ÷ projected CPA, minus baseline leads.
                </li>
                <li>
                  <strong>Payback &amp; ROI:</strong> monthly CPA savings + the value of extra leads
                  (priced at current CPA) compared against each plan&apos;s setup fee + monthly cost
                  over 12 months.
                </li>
              </ul>
              <p className="text-muted-foreground mt-3 text-xs">
                Projections are illustrative, not guarantees. Real-world results depend on offer,
                audience, account history, and account management quality.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
