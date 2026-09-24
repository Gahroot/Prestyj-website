"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  fetchTribunalAgentConfig,
  getTribunalHomepageAgentId,
  isTribunalPhoneDemoEnabled,
  tribunalCallbackSchema,
  requestTribunalPhoneDemo,
} from "@/lib/tribunal-embed";

type Availability = "loading" | "ready" | "unavailable" | "error";
type Submission = "idle" | "submitting" | "accepted" | "error";

export function AgentCallbackForm(): ReactElement {
  const [availability, setAvailability] = useState<Availability>("loading");
  const [attempt, setAttempt] = useState(0);
  const [submission, setSubmission] = useState<Submission>("idle");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [invalidField, setInvalidField] = useState<"phone" | "consent" | null>(null);
  const inFlight = useRef(false);
  const pending = useRef<AbortController | null>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const consentInput = useRef<HTMLInputElement>(null);
  const publicId = getTribunalHomepageAgentId();

  useEffect(() => {
    const controller = new AbortController();
    async function load(): Promise<void> {
      if (!publicId || !isTribunalPhoneDemoEnabled()) {
        setAvailability("unavailable");
        return;
      }
      setAvailability("loading");
      try {
        const config = await fetchTribunalAgentConfig({
          apiBase: "",
          publicId,
          signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10_000)]),
        });
        if (!controller.signal.aborted) {
          setAvailability(
            ["both", "phone"].includes(config.channel_mode) ? "ready" : "unavailable",
          );
        }
      } catch {
        if (!controller.signal.aborted) setAvailability("error");
      }
    }
    void load();
    return () => controller.abort();
  }, [publicId, attempt]);

  useEffect(() => () => pending.current?.abort(), []);

  async function submit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (inFlight.current || availability !== "ready" || !publicId || submission === "accepted")
      return;
    setError("");
    setInvalidField(null);
    const parsed = tribunalCallbackSchema.safeParse({ phone_number: phone, consent });
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      const field = issue?.path[0] === "consent" ? "consent" : "phone";
      setError(issue?.message ?? "Check your phone number and consent.");
      setInvalidField(field);
      (field === "phone" ? phoneInput : consentInput).current?.focus();
      return;
    }
    inFlight.current = true;
    const controller = new AbortController();
    pending.current = controller;
    setSubmission("submitting");
    try {
      const response = await requestTribunalPhoneDemo({
        apiBase: "",
        publicId,
        phoneNumber: parsed.data.phone_number,
        consent: parsed.data.consent,
        signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15_000)]),
      });
      if (controller.signal.aborted) return;
      if (response.ok) {
        setSubmission("accepted");
      } else {
        setSubmission("error");
        const messages = {
          invalid: "Check your phone number and consent, then try again.",
          "rate-limited": "Too many call requests. Please wait before trying again.",
          unavailable:
            "Phone calls are unavailable right now. Book a workflow demo with the team instead.",
          uncertain:
            "We could not confirm your request. It may still result in a call. Wait before trying again, or book a workflow demo.",
        };
        setError(messages[response.reason]);
      }
    } catch {
      if (controller.signal.aborted) return;
      setSubmission("error");
      setError(
        "We could not confirm your request. It may still result in a call. Wait before trying again, or book a workflow demo.",
      );
    } finally {
      inFlight.current = false;
      if (pending.current === controller) pending.current = null;
    }
  }

  const disabled =
    availability !== "ready" || submission === "submitting" || submission === "accepted";
  return (
    <form
      onSubmit={(event) => void submit(event)}
      noValidate
      className="space-y-6 border-t pt-6"
      aria-label="Request an AI demo call"
    >
      <div>
        <label htmlFor="callback-phone" className="mb-2 block text-sm font-medium">
          Phone number
        </label>
        <Input
          id="callback-phone"
          ref={phoneInput}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={40}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="(212) 555-0123"
          disabled={submission === "submitting" || submission === "accepted"}
          aria-invalid={invalidField === "phone"}
          aria-describedby={
            invalidField === "phone" ? "callback-phone-help callback-error" : "callback-phone-help"
          }
        />
        <p id="callback-phone-help" className="text-muted-foreground mt-2 text-sm">
          Use a US phone number you control.
        </p>
      </div>
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-6">
        <input
          ref={consentInput}
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          disabled={submission === "submitting" || submission === "accepted"}
          required
          className="mt-1 size-5 shrink-0 accent-current"
          aria-invalid={invalidField === "consent"}
          aria-describedby={invalidField === "consent" ? "callback-error" : undefined}
        />
        <span>
          I agree to receive one automated AI demo call from Prestyj at this number. Carrier rates
          may apply.
        </span>
      </label>
      <div aria-live="polite" role="status" className="text-muted-foreground text-sm leading-6">
        {availability === "loading" && "Checking call availability…"}
        {availability === "unavailable" &&
          "Phone calls are unavailable right now. You can book a workflow demo with the team."}
        {availability === "error" && "Call availability could not be checked. Please try again."}
        {submission === "submitting" && "Requesting your call…"}
        {submission === "accepted" &&
          "Your call request was accepted. Keep your phone nearby. This does not confirm that a call has connected."}
      </div>
      {error && (
        <p id="callback-error" role="alert" className="text-destructive text-sm leading-6">
          {error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={disabled}>
          {submission === "submitting"
            ? "Requesting…"
            : submission === "accepted"
              ? "Request accepted"
              : "Call me"}
        </Button>
        {availability === "error" && (
          <Button type="button" variant="outline" onClick={() => setAttempt((value) => value + 1)}>
            Check again
          </Button>
        )}
        <Link href="/privacy" className="editorial-text-link underline">
          Privacy
        </Link>
      </div>
    </form>
  );
}
