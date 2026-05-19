"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaskRow } from "./task-row";
import { getPresetsForBusinessType } from "@/lib/ai-first-audit/task-library";
import type { BusinessType, ToolCategory } from "@/lib/ai-first-audit/types";

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

const MIN_TASKS = 5;
const MAX_TASKS = 15;

export function StepTaskPicker({
  businessType,
  initialPicked,
  onBack,
  onContinue,
}: StepTaskPickerProps) {
  const presets = React.useMemo(() => getPresetsForBusinessType(businessType), [businessType]);

  // Track selection by id. Start from initialPicked OR default to all presets selected
  // (so users see the suggested set already checked — they can deselect, not start cold).
  const [picked, setPicked] = React.useState<PickedTask[]>(() => {
    if (initialPicked.length > 0) return [...initialPicked];
    return presets.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      custom: false,
    }));
  });

  const [customDraft, setCustomDraft] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const pickedIds = React.useMemo(() => new Set(picked.map((p) => p.id)), [picked]);

  function togglePreset(id: string) {
    setError(null);
    setPicked((prev) => {
      if (prev.some((p) => p.id === id)) {
        return prev.filter((p) => p.id !== id);
      }
      const preset = presets.find((p) => p.id === id);
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Which tasks eat your week?</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Pick {MIN_TASKS}–{MAX_TASKS} tasks your team does repeatedly. Edit titles to match how
          your team actually talks about them. Don&apos;t see yours? Add it at the bottom.
        </p>
      </div>

      <div className="space-y-2">
        {presets.map((preset) => {
          const selected = pickedIds.has(preset.id);
          const pickedEntry = picked.find((p) => p.id === preset.id);
          return (
            <TaskRow
              key={preset.id}
              id={preset.id}
              title={pickedEntry?.title ?? preset.title}
              selected={selected}
              editable={selected}
              onToggle={togglePreset}
              onRename={renameTask}
            />
          );
        })}

        {picked
          .filter((p) => p.custom)
          .map((p) => (
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

      <div className="border-border flex gap-2 rounded-lg border border-dashed p-3">
        <input
          type="text"
          placeholder="Add your own task…"
          value={customDraft}
          onChange={(e) => setCustomDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addCustom();
            }
          }}
          className="flex-1 bg-transparent text-sm outline-none"
        />
        <Button type="button" variant="outline" size="sm" onClick={addCustom}>
          <Plus className="mr-1 h-4 w-4" /> Add
        </Button>
      </div>

      <p className="text-muted-foreground text-xs">
        {picked.length} selected · {MIN_TASKS} minimum · {MAX_TASKS} max
      </p>

      {error && <p className="text-destructive text-sm">{error}</p>}

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" size="lg" className="w-full">
          Back
        </Button>
        <Button onClick={handleNext} size="lg" className="w-full">
          Score these tasks
        </Button>
      </div>
    </div>
  );
}
