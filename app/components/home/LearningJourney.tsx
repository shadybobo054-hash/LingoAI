"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const levels = [
  {
    level: "A1",
    title: "Beginner",
    description: "Start speaking with everyday words and simple phrases.",
    color: "#36CFA5",
    status: "CURRENT",
    progress: "01",
    icon: "✳",
  },
  {
    level: "A2",
    title: "Elementary",
    description: "Handle common conversations with more confidence.",
    color: "#43B9F5",
    status: "NEXT",
    progress: "02",
    icon: "↗",
  },
  {
    level: "B1",
    title: "Intermediate",
    description: "Express ideas, opinions and experiences naturally.",
    color: "#A18AFF",
    status: "UPCOMING",
    progress: "03",
    icon: "◇",
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    description: "Follow longer conversations and explain complex ideas.",
    color: "#FFAA78",
    status: "UPCOMING",
    progress: "04",
    icon: "⌁",
  },
  {
    level: "C1",
    title: "Advanced",
    description: "Use English comfortably across real situations.",
    color: "#F276AD",
    status: "UPCOMING",
    progress: "05",
    icon: "✦",
  },
];

export default function LearningJourney() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]">
      {/* Ambient colors */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[100px]" />

      <div className="page-container relative py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[600px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-500">
                  Your learning universe
                </span>
              </div>

              <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
                Your journey.
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                  Your next level.
                </span>
              </h2>

              <p className="mt-5 max-w-[440px] text-sm leading-7 text-[var(--ink2)] sm:text-base">
                Every new word takes you further. Follow your path from your
                first English sentence to confident, natural conversations.
              </p>
            </div>

            {/* Decorative journey badge */}
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surf)] px-4 py-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20">
                <svg
                  viewBox="0 0 44 44"
                  className="h-9 w-9"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="16"
                    stroke="#36CFA5"
                    strokeWidth="2"
                    strokeDasharray="5 4"
                  />
                  <circle cx="22" cy="22" r="9" fill="#36CFA5" fillOpacity=".2" />
                  <path
                    d="m18 22 3 3 6-7"
                    stroke="#36CFA5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">
                  5 learning levels
                </p>
                <p className="mt-1 text-xs text-[var(--ink2)]">
                  A1 beginner → C1 advanced
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Journey map illustration */}
          <ScrollReveal>
            <div className="relative min-h-[330px] overflow-hidden rounded-[28px] border border-white/10 bg-[#091326] p-5 sm:min-h-[400px] sm:p-7">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(100,150,255,.4) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/20 blur-[65px]" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-violet-500/20 blur-[65px]" />

              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-sky-300">
                    THE LEARNING MAP
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Five worlds to explore
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-sky-200">
                  ✧
                </span>
              </div>

              {/* SVG route */}
              <svg
                viewBox="0 0 340 290"
                className="relative mt-4 w-full"
                fill="none"
                aria-label="Illustrated path connecting five English learning levels"
              >
                <defs>
                  <linearGradient id="journey-line" x1="50" y1="30" x2="290" y2="270">
                    <stop stopColor="#36CFA5" />
                    <stop offset=".4" stopColor="#43B9F5" />
                    <stop offset=".7" stopColor="#A18AFF" />
                    <stop offset="1" stopColor="#F276AD" />
                  </linearGradient>
                </defs>

                <path
                  d="M68 38 C155 38 180 70 180 96 S85 116 85 150 S255 175 255 207 S170 246 170 266"
                  stroke="#FFFFFF"
                  strokeOpacity=".09"
                  strokeWidth="10"
                  strokeLinecap="round"
                />

                <path
                  d="M68 38 C155 38 180 70 180 96 S85 116 85 150 S255 175 255 207 S170 246 170 266"
                  stroke="url(#journey-line)"
                  strokeWidth="2.5"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                />

                {[
                  { x: 68, y: 38, color: "#36CFA5", label: "A1" },
                  { x: 180, y: 96, color: "#43B9F5", label: "A2" },
                  { x: 85, y: 150, color: "#A18AFF", label: "B1" },
                  { x: 255, y: 207, color: "#FFAA78", label: "B2" },
                  { x: 170, y: 266, color: "#F276AD", label: "C1" },
                ].map((node, index) => (
                  <g key={node.label}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="23"
                      fill={node.color}
                      fillOpacity=".12"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="16"
                      fill="#0B1730"
                      stroke={node.color}
                      strokeWidth="1.5"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      fill={node.color}
                      fontSize="11"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {node.label}
                    </text>
                    {index === 0 && (
                      <circle
                        cx={node.x + 13}
                        cy={node.y - 13}
                        r="5"
                        fill="#36CFA5"
                        stroke="#0B1730"
                        strokeWidth="2"
                      />
                    )}
                  </g>
                ))}

                <circle cx="286" cy="55" r="2" fill="#43B9F5" />
                <circle cx="40" cy="225" r="3" fill="#A18AFF" />
                <path
                  d="m272 72 4-8 4 8-4-2-4 2Z"
                  fill="#43B9F5"
                  fillOpacity=".8"
                />
                <path
                  d="m110 224 4-8 4 8-4-2-4 2Z"
                  fill="#A18AFF"
                  fillOpacity=".8"
                />
              </svg>

              <div className="relative mt-2 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs font-medium text-white/80">
                    Every step counts
                  </p>
                  <p className="mt-1 text-[10px] text-white/40">
                    Keep learning. Keep growing.
                  </p>
                </div>
                <div className="flex gap-1">
                  {levels.map((level) => (
                    <span
                      key={level.level}
                      className="h-1.5 w-5 rounded-full"
                      style={{ backgroundColor: level.color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Level timeline */}
          <div className="relative">
            <div className="absolute bottom-8 left-[23px] top-8 w-px bg-gradient-to-b from-emerald-400 via-sky-400 via-violet-400 to-pink-400 opacity-40" />

            <div className="space-y-3">
              {levels.map((item, index) => (
                <ScrollReveal key={item.level}>
                  <Link
                    href="/lessons"
                    className="group relative block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surf)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_12px_35px_rgba(30,50,90,0.09)] sm:p-5"
                  >
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                      style={{ backgroundColor: item.color }}
                    />

                    <div className="relative flex items-center gap-4">
                      {/* Timeline node */}
                      <div className="relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl border text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                        style={{
                          color: item.color,
                          borderColor: `${item.color}50`,
                          backgroundColor: `${item.color}14`,
                          boxShadow: item.status === "CURRENT"
                            ? `0 0 25px ${item.color}18`
                            : "none",
                        }}
                      >
                        {item.level}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                            {item.title}
                          </h3>

                          {item.status === "CURRENT" && (
                            <span
                              className="rounded-full px-2 py-1 font-mono text-[9px] font-bold tracking-wider"
                              style={{
                                color: item.color,
                                backgroundColor: `${item.color}18`,
                              }}
                            >
                              CURRENT
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs leading-5 text-[var(--ink2)] sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex">
                        <span
                          className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: item.color }}
                        >
                          →
                        </span>
                        <span className="font-mono text-[9px] text-[var(--ink3)]">
                          STEP {item.progress}
                        </span>
                      </div>
                    </div>

                    <div className="relative ml-[62px] mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3 sm:hidden">
                      <span
                        className="font-mono text-[9px] font-semibold tracking-wider"
                        style={{ color: item.color }}
                      >
                        STEP {item.progress}
                      </span>
                      <span
                        className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: item.color }}
                      >
                        Explore level →
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-dashed border-[var(--line)] p-5 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-500">
                ✦
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">
                  Ready for your next adventure?
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--ink2)]">
                  Explore your lessons and keep moving forward.
                </p>
              </div>
            </div>

            <Link
              href="/lessons"
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#3D9BFF] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2586eb] sm:self-auto"
            >
              Explore lessons <span>↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
