"use client";

import { starterPrompts } from "./constants";
import type { Message } from "./types";

type Props = {
  messages: Message[];
  loading: boolean;
  lastUserMessage: string;
  error: string;
  onPrompt: (prompt: string) => void;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
};

export default function TutorChat({
  messages,
  loading,
  lastUserMessage,
  error,
  onPrompt,
  onSpeak,
  onStopSpeaking,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surf)] shadow-[var(--sh2)]">
      <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4 sm:px-6">
        <div>
          <p className="text-sm font-black text-[var(--ink)]">
            LingoAI Tutor
          </p>
          <p className="mt-0.5 text-xs font-medium text-[var(--ink2)]">
            Your personal English practice space
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-3 py-1.5 text-xs font-black text-[var(--brand-ink)]">
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
          AI ready
        </div>
      </div>

      <div className="min-h-[470px] p-5 sm:p-7">
        {messages.length === 0 && !loading ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] bg-[var(--brand-soft)] text-5xl shadow-sm">
              🤖
            </div>

            <h2 className="text-2xl font-black text-[var(--ink)]">
              What do you want to learn?
            </h2>

            <p className="mt-2 max-w-md text-sm font-medium leading-6 text-[var(--ink2)]">
              Ask anything about English or choose one of the
              quick prompts below.
            </p>

            <div className="mt-7 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => onPrompt(prompt)}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surf2)] px-4 py-3 text-left text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-3xl px-4 py-3 text-sm font-medium leading-7 ${
                    message.role === "user"
                      ? "rounded-br-md bg-[var(--btn)] text-[var(--btn-ink)]"
                      : "rounded-bl-md border border-[var(--line)] bg-[var(--surf2)] text-[var(--ink)]"
                  }`}
                >
                  <p className="whitespace-pre-wrap">
                    {message.content}
                  </p>

                  {message.role === "assistant" && (
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          onSpeak(message.content)
                        }
                        className="rounded-xl border border-[var(--line)] bg-[var(--surf)] px-3 py-1.5 text-xs font-black text-[var(--ink)] transition hover:border-[var(--brand)]"
                      >
                        🔊
                      </button>

                      <button
                        type="button"
                        onClick={onStopSpeaking}
                        className="rounded-xl border border-[var(--line)] bg-[var(--surf)] px-3 py-1.5 text-xs font-black text-[var(--ink)] transition hover:border-[var(--brand)]"
                      >
                        ■
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-3xl rounded-bl-md border border-[var(--line)] bg-[var(--surf2)] px-6 py-5">
                  <div
                    className="text-4xl"
                    style={{
                      animation:
                        "robotFloat 1.8s ease-in-out infinite",
                    }}
                  >
                    🤖
                  </div>

                  <p className="mt-2 text-xs font-bold text-[var(--ink2)]">
                    AI is thinking...
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                {error}
              </div>
            )}

            {!loading && messages.length > 0 && (
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--surf2)] p-4">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--ink3)]">
                  Last question
                </p>

                <p className="mt-2 text-sm font-bold text-[var(--ink)]">
                  {lastUserMessage}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
