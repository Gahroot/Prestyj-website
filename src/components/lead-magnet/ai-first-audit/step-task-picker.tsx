"use client";

import * as React from "react";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaskRow } from "./task-row";
import {
  getGroupedPresetsForBusinessType,
  getSuggestedPresetIds,
} from "@/lib/ai-first-audit/task-library";
import type { BusinessType, ToolCategory } from "@/lib/ai-first-audit/types";
import { cn } from "@/lib/utils";

export interface PickedTask {
  readonly id: string;
  title: string;
  readonly category: ToolCategory;
  /** True for user-added rows; allows full title editing + removal. */
  readonly custom: boolean;
}

interface StepTaskPickerProps {
  readonly businessType: BusinessType;
  readonly initialPicked: readonly PickedTask[];
  readonly onBack: () => void;
  readonly onContinue: (picked: readonly PickedTask[]) => void;
}

const MIN_TASKS = 3;
const MAX_TASKS = 10;
const TARGET_LOW = 5;
const TARGET_HIGH = 7;

const BUSINESS_LABEL: Record<BusinessType, string> = {
  "real-estate": "real-estate teams",
  "home-services": "home-services pros",
  agency: "agencies",
  coaching: "coaches & consultants",
  ecommerce: "DTC brands",
  saas: "SaaS teams",
  "professional-services": "professional services",
  other: "businesses like yours",
};

export function StepTaskPicker({
  businessType,
  initialPicked,
  onBack,
  onContinue,
}: StepTaskPickerProps) {
  const grouped = React.useMemo(
    () => getGroupedPresetsForBusinessType(businessType),
    [businessType],
  );
  const suggestedIds = React.useMemo(
    () => new Set(getSuggestedPresetIds(businessType, 4)),
    [businessType],
  );

  // Start empty so the user picks intentionally. Resume state if returning.
  const [picked, setPicked] = React.useState<PickedTask[]>(() => [...initialPicked]);
  const [customDraft, setCustomDraft] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [showCustomInput, setShowCustomInput] = React.useState(false);

  const pickedIds = React.useMemo(() => new Set(picked.map((p) => p.id)), [picked]);

  function togglePreset(id: string) {
    setError(null);
    setPicked((prev) => {
      if (prev.some((p) => p.id === id)) {
        return prev.filter((p) => p.id !== id);
      }
      // Find preset across all groups.
      const preset = grouped.flatMap((g) => g.presets).find((p) => p.id === id);
      if (!preset) return prev;
      if (prev.length >= MAX_TASKS) {
        setError(`Maximum ${MAX_TASKS} tasks. Remove one before adding another.`);
        return prev;
      }
      return [
        ...prev,
        { id: preset.id, title: preset.title, category: preset.category, custom: false },
      ];
    });
  }

  function renameTask(id: string, title: string) {
    setPicked((prev) => prev.map((p) => (p.id === id ? { ...p, title } : p)));
  }

  function removeTask(id: string) {
    setPicked((prev) => prev.filter((p) => p.id !== id));
  }

  function addCustom() {
    const trimmed = customDraft.trim();
    if (trimmed.length < 3) {
      setError("Task title must be at least 3 characters.");
      return;
    }
    if (picked.length >= MAX_TASKS) {
      setError(`Maximum ${MAX_TASKS} tasks. Remove one first.`);
      return;
    }
    setError(null);
    const customId = `custom-${crypto.randomUUID().slice(0, 8)}`;
    setPicked((prev) => [
      ...prev,
      { id: customId, title: trimmed, category: "ops-automation", custom: true },
    ]);
    setCustomDraft("");
    setShowCustomInput(false);
  }

  function handleNext() {
    if (picked.length < MIN_TASKS) {
      setError(`Pick at least ${MIN_TASKS} tasks.`);
      return;
    }
    if (picked.length > MAX_TASKS) {
      setError(`Maximum ${MAX_TASKS} tasks.`);
      return;
    }
    setError(null);
    onContinue(picked);
  }

  // Counter banner state: target band is 5–7. Below MIN, dimmed; in band, primary.
  const inTargetBand = picked.length >= TARGET_LOW && picked.length <= TARGET_HIGH;
  const meetsMinimum = picked.length >= MIN_TASKS;

  const customTasks = picked.filter((p) => p.custom);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Which tasks eat your week?</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Pick the tasks your team does repeatedly. You can edit titles to match how your team
          actually talks about them. Aim for {TARGET_LOW}–{TARGET_HIGH} — we&apos;ll score them
          next.
        </p>
      </div>

      {/* Live counter banner */}
      <div
        className={cn(
          "rounded-lg border px-4 py-3 text-sm transition-colors",
          inTargetBand
            ? "border-primary/40 bg-primary/5 text-foreground"
            : meetsMinimum
              ? "border-border bg-muted/30 text-foreground"
              : "border-border bg-muted/30 text-muted-foreground",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium">
            {picked.length === 0
              ? `Pick ${TARGET_LOW}–${TARGET_HIGH} to get the sharpest results.`
              : inTargetBand
                ? `Nice — ${picked.length} picked. You can score now or add a couple more.`
                : meetsMinimum
                  ? `${picked.length} picked. Add ${TARGET_LOW - picked.length > 0 ? `${TARGET_LOW - picked.length} more` : "a few more"} for a sharper read.`
                  : `${picked.length} picked · need at least ${MIN_TASKS}.`}
          </span>
          <span className="text-muted-foreground shrink-0 text-xs tabular-nums">
            {picked.length}/{MAX_TASKS}
          </span>
        </div>
      </div>

      {/* Grouped presets */}
      <div className="space-y-6">
        {grouped.map((group) => (
          <div key={group.id} className="space-y-2">
            <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              {group.label}
            </h3>
            <div className="space-y-2">
              {group.presets.map((preset) => {
                const selected = pickedIds.has(preset.id);
                const pickedEntry = picked.find((p) => p.id === preset.id);
                const isSuggested = suggestedIds.has(preset.id);
                return (
                  <TaskRow
                    key={preset.id}
                    id={preset.id}
                    title={pickedEntry?.title ?? preset.title}
                    selected={selected}
                    editable={selected}
                    badge={
                      isSuggested ? (
                        <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                          <Sparkles className="h-3 w-3" />
                          Common for {BUSINESS_LABEL[businessType]}
                        </span>
                      ) : null
                    }
                    onToggle={togglePreset}
                    onRename={renameTask}
                  />
                );
              })}
            </div>
          </div>
        ))}

        {customTasks.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Your custom tasks
            </h3>
            <div className="space-y-2">
              {customTasks.map((p) => (
                <TaskRow
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  selected
                  editable
                  onToggle={() => removeTask(p.id)}
                  onRename={renameTask}
                  onRemove={removeTask}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add custom — collapsed by default so it doesn't compete with presets */}
      {showCustomInput ? (
        <div className="border-border flex gap-2 rounded-lg border border-dashed p-3">
          <input
            type="text"
            placeholder="e.g. Following up on expired listings"
            value={customDraft}
            onChange={(e) => setCustomDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addCustom();
              }
              if (e.key === "Escape") {
                setShowCustomInput(false);
                setCustomDraft("");
              }
            }}
            autoFocus
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <Button type="button" variant="outline" size="sm" onClick={addCustom}>
            Add
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowCustomInput(true)}
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        >
          <Plus className="h-4 w-4" /> Add your own task
        </button>
      )}

      {error && <p className="text-destructive text-sm">{error}</p>}

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" size="lg" className="w-full">
          Back
        </Button>
        <Button onClick={handleNext} size="lg" className="w-full" disabled={!meetsMinimum}>
          Score these tasks
        </Button>
      </div>
    </div>
  );
}
