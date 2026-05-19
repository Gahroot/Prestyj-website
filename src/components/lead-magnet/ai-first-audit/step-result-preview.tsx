"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";
import { ScoredTaskCard } from "./scored-task-card";
import type { AuditResult } from "@/lib/ai-first-audit/types";
import { formatCurrency, formatHours } from "@/lib/ai-first-audit/format";
import { trackEvent } from "@/lib/meta-pixel";

interface StepResultPreviewProps {
  readonly result: AuditResult;
  readonly auditId: string;
  readonly editToken: string;
  readonly onBack: () => void;
  readonly leadEmail: string;
  readonly leadFirstName: string;
  readonly leadPhone: string;
}

export function StepResultPreview({
  result,
  auditId,
  editToken,
  onBack,
  leadEmail,
  leadFirstName,
  leadPhone,
}: StepResultPreviewProps) {
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [shareSlug, setShareSlug] = React.useState<string | null>(null);

  async function finalize() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/ai-first-audit/${auditId}/finalize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ editToken }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setError(body.error ?? "Failed to finalize. Please try again.");
        return;
      }
      const json = (await res.json()) as { shareSlug: string };
      setShareSlug(json.shareSlug);

      trackEvent(
        "CompleteRegistration",
        { email: leadEmail, phone: leadPhone, firstName: leadFirstName },
        { content_name: "ai-first-audit-finalized", content_category: "lead-magnet" },
      );

      // Redirect to the public result page after a beat so the user sees
      // the success state.
      setTimeout(() => {
        window.location.href = `/ai-first-audit/r/${json.shareSlug}`;
      }, 800);
    } catch (err) {
      console.error("[ai-first-audit] finalize error", err);
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Your audit
        </p>
        <h2 className="text-2xl leading-tight font-bold sm:text-3xl">
          {result.context.firstName}, you&apos;re lighting{" "}
          <span className="text-primary">{formatCurrency(result.headlineDollars)}/yr</span> on fire.
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          That&apos;s the annualized time-cost of your top 3 automate-first tasks —{" "}
          {formatHours(result.totalWeeklyHoursSaved)} per week at ${result.hourlyCost.toFixed(0)}/hr
          loaded cost.
        </p>
      </div>

      <BorderGlow borderRadius={14} innerClassName="space-y-2 p-5">
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Top 3 to automate first
        </p>
        <ul className="space-y-1 text-sm">
          {result.topThree.map((task, i) => (
            <li key={task.input.id}>
              <span className="text-primary font-semibold">{i + 1}.</span> {task.input.title}
              <span className="text-muted-foreground">
                {" "}
                — {formatCurrency(task.annualDollarsSaved)}/yr
              </span>
            </li>
          ))}
        </ul>
      </BorderGlow>

      <div className="space-y-3">
        <p className="text-sm">
          Hit the button below and we&apos;ll email you the full audit (PDF + share link) plus a
          7-day deployment plan personalized to your top 3.
        </p>

        {error && <p className="text-destructive text-sm">{error}</p>}
        {shareSlug && (
          <p className="text-primary text-sm font-medium">Sent. Redirecting to your audit…</p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={onBack} variant="outline" size="lg" className="w-full sm:flex-1">
            Back
          </Button>
          <Button
            onClick={finalize}
            size="lg"
            className="w-full sm:flex-1"
            disabled={submitting || shareSlug !== null}
          >
            {submitting ? "Generating…" : shareSlug ? "Sent" : "Email me my full audit"}
          </Button>
        </div>
      </div>

      {/* Top-3 card preview (the persistent share page will render the full version) */}
      <div className="space-y-4 pt-2">
        {result.topThree.map((task, i) => (
          <ScoredTaskCard key={task.input.id} rank={i + 1} task={task} />
        ))}
      </div>
    </div>
  );
}
