import { NextRequest, NextResponse } from "next/server";
import {
  foundingCohortSchema,
  isQualified,
} from "@/lib/validations/founding-cohort-schemas";
import { FOUNDING_COHORT, isCohortOpen } from "@/lib/founding-cohort";

const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const validation = foundingCohortSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid input", details: validation.error.issues },
      { status: 400 },
    );
  }

  const data = validation.data;

  // Hard gate 1 — cohort full
  if (!isCohortOpen()) {
    return NextResponse.json(
      {
        approved: false,
        reason: "cohort_full",
        message:
          "All founding cohort spots are filled. You can join the regular pricing below.",
      },
      { status: 200 },
    );
  }

  // Hard gate 2 — not qualified (ad spend / not running ads)
  if (!isQualified(data)) {
    return NextResponse.json(
      {
        approved: false,
        reason: "not_qualified",
        message:
          "Founding cohort spots are reserved for businesses already running paid ads — that's how we get real performance signal for the case study. The standard $1,497 batch is still available below.",
      },
      { status: 200 },
    );
  }

  // Push the lead into the CRM regardless of approval path — record of intent.
  const notes = [
    "Founding Cohort Application",
    `Business: ${data.businessName}`,
    data.website ? `Website: ${data.website}` : null,
    `Monthly ad spend: ${data.monthlyAdSpend}`,
    `Platforms: ${data.platforms.join(", ")}`,
    `Creative situation: ${data.creativeSituation}`,
    `Offer: ${data.offer}`,
    `Why them: ${data.whyYou}`,
    `Committed to: testimonial=${data.agreeTestimonial}, review=${data.agreeReview}, 14-day run=${data.agreeRun14Days}, results rights=${data.agreeResultsRights}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const crmResponse = await fetch(`${API_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: data.contactName.split(" ")[0],
        email: data.contactEmail,
        notes,
        source: "founding-cohort-application",
        trigger_call: false,
        trigger_text: false,
      }),
    });

    if (!crmResponse.ok) {
      const errorText = await crmResponse.text();
      console.error("[founding-cohort] CRM error:", errorText);
      // Don't fail the user — log and continue. They still get the code.
    }
  } catch (err) {
    console.error("[founding-cohort] CRM submission failed:", err);
  }

  return NextResponse.json({
    approved: true,
    promoCode: FOUNDING_COHORT.promoCode,
    checkoutHref: FOUNDING_COHORT.checkoutHref,
    approvedHref: FOUNDING_COHORT.approvedHref,
  });
}
