import type { ReactElement } from "react";

import { proofSystems } from "@/lib/institutional/outcomes";

export function ProofSection(): ReactElement {
  return (
    <section className="border-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Already built. Already running.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg text-pretty">
            We don&rsquo;t have logos to show you &mdash; the firms we build for don&rsquo;t hand
            those out. Here is the work instead.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proofSystems.map((system) => (
            <li key={system.name} className="bg-card/60 flex flex-col rounded-2xl border p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground text-xs tracking-widest uppercase">
                  {system.stage}
                </span>
                {/* The dot means running. Never show it on a reference build. */}
                {system.stage === "Reference architecture" ? null : (
                  <span
                    aria-hidden="true"
                    className="bg-success/70 h-1.5 w-1.5 shrink-0 rounded-full"
                  />
                )}
              </div>
              <h3 className="font-heading text-foreground mt-4 text-xl font-bold tracking-tight text-balance">
                {system.name}
              </h3>
              <p className="text-primary mt-1.5 text-sm">{system.who}</p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed text-pretty">
                {system.what}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
