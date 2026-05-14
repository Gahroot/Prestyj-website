import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { getPricingTier, isDirectBuyTier } from "@/lib/pricing-data";
import { PlanStartForm } from "./plan-start-form";

export const metadata: Metadata = {
  title: "Start your plan",
  description: "Two quick fields, then secure checkout.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ plan: string }>;
};

export default async function StartPlanPage({ params }: PageProps) {
  const { plan } = await params;
  if (!isDirectBuyTier(plan)) {
    notFound();
  }

  const tier = getPricingTier(plan);
  const firstMonthTotal = tier.monthlyPrice + tier.setupFee;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/pricing"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to pricing
        </Link>

        <div className="mb-6">
          <p className="text-primary mb-2 text-xs font-semibold tracking-wide uppercase">
            {tier.name} plan
          </p>
          <h1 className="font-heading text-foreground mb-3 text-3xl font-bold md:text-4xl">
            Start your {tier.name} plan
          </h1>
          <p className="text-muted-foreground">
            Two fields, then secure Stripe checkout. After payment we send you a kickoff link and
            start onboarding the same day.
          </p>
        </div>

        <div className="border-border bg-card mb-6 rounded-lg border p-5">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <span className="text-foreground font-semibold">Total today</span>
            <span className="font-heading text-foreground text-2xl font-bold">
              ${firstMonthTotal.toLocaleString()}
            </span>
          </div>
          <p className="text-muted-foreground mb-4 text-xs">
            ${tier.setupFee.toLocaleString()} one-time setup + ${tier.monthlyPrice.toLocaleString()}{" "}
            first month. Then ${tier.monthlyPrice.toLocaleString()}/mo, month-to-month. Cancel
            anytime.
          </p>
          <ul className="space-y-2">
            {tier.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <Check className="text-success mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <PlanStartForm plan={tier.id} planName={tier.name} />

        <p className="text-muted-foreground mt-6 text-center text-xs">
          Not sure yet?{" "}
          <Link href="/book-demo" className="text-primary hover:underline">
            Book a 30-min demo instead
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
