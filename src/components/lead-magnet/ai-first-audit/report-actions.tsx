"use client";

import * as React from "react";
import Link from "next/link";
import { CalendarCheck, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import type { ReadinessLabel } from "@/lib/ai-first-audit/types";
import { trackAuditEvent } from "@/lib/meta-pixel";

interface ReportActionsProps {
  readonly slug: string;
  readonly emailWarning?: boolean;
  readonly variant: "utility" | "booking";
  readonly readinessBand: ReadinessLabel;
}

export function ReportActions({
  slug,
  emailWarning = false,
  variant,
  readinessBand,
}: ReportActionsProps) {
  const viewTracked = React.useRef(false);

  React.useEffect(() => {
    if (variant !== "utility" || viewTracked.current) return;
    viewTracked.current = true;
    trackAuditEvent("AuditReportViewed", { stepName: "report", readinessBand });
  }, [readinessBand, variant]);

  if (variant === "utility") {
    return (
      <div className="audit-report-actions space-y-3">
        {emailWarning && (
          <div className="border-warning border-s-2 ps-3 text-sm" role="status">
            <p>Your report is ready, but the email did not send.</p>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="mt-1 min-h-11 text-left font-semibold underline underline-offset-4"
            >
              Go back and try email again
            </button>
          </div>
        )}
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => {
            trackAuditEvent("AuditReportPrinted", { stepName: "report", readinessBand });
            window.print();
          }}
        >
          <Printer aria-hidden="true" />
          {AUDIT_COPY.report.print}
        </Button>
      </div>
    );
  }

  return (
    <Button asChild size="lg">
      <Link
        href={`/book-demo?audit=${encodeURIComponent(slug)}`}
        onClick={() =>
          trackAuditEvent("AuditReviewClicked", { stepName: "report", readinessBand })
        }
      >
        <CalendarCheck aria-hidden="true" />
        {AUDIT_COPY.report.cta}
      </Link>
    </Button>
  );
}
