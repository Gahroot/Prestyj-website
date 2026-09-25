import { z } from "zod";

export const articleDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const time = Date.parse(`${value}T00:00:00Z`);
    return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value;
  }, "Expected a real calendar date");

export const articleDatesSchema = z
  .object({
    date: articleDateSchema,
    updated: articleDateSchema.optional(),
  })
  .refine(({ date, updated }) => !updated || updated >= date, {
    message: "Updated date cannot precede publication",
    path: ["updated"],
  });

export type ArticleDates = { published: string; modified: string };

/** Invalid public source metadata is a build error, never replaced with today's date. */
export function getArticleDates(data: unknown): ArticleDates {
  const { date, updated } = articleDatesSchema.parse(data);
  return { published: date, modified: updated ?? date };
}

export function formatArticleDate(value: string): string {
  return new Date(`${articleDateSchema.parse(value)}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function rssArticleDate(value: string): string {
  return new Date(`${articleDateSchema.parse(value)}T00:00:00Z`).toUTCString();
}
