import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Proof-of-work pilot",
  description:
    "Bring one institutional real estate workflow to a scoped Prestyj proof with representative records, reconciliation, and a named review owner.",
  alternates: { canonical: `${siteConfig.url}/pilot` },
};

export default function PilotPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner">
        <section className="border-b">
          <div className="editorial-rail">
            <EditorialPageHeader title="Prove one workflow before you fund a transformation.">
              <p>
                A pilot takes one recurring work product, runs representative records through a
                controlled agent, and reconciles the result beside your current process.
              </p>
            </EditorialPageHeader>
          </div>
        </section>

        <section className="border-b py-12 sm:py-16">
          <div className="editorial-rail editorial-split">
            <div>
              <h2 className="font-heading text-3xl font-bold">A good pilot has</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "A recurring, expensive, reviewable workflow",
                  "Representative source records with known answers",
                  "A person who owns the current output",
                  "Clear exception and release rules",
                  "A result the team can compare against today's process",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="text-primary mt-1 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l pl-6">
              <h2 className="font-heading text-3xl font-bold">It does not require</h2>
              <p className="text-muted-foreground mt-6 leading-7">
                A software replacement, a company-wide license, synthetic ROI promises, or a
                production deployment before the output has earned trust. Scope and price follow the
                workflow after discovery.
              </p>
            </div>
          </div>
        </section>

        <section className="editorial-rail py-12 sm:py-16" aria-labelledby="pilot-sequence">
          <h2 id="pilot-sequence" className="text-3xl">
            From representative records to a decision
          </h2>
          <ol className="editorial-rows mt-8">
            {[
              [
                "01",
                "Define",
                "Agree on the work product, source records, review owner, and acceptance criteria.",
              ],
              [
                "02",
                "Reconcile",
                "Run the workflow beside the current process. Route differences and exceptions to the review owner.",
              ],
              [
                "03",
                "Decide",
                "Review the evidence together: operate the proven workflow, revise the scope, or stop.",
              ],
            ].map(([number, title, detail]) => (
              <li key={number} className="grid gap-4 sm:grid-cols-[3rem_0.5fr_1fr]">
                <span className="text-muted-foreground text-sm">{number}</span>
                <h3 className="text-xl">{title}</h3>
                <p className="text-muted-foreground leading-7">{detail}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="py-12 sm:py-16">
          <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Bring one work product your team rebuilt this month.
            </h2>
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
