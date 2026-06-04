import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getPaidSession } from "@/lib/stripe";
import { getBatchTierByPriceId } from "@/lib/batch-tiers";
import {
  LEGACY_INTAKE_ENABLED,
  PREMIUM_PORTAL_URL,
} from "@/lib/premium-portal";
import { IntakeClient } from "./intake-client";
import { PurchaseConversion } from "./purchase-conversion";

export const metadata: Metadata = {
  title: "Your Intake — Batch Video Ads",
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
  const rawSessionId = Array.isArray(params.session_id) ? params.session_id[0] : params.session_id;

  if (!rawSessionId) {
    redirect("/batch-video-ads#pricing");
  }

  // Cutover: paid orders now flow through the premium portal's claim page. The
  // legacy on-site intake is kept only as a temporary emergency backup. When it
  // is disabled, forward verified sessions straight to the portal.
  if (!LEGACY_INTAKE_ENABLED) {
    redirect(`${PREMIUM_PORTAL_URL.replace(/\/$/, "")}/start?session_id=${rawSessionId}`);
  }

  const session = await getPaidSession(rawSessionId);
  if (!session) {
    redirect("/batch-video-ads#pricing");
  }

  const tier = getBatchTierByPriceId(session.priceId);
  if (!tier) {
    redirect("/batch-video-ads#pricing");
  }

  const [firstName = "", ...rest] = (session.customerName ?? "").trim().split(/\s+/);
  const lastName = rest.join(" ");

  return (
    <main className="min-h-screen pt-24 pb-12">
      <PurchaseConversion
        tierId={tier.id}
        value={(session.amountTotal ?? 0) / 100}
        currency={(session.currency ?? "usd").toUpperCase()}
        transactionId={session.sessionId}
        userData={{
          ...(session.customerEmail && { email: session.customerEmail }),
          ...(session.customerPhone && { phoneNumber: session.customerPhone }),
          ...(firstName && { firstName }),
          ...(lastName && { lastName }),
          ...(session.customerAddress?.line1 && { street: session.customerAddress.line1 }),
          ...(session.customerAddress?.city && { city: session.customerAddress.city }),
          ...(session.customerAddress?.state && { region: session.customerAddress.state }),
          ...(session.customerAddress?.postalCode && {
            postalCode: session.customerAddress.postalCode,
          }),
          ...(session.customerAddress?.country && { country: session.customerAddress.country }),
        }}
      />
      <div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="border-primary/30 bg-primary/5 text-foreground mx-auto mb-6 flex max-w-xl flex-col items-center gap-2 rounded-xl border px-4 py-3 text-sm">
          <p className="font-semibold">Your order is moving to the new guided portal.</p>
          <p className="text-muted-foreground">
            We&apos;ve upgraded onboarding. You can finish here, or{" "}
            <a
              href={`${PREMIUM_PORTAL_URL.replace(/\/$/, "")}/start?session_id=${session.sessionId}`}
              className="text-primary font-medium underline"
            >
              continue in the new portal
            </a>
            .
          </p>
        </div>
        <p className="border-success/40 text-success mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase">
          Payment confirmed · {tier.name}
        </p>
        <h1 className="font-heading text-foreground mb-3 text-3xl font-bold md:text-5xl">
          One more step — tell us about your business
        </h1>
        <p className="text-muted-foreground text-lg">
          Fill this out and we&apos;ll generate your{" "}
          <span className="text-primary font-semibold">{tier.adCount} ad scripts</span> in the next
          2–5 minutes.
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
