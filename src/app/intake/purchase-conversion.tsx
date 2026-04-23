"use client";

import { useEffect, useRef } from "react";
import { getGoogleAdsPurchaseSendTo } from "@/lib/google-ads";

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
  value: number;
  currency: string;
  transactionId: string;
  userData?: PurchaseUserData;
};

function buildGtagUserData(
  u: PurchaseUserData | undefined
): Record<string, unknown> | null {
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

export function PurchaseConversion({
  value,
  currency,
  transactionId,
  userData,
}: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    const sendTo = getGoogleAdsPurchaseSendTo();
    if (!sendTo) return;

    const gtagUserData = buildGtagUserData(userData);

    let attempts = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const tryFire = () => {
      if (fired.current) return;
      if (typeof window !== "undefined" && window.gtag) {
        fired.current = true;
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
  }, [value, currency, transactionId, userData]);

  return null;
}
