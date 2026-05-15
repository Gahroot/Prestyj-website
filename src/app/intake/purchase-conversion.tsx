"use client";

import { useEffect, useRef } from "react";
import type { BatchTierId } from "@/lib/batch-tiers";
import { getGoogleAdsPurchaseSendTo } from "@/lib/google-ads";
import { trackBatchTierPurchase } from "@/lib/meta-pixel";

export type PurchaseUserData = {
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
};

type Props = {
  /**
   * Batch-video-ads tier id. When present, fires a tier-tagged Meta Pixel +
   * CAPI `Purchase` event so Ads Manager can optimize each tier as a distinct
   * conversion. Omit for non-batch-video-ads purchase flows (e.g. plan
   * onboarding), which only need Google Ads conversion tracking here.
   */
  tierId?: BatchTierId;
  value: number;
  currency: string;
  transactionId: string;
  userData?: PurchaseUserData;
};

function buildGtagUserData(u: PurchaseUserData | undefined): Record<string, unknown> | null {
  if (!u) return null;
  const payload: Record<string, unknown> = {};
  if (u.email) payload.email = u.email.trim().toLowerCase();
  if (u.phoneNumber) payload.phone_number = u.phoneNumber;

  const address: Record<string, string> = {};
  if (u.firstName) address.first_name = u.firstName;
  if (u.lastName) address.last_name = u.lastName;
  if (u.street) address.street = u.street;
  if (u.city) address.city = u.city;
  if (u.region) address.region = u.region;
  if (u.postalCode) address.postal_code = u.postalCode;
  if (u.country) address.country = u.country;
  if (Object.keys(address).length > 0) payload.address = address;

  return Object.keys(payload).length > 0 ? payload : null;
}

export function PurchaseConversion({ tierId, value, currency, transactionId, userData }: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const sendTo = getGoogleAdsPurchaseSendTo();
    const gtagUserData = buildGtagUserData(userData);

    // Meta Pixel + CAPI — tier-specific content_name so Ads Manager can
    // optimize each batch-video-ads tier (starter / minimum / pro / max) as
    // a distinct conversion. Skipped for non-batch flows that pass no tierId.
    if (tierId) {
      trackBatchTierPurchase(tierId, value, currency, {
        ...(userData?.email && { email: userData.email }),
        ...(userData?.phoneNumber && { phone: userData.phoneNumber }),
        ...(userData?.firstName && { firstName: userData.firstName }),
        ...(userData?.lastName && { lastName: userData.lastName }),
      });
    }

    if (!sendTo) return;

    let attempts = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const tryFire = () => {
      if (typeof window !== "undefined" && window.gtag) {
        if (gtagUserData) {
          window.gtag("set", "user_data", gtagUserData);
        }
        window.gtag("event", "conversion", {
          send_to: sendTo,
          value,
          currency,
          transaction_id: transactionId,
        });
        return;
      }
      if (attempts++ < 10) {
        timeout = setTimeout(tryFire, 300);
      }
    };

    tryFire();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [tierId, value, currency, transactionId, userData]);

  return null;
}
