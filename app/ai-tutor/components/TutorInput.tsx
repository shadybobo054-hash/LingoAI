
"use client";

import type { FormEvent, KeyboardEvent } from "react";
import type { TutorMode } from "./types";

type Props = {
  input: string;
  setInput: (value: string) => void;
  selectedMode: string;
  activeMode: TutorMode;
  isListening: boolean;
  loading: boolean;
  speechError: string;
  onSubmit: (event?: FormEvent) => void | Promise<void>;
  onToggleListening: () => void;
};

export default function TutorInput({
  input,
  setInput,
  activeMode,
  isListening,
  loading,
  speechError,
  onSubmit,
  onToggleListening,
}: Props) {
  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      void onSubmit();
    }
  }

  return (
    <div className="border-t border-[var(--line)] bg-gradient-to-r from-blue-500/[0.03] via-violet-500/[0.04] to-transparent p-4 sm:p-5">
      {speechError && (
        <div className="mb-3 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-500">
          {speechError}
        </div>
      )}

      <form onSubmit={(event) => void onSubmit(event)}>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-2 transition focus-within:border-violet-400/60 focus-within:ring-2 focus-within:ring-violet-500/10">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask your AI tutor about ${activeMode.title.toLowerCase()}...`}
            rows={2}
            className="max-h-40 min-h-[58px] w-full resize-y bg-transparent px-3 py-2 text-sm leading-6 text-[var(--ink)] outline-none placeholder:text-[var(--ink2)]"
          />

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] px-1 pt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleListening}
                disabled={loading}
                aria-label={isListening ? "Stop listening" : "Start voice input"}
                className={`flex h-10 items-center gap-2 rounded-xl px-3 text-xs font-bold transition disabled:opacity-50 ${
                  isListening
                    ? "animate-pulse bg-red-500/10 text-red-500"
                    : "text-[var(--ink2)] hover:bg-violet-500/10 hover:text-violet-500"
                }`}
              >
                <span className="text-base">
                  {isListening ? "⏹" : "🎙️"}
                </span>
                {isListening ? "Listening..." : "Voice input"}
              </button>

              <span className="hidden text-[10px] text-[var(--ink2)] sm:inline">
                Enter to send · Shift + Enter for new line
              </span>
            </div>

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 px-5 text-sm font-extrabold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              <span>{loading ? "Thinking..." : "Send"}</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        <p className="mt-3 text-center text-[10px] leading-5 text-[var(--ink2)]">
          AI can make mistakes. Keep practicing and verify important information.
        </p>
      </form>
    </div>
  );
}
