"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import BorderGlow from "@/components/ui/border-glow";

interface CalculatorInputs {
  monthlyAdSpend: number;
  costPerLead: number;
  currentConversionRate: number;
  averageCommission: number;
  teamSize: number;
}

interface CalculatorResults {
  monthlyLeads: number;
  currentAppointments: number;
  aiAppointments: number;
  additionalAppointments: number;
  currentMonthlyClosings: number;
  aiMonthlyClosings: number;
  additionalMonthlyRevenue: number;
  additionalAnnualRevenue: number;
  aiCost: number;
  netAnnualROI: number;
}

const DEFAULT_INPUTS: CalculatorInputs = {
  monthlyAdSpend: 3000,
  costPerLead: 35,
  currentConversionRate: 2,
  averageCommission: 12000,
  teamSize: 8,
};

const AI_CONVERSION_RATE = 7; // Conservative estimate with AI
const CLOSE_RATE = 0.25; // 25% close rate on appointments
const AI_MONTHLY_COST = 2997; // Mid-tier Prestyj plan

function formatCurrency(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
}

function formatNumber(value: number): string {
  return value % 1 === 0 ? value.toFixed(0) : value.toFixed(1);
}

export default function RealEstateROICalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS);

  const results = useMemo<CalculatorResults>(() => {
    const monthlyLeads = inputs.monthlyAdSpend / inputs.costPerLead;
    const currentConversionDecimal = inputs.currentConversionRate / 100;
    const aiConversionDecimal = AI_CONVERSION_RATE / 100;

    const currentAppointments = monthlyLeads * currentConversionDecimal;
    const aiAppointments = monthlyLeads * aiConversionDecimal;
    const additionalAppointments = aiAppointments - currentAppointments;

    const currentMonthlyClosings = currentAppointments * CLOSE_RATE;
    const aiMonthlyClosings = aiAppointments * CLOSE_RATE;

    const additionalMonthlyRevenue =
      (aiMonthlyClosings - currentMonthlyClosings) * inputs.averageCommission;
    const additionalAnnualRevenue = additionalMonthlyRevenue * 12;

    const netAnnualROI = additionalAnnualRevenue - AI_MONTHLY_COST * 12;

    return {
      monthlyLeads: Math.round(monthlyLeads),
      currentAppointments,
      aiAppointments,
      additionalAppointments,
      currentMonthlyClosings,
      aiMonthlyClosings,
      additionalMonthlyRevenue,
      additionalAnnualRevenue,
      aiCost: AI_MONTHLY_COST,
      netAnnualROI,
    };
  }, [inputs]);

  const handleInputChange =
    (field: keyof CalculatorInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value) || 0;
      setInputs((prev) => ({ ...prev, [field]: value }));
    };

  return (
    <>
      <Navbar />
      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b pt-16">
        {/* Hero */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Calculator className="h-4 w-4" />
              Real Estate AI ROI Calculator
            </div>
            <h1 className="font-heading mb-6 text-4xl font-bold tracking-tighter sm:text-5xl">
              How Much Revenue Is Slow Lead Response{" "}
              <span className="text-primary">Costing Your Team?</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Enter your team&apos;s numbers below. See exactly how many additional closings AI lead
              response would generate — and what that means in commission revenue.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Inputs */}
              <BorderGlow borderRadius={18} innerClassName="p-8 space-y-6">
                <h2 className="font-heading text-xl font-bold">Your Team&apos;s Numbers</h2>

                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Monthly Ad Spend (Facebook + YouTube)
                    </label>
                    <div className="relative">
                      <span className="text-muted-foreground absolute top-1/2 left-4 -translate-y-1/2">
                        $
                      </span>
                      <input
                        type="number"
                        value={inputs.monthlyAdSpend}
                        onChange={handleInputChange("monthlyAdSpend")}
                        min="0"
                        className="border-border bg-background focus:ring-primary w-full rounded-lg border py-3 pr-4 pl-8 transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">Average Cost Per Lead</label>
                    <div className="relative">
                      <span className="text-muted-foreground absolute top-1/2 left-4 -translate-y-1/2">
                        $
                      </span>
                      <input
                        type="number"
                        value={inputs.costPerLead}
                        onChange={handleInputChange("costPerLead")}
                        min="0"
                        className="border-border bg-background focus:ring-primary w-full rounded-lg border py-3 pr-4 pl-8 transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Facebook RE leads average $25–$60. YouTube $40–$120.
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Current Lead-to-Appointment Rate (%)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={inputs.currentConversionRate}
                        onChange={handleInputChange("currentConversionRate")}
                        min="0"
                        max="100"
                        step="0.5"
                        className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                      />
                      <span className="text-muted-foreground absolute top-1/2 right-4 -translate-y-1/2">
                        %
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Industry average without AI: 1–3%. With AI: 5–10%.
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Average Commission Per Closing
                    </label>
                    <div className="relative">
                      <span className="text-muted-foreground absolute top-1/2 left-4 -translate-y-1/2">
                        $
                      </span>
                      <input
                        type="number"
                        value={inputs.averageCommission}
                        onChange={handleInputChange("averageCommission")}
                        min="0"
                        step="500"
                        className="border-border bg-background focus:ring-primary w-full rounded-lg border py-3 pr-4 pl-8 transition-all focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <p className="text-muted-foreground mt-1 text-xs">
                      Total brokerage commission (both sides) per deal.
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Team Size (Number of Agents)
                    </label>
                    <input
                      type="number"
                      value={inputs.teamSize}
                      onChange={handleInputChange("teamSize")}
                      min="1"
                      className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 text-muted-foreground rounded-lg p-4 text-sm">
                  <p>
                    <strong>Assumptions:</strong> AI conversion rate of {AI_CONVERSION_RATE}%
                    (conservative estimate based on client data), 25% appointment-to-closing rate,
                    and Prestyj Pro plan at ${AI_MONTHLY_COST.toLocaleString()}/month.
                  </p>
                </div>
              </BorderGlow>

              {/* Results */}
              <div className="space-y-4">
                {/* Monthly Lead Volume */}
                <BorderGlow borderRadius={18} innerClassName="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Users className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold">Monthly Lead Volume</h3>
                  </div>
                  <div className="font-heading text-foreground mb-1 text-4xl font-bold">
                    {results.monthlyLeads}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    leads per month from your ad spend
                  </p>
                </BorderGlow>

                {/* Appointments Comparison */}
                <BorderGlow borderRadius={18} innerClassName="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <TrendingUp className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold">Monthly Appointments</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground mb-1 text-sm">Without AI</p>
                      <div className="font-heading text-muted-foreground text-3xl font-bold">
                        {formatNumber(results.currentAppointments)}
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1 text-sm">With AI</p>
                      <div className="font-heading text-primary text-3xl font-bold">
                        {formatNumber(results.aiAppointments)}
                      </div>
                    </div>
                  </div>
                  <div className="border-border mt-3 border-t pt-3">
                    <p className="text-muted-foreground text-sm">
                      +{formatNumber(results.additionalAppointments)} additional appointments/month
                    </p>
                  </div>
                </BorderGlow>

                {/* Revenue Impact */}
                <div className="bg-primary/5 border-primary/20 rounded-2xl border p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <DollarSign className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold">Revenue Impact</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground mb-1 text-sm">
                        Additional Monthly Revenue
                      </p>
                      <div className="font-heading text-primary text-3xl font-bold">
                        {formatCurrency(results.additionalMonthlyRevenue)}
                      </div>
                    </div>

                    <div>
                      <p className="text-muted-foreground mb-1 text-sm">
                        Additional Annual Revenue
                      </p>
                      <div className="font-heading text-primary text-4xl font-bold">
                        {formatCurrency(results.additionalAnnualRevenue)}
                      </div>
                    </div>

                    <div className="border-primary/20 border-t pt-4">
                      <p className="text-muted-foreground mb-1 text-sm">
                        Annual AI Cost (Prestyj Pro)
                      </p>
                      <div className="font-heading text-muted-foreground text-xl font-semibold">
                        -{formatCurrency(results.aiCost * 12)}
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-primary mb-1 text-sm font-medium">Net Annual ROI</p>
                      <div className="font-heading text-primary text-3xl font-bold">
                        {formatCurrency(results.netAnnualROI)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <BorderGlow borderRadius={18} innerClassName="p-6 text-center">
                  <h3 className="font-heading mb-2 text-lg font-bold">
                    Ready to Unlock This Revenue?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Book a strategy call. We&apos;ll show you exactly how AI lead response works for
                    your team&apos;s specific setup.
                  </p>
                  <Link
                    href="/book-demo"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
                  >Book a Demo<ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="text-muted-foreground mt-3 text-xs">
                    No credit card required. 30-minute call.
                  </p>
                </BorderGlow>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="bg-muted/30 border-border mt-8 rounded-xl border p-6">
              <h3 className="font-heading mb-2 font-semibold">How We Calculate This</h3>
              <p className="text-muted-foreground text-sm">
                Monthly leads = Monthly ad spend ÷ Cost per lead. Current appointments = Leads ×
                your current conversion rate. AI appointments = Leads × 7% (conservative AI
                conversion rate based on client data; some teams see 10%+). Closings = Appointments
                × 25% close rate. Revenue = Closings × average commission. Net ROI = Additional
                revenue − Prestyj Pro cost ($2,997/month). Results will vary based on your market,
                ad targeting, agent follow-through, and other factors.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
