"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function number(value: string): number {
  const parsed = Number(value.replaceAll(",", ""));
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

export function CommercialCommissionCalculator(): React.ReactElement {
  const [inquiries, setInquiries] = useState("80");
  const [currentContact, setCurrentContact] = useState("55");
  const [targetContact, setTargetContact] = useState("85");
  const [qualified, setQualified] = useState("30");
  const [closeRate, setCloseRate] = useState("12");
  const [grossFee, setGrossFee] = useState("75000");

  const result = useMemo(() => {
    const volume = number(inquiries);
    const improvement = Math.max(0, number(targetContact) - number(currentContact)) / 100;
    const recoveredContacts = volume * improvement;
    const recoveredQualified = recoveredContacts * (number(qualified) / 100);
    const recoveredClosings = recoveredQualified * (number(closeRate) / 100);
    return {
      recoveredContacts,
      recoveredQualified,
      recoveredClosings,
      annualGrossFees: recoveredClosings * number(grossFee) * 12,
    };
  }, [closeRate, currentContact, grossFee, inquiries, qualified, targetContact]);

  const fields = [
    ["Monthly inbound inquiries", inquiries, setInquiries],
    ["Current contact rate (%)", currentContact, setCurrentContact],
    ["Target contact rate (%)", targetContact, setTargetContact],
    ["Qualified inquiry rate (%)", qualified, setQualified],
    ["Qualified-to-close rate (%)", closeRate, setCloseRate],
    ["Average gross fee per closing ($)", grossFee, setGrossFee],
  ] as const;

  return (
    <div className="editorial-split">
      <div>
        <h2 className="font-heading text-2xl font-bold">Assumptions</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {fields.map(([label, value, setter], index) => {
            const id = `commission-field-${index}`;
            return (
              <div key={label}>
                <Label htmlFor={id}>{label}</Label>
                <Input
                  id={id}
                  inputMode="decimal"
                  value={value}
                  onChange={(event) => setter(event.target.value)}
                  className="mt-2"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div aria-live="polite" className="bg-card rounded-md border p-5 sm:p-8">
        <h2 className="font-heading text-2xl font-bold">Planning estimate</h2>
        <p className="text-muted-foreground mt-6 text-sm">Annual gross fee opportunity</p>
        <p className="mt-2 font-[Georgia] text-4xl break-words tabular-nums sm:text-5xl">
          {result.annualGrossFees.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })}
        </p>
        <dl className="mt-6 border-t">
          {[
            ["Additional contacts per month", result.recoveredContacts.toFixed(1)],
            ["Additional qualified inquiries", result.recoveredQualified.toFixed(1)],
            ["Additional closings per month", result.recoveredClosings.toFixed(2)],
          ].map(([term, detail]) => (
            <div
              key={term}
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,auto)] gap-4 border-b py-5"
            >
              <dt className="text-muted-foreground">{term}</dt>
              <dd className="font-semibold break-all tabular-nums">{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="text-muted-foreground mt-6 text-sm leading-6">
          This model applies your assumptions mechanically. It does not predict future performance
          or account for assignment mix, fee splits, transaction timing, or market conditions.
        </p>
      </div>
    </div>
  );
}
