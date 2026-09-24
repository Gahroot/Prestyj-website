import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { ProofRecords } from "@/components/sections/institutional/proof-records";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Anonymized, honestly staged systems Prestyj has built across fund operations, diligence, governed intelligence, origination, and media production.",
  alternates: { canonical: `${siteConfig.url}/results` },
};

export default function ResultsPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner">
        <div className="editorial-rail">
          <EditorialPageHeader title="Built systems, labeled by what is actually running." />
        </div>
        <ProofRecords />
        <section className="py-12 sm:py-16">
          <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Put your workflow next to this work.
              </h2>
              <p className="text-muted-foreground mt-4">
                We will tell you plainly what carries over and what does not.
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
  );
}
