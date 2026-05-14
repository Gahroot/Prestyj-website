import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Mail,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { getPaidPlanSession } from "@/lib/stripe";
import { getPlanTierByPriceId } from "@/lib/plan-checkout";
import { getPricingTier, isTierId } from "@/lib/pricing-data";
import { Button } from "@/components/ui/button";
import { PurchaseConversion } from "@/app/intake/purchase-conversion";

export const metadata: Metadata = {
  title: "Welcome to Prestyj — onboarding",
  description: "Your plan is active. Here's exactly what happens next.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type SearchParams = { session_id?: string | string[] };

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const rawSessionId = Array.isArray(params.session_id) ? params.session_id[0] : params.session_id;

  if (!rawSessionId) {
    redirect("/pricing");
  }

  const session = await getPaidPlanSession(rawSessionId);
  if (!session) {
    redirect("/pricing");
  }

  // Resolve the plan from session metadata first (cheap, set when checkout
  // was created) and fall back to price ID lookup so we still work for
  // sessions where metadata got dropped.
  const metadataPlan = session.metadata.plan;
  const tier = isTierId(metadataPlan)
    ? getPricingTier(metadataPlan)
    : (session.priceIds.map((id) => getPlanTierByPriceId(id)).find((t) => t !== null) ?? null);

  if (!tier) {
    console.error("[onboarding] Could not resolve plan for session:", {
      sessionId: session.sessionId,
      priceIds: session.priceIds,
      metadata: session.metadata,
    });
    redirect("/pricing");
  }

  const [firstName = "", ...rest] = (session.customerName ?? "").trim().split(/\s+/);
  const lastName = rest.join(" ");

  const steps = [
    {
      icon: Mail,
      title: "Check your inbox",
      body: `We just sent a receipt and a kickoff link to ${session.customerEmail ?? "the email on your order"}. The kickoff link picks a 30-minute onboarding call with our team.`,
    },
    {
      icon: CalendarCheck,
      title: "Book your 30-min kickoff (today)",
      body: "We walk through your business, services, market, and goals. This is what we use to train your AI agents and build your campaigns.",
    },
    {
      icon: ClipboardList,
      title: "Send us assets",
      body: "Logo, brand colors, photos, testimonials, and CRM/calendar logins. We send a simple checklist after the kickoff call — usually 10–15 minutes of your time.",
    },
    {
      icon: Sparkles,
      title: "We build everything",
      body: `Inside 7–10 business days we train your AI agents, build your landing page, launch ad campaigns, and set up your CRM, calendar & phone number. You don't have to do anything in this window — we'll check in twice with progress.`,
    },
    {
      icon: PhoneCall,
      title: "Go live",
      body: "Final review call, ads turn on, AI agents start responding to every new lead in under 60 seconds. From here it's month-to-month — cancel anytime.",
    },
  ];

  const kickoffHref = "/book-demo";

  return (
    <main className="min-h-screen pt-24 pb-16">
      <PurchaseConversion
        value={(session.amountTotal ?? 0) / 100}
        currency={(session.currency ?? "usd").toUpperCase()}
        transactionId={session.sessionId}
        userData={{
          ...(session.customerEmail && { email: session.customerEmail }),
          ...(firstName && { firstName }),
          ...(lastName && { lastName }),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="border-success/40 text-success mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Payment confirmed · {tier.name} plan
          </p>
          <h1 className="font-heading text-foreground mb-3 text-3xl font-bold md:text-5xl">
            {firstName ? `Welcome, ${firstName}.` : "Welcome to Prestyj."}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            Your {tier.name} plan is active. Here&apos;s exactly what happens next — no guessing, no
            &quot;we&apos;ll be in touch.&quot;
          </p>
        </div>

        <div className="border-primary/30 bg-primary/5 mb-8 rounded-lg border p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-foreground text-base font-semibold">
                Next step: book your 30-min kickoff call
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                We need this to train your AI agents and launch your campaigns.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href={kickoffHref}>Pick a time</Link>
            </Button>
          </div>
        </div>

        <ol className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="border-border bg-card flex gap-4 rounded-lg border p-5"
              >
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-0.5 text-xs font-semibold tracking-wide uppercase">
                    Step {index + 1}
                  </p>
                  <h2 className="font-heading text-foreground mb-1 text-lg font-bold">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="border-border mt-10 rounded-lg border border-dashed p-5 text-center">
          <p className="text-foreground mb-1 text-sm font-semibold">Questions in the meantime?</p>
          <p className="text-muted-foreground text-sm">
            Email{" "}
            <a className="text-primary hover:underline" href="mailto:hello@prestyj.com">
              hello@prestyj.com
            </a>{" "}
            and we&apos;ll reply same business day.
          </p>
        </div>
      </div>
    </main>
  );
}
