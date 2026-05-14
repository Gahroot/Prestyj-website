import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/ui/copy-button";
import { FOUNDING_COHORT } from "@/lib/founding-cohort";

const PAGE_URL = "https://prestyj.com/founding-cohort/approved";

export const metadata: Metadata = {
  title: "You're in — Founding Cohort Approved",
  description:
    "Founding Cohort application approved. Use your promo code at checkout to claim your free 300-ad batch.",
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: false },
};

export default function FoundingCohortApprovedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-full">
                <CheckCircle2 className="h-8 w-8" />
              </div>
            </div>
            <div className="flex justify-center">
              <Badge variant="outline" className="border-primary/50 text-primary">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Founding Cohort · Approved
              </Badge>
            </div>
            <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              You&apos;re in.
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg">
              You&apos;ve got a founding spot. Here&apos;s how to claim your free 300-ad batch.
            </p>
          </div>

          {/* Code card */}
          <div className="border-primary/40 bg-primary/5 mt-12 rounded-2xl border p-6 sm:p-8">
            <p className="text-primary text-xs font-semibold tracking-wider uppercase">
              Your promo code
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <code className="font-heading text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                {FOUNDING_COHORT.promoCode}
              </code>
              <CopyButton text={FOUNDING_COHORT.promoCode} size="default" />
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Apply this code at checkout on the Minimum tier (300 ads / 3 pain points). Your total
              will drop to $0.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-10 space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight">Next steps</h2>
            <ol className="space-y-4">
              {[
                {
                  title: "Click through to checkout",
                  body: "We'll send you to the Batch Video Ads pricing section. Pick the Minimum tier (300 ads).",
                },
                {
                  title: `Enter ${FOUNDING_COHORT.promoCode} at checkout`,
                  body: "Stripe will recognize the code and zero out your total. You'll still complete a $0 checkout so we have your contact info on file and you sign the standard terms.",
                },
                {
                  title: "Fill out the intake form",
                  body: "After checkout you'll be redirected to the intake form. This is where you tell us your pain points, offer, and recording instructions.",
                },
                {
                  title: "Record once, get 300 ads in 24 hours",
                  body: "One 15-minute selfie recording is all we need. Your full batch hits your inbox the next business day.",
                },
                {
                  title: `Run them for ${FOUNDING_COHORT.testWindowDays}+ days at $${FOUNDING_COHORT.minDailyTestSpendUsd}/day minimum`,
                  body: "Then we'll schedule the testimonial and debrief. That's the trade.",
                },
              ].map((step, i) => (
                <li
                  key={step.title}
                  className="border-border/80 bg-card flex gap-4 rounded-xl border p-5"
                >
                  <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Primary CTA */}
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Link
              href={FOUNDING_COHORT.checkoutHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold transition"
            >
              Claim my free 300-ad batch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-muted-foreground mt-8 text-center text-sm">
            Code lost? Email us at{" "}
            <a href="mailto:hello@prestyj.com" className="text-primary hover:underline">
              hello@prestyj.com
            </a>{" "}
            and we&apos;ll resend it.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
