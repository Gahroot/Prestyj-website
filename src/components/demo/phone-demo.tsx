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
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl max-w-md">
      {isSuccess ? (
        <div className="py-6 space-y-3 text-center" aria-live="polite">
          <CheckCircle2 className="size-14 text-emerald-400 mx-auto" />
          <p className="text-emerald-400 font-medium text-lg">{successMessage}</p>
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
            className="h-14 text-lg bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
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
            className="w-full h-14 font-semibold text-lg bg-[#7058e3] hover:bg-[#5d48c7] text-white"
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
