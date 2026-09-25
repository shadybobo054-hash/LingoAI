
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
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4 sm:px-6">
        <div>
          <p className="text-[15px] font-bold tracking-tight text-[var(--ink)]">
            LingoAI Tutor
          </p>
          <p className="mt-1 text-[13px] font-medium text-[var(--ink2)]">
            Your personal English practice space
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-3 py-1.5 text-[11px] font-bold text-[var(--brand-ink)]">
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
          AI ready
        </div>
      </div>

      {/* Chat */}
      <div className="min-h-[470px] p-5 sm:p-7">
        {messages.length === 0 && !loading ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[28px] bg-[var(--brand-soft)] text-5xl">
              🤖
            </div>

            <h2 className="text-[25px] font-bold tracking-tight text-[var(--ink)]">
              What do you want to learn?
            </h2>

            <p className="mt-2 max-w-md text-[14px] font-medium leading-7 text-[var(--ink2)]">
              Ask anything about English or choose one of the quick
              prompts below.
            </p>

            <div className="mt-7 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => onPrompt(prompt)}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--surf2)] px-4 py-3.5 text-left text-[14px] font-semibold leading-6 text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-7">
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex w-full ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[92%] sm:max-w-[76%] ${
                      isUser
                        ? "flex flex-col items-end"
                        : "flex flex-col items-start"
                    }`}
                  >
                    <span
                      className={`mb-1.5 px-1 text-[11px] font-bold ${
                        isUser
                          ? "text-[var(--brand-ink)]"
                          : "text-[var(--ink3)]"
                      }`}
                    >
                      {isUser ? "You" : "LingoAI"}
                    </span>

                    {/* Message */}
                    <div
                      className={
                        isUser
                          ? "rounded-[22px] rounded-tr-[7px] bg-[#3d9bff] px-5 py-3.5 !text-white shadow-[0_8px_24px_rgba(61,155,255,0.18)]"
                          : "rounded-[22px] rounded-tl-[7px] border border-[var(--line)] bg-[var(--surf2)] px-5 py-3.5 text-[var(--ink)]"
                      }
                    >
                      <p
                        className={
                          isUser
                            ? "whitespace-pre-wrap text-[15px] font-medium leading-[1.75] tracking-[-0.005em] !text-white"
                            : "whitespace-pre-wrap text-[15px] font-medium leading-[1.75] tracking-[-0.005em] text-[var(--ink)]"
                        }
                      >
                        {message.content}
                      </p>
                    </div>

                    {/* AI controls */}
                    {!isUser && (
                      <div className="mt-2 flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => onSpeak(message.content)}
                          className="flex h-8 items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surf)] px-2.5 text-[11px] font-bold text-[var(--ink2)] transition hover:border-[var(--brand)] hover:text-[var(--brand-ink)]"
                        >
                          🔊 Play
                        </button>

                        <button
                          type="button"
                          onClick={onStopSpeaking}
                          className="flex h-8 items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surf)] px-2.5 text-[11px] font-bold text-[var(--ink2)] transition hover:border-[var(--brand)] hover:text-[var(--brand-ink)]"
                        >
                          ■ Stop
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading */}
            {loading && (
              <div className="flex justify-start">
                <div>
                  <span className="mb-1.5 block px-1 text-[11px] font-bold text-[var(--ink3)]">
                    LingoAI
                  </span>

                  <div className="rounded-[22px] rounded-tl-[7px] border border-[var(--line)] bg-[var(--surf2)] px-5 py-4">
                    <div
                      className="text-3xl"
                      style={{
                        animation:
                          "robotFloat 1.8s ease-in-out infinite",
                      }}
                    >
                      🤖
                    </div>

                    <p className="mt-2 text-[12px] font-semibold text-[var(--ink2)]">
                      AI is thinking...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] font-semibold leading-6 text-red-600">
                {error}
              </div>
            )}

            {/* Last question */}
            {!loading && messages.length > 0 && (
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--surf2)] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ink3)]">
                  Conversation
                </p>

                <p className="mt-1.5 text-[13px] font-medium leading-6 text-[var(--ink2)]">
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
