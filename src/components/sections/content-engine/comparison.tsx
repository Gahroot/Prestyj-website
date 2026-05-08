import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import {
  defaultContentEngineConfig,
  type ComparisonConfig,
  type ComparisonCell,
} from "@/lib/content-engine";

interface ContentEngineComparisonProps {
  config?: ComparisonConfig;
}

function Cell({ value }: { value: string | true | false }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-success" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="w-5 h-5 text-destructive/70" />
      </div>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ContentEngineComparison({
  config = defaultContentEngineConfig.comparison,
}: ContentEngineComparisonProps) {
  const { headline, subhead, rows } = config;

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                    Feature
                  </th>
                  <th className="p-4 text-sm font-bold text-primary text-center min-w-[140px]">
                    Prestyj
                  </th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground text-center min-w-[140px]">
                    Agency
                  </th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground text-center min-w-[140px]">
                    Freelancer
                  </th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground text-center min-w-[140px]">
                    In-House Hire
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row: ComparisonCell, i: number) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}
                  >
                    <td className="p-4 text-sm font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center text-foreground font-semibold">
                      <Cell value={row.prestyj} />
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <Cell value={row.agency} />
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <Cell value={row.freelancer} />
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      <Cell value={row.inHouse} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
