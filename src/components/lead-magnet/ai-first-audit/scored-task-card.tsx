import * as React from "react";
import { Clock, DollarSign, Wrench } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import type { ScoredTask } from "@/lib/ai-first-audit/types";
import { formatCurrency, formatHours } from "@/lib/ai-first-audit/format";

interface ScoredTaskCardProps {
  readonly rank: number;
  readonly task: ScoredTask;
}

export function ScoredTaskCard({ rank, task }: ScoredTaskCardProps) {
  return (
    <BorderGlow borderRadius={14} innerClassName="space-y-4 p-6">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold">
          {rank}
        </div>
        <div className="flex-1">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {task.recipe.displayName}
          </p>
          <h3 className="text-foreground mt-1 text-lg leading-tight font-semibold">
            {task.input.title}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-muted/40 rounded-lg p-3">
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <Clock className="h-3 w-3" /> Hours/week back
          </div>
          <div className="mt-1 text-base font-semibold">{formatHours(task.weeklyHoursSaved)}</div>
        </div>
        <div className="bg-muted/40 rounded-lg p-3">
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <DollarSign className="h-3 w-3" /> Annual value
          </div>
          <div className="text-primary mt-1 text-base font-semibold">
            {formatCurrency(task.annualDollarsSaved)}
          </div>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground flex items-center gap-1 text-xs font-medium tracking-wide uppercase">
          <Wrench className="h-3 w-3" /> Stack
        </p>
        <p className="text-sm">{task.recipe.stack}</p>
      </div>

      <div>
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Starter recipe
        </p>
        <p className="mt-1 text-sm leading-relaxed">{task.recipe.starterRecipe}</p>
      </div>

      <div className="bg-destructive/5 border-destructive/20 rounded-lg border p-3">
        <p className="text-destructive text-xs font-semibold uppercase">Watch out</p>
        <p className="mt-1 text-sm leading-relaxed">{task.recipe.watchOut}</p>
      </div>
    </BorderGlow>
  );
}
