import { z } from "zod";
import { calendarDateSchema } from "./institutional-ledger";

export const observationSchema = z
  .object({
    metric: z.string().min(1),
    value: z.number().finite().nonnegative().nullable(),
    source: z.string().min(1).nullable(),
    exportDate: calendarDateSchema.nullable(),
    reportingStart: calendarDateSchema.nullable(),
    reportingEnd: calendarDateSchema.nullable(),
    filters: z.record(z.string(), z.string()).nullable(),
    evidence: z.string().min(1).nullable(),
  })
  .strict()
  .superRefine((observation, ctx) => {
    if (
      observation.value !== null &&
      (!observation.source ||
        !observation.exportDate ||
        !observation.reportingStart ||
        !observation.reportingEnd ||
        !observation.filters ||
        !observation.evidence)
    )
      ctx.addIssue({
        code: "custom",
        message: "Observed values require source, dates, filters and evidence",
      });
    if (
      observation.reportingStart &&
      observation.reportingEnd &&
      observation.reportingEnd < observation.reportingStart
    )
      ctx.addIssue({ code: "custom", message: "Reversed reporting window" });
    if (
      observation.exportDate &&
      observation.reportingEnd &&
      observation.exportDate < observation.reportingEnd
    )
      ctx.addIssue({ code: "custom", message: "Export precedes window" });
  });
export const buyerPromptObservationSchema = z
  .object({
    promptId: z.string().regex(/^BP-0[1-8]$/),
    engine: z.string().min(1),
    engineVersion: z.string().min(1),
    observedAt: z.string().datetime(),
    locale: z.string().min(1),
    searchMode: z.string().min(1),
    outcome: z.enum(["answered", "error", "unavailable"]),
    citedUrls: z.array(z.string().url()).nullable(),
    prestyjCited: z.boolean().nullable(),
    evidencePath: z.string().min(1),
    notes: z.string().nullable(),
  })
  .strict()
  .superRefine((observation, ctx) => {
    if (observation.outcome === "answered") {
      if (!observation.citedUrls || observation.prestyjCited === null)
        ctx.addIssue({
          code: "custom",
          message:
            "Answered observations require citation results, including an empty list for no citations",
        });
      const cited =
        observation.citedUrls?.some((value) =>
          ["prestyj.com", "www.prestyj.com"].includes(new URL(value).hostname),
        ) ?? false;
      if (observation.prestyjCited !== cited)
        ctx.addIssue({ code: "custom", message: "Citation flag disagrees with observed URLs" });
    } else if (observation.citedUrls !== null || observation.prestyjCited !== null)
      ctx.addIssue({ code: "custom", message: "An error is unknown, not an observed absence" });
  });
