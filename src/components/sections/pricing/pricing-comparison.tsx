"use client";

import { Fragment } from "react";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  pricingTiers,
  pricingFeatures,
  featureCategories,
} from "@/lib/pricing-data";

const categories = Object.entries(featureCategories) as [
  keyof typeof featureCategories,
  string,
][];

export function PricingComparisonSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Compare Plans Side by Side
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See exactly what&apos;s included in each plan.
          </p>
        </AnimateOnScroll>

        {/* Desktop table */}
        <AnimateOnScroll delay={0.2} className="hidden md:block">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-heading font-semibold text-foreground" />
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className="p-4 font-heading font-semibold text-foreground text-center"
                    >
                      {tier.name}
                      {tier.id === "pro" && (
                        <Badge className="ml-2 text-[10px] py-0">
                          Popular
                        </Badge>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Pricing rows */}
                <tr className="bg-muted/30">
                  <td className="p-4 text-foreground font-medium">
                    Monthly Price
                  </td>
                  {pricingTiers.map((tier) => (
                    <td
                      key={tier.id}
                      className="p-4 text-center font-heading font-bold text-foreground"
                    >
                      ${tier.monthlyPrice.toLocaleString()}/mo
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-foreground font-medium">
                    Setup Fee
                  </td>
                  {pricingTiers.map((tier) => (
                    <td
                      key={tier.id}
                      className="p-4 text-center text-sm text-foreground"
                    >
                      ${tier.setupFee.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="bg-muted/30">
                  <td className="p-4 text-foreground font-medium">
                    Ad Budget Included
                  </td>
                  {pricingTiers.map((tier) => (
                    <td
                      key={tier.id}
                      className="p-4 text-center text-sm text-foreground"
                    >
                      {tier.adBudget.replace("/mo included", "/mo")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 text-foreground font-medium">
                    Batch Video Ads
                  </td>
                  {pricingTiers.map((tier) => (
                    <td
                      key={tier.id}
                      className="p-4 text-center text-sm text-foreground"
                    >
                      {tier.batchAds}
                    </td>
                  ))}
                </tr>

                {/* Feature rows grouped by category */}
                {categories.map(([catKey, catLabel]) => {
                  const catFeatures = pricingFeatures.filter(
                    (f) => f.category === catKey,
                  );
                  if (catFeatures.length === 0) return null;
                  return (
                    <Fragment key={catKey}>
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          {catLabel}
                        </td>
                      </tr>
                      {catFeatures.map((feature, idx) => (
                        <tr
                          key={feature.key}
                          className={
                            idx % 2 === 0 ? "bg-muted/30" : "bg-transparent"
                          }
                        >
                          <td className="p-4 text-foreground">
                            <div className="flex items-center gap-3">
                              <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature.label}
                            </div>
                          </td>
                          {pricingTiers.map((tier) => (
                            <td key={tier.id} className="p-4 text-center">
                              {tier.features[feature.key] ? (
                                <Check className="h-5 w-5 text-success mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {pricingTiers.map((tier, index) => (
            <AnimateOnScroll key={tier.id} delay={index * 0.1}>
              <Card
                className={
                  tier.id === "pro"
                    ? "border-primary border-2"
                    : "border-border"
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {tier.name}
                    </h3>
                    {tier.id === "pro" && <Badge className="text-[10px] py-0">Popular</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    ${tier.monthlyPrice.toLocaleString()}/mo &middot; ${tier.setupFee.toLocaleString()} setup
                  </p>
                  <div className="space-y-2 mb-3">
                    <p className="text-sm text-foreground">
                      {tier.adBudget}
                    </p>
                    <p className="text-sm text-foreground">
                      {tier.batchAds} batch video ads
                    </p>
                  </div>
                  <div className="border-t border-border pt-3 space-y-2">
                    {pricingFeatures
                      .filter((f) => tier.features[f.key])
                      .map((feature) => (
                        <div
                          key={feature.key}
                          className="flex items-center gap-2"
                        >
                          <Check className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
