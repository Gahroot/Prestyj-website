import { formatCurrency } from "@/lib/ai-first-audit/format";
import type { ScoredWorkflow } from "@/lib/ai-first-audit/types";

interface RankedWorkflowCardProps {
  readonly workflow: ScoredWorkflow;
  readonly rank: number;
  readonly detailed?: boolean;
}

export function RankedWorkflowCard({
  workflow,
  rank,
  detailed = false,
}: RankedWorkflowCardProps) {
  return (
    <article className="border-border bg-card rounded-xl border p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="border-border flex size-9 shrink-0 items-center justify-center rounded-md border font-mono text-sm font-bold"
        >
          {rank}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-muted-foreground text-sm">{workflow.priorityAction}</p>
          <h3 className="font-heading mt-1 text-xl font-bold break-words">{workflow.input.title}</h3>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 border-y py-4 sm:grid-cols-3">
        <div>
          <dt className="text-muted-foreground text-xs">Estimated yearly time cost</dt>
          <dd className="mt-1 font-semibold tabular-nums">
            {formatCurrency(workflow.annualTimeCost)}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground text-xs">Business impact</dt>
          <dd className="mt-1 font-semibold">{workflow.impactLabel}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground text-xs">Ready for an AI agent</dt>
          <dd className="mt-1 font-semibold">{workflow.readinessLabel}</dd>
        </div>
      </dl>

      <div className="mt-5 space-y-4">
        <div>
          <h4 className="text-sm font-semibold">{workflow.guide.agentRole}</h4>
          <p className="text-muted-foreground mt-1 text-sm">{workflow.guide.agentJob}</p>
        </div>
        {detailed && (
          <>
            <div>
              <h4 className="text-sm font-semibold">First move</h4>
              <p className="text-muted-foreground mt-1 text-sm">{workflow.guide.firstMove}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">When a person steps in</h4>
              <p className="text-muted-foreground mt-1 text-sm">{workflow.guide.guardrail}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">30-day measure</h4>
              <p className="text-muted-foreground mt-1 text-sm">{workflow.guide.successMetric}</p>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
