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

type IconName = "AlertTriangle" | "CloudLightning" | "PhoneOff" | "TrendingDown" | "Users" | "Thermometer";

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

export function IndustryPainPoints({ painPoints, ctaText = "Get My FREE Ads" }: IndustryPainPointsProps) {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The problems that keep you up at night — and how we solve them.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((painPoint, index) => {
            const Icon = iconMap[painPoint.icon];
            return (
              <AnimateOnScroll key={index} delay={index * 0.1}>
                <BorderGlow borderRadius={14} innerClassName="p-6 flex gap-4" className="h-full">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                      {painPoint.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {painPoint.description}
                    </p>
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
            className="font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg shadow-lg shadow-primary/25"
          >
            {ctaText}
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
