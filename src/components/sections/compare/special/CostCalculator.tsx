"use client";

import { useState, useId, useCallback, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function AnimatedNumber({ value }: { value: number }) {
  const isFirstRender = useRef(true);
  const spring = useSpring(value, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("en-US")
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export function CostCalculator() {
  const monthsId = useId();
  const leadsId = useId();
  const commissionId = useId();
  const resultId = useId();

  const [months, setMonths] = useState(12);
  const [leads, setLeads] = useState(100);
  const [avgCommission, setAvgCommission] = useState(8000);

  const handleMonthsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMonths(Math.max(1, Math.min(60, value)));
    },
    []
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
      setAvgCommission(Math.max(0, value));
    },
    []
  );

  // Human ISA costs (verified industry data)
  const humanBaseSalary = 4000; // Monthly base
  const humanCommissionRate = 0.2; // 20% commission split (middle of 15-25% range)
  const humanTrainingCost = 2000; // One-time training cost
  const humanTurnoverRate = 0.5; // 50% annual turnover (ISA positions have high turnover)

  // Calculate expected deals per month (industry average conversion)
  const responseRate = 0.78; // 78% of buyers work with first responder
  const conversionRate = 0.02; // Conservative 2% lead-to-deal conversion
  const dealsPerMonth = leads * responseRate * conversionRate;
  const totalDeals = dealsPerMonth * months;
  const totalCommissionEarned = totalDeals * avgCommission;

  // Human ISA total cost
  const humanSalaryCost = humanBaseSalary * months;
  const humanCommissionCost = totalCommissionEarned * humanCommissionRate;
  const turnoverEvents = Math.floor((months / 12) * humanTurnoverRate);
  const humanTurnoverCost = turnoverEvents * humanTrainingCost;
  const humanTotalCost = humanSalaryCost + humanCommissionCost + humanTurnoverCost;

  // Potential savings (difference in commission structure)
  const potentialSavings = humanCommissionCost;

  return (
    <section id="calculator" className="border-b py-24" aria-labelledby="calculator-heading">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2
              id="calculator-heading"
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Cost Comparison Calculator
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              See how much a human ISA costs over time based on verified industry data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border bg-card shadow-lg">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calculator className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <span>Human ISA Cost Calculator</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-8 grid gap-6 sm:grid-cols-3">
                  <div className="space-y-2">
                    <label
                      htmlFor={monthsId}
                      className="block text-sm font-medium"
                    >
                      Time Period (months)
                    </label>
                    <Input
                      id={monthsId}
                      type="number"
                      min="1"
                      max="60"
                      value={months}
                      onChange={handleMonthsChange}
                      className="h-12 text-lg"
                      aria-describedby={`${monthsId}-hint`}
                    />
                    <p id={`${monthsId}-hint`} className="text-xs text-muted-foreground">
                      How long do you need ISA coverage?
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor={leadsId}
                      className="block text-sm font-medium"
                    >
                      Monthly Leads
                    </label>
                    <Input
                      id={leadsId}
                      type="number"
                      min="0"
                      value={leads}
                      onChange={handleLeadsChange}
                      className="h-12 text-lg"
                      aria-describedby={`${leadsId}-hint`}
                    />
                    <p id={`${leadsId}-hint`} className="text-xs text-muted-foreground">
                      Average leads per month
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor={commissionId}
                      className="block text-sm font-medium"
                    >
                      Avg Commission ($)
                    </label>
                    <Input
                      id={commissionId}
                      type="number"
                      min="0"
                      value={avgCommission}
                      onChange={handleCommissionChange}
                      className="h-12 text-lg"
                      aria-describedby={`${commissionId}-hint`}
                    />
                    <p id={`${commissionId}-hint`} className="text-xs text-muted-foreground">
                      Your average commission per deal
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-xl border border-destructive/20 bg-gradient-to-br from-destructive/10 via-background to-warning/10 p-6 sm:p-8"
                  role="region"
                  aria-labelledby={resultId}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-destructive" aria-hidden="true" />
                    <span
                      id={resultId}
                      className="text-sm font-medium uppercase tracking-wide text-muted-foreground"
                    >
                      Total Human ISA Cost
                    </span>
                  </div>
                  <div className="text-4xl font-bold sm:text-5xl">
                    $<AnimatedNumber value={humanTotalCost} />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/50 pt-4 sm:grid-cols-4">
                    <div>
                      <p className="text-xl font-semibold">
                        ${humanSalaryCost.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">base salary</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">
                        ${Math.round(humanCommissionCost).toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">commission splits (20%)</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold">
                        ${humanTurnoverCost.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">turnover costs</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-success">
                        {Math.round(totalDeals)} deals
                      </p>
                      <p className="text-xs text-muted-foreground">estimated closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-success/20 bg-success/10 p-4">
                  <p className="text-sm">
                    <strong className="text-success">Potential commission savings with AI:</strong>{" "}
                    ${Math.round(potentialSavings).toLocaleString()} over {months} months by
                    eliminating 15-25% commission splits.
                  </p>
                </div>

                <p className="mt-6 text-center text-xs text-muted-foreground">
                  Based on verified industry data: $4,000/month base salary, 15-25% commission
                  splits, 2-4 week training period, and high ISA turnover rates. Your actual
                  costs may vary.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
