"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  HOURS_PER_WEEK_OPTIONS,
  FREQUENCY_OPTIONS,
  REPEATABILITY_OPTIONS,
  JUDGMENT_OPTIONS,
  DATA_AVAILABILITY_OPTIONS,
  type SubScore,
  type AuditTaskInput,
} from "@/lib/ai-first-audit/types";
import type { PickedTask } from "./step-task-picker";
import { cn } from "@/lib/utils";

interface StepScoreProps {
  readonly picked: readonly PickedTask[];
  readonly onBack: () => void;
  readonly onComplete: (scored: readonly AuditTaskInput[]) => void;
}

type ScoreDraft = Partial<{
  hoursPerWeek: SubScore;
  frequency: SubScore;
  repeatability: SubScore;
  judgment: SubScore;
  dataAvailability: SubScore;
}>;

const QUESTIONS = [
  {
    key: "hoursPerWeek" as const,
    label: "How many hours per week does this task take?",
    options: HOURS_PER_WEEK_OPTIONS,
  },
  {
    key: "frequency" as const,
    label: "How often does this task come up?",
    options: FREQUENCY_OPTIONS,
  },
  {
    key: "repeatability" as const,
    label: "How similar is each instance?",
    options: REPEATABILITY_OPTIONS,
  },
  {
    key: "judgment" as const,
    label: "How much human judgment does it require?",
    options: JUDGMENT_OPTIONS,
  },
  {
    key: "dataAvailability" as const,
    label: "Is the data needed already in your systems?",
    options: DATA_AVAILABILITY_OPTIONS,
  },
] as const;

function isComplete(draft: ScoreDraft): draft is Required<ScoreDraft> {
  return QUESTIONS.every((q) => draft[q.key] !== undefined);
}

export function StepScore({ picked, onBack, onComplete }: StepScoreProps) {
  const [index, setIndex] = React.useState(0);
  const [drafts, setDrafts] = React.useState<Record<string, ScoreDraft>>({});
  const [error, setError] = React.useState<string | null>(null);
  // Track which tasks the user opted to skip so we don't include them.
  const [skipped, setSkipped] = React.useState<Set<string>>(new Set());

  const activeTasks = React.useMemo(
    () => picked.filter((p) => !skipped.has(p.id)),
    [picked, skipped],
  );

  const current = activeTasks[index];

  const draft = current ? (drafts[current.id] ?? {}) : {};

  function pick(key: keyof ScoreDraft, value: SubScore) {
    if (!current) return;
    setError(null);
    setDrafts((prev) => ({
      ...prev,
      [current.id]: { ...(prev[current.id] ?? {}), [key]: value },
    }));
  }

  function handleNext() {
    if (!current) return;
    if (!isComplete(draft)) {
      setError("Pick one option for every question above.");
      return;
    }
    setError(null);
    if (index + 1 >= activeTasks.length) {
      finish();
      return;
    }
    setIndex(index + 1);
  }

  function handlePrev() {
    setError(null);
    if (index === 0) {
      onBack();
      return;
    }
    setIndex(index - 1);
  }

  function skip() {
    if (!current) return;
    setSkipped((prev) => new Set(prev).add(current.id));
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[current.id];
      return next;
    });
    // Don't advance index — the activeTasks list just shrunk so the same
    // index now points at the next task. If we just removed the last one,
    // clamp.
    setIndex((i) => Math.min(i, activeTasks.length - 2));
  }

  function finish() {
    const scored: AuditTaskInput[] = [];
    for (const task of activeTasks) {
      const d = drafts[task.id];
      if (!d || !isComplete(d)) {
        setError(`"${task.title}" isn't fully scored yet.`);
        // Jump back to the first incomplete task
        const firstIncomplete = activeTasks.findIndex((t) => {
          const td = drafts[t.id];
          return !td || !isComplete(td);
        });
        if (firstIncomplete >= 0) setIndex(firstIncomplete);
        return;
      }
      scored.push({
        id: task.id,
        title: task.title,
        category: task.category,
        hoursPerWeek: d.hoursPerWeek,
        frequency: d.frequency,
        repeatability: d.repeatability,
        judgment: d.judgment,
        dataAvailability: d.dataAvailability,
      });
    }
    if (scored.length === 0) {
      setError("Score at least one task before continuing.");
      return;
    }
    onComplete(scored);
  }

  if (!current) {
    return (
      <div className="space-y-4">
        <p className="text-destructive">No tasks remaining. Go back and pick at least one.</p>
        <Button onClick={onBack} variant="outline">
          Back
        </Button>
      </div>
    );
  }

  const progress = ((index + 1) / activeTasks.length) * 100;

  return (
    <div className="space-y-6">
      <div>
        <div className="text-muted-foreground mb-2 flex items-center justify-between text-xs">
          <span>
            Task {index + 1} of {activeTasks.length} · ~20 sec each
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          <div>
            <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Scoring task
            </p>
            <h2 className="text-xl leading-tight font-bold sm:text-2xl">{current.title}</h2>
          </div>

          <div className="space-y-5">
            {QUESTIONS.map((q) => {
              const value = draft[q.key];
              return (
                <div key={q.key}>
                  <Label className="text-sm font-medium">{q.label}</Label>
                  <div className="mt-2 grid gap-2">
                    {q.options.map((opt) => {
                      const active = value === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => pick(q.key, opt.value)}
                          className={cn(
                            "border-border flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors",
                            active
                              ? "border-primary bg-primary/10"
                              : "hover:border-primary/40 hover:bg-muted/40",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                              active ? "border-primary bg-primary" : "border-muted-foreground/40",
                            )}
                          >
                            {active && <span className="h-2 w-2 rounded-full bg-white" />}
                          </span>
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {error && <p className="text-destructive text-sm">{error}</p>}

      <div className="grid gap-3 sm:grid-cols-[auto_auto_1fr] sm:items-center">
        <Button onClick={handlePrev} variant="outline" size="lg" className="w-full sm:w-auto">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back
        </Button>
        <Button
          onClick={skip}
          variant="outline"
          size="lg"
          className="text-muted-foreground w-full hover:text-foreground sm:w-auto"
        >
          <SkipForward className="mr-1 h-4 w-4" /> Skip this task
        </Button>
        <Button onClick={handleNext} size="lg" className="w-full sm:ml-auto sm:w-auto">
          {index + 1 >= activeTasks.length ? "See my results" : "Next task"}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
