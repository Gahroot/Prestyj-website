"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TaskRowProps {
  readonly id: string;
  readonly title: string;
  readonly selected: boolean;
  readonly editable?: boolean;
  readonly onToggle: (id: string) => void;
  readonly onRename?: (id: string, title: string) => void;
  readonly onRemove?: (id: string) => void;
}

export function TaskRow({
  id,
  title,
  selected,
  editable = false,
  onToggle,
  onRename,
  onRemove,
}: TaskRowProps) {
  return (
    <div
      className={cn(
        "border-border bg-card flex items-center gap-3 rounded-lg border p-3 transition-colors",
        selected && "border-primary/40 bg-primary/5",
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-pressed={selected}
        aria-label={selected ? `Remove ${title}` : `Add ${title}`}
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground/40 bg-background hover:border-primary/60",
        )}
      >
        {selected && <Check className="h-4 w-4" />}
      </button>

      {editable && onRename ? (
        <Input
          value={title}
          onChange={(e) => onRename(id, e.target.value)}
          className="border-0 bg-transparent p-0 text-sm shadow-none focus-visible:ring-0"
        />
      ) : (
        <span className="text-sm">{title}</span>
      )}

      {onRemove && (
        <button
          type="button"
          onClick={() => onRemove(id)}
          aria-label={`Remove ${title}`}
          className="text-muted-foreground hover:text-destructive ml-auto"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
