const API_BASE_URL = "https://backend-api-production-b536.up.railway.app";

export interface LeadPayload {
  first_name: string;
  last_name?: string;
  phone_number: string;
  email?: string;
  company_name?: string;
  notes?: string;
  source?: string;
  trigger_call?: boolean;
  trigger_text?: boolean;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  contact_id: number;
  demo_initiated: boolean;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
}

/**
 * Format phone number to 10-digit US format
 * Strips all non-numeric characters and removes leading 1 if present
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // Remove leading 1 if it's an 11-digit number
  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }
  return digits;
}

/**
 * Submit a lead to the CRM backend
 */
export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/p/demo/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit lead");
  }

  return data as LeadResponse;
}
