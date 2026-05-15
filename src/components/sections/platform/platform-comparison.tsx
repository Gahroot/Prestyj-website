"use client";

import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import { platformComparison } from "@/lib/platform-data";

function CellValue({ value }: { value: string }) {
  const isPositive =
    value.startsWith("Purpose-built") ||
    value.startsWith("50+") ||
    value.startsWith("Deploy") ||
    value === "Built-in" ||
    value.startsWith("7–10") ||
    value.startsWith("From $1,997") ||
    value.startsWith("Included");

  const isNegative =
    value === "Template-based responses" ||
    value === "Limited or Zapier-only" ||
    value === "Single chatbot" ||
    value.startsWith("Requires ") ||
    value.startsWith("Months of") ||
    value.startsWith("Complex orchestration") ||
    value.startsWith("Expensive to") ||
    value.startsWith("3–6 months") ||
    value.startsWith("$10K") ||
    value === "Self-serve";

  if (isPositive) {
    return (
      <span className="flex items-start gap-1.5">
        <Check className="text-success mt-0.5 h-4 w-4 shrink-0" />
        <span>{value}</span>
      </span>
    );
  }
  if (isNegative) {
    return (
      <span className="flex items-start gap-1.5">
        <X className="text-muted-foreground/40 mt-0.5 h-4 w-4 shrink-0" />
        <span>{value}</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export function PlatformComparisonSection() {
  const { headers, rows } = platformComparison;

  return (
    <section className="bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
            Prestyj vs. Generic Chatbots vs. Building In-House
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            See how a purpose-built AI sales platform compares to off-the-shelf tools or hiring your
            own engineering team.
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
                      <CellValue value={row.generic} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center text-sm">
                      <CellValue value={row.inhouse} />
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
              <div className="bg-background border-border rounded-lg border p-4">
                <p className="font-heading text-foreground mb-3 font-semibold">{row.feature}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-primary font-medium">Prestyj</span>
                    <span className="text-foreground max-w-[60%] text-right">{row.prestyj}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Generic AI</span>
                    <span className="text-muted-foreground max-w-[60%] text-right">
                      {row.generic}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">In-House</span>
                    <span className="text-muted-foreground max-w-[60%] text-right">
                      {row.inhouse}
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
