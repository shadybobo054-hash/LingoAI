"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const answers = ["have been studying", "am studying", "studied"];
const correctAnswer = answers[0];

export default function DailyLesson() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const isCorrect = selectedAnswer === correctAnswer;
  const missedQuestion = selectedAnswer
    ? `Why is “${selectedAnswer}” wrong in the sentence “I ${selectedAnswer} English for two years now”? The correct answer is “${correctAnswer}”. Please explain the mistake in English.`
    : "";
  const explanation =
    "“For two years now” means the action started in the past and continues. Present perfect continuous — have been + -ing — is the natural choice.";

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const chooseAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(false);

    if (answer === correctAnswer && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(
        "I have been studying English for two years now.",
      );
      utterance.lang = document.documentElement.lang || "en-US";
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    }
  };

  const readAnswer = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      "I have been studying English for two years now.",
    );
    utterance.lang = document.documentElement.lang || "en-US";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="sada-card overflow-hidden rounded-[26px] p-6 sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Learn something in 60 seconds
          </h2>
          <p className="mt-1 text-sm text-[var(--ink2)] sm:text-base">
            One sentence, one choice, one small thing you keep.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-medium text-[var(--ink3)]">
          1&nbsp; / &nbsp;3
        </span>
      </div>

      <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-4 font-display text-3xl text-[var(--ink)] sm:text-4xl">
        <span>I</span>
        <span
          className={`inline-flex min-h-11 min-w-16 items-center justify-center rounded-b-xl border-b-2 px-3 font-sans text-xl tracking-normal transition-colors duration-200 ${
            selectedAnswer
              ? isCorrect
                ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]"
                : "border-[#D14A33] bg-[#FEECE8] text-[#D14A33]"
              : "border-[var(--line2)] text-[var(--ink3)]"
          }`}
        >
          {selectedAnswer || "...."}
        </span>
        <span>English for two years now.</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {answers.map((answer) => {
          const isSelected = selectedAnswer === answer;
          const isWrong = isSelected && !isCorrect;

          return (
            <button
              key={answer}
              type="button"
              aria-pressed={isSelected}
              onClick={() => chooseAnswer(answer)}
              className={`rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                isSelected
                  ? isWrong
                    ? "border-[#D14A33] bg-[#FEECE8] text-[#B33B29]"
                    : "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]"
                  : "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink)] hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
              }`}
            >
              {answer}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <div
          className={`mt-6 rounded-2xl px-4 py-4 sm:px-5 ${isCorrect ? "bg-[#E8FAF3]" : "bg-[#FEECE8]"}`}
          role="status"
        >
          <div className="flex items-start gap-3">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${isCorrect ? "bg-[#0E8F69]" : "bg-[#D14A33]"}`}
            >
              {isCorrect ? "✓" : "×"}
            </span>
            <div className="min-w-0">
              <p className={`font-semibold ${isCorrect ? "text-[#0E8F69]" : "text-[#CE543B]"}`}>
                {isCorrect ? "Correct" : "Not quite"}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--ink2)]">
                {showExplanation || isCorrect
                  ? explanation
                  : "That choice does not fit the meaning of the sentence."}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 pl-9">
            <button
              type="button"
              onClick={readAnswer}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line2)] bg-white px-4 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[var(--sh)]"
            >
              <span className="h-2 w-2 rounded-full bg-[#0A7E99]" />
              Hear it
            </button>
            {!isCorrect && (
              <Link
                href={`/ai-tutor?question=${encodeURIComponent(missedQuestion)}`}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line2)] bg-white px-4 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[var(--sh)]"
              >
                <span className="h-2 w-2 rounded-full bg-[#565AD7]" />
                Ask AI why
              </Link>
            )}
            <button
              type="button"
              onClick={() => {
                setSelectedAnswer(null);
                setShowExplanation(false);
              }}
              className="inline-flex h-10 items-center rounded-full bg-[#2477D1] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D69BB]"
            >
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}