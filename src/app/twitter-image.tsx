import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PRESTYJ - AI Sales Agents for Real Estate";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Floating P logo representation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "140px",
              height: "140px",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              borderRadius: "28px",
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
            }}
          >
            <span
              style={{
                fontSize: "90px",
                fontWeight: 800,
                color: "#ffffff",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              P
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <h1
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              PRESTYJ
            </h1>
            <p
              style={{
                fontSize: "32px",
                color: "#a1a1aa",
                margin: 0,
                textAlign: "center",
                maxWidth: "800px",
              }}
            >
              AI Sales Agents for Real Estate
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              marginTop: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#22c55e",
                fontSize: "24px",
              }}
            >
              <span>✓</span>
              <span>60-Second Response</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#22c55e",
                fontSize: "24px",
              }}
            >
              <span>✓</span>
              <span>24/7 Availability</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#22c55e",
                fontSize: "24px",
              }}
            >
              <span>✓</span>
              <span>Auto Booking</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
