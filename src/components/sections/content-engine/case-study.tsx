import { Quote, TrendingUp, Calendar, Users } from "lucide-react";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// TODO: Replace with real data once first paying Content Engine client is live.
// Swap placeholder screenshots in /public/images/case-study/, update metrics
// from the client's analytics, and confirm the quote + attribution with them.
const caseStudy = {
  eyebrow: "First Client Case Study",
  headline: "From dead feed to daily distribution",
  subhead:
    "Real numbers from a real client running on Prestyj's Content Swarm.",
  client: {
    name: "Placeholder Client",
    role: "Founder",
    company: "Placeholder Co.",
    avatarSrc: "",
    avatarFallback: "PC",
  },
  before: {
    label: "Before Prestyj",
    src: "/images/case-study/before-feed-placeholder.webp",
    alt: "Client social feed before Prestyj — sparse, inconsistent posts",
    caption: "3 posts in 90 days. One platform. Zero rhythm.",
  },
  after: {
    label: "After Prestyj",
    src: "/images/case-study/after-feed-placeholder.webp",
    alt: "Client social feed after Prestyj — daily, multi-platform posts",
    caption: "Daily posts across 5 platforms. Consistent brand voice.",
  },
  metrics: [
    {
      icon: Calendar,
      value: "0 → 30/day",
      label: "Posting velocity",
    },
    {
      icon: TrendingUp,
      value: "+1,200%",
      label: "Monthly impressions",
    },
    {
      icon: Users,
      value: "5",
      label: "Platforms live",
    },
  ],
  quote:
    "We went from posting once a month to showing up everywhere our buyers actually scroll — without hiring a single person. The first month felt like flipping a switch on our brand.",
};

export function ContentEngineCaseStudy() {
  const { eyebrow, headline, subhead, client, before, after, metrics, quote } =
    caseStudy;

  return (
    <section className="py-24 bg-muted/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {eyebrow}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[before, after].map((shot) => (
              <Card key={shot.label} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-base font-heading">{shot.label}</span>
                    <Badge
                      variant={
                        shot.label === before.label ? "outline" : "success"
                      }
                    >
                      {shot.label === before.label ? "Then" : "Now"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative aspect-[3/4] bg-black/40 rounded-lg overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <CardDescription>{shot.caption}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {metrics.map((metric) => (
              <Card key={metric.label}>
                <CardContent className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 shrink-0">
                    <metric.icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <Card>
            <CardContent className="flex flex-col md:flex-row gap-6 items-start">
              <Quote
                className="size-10 text-primary/40 shrink-0"
                aria-hidden="true"
              />
              <div className="flex-1">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={client.avatarSrc}
                      alt={`${client.name} avatar`}
                    />
                    <AvatarFallback>{client.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {client.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {client.role}, {client.company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
