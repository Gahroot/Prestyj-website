"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { MARKETING_CONSENT_STORAGE_KEY, OPEN_PRIVACY_CHOICES_EVENT } from "@/lib/consent";
import { LINKEDIN_PARTNER_ID, PIXEL_ID } from "@/lib/meta-pixel";
type Consent = "granted" | "denied";

function persistConsent(value: Consent): void {
  window.localStorage.setItem(MARKETING_CONSENT_STORAGE_KEY, value);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${MARKETING_CONSENT_STORAGE_KEY}=${value}; Path=/; Max-Age=31536000; SameSite=Strict${secure}`;
}

declare global {
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

export function TrackingConsent(): React.ReactElement {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const [gpcActive, setGpcActive] = useState(false);

  useEffect(() => {
    const gpc = navigator.globalPrivacyControl || document.cookie.includes("prestyj-gpc=1");
    const saved = window.localStorage.getItem(MARKETING_CONSENT_STORAGE_KEY);

    queueMicrotask(() => {
      setGpcActive(gpc);
      if (gpc) {
        persistConsent("denied");
        setConsent("denied");
      } else if (saved === "granted" || saved === "denied") {
        persistConsent(saved);
        setConsent(saved);
      } else {
        setOpen(true);
      }
    });
  }, []);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PRIVACY_CHOICES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PRIVACY_CHOICES_EVENT, reopen);
  }, []);

  const choose = (next: Consent) => {
    const gpc = navigator.globalPrivacyControl || document.cookie.includes("prestyj-gpc=1");
    const resolved = next === "granted" && gpc ? "denied" : next;
    persistConsent(resolved);
    setConsent(resolved);
    setOpen(false);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            id="google-ads-gtag"
            src="https://www.googletagmanager.com/gtag/js?id=AW-18112004799"
            strategy="afterInteractive"
          />
          <Script id="google-ads-config" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18112004799', {'allow_enhanced_conversions': true});`}
          </Script>
          {LINKEDIN_PARTNER_ID ? (
            <Script id="linkedin-insight" strategy="afterInteractive">
              {`_linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");
b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b,s)})(window.lintrk);`}
            </Script>
          ) : null}
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        </>
      ) : null}

      {open ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="privacy-choices-title"
          className="bg-background fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border p-5 shadow-2xl sm:p-6"
        >
          <h2 id="privacy-choices-title" className="font-heading text-lg font-bold">
            Privacy choices
          </h2>
          <p className="text-muted-foreground mt-2 text-sm leading-6">
            Essential site functions work without tracking. With your permission, Prestyj also loads
            Google Ads, Meta, and LinkedIn measurement. You can change this choice anytime.
            {gpcActive
              ? " Your browser's Global Privacy Control signal keeps marketing tracking off."
              : ""}
          </p>
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button type="button" variant="outline" onClick={() => choose("denied")}>
              Reject marketing tracking
            </Button>
            <Button type="button" onClick={() => choose("granted")} disabled={gpcActive}>
              Allow marketing tracking
            </Button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export function PrivacyChoicesButton(): React.ReactElement {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PRIVACY_CHOICES_EVENT))}
      className="text-muted-foreground hover:text-foreground focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
    >
      Privacy choices
    </button>
  );
}
