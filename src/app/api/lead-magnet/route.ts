import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

// Simple validation schema for ROI calculator
const roiCalculatorSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Valid email is required"),
  resourceId: z.string(),
  businessType: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

// Lead magnet form schema
const leadMagnetSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Valid email is required"),
  company: z.string().optional(),
  magnetType: z.literal("roofing-playbook"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if this is a lead magnet form (has magnetType field)
    const isLeadMagnet = "magnetType" in body;

    // Validate input based on type
    const validation = isLeadMagnet
      ? leadMagnetSchema.safeParse(body)
      : roiCalculatorSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validation.error.issues },
        { status: 400 }
      );
    }

    // Prepare lead payload
    let leadPayload: {
      first_name: string;
      email: string;
      notes: string;
      source: string;
      trigger_call: boolean;
      trigger_text: boolean;
    };

    if (isLeadMagnet) {
      // Lead magnet form submission
      const data = validation.data as { name: string; email: string; company?: string };
      leadPayload = {
        first_name: data.name.split(" ")[0], // Use first name only
        email: data.email,
        notes: `Lead Magnet: roofing-playbook${data.company ? `\nCompany: ${data.company}` : ""}`,
        source: "lead-magnet-roofing-playbook",
        trigger_call: false,
        trigger_text: false,
      };
    } else {
      // ROI calculator submission
      const data = validation.data as { firstName: string; email: string; resourceId: string; businessType?: string; metadata?: Record<string, unknown> };

      // Prepare notes with calculator data
      let notes = `Lead Magnet: ${data.resourceId}`;
      if (data.businessType) {
        notes += `\nBusiness Type: ${data.businessType}`;
      }
      if (data.metadata) {
        notes += `\nCalculator Data: ${JSON.stringify(data.metadata, null, 2)}`;
      }

      leadPayload = {
        first_name: data.firstName,
        email: data.email,
        notes,
        source: `lead-magnet-${data.resourceId}`,
        trigger_call: false,
        trigger_text: false,
      };
    }

    // Submit to existing CRM backend (demo/leads endpoint)
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

    const responseData = await response.json();

    // Return success with download URL for lead magnets
    return NextResponse.json({
      success: true,
      message: isLeadMagnet
        ? "Playbook sent to your email! Check your inbox."
        : "Lead captured successfully",
      contactId: responseData.contact_id,
      downloadUrl: isLeadMagnet
        ? "/content/lead-magnet/roofers-24-7-lead-response-playbook.md"
        : `/ai-calculator-results`,
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
