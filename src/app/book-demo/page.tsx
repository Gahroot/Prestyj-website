import type { Metadata } from "next";
import type { ReactElement } from "react";

import { BookDemoClient } from "@/components/booking/book-demo-client";
import { EditorialShell } from "@/components/layout/editorial-shell";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { getBookableService } from "@/lib/attribution/services";
import { getCapability } from "@/lib/institutional/capabilities";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a scoping call",
  description:
    "Book a scoping call with Prestyj: AI agents for institutional real estate, custom Claude connectors and MCP servers, or a custom AI build for your business.",
  alternates: { canonical: `${siteConfig.url}/book-demo` },
};

type BookDemoPageProps = {
  searchParams: Promise<{ workflow?: string | string[]; service?: string | string[] }>;
};

export default async function BookDemoPage({
  searchParams,
}: BookDemoPageProps): Promise<ReactElement> {
  const { workflow: rawWorkflow, service: rawService } = await searchParams;
  const service = getBookableService(typeof rawService === "string" ? rawService : "");
  const capability = service
    ? null
    : getCapability(typeof rawWorkflow === "string" ? rawWorkflow : "");
  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Prestyj scoping call",
          description: metadata.description,
          provider: { "@id": siteConfig.organizationId },
          serviceType: "AI agent, connector, and custom AI build consultation",
        }}
      />
      <EditorialShell>
        <main id="main-content" className="editorial-booking">
          <div className="editorial-rail">
            <div className="editorial-booking-intro">
              <p className="editorial-eyebrow">
                {service ? `Book a call: ${service.label}` : "Book a workflow demo"}
              </p>
              <h1 className="editorial-display">
                Your work.
                <br />
                <em>Our starting point.</em>
              </h1>
              {service?.lane === "connectors" ? (
                <p>
                  Tell us which tools and data your team wants Claude or ChatGPT to reach. We’ll
                  scope the connector, how access is controlled, and who maintains it.
                </p>
              ) : service ? (
                <p>
                  Bring the process you want an AI to run. We’ll scope what it should do, the
                  systems it needs, and the smallest build that proves it is worth it.
                </p>
              ) : capability ? (
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
            <BookDemoClient workflow={capability?.slug ?? ""} service={service?.slug ?? ""} />
          </div>
        </main>
      </EditorialShell>
    </>
  );
}
