import type { ReactElement } from "react";

import { outcomes } from "@/lib/institutional/outcomes";

export function OutcomesGrid(): ReactElement {
  return (
    <section id="outcomes" className="border-b py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What your firm gets back
          </h2>
          <p className="text-muted-foreground mt-4 text-lg text-pretty">
            Every one of these is a deliverable, not a feature. If it doesn&rsquo;t land as finished
            work on someone&rsquo;s desk, we haven&rsquo;t done our job.
          </p>
        </div>

        <ul className="bg-border mt-14 grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <li
              key={`${outcome.title}${outcome.titleAccent}`}
              className="bg-background hover:bg-card/70 flex flex-col p-8 transition-colors"
            >
              <span className="text-muted-foreground text-xs tracking-widest uppercase">
                {outcome.lane}
              </span>
              <h3 className="font-heading text-foreground mt-5 text-2xl font-bold tracking-tight">
                {outcome.title}
                <br />
                <span className="text-primary">{outcome.titleAccent}</span>
              </h3>
              <p className="text-muted-foreground mt-4 text-pretty">{outcome.body}</p>
              <p className="text-foreground/80 mt-auto pt-5 text-sm text-pretty italic">
                {outcome.felt}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
