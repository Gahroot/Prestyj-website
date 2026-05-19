"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { StepLeadCapture, type LeadCaptureResult } from "./step-lead-capture";
import { StepBusinessContext } from "./step-business-context";
import { StepTaskPicker, type PickedTask } from "./step-task-picker";
import { StepScore } from "./step-score";
import { StepResultPreview } from "./step-result-preview";
import { computeResult } from "@/lib/ai-first-audit/compute-result";
import type { AuditResult, AuditTaskInput, BusinessContext } from "@/lib/ai-first-audit/types";

type Step =
  | { kind: "lead-capture" }
  | { kind: "business-context" }
  | { kind: "task-picker" }
  | { kind: "score" }
  | { kind: "result-preview" };

interface WizardState {
  step: Step;
  lead: LeadCaptureResult | null;
  hourlyCost: number;
  picked: readonly PickedTask[];
  scored: readonly AuditTaskInput[];
  result: AuditResult | null;
}

const INITIAL: WizardState = {
  step: { kind: "lead-capture" },
  lead: null,
  hourlyCost: 65,
  picked: [],
  scored: [],
  result: null,
};

const STEP_INDEX: Record<Step["kind"], number> = {
  "lead-capture": 0,
  "business-context": 1,
  "task-picker": 2,
  score: 3,
  "result-preview": 4,
};

const STEP_LABELS = [
  "Your info",
  "Hourly cost",
  "Pick tasks",
  "Score tasks",
  "Your audit",
] as const;
const TOTAL_STEPS = STEP_LABELS.length;

async function patchAudit(
  auditId: string,
  editToken: string,
  patch: { tasks?: readonly AuditTaskInput[]; hourlyCost?: number },
): Promise<void> {
  try {
    await fetch(`/api/ai-first-audit/${auditId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ editToken, patch }),
    });
  } catch (err) {
    console.error("[ai-first-audit] autosave failed", err);
  }
}

export function Wizard() {
  const [state, setState] = React.useState<WizardState>(INITIAL);

  const handleLeadCaptured = React.useCallback((result: LeadCaptureResult) => {
    setState((s) => ({
      ...s,
      lead: result,
      hourlyCost: result.suggestedHourlyCost,
      step: { kind: "business-context" },
    }));
  }, []);

  const handleHourlyCost = React.useCallback(
    (hourlyCost: number) => {
      setState((s) => ({ ...s, hourlyCost, step: { kind: "task-picker" } }));
      if (state.lead) {
        void patchAudit(state.lead.auditId, state.lead.editToken, { hourlyCost });
      }
    },
    [state.lead],
  );

  const handleTasksPicked = React.useCallback((picked: readonly PickedTask[]) => {
    setState((s) => ({ ...s, picked, step: { kind: "score" } }));
    // Don't persist tasks until they're scored — the schema requires sub-scores.
  }, []);

  const handleScored = React.useCallback(
    (scored: readonly AuditTaskInput[]) => {
      if (!state.lead) return;
      const context: BusinessContext = {
        firstName: state.lead.lead.firstName,
        lastName: state.lead.lead.lastName,
        email: state.lead.lead.email,
        phone: state.lead.lead.phone,
        businessType: state.lead.lead.businessType,
        revenueBand: state.lead.lead.revenueBand,
        role: state.lead.lead.role,
      };
      const result = computeResult(context, scored, state.hourlyCost);
      setState((s) => ({ ...s, scored, result, step: { kind: "result-preview" } }));
      void patchAudit(state.lead.auditId, state.lead.editToken, {
        tasks: scored,
        hourlyCost: state.hourlyCost,
      });
    },
    [state.lead, state.hourlyCost],
  );

  const goBack = React.useCallback((to: Step["kind"]) => {
    setState((s) => ({ ...s, step: { kind: to } }));
  }, []);

  const currentIndex = STEP_INDEX[state.step.kind];
  const progress = ((currentIndex + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8 space-y-2">
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <span>
            Step {currentIndex + 1} of {TOTAL_STEPS} — {STEP_LABELS[currentIndex]}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={state.step.kind}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {state.step.kind === "lead-capture" && (
            <StepLeadCapture onComplete={handleLeadCaptured} />
          )}
          {state.step.kind === "business-context" && (
            <StepBusinessContext
              initialHourlyCost={state.hourlyCost}
              onBack={() => goBack("lead-capture")}
              onContinue={handleHourlyCost}
            />
          )}
          {state.step.kind === "task-picker" && state.lead && (
            <StepTaskPicker
              businessType={state.lead.lead.businessType}
              initialPicked={state.picked}
              onBack={() => goBack("business-context")}
              onContinue={handleTasksPicked}
            />
          )}
          {state.step.kind === "score" && (
            <StepScore
              picked={state.picked}
              onBack={() => goBack("task-picker")}
              onComplete={handleScored}
            />
          )}
          {state.step.kind === "result-preview" && state.result && state.lead && (
            <StepResultPreview
              result={state.result}
              auditId={state.lead.auditId}
              editToken={state.lead.editToken}
              leadEmail={state.lead.lead.email}
              leadFirstName={state.lead.lead.firstName}
              leadPhone={state.lead.lead.phone}
              onBack={() => goBack("score")}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
