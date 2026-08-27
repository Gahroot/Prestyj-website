import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
    <>
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Work</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Built systems, labeled by what is actually running.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              No borrowed logos and no projected revenue math. These are the systems, controls, and
              work products we can defend, including reference architecture that is not live.
            </p>
          </div>
        </section>
        <ProofRecords />
        <section className="py-20 sm:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
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
                Get access <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
