import { NextResponse } from "next/server";

const lessonApiUrl = process.env.LESSONS_API_URL;

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;

  if (lessonApiUrl) {
    try {
      const response = await fetch(
        `${lessonApiUrl.replace(/\/$/, "")}/${encodeURIComponent(slug)}`,
        { cache: "no-store" },
      );

      if (!response.ok) {
        return NextResponse.json(
          { error: `Lesson service returned ${response.status}.` },
          { status: 502 },
        );
      }

      return NextResponse.json(await response.json());
    } catch {
      return NextResponse.json(
        { error: "Could not connect to the lesson service." },
        { status: 503 },
      );
    }
  }

  return NextResponse.json(
    {
      message: "LESSONS_API_URL is not configured. Using the built-in lesson content.",
      source: "fallback",
    },
    { status: 200 },
  );
}