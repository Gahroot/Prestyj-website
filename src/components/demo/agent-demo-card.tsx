"use client";

import { useState, useCallback } from "react";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function AgentDemoCard({ agent }: AgentDemoCardProps) {
  const totalSteps = agent.formSteps.length + 1;
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
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <motion.div
          className="h-full rounded-r-full"
          style={{ backgroundColor: agent.color }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{agent.icon}</span>
            <div>
              <h3 className="font-heading font-bold text-foreground">
                {agent.company}
              </h3>
              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground font-medium tabular-nums">
            {step + 1} / {totalSteps}
          </span>
        </div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="py-8 space-y-3 text-center"
          >
            <div
              className="inline-flex items-center justify-center p-3 rounded-full"
              style={{ backgroundColor: `${agent.color}15` }}
            >
              <CheckCircle
                className="size-8"
                style={{ color: agent.color }}
              />
            </div>
            <p className="font-heading font-bold text-lg text-foreground">
              {agent.successMessage}
            </p>
          </motion.div>
        ) : (
          <div className="min-h-[280px] flex flex-col">
            {/* Back button */}
            <div className="h-8 flex items-center mb-2">
              {step > 0 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="size-4" />
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
                    className="space-y-4"
                  >
                    <p className="text-lg font-heading font-semibold text-foreground">
                      {currentFormStep.question}
                    </p>

                    {currentFormStep.type === "select" &&
                      currentFormStep.options && (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="grid grid-cols-2 gap-3"
                        >
                          {currentFormStep.options.map((opt) => {
                            const isSelected =
                              answers[currentFormStep.id] === opt.value;
                            return (
                              <motion.button
                                key={opt.value}
                                variants={itemVariants}
                                type="button"
                                onClick={() =>
                                  handleSelect(currentFormStep, opt.value)
                                }
                                className={cn(
                                  "px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 border-2",
                                  "hover:border-primary hover:bg-primary/5",
                                  isSelected
                                    ? "border-primary bg-primary/10 ring-2 ring-primary/20 text-foreground"
                                    : "border-border bg-card text-foreground",
                                )}
                                style={
                                  isSelected
                                    ? {
                                        borderColor: agent.color,
                                        backgroundColor: `${agent.color}10`,
                                        boxShadow: `0 0 0 2px ${agent.color}25`,
                                      }
                                    : undefined
                                }
                              >
                                {opt.label}
                              </motion.button>
                            );
                          })}
                        </motion.div>
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
                    className="space-y-4"
                  >
                    <p className="text-lg font-heading font-semibold text-foreground">
                      {agent.contactPrompt}
                    </p>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-3"
                    >
                      <motion.div variants={itemVariants}>
                        <Label
                          htmlFor={`name-${agent.publicId}`}
                          className="mb-1.5 block"
                        >
                          Your name
                        </Label>
                        <Input
                          id={`name-${agent.publicId}`}
                          type="text"
                          placeholder="First and last name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={isPending}
                          className="h-12 rounded-xl border-2 border-border focus-visible:border-primary"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Label
                          htmlFor={`agent-phone-${agent.publicId}`}
                          className="mb-1.5 block"
                        >
                          Phone number
                        </Label>
                        <PhoneInput
                          id={`agent-phone-${agent.publicId}`}
                          value={phone}
                          onChange={setPhone}
                          disabled={isPending}
                          aria-invalid={!!error}
                          className="h-12 rounded-xl border-2 border-border text-sm"
                        />
                      </motion.div>

                      {error && (
                        <motion.div variants={itemVariants}>
                          <Alert variant="destructive" role="alert">
                            <AlertCircle className="size-4" />
                            <AlertDescription className="text-xs">
                              {error}
                            </AlertDescription>
                          </Alert>
                        </motion.div>
                      )}

                      <motion.div variants={itemVariants}>
                        <Button
                          type="button"
                          className="w-full h-12 font-semibold text-sm text-white rounded-xl"
                          style={{ backgroundColor: agent.color }}
                          disabled={!isPhoneValid || isPending}
                          onClick={handleSubmit}
                        >
                          {isPending ? (
                            <>
                              <Loader2 className="size-4 animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>{agent.ctaLabel}</span>
                              <ArrowRight className="size-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder={step.placeholder || "Type your answer..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && text.trim()) onNext(text.trim());
          }}
          className="h-12 rounded-xl border-2 border-border focus-visible:border-primary"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button
          type="button"
          className="w-full h-11 font-semibold text-sm text-white rounded-xl"
          style={{ backgroundColor: agentColor }}
          disabled={!text.trim()}
          onClick={() => onNext(text.trim())}
        >
          Next
          <ArrowRight className="size-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
