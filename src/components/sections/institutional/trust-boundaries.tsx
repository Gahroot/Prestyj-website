import type { ReactElement } from "react";

const boundaries = [
  [
    "Data",
    "Your source systems remain authoritative. Prestyj reads what it needs for the defined work.",
  ],
  ["Access", "Tenant, fund, client, and investor boundaries are enforced at the data layer."],
  ["Answers", "Every material figure carries its source, effective date, and conflict state."],
  ["Release", "A named person approves anything that reaches an investor, committee, or market."],
] as const;

export function TrustBoundaries(): ReactElement {
  return (
    <section aria-labelledby="trust-title" className="border-b py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8">
        <div>
          <p className="text-primary text-sm font-semibold">Trust boundaries</p>
          <h2
            id="trust-title"
            className="font-heading mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Built for work that cannot leak or bluff.
          </h2>
        </div>
        <dl className="border-t">
          {boundaries.map(([term, detail]) => (
            <div key={term} className="grid gap-3 border-b py-6 sm:grid-cols-[8rem_1fr]">
              <dt className="font-semibold">{term}</dt>
              <dd className="text-muted-foreground leading-7">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
