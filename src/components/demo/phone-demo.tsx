"use client";

import { useState } from "react";
import { Phone, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { triggerDemo } from "@/lib/demo-api";

interface PhoneDemoProps {
  mode: "call" | "text";
}

export function PhoneDemo({ mode }: PhoneDemoProps) {
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    const normalized = normalizeToE164(phone);
    if (normalized.length < 12) return;

    setIsPending(true);
    setError(null);

    try {
      const result = await triggerDemo(mode, normalized);
      setIsSuccess(true);
      setSuccessMessage(result.message);
    } catch (err) {
      setError((err as Error)?.message || "Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const isPhoneValid = normalizeToE164(phone).length >= 12;

  const isCall = mode === "call";
  const Icon = isCall ? Phone : MessageSquare;
  const label = isCall ? "Call Me Now" : "Text Me Now";
  const pendingLabel = isCall ? "Calling..." : "Sending...";

  return (
    <div className="max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
      {isSuccess ? (
        <div className="space-y-3 py-6 text-center" aria-live="polite">
          <CheckCircle2 className="mx-auto size-14 text-emerald-400" />
          <p className="text-lg font-medium text-emerald-400">{successMessage}</p>
        </div>
      ) : (
        <div className="space-y-5">
          <PhoneInput
            id={`demo-phone-${mode}`}
            value={phone}
            onChange={setPhone}
            disabled={isPending}
            aria-describedby={error ? `phone-error-${mode}` : undefined}
            aria-invalid={!!error}
            className="h-14 border-zinc-700 bg-zinc-800 text-lg text-white placeholder:text-zinc-500"
          />

          {error && (
            <Alert id={`phone-error-${mode}`} variant="destructive" role="alert">
              <AlertCircle className="size-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="button"
            size="lg"
            className="h-14 w-full bg-[#7058e3] text-lg font-semibold text-white hover:bg-[#5d48c7]"
            disabled={!isPhoneValid || isPending}
            onClick={handleSubmit}
          >
            {isPending ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span>{pendingLabel}</span>
              </>
            ) : (
              <>
                <Icon className="size-5" />
                {label}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
