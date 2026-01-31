import type { Metadata } from "next";
import { TeamCalculatorForm } from "@/components/lead-magnet/team-calculator-form";

export const metadata: Metadata = {
  title: "Team Commission Loss Calculator | Free Real Estate ROI Tool",
  description: "Calculate how much commission your real estate team is losing due to slow lead response. Free calculator for brokers, team leads, and ISA managers.",
  keywords: [
    "real estate team ROI calculator",
    "commission loss calculator",
    "lead response time ROI",
    "real estate team efficiency",
    "brokerage lead management",
  ],
  openGraph: {
    title: "How Much Commission Is Your Team Losing to Slow Leads?",
    description: "Free calculator shows your team&apos;s monthly & annual commission loss",
    type: "website",
  },
};

export default function TeamCommissionCalculatorPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          How Much Commission Is Your Team Losing to Slow Lead Response?
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Real estate teams lose an average of $180K annually due to 4-hour response times.
          Calculate your team&apos;s losses in 60 seconds.
        </p>

        {/* Trust Signals */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border bg-card p-4">
            <p className="text-3xl font-bold text-primary">78%</p>
            <p className="text-sm text-muted-foreground">
              of buyers work with the first agent who responds
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-3xl font-bold text-destructive">4+ hours</p>
            <p className="text-sm text-muted-foreground">
              industry average response time
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-3xl font-bold text-primary">47 sec</p>
            <p className="text-sm text-muted-foreground">
              AI average response time
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Form */}
      <TeamCalculatorForm />

      {/* What You&apos;ll Get Section */}
      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-bold">What You&apos;ll Get</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex gap-3 rounded-lg border bg-card p-4">
            <svg
              className="h-6 w-6 shrink-0 text-primary"
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
            <div>
              <p className="font-semibold">Monthly & Annual Loss Breakdown</p>
              <p className="text-sm text-muted-foreground">
                See exactly how much commission your team is leaving on the table
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg border bg-card p-4">
            <svg
              className="h-6 w-6 shrink-0 text-primary"
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
            <div>
              <p className="font-semibold">Per-Agent Efficiency Analysis</p>
              <p className="text-sm text-muted-foreground">
                Understand individual agent impact and team performance
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg border bg-card p-4">
            <svg
              className="h-6 w-6 shrink-0 text-primary"
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
            <div>
              <p className="font-semibold">ROI Comparison vs. AI Automation</p>
              <p className="text-sm text-muted-foreground">
                See potential recovery with instant AI response
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg border bg-card p-4">
            <svg
              className="h-6 w-6 shrink-0 text-primary"
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
            <div>
              <p className="font-semibold">Benchmark Against Industry Standards</p>
              <p className="text-sm text-muted-foreground">
                Compare your team&apos;s efficiency to top performers
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg border bg-card p-4">
            <svg
              className="h-6 w-6 shrink-0 text-primary"
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
            <div>
              <p className="font-semibold">Actionable Next Steps</p>
              <p className="text-sm text-muted-foreground">
                Get prioritized recommendations ranked by impact
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg border bg-card p-4">
            <svg
              className="h-6 w-6 shrink-0 text-primary"
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
            <div>
              <p className="font-semibold">Professional PDF Report</p>
              <p className="text-sm text-muted-foreground">
                Downloadable report you can share with your team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Statement */}
      <div className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-sm text-muted-foreground">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </main>
  );
}
