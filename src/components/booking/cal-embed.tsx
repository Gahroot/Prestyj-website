"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "nolan-grout-x0fgn8/30min";

interface CalcomInlineEmbedProps {
  className?: string;
}

export function CalcomInlineEmbed({ className }: CalcomInlineEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: { brandColor: "#7058e3" },
        },
      });
    })();
  }, []);

  return (
    <Cal
      calLink={CAL_LINK}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: "600px" }}
      config={{
        theme: "dark",
      }}
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
