"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StepBusinessContextProps {
  readonly initialHourlyCost: number;
  readonly onBack: () => void;
  readonly onContinue: (hourlyCost: number) => void;
}

export function StepBusinessContext({
  initialHourlyCost,
  onBack,
  onContinue,
}: StepBusinessContextProps) {
  const [hourlyCost, setHourlyCost] = React.useState<number>(initialHourlyCost);
  const [error, setError] = React.useState<string | null>(null);

  function handleNext() {
    if (!Number.isFinite(hourlyCost) || hourlyCost < 15 || hourlyCost > 500) {
      setError("Enter a number between $15 and $500/hr");
      return;
    }
    setError(null);
    onContinue(hourlyCost);
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your loaded $/hr</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          This is the all-in hourly cost of whoever does the task today — salary, benefits, and
          overhead. We use it to put a dollar value on every hour you get back. We pre-filled a
          typical number for your revenue band; tweak it if you have a better one.
        </p>
      </div>

      <div className="max-w-xs">
        <Label htmlFor="hourlyCost">Loaded cost per hour</Label>
        <div className="relative">
          <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">$</span>
          <Input
            id="hourlyCost"
            type="number"
            min={15}
            max={500}
            step={5}
            value={hourlyCost}
            onChange={(e) => setHourlyCost(parseFloat(e.target.value) || 0)}
            className="pl-7"
          />
        </div>
        {error && <p className="text-destructive mt-1 text-xs">{error}</p>}
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" size="lg" className="w-full">
          Back
        </Button>
        <Button onClick={handleNext} size="lg" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}
