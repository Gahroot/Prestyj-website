"use client";

import { useState, useId, useCallback, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { SolutionCalculator } from "@/lib/solutions/types";

interface ROICalculatorProps {
  content: SolutionCalculator;
}

function AnimatedNumber({ value }: { value: number }) {
  const isFirstRender = useRef(true);
  const spring = useSpring(value, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString("en-US"));

  useEffect(() => {
    // Skip animation on first render to avoid hydration mismatch
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export function ROICalculator({ content }: ROICalculatorProps) {
  const leadsId = useId();
  const commissionId = useId();
  const resultId = useId();

  const [leads, setLeads] = useState(content.inputs.leads.defaultValue);
  const [commission, setCommission] = useState(content.inputs.commission.defaultValue);

  const handleLeadsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setLeads(Math.max(0, value));
  }, []);

  const handleCommissionChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setCommission(Math.max(0, value));
  }, []);

  // Calculate potential revenue:
  // reactivated leads * conversion rate * average commission
  const reactivatedLeads = Math.round(leads * content.reactivationRate);
  const potentialDeals = Math.round(reactivatedLeads * content.conversionRate);
  const potentialRevenue = potentialDeals * commission;

  return (
    <section id="calculator" className="py-24" aria-labelledby="calculator-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            id="calculator-heading"
            className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl"
          >
            {content.headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{content.subheadline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-border bg-card shadow-lg">
            <CardHeader className="border-border border-b">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Calculator className="text-primary h-5 w-5" aria-hidden="true" />
                </div>
                <span>ROI Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor={leadsId} className="text-foreground block text-sm font-medium">
                    {content.inputs.leads.label}
                  </label>
                  <Input
                    id={leadsId}
                    type="number"
                    min="0"
                    value={leads}
                    onChange={handleLeadsChange}
                    placeholder={content.inputs.leads.placeholder}
                    className="h-12 text-lg"
                    aria-describedby={`${leadsId}-hint`}
                  />
                  <p id={`${leadsId}-hint`} className="text-muted-foreground text-xs">
                    Enter the total number of leads in your database
                  </p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor={commissionId}
                    className="text-foreground block text-sm font-medium"
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
                    className="h-12 text-lg"
                    aria-describedby={`${commissionId}-hint`}
                  />
                  <p id={`${commissionId}-hint`} className="text-muted-foreground text-xs">
                    Your typical commission from a closed deal
                  </p>
                </div>
              </div>

              <div
                className="from-primary/10 via-background to-success/10 border-primary/20 rounded-xl border bg-gradient-to-br p-6 sm:p-8"
                role="region"
                aria-labelledby={resultId}
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="mb-4 flex items-center gap-3">
                  <TrendingUp className="text-success h-6 w-6" aria-hidden="true" />
                  <span
                    id={resultId}
                    className="text-muted-foreground text-sm font-medium tracking-wide uppercase"
                  >
                    {content.resultLabel}
                  </span>
                </div>
                <div className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
                  $<AnimatedNumber value={potentialRevenue} />
                </div>
                <div className="border-border/50 mt-4 grid grid-cols-2 gap-4 border-t pt-4">
                  <div>
                    <p className="text-foreground text-2xl font-semibold">
                      {reactivatedLeads.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground text-sm">leads reactivated</p>
                  </div>
                  <div>
                    <p className="text-foreground text-2xl font-semibold">
                      {potentialDeals.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground text-sm">potential deals</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mt-6 text-center text-xs">
                Based on {(content.reactivationRate * 100).toFixed(0)}% reactivation rate and{" "}
                {(content.conversionRate * 100).toFixed(0)}% conversion rate. Results may vary.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
