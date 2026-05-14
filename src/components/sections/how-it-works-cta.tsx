"use client";

import { useState } from "react";
import { Phone, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { triggerDemo } from "@/lib/demo-api";

export function HowItWorksCTA() {
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [pendingType, setPendingType] = useState<"call" | "text" | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleDemo = async (type: "call" | "text") => {
    const normalized = normalizeToE164(phone);
    if (normalized.length < 12) return;

    setIsPending(true);
    setPendingType(type);
    setError(null);

    try {
      const result = await triggerDemo(type, normalized);
      setIsSuccess(true);
      setSuccessMessage(result.message);
    } catch (err) {
      setError((err as Error)?.message || "Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
      setPendingType(null);
    }
  };

  const isPhoneValid = normalizeToE164(phone).length >= 12;

  return (
    <AnimateOnScroll
      delay={0.2}
      className="bg-background border-border mt-16 rounded-xl border p-6 lg:p-8"
    >
      {isSuccess ? (
        <div className="flex items-center justify-center gap-3 py-2">
          <CheckCircle2 className="text-success size-6 shrink-0" aria-hidden="true" />
          <p className="text-success font-medium">{successMessage}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">
          {/* Headline */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-foreground text-xl font-semibold">See it in action</h3>
            <p className="text-muted-foreground text-sm">
              Our AI will call or text your phone in 10 seconds. Try it.
            </p>
          </div>

          {/* Phone Input */}
          <div className="w-full lg:w-56">
            <PhoneInput
              id="how-it-works-phone"
              value={phone}
              onChange={setPhone}
              disabled={isPending}
              aria-describedby={error ? "hiw-phone-error" : undefined}
              aria-invalid={!!error}
              className="h-11"
            />
            {error && (
              <div
                id="hiw-phone-error"
                className="text-destructive mt-2 flex items-center gap-1.5 text-sm"
                role="alert"
              >
                <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                <span>{error}</span>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto lg:flex-col">
            <Button
              type="button"
              className="h-11 flex-1 font-semibold lg:flex-none"
              disabled={!isPhoneValid || isPending}
              onClick={() => handleDemo("call")}
            >
              {pendingType === "call" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  <span>Calling...</span>
                </>
              ) : (
                <>
                  <Phone className="size-4" aria-hidden="true" />
                  Get a live AI demo call now
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="h-11 flex-1 font-semibold lg:flex-none"
              disabled={!isPhoneValid || isPending}
              onClick={() => handleDemo("text")}
            >
              {pendingType === "text" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="size-4" aria-hidden="true" />
                  Get a live AI demo text now
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </AnimateOnScroll>
  );
}
