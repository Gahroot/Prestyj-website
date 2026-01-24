"use client";

import { useState, useId, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { SolutionCalculator } from "@/lib/solutions/types";

interface ROICalculatorProps {
  content: SolutionCalculator;
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("en-US")
  );

  // Update spring target when value changes
  spring.set(value);

  return <motion.span>{display}</motion.span>;
}

export function ROICalculator({ content }: ROICalculatorProps) {
  const leadsId = useId();
  const commissionId = useId();
  const resultId = useId();

  const [leads, setLeads] = useState(content.inputs.leads.defaultValue);
  const [commission, setCommission] = useState(
    content.inputs.commission.defaultValue
  );

  const handleLeadsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setLeads(Math.max(0, value));
    },
    []
  );

  const handleCommissionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setCommission(Math.max(0, value));
    },
    []
  );

  // Calculate potential revenue:
  // reactivated leads * conversion rate * average commission
  const reactivatedLeads = Math.round(leads * content.reactivationRate);
  const potentialDeals = Math.round(reactivatedLeads * content.conversionRate);
  const potentialRevenue = potentialDeals * commission;

  return (
    <section
      id="calculator"
      className="py-24"
      aria-labelledby="calculator-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            id="calculator-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
          >
            {content.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {content.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <span>ROI Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label
                    htmlFor={leadsId}
                    className="block text-sm font-medium text-foreground"
                  >
                    {content.inputs.leads.label}
                  </label>
                  <Input
                    id={leadsId}
                    type="number"
                    min="0"
                    value={leads}
                    onChange={handleLeadsChange}
                    placeholder={content.inputs.leads.placeholder}
                    className="text-lg h-12"
                    aria-describedby={`${leadsId}-hint`}
                  />
                  <p
                    id={`${leadsId}-hint`}
                    className="text-xs text-muted-foreground"
                  >
                    Enter the total number of leads in your database
                  </p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor={commissionId}
                    className="block text-sm font-medium text-foreground"
                  >
                    {content.inputs.commission.label}
                  </label>
                  <Input
                    id={commissionId}
                    type="number"
                    min="0"
                    value={commission}
                    onChange={handleCommissionChange}
                    placeholder={content.inputs.commission.placeholder}
                    className="text-lg h-12"
                    aria-describedby={`${commissionId}-hint`}
                  />
                  <p
                    id={`${commissionId}-hint`}
                    className="text-xs text-muted-foreground"
                  >
                    Your typical commission from a closed deal
                  </p>
                </div>
              </div>

              <div
                className="bg-gradient-to-br from-primary/10 via-background to-success/10 rounded-xl p-6 sm:p-8 border border-primary/20"
                role="region"
                aria-labelledby={resultId}
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp
                    className="h-6 w-6 text-success"
                    aria-hidden="true"
                  />
                  <span
                    id={resultId}
                    className="text-sm font-medium text-muted-foreground uppercase tracking-wide"
                  >
                    {content.resultLabel}
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                  $<AnimatedNumber value={potentialRevenue} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-2xl font-semibold text-foreground">
                      {reactivatedLeads.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      leads reactivated
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">
                      {potentialDeals.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      potential deals
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Based on {(content.reactivationRate * 100).toFixed(0)}%
                reactivation rate and{" "}
                {(content.conversionRate * 100).toFixed(0)}% conversion rate.
                Results may vary.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
