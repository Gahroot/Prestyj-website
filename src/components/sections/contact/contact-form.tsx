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
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
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
          className="mt-1.5"
          required
        />
        {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name}</p>}
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
          className="mt-1.5"
          required
        />
        {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email}</p>}
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
          className="mt-1.5"
        />
        {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <Label htmlFor="contact-message">How can we help?</Label>
        <Textarea
          id="contact-message"
          placeholder="Tell us what you're trying to solve — leads, response time, qualification, anything."
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          className="mt-1.5 min-h-32"
          required
        />
        {errors.message && <p className="text-destructive mt-1 text-sm">{errors.message}</p>}
      </div>

      {status.kind === "error" && (
        <p className="text-destructive text-sm" role="alert">
          {status.message}
        </p>
      )}

      {status.kind === "success" && (
        <p
          className="text-success border-success/30 bg-success/5 rounded-md border p-3 text-sm"
          role="status"
        >
          {status.message}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>

      <p className="text-muted-foreground text-center text-xs">
        We typically reply within one business day. For anything urgent, book a demo and we&apos;ll
        meet live.
      </p>
    </form>
  );
}
