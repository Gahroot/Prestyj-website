"use client";

import { Activity, BarChart3, CalendarDays, Layers, Send, TrendingUp } from "lucide-react";

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
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1.5">
            <Activity className="text-primary size-3.5" />
            Live from /media-master
          </Badge>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            We run this on <span className="text-primary">our own accounts</span> first.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Real numbers from Prestyj&apos;s internal content engine — the same system we ship for
            clients. Updated weekly.
          </p>
        </AnimateOnScroll>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <AnimateOnScroll key={card.label} delay={index * 0.08}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    {card.label}
                  </CardTitle>
                  <div className="bg-primary/10 flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <card.icon className="text-primary size-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="font-heading text-foreground mb-2 text-3xl font-bold sm:text-4xl">
                    <CountUp
                      to={card.value}
                      duration={1.6}
                      {...(card.separator !== undefined && { separator: card.separator })}
                    />
                    {card.suffix && <span className="text-primary">{card.suffix}</span>}
                  </div>
                  <p className="text-muted-foreground line-clamp-2 text-xs">{card.helper}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.2}>
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-primary size-5" />
                  <CardTitle className="text-lg">Weekly posts shipped</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs">
                  Last updated {formatLastUpdated(stats.lastUpdated)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div
                className="grid h-48 items-end gap-3"
                style={{
                  gridTemplateColumns: `repeat(${history.length}, minmax(0, 1fr))`,
                }}
                role="img"
                aria-label="Weekly posts shipped chart"
              >
                {history.map((week) => {
                  const heightPct = peakWeek ? Math.max(8, (week.posts / peakWeek) * 100) : 0;
                  return (
                    <div
                      key={week.weekOf}
                      className="flex h-full flex-col items-center justify-end gap-2"
                    >
                      <span className="text-foreground text-xs font-medium">{week.posts}</span>
                      <div
                        className="from-primary/40 to-primary w-full rounded-t-md bg-gradient-to-t transition-all"
                        style={{ height: `${heightPct}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-2 grid gap-3"
                style={{
                  gridTemplateColumns: `repeat(${history.length}, minmax(0, 1fr))`,
                }}
                aria-hidden="true"
              >
                {history.map((week) => (
                  <span
                    key={week.weekOf}
                    className="text-muted-foreground text-center text-[10px] sm:text-xs"
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
