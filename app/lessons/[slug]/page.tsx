"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

type LessonContent = {
  title: string;
  words: string[];
  question: string;
  choices: string[];
  answer: string;
  next: string | null;
};

const lessonContent: Record<string, LessonContent> = {
  "ordering-food": {
    title: "Ordering food",
    words: ["menu", "recommendation", "still water", "bill", "table for two"],
    question: "What would you ask when you want the server to suggest a dish?",
    choices: ["Could you recommend something?", "Where is the checkout?", "Is this my gate?"],
    answer: "Could you recommend something?",
    next: "airport",
  },
  airport: {
    title: "Getting through the airport",
    words: ["boarding pass", "gate", "carry-on", "delayed", "aisle seat"],
    question: "Which word means a small bag you take onto the plane?",
    choices: ["Carry-on", "Boarding pass", "Gate"],
    answer: "Carry-on",
    next: "small-talk-at-work",
  },
  "small-talk-at-work": {
    title: "Small talk at work",
    words: ["catch up", " How is it going?", "busy week", "in a minute", "sounds good"],
    question: "Which phrase is a natural way to ask about someone's day?",
    choices: ["How is it going?", "Where is the invoice?", "Close the meeting."],
    answer: "How is it going?",
    next: "phone-calls",
  },
  "phone-calls": {
    title: "Phone calls and voicemail",
    words: ["hold the line", "voicemail", "call back", "available", "speak to"],
    question: "What do you say when you want someone to return your call?",
    choices: ["Could you call me back?", "Could you open the gate?", "I need the menu."],
    answer: "Could you call me back?",
    next: "giving-your-opinion",
  },
  "giving-your-opinion": {
    title: "Giving your opinion kindly",
    words: ["I see your point", "I tend to think", "perhaps", "not quite", "fair enough"],
    question: "Which phrase gently introduces your own opinion?",
    choices: ["I tend to think", "Give me the bill", "Where is the gate?"],
    answer: "I tend to think",
    next: "explaining-a-problem",
  },
  "explaining-a-problem": {
    title: "Explaining a problem to support",
    words: ["issue", "crashed", "error message", "tried restarting", "screenshot"],
    question: "What helps support understand what happened?",
    choices: ["An error message", "A table for two", "A boarding pass"],
    answer: "An error message",
    next: null,
  },
};

export default function LessonPlayerPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const lesson = lessonContent[params.slug] ?? lessonContent.airport;
  const [step, setStep] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = document.documentElement.lang || "en-US";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const choose = (choice: string) => {
    setSelectedChoice(choice);
    if (choice === lesson.answer) {
      speak(choice);
    }
  };

  const goNext = () => {
    if (step === 1) {
      setStep(2);
      return;
    }

    if (lesson.next) {
      router.push(`/lessons/${lesson.next}`);
      return;
    }

    router.push("/lessons");
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-5 sm:pb-24 sm:pt-8">
        <header className="mb-7">
          <div className="flex items-center gap-3">
            <Link
              href="/lessons"
              aria-label="Close lesson"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] text-xl text-[var(--ink2)] transition hover:border-[#0A7E99] hover:text-[#0A7E99]"
            >
              ×
            </Link>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A7E99]">
                Learn
              </p>
              <h1 className="truncate text-sm font-semibold text-[var(--ink)] sm:text-base">
                {lesson.title}
              </h1>
            </div>
            <span className="font-mono text-xs text-[var(--ink3)]">{step} / 2</span>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-1">
            {[0, 1, 2, 3, 4].map((bar) => (
              <span
                key={bar}
                className={`h-1 rounded-full ${bar < step * 2.5 ? "bg-[#0A7E99]" : "bg-[var(--line)]"}`}
              />
            ))}
          </div>
        </header>

        <section className="sada-card rounded-[26px] p-6 sm:p-8">
          {step === 1 ? (
            <>
              <h2 className="font-display text-4xl font-medium sm:text-5xl">
                {params.slug === "airport" ? "Airport words worth knowing" : `${lesson.title} words worth knowing`}
              </h2>
              <p className="mt-1 text-sm text-[var(--ink3)]">Tap any line to hear it</p>
              <div className="mt-5 space-y-2">
                {lesson.words.map((word) => (
                  <button
                    key={word}
                    type="button"
                    onClick={() => speak(word)}
                    className="flex min-h-16 w-full items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surf)] px-4 text-left text-base text-[var(--ink)] transition hover:border-[#8CCDDD] hover:bg-[#F4FCFE]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E4F6FB] text-sm font-semibold text-[#0A7E99]">
                      ▶
                    </span>
                    {word.trim()}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A7E99]">
                Check your understanding
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-medium sm:text-5xl">
                {lesson.question}
              </h2>
              <div className="mt-7 space-y-2">
                {lesson.choices.map((choice) => {
                  const selected = selectedChoice === choice;
                  const correct = selected && choice === lesson.answer;

                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => choose(choice)}
                      className={`flex min-h-14 w-full items-center justify-between rounded-2xl border px-4 text-left text-sm font-semibold transition ${selected ? correct ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]" : "border-[#D14A33] bg-[#FEECE8] text-[#B8422B]" : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink)] hover:border-[#0A7E99] hover:bg-[#F4FCFE]"}`}
                    >
                      {choice}
                      {selected && <span>{correct ? "✓" : "×"}</span>}
                    </button>
                  );
                })}
              </div>
              {selectedChoice && (
                <p className={`mt-5 text-sm font-semibold ${selectedChoice === lesson.answer ? "text-[#0E8F69]" : "text-[#CE543B]"}`}>
                  {selectedChoice === lesson.answer ? "Correct. Nice work." : `The answer is “${lesson.answer}”. Try again or continue.`}
                </p>
              )}
            </>
          )}

          <div className="mt-7 flex justify-end border-t border-[var(--line)] pt-5">
            <button
              type="button"
              onClick={goNext}
              disabled={step === 2 && selectedChoice !== lesson.answer}
              className="rounded-full bg-[#2477D1] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D69BB] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === 1 ? "Next question" : lesson.next ? "Next lesson" : "Finish lesson"} →
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}