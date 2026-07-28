import * as React from "react";
import type { FirstFixPlanItem } from "@/lib/ai-first-audit/types";

function PlanRow({ item, index }: { item: FirstFixPlanItem; index: number }) {
  return (
    <li className="border-border grid gap-2 border-t py-5 first:border-t-0 sm:grid-cols-[2.5rem_1fr]">
      <span className="font-mono text-sm font-bold" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-heading font-semibold">{item.title}</h3>
        <p className="text-muted-foreground mt-1">{item.body}</p>
      </div>
    </li>
  );
}

export function FirstFixPlan({ items }: { readonly items: readonly FirstFixPlanItem[] }) {
  const rows = React.Children.toArray(
    items.map((item, index) => React.createElement(PlanRow, { item, index })),
  );
  return <ol>{rows}</ol>;
}
