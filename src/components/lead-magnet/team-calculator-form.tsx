"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { teamCalculatorSchema, responseTimeOptions, roleOptions } from "@/lib/validations/lead-magnet-schemas";
import type { TeamCalculatorInput } from "@/lib/validations/lead-magnet-schemas";
import { calculateCommissionLoss, formatCurrency, formatNumber } from "@/lib/calculator/commission-loss";
import type { CalculatorResults } from "@/lib/calculator/commission-loss";

const TOTAL_STEPS = 3;

export function TeamCalculatorForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<Partial<TeamCalculatorInput>>({
    teamSize: undefined,
    monthlyLeads: undefined,
    avgCommission: undefined,
    closeRate: undefined,
    responseTime: "4-hour",
    name: "",
    email: "",
    companyName: "",
    role: undefined,
  });

  const [calculationResults, setCalculationResults] = useState<CalculatorResults | null>(null);

  const updateField = (field: keyof TeamCalculatorInput, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.teamSize || formData.teamSize < 2) {
        newErrors.teamSize = "Team size must be at least 2 agents";
      }
      if (!formData.monthlyLeads || formData.monthlyLeads < 10) {
        newErrors.monthlyLeads = "Minimum 10 leads per month";
      }
    }

    if (stepNumber === 2) {
      if (!formData.avgCommission || formData.avgCommission < 1000) {
        newErrors.avgCommission = "Average commission seems low";
      }
      if (!formData.closeRate || formData.closeRate < 0.1) {
        newErrors.closeRate = "Close rate must be at least 0.1%";
      }
      if (!formData.responseTime) {
        newErrors.responseTime = "Please select a response time";
      }
    }

    if (stepNumber === 3) {
      if (!formData.name || formData.name.length < 2) {
        newErrors.name = "Name is required";
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Valid email required";
      }
      if (!formData.role) {
        newErrors.role = "Please select your role";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step === 2) {
        // Calculate results before moving to step 3
        try {
          const validated = teamCalculatorSchema.parse(formData);
          const results = calculateCommissionLoss(validated);
          setCalculationResults(results);
        } catch (error) {
          console.error("Validation error:", error);
          setErrors({ general: "Please check your inputs" });
          return;
        }
      }
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3) || !calculationResults) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resourceId: "team-commission-calculator",
          formData,
          calculationResults,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      await response.json();

      // Redirect to thank you page with results
      const resultsParam = encodeURIComponent(JSON.stringify(calculationResults));
      window.location.href = `/team-commission-calculator/thank-you?results=${resultsParam}&email=${formData.email}`;
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ general: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Step {step} of {TOTAL_STEPS}</span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}% Complete</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Tell us about your team</h2>
              <p className="text-muted-foreground">
                We&apos;ll use this to calculate your commission losses
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="teamSize">How many agents are on your team?</Label>
                <Input
                  id="teamSize"
                  type="number"
                  min="2"
                  max="1000"
                  placeholder="e.g., 10"
                  value={formData.teamSize ?? ""}
                  onChange={(e) => updateField("teamSize", parseInt(e.target.value) || undefined)}
                />
                {errors.teamSize && (
                  <p className="mt-1 text-sm text-destructive">{errors.teamSize}</p>
                )}
              </div>

              <div>
                <Label htmlFor="monthlyLeads">How many leads does your team get per month?</Label>
                <Input
                  id="monthlyLeads"
                  type="number"
                  min="10"
                  placeholder="e.g., 500"
                  value={formData.monthlyLeads ?? ""}
                  onChange={(e) => updateField("monthlyLeads", parseInt(e.target.value) || undefined)}
                />
                {errors.monthlyLeads && (
                  <p className="mt-1 text-sm text-destructive">{errors.monthlyLeads}</p>
                )}
              </div>
            </div>

            <Button onClick={handleNext} className="w-full" size="lg">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Team economics</h2>
              <p className="text-muted-foreground">
                Help us calculate your potential losses
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="avgCommission">Average commission per closed deal</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="avgCommission"
                    type="number"
                    min="1000"
                    placeholder="e.g., 8000"
                    className="pl-6"
                    value={formData.avgCommission ?? ""}
                    onChange={(e) => updateField("avgCommission", parseInt(e.target.value) || undefined)}
                  />
                </div>
                {errors.avgCommission && (
                  <p className="mt-1 text-sm text-destructive">{errors.avgCommission}</p>
                )}
              </div>

              <div>
                <Label htmlFor="closeRate">Team close rate</Label>
                <div className="relative">
                  <Input
                    id="closeRate"
                    type="number"
                    min="0.1"
                    max="100"
                    step="0.1"
                    placeholder="e.g., 30"
                    className="pr-6"
                    value={formData.closeRate ?? ""}
                    onChange={(e) => updateField("closeRate", parseFloat(e.target.value) || undefined)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                </div>
                {errors.closeRate && (
                  <p className="mt-1 text-sm text-destructive">{errors.closeRate}</p>
                )}
              </div>

              <div>
                <Label htmlFor="responseTime">Current average response time</Label>
                <Select
                  value={formData.responseTime}
                  onValueChange={(value: string) => updateField("responseTime", value)}
                >
                  <SelectTrigger id="responseTime">
                    <SelectValue placeholder="Select response time" />
                  </SelectTrigger>
                  <SelectContent>
                    {responseTimeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.responseTime && (
                  <p className="mt-1 text-sm text-destructive">{errors.responseTime}</p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleBack} variant="outline" className="w-full" size="lg">
                Back
              </Button>
              <Button onClick={handleNext} className="w-full" size="lg">
                Calculate
              </Button>
            </div>
          </div>
        )}

        {step === 3 && calculationResults && (
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Your Results</h2>
              <p className="text-muted-foreground">
                Here&apos;s what slow response times are costing your team
              </p>
            </div>

            {/* Results Preview */}
            <div className="space-y-4 rounded-lg border bg-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Loss</p>
                  <p className="text-2xl font-bold text-destructive">
                    {formatCurrency(calculationResults.lostCommissionPerMonth)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Loss</p>
                  <p className="text-2xl font-bold text-destructive">
                    {formatCurrency(calculationResults.lostCommissionPerYear)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lost Deals/Month</p>
                  <p className="text-2xl font-bold">{formatNumber(calculationResults.lostDealsPerMonth)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Per Agent/Month</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(calculationResults.perAgentLossPerMonth)}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground">Team Efficiency Score</p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${calculationResults.teamEfficiencyScore}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  <span className="text-xl font-bold">{calculationResults.teamEfficiencyScore}/100</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Get your full report via email</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll send you a detailed PDF with ROI analysis and next steps
                </p>
              </div>

              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="ABC Realty"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="role">Your Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value: string) => updateField("role", value)}
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="mt-1 text-sm text-destructive">{errors.role}</p>
                )}
              </div>
            </div>

            {errors.general && (
              <p className="text-sm text-destructive">{errors.general}</p>
            )}

            <div className="flex gap-4">
              <Button onClick={handleBack} variant="outline" className="w-full" size="lg">
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Email My Report"}
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
