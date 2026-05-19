"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Target,
  TrendingDown,
  Trophy,
} from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import {
  APPROACH_BENCHMARKS,
  DEFAULT_COST_PER_TESTED_ANGLE_INPUTS,
  calculateCostPerTestedAngle,
  formatCurrency,
  formatCurrencyCompact,
  formatMultiple,
  formatNumber,
  type ApproachId,
  type CostPerTestedAngleInputs,
} from "@/lib/calculator/cost-per-tested-angle";

function NumericInput({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max,
  step = 1,
  help,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (next: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  help?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        {prefix ? (
          <span className="text-muted-foreground absolute top-1/2 left-4 -translate-y-1/2">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type="number"
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          className={`border-border bg-background focus:ring-primary w-full rounded-lg border py-3 transition-all focus:ring-2 focus:outline-none ${
            prefix ? "pl-8" : "pl-4"
          } ${suffix ? "pr-12" : "pr-4"}`}
        />
        {suffix ? (
          <span className="text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2">
            {suffix}
          </span>
        ) : null}
      </div>
      {help ? <p className="text-muted-foreground mt-1 text-xs">{help}</p> : null}
    </div>
  );
}

function ZoneBadge({ inDominant, inRational }: { inDominant: boolean; inRational: boolean }) {
  if (inDominant) {
    return (
      <span className="bg-primary/15 text-primary inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
        <CheckCircle2 className="h-3 w-3" /> Dominant
      </span>
    );
  }
  if (inRational) {
    return (
      <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
        <CheckCircle2 className="h-3 w-3" /> Rational
      </span>
    );
  }
  return (
    <span className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
      <AlertTriangle className="h-3 w-3" /> Above zone
    </span>
  );
}

export function CostPerTestedAngleCalculator() {
  const [inputs, setInputs] = useState<CostPerTestedAngleInputs>(
    DEFAULT_COST_PER_TESTED_ANGLE_INPUTS,
  );

  const results = useMemo(() => calculateCostPerTestedAngle(inputs), [inputs]);

  const updateNumber = (field: "anglesPerMonth" | "currentCostPerAngle") => (next: number) =>
    setInputs((prev) => ({ ...prev, [field]: next }));

  const updateOverride = (id: ApproachId) => (next: number) =>
    setInputs((prev) => ({
      ...prev,
      costOverrides: { ...prev.costOverrides, [id]: next },
    }));

  const resetOverrides = () => setInputs((prev) => ({ ...prev, costOverrides: {} }));

  return (
    <div className="space-y-8">
      {/* Top row: inputs + recommendation */}
      <div className="grid gap-8 lg:grid-cols-2">
        <BorderGlow borderRadius={18} innerClassName="p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Calculator className="text-primary h-5 w-5" />
            <h2 className="font-heading text-xl font-bold">Your Testing Targets</h2>
          </div>

          <div className="space-y-5">
            <NumericInput
              id="angles-per-month"
              label="Distinct Angles You Want to Test Per Month"
              value={inputs.anglesPerMonth}
              onChange={updateNumber("anglesPerMonth")}
              step={1}
              min={1}
              help="A genuine angle = distinct hook × visual × pacing × audience × offer. Most accounts test 6–15/quarter; Andromeda needs 60+/quarter."
            />

            <NumericInput
              id="current-cost-per-angle"
              label="What You Currently Pay Per Tested Angle"
              value={inputs.currentCostPerAngle}
              onChange={updateNumber("currentCostPerAngle")}
              prefix="$"
              step={50}
              help="Total quarterly creative spend ÷ distinct angles shipped. Most teams discover the real number is 2–4× higher than they thought."
            />
          </div>

          <div className="bg-muted/50 text-muted-foreground rounded-lg p-4 text-sm">
            <p>
              <strong>Benchmark zones:</strong> Under{" "}
              <span className="text-primary font-semibold">$300/angle</span> is the rational zone
              where creative testing pencils out. Under{" "}
              <span className="text-primary font-semibold">$150/angle</span> is the dominant zone
              where test programs compound. Above $1,500 is structurally irrational at most budgets.
            </p>
          </div>
        </BorderGlow>

        {/* Recommendation */}
        <BorderGlow borderRadius={18} innerClassName="p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <Target className="text-primary h-5 w-5" />
            </div>
            <h2 className="font-heading text-xl font-bold">Recommendation</h2>
          </div>

          <p className="font-heading text-foreground mb-4 text-lg leading-snug font-semibold">
            {results.recommendation.headline}
          </p>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
            {results.recommendation.reasoning}
          </p>

          <div className="border-border space-y-3 border-t pt-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground text-sm">Your current monthly spend</span>
              <span className="font-heading text-foreground text-lg font-semibold">
                {formatCurrencyCompact(results.currentSpend.monthlyTotalCost)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground text-sm">
                Cheapest viable approach ({results.cheapestViable.shortName})
              </span>
              <span className="font-heading text-primary text-lg font-semibold">
                {formatCurrencyCompact(results.cheapestViable.monthlyTotalCost)}
              </span>
            </div>
            <div className="bg-primary/5 border-primary/20 mt-2 flex items-center justify-between gap-4 rounded-lg border p-3">
              <span className="text-primary text-sm font-medium">Potential 12-month savings</span>
              <span className="font-heading text-primary text-xl font-bold">
                {formatCurrencyCompact(
                  Math.max(
                    0,
                    (results.currentSpend.monthlyTotalCost -
                      results.cheapestViable.monthlyTotalCost) *
                      12,
                  ),
                )}
              </span>
            </div>
          </div>
        </BorderGlow>
      </div>

      {/* Approach comparison table */}
      <BorderGlow borderRadius={18} innerClassName="p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <TrendingDown className="text-primary h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">Cost Per Tested Angle by Approach</h3>
              <p className="text-muted-foreground text-sm">
                Edit any cell to model your own numbers. Benchmarks default to the midpoint of the
                published 2026 range.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={resetOverrides}
            className="text-muted-foreground hover:text-foreground text-xs font-medium underline-offset-2 hover:underline"
          >
            Reset to benchmarks
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-border text-muted-foreground border-b text-left text-xs tracking-wide uppercase">
                <th className="py-3 pr-4 font-medium">Approach</th>
                <th className="py-3 pr-4 font-medium">$ / Angle</th>
                <th className="py-3 pr-4 font-medium">Monthly Total</th>
                <th className="py-3 pr-4 font-medium">Capacity</th>
                <th className="py-3 pr-4 font-medium">$ / Winner</th>
                <th className="py-3 pr-2 font-medium">Zone</th>
              </tr>
            </thead>
            <tbody>
              {results.approaches.map((approach) => {
                const benchmark = APPROACH_BENCHMARKS.find((b) => b.id === approach.id);
                const isPrestyj = approach.id === "prestyj";
                return (
                  <tr
                    key={approach.id}
                    className={`border-border border-b align-top last:border-b-0 ${
                      isPrestyj ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="py-4 pr-4">
                      <div className="flex items-start gap-2">
                        <div>
                          <div className="font-heading text-foreground flex items-center gap-2 font-semibold">
                            {approach.name}
                            {isPrestyj ? (
                              <span className="bg-primary/15 text-primary rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                                Pipeline
                              </span>
                            ) : null}
                          </div>
                          <p className="text-muted-foreground mt-1 max-w-md text-xs leading-relaxed">
                            {approach.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <div className="relative w-32">
                        <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-xs">
                          $
                        </span>
                        <input
                          type="number"
                          value={approach.costPerAngle}
                          onChange={(e) =>
                            updateOverride(approach.id)(parseFloat(e.target.value) || 0)
                          }
                          min={0}
                          step={10}
                          className="border-border bg-background focus:ring-primary w-full rounded-md border py-2 pr-2 pl-7 text-sm focus:ring-1 focus:outline-none"
                          aria-label={`Cost per angle for ${approach.name}`}
                        />
                      </div>
                      {benchmark ? (
                        <p className="text-muted-foreground mt-1 text-[11px]">
                          range {formatCurrency(benchmark.benchmarkLow)}–
                          {formatCurrency(benchmark.benchmarkHigh)}
                        </p>
                      ) : null}
                    </td>
                    <td className="py-4 pr-4">
                      <div className="font-heading text-foreground font-semibold">
                        {formatCurrencyCompact(approach.monthlyTotalCost)}
                      </div>
                      <p className="text-muted-foreground text-[11px]">
                        {formatNumber(approach.deliverableAngles, 0)} angles/mo
                      </p>
                    </td>
                    <td className="py-4 pr-4">
                      {approach.capacityConstrained ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                          <AlertTriangle className="h-3 w-3" />
                          Capped at {benchmark?.maxMonthlyAngleCapacity ?? 0}/mo
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-xs">Meets volume</span>
                      )}
                    </td>
                    <td className="py-4 pr-4">
                      <div className="font-heading text-foreground font-semibold">
                        {formatCurrencyCompact(approach.costPerWinner)}
                      </div>
                      <p className="text-muted-foreground text-[11px]">
                        {benchmark ? `${(benchmark.winnerRate * 100).toFixed(0)}% winner rate` : ""}
                      </p>
                    </td>
                    <td className="py-4 pr-2">
                      <ZoneBadge
                        inDominant={approach.inDominantZone}
                        inRational={approach.inRationalZone}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </BorderGlow>

      {/* Breakeven panel */}
      <BorderGlow borderRadius={18} innerClassName="p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            <Trophy className="text-primary h-5 w-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold">
              Breakeven vs Your Current {formatCurrency(results.currentSpend.costPerAngle)}/Angle
            </h3>
            <p className="text-muted-foreground text-sm">
              How each approach compares to your current spend at {inputs.anglesPerMonth} angles/mo.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.breakevens.map((breakeven) => {
            const approach = results.approaches.find((a) => a.id === breakeven.approachId);
            if (!approach) return null;
            const positive = breakeven.monthlySavings > 0;
            return (
              <div
                key={breakeven.approachId}
                className={`rounded-xl border p-5 ${
                  approach.id === "prestyj"
                    ? "border-primary/40 bg-primary/5"
                    : positive
                      ? "border-border bg-background"
                      : "border-border bg-muted/30"
                }`}
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h4 className="font-heading text-base leading-tight font-bold">
                    {approach.shortName}
                  </h4>
                  <ZoneBadge
                    inDominant={approach.inDominantZone}
                    inRational={approach.inRationalZone}
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground text-xs">Monthly savings vs current</p>
                    <p
                      className={`font-heading text-2xl font-bold ${
                        positive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {positive ? "+" : ""}
                      {formatCurrencyCompact(breakeven.monthlySavings)}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Annual savings</p>
                    <p
                      className={`font-heading text-lg font-semibold ${
                        positive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {positive ? "+" : ""}
                      {formatCurrencyCompact(breakeven.annualSavings)}
                    </p>
                  </div>
                  <div className="border-border border-t pt-3">
                    <p className="text-muted-foreground text-xs">At same budget you could test</p>
                    <p className="font-heading text-foreground text-lg font-semibold">
                      +{formatNumber(breakeven.additionalAnglesAtSameBudget, 0)} more angles/mo
                    </p>
                    <p className="text-muted-foreground text-[11px]">
                      {formatMultiple(breakeven.throughputMultiple)} testing throughput
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </BorderGlow>

      {/* CTA */}
      <BorderGlow borderRadius={18} innerClassName="p-8 text-center">
        <h3 className="font-heading mb-2 text-xl font-bold">
          Want cost per tested angle under $300 — without rebuilding production?
        </h3>
        <p className="text-muted-foreground mx-auto mb-5 max-w-2xl text-sm">
          The Prestyj batch pipeline publishes the per-ad rate, angle-per-quarter math, and
          cost-per-winner model on one page. One short recording. 100 scripted vertical ads
          delivered in 1–2 business days.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/batch-video-ads"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
          >
            Get 100 ads for $497
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/blog/cost-per-tested-ad-angle-the-only-metric-that-matters-2026"
            className="border-border hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors"
          >
            Read the full benchmark breakdown
          </Link>
        </div>
      </BorderGlow>
    </div>
  );
}
