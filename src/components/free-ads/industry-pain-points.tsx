"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";
import {
  AlertTriangle,
  CloudLightning,
  PhoneOff,
  TrendingDown,
  Users,
  Thermometer,
  type LucideIcon,
} from "lucide-react";

type IconName =
  | "AlertTriangle"
  | "CloudLightning"
  | "PhoneOff"
  | "TrendingDown"
  | "Users"
  | "Thermometer";

const iconMap: Record<IconName, LucideIcon> = {
  AlertTriangle,
  CloudLightning,
  PhoneOff,
  TrendingDown,
  Users,
  Thermometer,
};

interface PainPoint {
  icon: IconName;
  title: string;
  description: string;
}

interface IndustryPainPointsProps {
  painPoints: PainPoint[];
  ctaText?: string;
}

export function IndustryPainPoints({
  painPoints,
  ctaText = "Get My FREE Ads",
}: IndustryPainPointsProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            The problems that keep you up at night — and how we solve them.
          </p>
        </AnimateOnScroll>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {painPoints.map((painPoint, index) => {
            const Icon = iconMap[painPoint.icon];
            return (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <BorderGlow borderRadius={14} innerClassName="p-6 flex gap-4" className="h-full">
                  <div className="bg-destructive/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    <Icon className="text-destructive h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground mb-2 text-lg font-semibold">
                      {painPoint.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{painPoint.description}</p>
                  </div>
                </BorderGlow>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll className="flex justify-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="shadow-primary/25 rounded-lg px-8 py-6 text-base font-bold shadow-lg md:px-12 md:py-7 md:text-lg"
          >
            {ctaText}
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
