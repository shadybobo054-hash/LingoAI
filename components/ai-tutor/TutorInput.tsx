"use client";

import type { FormEvent } from "react";
import type { TutorMode } from "./types";

type Props = {
  input: string;
  setInput: (value: string) => void;
  selectedMode: string;
  isListening: boolean;
  loading: boolean;
  speechError: string;
  activeMode: TutorMode;
  onSubmit: (event?: FormEvent) => void;
  onToggleListening: () => void;
};

export default function TutorInput({
  input,
  setInput,
  selectedMode,
  isListening,
  loading,
  speechError,
  activeMode,
  onSubmit,
  onToggleListening,
}: Props) {
  return (
    <div className="mt-5 rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-4 shadow-[var(--sh)]">
      <form
        onSubmit={onSubmit}
        className="flex items-end gap-3"
      >
        <div className="min-w-0 flex-1">
          <textarea
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                !event.shiftKey
              ) {
                event.preventDefault();
                onSubmit();
              }
            }}
            rows={2}
            placeholder={`Ask your AI tutor about ${activeMode.title.toLowerCase()}...`}
            className="w-full resize-none rounded-2xl border border-[var(--line)] bg-[var(--surf2)] px-4 py-3 text-sm font-semibold text-[var(--ink)] outline-none transition placeholder:text-[var(--ink3)] focus:border-[var(--brand)]"
          />

          {speechError && (
            <p className="mt-2 text-xs font-bold text-red-500">
              {speechError}
            </p>
          )}
        </div>

        {selectedMode === "speaking" && (
          <button
            type="button"
            onClick={onToggleListening}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg transition ${
              isListening
                ? "bg-red-500 text-white shadow-lg"
                : "bg-[var(--brand-soft)] text-[var(--brand-ink)] hover:-translate-y-0.5"
            }`}
            aria-label={
              isListening
                ? "Stop listening"
                : "Start speaking"
            }
          >
            {isListening ? "■" : "🎤"}
          </button>
        )}

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="h-12 shrink-0 rounded-2xl bg-[var(--btn)] px-5 text-sm font-black text-[var(--btn-ink)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </form>

      <div className="mt-3 flex items-center justify-between px-1">
        <p className="text-xs font-medium text-[var(--ink3)]">
          Press Enter to send · Shift + Enter for a new line
        </p>

        {selectedMode === "speaking" && (
          <span className="text-xs font-black text-[var(--brand-ink)]">
            🎤 Speaking mode
          </span>
        )}
      </div>
    </div>
  );
}
