import { NextResponse } from "next/server";

export function POST(): NextResponse {
  return NextResponse.json(
    {
      error: "Legacy lead magnets have been archived.",
      next: "/research",
    },
    { status: 410 },
  );
}
