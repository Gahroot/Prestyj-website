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
import {
  teamCalculatorSchema,
  responseTimeOptions,
  roleOptions,
} from "@/lib/validations/lead-magnet-schemas";
import BorderGlow from "@/components/ui/border-glow";
import type { TeamCalculatorInput } from "@/lib/validations/lead-magnet-schemas";
import {
  calculateCommissionLoss,
  formatCurrency,
  formatNumber,
} from "@/lib/calculator/commission-loss";
import type { CalculatorResults } from "@/lib/calculator/commission-loss";

const TOTAL_STEPS = 3;

export function TeamCalculatorForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<Partial<TeamCalculatorInput>>({
    responseTime: "4-hour",
    name: "",
    email: "",
    companyName: "",
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
        <div className="text-muted-foreground flex items-center justify-between text-sm">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}% Complete</span>
        </div>
        <div className="bg-muted mt-2 h-2 w-full overflow-hidden rounded-full">
          <motion.div
            className="bg-primary h-full"
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
                  <p className="text-destructive mt-1 text-sm">{errors.teamSize}</p>
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
                  onChange={(e) =>
                    updateField("monthlyLeads", parseInt(e.target.value) || undefined)
                  }
                />
                {errors.monthlyLeads && (
                  <p className="text-destructive mt-1 text-sm">{errors.monthlyLeads}</p>
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
              <p className="text-muted-foreground">Help us calculate your potential losses</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="avgCommission">Average commission per closed deal</Label>
                <div className="relative">
                  <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">
                    $
                  </span>
                  <Input
                    id="avgCommission"
                    type="number"
                    min="1000"
                    placeholder="e.g., 8000"
                    className="pl-6"
                    value={formData.avgCommission ?? ""}
                    onChange={(e) =>
                      updateField("avgCommission", parseInt(e.target.value) || undefined)
                    }
                  />
                </div>
                {errors.avgCommission && (
                  <p className="text-destructive mt-1 text-sm">{errors.avgCommission}</p>
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
                    onChange={(e) =>
                      updateField("closeRate", parseFloat(e.target.value) || undefined)
                    }
                  />
                  <span className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2">
                    %
                  </span>
                </div>
                {errors.closeRate && (
                  <p className="text-destructive mt-1 text-sm">{errors.closeRate}</p>
                )}
              </div>

              <div>
                <Label htmlFor="responseTime">Current average response time</Label>
                <Select
                  {...(formData.responseTime !== undefined && { value: formData.responseTime })}
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
                  <p className="text-destructive mt-1 text-sm">{errors.responseTime}</p>
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
            <BorderGlow borderRadius={10} innerClassName="p-6" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-muted-foreground text-sm">Monthly Loss</p>
                  <p className="text-destructive text-2xl font-bold">
                    {formatCurrency(calculationResults.lostCommissionPerMonth)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Annual Loss</p>
                  <p className="text-destructive text-2xl font-bold">
                    {formatCurrency(calculationResults.lostCommissionPerYear)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Lost Deals/Month</p>
                  <p className="text-2xl font-bold">
                    {formatNumber(calculationResults.lostDealsPerMonth)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Per Agent/Month</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(calculationResults.perAgentLossPerMonth)}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-muted-foreground text-sm">Team Efficiency Score</p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="bg-muted h-2 flex-1 overflow-hidden rounded-full">
                    <motion.div
                      className="bg-primary h-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${calculationResults.teamEfficiencyScore}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                  <span className="text-xl font-bold">
                    {calculationResults.teamEfficiencyScore}/100
                  </span>
                </div>
              </div>
            </BorderGlow>

            {/* Contact Form */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Get your full report via email</p>
                <p className="text-muted-foreground text-sm">
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
                {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name}</p>}
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
                {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email}</p>}
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
                  {...(formData.role !== undefined && { value: formData.role })}
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
                {errors.role && <p className="text-destructive mt-1 text-sm">{errors.role}</p>}
              </div>
            </div>

            {errors.general && <p className="text-destructive text-sm">{errors.general}</p>}

            <div className="flex gap-4">
              <Button onClick={handleBack} variant="outline" className="w-full" size="lg">
                Back
              </Button>
              <Button onClick={handleSubmit} className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Email My Report"}
              </Button>
            </div>

            <p className="text-muted-foreground text-center text-xs">
              We respect your privacy. No spam, unsubscribe anytime.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
