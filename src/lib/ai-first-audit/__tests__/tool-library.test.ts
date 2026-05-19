import { describe, it, expect } from "vitest";
import { TOOL_RECIPES, pickRecipe } from "../tool-library";
import { TOOL_CATEGORIES } from "../types";
import { TASK_PRESETS } from "../task-library";

describe("tool library", () => {
  it("registers exactly one recipe per category", () => {
    const seen = new Set<string>();
    for (const recipe of TOOL_RECIPES) {
      expect(seen.has(recipe.category)).toBe(false);
      seen.add(recipe.category);
    }
    expect(seen.size).toBe(TOOL_CATEGORIES.length);
  });

  it("every category has a recipe", () => {
    for (const category of TOOL_CATEGORIES) {
      expect(() => pickRecipe({ category })).not.toThrow();
    }
  });

  it("every task preset maps to a registered recipe", () => {
    for (const preset of TASK_PRESETS) {
      expect(() => pickRecipe({ category: preset.category })).not.toThrow();
    }
  });

  it("recipes have non-empty starter recipe and watch out", () => {
    for (const recipe of TOOL_RECIPES) {
      expect(recipe.starterRecipe.length).toBeGreaterThan(50);
      expect(recipe.watchOut.length).toBeGreaterThan(20);
      expect(recipe.stack.length).toBeGreaterThan(0);
    }
  });
});
