"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  defaultContentEngineConfig,
  type LiveFeedConfig,
} from "@/lib/content-engine";

interface ContentEngineLiveFeedProps {
  config?: LiveFeedConfig;
}

export function ContentEngineLiveFeed({
  config = defaultContentEngineConfig.liveFeed,
}: ContentEngineLiveFeedProps) {
  const {
    badgeIcon: BadgeIcon,
    badgeText,
    headline,
    headlineAccent,
    subhead,
    instagramPosts,
    instagramHandle,
    tiktokPosts,
    tiktokHandle,
  } = config;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {BadgeIcon && <BadgeIcon className="size-3" />}{badgeText}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            {headline}{" "}
            <span className="text-primary">{headlineAccent}</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        {/* ── Instagram Carousel ── */}
        {instagramPosts.length > 0 && (
          <AnimateOnScroll className="mb-16">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              {BadgeIcon && <BadgeIcon className="w-5 h-5 text-pink-500" />}
              {instagramHandle}
            </h3>

            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {instagramPosts.map((post) => (
                  <CarouselItem
                    key={post.embedUrl}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="overflow-hidden rounded-lg border border-border bg-card">
                      <iframe
                        src={post.embedUrl}
                        title={post.label}
                        width="100%"
                        height="480"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-5" />
              <CarouselNext className="-right-5" />
            </Carousel>
          </AnimateOnScroll>
        )}

        {/* ── TikTok Carousel ── */}
        {tiktokPosts.length > 0 && (
          <AnimateOnScroll>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.86 2.86 0 0 1 .9.15V9.01a6.27 6.27 0 0 0-.9-.07 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.77 1.53V7.28a4.84 4.84 0 0 1-1.01-.59Z" />
              </svg>
              {tiktokHandle}
            </h3>

            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {tiktokPosts.map((post) => (
                  <CarouselItem
                    key={post.videoId}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="overflow-hidden rounded-lg border border-border bg-card">
                      <blockquote
                        className="tiktok-embed"
                        cite={post.url}
                        data-video-id={post.videoId}
                      >
                        <section>
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {post.caption}
                          </a>
                        </section>
                      </blockquote>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-5" />
              <CarouselNext className="-right-5" />
            </Carousel>
          </AnimateOnScroll>
        )}
      </div>

      {/* TikTok embed script — loaded once, converts all blockquotes */}
      {tiktokPosts.length > 0 && (
        <script async src="https://www.tiktok.com/embed.js" />
      )}
    </section>
  );
}
