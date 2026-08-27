import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function POST(): NextResponse {
  return NextResponse.json(
    {
      error: "The founding cohort has been retired.",
      next: "/pilot",
    },
    { status: 410 },
  );
}
