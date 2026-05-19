import * as React from "react";
import type { DayPlan } from "@/lib/ai-first-audit/types";

interface SevenDayListProps {
  readonly plan: readonly DayPlan[];
}

export function SevenDayList({ plan }: SevenDayListProps) {
  return (
    <ol className="space-y-3">
      {plan.map((day) => (
        <li key={day.day} className="border-border bg-card flex gap-4 rounded-lg border p-4">
          <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
            {day.day}
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{day.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{day.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
