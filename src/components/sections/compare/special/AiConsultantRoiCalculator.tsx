"use client";

import { useState, useId, useCallback, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

export function AiConsultantRoiCalculator() {
  const monthlyMinutesId = useId();
  const missedCallsId = useId();
  const avgJobValueId = useId();

  const [monthlyMinutes, setMonthlyMinutes] = useState(3000);
  const [missedCalls, setMissedCalls] = useState(50);
  const [avgJobValue, setAvgJobValue] = useState(400);

  const handleMinutesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMonthlyMinutes(Math.max(0, value));
    },
    []
  );

  const handleMissedCallsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setMissedCalls(Math.max(0, value));
    },
    []
  );

  const handleJobValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || 0;
      setAvgJobValue(Math.max(0, value));
    },
    []
  );

  // AI Consultant costs (Prestyj model)
  const consultantMonthly = 3500; // Flat-rate consultant
  const consultantImplementation = 5000; // One-time

  // DIY Platform costs
  const platformPerMinute = 0.07; // Average platform rate
  const llmCost = 0.05; // Per minute
  const sttCost = 0.02; // Per minute
  const ttsCost = 0.02; // Per minute
  const telephonyCost = 0.02; // Per minute
  const diyTotalPerMinute = platformPerMinute + llmCost + sttCost + ttsCost + telephonyCost; // $0.18/minute
  const diyMonthly = monthlyMinutes * diyTotalPerMinute;
  const diyImplementation = 15000; // DIY requires more implementation work

  // Revenue calculations
  const captureRate = 0.7; // AI captures 70% of missed calls
  const bookingRate = 0.6; // 60% of captured calls convert to jobs
  const additionalJobs = missedCalls * captureRate * bookingRate;
  const additionalRevenue = additionalJobs * avgJobValue;

  // Annual calculations
  const months = 12;
  const consultantAnnualTotal = (consultantMonthly * months) + consultantImplementation;
  const diyAnnualTotal = (diyMonthly * months) + diyImplementation;

  // ROI calculations
  const consultantRoi = additionalRevenue - consultantAnnualTotal;
  const diyRoi = additionalRevenue - diyAnnualTotal;
  const consultantPaybackMonths = consultantAnnualTotal / (additionalRevenue / months);
  const diyPaybackMonths = diyAnnualTotal / (additionalRevenue / months);

  return (
    <section id="roi-calculator" className="border-b py-24" aria-labelledby="roi-calculator-heading">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2
              id="roi-calculator-heading"
              className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              AI Consultant ROI Calculator
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Compare done-for-you AI consultants vs. DIY platforms. See real ROI based on your business metrics.
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
                  <span>Calculate Your AI ROI</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-8 grid gap-6 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor={monthlyMinutesId}>Monthly Call Minutes</Label>
                    <Input
                      id={monthlyMinutesId}
                      type="number"
                      min="0"
                      value={monthlyMinutes}
                      onChange={handleMinutesChange}
                      className="h-12 text-lg"
                      aria-describedby={`${monthlyMinutesId}-hint`}
                    />
                    <p id={`${monthlyMinutesId}-hint`} className="text-xs text-muted-foreground">
                      Average minutes per month
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={missedCallsId}>Missed Calls per Month</Label>
                    <Input
                      id={missedCallsId}
                      type="number"
                      min="0"
                      value={missedCalls}
                      onChange={handleMissedCallsChange}
                      className="h-12 text-lg"
                      aria-describedby={`${missedCallsId}-hint`}
                    />
                    <p id={`${missedCallsId}-hint`} className="text-xs text-muted-foreground">
                      Calls you&apos;re currently missing
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={avgJobValueId}>Average Job Value ($)</Label>
                    <Input
                      id={avgJobValueId}
                      type="number"
                      min="0"
                      value={avgJobValue}
                      onChange={handleJobValueChange}
                      className="h-12 text-lg"
                      aria-describedby={`${avgJobValueId}-hint`}
                    />
                    <p id={`${avgJobValueId}-hint`} className="text-xs text-muted-foreground">
                      Revenue per job/booking
                    </p>
                  </div>
                </div>

                {/* Revenue Impact */}
                <div
                  className="mb-6 rounded-xl border border-success/20 bg-gradient-to-br from-success/10 via-background to-primary/10 p-6"
                  role="region"
                  aria-labelledby="revenue-heading"
                  aria-live="polite"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-success" aria-hidden="true" />
                    <span
                      id="revenue-heading"
                      className="text-sm font-medium uppercase tracking-wide text-muted-foreground"
                    >
                      Additional Revenue (Annual)
                    </span>
                  </div>
                  <div className="text-4xl font-bold sm:text-5xl">
                    $<AnimatedNumber value={additionalRevenue} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    From capturing {Math.round(additionalJobs)} additional jobs per year
                  </p>
                </div>

                {/* Cost Comparison */}
                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  {/* Done-for-You Consultant */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h3 className="font-semibold">Done-for-You Consultant</h3>
                    </div>
                    <div className="mb-4 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Monthly:</span>
                        <span className="font-medium">${consultantMonthly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Implementation:</span>
                        <span className="font-medium">${consultantImplementation.toLocaleString()}</span>
                      </div>
                      <div className="mt-2 flex justify-between border-t border-border pt-2">
                        <span className="font-medium">Annual Total:</span>
                        <span className="font-bold">${consultantAnnualTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-background p-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Net ROI:</span>
                        <span className="font-bold text-success">
                          ${Math.round(consultantRoi).toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between text-xs">
                        <span className="text-muted-foreground">Payback Period:</span>
                        <span className="font-medium">
                          {Math.round(consultantPaybackMonths)} months
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* DIY Platform */}
                  <div className="rounded-xl border border-warning/20 bg-warning/5 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-warning" aria-hidden="true" />
                      <h3 className="font-semibold">DIY Platform</h3>
                    </div>
                    <div className="mb-4 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Monthly:</span>
                        <span className="font-medium">${Math.round(diyMonthly).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Implementation:</span>
                        <span className="font-medium">${diyImplementation.toLocaleString()}</span>
                      </div>
                      <div className="mt-2 flex justify-between border-t border-border pt-2">
                        <span className="font-medium">Annual Total:</span>
                        <span className="font-bold">${Math.round(diyAnnualTotal).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-background p-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Net ROI:</span>
                        <span className={`font-bold ${diyRoi > 0 ? 'text-success' : 'text-destructive'}`}>
                          ${Math.round(diyRoi).toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between text-xs">
                        <span className="text-muted-foreground">Payback Period:</span>
                        <span className="font-medium">
                          {Math.round(diyPaybackMonths)} months
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Message */}
                {consultantAnnualTotal < diyAnnualTotal && (
                  <div className="rounded-lg border border-success/20 bg-success/10 p-4">
                    <p className="text-sm">
                      <strong className="text-success">Done-for-you saves you</strong> ${Math.round(diyAnnualTotal - consultantAnnualTotal).toLocaleString()} annually
                      compared to DIY platforms, with faster implementation and better results.
                    </p>
                  </div>
                )}

                <p className="mt-6 text-center text-xs text-muted-foreground">
                  Based on typical service business metrics: 70% missed call capture rate, 60% booking rate,
                  DIY costs ($0.18/minute for platform + LLM + STT/TTS + telephony), and $15K DIY implementation.
                  Your actual results may vary.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
