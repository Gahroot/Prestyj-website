"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { DEMO_API_BASE } from "@/lib/demo-api";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPhoneValid = normalizeToE164(phone).length >= 12;
  const isFormValid = name.trim().length > 0 && isPhoneValid;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsPending(true);
    setError(null);

    try {
      const response = await fetch(`${DEMO_API_BASE}/call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: normalizeToE164(phone),
          metadata: { name: name.trim(), email: email.trim() || undefined },
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.detail || "Something went wrong. Please try again.");
      }

      setIsSuccess(true);
    } catch (err) {
      setError((err as Error)?.message || "Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl max-w-md">
      {isSuccess ? (
        <div className="py-6 space-y-3 text-center" aria-live="polite">
          <CheckCircle2 className="size-14 text-emerald-400 mx-auto" />
          <p className="text-emerald-400 font-medium text-lg">
            Lead captured! Phone should ring in ~10 seconds.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="space-y-1">
            <label htmlFor="lead-name" className="text-sm font-medium text-zinc-400">
              Name
            </label>
            <Input
              id="lead-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              disabled={isPending}
              className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="lead-phone" className="text-sm font-medium text-zinc-400">
              Phone
            </label>
            <PhoneInput
              id="lead-phone"
              value={phone}
              onChange={setPhone}
              disabled={isPending}
              className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="lead-email" className="text-sm font-medium text-zinc-400">
              Email <span className="text-zinc-600">(optional)</span>
            </label>
            <Input
              id="lead-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              disabled={isPending}
              className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
            />
          </div>

          {error && (
            <Alert variant="destructive" role="alert">
              <AlertCircle className="size-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="button"
            size="lg"
            className="w-full h-14 font-semibold text-lg bg-[#7058e3] hover:bg-[#5d48c7] text-white"
            disabled={!isFormValid || isPending}
            onClick={handleSubmit}
          >
            {isPending ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="size-5" />
                Submit Lead
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
