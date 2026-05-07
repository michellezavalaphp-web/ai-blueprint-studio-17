// Fire-and-forget webhook integration with GoHighLevel CRM.
// Never throws — always silently catches errors so the UI is never blocked.

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/uxDs3xSPWmglBhUEXmm6/webhook-trigger/abfa0607-f2b4-474b-b4a8-77112987684a";

export type GrowthHubSource =
  | "contact-form"
  | "ai-readiness-assessment"
  | "ai-tools-access"
  | "speaking-inquiry"
  | "strategy-call-booking"
  | "book-purchase"
  | "merch-purchase"
  | "newsletter-signup"
  | "exit-popup"
  | (string & {});

export interface GrowthHubPayload {
  email: string;
  source: GrowthHubSource;
  firstName?: string;
  lastName?: string;
  phone?: string;
  message?: string;
}

/**
 * Send a lead to the GoHighLevel inbound webhook.
 * Fire-and-forget: returns immediately, swallows all errors.
 * Also sets `email_captured` in localStorage so exit-intent popups can suppress.
 */
export function sendToGrowthHub(payload: GrowthHubPayload): void {
  if (!payload?.email || !payload?.source) return;

  try {
    localStorage.setItem("email_captured", "true");
  } catch {
    // ignore storage errors (private mode, etc.)
  }

  // Fire and forget — don't await, don't block the UI.
  void fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
    mode: "no-cors",
  }).catch(() => {
    // Silently ignore — users should never see a CRM failure.
  });
}
