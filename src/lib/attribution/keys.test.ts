import { describe, expect, it } from "vitest";

import { ATTRIBUTION_KEYS as contractKeys } from "../../../scripts/growth-engine/shared/contracts";
import { ATTRIBUTION_KEYS } from "@/lib/attribution/keys";

describe("ATTRIBUTION_KEYS", () => {
  it("matches the growth-engine contract exactly", () => {
    expect(ATTRIBUTION_KEYS).toEqual(contractKeys);
  });
});
