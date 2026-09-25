import { readFileSync } from "node:fs";
import { z } from "zod";
import { describe, expect, it } from "vitest";
import { calendarDateSchema, contentLedgerSchema } from "./institutional-ledger";

const outreachSchema = z.object({
  weeklyRelevantPitchTarget: z.literal(3),
  targets: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      relevanceCheckedOn: calendarDateSchema,
      evidenceUrl: z.string().url(),
      submissionRulesVerifiedOn: calendarDateSchema.nullable(),
      contact: z.string().nullable(),
      acceptance: z.string().nullable(),
    }),
  ),
  items: z
    .array(
      z.object({
        id: z.string(),
        contentId: z.string(),
        targetId: z.string(),
        pitchAnchor: z.string(),
        status: z.literal("prepared-not-sent"),
        sentOn: z.null(),
        followedUpOn: z.null(),
        repliedOn: z.null(),
        earnedLinkUrl: z.null(),
        linkVerifiedOn: z.null(),
      }),
    )
    .length(18),
});
describe("prepared distribution, not observed outreach", () => {
  it("covers every deliverable with complete social and pitch copy", () => {
    const ledger = contentLedgerSchema.parse(
      JSON.parse(readFileSync("data/seo/institutional-content-backlog.json", "utf8")),
    );
    const outreach = outreachSchema.parse(
      JSON.parse(readFileSync("data/seo/institutional-outreach.json", "utf8")),
    );
    const kit = readFileSync("docs/seo/institutional-distribution-kit.md", "utf8");
    expect(new Set(outreach.items.map((item) => item.contentId)).size).toBe(18);
    for (const item of ledger.items) {
      expect(outreach.items.some((pitch) => pitch.contentId === item.id)).toBe(true);
      expect(kit).toContain(`## ${item.id}:`);
      expect(kit).toContain(`https://prestyj.com/blog/${item.slug}`);
    }
    for (const pitch of outreach.items)
      expect(outreach.targets.some((target) => target.id === pitch.targetId)).toBe(true);
    expect(kit.match(/\*\*LinkedIn:\*\*/g)).toHaveLength(18);
    const shortPosts = Array.from(
      kit.matchAll(/\*\*Short post:\*\* (.+)/g),
      (match) => match[1] ?? "",
    );
    expect(shortPosts).toHaveLength(18);
    for (const post of shortPosts) expect(post.length + 24).toBeLessThanOrEqual(280);
    expect(kit.match(/\*\*Pitch to /g)).toHaveLength(18);
  });
});
