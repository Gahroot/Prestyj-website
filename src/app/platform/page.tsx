import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { ControlledWork } from "@/components/sections/institutional/controlled-work";
import { ProofRecords } from "@/components/sections/institutional/proof-records";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "See how Prestyj turns institutional real estate source systems into reviewed, traceable work product without replacing the system of record.",
  alternates: { canonical: `${siteConfig.url}/platform` },
};

const controls = [
  ["Tenant boundary", "Fund, client, and investor scope is enforced below the interface."],
  ["Source lineage", "Every material answer retains the source and effective date behind it."],
  ["Conflict handling", "Contradictions enter a review queue instead of being averaged away."],
  ["Human release", "A named owner approves external and decision-critical work product."],
  ["Audit record", "The system preserves what changed, who approved it, and what it was based on."],
] as const;

export default function PlatformPage() {
  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Prestyj institutional real estate AI agents",
          description: metadata.description,
          url: `${siteConfig.url}/platform`,
          provider: { "@id": siteConfig.organizationId },
        }}
      />
      <EditorialShell>
        <main id="main-content" className="editorial-inner">
          <section className="border-b">
            <div className="editorial-rail">
              <EditorialPageHeader title="Your systems stay in charge. The work stops waiting.">
                <p>
                  Prestyj connects the records your firm already trusts to an agent that performs
                  one defined workflow, routes exceptions to the right person, and delivers the
                  approved work product.
                </p>
              </EditorialPageHeader>
            </div>
          </section>

          <ControlledWork />

          <section aria-labelledby="controls-title" className="border-b py-12 sm:py-16">
            <div className="editorial-rail grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <h2 id="controls-title" className="font-heading text-3xl font-bold tracking-tight">
                  Controls before convenience
                </h2>
              </div>
              <dl className="border-t">
                {controls.map(([term, detail]) => (
                  <div key={term} className="grid gap-4 border-b py-6 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-semibold">{term}</dt>
                    <dd className="text-muted-foreground leading-7">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section aria-labelledby="deployment-title" className="border-b py-12 sm:py-16">
            <div className="editorial-rail">
              <h2 id="deployment-title" className="font-heading text-3xl font-bold tracking-tight">
                Start above the system of record
              </h2>
              <ul className="bg-border mt-10 grid gap-px border md:grid-cols-3">
                {[
                  "Prove the workflow on representative records.",
                  "Run beside the current process and reconcile every difference.",
                  "Expand only after the output and review gate hold up.",
                ].map((item) => (
                  <li key={item} className="bg-background flex gap-3 p-6">
                    <Check aria-hidden="true" className="text-primary mt-1 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ProofRecords compact />

          <section className="py-12 sm:py-16">
            <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Bring one workflow and its review owner.
                </h2>
                <p className="text-muted-foreground mt-4">
                  We will scope the smallest proof that can earn trust.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book a workflow demo <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
      </EditorialShell>
    </>
  );
}
