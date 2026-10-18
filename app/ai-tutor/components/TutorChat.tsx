
"use client";

import { useEffect, useRef } from "react";
import { tutorPrompts } from "./constants";
import type { Message } from "./types";

type Props = {
  messages: Message[];
  loading: boolean;
  error: string;
  onPrompt: (prompt: string) => void;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
};

export default function TutorChat({
  messages,
  loading,
  error,
  onPrompt,
  onSpeak,
  onStopSpeaking,
}: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  return (
    <section className="flex min-h-[650px] min-w-0 flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surf)] shadow-[var(--sh)] lg:min-h-[760px]">
      <header className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-transparent p-4 sm:p-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 text-2xl shadow-lg">
            🤖
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-black sm:text-base">
              Your AI Learning Partner
            </h2>
            <p className="mt-1 text-xs text-[var(--ink2)]">
              English practice · Always ready to help
            </p>
          </div>
        </div>

        <span className="hidden rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-bold text-emerald-500 sm:inline-flex">
          ● Online
        </span>
      </header>

      <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
        {messages.length === 0 ? (
          <div className="flex min-h-[430px] flex-col items-center justify-center py-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 scale-150 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="relative flex h-24 w-24 animate-[robotFloat_4s_ease-in-out_infinite] items-center justify-center rounded-[30px] bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 text-5xl ring-1 ring-violet-400/20">
                🤖
              </div>
              <span className="absolute -right-2 top-0 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 text-lg shadow-lg">
                ✨
              </span>
            </div>

            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-violet-500">
              Welcome to your learning world
            </p>
            <h3 className="max-w-md text-2xl font-black leading-tight sm:text-3xl">
              Hey there!{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Ready to level up?
              </span>
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--ink2)]">
              Ask me anything about English. Practice speaking, explore
              grammar, or discover new words together.
            </p>

            <div className="mt-8 grid w-full max-w-lg gap-3 text-left">
              {tutorPrompts.map((prompt) => (
                <button
                  key={prompt.title}
                  type="button"
                  onClick={() => onPrompt(prompt.text)}
                  className={`flex items-center gap-3 rounded-2xl border p-3.5 transition-all duration-200 hover:-translate-y-0.5 ${prompt.color}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surf)] text-xl shadow-sm">
                    {prompt.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold">
                      {prompt.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[var(--ink2)]">
                      {prompt.text}
                    </span>
                  </span>
                  <span className="text-lg text-[var(--ink2)]">↗</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message, index) => {
            const isUser = message.role === "user";

            return (
              <div
                key={`${index}-${message.role}`}
                className={`flex items-start gap-3 ${
                  isUser ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg ${
                    isUser
                      ? "bg-gradient-to-br from-blue-500 to-cyan-400"
                      : "bg-gradient-to-br from-violet-500 to-fuchsia-500"
                  }`}
                >
                  {isUser ? "👤" : "🤖"}
                </div>

                <div
                  className={`max-w-[85%] rounded-2xl p-4 sm:max-w-[80%] ${
                    isUser
                      ? "rounded-tr-sm bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/10"
                      : "rounded-tl-sm border border-[var(--line)] bg-[var(--bg)]"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words text-sm leading-7">
                    {message.content}
                  </p>

                  {!isUser && (
                    <div className="mt-3 flex items-center gap-2 border-t border-[var(--line)] pt-2">
                      <button
                        type="button"
                        onClick={() => onSpeak(message.content)}
                        className="rounded-lg px-2 py-1 text-xs font-bold text-blue-500 transition hover:bg-blue-500/10"
                      >
                        🔊 Listen
                      </button>
                      <button
                        type="button"
                        onClick={onStopSpeaking}
                        className="rounded-lg px-2 py-1 text-xs font-bold text-violet-500 transition hover:bg-violet-500/10"
                      >
                        ⏹ Stop
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}

        {loading && (
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg">
              🤖
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-violet-400/20 bg-violet-500/5 p-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-violet-500">
                  Thinking
                </span>
                <span className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-fuchsia-500 [animation-delay:300ms]" />
                </span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-500">
            {error}
          </div>
        )}

        <div ref={endRef} />
      </div>
    </section>
  );
}
