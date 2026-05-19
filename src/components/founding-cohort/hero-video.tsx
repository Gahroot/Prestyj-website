"use client";

import { useState } from "react";
import { VolumeX } from "lucide-react";

const VIMEO_VIDEO_ID = "1169158190";

export function FoundingCohortHeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleUnmute = () => {
    setIsMuted(false);
    setShowOverlay(false);
  };

  return (
    <div className="border-border/80 bg-card relative aspect-video w-full overflow-hidden rounded-2xl border shadow-2xl shadow-black/10">
      <iframe
        src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=${isMuted ? "1" : "0"}&loop=0&background=0`}
        className="absolute inset-0 h-full w-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Founding cohort video ads offer"
      />

      {showOverlay && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/30"
          aria-label="Unmute founding cohort video"
        >
          <span className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
            <span className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
              <VolumeX className="text-primary h-6 w-6" />
            </span>
            <span className="text-foreground font-heading text-base font-semibold">
              Your Video Is Playing
            </span>
            <span className="text-muted-foreground text-sm">Click To Unmute</span>
          </span>
        </button>
      )}
    </div>
  );
}
