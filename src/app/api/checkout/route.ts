import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function POST(): NextResponse {
  return NextResponse.json(
    {
      error:
        "Direct website checkout has been retired. Institutional engagements are scoped first.",
      next: "/book-demo",
    },
    { status: 410 },
  );
}
