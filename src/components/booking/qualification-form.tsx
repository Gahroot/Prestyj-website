"use client";

import { useRef, useState, type FormEvent, type ReactElement } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitLead, formatPhoneNumber } from "@/lib/api";
import { trackEvent } from "@/lib/meta-pixel";
import {
  qualificationFormSchema,
  type QualificationFormData,
} from "@/lib/validations/form-schemas";

export type QualificationData = QualificationFormData;

interface QualificationFormProps {
  onComplete: (data: QualificationData) => void;
}

const fields = [
  {
    name: "firstName",
    label: "Name",
    type: "text",
    autoComplete: "name",
    placeholder: "Jane Smith",
  },
  {
    name: "email",
    label: "Work email",
    type: "email",
    autoComplete: "email",
    placeholder: "jane@firm.com",
  },
  {
    name: "companyName",
    label: "Company",
    type: "text",
    autoComplete: "organization",
    placeholder: "Firm name",
  },
  {
    name: "phone",
    label: "US phone number",
    type: "tel",
    autoComplete: "tel-national",
    placeholder: "(555) 123-4567",
  },
] as const;

export function QualificationForm({ onComplete }: QualificationFormProps): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<QualificationData>({
    firstName: "",
    email: "",
    phone: "",
    companyName: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QualificationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: keyof QualificationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitError(null);

    const result = qualificationFormSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof QualificationData, string>> = {};
      for (const field of fields) {
        const issue = result.error.issues.find((item) => item.path[0] === field.name);
        if (issue) newErrors[field.name] = issue.message;
      }
      setErrors(newErrors);
      const firstInvalidField = fields.find((field) => newErrors[field.name]);
      if (firstInvalidField)
        formRef.current
          ?.querySelector<HTMLInputElement>(`[name="${firstInvalidField.name}"]`)
          ?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const validated = result.data;
      await submitLead({
        first_name: validated.firstName,
        phone_number: formatPhoneNumber(validated.phone),
        email: validated.email,
        company_name: validated.companyName,
        notes: "Source: book-demo page (single-step form)",
        source: "book_demo_form",
        trigger_call: false,
        trigger_text: false,
      });
      trackEvent("Lead", {
        email: validated.email,
        phone: validated.phone,
        firstName: validated.firstName,
      });
      onComplete(validated);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl"
      noValidate
      aria-busy={isSubmitting}
    >
      <p className="text-muted-foreground mb-4 text-xs">All fields are required.</p>
      <p className="sr-only" role="alert">
        {fields
          .map((field) => errors[field.name])
          .filter(Boolean)
          .join(". ")}
      </p>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={formData[field.name]}
              required
              readOnly={isSubmitting}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              onChange={(event) => handleInputChange(field.name, event.target.value)}
              className={cn(
                "bg-card focus-visible:ring-ring w-full rounded border px-4 py-3 transition-colors focus-visible:ring-2 focus-visible:outline-none",
                errors[field.name] ? "border-destructive" : "border-input",
              )}
              placeholder={field.placeholder}
            />
            {errors[field.name] ? (
              <p id={`${field.name}-error`} className="text-destructive mt-1.5 text-sm">
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      {submitError ? (
        <p role="alert" className="text-destructive mt-4 text-sm leading-6">
          {submitError} Your details are still here. Please try again or email{" "}
          <a href="mailto:hello@prestyj.com" className="underline underline-offset-4">
            hello@prestyj.com
          </a>
          .
        </p>
      ) : null}
      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2
                aria-hidden="true"
                className="mr-2 h-4 w-4 animate-spin motion-reduce:animate-none"
              />
              Opening the scheduler…
            </>
          ) : (
            <>
              See available times
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      <p className="sr-only" role="status">
        {isSubmitting ? "Sending your request. The scheduler will open after confirmation." : ""}
      </p>
      <p className="text-muted-foreground mt-5 text-center text-xs leading-5">
        We use these details to respond and load our Cal.com scheduler. See our{" "}
        <a href="/privacy" className="hover:text-foreground underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
