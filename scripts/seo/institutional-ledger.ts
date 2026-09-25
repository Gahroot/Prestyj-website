import { z } from "zod";

export const calendarDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const timestamp = Date.parse(`${value}T00:00:00Z`);
    return Number.isFinite(timestamp) && new Date(timestamp).toISOString().slice(0, 10) === value;
  }, "Invalid calendar date");
const observedDate = calendarDateSchema.nullable();
export const contentLedgerSchema = z
  .object({
    version: z.literal(1),
    preparedOn: calendarDateSchema,
    policy: z.string().min(1),
    items: z
      .array(
        z
          .object({
            id: z.string().regex(/^IG-\d{2}$/),
            action: z.enum(["expand", "new", "asset"]),
            audience: z.string().min(1),
            topic: z.string().min(1),
            slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
            candidateMissedDate: observedDate,
            missedConfidence: z.enum(["candidate-only", "unknown"]),
            targetDate: calendarDateSchema,
            evidence: z.array(z.string().min(1)).min(1),
            artifactPath: z
              .string()
              .regex(/^content\/(?:blog|drafts\/institutional)\/[a-z0-9-]+\.mdx$/),
            reviewRequirements: z.array(z.string().min(1)).min(1),
            state: z.enum([
              "draft",
              "awaiting-review",
              "approved",
              "release-prepared",
              "live-verified",
              "measured",
            ]),
            revisedOn: observedDate,
            reviews: z.array(
              z
                .object({
                  role: z.string().min(1),
                  reviewer: z.string().min(1),
                  date: calendarDateSchema,
                  evidence: z.string().min(1),
                })
                .strict(),
            ),
            releasePreparedOn: observedDate,
            liveVerifiedOn: observedDate,
            measuredOn: observedDate,
            liveEvidence: z
              .object({
                url: z.url(),
                deploymentId: z.string().min(1),
                evidence: z.string().min(1),
              })
              .strict()
              .nullable()
              .optional(),
            measurementEvidence: z
              .object({
                source: z.string().min(1),
                reportingStart: calendarDateSchema,
                reportingEnd: calendarDateSchema,
                evidence: z.string().min(1),
              })
              .strict()
              .nullable()
              .optional(),
          })
          .strict(),
      )
      .length(18),
  })
  .strict()
  .superRefine((ledger, ctx) => {
    for (const key of ["id", "slug", "artifactPath"] as const) {
      if (new Set(ledger.items.map((item) => item[key])).size !== ledger.items.length)
        ctx.addIssue({ code: "custom", message: `Duplicate ${key}` });
    }
    for (const item of ledger.items) {
      const pending = ["draft", "awaiting-review"].includes(item.state);
      if (pending && (item.releasePreparedOn || item.liveVerifiedOn || item.measuredOn))
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: pending revision cannot claim release observations`,
        });
      if (item.reviews.some((review) => item.revisedOn && review.date < item.revisedOn))
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: review predates the current revision`,
        });
      if (
        item.releasePreparedOn &&
        item.reviews.some((review) => review.date > (item.releasePreparedOn ?? ""))
      )
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: release preparation predates review`,
        });
      if (
        item.liveVerifiedOn &&
        (!item.releasePreparedOn || item.liveVerifiedOn < item.releasePreparedOn)
      )
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: live observation precedes release preparation`,
        });
      if (item.measuredOn && (!item.liveVerifiedOn || item.measuredOn < item.liveVerifiedOn))
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: measurement precedes live verification`,
        });
      if (item.state !== "draft" && !item.revisedOn)
        ctx.addIssue({ code: "custom", message: `${item.id}: missing revision observation` });
      if (
        !["draft", "awaiting-review"].includes(item.state) &&
        item.reviewRequirements.some((role) => !item.reviews.some((review) => review.role === role))
      )
        ctx.addIssue({ code: "custom", message: `${item.id}: required review missing` });
      if (
        ["release-prepared", "live-verified", "measured"].includes(item.state) &&
        !item.releasePreparedOn
      )
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: missing release preparation observation`,
        });
      if (["live-verified", "measured"].includes(item.state) && !item.liveVerifiedOn)
        ctx.addIssue({ code: "custom", message: `${item.id}: missing live observation` });
      if (item.state === "measured" && !item.measuredOn)
        ctx.addIssue({ code: "custom", message: `${item.id}: missing measurement observation` });
      if (
        item.liveVerifiedOn &&
        (!item.liveEvidence || item.liveEvidence.url !== `https://prestyj.com/blog/${item.slug}`)
      )
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: missing canonical URL, deployment or live evidence`,
        });
      if (item.measuredOn && !item.measurementEvidence)
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: missing measurement source/window evidence`,
        });
      if (
        item.measurementEvidence &&
        (item.measurementEvidence.reportingEnd < item.measurementEvidence.reportingStart ||
          !item.measuredOn ||
          item.measurementEvidence.reportingEnd > item.measuredOn)
      )
        ctx.addIssue({ code: "custom", message: `${item.id}: invalid measurement window` });
      if (item.liveEvidence && !item.liveVerifiedOn)
        ctx.addIssue({
          code: "custom",
          message: `${item.id}: live evidence requires an observation date`,
        });
    }
  });
export type ContentLedger = z.infer<typeof contentLedgerSchema>;
