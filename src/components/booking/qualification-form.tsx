"use client";

import { useRef, useState, type FormEvent, type ReactElement } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/meta-pixel";
import { AUM_BANDS, FIRM_TYPES } from "@/lib/attribution/qualification";
import { capabilities } from "@/lib/institutional/capabilities";
import {
  qualificationFormSchema,
  type QualificationFormData,
} from "@/lib/validations/form-schemas";

export type QualificationData = QualificationFormData;

type FieldName = "firstName" | "email" | "firmType" | "aumBand" | "workflow";
const FIELD_ORDER: readonly FieldName[] = ["firstName", "email", "firmType", "aumBand", "workflow"];

interface QualificationFormProps {
  onComplete: (data: QualificationData) => void;
  initialWorkflow?: string;
}

const inputClass =
  "bg-card focus-visible:ring-ring w-full rounded border px-4 py-3 transition-colors focus-visible:ring-2 focus-visible:outline-none";

type Draft = {
  firstName: string;
  email: string;
  firmType: string;
  aumBand: string;
  workflow: string;
};

export function QualificationForm({
  onComplete,
  initialWorkflow = "",
}: QualificationFormProps): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [draft, setDraft] = useState<Draft>({
    firstName: "",
    email: "",
    firmType: "",
    aumBand: "",
    workflow: capabilities.some((c) => c.slug === initialWorkflow) ? initialWorkflow : "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const update = (field: FieldName, value: string) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const result = qualificationFormSchema.safeParse({
      ...draft,
      aumBand: draft.firmType === "fund" && draft.aumBand ? draft.aumBand : undefined,
    });
    if (!result.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && FIELD_ORDER.includes(field as FieldName)) {
          next[field as FieldName] ??= issue.message;
        }
      }
      setErrors(next);
      const first = FIELD_ORDER.find((field) => next[field]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    trackEvent("Lead", { email: result.data.email, firstName: result.data.firstName });
    onComplete(result.data);
  };

  const describedBy = (field: FieldName) => (errors[field] ? `${field}-error` : undefined);
  const errorText = (field: FieldName) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-destructive mt-1.5 text-sm">
        {errors[field]}
      </p>
    ) : null;
  const borderFor = (field: FieldName) => (errors[field] ? "border-destructive" : "border-input");

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl" noValidate>
      <p className="sr-only" role="alert">
        {FIELD_ORDER.map((field) => errors[field])
          .filter(Boolean)
          .join(". ")}
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            required
            value={draft.firstName}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={describedBy("firstName")}
            onChange={(event) => update("firstName", event.target.value)}
            className={cn(inputClass, borderFor("firstName"))}
          />
          {errorText("firstName")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@firm.com"
            required
            value={draft.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            onChange={(event) => update("email", event.target.value)}
            className={cn(inputClass, borderFor("email"))}
          />
          {errorText("email")}
        </div>
        <div>
          <label htmlFor="firmType" className="mb-1.5 block text-sm font-medium">
            Firm type
          </label>
          <select
            id="firmType"
            name="firmType"
            required
            value={draft.firmType}
            aria-invalid={Boolean(errors.firmType)}
            aria-describedby={describedBy("firmType")}
            onChange={(event) => update("firmType", event.target.value)}
            className={cn(inputClass, borderFor("firmType"))}
          >
            <option value="" disabled>
              Select one
            </option>
            {FIRM_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errorText("firmType")}
        </div>
        {draft.firmType === "fund" ? (
          <div>
            <label htmlFor="aumBand" className="mb-1.5 block text-sm font-medium">
              Assets under management
            </label>
            <select
              id="aumBand"
              name="aumBand"
              required
              value={draft.aumBand}
              aria-invalid={Boolean(errors.aumBand)}
              aria-describedby={describedBy("aumBand")}
              onChange={(event) => update("aumBand", event.target.value)}
              className={cn(inputClass, borderFor("aumBand"))}
            >
              <option value="" disabled>
                Select one
              </option>
              {AUM_BANDS.map((band) => (
                <option key={band.value} value={band.value}>
                  {band.label}
                </option>
              ))}
            </select>
            {errorText("aumBand")}
          </div>
        ) : null}
        <div>
          <label htmlFor="workflow" className="mb-1.5 block text-sm font-medium">
            Workflow to discuss{" "}
            <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <select
            id="workflow"
            name="workflow"
            value={draft.workflow}
            onChange={(event) => update("workflow", event.target.value)}
            className={cn(inputClass, "border-input")}
          >
            <option value="">Not sure yet</option>
            {capabilities.map((capability) => (
              <option key={capability.slug} value={capability.slug}>
                {capability.navLabel}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full">
          See available times
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <p className="text-muted-foreground mt-5 text-center text-xs leading-5">
        Your answers, and how you found this site, are attached to the Cal.com booking so we can
        route it. See our{" "}
        <a href="/privacy" className="hover:text-foreground underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
