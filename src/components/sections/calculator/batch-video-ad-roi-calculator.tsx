"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Calculator,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import {
  DEFAULT_BATCH_VIDEO_AD_ROI_INPUTS,
  calculateBatchVideoAdRoi,
  formatCurrency,
  formatCurrencyCompact,
  formatMonths,
  formatNumber,
  formatPercent,
  type BatchVideoAdRoiInputs,
} from "@/lib/calculator/batch-video-ad-roi";

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
          } ${suffix ? "pr-10" : "pr-4"}`}
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

export function BatchVideoAdRoiCalculator() {
  const [inputs, setInputs] = useState<BatchVideoAdRoiInputs>(DEFAULT_BATCH_VIDEO_AD_ROI_INPUTS);

  const results = useMemo(() => calculateBatchVideoAdRoi(inputs), [inputs]);

  const update = (field: keyof BatchVideoAdRoiInputs) => (next: number) =>
    setInputs((prev) => ({ ...prev, [field]: next }));

  const bestTier = useMemo(() => {
    const positive = results.tierPaybacks.filter((t) => t.paybackMonths > 0);
    if (positive.length === 0) return results.tierPaybacks[0];
    return positive.reduce((best, t) =>
      t.netTwelveMonthSavings > best.netTwelveMonthSavings ? t : best,
    );
  }, [results.tierPaybacks]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <BorderGlow borderRadius={18} innerClassName="p-8 space-y-6">
        <div className="flex items-center gap-2">
          <Calculator className="text-primary h-5 w-5" />
          <h2 className="font-heading text-xl font-bold">Your Ad Account</h2>
        </div>

        <div className="space-y-5">
          <NumericInput
            id="monthly-ad-spend"
            label="Monthly Ad Spend"
            value={inputs.monthlyAdSpend}
            onChange={update("monthlyAdSpend")}
            prefix="$"
            step={500}
            help="Combined Meta, TikTok, and YouTube spend per month."
          />

          <NumericInput
            id="current-cpa"
            label="Current Cost Per Acquisition (CPA)"
            value={inputs.currentCpa}
            onChange={update("currentCpa")}
            prefix="$"
            step={1}
            help="What you currently pay for one lead, booking, or purchase."
          />

          <NumericInput
            id="angles-tested"
            label="Creative Angles Tested Per Month"
            value={inputs.anglesTestedPerMonth}
            onChange={update("anglesTestedPerMonth")}
            step={1}
            help="A distinct hook + offer combination. Most accounts test 2–10. With batch video, 20–100+."
          />

          <NumericInput
            id="winner-rate"
            label="Average Winner Rate"
            value={inputs.winnerRatePercent}
            onChange={update("winnerRatePercent")}
            suffix="%"
            step={1}
            max={100}
            help="Industry average: 10–20% of tested angles beat the control."
          />

          <NumericInput
            id="cpa-lift"
            label="Average CPA Lift Per Winner"
            value={inputs.cpaLiftPercent}
            onChange={update("cpaLiftPercent")}
            suffix="%"
            step={1}
            max={100}
            help="How much each winner reduces CPA. Typical: 15–35%."
          />
        </div>

        <div className="bg-muted/50 text-muted-foreground rounded-lg p-4 text-sm">
          <p>
            <strong>How the model works:</strong> Each winner compounds your CPA down by the lift
            percentage. CPA floor is capped at 10% of starting CPA to keep projections honest.
            Payback compares CPA savings + extra leads at current-CPA value against Prestyj setup
            fee + monthly cost.
          </p>
        </div>
      </BorderGlow>

      {/* Results */}
      <div className="space-y-4">
        {/* Winners + CPA */}
        <div className="grid gap-4 sm:grid-cols-2">
          <BorderGlow borderRadius={18} innerClassName="p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <Trophy className="text-primary h-5 w-5" />
              </div>
              <h3 className="font-heading text-sm font-semibold">Projected Winners</h3>
            </div>
            <div className="font-heading text-foreground text-3xl font-bold">
              {formatNumber(results.projectedMonthlyWinners)}
            </div>
            <p className="text-muted-foreground mt-1 text-xs">winning angles per month</p>
          </BorderGlow>

          <BorderGlow borderRadius={18} innerClassName="p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <TrendingDown className="text-primary h-5 w-5" />
              </div>
              <h3 className="font-heading text-sm font-semibold">Projected CPA</h3>
            </div>
            <div className="font-heading text-primary text-3xl font-bold">
              {formatCurrency(results.projectedCpa)}
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              {formatCurrency(inputs.currentCpa)} → {formatCurrency(results.projectedCpa)} (−
              {formatPercent(results.cpaImprovementPercent, 0)})
            </p>
          </BorderGlow>
        </div>

        {/* Leads gained */}
        <BorderGlow borderRadius={18} innerClassName="p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <Users className="text-primary h-5 w-5" />
            </div>
            <h3 className="font-heading font-semibold">Monthly Leads</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground mb-1 text-sm">Baseline</p>
              <div className="font-heading text-muted-foreground text-3xl font-bold">
                {formatNumber(results.baselineMonthlyLeads, 0)}
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm">After Winners</p>
              <div className="font-heading text-primary text-3xl font-bold">
                {formatNumber(results.projectedMonthlyLeads, 0)}
              </div>
            </div>
          </div>
          <div className="border-border mt-3 flex items-center gap-2 border-t pt-3">
            <TrendingUp className="text-primary h-4 w-4" />
            <p className="text-muted-foreground text-sm">
              +{formatNumber(results.monthlyLeadsGained, 0)}/mo · +
              {formatNumber(results.annualLeadsGained, 0)} over 12 months
            </p>
          </div>
        </BorderGlow>

        {/* CPA Savings */}
        <div className="bg-primary/5 border-primary/20 rounded-2xl border p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <DollarSign className="text-primary h-5 w-5" />
            </div>
            <h3 className="font-heading font-semibold">CPA Savings</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground mb-1 text-sm">Monthly</p>
              <div className="font-heading text-primary text-2xl font-bold">
                {formatCurrencyCompact(results.monthlyCpaSavings)}
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm">12 Months</p>
              <div className="font-heading text-primary text-3xl font-bold">
                {formatCurrencyCompact(results.annualCpaSavings)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier payback — full width below */}
      <div className="lg:col-span-2">
        <BorderGlow borderRadius={18} innerClassName="p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <Beaker className="text-primary h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">Payback vs Prestyj Plans</h3>
              <p className="text-muted-foreground text-sm">
                Setup fee + monthly cost recouped from CPA savings and incremental leads.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {results.tierPaybacks.map((tier) => {
              const isBest = bestTier && tier.tierId === bestTier.tierId;
              return (
                <div
                  key={tier.tierId}
                  className={`rounded-xl border p-5 ${
                    isBest ? "border-primary/40 bg-primary/5" : "border-border bg-background"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-heading text-lg font-bold">{tier.tierName}</h4>
                    {isBest ? (
                      <span className="bg-primary/15 text-primary rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                        Best fit
                      </span>
                    ) : null}
                  </div>
                  <p className="text-muted-foreground mb-4 text-xs">
                    {formatCurrency(tier.setupFee)} setup + {formatCurrency(tier.monthlyPrice)}/mo
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-muted-foreground text-xs">Payback period</p>
                      <p className="font-heading text-2xl font-bold">
                        {formatMonths(tier.paybackMonths)}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">12-month ROI</p>
                      <p
                        className={`font-heading text-2xl font-bold ${
                          tier.twelveMonthRoiPercent >= 0 ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {tier.twelveMonthRoiPercent >= 0 ? "+" : ""}
                        {formatPercent(tier.twelveMonthRoiPercent, 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Net 12-mo savings</p>
                      <p className="font-heading text-foreground text-lg font-semibold">
                        {formatCurrencyCompact(tier.netTwelveMonthSavings)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </BorderGlow>
      </div>

      {/* CTA */}
      <div className="lg:col-span-2">
        <BorderGlow borderRadius={18} innerClassName="p-8 text-center">
          <h3 className="font-heading mb-2 text-xl font-bold">
            Stop guessing which angles will win.
          </h3>
          <p className="text-muted-foreground mx-auto mb-5 max-w-2xl text-sm">
            One short recording. 100 scripted vertical video ads delivered in 1–2 business days —
            enough creative volume to actually surface winners every week.
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
              href="/pricing"
              className="border-border hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors"
            >
              See managed plans
            </Link>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
