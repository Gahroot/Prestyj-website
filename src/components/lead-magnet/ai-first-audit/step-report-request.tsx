"use client";

import * as React from "react";
import { ArrowRight, MailWarning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import type { AuditProfile, AuditResultV2, WorkflowInput } from "@/lib/ai-first-audit/types";
import { trackAuditLead } from "@/lib/meta-pixel";

interface StepReportRequestProps {
  readonly profile: AuditProfile;
  readonly workflows: readonly WorkflowInput[];
  readonly result: AuditResultV2;
  readonly startedAt: number;
  readonly onBack: () => void;
  readonly onReportCreated: () => void;
}

type RequestStatus = "idle" | "pending" | "error" | "email-warning" | "success";

interface CompletionResponse {
  readonly reportUrl?: string;
  readonly emailDelivery?: "sent" | "failed" | "already-requested";
  readonly error?: string;
}

export function StepReportRequest({
  profile,
  workflows,
  result,
  startedAt,
  onBack,
  onReportCreated,
}: StepReportRequestProps) {
  const [firstName, setFirstName] = React.useState("");
  const [workEmail, setWorkEmail] = React.useState("");
  const [followupOptIn, setFollowupOptIn] = React.useState(false);
  const [companyWebsite, setCompanyWebsite] = React.useState("");
  const [status, setStatus] = React.useState<RequestStatus>("idle");
  const [message, setMessage] = React.useState("");
  const [reportUrl, setReportUrl] = React.useState<string | null>(null);
  const submissionKey = React.useRef<string | null>(null);
  const redirectTimer = React.useRef<number | null>(null);
  const leadTracked = React.useRef(false);

  React.useEffect(
    () => () => {
      if (redirectTimer.current !== null) window.clearTimeout(redirectTimer.current);
    },
    [],
  );

  async function requestReport() {
    if (!firstName.trim()) {
      setStatus("error");
      setMessage("Enter your first name.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(workEmail.trim())) {
      setStatus("error");
      setMessage("Enter a valid work email.");
      return;
    }

    setStatus("pending");
    setMessage(AUDIT_COPY.pending);
    submissionKey.current ??= crypto.randomUUID();

    try {
      const response = await fetch("/api/ai-first-audit/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profile,
          workflows,
          contact: { firstName, workEmail },
          consent: { followupOptIn },
          submissionKey: submissionKey.current,
          companyWebsite,
          completionTimeMs: Date.now() - startedAt,
        }),
      });
      const body = (await response.json().catch(() => ({}))) as CompletionResponse;
      if (!response.ok || !body.reportUrl) {
        setStatus("error");
        setMessage(body.error ?? "We could not build the report. Your answers are still saved.");
        return;
      }

      setReportUrl(body.reportUrl);
      if (!leadTracked.current) {
        leadTracked.current = true;
        trackAuditLead(
          { email: workEmail.trim().toLowerCase(), firstName: firstName.trim() },
          {
            businessType: profile.businessType,
            selectedWorkflowCount: workflows.length,
            stepName: "request",
            readinessBand: result.topThree[0]!.readinessLabel,
          },
        );
      }
      onReportCreated();
      if (body.emailDelivery === "failed") {
        setStatus("email-warning");
        setMessage("Your report is ready, but the email did not send. Try the email again or open the report now.");
        redirectTimer.current = window.setTimeout(() => {
          window.location.assign(`${body.reportUrl}?email=failed`);
        }, 5000);
        return;
      }

      setStatus("success");
      setMessage(AUDIT_COPY.success);
      redirectTimer.current = window.setTimeout(() => window.location.assign(body.reportUrl!), 600);
    } catch {
      setStatus("error");
      setMessage("The network request failed. Your answers are still saved. Try again.");
    }
  }

  function retryEmail() {
    if (redirectTimer.current !== null) window.clearTimeout(redirectTimer.current);
    void requestReport();
  }

  return (
    <form
      className="border-border bg-card rounded-xl border p-5 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        void requestReport();
      }}
    >
      <h2 data-wizard-heading tabIndex={-1} className="font-heading text-2xl font-bold outline-none">
        {AUDIT_COPY.reportFormHeading}
      </h2>
      <p className="text-muted-foreground mt-2">{AUDIT_COPY.reportFormSupport}</p>
      <p className="text-muted-foreground mt-1 text-sm">
        The report email sends now. Follow-ups are optional.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="audit-first-name">First name</Label>
          <Input
            id="audit-first-name"
            name="given-name"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="h-11 text-base"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="audit-work-email">Work email</Label>
          <Input
            id="audit-work-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={workEmail}
            onChange={(event) => setWorkEmail(event.target.value)}
            className="h-11 text-base"
            required
          />
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="audit-company-website">Company website</Label>
        <Input
          id="audit-company-website"
          name="companyWebsite"
          value={companyWebsite}
          onChange={(event) => setCompanyWebsite(event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <label className="mt-6 flex min-h-11 cursor-pointer items-start gap-3 rounded-md py-2 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring">
        <input
          type="checkbox"
          checked={followupOptIn}
          onChange={(event) => setFollowupOptIn(event.target.checked)}
          className="mt-0.5 size-5 shrink-0 accent-primary"
        />
        <span className="text-sm">{AUDIT_COPY.followupConsent}</span>
      </label>

      <div aria-live="polite" aria-atomic="true" className="mt-4 min-h-12">
        {message && (
          <div
            className={
              status === "error" || status === "email-warning"
                ? "border-warning border-s-2 ps-3 text-sm"
                : "text-sm font-medium"
            }
          >
            {status === "email-warning" && (
              <MailWarning aria-hidden="true" className="me-2 inline size-4" />
            )}
            {message}
          </div>
        )}
      </div>

      {status === "email-warning" && reportUrl && (
        <div className="mb-4 flex flex-col gap-2 sm:flex-row">
          <Button type="button" variant="outline" onClick={retryEmail}>
            Try email again
          </Button>
          <Button type="button" onClick={() => window.location.assign(reportUrl)}>
            Open report now
          </Button>
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button type="button" variant="outline" size="lg" onClick={onBack} disabled={status === "pending"}>
          Back
        </Button>
        <Button type="submit" size="lg" disabled={status === "pending"}>
          {status === "pending" ? AUDIT_COPY.pending : AUDIT_COPY.submit}
          {status !== "pending" && <ArrowRight aria-hidden="true" />}
        </Button>
      </div>

      <p className="text-muted-foreground mt-6 text-sm">
        Your number one result is already yours: {result.topThree[0]?.input.title}.
      </p>
    </form>
  );
}
