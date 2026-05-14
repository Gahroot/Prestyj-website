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
        <Check className="text-success h-5 w-5" aria-label="yes" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="text-destructive/70 h-5 w-5" aria-label="no" />
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
    prestyj: "Prestyj",
    agency: "Creative Agency",
    ugc: "UGC Creator",
    inHouse: "In-House Editor",
  },
}: HiddenCostTableProps) {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll className="mb-12 text-center">
          <Badge variant="outline" className="border-warning/50 text-warning mb-3">
            <AlertTriangle className="mr-1.5 h-3.5 w-3.5" />
            {eyebrow}
          </Badge>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="border-border bg-card overflow-x-auto rounded-xl border">
            <table className="w-full">
              <thead>
                <tr className="border-border bg-muted/30 border-b">
                  <th className="text-muted-foreground min-w-[200px] p-4 text-left text-sm font-semibold">
                    Cost / Capability
                  </th>
                  <th className="text-primary min-w-[150px] p-4 text-center text-sm font-bold">
                    {columns.prestyj}
                  </th>
                  <th className="text-muted-foreground min-w-[150px] p-4 text-center text-sm font-semibold">
                    {columns.agency}
                  </th>
                  <th className="text-muted-foreground min-w-[150px] p-4 text-center text-sm font-semibold">
                    {columns.ugc}
                  </th>
                  <th className="text-muted-foreground min-w-[150px] p-4 text-center text-sm font-semibold">
                    {columns.inHouse}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}>
                    <td className="text-foreground p-4 text-sm font-medium">{row.feature}</td>
                    <td className="text-foreground p-4 text-center font-semibold">
                      <Cell value={row.prestyj} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center">
                      <Cell value={row.agency} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center">
                      <Cell value={row.ugc} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center">
                      <Cell value={row.inHouse} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>

        {footnote && (
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-xs">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
