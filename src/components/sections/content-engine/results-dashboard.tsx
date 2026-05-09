"use client";

import {
  Activity,
  BarChart3,
  CalendarDays,
  Layers,
  Send,
  TrendingUp,
} from "lucide-react";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "@/components/ui/count-up";
import {
  activePlatforms,
  mediaMasterStats,
  weeklyHistory,
  type MediaMasterStats,
  type WeeklyDatapoint,
} from "@/lib/content-engine/stats";

interface StatCard {
  icon: typeof Send;
  label: string;
  value: number;
  suffix?: string;
  helper: string;
  separator?: string;
}

interface ResultsDashboardProps {
  stats?: MediaMasterStats;
  history?: WeeklyDatapoint[];
  platforms?: string[];
}

const formatWeekLabel = (weekOf: string): string =>
  new Date(weekOf).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

const formatLastUpdated = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export function ContentEngineResultsDashboard({
  stats = mediaMasterStats,
  history = weeklyHistory,
  platforms = activePlatforms,
}: ResultsDashboardProps) {
  const cards: StatCard[] = [
    {
      icon: Send,
      label: "Total posts shipped",
      value: stats.totalPostsShipped,
      helper: "Across every Prestyj-owned account",
      separator: ",",
    },
    {
      icon: Layers,
      label: "Platforms active",
      value: stats.platformsActive,
      helper: platforms.join(" • "),
    },
    {
      icon: CalendarDays,
      label: "Days running",
      value: stats.daysRunning,
      helper: `Live since ${formatLastUpdated(stats.launchDate)}`,
    },
    {
      icon: TrendingUp,
      label: "Avg posts / day",
      value: stats.averagePostsPerDay,
      helper: "7-platform daily output",
    },
  ];

  const peakWeek = history.reduce((acc, week) => Math.max(acc, week.posts), 0);

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1.5">
            <Activity className="size-3.5 text-primary" />
            Live from /media-master
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            We run this on{" "}
            <span className="text-primary">our own accounts</span> first.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real numbers from Prestyj&apos;s internal content engine — the same
            system we ship for clients. Updated weekly.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, index) => (
            <AnimateOnScroll key={card.label} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.label}
                  </CardTitle>
                  <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <card.icon className="size-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-2">
                    <CountUp
                      to={card.value}
                      duration={1.6}
                      separator={card.separator}
                    />
                    {card.suffix && (
                      <span className="text-primary">{card.suffix}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {card.helper}
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.2}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-primary" />
                  <CardTitle className="text-lg">
                    Weekly posts shipped
                  </CardTitle>
                </div>
                <Badge variant="outline" className="text-xs">
                  Last updated {formatLastUpdated(stats.lastUpdated)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="grid gap-3 items-end h-48"
                style={{
                  gridTemplateColumns: `repeat(${history.length}, minmax(0, 1fr))`,
                }}
                role="img"
                aria-label="Weekly posts shipped chart"
              >
                {history.map((week) => {
                  const heightPct = peakWeek
                    ? Math.max(8, (week.posts / peakWeek) * 100)
                    : 0;
                  return (
                    <div
                      key={week.weekOf}
                      className="flex flex-col items-center justify-end h-full gap-2"
                    >
                      <span className="text-xs font-medium text-foreground">
                        {week.posts}
                      </span>
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-primary/40 to-primary transition-all"
                        style={{ height: `${heightPct}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className="grid gap-3 mt-2"
                style={{
                  gridTemplateColumns: `repeat(${history.length}, minmax(0, 1fr))`,
                }}
                aria-hidden="true"
              >
                {history.map((week) => (
                  <span
                    key={week.weekOf}
                    className="text-[10px] sm:text-xs text-muted-foreground text-center"
                  >
                    {formatWeekLabel(week.weekOf)}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
