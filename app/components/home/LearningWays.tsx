"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const learningWays = [
  {
    number: "01",
    title: "Vocabulary",
    label: "Discover new words",
    description: "Build a vocabulary you can actually use.",
    color: "#22C997",
    soft: "rgba(34,201,151,0.12)",
    href: "/vocabulary",
    icon: "Aa",
    tag: "WORD LAB",
    visual: "vocabulary",
  },
  {
    number: "02",
    title: "Listening",
    label: "Train your ears",
    description: "Understand real conversations and natural English.",
    color: "#36B9F5",
    soft: "rgba(54,185,245,0.12)",
    href: "/listening",
    icon: "♫",
    tag: "AUDIO SPACE",
    visual: "listening",
  },
  {
    number: "03",
    title: "Speaking",
    label: "Find your voice",
    description: "Speak with confidence, one conversation at a time.",
    color: "#FF9369",
    soft: "rgba(255,147,105,0.12)",
    href: "/ai-tutor",
    icon: "✳",
    tag: "SPEAKING CLUB",
    visual: "speaking",
  },
  {
    number: "04",
    title: "Grammar",
    label: "Build better sentences",
    description: "Learn the patterns that make English feel natural.",
    color: "#9A86FF",
    soft: "rgba(154,134,255,0.13)",
    href: "/practice",
    icon: "∑",
    tag: "GRAMMAR LAB",
    visual: "grammar",
  },
];

function LearningVisual({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  return (
    <div className="relative flex h-[155px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#080F22] sm:h-[175px]">
      <div
        className="absolute h-36 w-36 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: color }}
      />

      <svg
        viewBox="0 0 300 160"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${type}`}
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill={color} opacity=".22" />
          </pattern>
        </defs>

        <rect width="300" height="160" fill={`url(#grid-${type})`} />

        <path
          d="M-10 125 C55 125 55 35 120 65 S210 135 310 28"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity=".55"
        />

        <circle cx="44" cy="42" r="3" fill={color} opacity=".7" />
        <circle cx="250" cy="119" r="4" fill={color} opacity=".8" />
        <circle cx="240" cy="36" r="2" fill="white" opacity=".5" />
      </svg>

      {type === "vocabulary" && (
        <>
          <div className="absolute left-[13%] top-7 rotate-[-12deg] rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs text-emerald-200">
            curious
          </div>
          <div className="absolute bottom-6 right-[12%] rotate-[9deg] rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/70">
            discover
          </div>
          <div
            className="relative flex h-[82px] w-[82px] rotate-[-5deg] items-center justify-center rounded-[25px] border text-3xl font-bold text-white shadow-2xl transition duration-500 group-hover:rotate-0 group-hover:scale-110"
            style={{
              borderColor: `${color}65`,
              backgroundColor: `${color}20`,
              boxShadow: `0 0 45px ${color}20`,
            }}
          >
            Aa
            <span
              className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-4 border-[#080F22]"
              style={{ backgroundColor: color }}
            />
          </div>
        </>
      )}

      {type === "listening" && (
        <div className="relative flex h-20 items-center justify-center gap-[5px]">
          {Array.from({ length: 23 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full transition-all duration-500 group-hover:scale-y-125"
              style={{
                height: `${14 + Math.abs(Math.sin(i * 0.65)) * 55}px`,
                backgroundColor: color,
                opacity: 0.45 + Math.abs(Math.sin(i * 0.4)) * 0.55,
              }}
            />
          ))}
          <div
            className="absolute -left-5 -top-4 flex h-10 w-10 items-center justify-center rounded-full border bg-[#0D1930] text-lg text-white"
            style={{ borderColor: `${color}80` }}
          >
            ♫
          </div>
        </div>
      )}

      {type === "speaking" && (
        <div className="relative">
          <div
            className="absolute -inset-5 rounded-full border border-dashed"
            style={{ borderColor: `${color}60` }}
          />
          <div
            className="absolute -inset-3 rounded-full border"
            style={{ borderColor: `${color}30` }}
          />
          <div
            className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[26px] border text-3xl text-white shadow-xl"
            style={{
              borderColor: `${color}80`,
              backgroundColor: `${color}20`,
            }}
          >
            ✳
          </div>
          <span
            className="absolute -right-7 top-0 rounded-lg border px-2 py-1 text-[10px] text-white"
            style={{
              borderColor: `${color}55`,
              backgroundColor: "#11182A",
            }}
          >
            Hello!
          </span>
        </div>
      )}

      {type === "grammar" && (
        <div className="relative flex items-center gap-2">
          <div className="absolute -left-7 top-0 h-14 w-14 rounded-full border border-dashed" style={{ borderColor: `${color}70` }} />
          {[
            { text: "I", rotate: "-8deg" },
            { text: "am", rotate: "4deg" },
            { text: "ready", rotate: "-3deg" },
          ].map((item) => (
            <div
              key={item.text}
              className="rounded-xl border px-3 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 group-hover:-translate-y-2"
              style={{
                transform: `rotate(${item.rotate})`,
                borderColor: `${color}60`,
                backgroundColor: `${color}18`,
              }}
            >
              {item.text}
            </div>
          ))}
          <span
            className="absolute -bottom-7 right-1 text-xl"
            style={{ color }}
          >
            ✓
          </span>
        </div>
      )}

      <span className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.2em] text-white/35">
        LEARNING VISUAL / {type.toUpperCase()}
      </span>
    </div>
  );
}

export default function LearningWays() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px]" />

      <div className="page-container relative py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[620px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Your learning universe
                </span>
              </div>

              <h2 className="font-display text-4xl font-medium tracking-[-0.045em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
                One language.
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  Many ways to grow.
                </span>
              </h2>

              <p className="mt-5 max-w-[470px] text-sm leading-7 text-[var(--ink2)] sm:text-base">
                Explore different learning worlds, discover your strengths,
                and turn everyday English into a real-life skill.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-2xl border border-[var(--line)] bg-[var(--surf)] px-4 py-3 md:self-auto">
              <div className="flex -space-x-2">
                {learningWays.map((item) => (
                  <span
                    key={item.number}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--surf)] text-xs font-bold text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--ink)]">
                  4 learning paths
                </p>
                <p className="mt-0.5 text-[10px] text-[var(--ink2)]">
                  Choose your next adventure
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative mt-12 grid gap-5 sm:grid-cols-2 xl:gap-6">
          {learningWays.map((item, index) => (
            <ScrollReveal key={item.title}>
              <Link
                href={item.href}
                className="group relative block h-full overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--surf)] p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
                style={{
                  boxShadow: "0 8px 35px rgba(20,40,80,0.04)",
                }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: item.color }}
                />

                <div className="relative">
                  <LearningVisual type={item.visual} color={item.color} />

                  <div className="px-3 pb-3 pt-5 sm:px-4">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="font-mono text-[10px] font-semibold tracking-[0.16em]"
                        style={{ color: item.color }}
                      >
                        {item.tag}
                      </span>

                      <span className="font-mono text-xs text-[var(--ink3)]">
                        PATH {item.number}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[var(--ink)] transition-colors duration-300 sm:text-[28px]">
                      {item.label}
                    </h3>

                    <p className="mt-2 max-w-[390px] text-sm leading-6 text-[var(--ink2)]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.icon}
                        </span>
                        <span className="text-xs font-medium text-[var(--ink)]">
                          Explore {item.title}
                        </span>
                      </div>

                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent group-hover:text-white"
                        style={{
                          borderColor: `${item.color}55`,
                          color: item.color,
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-dashed border-[var(--line)] px-5 py-5 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-500">
                ✦
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">
                  Your next breakthrough starts here.
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--ink2)]">
                  Pick a path and keep building your English skills.
                </p>
              </div>
            </div>

            <Link
              href="/practice"
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#3D9BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2586eb] sm:self-auto"
            >
              Start practicing <span>↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
