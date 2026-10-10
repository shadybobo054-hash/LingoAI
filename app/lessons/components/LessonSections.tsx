
"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

import { levels, topics, type Lesson, type Level } from "../data";
import { TopicButton } from "./LessonButtons";

const topicOptions = topics.filter((topic) => topic !== "Everything");

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "right",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "right" | "left" | "up";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    right: "translateX(38px)",
    left: "translateX(-38px)",
    up: "translateY(25px)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : hiddenTransform,
        transition: `opacity 650ms ease ${delay}ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
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
    <section className="mx-auto max-w-[1380px] px-5 pb-16 sm:px-8 lg:px-10">
      <ScrollReveal>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3d9bff]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#3d9bff]" />
              Explore topics
            </div>

            <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
              Find your situation.
            </h2>
          </div>

          <p className="max-w-[390px] font-sans text-sm leading-7 text-[var(--ink2)] sm:text-right">
            Choose a topic that matches your goals, or explore everything
            available across your English journey.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3">
          <ScrollReveal delay={0}>
            <TopicButton
              label="All topics"
              active={!selectedTopic}
              onClick={onSelectAll}
            />
          </ScrollReveal>

          {topicOptions.map((topic, index) => (
            <ScrollReveal key={topic} delay={index * 65}>
              <TopicButton
                label={topic}
                active={selectedTopic === topic}
                onClick={() => onSelectTopic(topic)}
              />
            </ScrollReveal>
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
  const visibleLessons = showAll
    ? filteredLessons
    : filteredLessons.slice(0, 10);

  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">
      <ScrollReveal>
        <div className="border-t border-[var(--line)]">
          <div className="flex flex-wrap items-center justify-between gap-3 py-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink)]">
                Lesson library
              </span>

              <span className="ml-3 font-mono text-[10px] text-[#3d9bff]">
                {filteredLessons.length} lessons
              </span>
            </div>

            <span className="rounded-full border border-[var(--line)] bg-[var(--surf2)] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink2)]">
              {selectedTopic ?? "All topics"}
            </span>
          </div>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {visibleLessons.map((lesson, index) => (
              <ScrollReveal
                key={lesson.id}
                delay={(index % 5) * 65}
                direction="right"
              >
                <Link
                  href={lesson.href}
                  className="group relative grid gap-3 overflow-hidden px-3 py-5 transition-colors duration-300 hover:bg-[var(--surf2)] sm:grid-cols-[60px_75px_1fr_auto] sm:items-center sm:gap-5 sm:px-5"
                >
                  <span
                    className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                    style={{ backgroundColor: lesson.color }}
                  />

                  <span className="font-mono text-xs text-[var(--ink2)] transition-colors group-hover:text-[#3d9bff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="w-fit rounded-full border px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] transition-transform duration-300 group-hover:scale-105"
                    style={{
                      color: lesson.color,
                      borderColor: `${lesson.color}55`,
                      backgroundColor: `${lesson.color}12`,
                    }}
                  >
                    {lesson.level}
                  </span>

                  <div>
                    <div className="font-sans text-base font-semibold tracking-tight text-[var(--ink)] transition-colors duration-300 group-hover:text-[#3d9bff]">
                      {lesson.title}
                    </div>

                    <div className="mt-1 max-w-2xl font-sans text-xs leading-6 text-[var(--ink2)]">
                      {lesson.description}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {lesson.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--surf2)] px-2 py-1 font-mono text-[9px] text-[var(--ink2)] transition-colors duration-300 group-hover:bg-[var(--bg)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <span className="font-mono text-[10px] text-[var(--ink2)]">
                      <span className="text-[#3d9bff]">◷</span>{" "}
                      {lesson.minutes} min
                    </span>

                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-lg text-[var(--ink2)] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#3d9bff] group-hover:bg-[#3d9bff] group-hover:text-white"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {filteredLessons.length === 0 && (
              <ScrollReveal direction="up">
                <div className="px-5 py-16 text-center">
                  <div className="mb-3 text-3xl">🔎</div>

                  <p className="font-display text-2xl text-[var(--ink)]">
                    No lessons found
                  </p>

                  <p className="mt-2 text-sm text-[var(--ink2)]">
                    Try choosing another topic.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>

          {filteredLessons.length > 10 && (
            <ScrollReveal direction="up">
              <div className="flex justify-center pt-8">
                <button
                  type="button"
                  onClick={onToggleShowAll}
                  className="group rounded-full border border-[var(--line)] bg-[var(--surf)] px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3d9bff] hover:bg-[#3d9bff] hover:text-white"
                >
                  {showAll ? "Show less ↑" : "Show all lessons ↓"}
                </button>
              </div>
            </ScrollReveal>
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
      <ScrollReveal direction="left">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1025] px-6 py-10 text-white shadow-2xl shadow-[#3d9bff]/10 sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#3d9bff]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#6a52ee]/15 blur-3xl" />

          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-4 -top-10 h-52 w-52 rounded-full border border-white/10" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[650px]">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#65b5ff]">
                <span className="h-2 w-2 rounded-full bg-[#65b5ff]" />
                Keep moving
              </div>

              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                {selectedLevelInfo.title || "Keep learning."}
              </h2>

              <p className="mt-4 max-w-[560px] font-sans text-sm leading-7 text-white/65">
                {selectedLevelInfo.description ||
                  "Build your English step by step through practical experiences."}
              </p>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
                {selectedLevelInfo.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-[390px] lg:justify-end">
              {levels.map((level, index) => {
                const active = selectedLevel === level;
                const colors = [
                  "#3d9bff",
                  "#0a9fbd",
                  "#6a52ee",
                  "#0e8f69",
                  "#e17b53",
                ];

                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => onLevelChange(level)}
                    className={`rounded-full border px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 ${
                      active
                        ? "border-white bg-white text-[#0b1025] shadow-lg"
                        : "border-white/20 bg-white/5 text-white/65 hover:border-white/50 hover:text-white"
                    }`}
                    style={
                      active
                        ? ({
                            boxShadow: `0 0 24px ${colors[index]}55`,
                          } as CSSProperties)
                        : undefined
                    }
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
          LingoAI
          <span className="ml-2 text-[#3d9bff]">/</span>
          <span className="ml-2 text-[var(--ink2)]">
            English learning system
          </span>
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
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink2)] transition-colors hover:text-[#3d9bff]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
