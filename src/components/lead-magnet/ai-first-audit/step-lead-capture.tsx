"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";
import {
  BUSINESS_TYPES,
  REVENUE_BANDS,
  ROLES,
  type BusinessType,
  type RevenueBand,
  type Role,
} from "@/lib/ai-first-audit/types";
import { leadCaptureSchema } from "@/lib/validations/ai-first-audit-schemas";
import { trackEvent } from "@/lib/meta-pixel";

export interface LeadCaptureResult {
  readonly auditId: string;
  readonly editToken: string;
  readonly shareSlug: string;
  readonly suggestedHourlyCost: number;
  readonly lead: {
    readonly firstName: string;
    readonly lastName: string | null;
    readonly email: string;
    readonly phone: string;
    readonly businessType: BusinessType;
    readonly revenueBand: RevenueBand;
    readonly role: Role;
  };
}

interface StepLeadCaptureProps {
  readonly onComplete: (result: LeadCaptureResult) => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  businessType: BusinessType | "";
  revenueBand: RevenueBand | "";
  role: Role | "";
}

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  businessType: "",
  revenueBand: "",
  role: "",
};

type SubStep = "name" | "email" | "phone" | "businessType" | "revenueBand" | "role";

const SUB_STEPS: readonly SubStep[] = [
  "name",
  "email",
  "phone",
  "businessType",
  "revenueBand",
  "role",
];

function splitName(full: string): { firstName: string; lastName: string | null } {
  const trimmed = full.trim();
  const parts = trimmed.split(/\s+/);
  const firstName = parts[0] ?? "";
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : null;
  return { firstName, lastName };
}

function validateField(step: SubStep, form: FormState): string | null {
  switch (step) {
    case "name": {
      const { firstName } = splitName(form.fullName);
      if (firstName.length < 1) return "Enter your name";
      return null;
    }
    case "email": {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Enter a valid email";
      return null;
    }
    case "phone": {
      const e164 = normalizeToE164(form.phone);
      if (!/^\+\d{10,15}$/.test(e164)) return "Enter a valid phone number";
      return null;
    }
    case "businessType":
      if (!form.businessType) return "Pick one";
      return null;
    case "revenueBand":
      if (!form.revenueBand) return "Pick one";
      return null;
    case "role":
      if (!form.role) return "Pick one";
      return null;
  }
}

export function StepLeadCapture({ onComplete }: StepLeadCaptureProps) {
  const [form, setForm] = React.useState<FormState>(INITIAL);
  const [stepIndex, setStepIndex] = React.useState(0);
  const [error, setError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  const currentStep = SUB_STEPS[stepIndex] ?? "name";
  const isLast = stepIndex === SUB_STEPS.length - 1;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
  }

  function goNext() {
    const err = validateField(currentStep, form);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }
    void submit();
  }

  function goBack() {
    setError(null);
    if (stepIndex === 0) return;
    setStepIndex((i) => i - 1);
  }

  async function submit() {
    const { firstName, lastName } = splitName(form.fullName);
    const phone = normalizeToE164(form.phone);

    const parsed = leadCaptureSchema.safeParse({
      firstName,
      lastName,
      email: form.email.trim(),
      phone,
      businessType: form.businessType,
      revenueBand: form.revenueBand,
      role: form.role,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/ai-first-audit/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setError(body.error ?? "Something went wrong. Please try again.");
        return;
      }
      const json = (await res.json()) as {
        auditId: string;
        editToken: string;
        shareSlug: string;
        suggestedHourlyCost: number;
      };

      trackEvent(
        "Lead",
        {
          email: parsed.data.email,
          phone: parsed.data.phone,
          firstName: parsed.data.firstName,
          ...(parsed.data.lastName ? { lastName: parsed.data.lastName } : {}),
        },
        { content_name: "ai-first-audit", content_category: "lead-magnet" },
      );

      onComplete({
        auditId: json.auditId,
        editToken: json.editToken,
        shareSlug: json.shareSlug,
        suggestedHourlyCost: json.suggestedHourlyCost,
        lead: {
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName ?? null,
          email: parsed.data.email,
          phone: parsed.data.phone,
          businessType: parsed.data.businessType as BusinessType,
          revenueBand: parsed.data.revenueBand as RevenueBand,
          role: parsed.data.role as Role,
        },
      });
    } catch (err) {
      console.error("[ai-first-audit] start error", err);
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleEnter(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      goNext();
    }
  }

  const subProgress = ((stepIndex + 1) / SUB_STEPS.length) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Get your AI-First Audit</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          We&apos;ll score 5–7 of your team&apos;s tasks and tell you which 3 to automate first.
          Takes about 4 minutes.
        </p>
        <div className="bg-muted mt-4 h-1 w-full overflow-hidden rounded-full">
          <motion.div
            className="bg-primary h-full"
            initial={false}
            animate={{ width: `${subProgress}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
          className="min-h-[180px] space-y-3"
        >
          {currentStep === "name" && (
            <div>
              <Label htmlFor="fullName" className="text-base">
                What&apos;s your full name?
              </Label>
              <Input
                id="fullName"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                onKeyDown={handleEnter}
                autoComplete="name"
                placeholder="Jane Smith"
                autoFocus
                className="mt-2 text-lg"
              />
            </div>
          )}

          {currentStep === "email" && (
            <div>
              <Label htmlFor="email" className="text-base">
                What&apos;s your work email?
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onKeyDown={handleEnter}
                autoComplete="email"
                placeholder="jane@company.com"
                autoFocus
                className="mt-2 text-lg"
              />
            </div>
          )}

          {currentStep === "phone" && (
            <div>
              <Label htmlFor="phone" className="text-base">
                Best phone number?
              </Label>
              <p className="text-muted-foreground mt-1 text-xs">
                We won&apos;t call. It&apos;s for SMS backup if your audit email gets stuck.
              </p>
              <PhoneInput
                id="phone"
                value={form.phone}
                onChange={(value) => update("phone", value)}
                onKeyDown={handleEnter}
                autoFocus
                className="mt-2 text-lg"
              />
            </div>
          )}

          {currentStep === "businessType" && (
            <div>
              <Label className="text-base">What kind of business?</Label>
              <div className="mt-3 grid gap-2">
                {BUSINESS_TYPES.map((opt) => {
                  const active = form.businessType === opt.value;
                  return (
                    <OptionButton
                      key={opt.value}
                      label={opt.label}
                      active={active}
                      onClick={() => {
                        update("businessType", opt.value);
                        setTimeout(() => goNext(), 80);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === "revenueBand" && (
            <div>
              <Label className="text-base">Annual revenue?</Label>
              <div className="mt-3 grid gap-2">
                {REVENUE_BANDS.map((opt) => {
                  const active = form.revenueBand === opt.value;
                  return (
                    <OptionButton
                      key={opt.value}
                      label={opt.label}
                      active={active}
                      onClick={() => {
                        update("revenueBand", opt.value);
                        setTimeout(() => goNext(), 80);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === "role" && (
            <div>
              <Label className="text-base">Your role?</Label>
              <div className="mt-3 grid gap-2">
                {ROLES.map((opt) => {
                  const active = form.role === opt.value;
                  return (
                    <OptionButton
                      key={opt.value}
                      label={opt.label}
                      active={active}
                      onClick={() => {
                        update("role", opt.value);
                        setTimeout(() => goNext(), 80);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {error && <p className="text-destructive text-sm">{error}</p>}

      <div className="flex gap-3">
        {stepIndex > 0 && (
          <Button type="button" onClick={goBack} variant="outline" size="lg" disabled={submitting}>
            <ArrowLeft className="mr-1 h-4 w-4" /> Back
          </Button>
        )}
        {/* Continue button is hidden on radio-style steps — picking an option auto-advances. */}
        {!isSelectStep(currentStep) && (
          <Button
            type="button"
            onClick={goNext}
            size="lg"
            className="ml-auto"
            disabled={submitting}
          >
            {submitting ? "Starting…" : isLast ? "Start my audit" : "Next"}
            {!submitting && <ArrowRight className="ml-1 h-4 w-4" />}
          </Button>
        )}
      </div>
      <p className="text-muted-foreground text-center text-xs">
        We respect your privacy. You can stop at any time and your progress is saved.
      </p>
    </div>
  );
}

function isSelectStep(step: SubStep): boolean {
  return step === "businessType" || step === "revenueBand" || step === "role";
}

interface OptionButtonProps {
  readonly label: string;
  readonly active: boolean;
  readonly onClick: () => void;
}

function OptionButton({ label, active, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border-border w-full rounded-lg border p-3 text-left text-sm transition-colors",
        active ? "border-primary bg-primary/10" : "hover:border-primary/40 hover:bg-muted/40",
      )}
    >
      {label}
    </button>
  );
}
