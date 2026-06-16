import { z } from "zod";

const DEFAULT_TRIBUNAL_API_BASE = "";
const DEFAULT_TRIBUNAL_HOMEPAGE_AGENT_ID = "ag_L2rFuSnp";

const tribunalToolSchema = z.object({
  type: z.string(),
  name: z.string(),
  description: z.string().optional().default(""),
  parameters: z.record(z.string(), z.unknown()).optional().default({}),
});

const tribunalAgentConfigSchema = z.object({
  public_id: z.string(),
  name: z.string(),
  greeting_message: z.string().nullable(),
  button_text: z.string(),
  theme: z.enum(["light", "dark", "auto"]).catch("dark"),
  position: z.string(),
  primary_color: z.string(),
  language: z.string(),
  voice: z.string().optional(),
  channel_mode: z.string(),
});

const tribunalTokenResponseSchema = z.object({
  client_secret: z.object({ value: z.string() }),
  agent: z.object({
    name: z.string(),
    voice: z.string(),
    language: z.string(),
    initial_greeting: z.string().nullable(),
  }),
  model: z.string(),
  tools: z.array(tribunalToolSchema),
});

const tribunalActionResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

const tribunalTranscriptResponseSchema = z.object({
  status: z.string(),
});

const tribunalToolCallResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  action: z.string().nullable().optional(),
  result: z.record(z.string(), z.unknown()).nullable().optional(),
});

export type TribunalTool = z.infer<typeof tribunalToolSchema>;
export type TribunalAgentConfig = z.infer<typeof tribunalAgentConfigSchema>;
export type TribunalTokenResponse = z.infer<typeof tribunalTokenResponseSchema>;
export type TribunalActionResponse = z.infer<typeof tribunalActionResponseSchema>;
export type TribunalTranscriptResponse = z.infer<
  typeof tribunalTranscriptResponseSchema
>;
export type TribunalToolCallResponse = z.infer<
  typeof tribunalToolCallResponseSchema
>;

export type TribunalConnectionStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "error";
export type TribunalAgentState = "idle" | "listening" | "thinking" | "speaking";
export type TribunalTranscriptRole = "user" | "assistant";

export interface TribunalTranscriptTurn {
  id: string;
  role: TribunalTranscriptRole;
  text: string;
  isFinal: boolean;
}

export interface TribunalPhoneValidationResultOk {
  ok: true;
  phoneNumber: string;
  displayNumber: string;
}

export interface TribunalPhoneValidationResultError {
  ok: false;
  error: string;
}

export type TribunalPhoneValidationResult =
  | TribunalPhoneValidationResultOk
  | TribunalPhoneValidationResultError;

export interface TribunalClientOptions {
  apiBase: string;
  publicId: string;
  signal?: AbortSignal;
}

export interface TribunalToolCallOptions extends TribunalClientOptions {
  toolName: string;
  arguments: Record<string, unknown>;
}

export interface TribunalPhoneDemoOptions extends TribunalClientOptions {
  phoneNumber: string;
  callerName?: string;
  notes?: string;
}

export interface TribunalTranscriptOptions extends TribunalClientOptions {
  sessionId: string;
  transcript: string;
  durationSeconds: number;
}

export type TribunalEmbedEndpoint =
  | "config"
  | "token"
  | "chat"
  | "tool-call"
  | "transcript"
  | "call"
  | "text";

function normalizeEnvString(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function responseErrorMessage(payload: unknown, fallback: string): string {
  if (!isRecord(payload)) return fallback;
  const detail = payload.detail;
  if (typeof detail === "string" && detail.trim()) return detail;
  const message = payload.message;
  if (typeof message === "string" && message.trim()) return message;
  return fallback;
}

async function readJsonSafely(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function withAbortSignal(init: RequestInit, signal?: AbortSignal): RequestInit {
  if (!signal) return init;
  return { ...init, signal };
}

async function fetchTribunalJson<T>(
  url: string,
  init: RequestInit,
  schema: z.ZodType<T>,
  fallbackError: string,
): Promise<T> {
  const response = await fetch(url, init);
  const payload = await readJsonSafely(response);

  if (!response.ok) {
    throw new Error(responseErrorMessage(payload, fallbackError));
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    throw new Error("Invalid response from The Tribunal.");
  }

  return parsed.data;
}

export function resolveTribunalApiBase(
  rawValue: string | undefined = process.env.NEXT_PUBLIC_TRIBUNAL_API_BASE,
): string | null {
  const value =
    normalizeEnvString(rawValue)?.replace(/\/+$/, "") ?? DEFAULT_TRIBUNAL_API_BASE;

  if (!value) return "";
  if (value.startsWith("/")) return value;

  try {
    const parsed = new URL(value);
    return parsed.origin + parsed.pathname.replace(/\/+$/, "");
  } catch {
    return null;
  }
}

export function getTribunalHomepageAgentId(): string | null {
  return (
    normalizeEnvString(process.env.NEXT_PUBLIC_TRIBUNAL_HOMEPAGE_AGENT_ID) ??
    DEFAULT_TRIBUNAL_HOMEPAGE_AGENT_ID
  );
}

export function isTribunalPhoneDemoEnabled(): boolean {
  const value = normalizeEnvString(
    process.env.NEXT_PUBLIC_TRIBUNAL_PHONE_DEMO_ENABLED,
  );
  return value !== "false";
}

export function buildTribunalEmbedUrl(
  apiBase: string,
  publicId: string,
  endpoint: TribunalEmbedEndpoint,
): string {
  return `${apiBase}/api/v1/p/embed/${encodeURIComponent(publicId)}/${endpoint}`;
}

export function normalizeUsPhoneNumber(
  value: string,
): TribunalPhoneValidationResult {
  const digits = value.replace(/\D/g, "");
  const tenDigitNumber =
    digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

  if (tenDigitNumber.length !== 10) {
    return { ok: false, error: "Enter a valid 10-digit US phone number." };
  }

  return {
    ok: true,
    phoneNumber: `+1${tenDigitNumber}`,
    displayNumber: `(${tenDigitNumber.slice(0, 3)}) ${tenDigitNumber.slice(
      3,
      6,
    )}-${tenDigitNumber.slice(6)}`,
  };
}

export async function fetchTribunalAgentConfig({
  apiBase,
  publicId,
  signal,
}: TribunalClientOptions): Promise<TribunalAgentConfig> {
  return fetchTribunalJson(
    buildTribunalEmbedUrl(apiBase, publicId, "config"),
    withAbortSignal({ method: "GET" }, signal),
    tribunalAgentConfigSchema,
    "Failed to load the AI concierge.",
  );
}

export async function createTribunalRealtimeToken({
  apiBase,
  publicId,
  signal,
}: TribunalClientOptions): Promise<TribunalTokenResponse> {
  return fetchTribunalJson(
    buildTribunalEmbedUrl(apiBase, publicId, "token"),
    withAbortSignal(
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "voice" }),
      },
      signal,
    ),
    tribunalTokenResponseSchema,
    "Failed to start the AI voice session.",
  );
}

export async function executeTribunalToolCall({
  apiBase,
  publicId,
  toolName,
  arguments: toolArguments,
  signal,
}: TribunalToolCallOptions): Promise<TribunalToolCallResponse> {
  return fetchTribunalJson(
    buildTribunalEmbedUrl(apiBase, publicId, "tool-call"),
    withAbortSignal(
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool_name: toolName, arguments: toolArguments }),
      },
      signal,
    ),
    tribunalToolCallResponseSchema,
    "Failed to execute the AI tool call.",
  );
}

export async function saveTribunalTranscript({
  apiBase,
  publicId,
  sessionId,
  transcript,
  durationSeconds,
  signal,
}: TribunalTranscriptOptions): Promise<TribunalTranscriptResponse> {
  return fetchTribunalJson(
    buildTribunalEmbedUrl(apiBase, publicId, "transcript"),
    withAbortSignal(
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          transcript,
          duration_seconds: durationSeconds,
        }),
      },
      signal,
    ),
    tribunalTranscriptResponseSchema,
    "Failed to save the AI voice transcript.",
  );
}

export async function requestTribunalPhoneDemo({
  apiBase,
  publicId,
  phoneNumber,
  callerName,
  notes,
  signal,
}: TribunalPhoneDemoOptions): Promise<TribunalActionResponse> {
  const body: Record<string, string> = { phone_number: phoneNumber };
  if (callerName?.trim()) body.caller_name = callerName.trim();
  if (notes?.trim()) body.notes = notes.trim();

  return fetchTribunalJson(
    buildTribunalEmbedUrl(apiBase, publicId, "call"),
    withAbortSignal(
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
      signal,
    ),
    tribunalActionResponseSchema,
    "Failed to request the phone demo.",
  );
}
