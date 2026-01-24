export const DEMO_API_BASE =
  "https://backend-api-production-b536.up.railway.app/api/v1/p/demo";

export interface DemoResponse {
  success: boolean;
  message: string;
}

export async function triggerDemo(
  type: "call" | "text",
  phoneNumber: string
): Promise<DemoResponse> {
  const response = await fetch(`${DEMO_API_BASE}/${type}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone_number: phoneNumber }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || "Something went wrong. Please try again.");
  }

  return response.json();
}
