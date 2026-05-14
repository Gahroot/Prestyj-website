"use client";

import { Fragment } from "react";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { pricingTiers, pricingFeatures, featureCategories } from "@/lib/pricing-data";
import BorderGlow from "@/components/ui/border-glow";

const categories = Object.entries(featureCategories) as [keyof typeof featureCategories, string][];

export function PricingComparisonSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Compare Plans Side by Side
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See exactly what&apos;s included in each plan.
          </p>
        </AnimateOnScroll>

        {/* Desktop table */}
        <AnimateOnScroll delay={0.2} className="hidden md:block">
          <BorderGlow
            borderRadius={10}
            innerStyle={{ overflow: "hidden", borderRadius: "inherit" }}
          >
            <table className="w-full">
              <thead className="bg-background sticky top-0 z-10">
                <tr className="border-border border-b">
                  <th className="bg-background font-heading text-foreground p-4 text-left font-semibold" />
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className="bg-background font-heading text-foreground p-4 text-center align-top font-semibold"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span>{tier.name}</span>
                        {tier.id === "pro" && <Badge className="py-0 text-[10px]">Popular</Badge>}
                      </div>
                      <div className="text-muted-foreground mt-1 text-xs font-normal">
                        ${tier.monthlyPrice.toLocaleString()}/mo &middot; {tier.audience}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Pricing rows */}
                <tr className="bg-muted/30">
                  <td className="text-foreground p-4 font-medium">Monthly Price</td>
                  {pricingTiers.map((tier) => (
                    <td
                      key={tier.id}
                      className="font-heading text-foreground p-4 text-center font-bold"
                    >
                      ${tier.monthlyPrice.toLocaleString()}/mo
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="text-foreground p-4 font-medium">Setup Fee</td>
                  {pricingTiers.map((tier) => (
                    <td key={tier.id} className="text-foreground p-4 text-center text-sm">
                      ${tier.setupFee.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="bg-muted/30">
                  <td className="text-foreground p-4 font-medium">Ad Budget Included</td>
                  {pricingTiers.map((tier) => (
                    <td key={tier.id} className="text-foreground p-4 text-center text-sm">
                      {tier.adBudget.replace("/mo included", "/mo")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="text-foreground p-4 font-medium">Batch Video Ads</td>
                  {pricingTiers.map((tier) => (
                    <td key={tier.id} className="text-foreground p-4 text-center text-sm">
                      {tier.batchAds}
                    </td>
                  ))}
                </tr>

                {/* Feature rows grouped by category */}
                {categories.map(([catKey, catLabel]) => {
                  const catFeatures = pricingFeatures.filter((f) => f.category === catKey);
                  if (catFeatures.length === 0) return null;
                  return (
                    <Fragment key={catKey}>
                      <tr>
                        <td
                          colSpan={4}
                          className="text-muted-foreground px-4 pt-6 pb-2 text-xs font-semibold tracking-wider uppercase"
                        >
                          {catLabel}
                        </td>
                      </tr>
                      {catFeatures.map((feature, idx) => (
                        <tr
                          key={feature.key}
                          className={idx % 2 === 0 ? "bg-muted/30" : "bg-transparent"}
                        >
                          <td className="text-foreground p-4">
                            <div className="flex items-center gap-3">
                              <feature.icon className="text-primary h-4 w-4 flex-shrink-0" />
                              {feature.label}
                            </div>
                          </td>
                          {pricingTiers.map((tier) => (
                            <td key={tier.id} className="p-4 text-center">
                              {tier.features[feature.key] ? (
                                <Check className="text-success mx-auto h-5 w-5" />
                              ) : (
                                <X className="text-muted-foreground/40 mx-auto h-5 w-5" />
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
          </BorderGlow>
        </AnimateOnScroll>

        {/* Mobile cards */}
        <div className="space-y-6 md:hidden">
          {pricingTiers.map((tier, index) => (
            <AnimateOnScroll key={tier.id} delay={index * 0.1}>
              <Card className={tier.id === "pro" ? "border-primary border-2" : "border-border"}>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-heading text-foreground text-lg font-bold">{tier.name}</h3>
                    {tier.id === "pro" && <Badge className="py-0 text-[10px]">Popular</Badge>}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    ${tier.monthlyPrice.toLocaleString()}/mo &middot; $
                    {tier.setupFee.toLocaleString()} setup
                  </p>
                  <div className="mb-3 space-y-2">
                    <p className="text-foreground text-sm">{tier.adBudget}</p>
                    <p className="text-foreground text-sm">{tier.batchAds} batch video ads</p>
                  </div>
                  <div className="border-border space-y-2 border-t pt-3">
                    {pricingFeatures
                      .filter((f) => tier.features[f.key])
                      .map((feature) => (
                        <div key={feature.key} className="flex items-center gap-2">
                          <Check className="text-success h-4 w-4 flex-shrink-0" />
                          <span className="text-foreground text-sm">{feature.label}</span>
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
