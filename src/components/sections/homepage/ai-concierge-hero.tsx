"use client";

import Link from "next/link";
import type { FormEvent, ReactElement } from "react";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Calendar,
  Loader2,
  Mic,
  PhoneCall,
  Radio,
  Square,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getTribunalHomepageAgentId,
  isTribunalPhoneDemoEnabled,
  normalizeUsPhoneNumber,
  requestTribunalPhoneDemo,
  resolveTribunalApiBase,
} from "@/lib/tribunal-embed";
import { cn } from "@/lib/utils";
import {
  useTribunalAgentConfig,
  useTribunalVoiceSession,
} from "@/lib/use-tribunal-voice-session";

function formatAgentState(state: string): string {
  if (state === "listening") return "Listening for your business bottleneck";
  if (state === "thinking") return "Thinking through the right system";
  if (state === "speaking") return "Speaking live through the AI stack";
  return "Ready when you are";
}

function formatStatus(status: string, isConfigured: boolean): string {
  if (!isConfigured) return "Live demo fallback active";
  if (status === "connecting") return "Connecting securely to the voice agent";
  if (status === "connected") return "Live session running in your browser";
  if (status === "error") return "Voice demo needs a reset";
  return "Mic starts only when you press the button";
}

function WaveBars({ frequencies }: { frequencies: number[] }): ReactElement {
  return (
    <div className="flex h-24 items-center justify-center gap-1.5" aria-hidden="true">
      {frequencies.slice(0, 28).map((value, index) => (
        <span
          key={`bar-${index}`}
          className="from-primary via-primary/70 to-cyan-300/70 w-1.5 rounded-full bg-linear-to-t shadow-[0_0_18px_rgba(112,88,227,0.45)] transition-[height,opacity] duration-150"
          style={{
            height: `${Math.max(14, value * 92)}px`,
            opacity: Math.max(0.28, value),
          }}
        />
      ))}
    </div>
  );
}

function ConciergeOrb({
  status,
  agentState,
  smoothedLevel,
}: {
  status: string;
  agentState: string;
  smoothedLevel: number;
}): ReactElement {
  const isActive = status === "connecting" || status === "connected";
  const isSpeaking = agentState === "speaking";
  const scale = 1 + Math.min(0.18, smoothedLevel * 0.16);

  return (
    <div className="relative mx-auto flex size-64 items-center justify-center sm:size-80">
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-3xl transition-opacity duration-500",
          isActive ? "bg-primary/35 opacity-100" : "bg-primary/20 opacity-60",
        )}
      />
      <div
        className={cn(
          "absolute inset-6 rounded-full border transition-all duration-500",
          isActive
            ? "border-primary/40 animate-spin shadow-[0_0_60px_rgba(112,88,227,0.35)]"
            : "border-primary/20",
        )}
        style={{ animationDuration: "9s" }}
      />
      <div
        className={cn(
          "absolute inset-12 rounded-full border border-dashed transition-all duration-500",
          agentState === "thinking" || status === "connecting"
            ? "border-cyan-300/50 animate-spin"
            : "border-white/10",
        )}
        style={{ animationDuration: "13s", animationDirection: "reverse" }}
      />
      <div
        className={cn(
          "relative grid size-36 place-items-center rounded-full border bg-slate-950/90 shadow-2xl transition-transform duration-150 sm:size-44",
          isSpeaking
            ? "border-cyan-300/60 shadow-cyan-500/30"
            : "border-primary/45 shadow-primary/25",
        )}
        style={{ transform: `scale(${scale})` }}
      >
        <div className="from-primary/50 absolute inset-4 rounded-full bg-radial to-transparent blur-xl" />
        <Bot className="text-primary relative h-14 w-14 drop-shadow-[0_0_18px_rgba(112,88,227,0.75)]" />
      </div>
    </div>
  );
}

export function AiConciergeHero(): ReactElement {
  const apiBase = resolveTribunalApiBase();
  const publicId = getTribunalHomepageAgentId();
  const phoneDemoEnabled = isTribunalPhoneDemoEnabled();
  const isConfigured = Boolean(apiBase && publicId);

  const {
    config,
    error: configError,
    isLoading,
  } = useTribunalAgentConfig({ apiBase, publicId, enabled: isConfigured });

  const {
    status,
    agentState,
    isMuted,
    frequencies,
    smoothedLevel,
    transcript,
    error: voiceError,
    canStart,
    start,
    end,
    toggleMute,
  } = useTribunalVoiceSession({
    apiBase,
    publicId,
    config,
    saveTranscript: true,
    audioAnalysis: "level+bars",
    barCount: 28,
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [callerName, setCallerName] = useState("");
  const [phoneConsent, setPhoneConsent] = useState(false);
  const [phoneMessage, setPhoneMessage] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isRequestingPhone, setIsRequestingPhone] = useState(false);

  const visibleTranscript = useMemo(
    () => transcript.filter((turn) => turn.text.trim()).slice(-4),
    [transcript],
  );

  const isSessionActive = status === "connecting" || status === "connected";
  const liveIssue = configError || voiceError;
  const agentDisplayName = config ? config.name : "Nova — AI systems showroom";
  const connectionStatusText = formatStatus(
    isLoading ? "connecting" : status,
    isConfigured,
  );
  const primaryButtonDisabled =
    status === "connecting" || (isConfigured && !canStart && !isSessionActive);

  async function handlePrimaryClick(): Promise<void> {
    if (isSessionActive) {
      end();
      return;
    }
    await start();
  }

  async function handlePhoneSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setPhoneMessage(null);
    setPhoneError(null);

    if (!apiBase || !publicId) {
      setPhoneError("The phone demo is not configured in this environment.");
      return;
    }

    if (!phoneConsent) {
      setPhoneError("Please confirm you want one automated demo call first.");
      return;
    }

    const normalized = normalizeUsPhoneNumber(phoneNumber);
    if (!normalized.ok) {
      setPhoneError(normalized.error);
      return;
    }

    setIsRequestingPhone(true);
    try {
      const response = await requestTribunalPhoneDemo({
        apiBase,
        publicId,
        phoneNumber: normalized.phoneNumber,
        callerName,
        notes: "Homepage visitor requested the Prestyj AI concierge phone encore.",
      });
      setPhoneMessage(response.message);
      setPhoneNumber(normalized.displayNumber);
    } catch (err) {
      setPhoneError(
        err instanceof Error
          ? err.message
          : "Could not request the phone demo. Please book a call instead.",
      );
    } finally {
      setIsRequestingPhone(false);
    }
  }

  return (
    <section
      id="ai-concierge"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40"
    >
      <div className="bg-primary/20 absolute top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <Badge variant="outline" className="border-primary/50 text-primary bg-background/60">
            CUSTOM AI AGENTS · LIVE VOICE DEMO
          </Badge>

          <h1 className="font-heading text-foreground mt-6 text-4xl leading-[1.04] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We build AI agents your business can actually use.
            <span className="text-primary block">Talk to one right now.</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
            Voice agents, sales agents, receptionist workflows, content engines,
            lead-response systems, internal tools, and productized AI apps — built
            around your real operations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {isConfigured ? (
              <Button
                size="lg"
                className="h-12 px-7 text-base font-semibold"
                disabled={primaryButtonDisabled}
                onClick={() => void handlePrimaryClick()}
                type="button"
              >
                {status === "connecting" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : isSessionActive ? (
                  <Square className="h-5 w-5" />
                ) : (
                  <Mic className="h-5 w-5" />
                )}
                {status === "connecting"
                  ? "Connecting..."
                  : isSessionActive
                    ? "End AI session"
                    : "Talk to the AI concierge"}
              </Button>
            ) : (
              <Button size="lg" className="h-12 px-7 text-base font-semibold" asChild>
                <Link href="/book-demo">
                  Book a human strategy call
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            )}

            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base font-semibold"
              asChild
            >
              <Link href="/book-demo">
                <Calendar className="h-5 w-5" />
                Book a human call
              </Link>
            </Button>
          </div>

          <div className="text-muted-foreground mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="flex items-center gap-2">
              <Radio className="text-primary h-4 w-4" />
              {connectionStatusText}
            </span>
            <span className="text-border hidden sm:inline">•</span>
            <Link href="/batch-video-ads" className="hover:text-primary transition-colors">
              See the productized video-ad machine
            </Link>
          </div>

          {liveIssue ? (
            <p className="text-destructive mt-4 max-w-xl text-sm">{liveIssue}</p>
          ) : null}

          <div className="mt-10 grid gap-4 text-sm sm:grid-cols-3">
            {[
              ["Voice", "browser + phone agents"],
              ["Ops", "workflow automation"],
              ["Proof", "real shipped products"],
            ].map(([label, value]) => (
              <div key={label} className="bg-card/50 rounded-2xl border p-4">
                <div className="text-foreground font-semibold">{label}</div>
                <div className="text-muted-foreground mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card/70 relative overflow-hidden rounded-[2rem] border p-4 shadow-2xl backdrop-blur sm:p-6">
          <div className="from-primary/20 absolute inset-0 bg-radial via-transparent to-transparent" />
          <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 text-white sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-cyan-200 uppercase">
                  Prestyj Concierge
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {agentDisplayName}
                </p>
              </div>
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  status === "connected"
                    ? "border-emerald-300/40 bg-emerald-400/10 text-emerald-200"
                    : "border-white/10 bg-white/5 text-slate-300",
                )}
              >
                {status === "connected" ? "Live" : "Standby"}
              </span>
            </div>

            <ConciergeOrb
              status={status}
              agentState={agentState}
              smoothedLevel={smoothedLevel}
            />
            <WaveBars frequencies={frequencies} />

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {formatAgentState(agentState)}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Ask what to automate, which agent fits, or how the stack works.
                  </p>
                </div>
                {status === "connected" ? (
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                    onClick={toggleMute}
                    type="button"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
                  </Button>
                ) : null}
              </div>

              <div className="mt-4 space-y-2">
                {visibleTranscript.length > 0 ? (
                  visibleTranscript.map((turn) => (
                    <div
                      key={turn.id}
                      className={cn(
                        "rounded-xl px-3 py-2 text-sm",
                        turn.role === "assistant"
                          ? "bg-primary/15 text-cyan-50"
                          : "ml-auto bg-white/10 text-white",
                      )}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {turn.role === "assistant" ? "Nova" : "You"}
                      </span>
                      <p className="mt-1">{turn.text}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-xl bg-white/5 px-3 py-3 text-sm text-slate-300">
                    Try: “I run a service business and miss calls after 5pm. What would
                    you build?”
                  </div>
                )}
              </div>
            </div>

            {isConfigured && phoneDemoEnabled ? (
              <form
                className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                onSubmit={(event) => void handlePhoneSubmit(event)}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/20 text-primary mt-1 rounded-full p-2">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone-call encore</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Want to feel the same stack on a real phone line? Request one
                      automated demo call with consent.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_0.8fr]">
                  <Input
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="(555) 123-4567"
                    inputMode="tel"
                    className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                    aria-label="US phone number"
                  />
                  <Input
                    value={callerName}
                    onChange={(event) => setCallerName(event.target.value)}
                    placeholder="Name optional"
                    className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                    aria-label="Caller name"
                  />
                </div>

                <label className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-400">
                  <input
                    type="checkbox"
                    checked={phoneConsent}
                    onChange={(event) => setPhoneConsent(event.target.checked)}
                    className="mt-1 accent-[#7058e3]"
                  />
                  <span>
                    By requesting a call, you agree to receive one automated demo call
                    from Prestyj. Message/data rates may apply.
                  </span>
                </label>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    size="sm"
                    disabled={isRequestingPhone || !phoneConsent}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isRequestingPhone ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Request phone demo
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="text-slate-300 hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="/book-demo">Skip to human call</Link>
                  </Button>
                </div>

                {phoneMessage ? (
                  <p className="mt-3 text-sm text-emerald-200">{phoneMessage}</p>
                ) : null}
                {phoneError ? (
                  <p className="mt-3 text-sm text-red-200">{phoneError}</p>
                ) : null}
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
