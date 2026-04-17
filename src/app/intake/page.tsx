import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getPaidSession } from "@/lib/stripe";
import { getBatchTierByPriceId } from "@/lib/batch-tiers";
import { IntakeClient } from "./intake-client";

export const metadata: Metadata = {
  title: "Your Intake — Batch Video Ads | PRESTYJ",
  description: "Complete your intake and we'll generate your ad scripts.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type SearchParams = { session_id?: string | string[] };

export default async function IntakePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const rawSessionId = Array.isArray(params.session_id)
    ? params.session_id[0]
    : params.session_id;

  if (!rawSessionId) {
    redirect("/batch-video-ads#pricing");
  }

  const session = await getPaidSession(rawSessionId);
  if (!session) {
    redirect("/batch-video-ads#pricing");
  }

  const tier = getBatchTierByPriceId(session.priceId);
  if (!tier) {
    redirect("/batch-video-ads#pricing");
  }

  const [firstName = "", ...rest] = (session.customerName ?? "")
    .trim()
    .split(/\s+/);
  const lastName = rest.join(" ");

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/40 text-success text-xs font-semibold uppercase tracking-wide mb-4">
          Payment confirmed · {tier.name}
        </p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">
          One more step — tell us about your business
        </h1>
        <p className="text-muted-foreground text-lg">
          Fill this out and we&apos;ll generate your{" "}
          <span className="text-primary font-semibold">{tier.adCount} ad scripts</span>{" "}
          in the next 2–5 minutes.
        </p>
      </div>
      <IntakeClient
        sessionId={session.sessionId}
        tierId={tier.id}
        adCount={tier.adCount}
        painPoints={tier.painPoints}
        prefillEmail={session.customerEmail ?? ""}
        prefillFirstName={firstName}
        prefillLastName={lastName}
        prefillPhone={session.customerPhone ?? ""}
      />
    </main>
  );
}
