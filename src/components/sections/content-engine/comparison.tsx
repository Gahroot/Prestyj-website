import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

type Row = {
  feature: string;
  prestyj: string | true;
  agency: string | false;
  freelancer: string | false;
  inHouse: string | false;
};

const ROWS: Row[] = [
  {
    feature: "Accounts managed",
    prestyj: "Up to 3+",
    agency: "1",
    freelancer: "1",
    inHouse: "1–2",
  },
  {
    feature: "Platforms covered",
    prestyj: "Up to 7",
    agency: "2–3",
    freelancer: "1–2",
    inHouse: "2–3",
  },
  {
    feature: "Brand + personal brand",
    prestyj: true,
    agency: false,
    freelancer: false,
    inHouse: false,
  },
  {
    feature: "Posts per month",
    prestyj: "270–2,700",
    agency: "30–60",
    freelancer: "20–40",
    inHouse: "60–120",
  },
  {
    feature: "Posts on weekends/holidays",
    prestyj: true,
    agency: false,
    freelancer: false,
    inHouse: false,
  },
  {
    feature: "Calls in sick",
    prestyj: true,
    agency: false,
    freelancer: false,
    inHouse: false,
  },
  {
    feature: "Live in 24 hours",
    prestyj: true,
    agency: false,
    freelancer: "sometimes",
    inHouse: false,
  },
  {
    feature: "Monthly cost",
    prestyj: "$2K–$5K",
    agency: "$5K–$15K",
    freelancer: "$2K–$8K",
    inHouse: "$8K–$12K loaded",
  },
];

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

export function ContentEngineComparison() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Prestyj vs. Every Other Way to Post.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Same job. Different math.
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
                {ROWS.map((row, i) => (
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
