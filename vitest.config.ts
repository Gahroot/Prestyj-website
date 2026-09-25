import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    include: [
      "src/**/*.{test,spec}.{ts,tsx}",
      "tests/**/*.{test,spec}.{ts,tsx}",
      "scripts/seo/**/*.{test,spec}.ts",
      "scripts/seo-bot/**/*.{test,spec}.ts",
    ],
    exclude: ["node_modules", ".next", ".source", "dist", "build"],
    globals: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
