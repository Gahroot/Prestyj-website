"use client";

import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/components/effects/aurora"), { ssr: false });

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Aurora
        colorStops={["#7058e3", "#5ee5b3", "#7058e3"]}
        amplitude={1.5}
        blend={0.6}
        speed={0.3}
      />
    </div>
  );
}
