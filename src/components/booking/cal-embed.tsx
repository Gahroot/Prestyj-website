"use client";

import { useEffect, useCallback, useState } from "react";

declare global {
  interface Window {
    Cal?: CalNamespace;
  }
}

interface CalNamespace {
  (action: string, ...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalNamespace>;
  q?: unknown[];
}

const CAL_LINK = "nolan-grout-x0fgn8/30min";

function loadCalcomScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Cal) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;

    script.onload = () => {
      const maxAttempts = 100; // 5 seconds max (100 * 50ms)
      let attempts = 0;

      const checkCal = () => {
        if (window.Cal) {
          resolve();
        } else if (attempts >= maxAttempts) {
          reject(new Error("Cal.com embed timed out after loading"));
        } else {
          attempts++;
          setTimeout(checkCal, 50);
        }
      };
      checkCal();
    };

    script.onerror = () => reject(new Error("Failed to load Cal.com embed script"));

    document.head.appendChild(script);
  });
}

interface CalcomInlineEmbedProps {
  className?: string;
}

export function CalcomInlineEmbed({ className }: CalcomInlineEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCalcomScript()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.Cal) return;

    const Cal = window.Cal;

    Cal("init", "inline", { origin: "https://app.cal.com" });

    Cal("inline", "inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: CAL_LINK,
      config: {
        theme: "dark",
        styles: {
          branding: { brandColor: "#7058e3" },
        },
      },
    });

    Cal("inline", "ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      styles: {
        branding: { brandColor: "#7058e3" },
      },
    });
  }, [isLoaded]);

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-destructive">
        Failed to load booking calendar: {error}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div
      id="cal-inline-embed"
      className={className}
      style={{ width: "100%", height: "100%", minHeight: "600px" }}
    />
  );
}

interface CalcomPopupButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function CalcomPopupButton({ children, className }: CalcomPopupButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadCalcomScript()
      .then(() => {
        setIsLoaded(true);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.Cal) return;

    const Cal = window.Cal;

    Cal("init", "popup", { origin: "https://app.cal.com" });

    Cal("popup", "ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      styles: {
        branding: { brandColor: "#7058e3" },
      },
    });
  }, [isLoaded]);

  const openPopup = useCallback(() => {
    if (!window.Cal) return;

    const Cal = window.Cal;

    Cal("popup", "modal", {
      calLink: CAL_LINK,
      config: {
        theme: "dark",
        styles: {
          branding: { brandColor: "#7058e3" },
        },
      },
    });
  }, []);

  return (
    <div onClick={openPopup} className={className} style={{ cursor: isLoaded ? "pointer" : "not-allowed" }}>
      {children}
    </div>
  );
}
