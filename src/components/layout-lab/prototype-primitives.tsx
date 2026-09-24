import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Database,
  FileCheck2,
  FileOutput,
  SearchCheck,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Capability } from "@/lib/institutional/capabilities";
import type { Outcome, ProofSystem } from "@/lib/institutional/outcomes";
import type { ProofRecord as ProofRecordType } from "@/lib/institutional/proof";
import { positioning } from "@/lib/positioning";
import { cn } from "@/lib/utils";

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background";

export function PrototypeRail({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactElement {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function PrototypeNav(): ReactElement {
  return (
    <header className="bg-background border-b">
      <PrototypeRail className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="#top"
          className={cn(
            "font-heading inline-flex min-h-11 items-center text-lg font-bold",
            focusClasses,
          )}
        >
          Prestyj
        </Link>
        <nav aria-label="Prototype navigation" className="flex items-center gap-1 lg:gap-4">
          <Link
            href="#work"
            className={cn(
              "text-muted-foreground hover:text-foreground hidden min-h-11 items-center px-2 text-sm transition-colors motion-reduce:transition-none lg:flex",
              focusClasses,
            )}
          >
            The work
          </Link>
          <Link
            href="#proof"
            className={cn(
              "text-muted-foreground hover:text-foreground hidden min-h-11 items-center px-2 text-sm transition-colors motion-reduce:transition-none lg:flex",
              focusClasses,
            )}
          >
            Proof
          </Link>
          <Button asChild className="h-auto min-h-11 max-w-48 py-2 text-center whitespace-normal">
            <Link href={positioning.primaryCta.href}>
              {positioning.primaryCta.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>
      </PrototypeRail>
    </header>
  );
}

export function SectionIntro({
  title,
  body,
  label,
  className,
}: {
  title: string;
  body?: string;
  label?: string;
  className?: string;
}): ReactElement {
  return (
    <div className={cn("grid gap-5 border-b pb-8 lg:grid-cols-[0.8fr_1.2fr]", className)}>
      <div>
        {label ? <p className="text-primary mb-3 text-sm font-semibold">{label}</p> : null}
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {body ? (
        <p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function SourceChain({
  capability,
  compact = false,
}: {
  capability: Capability;
  compact?: boolean;
}): ReactElement {
  const steps = [
    {
      label: "Source",
      detail: capability.sources.slice(0, compact ? 2 : 4).join(", "),
      icon: Database,
    },
    {
      label: "Agent action",
      detail: capability.actions.slice(0, compact ? 2 : 4).join(", "),
      icon: SearchCheck,
    },
    { label: "Human review", detail: capability.review, icon: UserCheck },
    {
      label: "Work product",
      detail: capability.outputs.slice(0, compact ? 2 : 4).join(", "),
      icon: FileOutput,
    },
  ] as const;

  return (
    <ol className="grid border-t sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li
            key={step.label}
            className="border-b p-5 sm:border-r sm:odd:border-l lg:border-l-0 lg:first:border-l"
          >
            <span className="text-muted-foreground font-mono text-xs tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Icon aria-hidden="true" className="text-primary mt-5 size-5" />
            <h3 className="font-heading mt-4 font-bold">{step.label}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">{step.detail}</p>
          </li>
        );
      })}
    </ol>
  );
}

export function WorkRow({
  capability,
  index,
  active = false,
}: {
  capability: Capability;
  index: number;
  active?: boolean;
}): ReactElement {
  const Icon = capability.icon;
  return (
    <article
      className={cn(
        "grid gap-4 border-b py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start",
        active && "border-l-primary border-l-2 pl-4",
      )}
    >
      <span className="text-muted-foreground font-mono text-xs tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <Icon aria-hidden="true" className="mb-3 size-5" />
        <h3 className="font-heading text-lg font-bold">{capability.navLabel}</h3>
      </div>
      <div>
        <p className="leading-7">{capability.title}</p>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          {capability.outputs.join(", ")}
        </p>
      </div>
    </article>
  );
}

export function OutcomeRecord({
  outcome,
  index,
}: {
  outcome: Outcome;
  index: number;
}): ReactElement {
  return (
    <article className="border-b py-6">
      <p className="text-muted-foreground font-mono text-xs tabular-nums">
        {String(index + 1).padStart(2, "0")} / {outcome.lane}
      </p>
      <h3 className="font-heading mt-4 text-2xl font-bold tracking-tight">
        {outcome.title} <span className="text-primary">{outcome.titleAccent}</span>
      </h3>
      <p className="text-muted-foreground mt-3 max-w-2xl leading-7">{outcome.body}</p>
      <p className="mt-3 text-sm italic">{outcome.felt}</p>
    </article>
  );
}

export function ProofRecord({
  record,
  index,
  compact = false,
}: {
  record: ProofRecordType;
  index?: number;
  compact?: boolean;
}): ReactElement {
  return (
    <article className="grid gap-5 border-b py-7 lg:grid-cols-[0.65fr_1.15fr_1fr]">
      <div>
        <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
          {index === undefined
            ? record.stage
            : `${String(index + 1).padStart(2, "0")} / ${record.stage}`}
        </p>
        <h3 className="font-heading mt-3 text-xl font-bold">{record.name}</h3>
        <p className="text-primary mt-2 text-sm">{record.audience}</p>
      </div>
      <p className="text-muted-foreground leading-7">{record.delivered}</p>
      <ul className="space-y-2 text-sm">
        {record.controls.slice(0, compact ? 2 : 3).map((control) => (
          <li key={control} className="flex gap-2">
            <Check aria-hidden="true" className="text-primary mt-0.5 size-4 shrink-0" />
            <span>{control}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProofSystemRecord({
  record,
  index,
}: {
  record: ProofSystem;
  index: number;
}): ReactElement {
  return (
    <article className="grid gap-4 border-b py-6 sm:grid-cols-[3rem_0.8fr_1.2fr]">
      <span className="text-muted-foreground font-mono text-xs tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
          {record.stage}
        </p>
        <h3 className="font-heading mt-2 font-bold">{record.name}</h3>
      </div>
      <div>
        <p className="text-sm">{record.who}</p>
        <p className="text-muted-foreground mt-2 text-sm leading-6">{record.what}</p>
      </div>
    </article>
  );
}

export function ControlList({ capability }: { capability: Capability }): ReactElement {
  return (
    <div className="grid gap-6 border-y py-8 lg:grid-cols-3">
      {[
        { title: "System boundary", body: capability.boundary, icon: ShieldCheck },
        { title: "Review owner", body: capability.review, icon: UserCheck },
        { title: "Released output", body: capability.outputs.join(", "), icon: FileCheck2 },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="border-l pl-5">
            <Icon aria-hidden="true" className="text-primary size-5" />
            <h3 className="font-heading mt-4 font-bold">{item.title}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-6">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export function PrototypeCta({ prompt }: { prompt?: string }): ReactElement {
  return (
    <section id="access" className="border-t py-20 sm:py-28">
      <PrototypeRail>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-primary text-sm font-semibold">Scoped access</p>
            <h2 className="font-heading mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Start with one recurring workflow.
            </h2>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-8">
              {prompt ?? positioning.pricingRange} Bring the source systems and name the review
              owner.
            </p>
          </div>
          <Button size="lg" asChild className="h-auto min-h-11 py-3 text-center whitespace-normal">
            <Link href={positioning.primaryCta.href}>
              {positioning.primaryCta.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </PrototypeRail>
    </section>
  );
}

export function PrototypeFooter(): ReactElement {
  return (
    <footer className="border-t py-8">
      <PrototypeRail className="text-muted-foreground flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Prestyj. AI agents for institutional real estate.</p>
        <p>Source attached. Controlled by your review rules.</p>
      </PrototypeRail>
    </footer>
  );
}
