"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeInLeft, fadeInRight, transitions, viewport } from "@/lib/compare/animations";
import type { PricingSection } from "@/lib/compare/types";
import BorderGlow from "@/components/ui/border-glow";

interface ComparePricingProps {
  data: PricingSection;
}

export function ComparePricing({ data }: ComparePricingProps) {
  const { prestyj, competitor } = data;

  return (
    <section className="border-b py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Pricing Comparison
            </h2>
            <p className="text-muted-foreground text-lg">
              See how our pricing stacks up against {competitor.name}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* PrestyJ Card */}
            <motion.div {...fadeInLeft} transition={transitions.default} viewport={viewport}>
              <BorderGlow
                borderRadius={10}
                innerClassName="p-8"
                className={prestyj.highlight ? "ring-primary ring-2" : ""}
              >
                {prestyj.highlight && <Badge className="mb-4">Most Popular</Badge>}
                <h3 className="mb-2 text-2xl font-bold">{prestyj.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold">{prestyj.price}</div>
                  {prestyj.priceSubtext && (
                    <div className="text-muted-foreground mt-2 text-sm">{prestyj.priceSubtext}</div>
                  )}
                </div>
                <ul className="space-y-3">
                  {prestyj.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <X className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                      )}
                      <div>
                        <span className={!feature.included ? "text-muted-foreground" : ""}>
                          {feature.text}
                        </span>
                        {feature.note && (
                          <div className="text-muted-foreground mt-1 text-xs">{feature.note}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </BorderGlow>
            </motion.div>

            {/* Competitor Card */}
            <motion.div {...fadeInRight} transition={transitions.default} viewport={viewport}>
              <BorderGlow borderRadius={10} innerClassName="p-8">
                <h3 className="mb-2 text-2xl font-bold">{competitor.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold">{competitor.price}</div>
                  {competitor.priceSubtext && (
                    <div className="text-muted-foreground mt-2 text-sm">
                      {competitor.priceSubtext}
                    </div>
                  )}
                </div>
                <ul className="space-y-3">
                  {competitor.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <X className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                      )}
                      <div>
                        <span className={!feature.included ? "text-muted-foreground" : ""}>
                          {feature.text}
                        </span>
                        {feature.note && (
                          <div className="text-muted-foreground mt-1 text-xs">{feature.note}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </BorderGlow>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
