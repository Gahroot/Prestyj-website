"use client";

import { GetAdsLeadForm } from "@/components/get-ads/lead-form";
import type { BatchTierId } from "@/lib/batch-tiers";

export type IntakeClientProps = {
  sessionId: string;
  tierId: BatchTierId;
  adCount: number;
  painPoints: number;
  prefillEmail: string;
  prefillFirstName: string;
  prefillLastName: string;
  prefillPhone: string;
};

export function IntakeClient(props: IntakeClientProps) {
  return (
    <GetAdsLeadForm
      sessionId={props.sessionId}
      tierId={props.tierId}
      adCount={props.adCount}
      lockedPainPointCount={props.painPoints}
      prefillEmail={props.prefillEmail}
      prefillFirstName={props.prefillFirstName}
      prefillLastName={props.prefillLastName}
      prefillPhone={props.prefillPhone}
    />
  );
}
