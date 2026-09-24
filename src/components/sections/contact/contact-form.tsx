"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { contactSchema, type ContactInput } from "@/lib/validations/contact-schemas";

type Status =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const initialForm: ContactInput = {
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<ContactInput>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const updateField = <K extends keyof ContactInput>(field: K, value: ContactInput[K]): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus({ kind: "idle" });

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const fieldName = issue.path[0];
        if (typeof fieldName === "string" && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      setErrors(fieldErrors);
      const firstField = Object.keys(fieldErrors)[0];
      if (firstField) document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        setStatus({
          kind: "error",
          message:
            payload.error ??
            "Something went wrong. Please email hello@prestyj.com and we'll get right back to you.",
        });
        return;
      }

      setStatus({
        kind: "success",
        message: payload.message ?? "Thanks — we'll be in touch shortly.",
      });
      setFormData(initialForm);
    } catch (err) {
      console.error("[contact-form] submit failed:", err);
      setStatus({
        kind: "error",
        message: "Network error. Please email hello@prestyj.com and we'll get right back to you.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from humans, irresistible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website ?? ""}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="mt-1.5"
          required
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="text-destructive mt-1 text-sm">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="mt-1.5"
          required
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="text-destructive mt-1 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-phone">
          Phone <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <PhoneInput
          id="contact-phone"
          value={formData.phone ?? ""}
          onChange={(value) => updateField("phone", value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className="mt-1.5"
        />
        {errors.phone && (
          <p id="contact-phone-error" role="alert" className="text-destructive mt-1 text-sm">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-message">How can we help?</Label>
        <Textarea
          id="contact-message"
          placeholder="Name the workflow, systems, current output, and where it gets stuck."
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="mt-1.5 min-h-32"
          required
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="text-destructive mt-1 text-sm">
            {errors.message}
          </p>
        )}
      </div>

      {status.kind === "error" && (
        <p className="text-destructive text-sm" role="alert">
          {status.message}
        </p>
      )}

      {status.kind === "success" && (
        <p className="text-foreground rounded-md border p-3 text-sm" role="status">
          {status.message}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>

      <p className="text-muted-foreground text-center text-xs leading-5">
        We use these details to respond and route your request. See our{" "}
        <a href="/privacy" className="hover:text-foreground underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
