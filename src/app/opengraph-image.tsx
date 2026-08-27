import { ImageResponse } from "next/og";

export const alt = "Prestyj AI agents for institutional real estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#fafafa",
        padding: "70px 76px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "0.08em" }}>PRESTYJ</div>
        <div style={{ color: "#8b7bf0", fontSize: 20 }}>Institutional real estate AI agents</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 970 }}>
        <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.035em" }}>
          The deal does not wait for your analyst bench.
        </div>
        <div style={{ marginTop: 34, color: "#a1a1aa", fontSize: 27, lineHeight: 1.4 }}>
          Reviewed work product from the systems your firm already runs.
        </div>
      </div>
      <div style={{ display: "flex", gap: 42, color: "#d4d4d8", fontSize: 18 }}>
        <span>Deal work</span>
        <span>Fund operations</span>
        <span>Investor reporting</span>
        <span>Origination</span>
      </div>
    </div>,
    size,
  );
}
