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
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2">
        {videos.map((id) => {
          const isActive = activeVideo === id;
          return (
            <CarouselItem
              key={id}
              className="pl-2 basis-[70%] sm:basis-[45%] md:basis-[30%]"
            >
              <div className="rounded-xl overflow-hidden border border-border">
                <div className="aspect-[9/16] relative bg-black">
                  <iframe
                    src={`https://player.vimeo.com/video/${id}?autoplay=${isActive ? 1 : 0}&background=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Video ad sample"
                  />
                  {!isActive && (
                    <button
                      type="button"
                      aria-label="Play video"
                      className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/10 transition-colors"
                      onPointerDown={handlePointerDown}
                      onPointerUp={(e) => handlePointerUp(id, e)}
                    >
                      <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12" />
      <CarouselNext className="hidden md:flex -right-12" />
    </Carousel>
  );
}
