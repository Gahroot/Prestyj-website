-- CreateTable
CREATE TABLE "lead_magnet_leads" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "phone" TEXT,
    "business_type" TEXT NOT NULL,
    "revenue_band" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'ai-first-audit',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lead_magnet_leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_first_audits" (
    "id" TEXT NOT NULL,
    "share_slug" TEXT NOT NULL,
    "edit_token" TEXT NOT NULL,
    "lead_id" TEXT NOT NULL,
    "hourly_cost" DOUBLE PRECISION NOT NULL,
    "tasks_json" JSONB NOT NULL,
    "result_json" JSONB,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "finalized_at" TIMESTAMP(3),
    "emails_scheduled" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_first_audits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "lead_magnet_leads_email_idx" ON "lead_magnet_leads"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ai_first_audits_share_slug_key" ON "ai_first_audits"("share_slug");

-- CreateIndex
CREATE UNIQUE INDEX "ai_first_audits_edit_token_key" ON "ai_first_audits"("edit_token");

-- CreateIndex
CREATE INDEX "ai_first_audits_lead_id_idx" ON "ai_first_audits"("lead_id");

-- AddForeignKey
ALTER TABLE "ai_first_audits" ADD CONSTRAINT "ai_first_audits_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "lead_magnet_leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
