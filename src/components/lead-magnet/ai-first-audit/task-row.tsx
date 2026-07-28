"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskRowProps {
  readonly id: string;
  readonly title: string;
  readonly selected: boolean;
  readonly disabled?: boolean;
  readonly removable?: boolean;
  readonly onToggle: (id: string, selected: boolean) => void;
  readonly onRemove?: (id: string) => void;
}

export function TaskRow({
  id,
  title,
  selected,
  disabled = false,
  removable = false,
  onToggle,
  onRemove,
}: TaskRowProps) {
  const inputId = `workflow-${id}`;
  return (
    <div
      className={cn(
        "border-border bg-background flex min-h-14 items-stretch rounded-lg border transition-[border-color,background-color] duration-150",
        selected && "border-primary bg-secondary",
        disabled && !selected && "opacity-60",
      )}
    >
      <label
        htmlFor={inputId}
        className="focus-within:ring-ring flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-lg px-3 py-2 focus-within:ring-[3px] focus-within:ring-inset"
      >
        <input
          id={inputId}
          type="checkbox"
          checked={selected}
          disabled={disabled}
          onChange={(event) => onToggle(id, event.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            "border-muted-foreground flex size-6 shrink-0 items-center justify-center rounded border-2 transition-[border-color,background-color] duration-150 forced-colors:border-[ButtonText]",
            selected && "border-primary bg-primary text-primary-foreground",
          )}
        >
          {selected && <Check className="size-4" strokeWidth={3} />}
        </span>
        <span className="min-w-0 break-words text-sm font-medium">{title}</span>
      </label>
      {removable && onRemove && (
        <button
          type="button"
          onClick={() => onRemove(id)}
          aria-label={`Remove ${title}`}
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring m-1 flex size-11 shrink-0 items-center justify-center rounded-md outline-none transition-colors focus-visible:ring-[3px]"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
