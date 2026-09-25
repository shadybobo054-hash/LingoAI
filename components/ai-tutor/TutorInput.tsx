
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
        {/* Message input */}
        <div className="min-w-0 flex-1">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                onSubmit();
              }
            }}
            rows={2}
            placeholder={`Ask your AI tutor about ${activeMode.title.toLowerCase()}...`}
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-[var(--line)]
              bg-[var(--surf2)]
              px-4
              py-3.5
              text-[15px]
              font-medium
              leading-7
              tracking-[-0.01em]
              text-[var(--ink)]
              outline-none
              transition-all
              duration-200
              placeholder:text-[var(--ink3)]
              focus:border-[var(--brand)]
              focus:ring-2
              focus:ring-[var(--brand)]
              focus:ring-opacity-10
            "
          />

          {speechError && (
            <p className="mt-2 px-1 text-xs font-semibold text-red-500">
              {speechError}
            </p>
          )}
        </div>

        {/* Speaking button */}
        {selectedMode === "speaking" && (
          <button
            type="button"
            onClick={onToggleListening}
            className={`
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              text-lg
              transition-all
              duration-200
              ${
                isListening
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-[var(--brand-soft)] text-[var(--brand-ink)] hover:-translate-y-0.5 hover:shadow-md"
              }
            `}
            aria-label={
              isListening
                ? "Stop listening"
                : "Start speaking"
            }
          >
            {isListening ? "■" : "🎤"}
          </button>
        )}

        {/* Send button */}
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="
            h-12
            shrink-0
            rounded-2xl
            bg-[var(--btn)]
            px-5
            text-sm
            font-bold
            text-[var(--btn-ink)]
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:shadow-md
            active:translate-y-0
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:translate-y-0
            disabled:hover:shadow-sm
          "
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </form>

      {/* Input hints */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
        <p className="text-xs font-medium leading-5 text-[var(--ink3)]">
          Press Enter to send · Shift + Enter for a new line
        </p>

        {selectedMode === "speaking" && (
          <span className="text-xs font-bold text-[var(--brand-ink)]">
            🎤 Speaking mode
          </span>
        )}
      </div>
    </div>
  );
}
