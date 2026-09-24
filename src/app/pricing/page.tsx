import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Prestyj engagements start with one institutional real estate workflow, its source systems, review owner, and finished work product.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

const phases = [
  {
    number: "01",
    title: "Scope the work",
    body: "Name the recurring workflow, source systems, current output, review owner, and failure modes.",
  },
  {
    number: "02",
    title: "Prove it beside the team",
    body: "Run representative records through the agent and reconcile every difference against the current process.",
  },
  {
    number: "03",
    title: "Operate and expand",
    body: "Move the proven workflow into production, monitor exceptions, and add adjacent work only when the first output holds up.",
  },
] as const;

export default function PricingPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner">
        <section className="border-b">
          <div className="editorial-rail">
            <EditorialPageHeader title="Price the workflow, not the seat count.">
              <p>
                Scope depends on the work we take over, the systems involved, the controls required,
                and the volume that runs through it. We give you the number after we see the work.
              </p>
            </EditorialPageHeader>
          </div>
        </section>

        <section aria-labelledby="phases-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail">
            <h2 id="phases-title" className="font-heading text-3xl font-bold tracking-tight">
              How an engagement starts
            </h2>
            <ol className="mt-10 border-t">
              {phases.map((phase) => (
                <li
                  key={phase.number}
                  className="grid gap-5 border-b py-7 sm:grid-cols-[4rem_0.7fr_1.3fr]"
                >
                  <span className="text-muted-foreground font-mono text-sm">{phase.number}</span>
                  <h3 className="font-heading text-xl font-bold">{phase.title}</h3>
                  <p className="text-muted-foreground leading-7">{phase.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="scope-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail editorial-split">
            <div>
              <h2 id="scope-title" className="font-heading text-3xl font-bold tracking-tight">
                What changes the scope
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Number and quality of source systems",
                  "Frequency and volume of the workflow",
                  "Complexity of fund, lease, or routing logic",
                  "Security, tenancy, and audit requirements",
                  "External integrations and release controls",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden="true" className="text-primary mt-1 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l pl-6">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                What we do not sell
              </h2>
              <p className="text-muted-foreground mt-6 leading-7">
                No generic software tier, no per-seat training program, and no promise that every
                workflow belongs in AI. If the process is not stable enough to define or valuable
                enough to operate, we will say so.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="editorial-rail flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Bring the workflow. We will scope the work.
              </h2>
              <p className="text-muted-foreground mt-4">
                Most first proofs fit inside one quarter.
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
