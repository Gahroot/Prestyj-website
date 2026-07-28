"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import { getWorkflowPresets } from "@/lib/ai-first-audit/task-library";
import type { AuditBusinessType, ToolCategory } from "@/lib/ai-first-audit/types";
import type { WorkflowSelection } from "./wizard";
import { TaskRow } from "./task-row";

/** @deprecated Version 1 compatibility for the retired score component. */
export interface PickedTask {
  readonly id: string;
  readonly title: string;
  readonly category: ToolCategory;
  readonly custom: boolean;
}

interface StepTaskPickerProps {
  readonly businessType: AuditBusinessType;
  readonly initialSelections: readonly WorkflowSelection[];
  readonly onBack: () => void;
  readonly onContinue: (selections: readonly WorkflowSelection[]) => void;
}

const MIN_WORKFLOWS = 3;
const MAX_WORKFLOWS = 5;

export function StepTaskPicker({
  businessType,
  initialSelections,
  onBack,
  onContinue,
}: StepTaskPickerProps) {
  const presets = React.useMemo(() => getWorkflowPresets(businessType), [businessType]);
  const [selections, setSelections] = React.useState<WorkflowSelection[]>(() => [
    ...initialSelections,
  ]);
  const [customTitle, setCustomTitle] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const selectedIds = React.useMemo(
    () => new Set(selections.map((selection) => selection.id)),
    [selections],
  );
  const customSelections = selections.filter((selection) => selection.isCustom);

  function togglePreset(id: string, selected: boolean) {
    setError(null);
    if (!selected) {
      setSelections((current) => current.filter((workflow) => workflow.id !== id));
      return;
    }
    if (selections.length >= MAX_WORKFLOWS) {
      setError("You can choose up to 5 workflows. Remove one to add another.");
      return;
    }
    const preset = presets.find((workflow) => workflow.id === id);
    if (!preset) return;
    setSelections((current) => [...current, { ...preset, isCustom: false }]);
  }

  function addCustomWorkflow() {
    const title = customTitle.trim();
    if (title.length < 3) {
      setError("Enter at least 3 characters for your workflow.");
      return;
    }
    if (title.length > 120) {
      setError("Keep the workflow name under 120 characters.");
      return;
    }
    if (selections.length >= MAX_WORKFLOWS) {
      setError("You can choose up to 5 workflows. Remove one first.");
      return;
    }
    if (selections.some((workflow) => workflow.title.toLowerCase() === title.toLowerCase())) {
      setError("That workflow is already on your list.");
      return;
    }
    setSelections((current) => [
      ...current,
      {
        id: `custom-${crypto.randomUUID().slice(0, 12)}`,
        title,
        category: "general",
        isCustom: true,
      },
    ]);
    setCustomTitle("");
    setError(null);
  }

  function continueToQuestions() {
    if (selections.length < MIN_WORKFLOWS) {
      setError("Choose at least 3 workflows to continue.");
      return;
    }
    onContinue(selections);
  }

  const presetRows = React.createElement(
    React.Fragment,
    null,
    ...presets.map((preset) =>
      React.createElement(TaskRow, {
        id: preset.id,
        title: preset.title,
        selected: selectedIds.has(preset.id),
        disabled: selections.length >= MAX_WORKFLOWS && !selectedIds.has(preset.id),
        onToggle: togglePreset,
      }),
    ),
  );
  const customRows = React.createElement(
    React.Fragment,
    null,
    ...customSelections.map((workflow) =>
      React.createElement(TaskRow, {
        id: workflow.id,
        title: workflow.title,
        selected: true,
        removable: true,
        onToggle: (id: string) =>
          setSelections((current) => current.filter((item) => item.id !== id)),
        onRemove: (id: string) =>
          setSelections((current) => current.filter((item) => item.id !== id)),
      }),
    ),
  );

  return (
    <section className="border-border bg-card rounded-xl border p-5 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2
            data-wizard-heading
            tabIndex={-1}
            className="font-heading text-2xl font-bold outline-none"
          >
            {AUDIT_COPY.workflowHeading}
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl">{AUDIT_COPY.workflowSupport}</p>
        </div>
        <p className="text-muted-foreground shrink-0 text-sm" aria-live="polite">
          {selections.length} of {MAX_WORKFLOWS} chosen
        </p>
      </div>

      <div className="mt-7 space-y-2" aria-label="Workflow choices">
        {presetRows}
      </div>

      {customSelections.length > 0 && (
        <div className="border-border mt-7 space-y-2 border-t pt-6">
          <h3 className="font-heading text-base font-semibold">Your workflows</h3>
          {customRows}
        </div>
      )}

      <div className="border-border mt-7 border-t pt-6">
        <Label htmlFor="custom-workflow">Add a workflow we missed</Label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <Input
            id="custom-workflow"
            value={customTitle}
            onChange={(event) => setCustomTitle(event.target.value)}
            maxLength={120}
            placeholder="Example: Prepare client handoffs"
            className="h-11 flex-1 text-base"
          />
          <Button
            type="button"
            variant="outline"
            onClick={addCustomWorkflow}
            className="min-h-11"
            disabled={selections.length >= MAX_WORKFLOWS}
          >
            <Plus aria-hidden="true" />
            Add workflow
          </Button>
        </div>
      </div>

      <p role="alert" className="text-destructive mt-4 min-h-5 text-sm">
        {error}
      </p>
      <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          Back
        </Button>
        <Button type="button" size="lg" onClick={continueToQuestions}>
          Continue to questions
        </Button>
      </div>
    </section>
  );
}
