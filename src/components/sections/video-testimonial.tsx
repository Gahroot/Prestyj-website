"use client";

import { type ReactNode, useState } from "react";
import Image from "next/image";
import { Play, Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  MAX_SHERROD_VIDEO_TESTIMONIAL,
  type VideoTestimonial as VideoTestimonialType,
} from "@/lib/testimonials";

interface VideoTestimonialSectionProps {
  /** Defaults to the Max Sherrod / Maxteriors testimonial. */
  testimonial?: VideoTestimonialType;
  /** Small label above the headline. */
  eyebrow?: string;
  /** Optional context paragraph under attribution (e.g. cross-product framing on /results). */
  context?: ReactNode;
  /** Outer wrapper classes for spacing/background overrides. */
  className?: string;
  /** Inner card classes for visual variant tuning. */
  cardClassName?: string;
}

/**
 * Featured client video testimonial. Click-to-play Vimeo poster on one side,
 * pull-quote + supporting quote + attribution on the other. Designed to be
 * the strongest single social-proof block on a page \u2014 use sparingly.
 */
export function VideoTestimonialSection({
  testimonial = MAX_SHERROD_VIDEO_TESTIMONIAL,
  eyebrow = "Client result",
  context,
  className,
  cardClassName,
}: VideoTestimonialSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      aria-label={`Video testimonial from ${testimonial.author}`}
      className={cn("px-4 py-16 sm:py-20", className)}
    >
      <div
        className={cn(
          "border-border/80 bg-card mx-auto max-w-6xl overflow-hidden rounded-2xl border shadow-xl shadow-black/5",
          cardClassName,
        )}
      >
        <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_1fr]">
          {/* Quote side */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-primary/50 text-primary">
                {eyebrow}
              </Badge>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="fill-success text-success h-4 w-4" />
                ))}
              </div>
            </div>

            <blockquote className="space-y-4">
              <Quote className="text-primary/40 h-8 w-8" aria-hidden="true" />
              <p className="font-heading text-foreground text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl">
                &ldquo;{testimonial.headlineQuote}&rdquo;
              </p>
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                &ldquo;{testimonial.subheadQuote}&rdquo;
              </p>
            </blockquote>

            <figcaption className="border-border/40 mt-2 border-t pt-5">
              <p className="text-foreground text-base font-semibold">{testimonial.author}</p>
              <p className="text-muted-foreground text-sm">
                {testimonial.role}, {testimonial.company}
              </p>
              {context ? <div className="text-muted-foreground mt-3 text-sm">{context}</div> : null}
            </figcaption>
          </div>

          {/* Video side */}
          <VideoPlayer
            vimeoId={testimonial.vimeoId}
            title={testimonial.videoName}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
          />
        </div>
      </div>
    </section>
  );
}

interface VideoPlayerProps {
  vimeoId: string;
  title: string;
  isPlaying: boolean;
  onPlay: () => void;
}

function VideoPlayer({ vimeoId, title, isPlaying, onPlay }: VideoPlayerProps) {
  if (isPlaying) {
    return (
      <div className="bg-black lg:min-h-[360px]">
        <div className="relative aspect-video h-full w-full">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=0&loop=0&background=0`}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play video: ${title}`}
      className="group relative block bg-black lg:min-h-[360px]"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={`https://vumbnail.com/${vimeoId}.jpg`}
          alt={`${title} \u2014 video thumbnail`}
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
      </div>
    </button>
  );
}
