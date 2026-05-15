"use client";

import { useState, useRef, useCallback } from "react";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TAP_THRESHOLD_PX = 8;

export function VideoCarousel({ videos }: { videos: string[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const downPos = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback((id: string, e: React.PointerEvent) => {
    const start = downPos.current;
    downPos.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.hypot(dx, dy) < TAP_THRESHOLD_PX) {
      setActiveVideo(id);
    }
  }, []);

  return (
    <Carousel
      opts={{ align: "start", loop: true, dragFree: true }}
      className="mx-auto w-full max-w-5xl"
    >
      <CarouselContent className="-ml-2">
        {videos.map((id) => {
          const isActive = activeVideo === id;
          return (
            <CarouselItem key={id} className="basis-[70%] pl-2 sm:basis-[45%] md:basis-[30%]">
              <div className="border-border overflow-hidden rounded-xl border">
                <div className="relative aspect-[9/16] bg-black">
                  <iframe
                    src={`https://player.vimeo.com/video/${id}?autoplay=${isActive ? 1 : 0}&background=0`}
                    className="h-full w-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Video ad sample"
                  />
                  {!isActive && (
                    <button
                      type="button"
                      aria-label="Play video"
                      className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/20 transition-colors hover:bg-black/10"
                      onPointerDown={handlePointerDown}
                      onPointerUp={(e) => handlePointerUp(id, e)}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <Play className="ml-0.5 h-6 w-6 fill-black text-black" />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="-left-12 hidden md:flex" />
      <CarouselNext className="-right-12 hidden md:flex" />
    </Carousel>
  );
}
