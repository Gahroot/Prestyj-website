"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { Spotlight } from "@/components/effects/spotlight";

const DEMO_API_BASE = "https://backend-api-production-b536.up.railway.app/api/v1/p/demo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
} as const;

interface DemoResponse {
  success: boolean;
  message: string;
}

async function triggerDemo(type: "call" | "text", phoneNumber: string): Promise<DemoResponse> {
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

export function HeroDemoSection() {
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <Spotlight />

      <motion.div
        className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Headline */}
        <motion.div className="space-y-6 text-center lg:text-left" variants={itemVariants}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            AI Voice Agent
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
            Voice AI built for every customer conversation
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
            Let our AI handle calls and texts so you can focus on closing deals.
          </p>
        </motion.div>

        {/* Right side - Form */}
        <motion.div variants={itemVariants} className="relative">
          <div className="bg-card p-8 rounded-2xl relative border border-border shadow-lg">
            <div className="space-y-3 mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Don&apos;t believe us?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Have our AI give you a call.
              </p>
            </div>

            <div aria-live="polite" role="status">
              {isSuccess && (
                <div className="py-6 space-y-3">
                  <CheckCircle2 className="size-12 text-success" aria-hidden="true" />
                  <p className="text-success font-medium text-lg">
                    {successMessage}
                  </p>
                </div>
              )}
            </div>

            {!isSuccess && (
              <div className="space-y-4">
                <div>
                  <PhoneInput
                    id="phone-input"
                    value={phone}
                    onChange={setPhone}
                    disabled={isPending}
                    aria-describedby={error ? "phone-error" : undefined}
                    aria-invalid={!!error}
                    className="h-14 text-lg"
                  />
                </div>

                {error && (
                  <Alert id="phone-error" variant="destructive" role="alert">
                    <AlertCircle className="size-4" aria-hidden="true" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="button"
                  size="lg"
                  className="w-full h-12 font-semibold"
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
                      Let&apos;s Talk
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="w-full h-12 font-semibold"
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
                      I&apos;d rather text
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
