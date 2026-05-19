import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Film,
  Lock,
  Megaphone,
  Star,
  Video,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FoundingCohortApplicationForm } from "@/components/founding-cohort/application-form";
import { FoundingCohortHeroVideo } from "@/components/founding-cohort/hero-video";
import { SpotCounter } from "@/components/founding-cohort/spot-counter";
import { SocialProofStrip } from "@/components/founding-cohort/social-proof-strip";
import { ExitIntentPopup } from "@/components/effects/exit-intent-popup";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FOUNDING_COHORT, spotsRemaining } from "@/lib/founding-cohort";

const PAGE_URL = "https://prestyj.com/founding-cohort";

export const metadata: Metadata = {
  title: "Founding Cohort: 300 Free Video Ads for 5 Service Businesses",
  description: `${FOUNDING_COHORT.totalSpots} founding spots. 300 scripted video ads (a $1,497 batch) for $0 in exchange for a testimonial, a Google review, and a 14-day commitment to actually run them. Apply now — when ${FOUNDING_COHORT.totalSpots} is reached, it's closed.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Founding Cohort: 300 Free Video Ads for 5 Service Businesses",
    description: `${FOUNDING_COHORT.totalSpots} spots. Free 300-ad batch in exchange for a case study. Applications close when full.`,
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Founding Cohort: 300 Free Video Ads for 5 Service Businesses",
    description: `${FOUNDING_COHORT.totalSpots} spots. Free 300-ad batch in exchange for a case study.`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PERKS = [
  {
    icon: Video,
    title: "300 scripted vertical video ads",
    detail:
      "Same product, same 24-hour turnaround. Hook, body, and CTA variations across 3 pain points.",
  },
  {
    icon: Clock,
    title: "Live in 24 hours from your recording",
    detail: "One 15-minute selfie recording → 300 finished ads on your hard drive the next day.",
  },
  {
    icon: DollarSign,
    title: "$0 instead of $1,497",
    detail: `Code ${FOUNDING_COHORT.promoCode} drops the Minimum tier to zero at checkout.`,
  },
  {
    icon: Megaphone,
    title: "Direct line to the founder",
    detail: "Slack/text access through the test window. We want this to work as much as you do.",
  },
] as const;

const DEAL = [
  {
    label: `Run the batch for ${FOUNDING_COHORT.testWindowDays}+ days at $${FOUNDING_COHORT.minDailyTestSpendUsd}/day minimum.`,
    detail:
      "No spend, no signal. Founding spots only go to businesses that will actually run the ads.",
  },
  {
    label: "Record a 3–5 minute video testimonial after the test window.",
    detail:
      "What you tested, what won, the number that moved. Specifics — vibes don't help anyone.",
  },
  {
    label: "Leave a Google review on delivery.",
    detail: "We'll send the link the day your batch ships.",
  },
  {
    label: "Permission to use your name, logo, and results in our marketing.",
    detail:
      "Standard case-study rights. We don't share private financials or proprietary creative.",
  },
] as const;

export default function FoundingCohortPage() {
  const remaining = spotsRemaining();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Founding Cohort", url: PAGE_URL },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-10">
            <div className="space-y-5 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  Founding Cohort · {FOUNDING_COHORT.totalSpots} spots only
                </Badge>
              </div>
              <h1 className="font-heading text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                300 video ads. <span className="text-primary">$0 for 5 businesses.</span>
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg lg:mx-0">
                We&apos;re taking{" "}
                <span className="text-foreground font-semibold">
                  {FOUNDING_COHORT.totalSpots} service businesses
                </span>{" "}
                as founding case studies. You get a full $1,497 batch — 300 scripted vertical ads in
                24 hours — for free. We get the testimonial, the review, and the results data. When{" "}
                {FOUNDING_COHORT.totalSpots} is reached, it&apos;s closed.
              </p>
              <SpotCounter variant="block" className="mx-auto max-w-md lg:mx-0" />

              {remaining > 0 && (
                <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href="#apply">
                      Claim my spot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <span className="text-muted-foreground text-sm">
                    ~2 minutes · instant decision
                  </span>
                </div>
              )}

              {remaining === 0 && (
                <div className="border-border bg-muted/40 text-muted-foreground mx-auto max-w-xl rounded-xl border p-5 text-sm lg:mx-0">
                  Founding cohort is full. The standard $1,497 Minimum batch is still available and
                  ships in 24 hours.{" "}
                  <Link
                    href={FOUNDING_COHORT.checkoutHref}
                    className="text-primary font-semibold hover:underline"
                  >
                    See pricing →
                  </Link>
                </div>
              )}
            </div>

            <FoundingCohortHeroVideo />
          </div>

          {/* Social proof — above the fold (the form is still in view, this just */}
          {/* answers "is this real?" before the prospect commits to filling it out). */}
          <SocialProofStrip />

          {/* What you get */}
          <section className="mt-16 grid gap-4 sm:grid-cols-2">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="border-border/80 bg-card flex gap-4 rounded-xl border p-5"
                >
                  <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{perk.title}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{perk.detail}</p>
                  </div>
                </div>
              );
            })}
          </section>

          {/* The deal */}
          <section className="border-border/80 bg-card mt-16 rounded-2xl border p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight">
                  What we&apos;re trading
                </h2>
                <p className="text-muted-foreground text-sm">
                  Free isn&apos;t free. Here&apos;s the deal in writing before you apply.
                </p>
              </div>
            </div>
            <ol className="space-y-4">
              {DEAL.map((item, i) => (
                <li key={item.label} className="flex gap-4">
                  <div className="bg-primary text-primary-foreground flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Form */}
          <section id="apply" className="mt-16 space-y-6">
            <div className="space-y-3 text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Apply for a founding spot
              </h2>
              <p className="text-muted-foreground">
                Four steps. About two minutes. Approval is on the next page if you qualify.
              </p>
            </div>

            {remaining > 0 ? (
              <FoundingCohortApplicationForm />
            ) : (
              <div className="border-border bg-card rounded-2xl border p-8 text-center">
                <p className="font-semibold">
                  All {FOUNDING_COHORT.totalSpots} founding spots are filled.
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Standard pricing starts at $1,497 for the 300-ad batch.
                </p>
                <div className="mt-5 flex justify-center">
                  <Link
                    href={FOUNDING_COHORT.checkoutHref}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
                  >
                    See pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </section>

          {/* Trust footer */}
          <section className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="bg-primary/10 rounded-full p-3">
                <Star className="text-primary h-5 w-5" />
              </div>
              <p className="font-medium">5★ Google Reviews</p>
              <p className="text-muted-foreground text-sm">
                From real clients who shipped real batches.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="bg-primary/10 rounded-full p-3">
                <Film className="text-primary h-5 w-5" />
              </div>
              <p className="font-medium">24-hour delivery</p>
              <p className="text-muted-foreground text-sm">
                Same SLA as the paid batch. Founding doesn&apos;t mean slower.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="bg-primary/10 rounded-full p-3">
                <Lock className="text-primary h-5 w-5" />
              </div>
              <p className="font-medium">Your info is private</p>
              <p className="text-muted-foreground text-sm">
                Reviewed by the founder. Nothing shared without your sign-off.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      {/* Exit-intent capture — recovers leads who bail mid-decision. */}
      <ExitIntentPopup />
    </>
  );
}
