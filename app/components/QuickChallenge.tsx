
"use client";

import { useState } from "react";

const answers = [
  "have been learning",
  "am learning",
  "learned",
];

const correctAnswer = "have been learning";

export default function QuickChallenge() {
  const [selected, setSelected] = useState<string | null>(null);

  const answered = selected !== null;
  const isCorrect = selected === correctAnswer;

  const handleAnswer = (answer: string) => {
    if (answered) return;
    setSelected(answer);
  };

  const handleReset = () => {
    setSelected(null);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surf)]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--brand-soft)] opacity-60 blur-3xl" />

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm text-[var(--brand-ink)]">
              ✦
            </div>

            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--brand-ink)]">
                Today&apos;s challenge
              </p>

              <p className="mt-1 text-[11px] font-medium text-[var(--ink3)]">
                One minute of English
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="rounded-full border border-[var(--line)] bg-[var(--surf2)] px-3 py-1.5 font-mono text-[9px] font-bold text-[var(--ink3)]">
              60 SEC
            </span>

            <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1.5 font-mono text-[9px] font-bold text-[var(--brand-ink)]">
              +20 XP
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="mt-8">
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--ink3)]">
            Grammar
          </p>

          <h3 className="mt-3 max-w-[700px] font-display text-[25px] font-medium leading-[1.1] tracking-[-0.035em] text-[var(--ink)] sm:text-[30px]">
            Choose the sentence that sounds natural.
          </h3>

          <div className="mt-6 rounded-[20px] border border-[var(--line)] bg-[var(--surf2)] p-5 sm:p-6">
            <p className="text-[17px] font-semibold leading-8 text-[var(--ink)] sm:text-[19px]">
              I{" "}
              <span className="mx-1 inline-flex min-w-[145px] items-center justify-center rounded-lg border border-dashed border-[var(--line2)] bg-[var(--surf)] px-2 py-1 font-mono text-[12px] font-bold text-[var(--brand-ink)]">
                {selected || "__________"}
              </span>{" "}
              English since 2024.
            </p>
          </div>
        </div>

        {/* Answers */}
        <div className="mt-5 grid gap-2.5">
          {answers.map((answer) => {
            const selectedAnswer = selected === answer;
            const correct = answer === correctAnswer;

            let classes =
              "border-[var(--line)] bg-[var(--surf)] text-[var(--ink)] hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]";

            if (answered) {
              if (correct) {
                classes =
                  "border-[#099B78]/40 bg-[#099B78]/10 text-[#087A61] dark:text-[#72D8BE]";
              } else if (selectedAnswer) {
                classes =
                  "border-[#D95C5C]/40 bg-[#D95C5C]/10 text-[#C44747] dark:text-[#FF9696]";
              } else {
                classes =
                  "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink3)] opacity-60";
              }
            }

            return (
              <button
                key={answer}
                type="button"
                disabled={answered}
                onClick={() => handleAnswer(answer)}
                className={`group flex w-full items-center justify-between rounded-[16px] border px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${classes}`}
              >
                <span>{answer}</span>

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                    answered && correct
                      ? "bg-[#099B78] text-white"
                      : answered && selectedAnswer
                        ? "bg-[#D95C5C] text-white"
                        : "bg-[var(--surf2)] text-[var(--ink3)] group-hover:bg-[var(--brand)] group-hover:text-white"
                  }`}
                >
                  {answered && correct
                    ? "✓"
                    : answered && selectedAnswer
                      ? "×"
                      : "→"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result */}
        {answered && (
          <div
            className={`mt-5 rounded-[20px] border ${
              isCorrect
                ? "border-[#099B78]/30 bg-[#099B78]/10"
                : "border-[#D95C5C]/30 bg-[#D95C5C]/10"
            }`}
          >
            <div className="flex gap-3 p-4 sm:p-5">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black text-white ${
                  isCorrect ? "bg-[#099B78]" : "bg-[#D95C5C]"
                }`}
              >
                {isCorrect ? "✓" : "×"}
              </div>

              <div>
                <p
                  className={`text-sm font-bold ${
                    isCorrect
                      ? "text-[#087A61] dark:text-[#72D8BE]"
                      : "text-[#C44747] dark:text-[#FF9696]"
                  }`}
                >
                  {isCorrect ? "Nice work! +20 XP" : "Not quite."}
                </p>

                <p
                  className={`mt-1 text-xs leading-5 ${
                    isCorrect
                      ? "text-[#087A61]/80 dark:text-[#A0E9D7]"
                      : "text-[#C44747]/80 dark:text-[#FFB1B1]"
                  }`}
                >
                  {isCorrect
                    ? "Have been learning is correct because the action started in the past and continues until now."
                    : `The correct answer is "${correctAnswer}". The action started in the past and is still continuing.`}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-7 flex flex-col gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[var(--brand)]" />
            <span className="h-1.5 w-2 rounded-full bg-[var(--line2)]" />
            <span className="h-1.5 w-2 rounded-full bg-[var(--line2)]" />

            <span className="ml-1 text-[10px] font-semibold text-[var(--ink3)]">
              1 minute challenge
            </span>
          </div>

          {answered && (
            <button
              type="button"
              onClick={handleReset}
              className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 text-xs font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f8ee8]"
            >
              <span className="!text-white">Try again</span>

              <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
