"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import {
  CTA_ID_ATTR,
  CTA_VARIANT_ATTR,
  fallbackCtaId,
  isBookDemoHref,
} from "@/lib/attribution/cta";
import { buildFirstTouch, captureFirstTouch, recordCtaClick } from "@/lib/attribution/first-touch";
import { CONSENT_CHANGED_EVENT, trackGa4 } from "@/lib/attribution/gtag";
import { ATTRIBUTION_KEYS } from "@/lib/attribution/keys";
import { hasMarketingConsent } from "@/lib/consent";

function safeStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/**
 * Mounted once in the root layout.
 * - Captures first touch (first-party localStorage, no cookies, no network).
 * - Records the last /book-demo CTA clicked and sends GA4 cta_click.
 * - Sends GA4 page_view per route and cta_view when a tagged CTA becomes visible
 *   (GA4 only with marketing consent and NEXT_PUBLIC_GA4_MEASUREMENT_ID).
 */
export function AttributionTracker(): null {
  const pathname = usePathname();
  const [consentVersion, setConsentVersion] = useState(0);
  const lastPageView = useRef<string | null>(null);

  useEffect(() => {
    const storage = safeStorage();
    if (storage) {
      captureFirstTouch(
        storage,
        buildFirstTouch({
          url: window.location.href,
          referrer: document.referrer,
          now: new Date(),
        }),
      );
    }
    const onConsent = () => setConsentVersion((value) => value + 1);
    window.addEventListener(CONSENT_CHANGED_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsent);
  }, []);

  useEffect(() => {
    // One page_view per route; a later consent grant sends the current page once.
    if (!hasMarketingConsent() || lastPageView.current === pathname) return;
    lastPageView.current = pathname;
    trackGa4("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, consentVersion]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      if (!isBookDemoHref(target.href, window.location.origin)) return;
      const id = target.getAttribute(CTA_ID_ATTR) ?? fallbackCtaId(window.location.pathname);
      const variant = target.getAttribute(CTA_VARIANT_ATTR) ?? undefined;
      const storage = safeStorage();
      if (storage) recordCtaClick(storage, { id, variant });
      trackGa4("cta_click", {
        [ATTRIBUTION_KEYS.ctaId]: id,
        ...(variant ? { [ATTRIBUTION_KEYS.ctaVariant]: variant } : {}),
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          const id = el.getAttribute(CTA_ID_ATTR);
          const variant = el.getAttribute(CTA_VARIANT_ATTR);
          if (!id || !variant) continue;
          const key = `${id}:${variant}`;
          observer.unobserve(el);
          if (seen.has(key)) continue;
          seen.add(key);
          trackGa4("cta_view", {
            [ATTRIBUTION_KEYS.ctaId]: id,
            [ATTRIBUTION_KEYS.ctaVariant]: variant,
          });
        }
      },
      { threshold: 0.5 },
    );
    const observeAll = () => {
      document
        .querySelectorAll(`[${CTA_ID_ATTR}][${CTA_VARIANT_ATTR}]`)
        .forEach((el) => observer.observe(el));
    };
    observeAll();
    // Variants resolve client-side after hydration; observe late-arriving CTAs too.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: [CTA_VARIANT_ATTR],
    });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname, consentVersion]);

  return null;
}
