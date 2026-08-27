import type { Metadata } from "next";

import { CommercialCommissionCalculator } from "@/components/calculator/commercial-commission-calculator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commercial brokerage inbound calculator",
  description:
    "Model how improved contact coverage could affect qualified commercial real estate inquiries, closings, and gross fee opportunity using your own assumptions.",
  alternates: { canonical: `${siteConfig.url}/commercial-real-estate-commission-calculator` },
};

export default function CommercialCommissionCalculatorPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Planning calculator</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
              Model the value of covering more brokerage inbound.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              Use your own inquiry volume, qualification, closing, and fee assumptions. No benchmark
              is inserted as fact.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CommercialCommissionCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
