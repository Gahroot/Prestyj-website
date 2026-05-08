"use client";

import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import { freeAdsComparison } from "@/lib/free-ads-data";

function CellValue({ value }: { value: string }) {
  const isPositive =
    value === "Included" ||
    value === "Done for you" ||
    value === "Free (first batch)" ||
    value === "Every hook × angle × CTA" ||
    value === "300+ from 1 session" ||
    value === "24 hours";

  const isNegative =
    value === "Not included" ||
    value === "Build it yourself" ||
    value === "You write them" ||
    value === "Extra cost or not available" ||
    value === "Manual A/B test a few";

  if (isPositive) {
    return (
      <span className="flex items-center justify-center gap-1.5">
        <Check className="h-4 w-4 text-success shrink-0" />
        <span>{value}</span>
      </span>
    );
  }
  if (isNegative) {
    return (
      <span className="flex items-center justify-center gap-1.5">
        <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
        <span>{value}</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export function FreeAdsComparisonSection() {
  const { headers, rows } = freeAdsComparison;

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Prestyj Free Ads vs. DIY vs. Hiring an Agency
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our free batch video ad offer compares to doing it yourself
            or hiring a traditional agency.
          </p>
        </AnimateOnScroll>

        {/* Desktop table */}
        <AnimateOnScroll delay={0.2} className="hidden md:block">
          <BorderGlow
            borderRadius={10}
            innerStyle={{ overflow: "hidden", borderRadius: "inherit" }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {headers.map((header, i) => (
                    <th
                      key={header}
                      className={`p-4 font-heading font-semibold text-foreground text-sm ${
                        i === 0 ? "text-left" : "text-center"
                      } ${i === 1 ? "text-primary" : ""}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={
                      idx % 2 === 0 ? "bg-muted/30" : "bg-transparent"
                    }
                  >
                    <td className="p-4 text-foreground font-medium text-sm">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center text-sm text-foreground">
                      <CellValue value={row.prestyj} />
                    </td>
                    <td className="p-4 text-center text-sm text-muted-foreground">
                      <CellValue value={row.diy} />
                    </td>
                    <td className="p-4 text-center text-sm text-muted-foreground">
                      <CellValue value={row.agency} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </BorderGlow>
        </AnimateOnScroll>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {rows.map((row, idx) => (
            <AnimateOnScroll key={row.feature} delay={idx * 0.05}>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground mb-3">
                  {row.feature}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">
                      Prestyj Free Ads
                    </span>
                    <span className="text-foreground text-right max-w-[60%]">
                      {row.prestyj}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DIY</span>
                    <span className="text-muted-foreground text-right max-w-[60%]">
                      {row.diy}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agency</span>
                    <span className="text-muted-foreground text-right max-w-[60%]">
                      {row.agency}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
