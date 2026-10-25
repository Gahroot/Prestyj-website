import type { Metadata } from "next";
import type { ReactElement } from "react";

import { BookDemoClient } from "@/components/booking/book-demo-client";
import { EditorialShell } from "@/components/layout/editorial-shell";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { getCapability } from "@/lib/institutional/capabilities";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a workflow demo",
  description:
    "Bring Prestyj one institutional real estate workflow, the systems behind it, and the person who owns the final work product.",
  alternates: { canonical: `${siteConfig.url}/book-demo` },
};

type BookDemoPageProps = { searchParams: Promise<{ workflow?: string | string[] }> };

export default async function BookDemoPage({
  searchParams,
}: BookDemoPageProps): Promise<ReactElement> {
  const { workflow: rawWorkflow } = await searchParams;
  const capability = getCapability(typeof rawWorkflow === "string" ? rawWorkflow : "");
  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Prestyj workflow scoping call",
          description: metadata.description,
          provider: { "@id": siteConfig.organizationId },
          serviceType: "Institutional real estate AI workflow consultation",
        }}
      />
      <EditorialShell>
        <main id="main-content" className="editorial-booking">
          <div className="editorial-rail">
            <div className="editorial-booking-intro">
              <p className="editorial-eyebrow">Book a workflow demo</p>
              <h1 className="editorial-display">
                Your work.
                <br />
                <em>Our starting point.</em>
              </h1>
              {capability ? (
                <p>
                  Bring your {capability.navLabel.toLowerCase()} workflow. We’ll walk through the
                  sources, the review rules, and the finished work product it should return.
                </p>
              ) : (
                <p>
                  Bring one recurring process. We’ll explore the sources, the review rules, and the
                  smallest proof that could make a real difference.
                </p>
              )}
            </div>
            <BookDemoClient workflow={capability?.slug ?? ""} />
          </div>
        </main>
      </EditorialShell>
    </>
  );
}
