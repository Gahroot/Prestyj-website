"use client";

import { useState } from "react";
import { Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { triggerEmbedCall } from "@/lib/demo-api";
import type { DemoAgent } from "@/lib/demo-agents";

interface AgentDemoCardProps {
  agent: DemoAgent;
}

export function AgentDemoCard({ agent }: AgentDemoCardProps) {
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    const normalized = normalizeToE164(phone);
    if (normalized.length < 12) return;

    setIsPending(true);
    setError(null);

    try {
      await triggerEmbedCall(agent.publicId, normalized);
      setIsSuccess(true);
    } catch (err) {
      setError(
        (err as Error)?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsPending(false);
    }
  };

  const isPhoneValid = normalizeToE164(phone).length >= 12;

  return (
    <div
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl flex flex-col"
      style={{ borderTopColor: agent.color, borderTopWidth: "3px" }}
    >
      {/* Header */}
      <div className="mb-4">
        <span className="text-2xl">{agent.icon}</span>
        <h3 className="text-lg font-heading font-bold text-white mt-2">
          {agent.company}
        </h3>
        <p className="text-sm text-zinc-400 mt-0.5">
          AI Agent: <span className="text-zinc-300">{agent.name}</span>
        </p>
      </div>

      <p className="text-sm text-zinc-500 mb-5 leading-relaxed">
        {agent.description}
      </p>

      {isSuccess ? (
        <div className="py-4 space-y-2 text-center flex-1 flex flex-col items-center justify-center">
          <CheckCircle2 className="size-10 text-emerald-400" />
          <p className="text-emerald-400 font-medium text-sm">
            Phone ringing in ~10 seconds
          </p>
        </div>
      ) : (
        <div className="space-y-3 mt-auto">
          <PhoneInput
            id={`agent-phone-${agent.publicId}`}
            value={phone}
            onChange={setPhone}
            disabled={isPending}
            aria-invalid={!!error}
            className="h-12 text-sm bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
          />

          {error && (
            <Alert variant="destructive" role="alert">
              <AlertCircle className="size-4" />
              <AlertDescription className="text-xs">{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="button"
            className="w-full h-11 font-semibold text-sm text-white"
            style={{ backgroundColor: agent.color }}
            disabled={!isPhoneValid || isPending}
            onClick={handleSubmit}
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Calling...</span>
              </>
            ) : (
              <>
                <Phone className="size-4" />
                Call Me as {agent.name}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
