"use client";

import Link from "next/link";
import { useState } from "react";

type Course = {
  title: string;
  level: "Beginner" | "Intermediate";
  lessons: number;
  duration: string;
  description: string;
  tags: string[];
  color: string;
  background?: string;
  href: string;
  wide?: boolean;
};

const courses: Course[] = [
  {
    title: "English for travel",
    level: "Beginner",
    lessons: 6,
    duration: "1h 20m",
    description: "From the check-in desk to the hotel lobby to the restaurant table - the sentences you will actually need on the way.",
    tags: ["Listening", "Vocabulary", "Practice"],
    color: "#0A7E99",
    background: "#E4F6FB",
    href: "/courses/english-for-travel",
    wide: true,
  },
  {
    title: "English for work",
    level: "Intermediate",
    lessons: 8,
    duration: "2h 05m",
    description: "Meetings, updates, disagreement and email tone - the register that makes you sound calm and competent.",
    tags: ["Listening", "Practice"],
    color: "#6A52EE",
    href: "/courses/english-for-work",
  },
  {
    title: "Everyday conversations",
    level: "Beginner",
    lessons: 7,
    duration: "1h 40m",
    description: "The unremarkable conversations that fill a day - and the small phrases that keep them moving.",
    tags: ["Speaking", "Vocabulary"],
    color: "#2477D1",
    href: "/courses/everyday-conversations",
  },
  {
    title: "Grammar essentials",
    level: "Intermediate",
    lessons: 10,
    duration: "2h 30m",
    description: "Only the grammar that changes meaning. Tenses you actually use, articles, and the difference between since and for.",
    tags: ["Grammar", "Practice", "Review"],
    color: "#0E8F69",
    href: "/courses/grammar-essentials",
    wide: true,
  },
  {
    title: "News in plain English",
    level: "Intermediate",
    lessons: 5,
    duration: "1h 10m",
    description: "Build the vocabulary and listening confidence to follow the stories people are talking about.",
    tags: ["Listening", "Reading"],
    color: "#CE543B",
    href: "/courses/news-in-plain-english",
  },
];

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState("Everything");

  const visibleCourses = courses.filter(
    (course) => activeLevel === "Everything" || course.level === activeLevel,
  );

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="max-w-[650px]">
          <h1 className="font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
            Courses &amp; videos
          </h1>
          <p className="mt-3 max-w-[590px] text-base leading-6 text-[var(--ink2)] sm:text-lg">
            Longer arcs, built from the same lessons and listening. Start
            anywhere - nothing is locked.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {["Everything", "Beginner", "Intermediate"].map((level) => (
            <button
              key={level}
              type="button"
              aria-pressed={activeLevel === level}
              onClick={() => setActiveLevel(level)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeLevel === level ? "border-[#6A52EE] bg-[#6A52EE] text-white" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#6A52EE] hover:text-[#6A52EE]"}`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {visibleCourses.map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className={`group sada-card flex min-h-[248px] flex-col rounded-[24px] p-6 sm:p-7 ${course.wide ? "sm:col-span-2" : ""}`}
              style={{ backgroundColor: course.background }}
            >
              <div className="flex items-center justify-between gap-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: course.color }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: course.color }} />
                  {course.level}
                </p>
                <span className="font-mono text-xs text-[var(--ink3)]">
                  {course.lessons} lessons · {course.duration}
                </span>
              </div>

              <h2 className="mt-4 max-w-[620px] font-display text-3xl font-medium leading-tight sm:text-4xl">
                {course.title}
              </h2>
              <p className="mt-4 max-w-[650px] text-sm leading-6 text-[var(--ink2)] sm:text-base">
                {course.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-medium text-[var(--ink2)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold transition group-hover:translate-x-1" style={{ color: course.color }}>
                  Start course&nbsp; →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {visibleCourses.length === 0 && (
          <div className="sada-card mt-7 p-8 text-center">
            <h2 className="font-display text-3xl font-medium">No courses yet</h2>
            <p className="mt-2 text-[var(--ink2)]">Choose another level to see more courses.</p>
          </div>
        )}
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container grid gap-8 py-10 sm:grid-cols-[0.9fr_1.6fr] sm:gap-12 sm:py-14">
          <div className="max-w-[270px]">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3D9BFF] text-xs font-semibold text-white">●</span>
              <span className="font-display text-lg font-semibold text-[var(--ink)]">Sada</span>
            </Link>
            <p className="mt-3 text-sm leading-5 text-[var(--ink3)]">
              A calm place to learn languages. Built around listening, curiosity and short honest feedback.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">Languages we teach</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { name: "English", status: "live", active: true },
                { name: "Spanish", status: "soon", active: false },
                { name: "French", status: "soon", active: false },
                { name: "Turkish", status: "soon", active: false },
                { name: "Japanese", status: "soon", active: false },
              ].map((language) => (
                <span key={language.name} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${language.active ? "border-[#D6E9FA] bg-[#F5FAFF] text-[#2477D1]" : "border-[var(--line)] bg-transparent text-[var(--ink2)]"}`}>
                  {language.name}<span className="ml-1.5 text-[var(--ink3)]">{language.status}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
