import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 320,
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "102px",
        }}
      >
        <span
          style={{
            color: "white",
            fontWeight: 800,
          }}
        >
          P
        </span>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
