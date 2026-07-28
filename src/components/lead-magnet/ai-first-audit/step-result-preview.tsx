"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import { formatCurrency } from "@/lib/ai-first-audit/format";
import type { AuditResultV2 } from "@/lib/ai-first-audit/types";

interface StepResultPreviewProps {
  readonly result: AuditResultV2;
  readonly onBack: () => void;
  readonly onContinue: () => void;
}

export function StepResultPreview({ result, onBack, onContinue }: StepResultPreviewProps) {
  const top = result.topThree[0];
  if (!top) return null;

  return (
    <section className="border-border bg-card overflow-hidden rounded-xl border">
      <div className="border-border border-b p-5 sm:p-8">
        <p className="text-muted-foreground text-sm font-medium">{AUDIT_COPY.previewLabel}</p>
        <h2
          data-wizard-heading
          tabIndex={-1}
          className="font-heading mt-2 text-2xl leading-tight font-bold break-words outline-none sm:text-3xl"
        >
          {top.input.title} costs about {formatCurrency(top.annualTimeCost)} a year in team time.
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl">
          It has {top.impactLabel.toLowerCase()} business impact and is{" "}
          {top.readinessLabel.toLowerCase()} for an AI agent.
        </p>
      </div>

      <dl className="grid border-b sm:grid-cols-3">
        <div className="border-border p-5 sm:border-e">
          <dt className="text-muted-foreground text-sm">Estimated yearly time cost</dt>
          <dd className="font-heading mt-1 text-2xl font-bold tabular-nums">
            {formatCurrency(top.annualTimeCost)}
          </dd>
        </div>
        <div className="border-border border-t p-5 sm:border-t-0 sm:border-e">
          <dt className="text-muted-foreground text-sm">Business impact</dt>
          <dd className="mt-1 text-lg font-semibold">{top.impactLabel}</dd>
        </div>
        <div className="border-border border-t p-5 sm:border-t-0">
          <dt className="text-muted-foreground text-sm">Ready for an AI agent</dt>
          <dd className="mt-1 text-lg font-semibold">{top.readinessLabel}</dd>
        </div>
      </dl>

      <div className="space-y-5 p-5 sm:p-8">
        <div>
          <h3 className="font-heading text-lg font-semibold">{top.guide.agentRole}</h3>
          <p className="text-muted-foreground mt-1">{top.guide.agentJob}</p>
        </div>
        <p className="border-border border-s-2 ps-4 text-sm">{top.whyItRanks}</p>
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <Button type="button" variant="outline" size="lg" onClick={onBack}>
            Back
          </Button>
          <Button type="button" size="lg" onClick={onContinue}>
            Get my full report
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
