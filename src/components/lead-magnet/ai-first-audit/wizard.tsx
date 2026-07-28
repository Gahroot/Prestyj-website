"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { computeResultV2 } from "@/lib/ai-first-audit/compute-result";
import { trackAuditEvent } from "@/lib/meta-pixel";
import { StepBusinessProfile } from "./step-business-profile";
import { StepTaskPicker } from "./step-task-picker";
import { StepWorkflowQuestions } from "./step-workflow-questions";
import { StepResultPreview } from "./step-result-preview";
import { StepReportRequest } from "./step-report-request";
import type {
  AuditProfile,
  AuditResultV2,
  WorkflowCategory,
  WorkflowInput,
} from "@/lib/ai-first-audit/types";

export type WizardStep = "profile" | "workflows" | "questions" | "preview" | "request";

export interface WorkflowSelection {
  readonly id: string;
  readonly title: string;
  readonly category: WorkflowCategory;
  readonly isCustom: boolean;
}

interface WizardState {
  readonly step: WizardStep;
  readonly profile: AuditProfile | null;
  readonly selections: readonly WorkflowSelection[];
  readonly workflows: readonly WorkflowInput[];
  readonly result: AuditResultV2 | null;
  readonly startedAt: number;
}

interface StoredDraft {
  readonly version: 2;
  readonly step: WizardStep;
  readonly profile: AuditProfile | null;
  readonly selections: readonly WorkflowSelection[];
  readonly workflows: readonly WorkflowInput[];
  readonly startedAt: number;
}

const STORAGE_KEY = "prestyj-ai-first-audit-v2";
const STEPS: readonly WizardStep[] = ["profile", "workflows", "questions", "preview", "request"];
const STEP_LABELS: Record<WizardStep, string> = {
  profile: "Business",
  workflows: "Workflows",
  questions: "Questions",
  preview: "Top result",
  request: "Full report",
};

function isWizardStep(value: unknown): value is WizardStep {
  return typeof value === "string" && STEPS.includes(value as WizardStep);
}

function loadDraft(): StoredDraft | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<StoredDraft>;
    if (value.version !== 2 || !isWizardStep(value.step) || !Array.isArray(value.selections)) {
      return null;
    }
    return {
      version: 2,
      step: value.step,
      profile: value.profile ?? null,
      selections: value.selections,
      workflows: Array.isArray(value.workflows) ? value.workflows : [],
      startedAt: typeof value.startedAt === "number" ? value.startedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

function resultForDraft(draft: StoredDraft): AuditResultV2 | null {
  if (!draft.profile || draft.workflows.length < 3) return null;
  try {
    return computeResultV2(draft.profile, draft.workflows);
  } catch {
    return null;
  }
}

function stepFromUrl(): WizardStep | null {
  const value = new URL(window.location.href).searchParams.get("step");
  return isWizardStep(value) ? value : null;
}

export function Wizard() {
  const [state, setState] = React.useState<WizardState>(() => ({
    step: "profile",
    profile: null,
    selections: [],
    workflows: [],
    result: null,
    startedAt: Date.now(),
  }));
  const [hydrated, setHydrated] = React.useState(false);
  const startedTracked = React.useRef(false);
  const funnelEvents = React.useRef(new Set<string>());

  const trackStart = React.useCallback(() => {
    if (startedTracked.current) return;
    startedTracked.current = true;
    trackAuditEvent("AuditStarted", { stepName: state.step });
  }, [state.step]);

  React.useEffect(() => {
    if (funnelEvents.current.has("viewed")) return;
    funnelEvents.current.add("viewed");
    trackAuditEvent("AuditViewed", { stepName: "landing" });
  }, []);

  React.useEffect(() => {
    const draft = loadDraft();
    const requestedStep = stepFromUrl();
    if (draft) {
      setState({
        ...draft,
        step: requestedStep ?? draft.step,
        result: resultForDraft(draft),
      });
    } else if (requestedStep === "profile") {
      setState((current) => ({ ...current, step: requestedStep }));
    }
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    const draft: StoredDraft = {
      version: 2,
      step: state.step,
      profile: state.profile,
      selections: state.selections,
      workflows: state.workflows,
      startedAt: state.startedAt,
    };
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [hydrated, state]);

  React.useEffect(() => {
    const onPopState = () => {
      const step = stepFromUrl();
      if (step) setState((current) => ({ ...current, step }));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    document.querySelector<HTMLElement>("[data-wizard-heading]")?.focus();
    if (state.step === "preview" && state.result && !funnelEvents.current.has("preview")) {
      funnelEvents.current.add("preview");
      trackAuditEvent("AuditPreviewViewed", {
        ...(state.profile ? { businessType: state.profile.businessType } : {}),
        selectedWorkflowCount: state.workflows.length,
        stepName: "preview",
        readinessBand: state.result.topThree[0]!.readinessLabel,
      });
    }
  }, [hydrated, state.profile, state.result, state.step, state.workflows.length]);

  const goTo = React.useCallback((step: WizardStep) => {
    setState((current) => ({ ...current, step }));
    const url = new URL(window.location.href);
    url.searchParams.set("step", step);
    window.history.pushState({ step }, "", url);
  }, []);

  const currentIndex = STEPS.indexOf(state.step);
  const progress = ((currentIndex + 1) / STEPS.length) * 100;

  return (
    <div
      className="mx-auto w-full max-w-3xl"
      aria-busy={!hydrated}
      onPointerDownCapture={trackStart}
      onKeyDownCapture={trackStart}
    >
      <div className="mb-6 space-y-2">
        <div className="text-muted-foreground flex items-center justify-between gap-4 text-sm">
          <span>{STEP_LABELS[state.step]}</span>
          <span>
            {currentIndex + 1} of {STEPS.length}
          </span>
        </div>
        <Progress
          value={progress}
          aria-label="Audit progress"
          aria-valuetext={`${STEP_LABELS[state.step]}, step ${currentIndex + 1} of ${STEPS.length}`}
        />
      </div>

      {state.step === "profile" && (
        <StepBusinessProfile
          initialProfile={state.profile}
          onContinue={(profile) => {
            trackStart();
            trackAuditEvent("AuditProfileComplete", {
              businessType: profile.businessType,
              stepName: "profile",
            });
            setState((current) => ({
              ...current,
              profile,
              selections:
                current.profile?.businessType === profile.businessType ? current.selections : [],
              workflows:
                current.profile?.businessType === profile.businessType ? current.workflows : [],
              result: current.profile?.businessType === profile.businessType ? current.result : null,
            }));
            goTo("workflows");
          }}
        />
      )}
      {state.step === "workflows" && state.profile && (
        <StepTaskPicker
          businessType={state.profile.businessType}
          initialSelections={state.selections}
          onBack={() => goTo("profile")}
          onContinue={(selections) => {
            trackAuditEvent("AuditWorkflowsPicked", {
              businessType: state.profile!.businessType,
              selectedWorkflowCount: selections.length,
              stepName: "workflows",
            });
            setState((current) => ({ ...current, selections }));
            goTo("questions");
          }}
        />
      )}
      {state.step === "questions" && state.profile && (
        <StepWorkflowQuestions
          selections={state.selections}
          initialWorkflows={state.workflows}
          onBack={() => goTo("workflows")}
          onComplete={(workflows) => {
            const result = computeResultV2(state.profile!, workflows);
            trackAuditEvent("AuditScoringComplete", {
              businessType: state.profile!.businessType,
              selectedWorkflowCount: workflows.length,
              stepName: "questions",
              readinessBand: result.topThree[0]!.readinessLabel,
            });
            setState((current) => ({ ...current, workflows, result }));
            goTo("preview");
          }}
        />
      )}
      {state.step === "preview" && state.result && (
        <StepResultPreview
          result={state.result}
          onBack={() => goTo("questions")}
          onContinue={() => goTo("request")}
        />
      )}
      {state.step === "request" && state.profile && state.result && (
        <StepReportRequest
          profile={state.profile}
          workflows={state.workflows}
          result={state.result}
          startedAt={state.startedAt}
          onBack={() => goTo("preview")}
          onReportCreated={clearAuditDraft}
        />
      )}
    </div>
  );
}

export function clearAuditDraft(): void {
  window.sessionStorage.removeItem(STORAGE_KEY);
}
