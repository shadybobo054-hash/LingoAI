
"use client";

import { useState } from "react";

const answers = [
  "have been learning",
  "am learning",
  "learned",
];

const correctAnswer = "have been learning";

function ChallengeArtwork() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px]" />
      <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px]" />

      <svg
        viewBox="0 0 900 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        className="absolute inset-0 h-full w-full opacity-60"
      >
        <defs>
          <pattern
            id="challenge-grid"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M26 0H0V26"
              stroke="#8B5CF6"
              strokeOpacity=".18"
              strokeWidth=".7"
            />
          </pattern>

          <linearGradient id="challenge-line">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>

        <rect width="900" height="500" fill="url(#challenge-grid)" />

        {/* Orbital rings */}
        <ellipse
          cx="450"
          cy="250"
          rx="350"
          ry="175"
          stroke="url(#challenge-line)"
          strokeOpacity=".22"
          strokeDasharray="4 9"
        />

        <ellipse
          cx="450"
          cy="250"
          rx="280"
          ry="130"
          stroke="#8B5CF6"
          strokeOpacity=".15"
        />

        {/* Book */}
        <g
          transform="translate(650 85) rotate(-9)"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M0 15Q35 0 70 17V100Q35 82 0 95Z" />
          <path d="M70 17Q105 0 140 15V95Q105 82 70 100Z" />
          <path d="M70 17V100" />
          <path d="M12 34L53 34M12 49L53 49M87 34L128 34M87 49L128 49" stroke="#22D3EE" strokeOpacity=".75" />
        </g>

        {/* Speech bubble */}
        <g
          transform="translate(700 290)"
          stroke="#22D3EE"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M0 0H115Q125 0 125 10V53Q125 63 115 63H42L22 79V63H10Q0 63 0 53Z" />
          <path d="M20 21H104M20 37H78" strokeLinecap="round" />
        </g>

        {/* English letters */}
        <g transform="translate(75 320)">
          <rect
            width="55"
            height="55"
            rx="12"
            fill="#8B5CF6"
            fillOpacity=".09"
            stroke="#A78BFA"
            strokeOpacity=".7"
          />
          <path
            d="M16 39L27 16L39 39M20 31H35"
            stroke="#A78BFA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <rect
            x="67"
            y="-12"
            width="55"
            height="55"
            rx="12"
            fill="#22D3EE"
            fillOpacity=".07"
            stroke="#22D3EE"
            strokeOpacity=".7"
          />
          <path
            d="M83 6H105M83 6V26H105M83 16H101"
            stroke="#22D3EE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Connecting path */}
        <path
          d="M180 345C300 270 350 380 450 300S600 250 700 320"
          stroke="url(#challenge-line)"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          strokeOpacity=".65"
        />

        <path
          d="M225 110V134M213 122H237M500 410V430M490 420H510"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="180" cy="345" r="4" fill="#22D3EE" />
        <circle cx="450" cy="300" r="4" fill="#A78BFA" />
        <circle cx="700" cy="320" r="4" fill="#22D3EE" />
      </svg>
    </div>
  );
}

export default function QuickChallenge() {
  const [selected, setSelected] = useState<string | null>(null);

  const answered = selected !== null;
  const isCorrect = selected === correctAnswer;

  function handleAnswer(answer: string) {
    if (answered) return;
    setSelected(answer);
  }

  function handleReset() {
    setSelected(null);
  }

  return (
    <section className="relative isolate overflow-hidden rounded-[30px] border border-violet-400/30 bg-[var(--surf)] shadow-[0_20px_70px_-30px_rgba(124,58,237,0.3)]">
      <ChallengeArtwork />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-cyan-400/[0.06]" />

      <div className="relative z-10 p-5 sm:p-8 lg:p-9">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 text-2xl text-violet-500 shadow-lg shadow-violet-500/10">
              ✦
              <span className="absolute -right-1 -top-1 h-3 w-3 animate-pulse rounded-full border-2 border-[var(--surf)] bg-cyan-400" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-500">
                TODAY&apos;S CHALLENGE
              </p>

              <h3 className="mt-1 text-xl font-black tracking-tight text-[var(--ink)] sm:text-2xl">
                One minute of English
              </h3>

              <p className="mt-1 text-xs text-[var(--ink2)]">
                A small challenge. A smarter you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/25 bg-violet-500/[0.07] px-3 py-2 text-xs font-bold text-violet-500">
              <span>◷</span> 60 SEC
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-3 py-2 text-xs font-bold text-amber-500">
              <span>⚡</span> +20 XP
            </span>
          </div>
        </div>

        {/* Challenge introduction */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_190px] lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ink2)]">
                GRAMMAR QUEST
              </span>
            </div>

            <h4 className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-[var(--ink)] sm:text-3xl lg:text-4xl">
              Make your English{" "}
              <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                sound natural.
              </span>
            </h4>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--ink2)]">
              Choose the correct sentence, discover why it works, and earn
              XP as you practise.
            </p>
          </div>

          {/* Decorative challenge emblem */}
          <div className="relative mx-auto hidden h-40 w-40 items-center justify-center lg:flex">
            <div className="absolute inset-1 rounded-full border border-violet-400/25" />
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/40" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-xl" />

            <div className="relative flex h-20 w-20 rotate-3 items-center justify-center rounded-[26px] border border-violet-400/30 bg-[var(--surf)] text-4xl shadow-xl shadow-violet-500/10 transition duration-500 hover:rotate-0 hover:scale-110">
              🧠
            </div>

            <span className="absolute right-2 top-5 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/30 bg-[var(--surf)] text-sm">
              Aa
            </span>

            <span className="absolute bottom-4 left-1 flex h-8 w-8 items-center justify-center rounded-xl border border-violet-400/30 bg-[var(--surf)] text-sm">
              ✓
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="mt-7 rounded-[24px] border border-violet-400/20 bg-[var(--surf)]/90 p-5 shadow-sm backdrop-blur-sm sm:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-bold text-violet-500">
              <span>01</span>
              Grammar
            </span>

            <span className="text-xs font-semibold text-[var(--ink2)]">
              Choose one answer
            </span>
          </div>

          <h5 className="text-lg font-bold leading-relaxed text-[var(--ink)] sm:text-xl">
            Complete the sentence with the correct verb form.
          </h5>

          <div className="mt-5 rounded-2xl border border-dashed border-violet-400/35 bg-gradient-to-r from-violet-500/[0.06] to-cyan-400/[0.05] p-4 sm:p-5">
            <p className="text-base font-medium leading-9 text-[var(--ink)] sm:text-lg">
              I{" "}
              <span
                className={`mx-1 inline rounded-lg border px-2 py-1 font-mono text-sm font-bold sm:text-base ${
                  answered
                    ? isCorrect
                      ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-500"
                      : "border-rose-400/40 bg-rose-500/10 text-rose-500"
                    : "border-violet-400/30 bg-violet-500/[0.07] text-violet-500"
                }`}
              >
                {selected || "__________"}
              </span>{" "}
              English since 2024.
            </p>
          </div>

          {/* Answers */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {answers.map((answer, index) => {
              const selectedAnswer = selected === answer;
              const correct = answer === correctAnswer;

              let answerStyle =
                "border-[var(--line)] bg-[var(--surf)] text-[var(--ink)] hover:border-violet-400/60 hover:bg-violet-500/[0.06] hover:-translate-y-0.5";

              if (answered && correct) {
                answerStyle =
                  "border-emerald-400/40 bg-emerald-500/[0.09] text-emerald-600 dark:text-emerald-300";
              } else if (answered && selectedAnswer) {
                answerStyle =
                  "border-rose-400/40 bg-rose-500/[0.08] text-rose-600 dark:text-rose-300";
              } else if (answered) {
                answerStyle =
                  "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink2)] opacity-60";
              }

              return (
                <button
                  key={answer}
                  type="button"
                  disabled={answered}
                  onClick={() => handleAnswer(answer)}
                  className={`group flex min-h-[68px] items-center justify-between gap-3 rounded-2xl border p-4 text-left text-sm font-bold transition-all duration-300 ${answerStyle}`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-500/[0.08] text-xs font-black text-violet-500">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="break-words">{answer}</span>
                  </span>

                  <span className="shrink-0 text-lg">
                    {answered && correct
                      ? "✓"
                      : answered && selectedAnswer
                        ? "×"
                        : "↗"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Answer explanation */}
          {answered && (
            <div
              aria-live="polite"
              className={`mt-5 overflow-hidden rounded-2xl border ${
                isCorrect
                  ? "border-emerald-400/30 bg-emerald-500/[0.07]"
                  : "border-rose-400/30 bg-rose-500/[0.06]"
              }`}
            >
              <div className="flex gap-4 p-4 sm:p-5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl text-white ${
                    isCorrect
                      ? "bg-emerald-500 shadow-lg shadow-emerald-500/20"
                      : "bg-rose-500 shadow-lg shadow-rose-500/20"
                  }`}
                >
                  {isCorrect ? "✓" : "!"}
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className={`font-black ${
                      isCorrect
                        ? "text-emerald-600 dark:text-emerald-300"
                        : "text-rose-600 dark:text-rose-300"
                    }`}
                  >
                    {isCorrect ? "Excellent! +20 XP" : "Almost! Keep learning."}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[var(--ink2)]">
                    {isCorrect
                      ? "“Have been learning” is the present perfect continuous. We use it for an action that started in the past and is still continuing."
                      : `The correct answer is “${correctAnswer}”. Use the present perfect continuous for an action that started in the past and continues now.`}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-[var(--surf)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--ink2)]">
                      Present perfect continuous
                    </span>
                    <span className="rounded-lg bg-[var(--surf)] px-2.5 py-1.5 text-[11px] font-bold text-[var(--ink2)]">
                      Past → Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col gap-4 border-t border-violet-400/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-8 rounded-full ${
                  answered ? "bg-emerald-400" : "bg-violet-500"
                }`}
              />
              <span
                className={`h-1.5 w-2 rounded-full ${
                  answered ? "bg-emerald-400" : "bg-violet-400/40"
                }`}
              />
              <span className="h-1.5 w-2 rounded-full bg-cyan-400/40" />
            </div>

            <p className="mt-2 text-xs text-[var(--ink2)]">
              {answered
                ? isCorrect
                  ? "Challenge completed. Great job!"
                  : "Review the explanation and give it another try."
                : "One question today. One step closer to fluency."}
            </p>
          </div>

          {answered && (
            <button
              type="button"
              onClick={handleReset}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Try again
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
