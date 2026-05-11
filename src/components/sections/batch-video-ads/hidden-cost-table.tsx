import { Check, X, AlertTriangle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Badge } from "@/components/ui/badge";

export interface HiddenCostRow {
  feature: string;
  prestyj: string | true | false;
  agency: string | true | false;
  ugc: string | true | false;
  inHouse: string | true | false;
}

interface HiddenCostTableProps {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
  footnote?: string;
  rows: HiddenCostRow[];
  columns?: {
    prestyj: string;
    agency: string;
    ugc: string;
    inHouse: string;
  };
}

function Cell({ value }: { value: string | true | false }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-success" aria-label="yes" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="w-5 h-5 text-destructive/70" aria-label="no" />
      </div>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function HiddenCostTable({
  eyebrow = "Hidden Cost Breakdown",
  headline = "The Real Cost Comparison",
  subhead = "What you actually pay — including the things nobody puts in their pitch deck.",
  footnote = "Figures are 2026 US-market averages from publicly available rate cards, agency RFPs, and Glassdoor loaded-cost data. Your mileage may vary, but the direction won't.",
  rows,
  columns = {
    prestyj: "PRESTYJ",
    agency: "Creative Agency",
    ugc: "UGC Creator",
    inHouse: "In-House Editor",
  },
}: HiddenCostTableProps) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="outline" className="mb-3 border-warning/50 text-warning">
            <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />
            {eyebrow}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subhead}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 text-sm font-semibold text-muted-foreground min-w-[200px]">
                    Cost / Capability
                  </th>
                  <th className="p-4 text-sm font-bold text-primary text-center min-w-[150px]">
                    {columns.prestyj}
                  </th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground text-center min-w-[150px]">
                    {columns.agency}
                  </th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground text-center min-w-[150px]">
                    {columns.ugc}
                  </th>
                  <th className="p-4 text-sm font-semibold text-muted-foreground text-center min-w-[150px]">
                    {columns.inHouse}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
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
                      <Cell value={row.ugc} />
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

        {footnote && (
          <p className="text-center text-xs text-muted-foreground mt-6 max-w-3xl mx-auto">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
