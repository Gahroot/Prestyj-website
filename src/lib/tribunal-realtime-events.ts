export const REALTIME_AUDIO_DELTA_EVENTS = new Set([
  "response.output_audio.delta",
  "response.audio.delta",
]);

export const REALTIME_AUDIO_DONE_EVENTS = new Set([
  "response.output_audio.done",
  "response.audio.done",
]);

export const REALTIME_AUDIO_TRANSCRIPT_DELTA_EVENTS = new Set([
  "response.output_audio_transcript.delta",
  "response.audio_transcript.delta",
]);

export const REALTIME_AUDIO_TRANSCRIPT_DONE_EVENTS = new Set([
  "response.output_audio_transcript.done",
  "response.audio_transcript.done",
]);

export function isRealtimeAudioDeltaEvent(type: unknown): type is string {
  return typeof type === "string" && REALTIME_AUDIO_DELTA_EVENTS.has(type);
}

export function isRealtimeAudioDoneEvent(type: unknown): type is string {
  return typeof type === "string" && REALTIME_AUDIO_DONE_EVENTS.has(type);
}

export function isRealtimeAudioTranscriptDeltaEvent(
  type: unknown,
): type is string {
  return (
    typeof type === "string" && REALTIME_AUDIO_TRANSCRIPT_DELTA_EVENTS.has(type)
  );
}

export function isRealtimeAudioTranscriptDoneEvent(
  type: unknown,
): type is string {
  return (
    typeof type === "string" && REALTIME_AUDIO_TRANSCRIPT_DONE_EVENTS.has(type)
  );
}
