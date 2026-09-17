"use client";

import Link from "next/link";
import { useState } from "react";

const learningWays = [
  {
    title: "Vocabulary",
    label: "Word of the day",
    color: "#099B78",
    bg: "#FFFFFF",
  },
  {
    title: "Listening",
    label: "At the café: ordering coffee",
    color: "#0A7E99",
    bg: "#E4F6FB",
  },
  {
    title: "Grammar",
    label: "Build sentences that sound natural",
    color: "#6A52EE",
    bg: "#F1EEFE",
  },
  {
    title: "Speaking",
    label: "Say what you mean with confidence",
    color: "#CE543B",
    bg: "#FFF0EC",
  },
  {
    title: "Reading",
    label: "Follow the meaning, not every word",
    color: "#1D72D2",
    bg: "#EAF5FF",
  },
  {
    title: "Review",
    label: "Keep the useful things close",
    color: "#0E8F69",
    bg: "#E8FAF3",
  },
];

const waveform = [
  14, 24, 10, 32, 20, 40, 18, 28, 12, 34, 22, 38, 30, 18, 28, 42, 30, 20,
  34, 16, 28, 12, 36, 22, 44, 30, 20, 34, 14, 28, 38, 18, 32, 24, 40, 16,
  30, 22, 36, 18, 28,
];

export default function Home() {
  const correctAnswer = "have been studying";
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [loadingExplanation, setLoadingExplanation] = useState(false);

  const handleAnswer = (answer: string) => {
    const nextIsCorrect = answer === correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(nextIsCorrect);
    setShowExplanation(false);
    setExplanation("");

    if (nextIsCorrect) {
      const spokenText = "I have been studying English for two years now.";

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(spokenText);
        utterance.lang = "en-US";
        utterance.rate = 0.92;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const handleExplain = async () => {
    setLoadingExplanation(true);
    setShowExplanation(true);

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question:
            "Explain why the correct answer is \"have been studying\" in the sentence \"I have been studying English for two years now.\" Keep it short, friendly, and easy to understand.",
          mode: "Explain the grammar",
          history: [],
        }),
      });

      const data = await response.json();

      if (!response.ok || typeof data.answer !== "string") {
        throw new Error(data.error || "Unable to explain the answer.");
      }

      setExplanation(data.answer);
    } catch (error) {
      setExplanation(
        error instanceof Error
          ? error.message
          : "I couldn’t explain this answer right now.",
      );
    } finally {
      setLoadingExplanation(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Hero */}
      <section className="page-container relative overflow-hidden py-14 sm:py-20 lg:py-24">
        <div className="absolute right-[-5%] top-24 h-80 w-80 rounded-full bg-[#EAF8FC] blur-2xl opacity-90" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#E8FAF3] blur-3xl opacity-50" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left */}
          <div className="max-w-[570px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EAF5FF] px-3 py-1.5 text-xs font-semibold text-[#2677C8]">
              <span className="h-4 w-4 rounded-full bg-[#3D9BFF]" />
              No account. Just start.
            </div>

            <h1 className="font-display text-[3.75rem] font-medium leading-[0.96] tracking-[-0.035em] sm:text-6xl lg:text-[4.35rem]">
              Learn English the
              <span className="block">way you actually</span>
              <span className="block">hear it.</span>
            </h1>

            <p className="mt-7 max-w-[490px] text-base leading-7 text-[var(--ink2)] sm:text-lg">
              Short lessons, real listening, a vocabulary you can touch, and a
              tutor that explains the why. Open a page and you are already
              learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lessons"
                className="sada-button inline-flex h-12 items-center justify-center rounded-full px-7 text-base"
              >
                Start learning
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] px-7 text-base font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[var(--sh)]"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-[#565AD7]" />
                Practice with AI
              </Link>
            </div>

            <p className="mt-5 text-xs font-medium text-[var(--ink3)]">
              Everything below is live — tap anything.
            </p>
          </div>

          {/* Listening card */}
          <div className="relative lg:pt-5">
            <div className="absolute -inset-5 rounded-[36px] bg-[#EAF8FC] opacity-70 blur-2xl" />
            <div className="sada-card relative overflow-hidden rounded-[26px] p-6 sm:p-7">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-[#147D9A]">
                <span>Listening</span>
                <span className="font-mono tracking-normal text-[var(--ink3)]">0:06</span>
              </div>

              <div className="mt-4 flex items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  aria-label="Play listening example"
                  data-speak="I will have a coffee and a glass of water please"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1187A4] text-2xl text-white shadow-[0_8px_18px_rgba(17,135,164,0.22)] transition hover:scale-105"
                >
                  <span className="ml-1">▶</span>
                </button>
                <div className="flex h-12 flex-1 items-center justify-between gap-1 overflow-hidden">
                  {waveform.map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="w-1.5 shrink-0 rounded-full bg-[#8ABDD0]"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-5 font-display text-[1.2rem] leading-tight text-[#283348] sm:text-[1.55rem]">
                I will have a coffee and a glass of water please
              </p>

              <div className="mt-5 border-t border-[var(--line)] pt-4 text-xs font-medium text-[#95A8BE]">
                Tap any word to hear it on its own.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily lesson */}
      <section className="border-y border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container py-12 sm:py-16">
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
                className={`inline-flex h-11 min-w-16 items-center justify-center rounded-b-xl border-b-2 px-3 font-sans text-xl tracking-[0.2em] ${
                  selectedAnswer === null
                    ? "border-[var(--line2)] text-[var(--ink3)]"
                    : isCorrect
                      ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]"
                      : "border-[#D14A33] bg-[#FEECE8] text-[#D14A33]"
                }`}
              >
                {selectedAnswer ?? "...."}
              </span>
              <span>English for two years now.</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["have been studying", "am studying", "studied"].map((answer) => {
                const isSelected = selectedAnswer === answer;
                const isCorrectChoice = answer === correctAnswer;

                return (
                  <button
                    key={answer}
                    type="button"
                    onClick={() => handleAnswer(answer)}
                    className={`rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                      selectedAnswer === null
                        ? "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                        : isSelected
                          ? isCorrectChoice
                            ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]"
                            : "border-[#D14A33] bg-[#FEECE8] text-[#D14A33]"
                          : isCorrectChoice
                            ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]"
                            : "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink)] opacity-80"
                    } cursor-pointer`}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>

            {selectedAnswer && !isCorrect && (
              <div className="mt-5 rounded-2xl border border-[#F5D4CF] bg-[#FFF4F2] p-4 text-sm text-[#8A2E26]">
                <p className="font-semibold">Not quite.</p>
                <p className="mt-2">Would you like the AI to explain it?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleExplain}
                    disabled={loadingExplanation}
                    className="rounded-full bg-[#0E8F69] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
                  >
                    {loadingExplanation ? "Thinking..." : "Explain it"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowExplanation(false)}
                    className="rounded-full border border-[#D14A33] bg-white px-3 py-1.5 text-xs font-semibold text-[#D14A33]"
                  >
                    No thanks
                  </button>
                </div>

                {showExplanation && (
                  <div className="mt-4 rounded-xl border border-[#F0C3BC] bg-white/80 p-3 text-sm leading-6 text-[var(--ink)]">
                    {loadingExplanation ? "Loading explanation..." : explanation}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-16">
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              Six ways to learn
            </h2>
            <p className="mt-3 max-w-[500px] text-sm leading-5 text-[var(--ink2)] sm:text-base">
              Each one is a different kind of attention. Pick the one that
              fits the next ten minutes.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningWays.map((way, index) => (
              <Link
                key={way.title}
                href={`/${way.title.toLowerCase()}`}
                className={`group rounded-[22px] border border-[var(--line)] p-6 shadow-[var(--sh)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)] ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
                style={{ backgroundColor: way.bg }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: way.color }}
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                    {way.title}
                  </p>
                  {index === 0 && (
                    <span className="text-xs text-[var(--ink3)]">Word of the day</span>
                  )}
                </div>

                {index === 0 ? (
                  <>
                    <div className="mt-4 flex items-center gap-3">
                      <h3 className="font-display text-4xl font-medium">curious</h3>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FAF3] text-[#099B78] transition group-hover:scale-105">
                        ▶
                      </span>
                    </div>
                    <p className="mt-3 font-mono text-sm text-[var(--ink3)]">/ˈkjʊə.ri.əs/</p>
                    <p className="mt-3 text-sm text-[var(--ink)]">
                      Wanting to know or learn more about something.
                    </p>
                    <p className="mt-3 font-display text-base italic text-[var(--ink2)]">
                      “She was curious about how the machine worked.”
                    </p>
                  </>
                ) : index === 1 ? (
                  <>
                    <h3 className="mt-4 font-display text-2xl font-medium">{way.label}</h3>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0A7E99] shadow-sm">▶</span>
                      <div className="flex h-8 flex-1 items-center justify-between gap-1 overflow-hidden">
                        {waveform.slice(0, 24).map((height, waveformIndex) => (
                          <span
                            key={`${height}-${waveformIndex}`}
                            className="w-1.5 shrink-0 rounded-full bg-[#79B8CA]"
                            style={{ height: `${Math.max(10, height * 0.7)}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <h3 className="mt-4 max-w-[270px] font-display text-2xl font-medium leading-tight">
                    {way.label}
                  </h3>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container py-10 sm:py-14">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_2fr] lg:grid-rows-[auto_auto]">
            <Link
              href="/lessons/ordering-food"
              className="group sada-card flex min-h-[255px] flex-col justify-between rounded-[24px] p-6 sm:p-7"
            >
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2477D1]">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                  Lessons
                </p>
                <h2 className="mt-4 font-display text-3xl font-medium">
                  Ordering food
                </h2>
                <p className="mt-4 max-w-[300px] text-sm leading-6 text-[var(--ink2)]">
                  Everything you need to order a meal with confidence: polite
                  phrasing, the waiter&apos;s questions, and asking for
                  recommendations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Vocabulary", "Listening", "Practice"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[#2477D1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-[var(--line)] pt-4 text-xs text-[var(--ink3)]">
                <span>Beginner · 8 min · 5 steps</span>
                <span className="font-semibold text-[#2477D1] transition group-hover:translate-x-1">
                  Open lesson →
                </span>
              </div>
            </Link>

            <Link
              href="/ai-tutor"
              className="group flex min-h-[255px] flex-col justify-between rounded-[24px] bg-[var(--ai-card)] p-6 text-white shadow-[var(--sh2)] transition hover:-translate-y-1 sm:p-7"
            >
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B9C6FF]">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                  AI Tutor
                </p>
                <h2 className="mt-4 max-w-[650px] font-display text-3xl font-medium leading-tight sm:text-4xl">
                  “Why do we say “I have been” instead of “I was” here?”
                </h2>
                <div className="mt-5 max-w-[620px] rounded-2xl bg-white/15 px-4 py-3 text-sm">
                  <p className="flex items-center gap-3 text-white/55 line-through">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D14A33] text-[11px] text-[#512321]">
                      ×
                    </span>
                    I am agree with you
                  </p>
                  <p className="mt-2 flex items-center gap-3 font-semibold text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E8F69] text-[11px] text-[#062E26]">
                      ✓
                    </span>
                    I agree with you
                  </p>
                </div>
              </div>

              <span className="mt-6 inline-flex h-11 w-fit items-center rounded-full bg-white px-5 text-sm font-semibold text-[#2B3A66] transition group-hover:translate-x-1">
                Practice with AI&nbsp; →
              </span>
            </Link>

            <Link
              href="/practice"
              className="group sada-card min-h-[210px] rounded-[24px] p-6 sm:p-7"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CE543B]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                Practice
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium">
                Five questions, two minutes
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--ink2)]">
                Mixed vocabulary, grammar and listening — instant feedback on
                every answer.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#FFF0EC] px-4 py-2 text-xs font-semibold text-[#CE543B]">
                  Quick 5 questions
                </span>
                <span className="rounded-full border border-[var(--line2)] px-4 py-2 text-xs font-semibold text-[var(--ink)] transition group-hover:border-[#CE543B]">
                  All practice
                </span>
              </div>
            </Link>

            <Link
              href="/courses/english-for-travel"
              className="group min-h-[210px] rounded-[24px] bg-[#F1EEFE] p-6 shadow-[var(--sh)] transition hover:-translate-y-1 hover:shadow-[var(--sh2)] sm:p-7"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6A52EE]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                Courses
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium">
                English for travel
              </h2>
              <p className="mt-4 max-w-[350px] text-sm leading-6 text-[var(--ink2)]">
                Six lessons that take you from the airport to the hotel desk
                to the restaurant table.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
                <span className="rounded-full bg-white/75 px-3 py-2 text-[var(--ink2)]">
                  6 lessons · 1h 20m
                </span>
                <span className="font-semibold text-[#6A52EE] transition group-hover:translate-x-1">
                  View course →
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 sm:grid-cols-[0.9fr_1.6fr] sm:gap-12">
            <div className="max-w-[270px]">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3D9BFF] text-xs font-semibold text-white">
                  ●
                </span>
                <span className="font-display text-lg font-semibold text-[var(--ink)]">
                  Sada
                </span>
              </Link>
              <p className="mt-3 text-sm leading-5 text-[var(--ink3)]">
                A calm place to learn languages. Built around listening,
                curiosity and short honest feedback.
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">
                Languages we teach
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { name: "English", status: "live", active: true },
                  { name: "Spanish", status: "soon", active: false },
                  { name: "French", status: "soon", active: false },
                  { name: "Turkish", status: "soon", active: false },
                  { name: "Japanese", status: "soon", active: false },
                ].map((language) => (
                  <span
                    key={language.name}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${language.active ? "border-[#D6E9FA] bg-[#F5FAFF] text-[#2477D1]" : "border-[var(--line)] bg-transparent text-[var(--ink2)]"}`}
                  >
                    {language.name}
                    <span className="ml-1.5 text-[var(--ink3)]">{language.status}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}