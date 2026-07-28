"use client";

import { RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  calculateFunnelBaseline,
  type FunnelBaselineInput,
  validateFunnelBaseline,
} from "@/lib/ad-to-appointment-atlas";

const emptyInput: FunnelBaselineInput = {
  adSpend: 0,
  leads: 0,
  conversations: 0,
  bookedAppointments: 0,
  keptAppointments: 0,
  attributedRevenue: 0,
};

const inputFields: ReadonlyArray<{
  key: keyof FunnelBaselineInput;
  label: string;
  help: string;
  prefix?: string;
  step: string;
}> = [
  {
    key: "adSpend",
    label: "Ad spend",
    help: "Media spend for the same measurement period.",
    prefix: "$",
    step: "0.01",
  },
  {
    key: "leads",
    label: "Attributed leads",
    help: "Unique, valid leads tied to the measured campaigns.",
    step: "1",
  },
  {
    key: "conversations",
    label: "Two-way conversations",
    help: "Leads that exchanged at least one meaningful reply.",
    step: "1",
  },
  {
    key: "bookedAppointments",
    label: "Booked appointments",
    help: "Appointments created from those conversations.",
    step: "1",
  },
  {
    key: "keptAppointments",
    label: "Kept appointments",
    help: "Appointments that occurred, excluding cancellations and no-shows.",
    step: "1",
  },
  {
    key: "attributedRevenue",
    label: "Attributed revenue",
    help: "Closed revenue attributed under your current reporting rule.",
    prefix: "$",
    step: "0.01",
  },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 1,
});

function formatCurrency(value: number | null): string {
  return value === null ? "Not available" : currencyFormatter.format(value);
}

function formatPercentage(value: number | null): string {
  return value === null ? "Not available" : percentageFormatter.format(value);
}

function isFieldInvalid(key: keyof FunnelBaselineInput, input: FunnelBaselineInput): boolean {
  const value = input[key];
  if (!Number.isFinite(value) || value < 0) return true;

  if (
    ["leads", "conversations", "bookedAppointments", "keptAppointments"].includes(key) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  if (key === "conversations") return input.conversations > input.leads;
  if (key === "bookedAppointments") return input.bookedAppointments > input.conversations;
  if (key === "keptAppointments") return input.keptAppointments > input.bookedAppointments;

  return false;
}

export function FunnelBaselineCalculator() {
  const [input, setInput] = useState<FunnelBaselineInput>(emptyInput);
  const baseline = useMemo(() => calculateFunnelBaseline(input), [input]);
  const validation = useMemo(() => validateFunnelBaseline(input), [input]);
  const hasLeadData = input.leads > 0;

  const stages = [
    { label: "Attributed leads", value: input.leads },
    { label: "Two-way conversations", value: input.conversations },
    { label: "Booked appointments", value: input.bookedAppointments },
    { label: "Kept appointments", value: input.keptAppointments },
  ];

  function updateField(key: keyof FunnelBaselineInput, rawValue: string): void {
    const parsedValue = rawValue === "" ? 0 : Number(rawValue);
    setInput((current) => ({ ...current, [key]: parsedValue }));
  }

  function resetCalculator(): void {
    setInput(emptyInput);
  }

  return (
    <section id="baseline" className="border-border/70 border-y bg-black/15">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#a99aff] uppercase">
            Private baseline
          </p>
          <h2 className="font-heading text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Measure the funnel you have before comparing it.
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl text-base leading-7">
            Enter one consistent reporting period. The calculator turns your raw counts into the
            six baseline metrics. Nothing is sent or stored.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {inputFields.map((field) => {
              const helpId = `${field.key}-help`;
              const fieldInvalid = isFieldInvalid(field.key, input);
              return (
                <div key={field.key}>
                  <Label htmlFor={field.key}>{field.label}</Label>
                  <div className="relative mt-2">
                    {field.prefix ? (
                      <span
                        aria-hidden="true"
                        className="text-muted-foreground pointer-events-none absolute inset-y-0 left-3 flex items-center"
                      >
                        {field.prefix}
                      </span>
                    ) : null}
                    <Input
                      id={field.key}
                      name={field.key}
                      type="number"
                      min="0"
                      max="1000000000"
                      step={field.step}
                      inputMode={field.step === "1" ? "numeric" : "decimal"}
                      value={input[field.key] || ""}
                      onChange={(event) => updateField(field.key, event.target.value)}
                      aria-describedby={`${helpId}${fieldInvalid ? " baseline-errors" : ""}`}
                      aria-invalid={fieldInvalid || undefined}
                      className={`h-11 ${field.prefix ? "pl-7" : ""}`}
                    />
                  </div>
                  <p id={helpId} className="text-muted-foreground mt-2 text-xs leading-5">
                    {field.help}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex min-h-11 flex-wrap items-center gap-4">
            <Button type="button" variant="outline" onClick={resetCalculator}>
              <RotateCcw aria-hidden="true" className="h-4 w-4" />
              Reset values
            </Button>
            <p className="text-muted-foreground text-xs">Calculations stay in this browser tab.</p>
          </div>

          {!validation.isValid ? (
            <div
              id="baseline-errors"
              role="alert"
              className="border-destructive mt-5 border-l-2 pl-4"
            >
              <p className="text-foreground text-sm font-semibold">Check these values</p>
              <ul className="text-muted-foreground mt-2 list-disc space-y-1 pl-4 text-sm">
                {validation.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="border-border bg-card rounded-2xl border p-5 sm:p-7">
          <div className="flex flex-col gap-2 border-b pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Calculated from your inputs</p>
              <h3 className="font-heading text-foreground mt-1 text-2xl font-bold">
                Your baseline
              </h3>
            </div>
            <p className="text-muted-foreground text-xs">No benchmark comparison yet</p>
          </div>

          {hasLeadData && validation.isValid ? (
            <>
              <dl className="grid grid-cols-2 border-b sm:grid-cols-3">
                {[
                  ["Cost per lead", formatCurrency(baseline.costPerLead)],
                  ["Lead to conversation", formatPercentage(baseline.leadToConversationRate)],
                  [
                    "Conversation to calendar",
                    formatPercentage(baseline.conversationToCalendarRate),
                  ],
                  ["Kept appointment rate", formatPercentage(baseline.keptAppointmentRate)],
                  ["Cost per kept appointment", formatCurrency(baseline.costPerKeptAppointment)],
                  ["Revenue per lead", formatCurrency(baseline.revenuePerLead)],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-border/70 border-b p-4 even:border-l sm:border-l"
                  >
                    <dt className="text-muted-foreground text-xs leading-5">{label}</dt>
                    <dd className="text-foreground mt-2 text-lg font-semibold tabular-nums">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="pt-7">
                <h4 className="text-foreground text-sm font-semibold">
                  Attention retained by stage
                </h4>
                <p className="text-muted-foreground mt-1 text-xs">
                  Each bar is the share of attributed leads still present at that milestone.
                </p>
                <ol className="mt-6 space-y-5">
                  {stages.map((stage) => {
                    const retainedRate = input.leads > 0 ? stage.value / input.leads : 0;
                    const boundedRate = Math.max(0, Math.min(1, retainedRate));
                    return (
                      <li key={stage.label}>
                        <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
                          <span className="text-foreground font-medium">{stage.label}</span>
                          <span className="text-muted-foreground tabular-nums">
                            {stage.value.toLocaleString("en-US")} ({formatPercentage(boundedRate)})
                          </span>
                        </div>
                        <div className="bg-secondary h-2 overflow-hidden rounded-sm">
                          <div
                            className="bg-primary h-full rounded-sm"
                            style={{ width: `${boundedRate * 100}%` }}
                            aria-hidden="true"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </>
          ) : (
            <div className="flex min-h-96 items-center justify-center px-4 text-center">
              <div className="max-w-sm">
                <p className="font-heading text-foreground text-xl font-semibold">
                  Enter a valid lead total to reveal your baseline.
                </p>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  Use one reporting period and keep every stage tied to the same group of leads.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
