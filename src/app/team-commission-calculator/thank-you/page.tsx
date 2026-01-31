"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatNumber } from "@/lib/calculator/commission-loss";
import type { CalculatorResults } from "@/lib/calculator/commission-loss";

function ThankYouContent() {
  const searchParams = useSearchParams();

  const results = useMemo(() => {
    const resultsParam = searchParams.get("results");
    if (!resultsParam) return null;

    try {
      return JSON.parse(decodeURIComponent(resultsParam)) as CalculatorResults;
    } catch (error) {
      console.error("Failed to parse results:", error);
      return null;
    }
  }, [searchParams]);

  const email = useMemo(() => {
    return searchParams.get("email") || "";
  }, [searchParams]);

  if (!results) {
    return (
      <main className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Loading your results...</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Success Message */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Your Commission Loss Report Is Ready!
          </h1>
          {email && (
            <p className="text-lg text-muted-foreground">
              We&apos;ve sent it to <span className="font-semibold">{email}</span>
            </p>
          )}
        </div>

        {/* Results Preview */}
        <div className="mb-12 rounded-lg border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-bold">Your Team&apos;s Results</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-4">
              <p className="mb-2 text-sm text-muted-foreground">Monthly Loss</p>
              <p className="text-2xl font-bold text-destructive md:text-3xl">
                {formatCurrency(results.lostCommissionPerMonth)}
              </p>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <p className="mb-2 text-sm text-muted-foreground">Annual Loss</p>
              <p className="text-2xl font-bold text-destructive md:text-3xl">
                {formatCurrency(results.lostCommissionPerYear)}
              </p>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <p className="mb-2 text-sm text-muted-foreground">Lost Deals/Month</p>
              <p className="text-2xl font-bold md:text-3xl">
                {formatNumber(results.lostDealsPerMonth)}
              </p>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <p className="mb-2 text-sm text-muted-foreground">Per Agent/Month</p>
              <p className="text-2xl font-bold md:text-3xl">
                {formatCurrency(results.perAgentLossPerMonth)}
              </p>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <p className="mb-2 text-sm text-muted-foreground">Efficiency Score</p>
              <p className="text-2xl font-bold md:text-3xl">
                {results.teamEfficiencyScore}/100
              </p>
            </div>

            <div className="rounded-lg border bg-background p-4">
              <p className="mb-2 text-sm text-muted-foreground">Potential Recovery</p>
              <p className="text-2xl font-bold text-primary md:text-3xl">
                {formatCurrency(results.benchmarkComparison.potentialRecovery)}/mo
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-primary/5 p-4">
            <p className="text-center text-sm font-semibold md:text-base">
              That&apos;s{" "}
              <span className="text-lg text-primary md:text-xl">
                {formatCurrency(results.lostCommissionPerYear)}
              </span>{" "}
              in missed commissions per year across your team
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="mb-12 rounded-lg border bg-card p-6 text-center md:p-8">
          <h2 className="mb-4 text-2xl font-bold">Get Your Full Report</h2>
          <p className="mb-6 text-muted-foreground">
            Download the complete PDF with ROI analysis, benchmarks, and actionable next steps
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="/downloads/team-commission-report-template.pdf" download>
              Download Report Now
            </a>
          </Button>
        </div>

        {/* ROI Preview */}
        <div className="mb-12 rounded-lg border bg-card p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold">Recovery Opportunity</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Estimated AI Investment</p>
              <p className="mb-4 text-3xl font-bold">
                {formatCurrency(results.roiAnalysis.estimatedAICost)}/mo
              </p>
              <p className="text-sm text-muted-foreground">
                Break-even in{" "}
                <span className="font-semibold">
                  {Math.ceil(results.roiAnalysis.breakEvenMonths)} months
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-muted-foreground">Annual Commission Recovery</p>
              <p className="mb-4 text-3xl font-bold text-primary">
                {formatCurrency(results.roiAnalysis.annualRecovery)}
              </p>
              <p className="text-sm text-muted-foreground">
                ROI:{" "}
                <span className="font-semibold text-primary">
                  {formatNumber(results.roiAnalysis.roi)}%
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps CTA */}
        <div className="rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center md:p-8">
          <h2 className="mb-4 text-2xl font-bold">Want to Recover This Lost Commission?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            See how Prestyj helps teams like yours respond in 47 seconds with AI voice and text agents
          </p>
          <Button asChild size="lg">
            <Link href="/book-demo">Book a 30-Minute Strategy Call</Link>
          </Button>
        </div>

        {/* Email Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Check your inbox for the full report.{" "}
            <span className="font-semibold">Add team@prestyj.com to your contacts</span>{" "}
            to ensure delivery.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <main className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Loading your results...</h1>
        </div>
      </main>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
