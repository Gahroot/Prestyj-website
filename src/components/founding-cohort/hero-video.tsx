"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VIMEO_VIDEO_ID = "1169158190";

/**
 * Click-to-play hero video. Previous version auto-played muted and
 * required a click to unmute, which is two clicks of friction for users
 * who actually wanted to watch and a permanent UI tax for users who
 * didn't. New version shows a poster + play button \u2014 one click, real
 * intent, audio on from the start.
 */
export function FoundingCohortHeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="border-border/80 bg-card relative aspect-video w-full overflow-hidden rounded-2xl border shadow-2xl shadow-black/10">
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=0&loop=0&background=0`}
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Founding cohort video ads offer"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="border-border/80 group bg-card relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border shadow-2xl shadow-black/10"
      aria-label="Play founding cohort overview video"
    >
      <Image
        src={`https://vumbnail.com/${VIMEO_VIDEO_ID}.jpg`}
        alt="Founding cohort video preview"
        fill
        unoptimized
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <span className="absolute inset-0 z-10 flex items-center justify-center">
        <span className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>
      </span>
      <span className="absolute right-0 bottom-0 left-0 p-4 text-left">
        <span className="text-sm font-semibold text-white drop-shadow-md">
          Watch the offer (90 sec)
        </span>
      </span>
    </button>
  );
}
