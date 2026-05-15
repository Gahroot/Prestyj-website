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
        <Check className="text-success h-5 w-5" />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="text-destructive/70 h-5 w-5" />
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-12 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="border-border bg-card overflow-x-auto rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="border-border bg-muted/30 border-b">
                  <th className="text-muted-foreground p-4 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="text-primary min-w-[140px] p-4 text-center text-sm font-bold">
                    Prestyj
                  </th>
                  <th className="text-muted-foreground min-w-[140px] p-4 text-center text-sm font-semibold">
                    Agency
                  </th>
                  <th className="text-muted-foreground min-w-[140px] p-4 text-center text-sm font-semibold">
                    Freelancer
                  </th>
                  <th className="text-muted-foreground min-w-[140px] p-4 text-center text-sm font-semibold">
                    In-House Hire
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row: ComparisonCell, i: number) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}>
                    <td className="text-foreground p-4 text-sm font-medium">{row.feature}</td>
                    <td className="text-foreground p-4 text-center font-semibold">
                      <Cell value={row.prestyj} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center">
                      <Cell value={row.agency} />
                    </td>
                    <td className="text-muted-foreground p-4 text-center">
                      <Cell value={row.freelancer} />
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
      </div>
    </section>
  );
}
