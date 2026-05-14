"use client";

import { useState } from "react";
import { CheckCircle, Calendar, TrendingUp, Mail } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ROIResults {
  missedCallsPerMonth: number;
  missedCallsPerYear: number;
  annualRevenueLost: number;
  potentialRecoveredRevenue: number;
  estimatedAICost: number;
  netAnnualBenefit: number;
  roi: number;
  additionalJobsPerMonth: number;
  paybackPeriod: number;
}

interface CalculatorInputs {
  businessType: string;
  monthlyCallVolume: string;
  currentAnswerRate: string;
  averageJobValue: string;
}

export default function CalculatorResultsPage() {
  // Initialize state lazily from sessionStorage
  const [results, setResults] = useState<ROIResults | null>(() => {
    if (typeof window !== "undefined") {
      const storedResults = sessionStorage.getItem("calculatorResults");
      return storedResults ? JSON.parse(storedResults) : null;
    }
    return null;
  });

  const [inputs, setInputs] = useState<CalculatorInputs | null>(() => {
    if (typeof window !== "undefined") {
      const storedInputs = sessionStorage.getItem("calculatorInputs");
      return storedInputs ? JSON.parse(storedInputs) : null;
    }
    return null;
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getBusinessTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      hvac: "HVAC",
      plumbing: "Plumbing",
      roofing: "Roofing",
      electrical: "Electrical",
      landscaping: "Landscaping",
      cleaning: "Cleaning Services",
      "pest-control": "Pest Control",
      "general-contractor": "General Contractor",
      other: "Home Services",
    };
    return labels[type] || type;
  };

  if (!results || !inputs) {
    return (
      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">Loading Your Results...</h1>
          <p className="text-muted-foreground mt-4">
            If this page doesn&apos;t load, please return to the calculator and try again.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
      {/* Success Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bg-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <CheckCircle className="text-primary h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Check Your Email!</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            We&apos;ve sent your detailed ROI report to your inbox.
          </p>
        </div>
      </section>

      {/* Results Summary */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Business Summary */}
          <Card>
            <CardHeader>
              <CardTitle>
                Your {getBusinessTypeLabel(inputs.businessType)} Business Analysis
              </CardTitle>
              <CardDescription>Based on your business data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-muted-foreground text-sm">Monthly Calls</p>
                  <p className="text-2xl font-bold">{inputs.monthlyCallVolume}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Current Answer Rate</p>
                  <p className="text-2xl font-bold">{inputs.currentAnswerRate}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Average Job Value</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(parseFloat(inputs.averageJobValue))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary h-5 w-5" />
                Your ROI Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 text-center">
                <p className="text-muted-foreground text-sm">Potential Annual Net Benefit</p>
                <p className="text-primary text-5xl font-bold">
                  {formatCurrency(results.netAnnualBenefit)}
                </p>
                <p className="text-muted-foreground text-sm">
                  That&apos;s {results.additionalJobsPerMonth} more jobs per month
                </p>
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-destructive/5 rounded-lg p-4 text-center">
                  <p className="text-muted-foreground mb-2 text-sm">Currently Losing</p>
                  <p className="text-destructive text-3xl font-bold">
                    {formatCurrency(results.annualRevenueLost)}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {results.missedCallsPerMonth} missed calls/month
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <p className="text-muted-foreground mb-2 text-sm">Could Recover</p>
                  <p className="text-primary text-3xl font-bold">
                    {formatCurrency(results.potentialRecoveredRevenue)}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">{results.roi}% ROI</p>
                </div>
              </div>

              <div className="from-primary/10 to-primary/5 rounded-lg bg-gradient-to-br p-6 text-center">
                <p className="mb-2 text-sm font-medium">Payback Period</p>
                <p className="text-primary text-4xl font-bold">{results.paybackPeriod}</p>
                <p className="text-muted-foreground text-sm">months</p>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Ready to Recover That Revenue?</CardTitle>
              <CardDescription>
                See how AI voice agents can start answering your calls in under 30 minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Book a 15-Minute Demo</p>
                    <p className="text-muted-foreground text-sm">
                      See the AI in action with a live call demonstration
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Quick Setup (30 Minutes)</p>
                    <p className="text-muted-foreground text-sm">
                      We&apos;ll configure your AI agent to match your business and connect to your
                      calendar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Start Capturing Every Lead</p>
                    <p className="text-muted-foreground text-sm">
                      Your AI agent answers calls 24/7, qualifies leads, and books appointments
                      automatically
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="flex-1" asChild>
                  <Link href="/book-demo">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Demo
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              <p className="text-muted-foreground text-center text-xs">
                No credit card required
              </p>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <div className="space-y-4 text-center">
            <p className="text-muted-foreground text-sm">
              Want to see more examples and case studies?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/results" className="text-primary hover:underline">
                View Case Studies
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/blog" className="text-primary hover:underline">
                Read Our Blog
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/ai-call-handling-calculator" className="text-primary hover:underline">
                Recalculate ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
