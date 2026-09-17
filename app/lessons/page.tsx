"use client";

import Link from "next/link";
import { useState } from "react";

type Lesson = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  tags: string[];
  minutes: number;
  steps: number;
  color: string;
  href: string;
};

const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];
const topics = [
  "Everything",
  "Daily life",
  "Travel",
  "Work",
  "Food",
  "Technology",
  "Relationships",
];

const lessons: Lesson[] = [
  {
    title: "Ordering food",
    level: "Beginner",
    description:
      "Order a meal with confidence: polite phrasing, the waiter's questions, and asking for a recommendation.",
    tags: ["Vocabulary", "Listening", "Practice"],
    minutes: 8,
    steps: 5,
    color: "#2477D1",
    href: "/lessons/ordering-food",
  },
  {
    title: "Getting through the airport",
    level: "Beginner",
    description:
      "Check-in, security and gates - the exact sentences you hear and the ones you answer with.",
    tags: ["Listening", "Vocabulary", "Practice"],
    minutes: 7,
    steps: 5,
    color: "#0A7E99",
    href: "/lessons/airport",
  },
  {
    title: "Small talk at work",
    level: "Intermediate",
    description:
      "The two minutes before a meeting starts - how to fill them without sounding scripted.",
    tags: ["Listening", "Vocabulary", "Practice"],
    minutes: 9,
    steps: 5,
    color: "#6A52EE",
    href: "/lessons/small-talk-at-work",
  },
  {
    title: "A better morning routine",
    level: "Intermediate",
    description:
      "Talk about habits, plans and the little routines that shape an ordinary day.",
    tags: ["Grammar", "Speaking", "Vocabulary"],
    minutes: 8,
    steps: 6,
    color: "#0E8F69",
    href: "/lessons/morning-routine",
  },
  {
    title: "Booking a hotel room",
    level: "Intermediate",
    description:
      "Ask the right questions, understand the details, and check in without hesitation.",
    tags: ["Travel", "Listening", "Practice"],
    minutes: 10,
    steps: 6,
    color: "#CE543B",
    href: "/lessons/booking-a-hotel",
  },
  {
    title: "Explaining a tech problem",
    level: "Advanced",
    description:
      "Describe what went wrong, suggest a fix, and keep a technical conversation moving.",
    tags: ["Technology", "Speaking", "Grammar"],
    minutes: 12,
    steps: 7,
    color: "#565AD7",
    href: "/lessons/tech-problem",
  },
];

export default function LessonsPage() {
  const [activeLevel, setActiveLevel] = useState("All levels");
  const [activeTopic, setActiveTopic] = useState("Everything");

  const visibleLessons = lessons.filter((lesson) => {
    const matchesLevel =
      activeLevel === "All levels" || lesson.level === activeLevel;
    const matchesTopic =
      activeTopic === "Everything" || lesson.tags.includes(activeTopic);

    return matchesLevel && matchesTopic;
  });

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="max-w-[600px]">
          <h1 className="font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
            Lessons
          </h1>
          <p className="mt-3 max-w-[540px] text-base leading-6 text-[var(--ink2)] sm:text-lg">
            Short, finishable, and built around one situation each. Pick a
            level, pick a life.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              type="button"
              aria-pressed={activeLevel === level}
              onClick={() => setActiveLevel(level)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeLevel === level ? "border-[#2477D1] bg-[#2477D1] text-white" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#2477D1] hover:text-[#2477D1]"}`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              aria-pressed={activeTopic === topic}
              onClick={() => setActiveTopic(topic)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeTopic === topic ? "border-[#2477D1] bg-[#2477D1] text-white" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#2477D1] hover:text-[#2477D1]"}`}
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleLessons.map((lesson) => (
            <article
              key={lesson.title}
              className="sada-card flex min-h-[286px] flex-col rounded-[22px] p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: lesson.color }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: lesson.color }} />
                {lesson.level}
              </div>

              <h2 className="mt-4 font-display text-[1.75rem] font-medium leading-tight">
                {lesson.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--ink2)]">
                {lesson.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {lesson.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `${lesson.color}16`,
                      color: lesson.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-4">
                <span className="font-mono text-xs text-[var(--ink3)]">
                  {lesson.minutes} min · {lesson.steps} steps
                </span>
                <Link
                  href={lesson.href}
                  className="inline-flex h-9 items-center rounded-full px-4 text-xs font-semibold text-white transition hover:-translate-y-0.5"
                  style={{ backgroundColor: lesson.color }}
                >
                  Start →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {visibleLessons.length === 0 && (
          <div className="sada-card mt-7 p-8 text-center">
            <h2 className="font-display text-3xl font-medium">No lessons yet</h2>
            <p className="mt-2 text-[var(--ink2)]">
              Try another level or topic to find your next lesson.
            </p>
          </div>
        )}
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container grid gap-8 py-10 sm:grid-cols-[0.9fr_1.6fr] sm:gap-12 sm:py-14">
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
                  <span className="ml-1.5 text-[var(--ink3)]">
                    {language.status}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
