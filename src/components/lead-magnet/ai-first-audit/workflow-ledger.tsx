import * as React from "react";
import { formatCurrency } from "@/lib/ai-first-audit/format";
import type { ScoredWorkflow } from "@/lib/ai-first-audit/types";

function LedgerRow({ workflow, rank }: { workflow: ScoredWorkflow; rank: number }) {
  return (
    <li className="border-border grid gap-3 border-t px-4 py-4 first:border-t-0 sm:grid-cols-[minmax(0,1.8fr)_1fr_0.8fr_1.2fr] sm:items-center sm:px-5">
      <div className="min-w-0">
        <span className="text-muted-foreground me-2 font-mono text-xs">{rank}</span>
        <span className="font-medium break-words">{workflow.input.title}</span>
        <span className="text-muted-foreground mt-1 block text-xs sm:ms-6">
          {workflow.priorityAction}
        </span>
      </div>
      <div>
        <span className="text-muted-foreground block text-xs sm:sr-only">Yearly time cost</span>
        <span className="font-semibold tabular-nums">{formatCurrency(workflow.annualTimeCost)}</span>
      </div>
      <div>
        <span className="text-muted-foreground block text-xs sm:sr-only">Business impact</span>
        <span>{workflow.impactLabel}</span>
      </div>
      <div>
        <span className="text-muted-foreground block text-xs sm:sr-only">Ready for an AI agent</span>
        <span>{workflow.readinessLabel}</span>
      </div>
    </li>
  );
}

export function WorkflowLedger({ workflows }: { readonly workflows: readonly ScoredWorkflow[] }) {
  const rows = React.Children.toArray(
    workflows.map((workflow, index) =>
      React.createElement(LedgerRow, { workflow, rank: index + 1 }),
    ),
  );
  return (
    <div className="border-border bg-card overflow-hidden rounded-xl border">
      <div
        aria-hidden="true"
        className="text-muted-foreground hidden grid-cols-[minmax(0,1.8fr)_1fr_0.8fr_1.2fr] gap-3 border-b px-5 py-3 text-xs sm:grid"
      >
        <span>Workflow</span>
        <span>Yearly time cost</span>
        <span>Impact</span>
        <span>Readiness</span>
      </div>
      <p className="sr-only">
        Workflows are ranked by yearly team time cost, business impact, and readiness for an AI
        agent.
      </p>
      <ol>{rows}</ol>
    </div>
  );
}
