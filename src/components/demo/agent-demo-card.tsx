"use client";

import { useState, useCallback } from "react";
import {
  Phone,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";
import { triggerEmbedCall } from "@/lib/demo-api";
import type { DemoAgent, FormStep } from "@/lib/demo-agents";

interface AgentDemoCardProps {
  agent: DemoAgent;
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 200 : -200, opacity: 0 }),
};

export function AgentDemoCard({ agent }: AgentDemoCardProps) {
  const totalSteps = agent.formSteps.length + 1; // form steps + contact step
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goForward = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }, [totalSteps]);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
    setError(null);
  }, []);

  const handleSelect = useCallback(
    (stepDef: FormStep, value: string) => {
      setAnswers((prev) => ({ ...prev, [stepDef.id]: value }));
      setTimeout(() => goForward(), 300);
    },
    [goForward],
  );

  const handleTextNext = useCallback(
    (stepDef: FormStep, value: string) => {
      setAnswers((prev) => ({ ...prev, [stepDef.id]: value }));
      goForward();
    },
    [goForward],
  );

  const buildNotes = useCallback(() => {
    return agent.formSteps
      .map((s) => {
        const answer = answers[s.id];
        if (!answer) return null;
        if (s.type === "select" && s.options) {
          const opt = s.options.find((o) => o.value === answer);
          return `${s.question}: ${opt?.label || answer}`;
        }
        return `${s.question}: ${answer}`;
      })
      .filter(Boolean)
      .join("\n");
  }, [agent.formSteps, answers]);

  const handleSubmit = async () => {
    const normalized = normalizeToE164(phone);
    if (normalized.length < 12) return;

    setIsPending(true);
    setError(null);

    try {
      const notes = buildNotes();
      await triggerEmbedCall(
        agent.publicId,
        normalized,
        name.trim() || undefined,
        notes || undefined,
      );
      setIsSuccess(true);
    } catch (err) {
      setError(
        (err as Error)?.message || "Something went wrong. Please try again.",
      );
    } finally {
      setIsPending(false);
    }
  };

  const isPhoneValid = normalizeToE164(phone).length >= 12;
  const isContactStep = step === agent.formSteps.length;
  const currentFormStep = !isContactStep ? agent.formSteps[step] : null;

  return (
    <div
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl flex flex-col min-h-[420px]"
      style={{ borderTopColor: agent.color, borderTopWidth: "3px" }}
    >
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{agent.icon}</span>
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className="size-2 rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: i <= step ? agent.color : "rgb(63 63 70)",
                }}
              />
            ))}
          </div>
        </div>
        <h3 className="text-lg font-heading font-bold text-white mt-2">
          {agent.company}
        </h3>
        <p className="text-sm text-zinc-400 mt-0.5">{agent.description}</p>
      </div>

      {isSuccess ? (
        <div className="py-4 space-y-2 text-center flex-1 flex flex-col items-center justify-center">
          <CheckCircle2 className="size-10 text-emerald-400" />
          <p className="text-emerald-400 font-medium text-sm">
            Phone ringing in ~10 seconds
          </p>
          <p className="text-zinc-500 text-xs mt-1">
            Your answers have been shared so the call is personalized
          </p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          {/* Back button */}
          <div className="h-8 flex items-center">
            {step > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <ArrowLeft className="size-3" />
                Back
              </button>
            )}
          </div>

          {/* Step content */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {currentFormStep ? (
                <motion.div
                  key={`step-${step}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  <p className="text-sm font-medium text-white">
                    {currentFormStep.question}
                  </p>

                  {currentFormStep.type === "select" &&
                    currentFormStep.options && (
                      <div className="grid grid-cols-2 gap-2">
                        {currentFormStep.options.map((opt) => {
                          const isSelected =
                            answers[currentFormStep.id] === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() =>
                                handleSelect(currentFormStep, opt.value)
                              }
                              className={cn(
                                "px-3 py-2.5 rounded-xl text-sm text-left transition-all duration-200 border-2",
                                "hover:bg-zinc-700/50",
                                isSelected
                                  ? "border-primary bg-primary/10 ring-2 ring-primary/20 text-white"
                                  : "border-zinc-700 bg-zinc-800 text-zinc-300",
                              )}
                              style={
                                isSelected
                                  ? {
                                      borderColor: agent.color,
                                      backgroundColor: `${agent.color}15`,
                                      boxShadow: `0 0 0 2px ${agent.color}30`,
                                    }
                                  : undefined
                              }
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    )}

                  {currentFormStep.type === "text" && (
                    <TextStepInput
                      step={currentFormStep}
                      value={answers[currentFormStep.id] || ""}
                      onNext={(val) => handleTextNext(currentFormStep, val)}
                      agentColor={agent.color}
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  <p className="text-sm font-medium text-white">
                    Enter your info and we&apos;ll call you right back
                  </p>

                  <div className="space-y-1.5">
                    <Label htmlFor={`name-${agent.publicId}`} className="text-zinc-400">
                      Your name
                    </Label>
                    <Input
                      id={`name-${agent.publicId}`}
                      type="text"
                      placeholder="First and last name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isPending}
                      className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor={`agent-phone-${agent.publicId}`} className="text-zinc-400">
                      Phone number
                    </Label>
                    <PhoneInput
                      id={`agent-phone-${agent.publicId}`}
                      value={phone}
                      onChange={setPhone}
                      disabled={isPending}
                      aria-invalid={!!error}
                      className="h-12 text-sm bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive" role="alert">
                      <AlertCircle className="size-4" />
                      <AlertDescription className="text-xs">
                        {error}
                      </AlertDescription>
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
                        <span>Requesting...</span>
                      </>
                    ) : (
                      <>
                        <Phone className="size-4" />
                        Request a Call
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

function TextStepInput({
  step,
  value,
  onNext,
  agentColor,
}: {
  step: FormStep;
  value: string;
  onNext: (value: string) => void;
  agentColor: string;
}) {
  const [text, setText] = useState(value);

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder={step.placeholder || "Type your answer..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text.trim()) onNext(text.trim());
        }}
        className="h-12 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
      />
      <Button
        type="button"
        className="w-full h-10 font-semibold text-sm text-white"
        style={{ backgroundColor: agentColor }}
        disabled={!text.trim()}
        onClick={() => onNext(text.trim())}
      >
        Next
      </Button>
    </div>
  );
}
