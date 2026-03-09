declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & { queue?: unknown[] };
  }
}

const PIXEL_ID = "892763637077397";

type UserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

export function trackEvent(eventName: string, userData?: UserData) {
  const eventId = crypto.randomUUID();

  // Client-side pixel fire
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, {}, { eventID: eventId });
  }

  // Server-side CAPI fire (fire-and-forget, keepalive survives page navigation)
  fetch("/api/meta-capi", {
    method: "POST",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
      email: userData?.email,
      phone: userData?.phone,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
    }),
  }).catch(() => {
    // Never break UX for tracking
  });
}

export { PIXEL_ID };
