"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import {
  IMPACT_OPTIONS,
  WEEKLY_HOURS_OPTIONS,
  type FourPointAnswer,
  type ImpactAnswer,
  type ReadinessAnswers,
  type WeeklyHoursAnswer,
  type WorkflowInput,
} from "@/lib/ai-first-audit/types";
import { cn } from "@/lib/utils";
import type { WorkflowSelection } from "./wizard";

interface StepWorkflowQuestionsProps {
  readonly selections: readonly WorkflowSelection[];
  readonly initialWorkflows: readonly WorkflowInput[];
  readonly onBack: () => void;
  readonly onComplete: (workflows: readonly WorkflowInput[]) => void;
}

interface WorkflowAnswers {
  readonly weeklyHours?: WeeklyHoursAnswer;
  readonly impact?: ImpactAnswer;
  readonly readiness: Partial<ReadinessAnswers>;
}

type QuestionKey = "weeklyHours" | "impact" | keyof ReadinessAnswers;
type AnswerValue = WeeklyHoursAnswer | ImpactAnswer | FourPointAnswer;

const QUESTION_KEYS: readonly QuestionKey[] = [
  "weeklyHours",
  "impact",
  "sameSteps",
  "clearRules",
  "informationEasyToFind",
];

const FOUR_POINT_OPTIONS: Record<keyof ReadinessAnswers, readonly { value: FourPointAnswer; label: string }[]> = {
  sameSteps: [
    { value: 1, label: "The steps change every time" },
    { value: 2, label: "Some steps repeat" },
    { value: 3, label: "Most steps repeat" },
    { value: 4, label: "The same steps repeat" },
  ],
  clearRules: [
    { value: 1, label: "Few cases follow clear rules" },
    { value: 2, label: "Some cases follow clear rules" },
    { value: 3, label: "Most cases follow clear rules" },
    { value: 4, label: "Almost every case follows clear rules" },
  ],
  informationEasyToFind: [
    { value: 1, label: "It is hard to find" },
    { value: 2, label: "It is scattered" },
    { value: 3, label: "Most of it is together" },
    { value: 4, label: "It is easy to find" },
  ],
};

const QUESTION_LABELS: Record<QuestionKey, string> = {
  weeklyHours: "How much team time does this take each week?",
  impact: "When this slips, what gets hurt most?",
  sameSteps: "Does it follow the same steps each time?",
  clearRules: "Can clear rules handle most cases?",
  informationEasyToFind: "Is the needed information easy to find?",
};

function initialAnswers(
  selections: readonly WorkflowSelection[],
  workflows: readonly WorkflowInput[],
): Record<string, WorkflowAnswers> {
  return Object.fromEntries(
    selections.map((selection) => {
      const saved = workflows.find((workflow) => workflow.id === selection.id);
      return [
        selection.id,
        saved
          ? {
              weeklyHours: saved.weeklyHours,
              impact: saved.impact,
              readiness: saved.readiness,
            }
          : { readiness: {} },
      ];
    }),
  );
}

function isComplete(answers: WorkflowAnswers | undefined): answers is Required<WorkflowAnswers> & {
  readiness: ReadinessAnswers;
} {
  return Boolean(
    answers?.weeklyHours &&
    answers.impact &&
    answers.readiness.sameSteps &&
    answers.readiness.clearRules &&
    answers.readiness.informationEasyToFind,
  );
}

export function StepWorkflowQuestions({
  selections,
  initialWorkflows,
  onBack,
  onComplete,
}: StepWorkflowQuestionsProps) {
  const [workflowIndex, setWorkflowIndex] = React.useState(0);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, WorkflowAnswers>>(() =>
    initialAnswers(selections, initialWorkflows),
  );
  const [error, setError] = React.useState<string | null>(null);
  const currentWorkflow = selections[workflowIndex];
  const questionKey = QUESTION_KEYS[questionIndex]!;
  const currentAnswers = currentWorkflow ? answers[currentWorkflow!.id] : undefined;

  React.useEffect(() => {
    document.querySelector<HTMLElement>("[data-workflow-question-heading]")?.focus();
  }, [workflowIndex, questionIndex]);

  if (!currentWorkflow) {
    return (
      <section className="border-border bg-card rounded-xl border p-5 sm:p-8">
        <h2 data-wizard-heading tabIndex={-1} className="font-heading text-2xl font-bold outline-none">
          Choose workflows first.
        </h2>
        <Button type="button" variant="outline" className="mt-6" onClick={onBack}>
          Back to workflows
        </Button>
      </section>
    );
  }

  const selectedValue =
    questionKey === "weeklyHours" || questionKey === "impact"
      ? currentAnswers?.[questionKey]
      : currentAnswers?.readiness[questionKey];
  const options =
    questionKey === "weeklyHours"
      ? WEEKLY_HOURS_OPTIONS
      : questionKey === "impact"
        ? IMPACT_OPTIONS
        : FOUR_POINT_OPTIONS[questionKey];

  function finish(nextAnswers: Record<string, WorkflowAnswers>) {
    const workflows: WorkflowInput[] = [];
    for (const selection of selections) {
      const workflowAnswers = nextAnswers[selection.id];
      if (!isComplete(workflowAnswers)) {
        setError(AUDIT_COPY.choiceError);
        return;
      }
      workflows.push({
        ...selection,
        weeklyHours: workflowAnswers.weeklyHours,
        impact: workflowAnswers.impact,
        readiness: workflowAnswers.readiness,
      });
    }
    onComplete(workflows);
  }

  function moveForward(nextAnswers: Record<string, WorkflowAnswers>) {
    if (questionIndex < QUESTION_KEYS.length - 1) {
      setQuestionIndex((index) => index + 1);
      return;
    }
    if (workflowIndex < selections.length - 1) {
      setWorkflowIndex((index) => index + 1);
      setQuestionIndex(0);
      return;
    }
    finish(nextAnswers);
  }

  function selectAnswer(value: AnswerValue) {
    setError(null);
    const existing = answers[currentWorkflow!.id] ?? { readiness: {} };
    const updated: WorkflowAnswers =
      questionKey === "weeklyHours"
        ? { ...existing, weeklyHours: value as WeeklyHoursAnswer }
        : questionKey === "impact"
          ? { ...existing, impact: value as ImpactAnswer }
          : {
              ...existing,
              readiness: { ...existing.readiness, [questionKey]: value as FourPointAnswer },
            };
    const nextAnswers = { ...answers, [currentWorkflow!.id]: updated };
    setAnswers(nextAnswers);
    moveForward(nextAnswers);
  }

  function goBack() {
    setError(null);
    if (questionIndex > 0) {
      setQuestionIndex((index) => index - 1);
      return;
    }
    if (workflowIndex > 0) {
      setWorkflowIndex((index) => index - 1);
      setQuestionIndex(QUESTION_KEYS.length - 1);
      return;
    }
    onBack();
  }

  const optionRows = React.Children.toArray(
    options.map((option) => {
      const checked = String(selectedValue) === String(option.value);
      return React.createElement(
        "label",
        {
          className: cn(
            "border-border bg-background focus-within:ring-ring flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 transition-[border-color,background-color] duration-150 focus-within:ring-[3px] focus-within:ring-inset",
            checked && "border-primary bg-secondary",
          ),
        },
        React.createElement("input", {
          type: "radio",
          name: `${currentWorkflow.id}-${questionKey}`,
          value: String(option.value),
          checked,
          onChange: () => selectAnswer(option.value),
          className: "sr-only",
        }),
        React.createElement(
          "span",
          {
            "aria-hidden": true,
            className: cn(
              "border-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full border-2 forced-colors:border-[ButtonText]",
              checked && "border-primary bg-primary text-primary-foreground",
            ),
          },
          checked ? React.createElement(Check, { className: "size-4", strokeWidth: 3 }) : null,
        ),
        React.createElement("span", { className: "text-sm font-medium" }, option.label),
      );
    }),
  );

  return (
    <section className="border-border bg-card rounded-xl border p-5 sm:p-8">
      <p className="text-muted-foreground text-sm">
        Workflow {workflowIndex + 1} of {selections.length}. Question {questionIndex + 1} of 5.
      </p>
      <h2
        data-wizard-heading
        data-workflow-question-heading
        tabIndex={-1}
        className="font-heading mt-2 text-2xl font-bold break-words outline-none"
      >
        {currentWorkflow.title}
      </h2>
      <p className="text-muted-foreground mt-2">{AUDIT_COPY.scoringIntro}</p>

      <fieldset className="mt-7">
        <legend className="font-heading text-lg font-semibold">{QUESTION_LABELS[questionKey]}</legend>
        <div className="mt-4 space-y-2">{optionRows}</div>
      </fieldset>

      <p role="alert" className="text-destructive mt-4 min-h-5 text-sm">
        {error}
      </p>
      <div className="mt-4">
        <Button type="button" variant="outline" size="lg" onClick={goBack}>
          Back
        </Button>
      </div>
    </section>
  );
}
