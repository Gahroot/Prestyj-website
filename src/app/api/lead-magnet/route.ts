import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Simple validation schema for ROI calculator
const roiCalculatorSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Valid email is required"),
  resourceId: z.string(),
  businessType: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = roiCalculatorSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validation.error.issues },
        { status: 400 }
      );
    }

    const { firstName, email, resourceId, businessType, metadata } = validation.data;

    // Prepare notes with calculator data
    let notes = `Lead Magnet: ${resourceId}`;
    if (businessType) {
      notes += `\nBusiness Type: ${businessType}`;
    }
    if (metadata) {
      notes += `\nCalculator Data: ${JSON.stringify(metadata, null, 2)}`;
    }

    // Submit to existing CRM backend (demo/leads endpoint)
    const leadPayload = {
      first_name: firstName,
      email: email,
      notes: notes,
      source: `lead-magnet-${resourceId}`,
      trigger_call: false,
      trigger_text: false,
    };

    const response = await fetch(`${API_BASE_URL}/api/v1/p/demo/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend API error:", errorText);
      throw new Error("Failed to submit lead to CRM");
    }

    const data = await response.json();

    // Return success with redirect URL
    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      contactId: data.contact_id,
      downloadUrl: `/ai-calculator-results`,
    });
  } catch (error) {
    console.error("Lead magnet submission error:", error);
    return NextResponse.json(
      {
        error: "Failed to process request",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
