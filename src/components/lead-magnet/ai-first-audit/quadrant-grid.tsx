import * as React from "react";
import type { ScoredTask } from "@/lib/ai-first-audit/types";
import { cn } from "@/lib/utils";

interface QuadrantGridProps {
  readonly tasks: readonly ScoredTask[];
}

interface PlottedTask {
  readonly task: ScoredTask;
  readonly x: number; // 0..100
  readonly y: number; // 0..100 (top = 0, bottom = 100)
  readonly rank: number;
}

/**
 * Maps the 4–20 axis to 0–100% for positioning. We invert Y because CSS
 * top:0 = top of grid but high leverage = top.
 */
function plot(tasks: readonly ScoredTask[]): PlottedTask[] {
  return tasks.map((task, i) => {
    const x = ((task.readiness - 4) / 16) * 100;
    const y = 100 - ((task.leverage - 4) / 16) * 100;
    return { task, x, y, rank: i + 1 };
  });
}

export function QuadrantGrid({ tasks }: QuadrantGridProps) {
  const plotted = plot(tasks);

  return (
    <div className="space-y-3">
      <div className="text-muted-foreground flex items-center justify-between text-xs">
        <span>High leverage ↑ / Low AI-readiness</span>
        <span>High leverage ↑ / High AI-readiness</span>
      </div>

      <div className="border-border relative aspect-square w-full overflow-hidden rounded-xl border bg-gradient-to-br from-purple-50/40 to-transparent dark:from-purple-950/20">
        {/* Quadrant labels */}
        <div className="text-muted-foreground absolute top-3 left-3 text-xs font-semibold">
          Delegate
        </div>
        <div className="text-primary absolute top-3 right-3 text-xs font-semibold">
          Automate First
        </div>
        <div className="text-muted-foreground absolute bottom-3 left-3 text-xs font-semibold">
          Ignore
        </div>
        <div className="text-muted-foreground absolute right-3 bottom-3 text-xs font-semibold">
          Automate Later
        </div>

        {/* Crosshair */}
        <div className="bg-border absolute top-1/2 right-0 left-0 h-px" />
        <div className="bg-border absolute top-0 bottom-0 left-1/2 w-px" />

        {/* Points */}
        {plotted.map(({ task, x, y, rank }) => (
          <div
            key={task.input.id}
            className={cn(
              "absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold shadow-sm",
              task.quadrant === "automate-first"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground border-border border",
            )}
            style={{ left: `${x}%`, top: `${y}%` }}
            title={`${task.input.title} — leverage ${task.leverage}/20, readiness ${task.readiness}/20`}
          >
            {rank}
          </div>
        ))}
      </div>

      <div className="text-muted-foreground flex items-center justify-between text-xs">
        <span>Low leverage ↓ / Low AI-readiness</span>
        <span>Low leverage ↓ / High AI-readiness</span>
      </div>
    </div>
  );
}
