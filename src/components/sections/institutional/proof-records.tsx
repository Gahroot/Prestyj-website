import type { ReactElement } from "react";
import { Check } from "lucide-react";

import { proofRecords } from "@/lib/institutional/proof";
import { cn } from "@/lib/utils";

export function ProofRecords({ compact = false }: { compact?: boolean }): ReactElement {
  const records = compact ? proofRecords.slice(0, 3) : proofRecords;

  return (
    <section aria-labelledby="proof-title" className="border-b py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b pb-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h2
            id="proof-title"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            The work, not the logo wall.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-8">
            The firms behind this work do not hand out logo rights. Each record is anonymized and
            labeled by its actual stage, including reference work that is not live.
          </p>
        </div>

        <ul>
          {records.map((record) => (
            <li
              key={record.name}
              className="grid gap-6 border-b py-8 last:border-b-0 lg:grid-cols-[0.6fr_1.2fr_1fr]"
            >
              <div>
                <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                  {record.stage}
                </p>
                <h3 className="font-heading mt-3 text-xl font-bold">{record.name}</h3>
                <p className="text-primary mt-2 text-sm">{record.audience}</p>
              </div>
              <p className="text-muted-foreground max-w-2xl leading-7">{record.delivered}</p>
              <ul className="space-y-2 text-sm">
                {record.controls.map((control) => (
                  <li key={control} className="flex gap-2">
                    <Check
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        record.stage === "Reference architecture"
                          ? "text-muted-foreground"
                          : "text-primary",
                      )}
                    />
                    <span>{control}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
