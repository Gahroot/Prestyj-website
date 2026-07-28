"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import type { AuditProfile } from "@/lib/ai-first-audit/types";

interface StepBusinessProfileProps {
  readonly initialProfile: AuditProfile | null;
  readonly onContinue: (profile: AuditProfile) => void;
}

export function StepBusinessProfile({ initialProfile, onContinue }: StepBusinessProfileProps) {
  const [businessType, setBusinessType] = React.useState(
    initialProfile?.businessType ?? "home-services",
  );
  const [hourlyCost, setHourlyCost] = React.useState(String(initialProfile?.hourlyCost ?? 65));
  const [error, setError] = React.useState<string | null>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cost = Number(hourlyCost);
    if (!Number.isFinite(cost) || cost < 15 || cost > 500) {
      setError("Enter an hourly cost from $15 to $500.");
      return;
    }
    setError(null);
    onContinue({ businessType, hourlyCost: cost });
  }

  return (
    <form onSubmit={submit} className="border-border bg-card rounded-xl border p-5 sm:p-8">
      <h2 data-wizard-heading tabIndex={-1} className="font-heading text-2xl font-bold outline-none">
        {AUDIT_COPY.profileHeading}
      </h2>
      <p className="text-muted-foreground mt-2">Two answers shape your cost and workflow list.</p>

      <div className="mt-7 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="audit-business-type">Business type</Label>
          <div className="relative">
            <select
              id="audit-business-type"
              value={businessType}
              onChange={(event) =>
                setBusinessType(event.target.value as AuditProfile["businessType"])
              }
              className="border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 h-12 w-full appearance-none rounded-md border py-2 ps-3 pe-11 text-base outline-none focus-visible:ring-[3px]"
            >
              <option value="real-estate-team">Real estate team</option>
              <option value="home-services">Home services</option>
              <option value="professional-services">Professional services</option>
              <option value="agency-consulting">Agency or consulting</option>
              <option value="other-service-business">Other service business</option>
            </select>
            <ChevronDown
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 end-4 size-4 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="audit-hourly-cost">{AUDIT_COPY.hourlyCostQuestion}</Label>
          <div className="relative max-w-xs">
            <span
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute inset-y-0 start-3 flex items-center"
            >
              $
            </span>
            <Input
              id="audit-hourly-cost"
              type="number"
              inputMode="decimal"
              min={15}
              max={500}
              step={1}
              value={hourlyCost}
              onChange={(event) => setHourlyCost(event.target.value)}
              aria-describedby="audit-hourly-cost-help audit-profile-error"
              aria-invalid={Boolean(error)}
              className="h-12 ps-7 text-base"
              required
            />
          </div>
          <p id="audit-hourly-cost-help" className="text-muted-foreground text-sm">
            {AUDIT_COPY.hourlyCostHelp}
          </p>
        </div>
      </div>

      <p id="audit-profile-error" role="alert" className="text-destructive mt-4 min-h-5 text-sm">
        {error}
      </p>
      <div className="mt-4 flex justify-end">
        <Button type="submit" size="lg" className="min-h-11 w-full sm:w-auto">
          Choose workflows
        </Button>
      </div>
    </form>
  );
}
