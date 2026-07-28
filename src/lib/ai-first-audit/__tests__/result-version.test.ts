import { describe, expect, it } from "vitest";
import {
  auditResultVersion,
  isAuditResultV1,
  isAuditResultV2,
  parseAuditResult,
} from "../result-version";
import { RESULT_V1_FIXTURE, RESULT_V2_FIXTURE } from "./fixtures/results";

describe("audit result version detection", () => {
  it("keeps saved version 1 results readable", () => {
    expect(isAuditResultV1(RESULT_V1_FIXTURE)).toBe(true);
    expect(auditResultVersion(RESULT_V1_FIXTURE)).toBe(1);
  });

  it("recognizes version 2 results", () => {
    expect(isAuditResultV2(RESULT_V2_FIXTURE)).toBe(true);
    expect(auditResultVersion(RESULT_V2_FIXTURE)).toBe(2);
  });

  it("rejects empty and malformed stored values safely", () => {
    expect(parseAuditResult(null)).toBeNull();
    expect(parseAuditResult({ version: 1 })).toBeNull();
    expect(parseAuditResult({ ...RESULT_V2_FIXTURE, workflows: [] })).toBeNull();
    expect(auditResultVersion({ version: 3 })).toBeNull();
  });
});
