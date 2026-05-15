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
        <Check className="text-success h-4 w-4 shrink-0" />
        <span>{value}</span>
      </span>
    );
  }
  if (isNegative) {
    return (
      <span className="flex items-center justify-center gap-1.5">
        <X className="text-muted-foreground/40 h-4 w-4 shrink-0" />
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Prestyj Free Ads vs. DIY vs. Hiring an Agency
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See how our free batch video ad offer compares to doing it yourself or hiring a
            traditional agency.
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
                <tr className="border-border bg-muted/30 border-b">
                  {headers.map((header, i) => (
                    <th
                      key={header}
                      className={`font-heading text-foreground p-4 text-sm font-semibold ${
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
                    className={idx % 2 === 0 ? "bg-muted/30" : "bg-transparent"}
                  >
                    <td className="text-foreground p-4 text-sm font-medium">{row.feature}</td>
                    <td className="text-foreground p-4 text-center text-sm">
                      <CellValue value={row.prestyj} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center text-sm">
                      <CellValue value={row.diy} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center text-sm">
                      <CellValue value={row.agency} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </BorderGlow>
        </AnimateOnScroll>

        {/* Mobile cards */}
        <div className="space-y-6 md:hidden">
          {rows.map((row, idx) => (
            <AnimateOnScroll key={row.feature} delay={idx * 0.05}>
              <div className="bg-card border-border rounded-lg border p-4">
                <p className="font-heading text-foreground mb-3 font-semibold">{row.feature}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Prestyj Free Ads</span>
                    <span className="text-foreground max-w-[60%] text-right">{row.prestyj}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DIY</span>
                    <span className="text-muted-foreground max-w-[60%] text-right">{row.diy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agency</span>
                    <span className="text-muted-foreground max-w-[60%] text-right">
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
