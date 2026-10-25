"use client";

import { useEffect, useCallback, useRef } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { toCalMetadataConfig } from "@/lib/attribution/first-touch";
import { trackGa4 } from "@/lib/attribution/gtag";
import { trackEvent } from "@/lib/meta-pixel";

const CAL_LINK = "nolan-grout-x0fgn8/30min";

interface CalcomInlineEmbedProps {
  className?: string;
  theme?: "light" | "dark";
  /** Prefilled booking fields (name, email, notes). Empty values are skipped. */
  prefill?: Record<string, string>;
  /** pj_* attribution, sent as Cal.com booking metadata and GA4 book_demo params. */
  attribution?: Record<string, string>;
}

export function CalcomInlineEmbed({
  className,
  theme = "dark",
  prefill = {},
  attribution = {},
}: CalcomInlineEmbedProps): React.ReactElement {
  const bookedRef = useRef(false);
  const onBooked = useCallback(() => {
    if (bookedRef.current) return;
    bookedRef.current = true;
    trackEvent("Schedule");
    trackGa4("book_demo", attribution);
  }, [attribution]);
  const handleBookingMessage = useCallback(
    (e: MessageEvent) => {
      if (e.data?.type === "CAL:bookingSuccessful" || e.data?.type === "__calBookingSuccessful") {
        onBooked();
      }
    },
    [onBooked],
  );
  const filledPrefill = Object.fromEntries(Object.entries(prefill).filter(([, value]) => value));

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme,
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: { brandColor: theme === "light" ? "#292a24" : "#7058e3" },
        },
      });
      cal("on", { action: "bookingSuccessfulV2", callback: onBooked });
    })();

    window.addEventListener("message", handleBookingMessage);
    return () => window.removeEventListener("message", handleBookingMessage);
  }, [handleBookingMessage, onBooked, theme]);

  return (
    <Cal
      calLink={CAL_LINK}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: "600px" }}
      config={{ ...filledPrefill, ...toCalMetadataConfig(attribution), theme }}
    />
  );
}

interface CalcomPopupButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function CalcomPopupButton({ children, className }: CalcomPopupButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        styles: {
          branding: { brandColor: "#7058e3" },
        },
      });
    })();
  }, []);

  const openPopup = async () => {
    const cal = await getCalApi();
    cal("modal", {
      calLink: CAL_LINK,
      config: {
        theme: "dark",
      },
    });
  };

  return (
    <div onClick={openPopup} className={className} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}
