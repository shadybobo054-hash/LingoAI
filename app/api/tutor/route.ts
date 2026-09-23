import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ollamaUrl =
  process.env.OLLAMA_URL ?? "http://127.0.0.1:11434";

const ollamaModel =
  process.env.OLLAMA_MODEL ?? "llama3.2";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Support both "question" and "message"
    const question =
      typeof body.question === "string"
        ? body.question.trim()
        : typeof body.message === "string"
          ? body.message.trim()
          : "";

    const mode =
      typeof body.mode === "string"
        ? body.mode
        : "Explain something";

    const history: unknown[] = Array.isArray(body.history)
      ? body.history
      : [];

    if (!question) {
      return NextResponse.json(
        {
          error: "Please enter a question.",
        },
        {
          status: 400,
        },
      );
    }

    const messages = [
      {
        role: "system",
        content: [
          "You are Sada, a patient English tutor.",
          `The learner is using the tutor mode: ${mode}.`,
          "Answer the learner's actual question directly.",
          "Do not repeat the prompt or give a generic fallback.",
          "Keep answers short, practical, and easy to scan.",
          "For corrections, show the corrected sentence and briefly explain the change.",
          "For vocabulary, give meaning, pronunciation when useful, and one natural example.",
          "For Arabic mode, explain clearly in Arabic and include English examples when helpful.",
          "For conversation mode, reply naturally and ask one useful follow-up question.",
          "For quiz mode, ask one question at a time and do not reveal the answer immediately.",
        ].join(" "),
      },

      ...history
        .filter(
          (
            message: unknown,
          ): message is {
            role: string;
            text: string;
          } =>
            typeof message === "object" &&
            message !== null &&
            "role" in message &&
            "text" in message &&
            typeof message.text === "string",
        )
        .slice(-10)
        .map(
          (
            message: {
              role: string;
              text: string;
            },
          ) => ({
            role:
              message.role === "tutor"
                ? "assistant"
                : "user",
            content: message.text,
          }),
        ),

      {
        role: "user",
        content: question,
      },
    ];

    const response = await fetch(
      `${ollamaUrl}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: ollamaModel,
          messages,
          stream: false,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const detail = await response.text();

      return NextResponse.json(
        {
          error: `Ollama returned ${response.status}: ${
            detail || "request failed"
          }`,
        },
        {
          status: 502,
        },
      );
    }

    const result = await response.json();

    const answer = result?.message?.content;

    if (
      typeof answer !== "string" ||
      !answer.trim()
    ) {
      return NextResponse.json(
        {
          error: "Ollama returned an empty response.",
        },
        {
          status: 502,
        },
      );
    }

    return NextResponse.json({
      answer: answer.trim(),
      model: ollamaModel,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown Ollama connection error";

    return NextResponse.json(
      {
        error:
          `Could not connect to Ollama at ${ollamaUrl}. ` +
          `Make sure Ollama is running and that model ` +
          `“${ollamaModel}” is installed. ${message}`,
      },
      {
        status: 503,
      },
    );
  }
}