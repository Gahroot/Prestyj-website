"use client";

import DarkVeil from "@/components/effects/dark-veil";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        scanlineFrequency={0}
        warpAmount={0}
        speed={0.5}
        resolutionScale={1}
      />
    </div>
  );
}
