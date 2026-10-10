
"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import QuickChallenge from "../QuickChallenge";

function LearningWorldBackground() {
  const points = [
    [300, 340],
    [490, 315],
    [710, 325],
    [930, 340],
    [315, 610],
    [555, 610],
    [820, 615],
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Violet and cyan atmosphere */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-500/[0.10] blur-[100px]" />
      <div className="absolute -right-28 top-48 h-96 w-96 rounded-full bg-cyan-400/[0.09] blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/[0.07] blur-[100px]" />

      <svg
        viewBox="0 0 1200 850"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        <defs>
          <pattern
            id="learning-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              stroke="#8B5CF6"
              strokeOpacity=".16"
              strokeWidth=".7"
            />
          </pattern>

          <linearGradient id="learning-gradient">
            <stop stopColor="#A78BFA" />
            <stop offset=".5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>

          <radialGradient id="learning-glow">
            <stop stopColor="#8B5CF6" stopOpacity=".17" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1200" height="850" fill="url(#learning-grid)" />

        {/* Learning world orbit */}
        <ellipse
          cx="600"
          cy="420"
          rx="480"
          ry="280"
          stroke="url(#learning-gradient)"
          strokeOpacity=".25"
          strokeDasharray="4 10"
        />
        <ellipse
          cx="600"
          cy="420"
          rx="390"
          ry="220"
          stroke="#8B5CF6"
          strokeOpacity=".18"
        />
        <circle cx="600" cy="420" r="300" fill="url(#learning-glow)" />

        {/* Open book */}
        <g
          transform="translate(95 230) rotate(-10 110 90)"
          stroke="url(#learning-gradient)"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M15 20Q65 0 110 30V160Q65 130 15 150Z" />
          <path d="M110 30Q155 0 205 20V150Q155 130 110 160Z" />
          <path d="M110 30V160" />
          <path d="M32 45Q65 35 88 49M32 65Q65 55 88 69M32 85Q65 75 88 89" />
          <path d="M130 48Q160 35 188 45M130 68Q160 55 188 65M130 88Q160 75 188 85" />
          <path d="M32 108Q65 98 88 112M130 110Q160 97 188 107" stroke="#22D3EE" />
        </g>

        {/* Pencil */}
        <g
          transform="translate(960 150) rotate(32)"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M0 20L18 2L100 84L82 102Z" />
          <path d="M0 20L-5 42L18 2" />
          <path d="M82 102L105 107L100 84" />
          <path d="M18 2L100 84" stroke="#22D3EE" />
          <path d="M9 13L91 95" strokeOpacity=".5" />
        </g>

        {/* Conversation bubble */}
        <g
          transform="translate(930 430)"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <path d="M0 0Q0-12 14-12H110Q124-12 124 2V54Q124 68 110 68H42L18 87V68H14Q0 68 0 54Z" />
          <path d="M22 17H100M22 34H80" stroke="#22D3EE" strokeLinecap="round" />
          <circle cx="102" cy="48" r="3" fill="#8B5CF6" stroke="none" />
        </g>

        {/* English letter tiles */}
        <g transform="translate(120 570)">
          <rect
            width="58"
            height="58"
            rx="12"
            fill="#8B5CF6"
            fillOpacity=".07"
            stroke="#8B5CF6"
            strokeOpacity=".8"
          />
          <path
            d="M17 39L29 15L41 39M21 31H37"
            stroke="#A78BFA"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect
            x="72"
            y="20"
            width="58"
            height="58"
            rx="12"
            fill="#22D3EE"
            fillOpacity=".07"
            stroke="#22D3EE"
            strokeOpacity=".8"
          />
          <path
            d="M89 37H111M89 37V60H111M89 48H106"
            stroke="#22D3EE"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect
            x="144"
            y="-2"
            width="58"
            height="58"
            rx="12"
            fill="#6366F1"
            fillOpacity=".07"
            stroke="#818CF8"
            strokeOpacity=".8"
          />
          <path
            d="M160 15V39M160 15H177M160 27H173M160 39H177"
            stroke="#818CF8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Notebook */}
        <g
          transform="translate(880 635) rotate(-8)"
          stroke="#818CF8"
          strokeWidth="2"
        >
          <rect
            width="150"
            height="105"
            rx="12"
            fill="#818CF8"
            fillOpacity=".06"
          />
          <path d="M25 0V105" stroke="#A78BFA" />
          <path
            d="M42 25H130M42 45H118M42 65H126M42 85H105"
            stroke="#22D3EE"
            strokeOpacity=".8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="20" r="3" fill="#8B5CF6" stroke="none" />
          <circle cx="12" cy="40" r="3" fill="#8B5CF6" stroke="none" />
          <circle cx="12" cy="60" r="3" fill="#8B5CF6" stroke="none" />
          <circle cx="12" cy="80" r="3" fill="#8B5CF6" stroke="none" />
        </g>

        {/* Paths connecting learning objects */}
        <path
          d="M300 340C380 280 420 350 490 315S620 260 710 325S850 370 930 340"
          stroke="url(#learning-gradient)"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          strokeOpacity=".7"
        />
        <path
          d="M315 610C410 560 470 650 555 610S720 550 820 615"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeOpacity=".6"
        />

        {points.map(([cx, cy], index) => (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r="10"
              fill="#8B5CF6"
              fillOpacity=".13"
            />
            <circle cx={cx} cy={cy} r="3" fill="#22D3EE" />
          </g>
        ))}

        {/* Small decorative stars */}
        <path
          d="M720 120V150M705 135H735"
          stroke="#A78BFA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M420 700V720M410 710H430"
          stroke="#22D3EE"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1080 300V320M1070 310H1090"
          stroke="#818CF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Glowing particles */}
      <span className="absolute left-[18%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_18px_#8B5CF6]" />
      <span className="absolute right-[25%] top-[35%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_16px_#22D3EE]" />
      <span className="absolute bottom-[20%] left-[42%] h-2 w-2 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_18px_#6366F1]" />
    </div>
  );
}

export default function ContinueLearning() {
  return (
    <section className="relative isolate overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]">
      <LearningWorldBackground />

      {/* Keep the illustrations subtle behind the content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg)]/20 via-transparent to-[var(--bg)]/35" />

      <div className="page-container relative z-10 py-14 sm:py-18 lg:py-22">
        <ScrollReveal>
          {/* Section heading */}
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/[0.08] px-3 py-1.5 text-xs font-bold tracking-wide text-violet-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
                YOUR LEARNING JOURNEY
              </div>

              <p className="mb-2 text-sm font-semibold text-[var(--ink2)]">
                Continue learning
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
                Your next{" "}
                <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  step.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--ink2)] sm:text-base">
                Every lesson brings you closer to speaking English with
                confidence. Pick up where you left off.
              </p>
            </div>

            <Link
              href="/lessons"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-violet-400/30 bg-[var(--surf)] px-5 py-3 text-sm font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/10"
            >
              View all lessons
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Main learning panel */}
          <div className="group relative overflow-hidden rounded-[30px] border border-violet-400/25 bg-[var(--surf)] shadow-[0_20px_80px_-35px_rgba(124,58,237,0.25)] transition duration-500 hover:border-violet-400/50">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] via-transparent to-cyan-400/[0.07]" />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* Current lesson */}
              <div className="relative p-6 sm:p-9 lg:p-10">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/[0.08] px-3 py-1.5 text-xs font-bold text-emerald-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    IN PROGRESS
                  </span>

                  <span className="rounded-full border border-violet-400/25 bg-violet-500/[0.07] px-3 py-1.5 text-xs font-bold text-violet-500">
                    A1 · Beginner
                  </span>
                </div>

                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 to-indigo-500/10 text-3xl shadow-inner shadow-violet-500/10 transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                    📘
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-500">
                      Lesson 02
                    </p>

                    <h3 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
                      Present Perfect
                    </h3>

                    <p className="mt-2 text-sm text-[var(--ink2)]">
                      Build sentences and use English more naturally.
                    </p>
                  </div>
                </div>

                <p className="max-w-xl text-sm leading-7 text-[var(--ink2)]">
                  Learn how to talk about experiences and actions connected
                  to the present. Review the examples, practise the grammar,
                  and test what you know.
                </p>

                {/* Lesson steps */}
                <div className="my-7 rounded-2xl border border-violet-400/20 bg-violet-500/[0.035] p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h4 className="font-bold text-[var(--ink)]">
                      Your lesson path
                    </h4>
                    <span className="text-xs font-bold text-violet-500">
                      1 of 4 steps
                    </span>
                  </div>

                  <div className="relative space-y-4">
                    <div className="absolute bottom-4 left-[13px] top-4 w-px bg-gradient-to-b from-violet-500 via-indigo-400 to-cyan-400 opacity-40" />

                    {[
                      {
                        number: "01",
                        title: "Learn the rule",
                        detail: "Understand the grammar",
                        active: true,
                      },
                      {
                        number: "02",
                        title: "Explore examples",
                        detail: "See English in context",
                        active: false,
                      },
                      {
                        number: "03",
                        title: "Practise vocabulary",
                        detail: "Learn useful new words",
                        active: false,
                      },
                      {
                        number: "04",
                        title: "Take the quiz",
                        detail: "Check your understanding",
                        active: false,
                      },
                    ].map((step) => (
                      <div
                        key={step.number}
                        className="relative flex items-center gap-3"
                      >
                        <div
                          className={`z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-black ${
                            step.active
                              ? "border-violet-400 bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                              : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)]"
                          }`}
                        >
                          {step.number}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-sm font-bold ${
                              step.active
                                ? "text-violet-500"
                                : "text-[var(--ink)]"
                            }`}
                          >
                            {step.title}
                          </p>
                          <p className="mt-0.5 text-xs text-[var(--ink2)]">
                            {step.detail}
                          </p>
                        </div>

                        {step.active && (
                          <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] font-bold text-violet-500">
                            CURRENT
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[var(--ink2)]">
                    Lesson progress
                  </span>
                  <span className="text-sm font-black text-violet-500">
                    20%
                  </span>
                </div>

                <div
                  className="mb-7 h-2.5 overflow-hidden rounded-full bg-violet-500/10"
                  role="progressbar"
                  aria-label="Lesson progress"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_15px_rgba(139,92,246,0.35)]" />
                </div>

                <Link
                  href="/lessons"
                  className="group/button inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500 px-6 py-4 font-bold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30 sm:w-auto"
                >
                  Continue lesson
                  <span className="transition-transform group-hover/button:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Progress dashboard */}
              <div className="relative isolate overflow-hidden border-t border-violet-400/20 bg-gradient-to-br from-violet-500/[0.09] via-indigo-500/[0.06] to-cyan-400/[0.08] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                {/* Decorative dashboard background */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-violet-400/20" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-cyan-400/20" />
                <div className="pointer-events-none absolute bottom-[-70px] left-[-50px] h-56 w-56 rounded-full bg-indigo-500/[0.08] blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-500">
                        YOUR PROGRESS
                      </p>
                      <h3 className="mt-2 text-xl font-black text-[var(--ink)]">
                        Keep it going!
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-500/10 text-2xl">
                      ✨
                    </div>
                  </div>

                  {/* Streak card */}
                  <div className="mb-4 rounded-2xl border border-orange-400/20 bg-orange-400/[0.07] p-5 transition duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-[var(--ink2)]">
                          Learning streak
                        </p>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-4xl font-black text-[var(--ink)]">
                            7
                          </span>
                          <span className="text-sm font-bold text-orange-500">
                            days
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[var(--ink2)]">
                          A little practice every day adds up.
                        </p>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/10 text-3xl">
                        🔥
                      </div>
                    </div>

                    <div className="mt-5 flex gap-2">
                      {["M", "T", "W", "T", "F", "S", "S"].map(
                        (day, index) => (
                          <div
                            key={`${day}-${index}`}
                            className={`flex h-8 flex-1 items-center justify-center rounded-lg text-xs font-bold ${
                              index < 5
                                ? "bg-gradient-to-br from-orange-400 to-amber-500 text-white"
                                : "border border-orange-400/20 bg-orange-400/[0.06] text-[var(--ink2)]"
                            }`}
                          >
                            {index < 5 ? "✓" : day}
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* XP and completed lessons */}
                  <div className="mb-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.07] p-4 transition duration-300 hover:-translate-y-1">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                        ⚡
                      </div>
                      <p className="text-2xl font-black text-[var(--ink)]">
                        240
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[var(--ink2)]">
                        Total XP
                      </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4 transition duration-300 hover:-translate-y-1">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                        📚
                      </div>
                      <p className="text-2xl font-black text-[var(--ink)]">
                        3/5
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[var(--ink2)]">
                        Lessons done
                      </p>
                    </div>
                  </div>

                  {/* Encouragement */}
                  <div className="flex items-start gap-3 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.06] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-xl">
                      🎯
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--ink)]">
                        You’re on a good streak!
                      </p>
                      <p className="mt-1 text-xs leading-6 text-[var(--ink2)]">
                        Keep practising and take one more step towards your
                        English goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick challenge */}
          <div className="relative mt-6">
            <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-violet-500/[0.04] blur-2xl" />
            <div className="relative">
              <QuickChallenge />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
