
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { levels, topics, type Lesson, type Level } from "../data";
import { TopicButton } from "./LessonButtons";

const topicOptions = topics.filter((topic) => topic !== "Everything");
const palette = ["#3D9BFF", "#8B5CF6", "#10B981", "#F59E0B", "#F472B6", "#06B6D4"];

function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function Doodle({
  type,
  color,
  className = "",
}: {
  type: number;
  color: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ color }}
    >
      {type % 5 === 0 && (
        <>
          <path d="M10 27 Q30 16 50 30 V80 Q30 66 10 78 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M90 27 Q70 16 50 30 V80 Q70 66 90 78 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M22 43 L38 46 M22 54 L38 57 M62 46 L78 43 M62 57 L78 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {type % 5 === 1 && (
        <>
          <path d="M14 22 H86 V64 H53 L34 81 V64 H14 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M29 37 H71 M29 49 H60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="76" cy="78" r="8" fill="currentColor" />
        </>
      )}
      {type % 5 === 2 && (
        <>
          <path d="M18 56 V43 A32 32 0 0 1 82 43 V56" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <rect x="13" y="48" width="19" height="30" rx="8" stroke="currentColor" strokeWidth="4" />
          <rect x="68" y="48" width="19" height="30" rx="8" stroke="currentColor" strokeWidth="4" />
          <path d="M68 75 Q60 89 45 84" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {type % 5 === 3 && (
        <>
          <path d="M24 74 L31 53 L66 18 Q73 11 81 19 Q88 26 80 33 L45 68 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
          <path d="M31 53 L45 68 M66 18 L80 33" stroke="currentColor" strokeWidth="3" />
          <path d="M15 19 L18 29 M10 25 L20 23 M77 79 L84 84" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {type % 5 === 4 && (
        <>
          <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="4" />
          <path d="M39 40 Q50 29 61 40 M39 59 Q50 70 61 59" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="48" r="3" fill="currentColor" />
          <circle cx="60" cy="48" r="3" fill="currentColor" />
          <path d="M50 9 V16 M50 84 V91 M9 50 H16 M84 50 H91" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function TopicOrb({ color, type }: { color: string; type: number }) {
  return (
    <div
      className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[25px] transition duration-500 group-hover:rotate-[-7deg] group-hover:scale-110 sm:h-[88px] sm:w-[88px]"
      style={{
        background: `linear-gradient(145deg, ${color}32, ${color}0A)`,
        border: `1px solid ${color}45`,
        boxShadow: `inset 0 0 25px ${color}12, 0 8px 25px ${color}12`,
      }}
    >
      <div
        className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-4 border-[var(--surf)]"
        style={{ backgroundColor: color }}
      />
      <Doodle type={type} color={color} className="h-12 w-12 sm:h-14 sm:w-14" />
    </div>
  );
}

export function TopicFilterBar({
  selectedTopic,
  onSelectAll,
  onSelectTopic,
}: {
  selectedTopic: string | null;
  onSelectAll: () => void;
  onSelectTopic: (topic: string) => void;
}) {
  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-12 sm:px-8 lg:px-10">
      <ScrollReveal>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3D9BFF]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#3D9BFF]" />
              Explore topics
            </div>
            <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
              Find your situation.
            </h2>
          </div>
          <p className="max-w-[390px] text-sm leading-7 text-[var(--ink2)] sm:text-right">
            Choose a topic that matches your goals, or explore everything
            available across your English journey.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3">
          <TopicButton label="All topics" active={!selectedTopic} onClick={onSelectAll} />
          {topicOptions.map((topic) => (
            <TopicButton
              key={topic}
              label={topic}
              active={selectedTopic === topic}
              onClick={() => onSelectTopic(topic)}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function LessonLibrary({
  filteredLessons,
  selectedTopic,
  showAll,
  onToggleShowAll,
}: {
  filteredLessons: Lesson[];
  selectedTopic: string | null;
  showAll: boolean;
  onToggleShowAll: () => void;
}) {
  const visibleLessons = showAll ? filteredLessons : filteredLessons.slice(0, 10);

  return (
    <section className="mx-auto max-w-[1380px] overflow-hidden px-5 pb-20 sm:px-8 lg:px-10">
      <ScrollReveal>
        <div className="relative border-t border-[var(--line)]">
          <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#3D9BFF]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-[45%] h-72 w-72 rounded-full bg-[#8B5CF6]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-20 left-[35%] h-60 w-60 rounded-full bg-[#10B981]/10 blur-3xl" />

          <div className="relative flex flex-wrap items-center justify-between gap-3 py-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink)]">
                Your learning journey
              </span>
              <span className="ml-3 font-mono text-[10px] text-[#3D9BFF]">
                {filteredLessons.length} lessons
              </span>
            </div>
            <span className="rounded-full border border-[var(--line)] bg-[var(--surf2)] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink2)]">
              {selectedTopic ?? "All topics"}
            </span>
          </div>

          <div className="relative">
            {visibleLessons.length > 0 && (
              <div className="absolute bottom-10 left-[19px] top-10 w-[3px] rounded-full bg-gradient-to-b from-[#3D9BFF] via-[#8B5CF6] via-50% to-[#10B981] sm:left-1/2 sm:-translate-x-1/2" />
            )}

            <div className="space-y-6 sm:space-y-10">
              {visibleLessons.map((lesson, index) => {
                const color = lesson.color || palette[index % palette.length];
                const left = index % 2 === 1;

                return (
                  <ScrollReveal key={lesson.id}>
                    <div className="relative grid grid-cols-[40px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[1fr_76px_1fr] sm:gap-5">
                      <div className="relative z-10 flex justify-center sm:col-start-2 sm:row-start-1">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border-[4px] border-[var(--bg)] font-mono text-[10px] font-bold text-white shadow-lg transition-transform duration-300 hover:scale-125 sm:h-12 sm:w-12"
                          style={{
                            backgroundColor: color,
                            boxShadow: `0 0 0 5px ${color}18, 0 8px 22px ${color}45`,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <Link
                        href={lesson.href}
                        className={`group relative min-w-0 overflow-hidden rounded-[27px] border p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-7 ${
                          left ? "sm:col-start-1 sm:row-start-1" : "sm:col-start-3 sm:row-start-1"
                        }`}
                        style={{
                          borderColor: `${color}50`,
                          background: `linear-gradient(135deg, ${color}1C 0%, var(--surf) 58%, ${color}0B 100%)`,
                          boxShadow: `0 12px 40px ${color}0D`,
                        }}
                      >
                        <div
                          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"
                          style={{ backgroundColor: `${color}20` }}
                        />
                        <div
                          className="pointer-events-none absolute -bottom-10 left-1/3 h-24 w-24 rounded-full blur-2xl"
                          style={{ backgroundColor: `${color}18` }}
                        />
                        <div
                          className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                          style={{ backgroundColor: color }}
                        />

                        <div className="relative z-10 flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span
                                className="rounded-full border px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em]"
                                style={{
                                  color,
                                  borderColor: `${color}65`,
                                  backgroundColor: `${color}17`,
                                }}
                              >
                                {lesson.level}
                              </span>
                              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink2)]">
                                CHAPTER {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold tracking-tight text-[var(--ink)] transition-colors group-hover:text-[#3D9BFF] sm:text-2xl">
                              {lesson.title}
                            </h3>
                          </div>
                          <TopicOrb color={color} type={index} />
                        </div>

                        <p className="relative z-10 mt-4 text-xs leading-6 text-[var(--ink2)] sm:text-sm sm:leading-7">
                          {lesson.description}
                        </p>

                        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                          {lesson.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tag}
                              className="rounded-lg border px-2.5 py-1.5 text-[10px] font-medium"
                              style={{
                                color: tagIndex === 0 ? color : "var(--ink2)",
                                borderColor: `${color}${tagIndex === 0 ? "40" : "20"}`,
                                backgroundColor: `${color}${tagIndex === 0 ? "12" : "06"}`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          className="relative z-10 mt-5 flex items-center justify-between border-t pt-4"
                          style={{ borderColor: `${color}30` }}
                        >
                          <span className="rounded-full px-3 py-1.5 font-mono text-[10px]" style={{ color, backgroundColor: `${color}12` }}>
                            ◷ {lesson.minutes} MIN
                          </span>
                          <span className="flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 group-hover:gap-4" style={{ backgroundColor: color }}>
                            Start lesson <span className="text-base">→</span>
                          </span>
                        </div>
                      </Link>

                      <div className={`pointer-events-none absolute hidden sm:block ${left ? "right-[3%] top-1/2" : "left-[3%] top-1/2"}`}>
                        <Doodle
                          type={index + 2}
                          color={color}
                          className="h-20 w-20 opacity-45 transition duration-500 hover:rotate-12"
                        />
                      </div>

                      <div
                        className={`pointer-events-none absolute hidden h-3 w-3 rounded-full sm:block ${left ? "right-[15%] top-5" : "left-[15%] bottom-5"}`}
                        style={{ backgroundColor: color, boxShadow: `0 0 22px ${color}` }}
                      />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {filteredLessons.length === 0 && (
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--surf2)] px-5 py-16 text-center">
                <Doodle type={0} color="#3D9BFF" className="mx-auto mb-4 h-16 w-16" />
                <h3 className="font-display text-2xl text-[var(--ink)]">No lessons found</h3>
                <p className="mt-2 text-sm text-[var(--ink2)]">Try choosing another topic.</p>
              </div>
            )}
          </div>

          {filteredLessons.length > 10 && (
            <div className="flex justify-center pt-10">
              <button
                type="button"
                onClick={onToggleShowAll}
                className="rounded-full border border-[var(--line)] bg-[var(--surf)] px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3D9BFF] hover:bg-[#3D9BFF] hover:text-white"
              >
                {showAll ? "Show less ↑" : "Show all lessons ↓"}
              </button>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function BottomCta({
  selectedLevel,
  selectedLevelInfo,
  onLevelChange,
}: {
  selectedLevel: Level;
  selectedLevelInfo: {
    title: string;
    subtitle: string;
    description: string;
  };
  onLevelChange: (level: Level) => void;
}) {
  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-10 sm:px-8 lg:px-10">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1025] px-6 py-10 text-white shadow-2xl shadow-[#3D9BFF]/10 sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#3D9BFF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#10B981]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-10 h-52 w-52 rounded-full border border-white/10" />
          <Doodle type={0} color="#65B5FF" className="pointer-events-none absolute bottom-5 right-[28%] hidden h-24 w-24 opacity-20 md:block" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[650px]">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#65B5FF]">
                <span className="h-2 w-2 rounded-full bg-[#65B5FF]" />
                Keep moving
              </div>
              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                {selectedLevelInfo.title || "Keep learning."}
              </h2>
              <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/65">
                {selectedLevelInfo.description || "Build your English step by step through practical experiences."}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                {selectedLevelInfo.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-[390px] lg:justify-end">
              {levels.map((level, index) => {
                const active = selectedLevel === level;
                const color = palette[index];

                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => onLevelChange(level)}
                    className={`rounded-full border px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 ${
                      active
                        ? "border-white bg-white text-[#0B1025]"
                        : "border-white/20 bg-white/5 text-white/65 hover:border-white/50 hover:text-white"
                    }`}
                    style={active ? { boxShadow: `0 0 24px ${color}70` } : undefined}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1380px] flex-col gap-5 border-t border-[var(--line)] px-5 pb-10 pt-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
      <div>
        <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ink)]">
          LingoAI <span className="ml-2 text-[#3D9BFF]">/</span>
          <span className="ml-2 text-[var(--ink2)]">English learning system</span>
        </div>
        <p className="mt-2 text-xs text-[var(--ink2)]">
          Every lesson brings you closer to confidence.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {[
          { href: "/practice", label: "Practice" },
          { href: "/ai-tutor", label: "AI Tutor" },
          { href: "/dashboard", label: "Dashboard" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink2)] transition-colors hover:text-[#3D9BFF]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
