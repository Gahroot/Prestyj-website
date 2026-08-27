import { NextResponse } from "next/server";

export function GET(): NextResponse {
  return NextResponse.json(
    {
      error: "Legacy statistic embeds have been archived.",
      next: "/research",
    },
    { status: 410 },
  );
}
