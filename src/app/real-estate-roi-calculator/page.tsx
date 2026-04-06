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

  const handleInputChange = (field: keyof CalculatorInputs) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value) || 0;
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-16">
        {/* Hero */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Real Estate AI ROI Calculator
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tighter mb-6">
              How Much Revenue Is Slow Lead Response{" "}
              <span className="text-primary">Costing Your Team?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter your team&apos;s numbers below. See exactly how many additional closings AI
              lead response would generate — and what that means in commission revenue.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <BorderGlow borderRadius={18} innerClassName="p-8 space-y-6">
                <h2 className="text-xl font-heading font-bold">Your Team&apos;s Numbers</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Monthly Ad Spend (Facebook + YouTube)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <input
                        type="number"
                        value={inputs.monthlyAdSpend}
                        onChange={handleInputChange("monthlyAdSpend")}
                        min="0"
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Average Cost Per Lead
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <input
                        type="number"
                        value={inputs.costPerLead}
                        onChange={handleInputChange("costPerLead")}
                        min="0"
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Facebook RE leads average $25–$60. YouTube $40–$120.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
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
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        %
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Industry average without AI: 1–3%. With AI: 5–10%.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Average Commission Per Closing
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <input
                        type="number"
                        value={inputs.averageCommission}
                        onChange={handleInputChange("averageCommission")}
                        min="0"
                        step="500"
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Total brokerage commission (both sides) per deal.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Team Size (Number of Agents)
                    </label>
                    <input
                      type="number"
                      value={inputs.teamSize}
                      onChange={handleInputChange("teamSize")}
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
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
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Monthly Lead Volume</h3>
                  </div>
                  <div className="text-4xl font-heading font-bold text-foreground mb-1">
                    {results.monthlyLeads}
                  </div>
                  <p className="text-sm text-muted-foreground">leads per month from your ad spend</p>
                </BorderGlow>

                {/* Appointments Comparison */}
                <BorderGlow borderRadius={18} innerClassName="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Monthly Appointments</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Without AI</p>
                      <div className="text-3xl font-heading font-bold text-muted-foreground">
                        {formatNumber(results.currentAppointments)}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">With AI</p>
                      <div className="text-3xl font-heading font-bold text-primary">
                        {formatNumber(results.aiAppointments)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      +{formatNumber(results.additionalAppointments)} additional appointments/month
                    </p>
                  </div>
                </BorderGlow>

                {/* Revenue Impact */}
                <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Revenue Impact</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Additional Monthly Revenue
                      </p>
                      <div className="text-3xl font-heading font-bold text-primary">
                        {formatCurrency(results.additionalMonthlyRevenue)}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Additional Annual Revenue
                      </p>
                      <div className="text-4xl font-heading font-bold text-primary">
                        {formatCurrency(results.additionalAnnualRevenue)}
                      </div>
                    </div>

                    <div className="border-t border-primary/20 pt-4">
                      <p className="text-sm text-muted-foreground mb-1">
                        Annual AI Cost (Prestyj Pro)
                      </p>
                      <div className="text-xl font-heading font-semibold text-muted-foreground">
                        -{formatCurrency(results.aiCost * 12)}
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4">
                      <p className="text-sm font-medium text-primary mb-1">Net Annual ROI</p>
                      <div className="text-3xl font-heading font-bold text-primary">
                        {formatCurrency(results.netAnnualROI)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <BorderGlow borderRadius={18} innerClassName="p-6 text-center">
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Ready to Unlock This Revenue?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a strategy call. We&apos;ll show you exactly how AI lead response works
                    for your team&apos;s specific setup.
                  </p>
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Book Your Free Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-xs text-muted-foreground mt-3">
                    No credit card required. 30-minute call.
                  </p>
                </BorderGlow>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
              <h3 className="font-heading font-semibold mb-2">How We Calculate This</h3>
              <p className="text-sm text-muted-foreground">
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
