import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";

import { capabilities } from "@/lib/institutional/capabilities";

export function EvidenceLedger(): ReactElement {
  return (
    <section id="outcomes" aria-labelledby="outcomes-title" className="border-b py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b pb-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h2
            id="outcomes-title"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Put Prestyj on the work that compounds.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-8">
            The work between a source document and a decision is where firms lose time, context, and
            confidence. Prestyj completes that work and returns the record behind it.
          </p>
        </div>

        <ol>
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <li key={capability.slug} className="group border-b last:border-b-0">
                <Link
                  href={`/capabilities/${capability.slug}`}
                  className="hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-background grid gap-6 py-8 transition-colors focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none sm:grid-cols-[4rem_1fr_1fr_auto] sm:items-start"
                >
                  <span className="text-muted-foreground font-mono text-sm tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <Icon aria-hidden="true" className="mb-4 h-5 w-5" />
                    <strong className="font-heading block text-2xl tracking-tight">
                      {capability.navLabel}
                    </strong>
                  </span>
                  <span>
                    <span className="text-foreground block leading-7">{capability.title}</span>
                    <span className="text-muted-foreground mt-2 block text-sm italic">
                      {capability.felt}
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
