import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";
import type { Capability } from "@/lib/institutional/capabilities";

export function CapabilityPage({ capability }: { capability: Capability }): ReactElement {
  const Icon = capability.icon;

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner">
        <section className="border-b">
          <div className="editorial-rail">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <EditorialPageHeader title={capability.title}>
                  <p>{capability.description}</p>
                </EditorialPageHeader>
              </div>
              <div className="mb-10 border-l pl-6">
                <Icon aria-hidden="true" className="text-primary h-6 w-6" />
                <p className="mt-4 text-lg italic">{capability.felt}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="asks-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
              <h2 id="asks-title" className="font-heading text-3xl font-bold tracking-tight">
                Start with the ask.
              </h2>
              <ol className="border-t">
                {capability.asks.map((ask, index) => (
                  <li key={ask} className="grid gap-4 border-b py-6 sm:grid-cols-[3rem_1fr]">
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <blockquote className="text-lg leading-7">&ldquo;{ask}&rdquo;</blockquote>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby="record-title" className="border-b py-12 sm:py-16">
          <div className="editorial-rail">
            <h2
              id="record-title"
              className="font-heading max-w-2xl text-3xl font-bold tracking-tight"
            >
              The complete work record
            </h2>
            <div className="mt-8 border-t">
              {[
                { label: "Work product", values: capability.outputs },
                { label: "Sources", values: capability.sources },
                { label: "Agent work", values: capability.actions },
                { label: "Review gate", values: [capability.review] },
              ].map((column) => (
                <div
                  key={column.label}
                  className="grid gap-5 border-b py-6 md:grid-cols-[0.45fr_1fr]"
                >
                  <h3 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                    {column.label}
                  </h3>
                  <ul className="space-y-3 text-base leading-7">
                    {column.values.map((value) => (
                      <li key={value} className="flex gap-2">
                        <Check
                          aria-hidden="true"
                          className="text-primary mt-0.5 h-4 w-4 shrink-0"
                        />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b py-16">
          <div className="editorial-rail">
            <div className="border-primary grid gap-6 border-l-2 pl-6 lg:grid-cols-[auto_1fr] lg:items-start">
              <ShieldCheck aria-hidden="true" className="text-primary h-6 w-6" />
              <div>
                <h2 className="font-heading text-xl font-bold">The boundary</h2>
                <p className="text-muted-foreground mt-2 max-w-3xl leading-7">
                  {capability.boundary}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="editorial-rail">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Bring us this workflow.
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                  Show us the source systems, the current work product, and the person who reviews
                  it.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/book-demo">
                  Book a workflow demo <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
