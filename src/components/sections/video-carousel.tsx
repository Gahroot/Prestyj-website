"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function VideoCarousel({ videos }: { videos: string[] }) {
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
              <div className="aspect-[9/16]">
                <iframe
                  src={`https://player.vimeo.com/video/${id}?autoplay=0&background=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="fullscreen"
                  allowFullScreen
                  title="Video ad sample"
                />
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
