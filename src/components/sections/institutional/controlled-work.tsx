import type { ReactElement } from "react";
import { ArrowRight, CheckCircle2, Database, FileOutput, UserCheck } from "lucide-react";

const steps = [
  {
    label: "Source",
    detail: "The system of record stays in charge.",
    examples: "Ledger, VDR, property system, LPA, CRM",
    icon: Database,
  },
  {
    label: "Agent",
    detail: "Prestyj completes the defined work.",
    examples: "Retrieve, reconcile, calculate, draft, route",
    icon: ArrowRight,
  },
  {
    label: "Review",
    detail: "A named person owns the release.",
    examples: "Fund accounting, deal lead, IR, broker",
    icon: UserCheck,
  },
  {
    label: "Work product",
    detail: "The output arrives ready to use.",
    examples: "NAV package, IC memo, LP response, meeting",
    icon: FileOutput,
  },
] as const;

export function ControlledWork(): ReactElement {
  return (
    <section aria-labelledby="controlled-work-title" className="border-b py-12 sm:py-16">
      <div className="editorial-rail">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-primary text-sm font-semibold">Controlled work</p>
            <h2
              id="controlled-work-title"
              className="font-heading mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              The answer is only useful if the record survives it.
            </h2>
            <p className="text-muted-foreground mt-5 max-w-xl leading-7">
              Prestyj sits above your existing systems. It does not hide source conflicts, invent
              missing facts, or publish past the person who owns the decision.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Every figure retains its source and effective date.",
                "Every material conflict enters a review queue.",
                "Every external release has a named owner.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="text-primary mt-0.5 h-4 w-4 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="border-t">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.label}
                  className="grid gap-4 border-b py-6 sm:grid-cols-[3rem_1fr_1fr] sm:items-start"
                >
                  <span className="text-muted-foreground font-mono text-xs tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <Icon aria-hidden="true" className="mb-3 h-5 w-5" />
                    <strong className="font-heading block text-lg">{step.label}</strong>
                    <span className="text-muted-foreground mt-1 block text-sm">{step.detail}</span>
                  </span>
                  <span className="text-muted-foreground text-sm leading-6">{step.examples}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
