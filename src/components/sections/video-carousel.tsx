"use client";

import { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function VideoCarousel({ videos }: { videos: string[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePointerUp = useCallback(
    (id: string, e: React.PointerEvent) => {
      // Only activate on tap (not drag). Check movement via pointerType.
      if (e.pointerType === "touch" || e.pointerType === "pen") {
        setActiveVideo(id);
      }
    },
    [],
  );

  return (
    <Carousel
      opts={{ align: "start", loop: true, dragFree: true }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2">
        {videos.map((id) => (
          <CarouselItem
            key={id}
            className="pl-2 basis-[70%] sm:basis-[45%] md:basis-[30%]"
          >
            <div className="rounded-xl overflow-hidden border border-border">
              <div className="aspect-[9/16] relative">
                <iframe
                  src={`https://player.vimeo.com/video/${id}?autoplay=0&background=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen
                  title="Video ad sample"
                />
                {activeVideo !== id && (
                  <div
                    className="absolute inset-0 z-10 cursor-pointer"
                    onPointerUp={(e) => handlePointerUp(id, e)}
                  />
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12" />
      <CarouselNext className="hidden md:flex -right-12" />
    </Carousel>
  );
}
