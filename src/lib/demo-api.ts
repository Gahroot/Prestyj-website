export const DEMO_API_BASE =
  "https://backend-api-production-b536.up.railway.app/api/v1/p/demo";

export const EMBED_API_BASE =
  "https://backend-api-production-b536.up.railway.app/api/v1/p/embed";

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

export async function triggerEmbedCall(
  publicId: string,
  phoneNumber: string,
): Promise<DemoResponse> {
  const response = await fetch(`${EMBED_API_BASE}/${publicId}/call`, {
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
