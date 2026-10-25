export type CheckStatus = "pass" | "warn" | "fail" | "skip";

export type CheckResult = {
  id: string;
  title: string;
  status: CheckStatus;
  message: string;
  details?: string[];
};

export type Report = {
  url: string;
  checkedAt: string;
  score: number;
  summary: Record<CheckStatus, number>;
  checks: CheckResult[];
};

export type CheckOptions = {
  token?: string;
  timeoutMs?: number;
  /** Injected clock for deterministic output in tests. */
  now?: () => Date;
};
