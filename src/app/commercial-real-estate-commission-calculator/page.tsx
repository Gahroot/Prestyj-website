import type { Metadata } from "next";

import { CommercialCommissionCalculator } from "@/components/calculator/commercial-commission-calculator";
import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commercial brokerage inbound calculator",
  description:
    "Model how improved contact coverage could affect qualified commercial real estate inquiries, closings, and gross fee opportunity using your own assumptions.",
  alternates: { canonical: `${siteConfig.url}/commercial-real-estate-commission-calculator` },
};

export default function CommercialCommissionCalculatorPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner">
        <section className="border-b">
          <div className="editorial-rail">
            <EditorialPageHeader title="Model your brokerage inbound.">
              <p>
                Use your own inquiry volume, qualification, closing, and fee assumptions. No
                benchmark is inserted as fact.
              </p>
            </EditorialPageHeader>
          </div>
        </section>
        <section className="py-8 sm:py-10">
          <div className="editorial-rail">
            <CommercialCommissionCalculator />
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
