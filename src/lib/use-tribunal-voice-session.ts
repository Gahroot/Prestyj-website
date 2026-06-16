"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  createTribunalRealtimeToken,
  executeTribunalToolCall,
  fetchTribunalAgentConfig,
  saveTribunalTranscript,
  type TribunalAgentConfig,
  type TribunalAgentState,
  type TribunalConnectionStatus,
  type TribunalTranscriptRole,
  type TribunalTranscriptTurn,
} from "@/lib/tribunal-embed";
import {
  isRealtimeAudioDeltaEvent,
  isRealtimeAudioDoneEvent,
  isRealtimeAudioTranscriptDeltaEvent,
  isRealtimeAudioTranscriptDoneEvent,
} from "@/lib/tribunal-realtime-events";

const OPENAI_REALTIME_CALLS_URL = "https://api.openai.com/v1/realtime/calls";

export type TribunalAudioAnalysisMode = "none" | "level" | "level+bars";

interface WebRTCResources {
  peerConnection: RTCPeerConnection | null;
  dataChannel: RTCDataChannel | null;
  audioStream: MediaStream | null;
  audioElement: HTMLAudioElement | null;
}

interface AudioAnalysisResources {
  audioContext: AudioContext | null;
  analyser: AnalyserNode | null;
  dataArray: Uint8Array<ArrayBuffer> | null;
  animationFrame: number | null;
}

interface TranscriptLogEntry {
  role: TribunalTranscriptRole;
  content: string;
}

interface VoiceSessionCallbacks {
  onError: ((message: string) => void) | undefined;
  onClose: (() => void) | undefined;
}

export interface UseTribunalAgentConfigOptions {
  apiBase: string | null;
  publicId: string | null;
  enabled?: boolean;
}

export interface UseTribunalAgentConfigResult {
  config: TribunalAgentConfig | null;
  error: string | null;
  isLoading: boolean;
  setError: (error: string | null) => void;
}

export interface UseTribunalVoiceSessionOptions {
  apiBase: string | null;
  publicId: string | null;
  config: TribunalAgentConfig | null;
  saveTranscript?: boolean;
  audioAnalysis?: TribunalAudioAnalysisMode;
  barCount?: number;
  onError?: (message: string) => void;
  onClose?: () => void;
}

export interface UseTribunalVoiceSessionResult {
  status: TribunalConnectionStatus;
  agentState: TribunalAgentState;
  isMuted: boolean;
  frequencies: number[];
  smoothedLevel: number;
  transcript: TribunalTranscriptTurn[];
  error: string | null;
  canStart: boolean;
  start: () => Promise<void>;
  end: () => void;
  toggleMute: () => void;
  clearTranscript: () => void;
}

function emptyWebRTCResources(): WebRTCResources {
  return {
    peerConnection: null,
    dataChannel: null,
    audioStream: null,
    audioElement: null,
  };
}

function emptyAudioAnalysisResources(): AudioAnalysisResources {
  return {
    audioContext: null,
    analyser: null,
    dataArray: null,
    animationFrame: null,
  };
}

function runSafely(step: () => void): void {
  try {
    step();
  } catch {
    // Cleanup is best-effort; resources may already be closed or detached.
  }
}

function stopMediaStream(stream: MediaStream | null): void {
  if (!stream) return;
  runSafely(() => {
    for (const track of stream.getTracks()) track.stop();
  });
}

function setAudioTracksEnabled(
  stream: MediaStream | null,
  enabled: boolean,
): boolean {
  if (!stream) return false;
  for (const track of stream.getAudioTracks()) track.enabled = enabled;
  return true;
}

function closeAudioAnalysis(resources: AudioAnalysisResources): void {
  if (resources.animationFrame !== null) {
    runSafely(() => cancelAnimationFrame(resources.animationFrame as number));
  }
  if (resources.audioContext) {
    runSafely(() => {
      void resources.audioContext?.close();
    });
  }
}

function closeWebRTCResources(resources: WebRTCResources): void {
  const { peerConnection, dataChannel, audioStream, audioElement } = resources;
  if (dataChannel) runSafely(() => dataChannel.close());
  if (peerConnection) runSafely(() => peerConnection.close());
  stopMediaStream(audioStream);
  if (audioElement) {
    runSafely(() => {
      audioElement.srcObject = null;
      audioElement.remove();
    });
  }
}

function createSessionId(): string {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `sess_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function createTranscriptTurn(
  role: TribunalTranscriptRole,
  text: string,
  isFinal: boolean,
): TribunalTranscriptTurn {
  return {
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    role,
    text,
    isFinal,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getStringField(record: Record<string, unknown>, key: string): string | null {
  const value = record[key];
  return typeof value === "string" ? value : null;
}

function parseToolArguments(value: unknown): Record<string, unknown> | null {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return {};
    try {
      const parsed: unknown = JSON.parse(trimmed);
      return isRecord(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }

  if (isRecord(value)) return value;
  if (value === undefined || value === null) return {};
  return null;
}

function sendRealtimeEvent(
  dataChannel: RTCDataChannel,
  payload: Record<string, unknown>,
): void {
  if (dataChannel.readyState !== "open") return;
  dataChannel.send(JSON.stringify(payload));
}

function sendFunctionOutput(
  dataChannel: RTCDataChannel,
  callId: string,
  output: Record<string, unknown>,
): void {
  sendRealtimeEvent(dataChannel, {
    type: "conversation.item.create",
    item: {
      type: "function_call_output",
      call_id: callId,
      output: JSON.stringify(output),
    },
  });
  sendRealtimeEvent(dataChannel, {
    type: "response.create",
    response: { output_modalities: ["audio"] },
  });
}

function getRealtimeErrorMessage(data: Record<string, unknown>): string {
  const error = data.error;
  if (isRecord(error)) {
    const message = getStringField(error, "message");
    if (message) return message;
  }
  return "Realtime voice session error.";
}

export function useTribunalAgentConfig({
  apiBase,
  publicId,
  enabled = true,
}: UseTribunalAgentConfigOptions): UseTribunalAgentConfigResult {
  const [config, setConfig] = useState<TribunalAgentConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!enabled || apiBase === null || !publicId) return;

    const abortController = new AbortController();
    setIsLoading(true);
    setError(null);

    async function loadConfig(): Promise<void> {
      try {
        const nextConfig = await fetchTribunalAgentConfig({
          apiBase: apiBase as string,
          publicId: publicId as string,
          signal: abortController.signal,
        });
        if (!abortController.signal.aborted) setConfig(nextConfig);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(
            err instanceof Error ? err.message : "Failed to load the AI concierge.",
          );
          setConfig(null);
        }
      } finally {
        if (!abortController.signal.aborted) setIsLoading(false);
      }
    }

    void loadConfig();
    return () => abortController.abort();
  }, [apiBase, enabled, publicId]);

  return { config, error, isLoading, setError };
}

export function useTribunalVoiceSession({
  apiBase,
  publicId,
  config,
  saveTranscript = true,
  audioAnalysis = "level+bars",
  barCount = 28,
  onError,
  onClose,
}: UseTribunalVoiceSessionOptions): UseTribunalVoiceSessionResult {
  const [status, setStatus] = useState<TribunalConnectionStatus>("idle");
  const [agentState, setAgentState] = useState<TribunalAgentState>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [frequencies, setFrequencies] = useState<number[]>(() =>
    new Array(barCount).fill(0),
  );
  const [smoothedLevel, setSmoothedLevel] = useState(0);
  const [transcript, setTranscript] = useState<TribunalTranscriptTurn[]>([]);
  const [error, setError] = useState<string | null>(null);

  const webrtcRef = useRef<WebRTCResources>(emptyWebRTCResources());
  const audioRef = useRef<AudioAnalysisResources>(emptyAudioAnalysisResources());
  const abortControllerRef = useRef<AbortController | null>(null);
  const transcriptLogRef = useRef<TranscriptLogEntry[]>([]);
  const currentAssistantTextRef = useRef("");
  const assistantDraftTurnIdRef = useRef<string | null>(null);
  const sessionIdRef = useRef("");
  const sessionStartTimeRef = useRef(0);
  const hasNotifiedCloseRef = useRef(false);
  const callbacksRef = useRef<VoiceSessionCallbacks>({ onError, onClose });

  useEffect(() => {
    callbacksRef.current = { onError, onClose };
  }, [onClose, onError]);

  const reportError = useCallback((message: string) => {
    setError(message);
    callbacksRef.current.onError?.(message);
  }, []);

  const notifyClose = useCallback(() => {
    if (hasNotifiedCloseRef.current) return;
    hasNotifiedCloseRef.current = true;
    callbacksRef.current.onClose?.();
  }, []);

  const cleanupAudioAnalysis = useCallback(() => {
    closeAudioAnalysis(audioRef.current);
    audioRef.current = emptyAudioAnalysisResources();
    setFrequencies(new Array(barCount).fill(0));
    setSmoothedLevel(0);
  }, [barCount]);

  const setupAudioAnalysis = useCallback(
    (stream: MediaStream): void => {
      if (audioAnalysis === "none") return;
      cleanupAudioAnalysis();

      try {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 128;
        analyser.smoothingTimeConstant = 0.7;

        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        audioRef.current = {
          audioContext,
          analyser,
          dataArray,
          animationFrame: null,
        };

        const wantsBars = audioAnalysis === "level+bars";

        const updateLevel = (): void => {
          const resources = audioRef.current;
          if (resources.analyser && resources.dataArray) {
            resources.analyser.getByteFrequencyData(resources.dataArray);
            const data = resources.dataArray;

            if (wantsBars) {
              const bands: number[] = [];
              const bufferLength = data.length;
              for (let i = 0; i < barCount; i += 1) {
                const startIndex = Math.floor(
                  (i / barCount) ** 1.5 * bufferLength,
                );
                const endIndex = Math.floor(
                  ((i + 1) / barCount) ** 1.5 * bufferLength,
                );
                let sum = 0;
                const count = Math.max(1, endIndex - startIndex);
                for (let j = startIndex; j < endIndex && j < bufferLength; j += 1) {
                  sum += data[j] ?? 0;
                }
                bands.push(Math.min(1, (sum / count / 255) * 1.8));
              }
              setFrequencies(bands);
            }

            const voiceRange = Array.from(data).slice(0, 16);
            const avg =
              voiceRange.reduce((total, value) => total + value, 0) /
              Math.max(1, voiceRange.length);
            const normalizedLevel = Math.min(avg / 128, 1);
            setSmoothedLevel((previous) => {
              const factor = normalizedLevel > previous ? 0.3 : 0.1;
              return previous + (normalizedLevel - previous) * factor;
            });
          }
          audioRef.current.animationFrame = requestAnimationFrame(updateLevel);
        };

        updateLevel();
      } catch {
        // Audio analysis is decorative; the voice session can continue without it.
      }
    },
    [audioAnalysis, barCount, cleanupAudioAnalysis],
  );

  const cleanup = useCallback(() => {
    cleanupAudioAnalysis();
    closeWebRTCResources(webrtcRef.current);
    webrtcRef.current = emptyWebRTCResources();
    setAgentState("idle");
  }, [cleanupAudioAnalysis]);

  const appendUserTranscript = useCallback((text: string): void => {
    transcriptLogRef.current.push({ role: "user", content: text });
    setTranscript((previous) => [
      ...previous,
      createTranscriptTurn("user", text, true),
    ]);
  }, []);

  const appendAssistantDelta = useCallback((delta: string): void => {
    currentAssistantTextRef.current += delta;
    const nextText = currentAssistantTextRef.current;
    const existingId = assistantDraftTurnIdRef.current;

    if (!existingId) {
      const turn = createTranscriptTurn("assistant", nextText, false);
      assistantDraftTurnIdRef.current = turn.id;
      setTranscript((previous) => [...previous, turn]);
      return;
    }

    setTranscript((previous) =>
      previous.map((turn) =>
        turn.id === existingId ? { ...turn, text: nextText, isFinal: false } : turn,
      ),
    );
  }, []);

  const finalizeAssistantTranscript = useCallback((): void => {
    const finalText = currentAssistantTextRef.current.trim();
    const draftId = assistantDraftTurnIdRef.current;

    if (finalText) {
      transcriptLogRef.current.push({ role: "assistant", content: finalText });
      if (draftId) {
        setTranscript((previous) =>
          previous.map((turn) =>
            turn.id === draftId ? { ...turn, text: finalText, isFinal: true } : turn,
          ),
        );
      } else {
        setTranscript((previous) => [
          ...previous,
          createTranscriptTurn("assistant", finalText, true),
        ]);
      }
    } else if (draftId) {
      setTranscript((previous) => previous.filter((turn) => turn.id !== draftId));
    }

    currentAssistantTextRef.current = "";
    assistantDraftTurnIdRef.current = null;
  }, []);

  const flushTranscript = useCallback(async (): Promise<void> => {
    if (!saveTranscript || apiBase === null || !publicId) return;

    const pendingAssistant = currentAssistantTextRef.current.trim();
    if (pendingAssistant) {
      transcriptLogRef.current.push({
        role: "assistant",
        content: pendingAssistant,
      });
      currentAssistantTextRef.current = "";
      assistantDraftTurnIdRef.current = null;
    }

    if (transcriptLogRef.current.length === 0 || !sessionIdRef.current) return;

    const transcriptText = transcriptLogRef.current
      .map(
        (entry) =>
          `[${entry.role === "user" ? "User" : "Assistant"}]: ${entry.content}`,
      )
      .join("\n\n");
    const durationSeconds = sessionStartTimeRef.current
      ? Math.floor((Date.now() - sessionStartTimeRef.current) / 1000)
      : 0;

    try {
      await saveTribunalTranscript({
        apiBase,
        publicId,
        sessionId: sessionIdRef.current,
        transcript: transcriptText,
        durationSeconds,
      });
    } catch {
      // Transcript persistence is best-effort.
    }

    transcriptLogRef.current = [];
    sessionIdRef.current = "";
    sessionStartTimeRef.current = 0;
  }, [apiBase, publicId, saveTranscript]);

  const end = useCallback((): void => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    void flushTranscript();
    cleanup();
    setStatus("idle");
    setIsMuted(false);
    notifyClose();
  }, [cleanup, flushTranscript, notifyClose]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
      void flushTranscript();
      cleanup();
    };
  }, [cleanup, flushTranscript]);

  const clearTranscript = useCallback((): void => {
    setTranscript([]);
    transcriptLogRef.current = [];
    currentAssistantTextRef.current = "";
    assistantDraftTurnIdRef.current = null;
  }, []);

  const start = useCallback(async (): Promise<void> => {
    if (status === "connecting" || status === "connected") return;

    if (apiBase === null || !publicId || !config) {
      reportError("The live AI concierge is not configured yet.");
      setStatus("error");
      return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      reportError("This browser does not support microphone access.");
      setStatus("error");
      return;
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    hasNotifiedCloseRef.current = false;
    transcriptLogRef.current = [];
    currentAssistantTextRef.current = "";
    assistantDraftTurnIdRef.current = null;
    sessionIdRef.current = createSessionId();
    sessionStartTimeRef.current = Date.now();

    setError(null);
    setStatus("connecting");
    setAgentState("idle");
    setIsMuted(false);

    try {
      const tokenData = await createTribunalRealtimeToken({
        apiBase,
        publicId,
        signal: abortController.signal,
      });
      if (abortController.signal.aborted) return;

      const ephemeralKey = tokenData.client_secret.value.trim();
      if (!ephemeralKey) throw new Error("The AI voice token was empty.");

      const peerConnection = new RTCPeerConnection();
      webrtcRef.current = {
        peerConnection,
        dataChannel: null,
        audioStream: null,
        audioElement: null,
      };

      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      webrtcRef.current = { ...webrtcRef.current, audioStream: micStream };

      const audioTrack = micStream.getAudioTracks()[0];
      if (!audioTrack) throw new Error("No microphone audio track was available.");
      peerConnection.addTrack(audioTrack, micStream);

      const dataChannel = peerConnection.createDataChannel("oai-events");
      const audioElement = document.createElement("audio");
      audioElement.autoplay = true;
      webrtcRef.current = { ...webrtcRef.current, dataChannel, audioElement };

      peerConnection.ontrack = (event) => {
        const remoteStream = event.streams[0] ?? new MediaStream([event.track]);
        audioElement.srcObject = remoteStream;
        setupAudioAnalysis(remoteStream);
        void audioElement.play().catch(() => undefined);
      };

      if (abortController.signal.aborted) {
        cleanup();
        return;
      }

      const offer = await peerConnection.createOffer();
      if (!offer.sdp) throw new Error("Browser failed to create a voice offer.");
      await peerConnection.setLocalDescription(offer);

      if (abortController.signal.aborted) {
        cleanup();
        return;
      }

      const response = await fetch(OPENAI_REALTIME_CALLS_URL, {
        method: "POST",
        body: offer.sdp,
        headers: {
          "Content-Type": "application/sdp",
          Authorization: `Bearer ${ephemeralKey}`,
        },
        signal: abortController.signal,
      });

      if (abortController.signal.aborted) {
        cleanup();
        return;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI voice connection failed (${response.status}): ${errorText}`);
      }

      const answerSdp = await response.text();
      await peerConnection.setRemoteDescription({ type: "answer", sdp: answerSdp });

      const executeToolCall = async (
        callId: string,
        toolName: string,
        toolArguments: Record<string, unknown>,
      ): Promise<void> => {
        try {
          const toolResult = await executeTribunalToolCall({
            apiBase,
            publicId,
            toolName,
            arguments: toolArguments,
          });
          sendFunctionOutput(dataChannel, callId, toolResult);
          if (toolResult.action === "end_call") {
            window.setTimeout(() => end(), 3000);
          }
        } catch (err) {
          sendFunctionOutput(dataChannel, callId, {
            success: false,
            error: err instanceof Error ? err.message : "Tool execution failed.",
          });
        }
      };

      dataChannel.onopen = () => {
        if (abortController.signal.aborted) return;
        setStatus("connected");
        setAgentState("listening");

        const greeting = tokenData.agent.initial_greeting || config.greeting_message;
        if (greeting) {
          sendRealtimeEvent(dataChannel, {
            type: "response.create",
            response: {
              output_modalities: ["audio"],
              instructions: `Start the conversation by saying exactly this: "${greeting}"`,
            },
          });
        }
      };

      dataChannel.onmessage = (event: MessageEvent<unknown>) => {
        if (typeof event.data !== "string") return;

        try {
          const parsed: unknown = JSON.parse(event.data);
          if (!isRecord(parsed)) return;
          const eventType = getStringField(parsed, "type");
          if (!eventType) return;

          if (eventType === "input_audio_buffer.speech_started") {
            setAgentState("listening");
          } else if (eventType === "input_audio_buffer.speech_stopped") {
            setAgentState("thinking");
          } else if (isRealtimeAudioDeltaEvent(eventType)) {
            setAgentState("speaking");
          } else if (isRealtimeAudioDoneEvent(eventType)) {
            setAgentState("listening");
          } else if (eventType === "response.done") {
            setAgentState("listening");
          } else if (eventType === "response.function_call_arguments.done") {
            const callId = getStringField(parsed, "call_id");
            const toolName = getStringField(parsed, "name");
            if (!callId || !toolName) return;

            const toolArguments = parseToolArguments(parsed.arguments);
            if (!toolArguments) {
              sendFunctionOutput(dataChannel, callId, {
                success: false,
                error: "Invalid JSON arguments.",
              });
              return;
            }

            void executeToolCall(callId, toolName, toolArguments);
          } else if (eventType === "error") {
            const message = getRealtimeErrorMessage(parsed);
            reportError(message);
            setStatus("error");
          }

          if (eventType === "conversation.item.input_audio_transcription.completed") {
            const userText = getStringField(parsed, "transcript")?.trim();
            if (userText) appendUserTranscript(userText);
          } else if (isRealtimeAudioTranscriptDeltaEvent(eventType)) {
            const delta = getStringField(parsed, "delta");
            if (delta) appendAssistantDelta(delta);
          } else if (isRealtimeAudioTranscriptDoneEvent(eventType)) {
            finalizeAssistantTranscript();
          }
        } catch {
          // Ignore malformed Realtime events.
        }
      };

      dataChannel.onerror = () => {
        reportError("AI voice connection error.");
        setStatus("error");
      };

      dataChannel.onclose = () => {
        if (abortController.signal.aborted) return;
        void flushTranscript();
        cleanup();
        setStatus("idle");
        notifyClose();
      };

      peerConnection.onconnectionstatechange = () => {
        if (abortController.signal.aborted) return;
        if (
          peerConnection.connectionState === "disconnected" ||
          peerConnection.connectionState === "failed"
        ) {
          void flushTranscript();
          cleanup();
          setStatus(peerConnection.connectionState === "failed" ? "error" : "idle");
          notifyClose();
        }
      };
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      reportError(err instanceof Error ? err.message : "Failed to start voice session.");
      setStatus("error");
      cleanup();
    }
  }, [
    apiBase,
    appendAssistantDelta,
    appendUserTranscript,
    cleanup,
    config,
    end,
    finalizeAssistantTranscript,
    flushTranscript,
    notifyClose,
    publicId,
    reportError,
    setupAudioAnalysis,
    status,
  ]);

  const toggleMute = useCallback((): void => {
    const toggled = setAudioTracksEnabled(webrtcRef.current.audioStream, isMuted);
    if (toggled) setIsMuted((previous) => !previous);
  }, [isMuted]);

  return {
    status,
    agentState,
    isMuted,
    frequencies,
    smoothedLevel,
    transcript,
    error,
    canStart: apiBase !== null && Boolean(publicId && config),
    start,
    end,
    toggleMute,
    clearTranscript,
  };
}
