"use client";

import Link from "next/link";
import { LEAD_INTENT_EVENT, trackEvent } from "@/lib/meta-pixel";
import { trackGoogleAdsConversion } from "@/lib/google-ads";

type TrackedLinkProps = {
  /**
   * Stable slug identifying the page the CTA lives on (e.g.
   * `ai-content-department`). Carried as the Meta Pixel `content_name`
   * parameter so a single `LeadIntent` audience can be segmented by page
   * without fragmenting into per-page custom events.
   */
  contentName: string;
  /**
   * Location of the CTA on the page (e.g. `hero-see-math`, `pricing-pro`).
   * Carried as `event_label` for in-page click analysis.
   */
  eventLabel: string;
  children: React.ReactNode;
  className?: string;
  href: string;
};

export function TrackedLink({
  contentName,
  eventLabel,
  children,
  className,
  href,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(LEAD_INTENT_EVENT, undefined, {
      content_name: contentName,
      event_label: eventLabel,
    });
    trackGoogleAdsConversion();
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
