-- Preserve legacy records while allowing version 2 leads to omit unused fields.
ALTER TABLE "lead_magnet_leads"
  ALTER COLUMN "revenue_band" DROP NOT NULL,
  ALTER COLUMN "role" DROP NOT NULL;

-- Add consent, unsubscribe, scheduled delivery, and retry-safety fields.
ALTER TABLE "ai_first_audits"
  ADD COLUMN "followup_opt_in_at" TIMESTAMP(3),
  ADD COLUMN "unsubscribed_at" TIMESTAMP(3),
  ADD COLUMN "unsubscribe_token" TEXT,
  ADD COLUMN "scheduled_email_ids" JSONB,
  ADD COLUMN "submission_key" TEXT;

CREATE UNIQUE INDEX "ai_first_audits_unsubscribe_token_key"
  ON "ai_first_audits"("unsubscribe_token");

CREATE UNIQUE INDEX "ai_first_audits_submission_key_key"
  ON "ai_first_audits"("submission_key");
