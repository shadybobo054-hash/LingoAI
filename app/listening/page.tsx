"use client";

import Link from "next/link";
import { useState } from "react";

type Lesson = {
  title: string;
  level: string;
  duration: string;
  exercises: string;
  description: string;
  color: string;
  image: string;
  href: string;
};

const lessons: Lesson[] = [
  {
    title: "At the Café",
    level: "A1",
    duration: "4 min",
    exercises: "0/2",
    description: "Listen to a short conversation at a café and answer the questions.",
    color: "#12B7B0",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
    href: "/listening/cafe",
  },
  {
    title: "Asking for Directions",
    level: "A2",
    duration: "5 min",
    exercises: "0/2",
    description: "Learn how to ask for and give directions in English.",
    color: "#3D9BFF",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85",
    href: "/listening/directions",
  },
  {
    title: "A Job Interview",
    level: "B1",
    duration: "6 min",
    exercises: "0/2",
    description: "Listen to a real job interview and complete the missing information.",
    color: "#A43BE8",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    href: "/listening/job-interview",
  },
  {
    title: "Airport Conversations",
    level: "B2",
    duration: "7 min",
    exercises: "0/3",
    description: "Understand common English conversations while travelling.",
    color: "#F47C32",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
    href: "/listening/london",
  },
  {
    title: "The Podcast Studio",
    level: "C1",
    duration: "8 min",
    exercises: "0/3",
    description: "Listen to a natural discussion and identify the main ideas.",
    color: "#6255D8",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=85",
    href: "/listening/podcast",
  },
  {
    title: "Dinner Conversation",
    level: "A2",
    duration: "5 min",
    exercises: "0/2",
    description: "Practice understanding everyday conversations over dinner.",
    color: "#11AFA0",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    href: "/listening/dinner",
  },
];

const filters = ["All", "Beginner", "Intermediate", "Advanced"];

function getLevelGroup(level: string) {
  if (level === "A1" || level === "A2") return "Beginner";
  if (level === "B1" || level === "B2") return "Intermediate";
  return "Advanced";
}

function HeadphonesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" />
      <path d="M20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
    >
      <path d="M8 5.5v13L18 12 8 5.5Z" />
    </svg>
  );
}

export default function ListeningPage() {
  const [filter, setFilter] = useState("All");

  const filteredLessons =
    filter === "All"
      ? lessons
      : lessons.filter(
          (lesson) => getLevelGroup(lesson.level) === filter
        );

  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#172033]">
      <div className="mx-auto max-w-[1450px] px-5 pb-16 pt-7 sm:px-8 lg:px-10">

        {/* HERO */}
        <section className="relative min-h-[295px] overflow-hidden rounded-[28px] border border-[#e4edf6] bg-[#edf7ff] shadow-[0_12px_45px_rgba(30,80,130,0.06)]">

          <div className="absolute inset-y-0 right-0 w-[46%] bg-gradient-to-l from-[#d5ebff] to-transparent" />

          <div className="relative z-10 max-w-[680px] px-8 py-9 sm:px-10 lg:px-10">

            <div className="inline-flex items-center gap-2 rounded-full bg-[#d9efff] px-4 py-2 text-sm font-semibold text-[#0799dc]">
              <HeadphonesIcon />
              Listening
            </div>

            <h1 className="mt-5 text-[36px] font-bold leading-[1.08] tracking-[-1.5px] text-[#102b59] sm:text-[43px]">
              Listen. Understand.
              <br />
              Speak with confidence.
            </h1>

            <p className="mt-4 max-w-[570px] text-[15px] leading-6 text-[#56719b]">
              Improve your English listening skills with real conversations,
              short stories and everyday situations.
            </p>

            <div className="mt-6 flex flex-wrap gap-5">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b9f0df] text-[#079b79]">
                  ◉
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172033]">
                    Real-life content
                  </p>
                  <p className="text-[10px] text-[#70829d]">
                    Actual conversations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7d9ff] text-[#7651dc]">
                  ♫
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172033]">
                    Multiple accents
                  </p>
                  <p className="text-[10px] text-[#70829d]">
                    British & American
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d8ebff] text-[#338ee8]">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172033]">
                    Interactive exercises
                  </p>
                  <p className="text-[10px] text-[#70829d]">
                    Check your understanding
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-3 xl:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffe4ca] text-[#ef7b25]">
                  ♡
                </div>
                <div>
                  <p className="text-xs font-bold text-[#172033]">
                    Track your progress
                  </p>
                  <p className="text-[10px] text-[#70829d]">
                    See your improvement
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div
            className="absolute bottom-0 right-0 hidden h-full w-[43%] bg-cover bg-center lg:block"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#edf7ff] via-[#edf7ff]/30 to-transparent" />
          </div>

          <div className="absolute right-10 top-16 hidden rotate-[-6deg] text-[25px] font-bold leading-7 text-[#1689ed] lg:block">
            Better
            <br />
            Listening
            <br />
            Brighter
            <br />
            Future
          </div>
        </section>

        {/* CONTENT */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_365px]">

          {/* LESSONS */}
          <section className="rounded-[25px] border border-[#e6edf5] bg-white p-5 shadow-[0_8px_30px_rgba(30,70,110,0.04)] sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e1f3ff] text-[#129de4]">
                    <HeadphonesIcon />
                  </div>

                  <h2 className="text-[22px] font-bold tracking-[-0.5px] text-[#102b59]">
                    Listening Lessons
                  </h2>
                </div>

                <p className="mt-1 pl-[52px] text-sm text-[#6880a1]">
                  Choose a topic, listen to the audio and complete the exercises.
                </p>
              </div>

              {/* FILTER */}
              <div className="flex rounded-full bg-[#f3f7fb] p-1">
                {filters.map((item) => {
                  const active = filter === item;

                  return (
                    <button
                      key={item}
                      onClick={() => setFilter(item)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        active
                          ? "bg-[#1678ed] text-white shadow-[0_5px_15px_rgba(22,120,237,0.2)]"
                          : "text-[#3d5579] hover:text-[#1678ed]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CARDS */}
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredLessons.map((lesson) => (
                <article
                  key={lesson.title}
                  className="group overflow-hidden rounded-[17px] border border-[#e4eaf1] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(30,70,110,0.10)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[164px] overflow-hidden">

                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${lesson.image}")`,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                    <span
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{ backgroundColor: lesson.color }}
                    >
                      {lesson.level}
                    </span>

                    <span className="absolute right-3 top-3 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      ◷ {lesson.duration}
                    </span>

                    <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1689ed] shadow-md">
                      <PlayIcon />
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="p-4">
                    <h3 className="text-[16px] font-bold text-[#132b55]">
                      {lesson.title}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-[12px] leading-5 text-[#7183a0]">
                      {lesson.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={lesson.href}
                        className="inline-flex items-center gap-2 rounded-full bg-[#1678ed] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#0969dc]"
                      >
                        Start
                        <span>→</span>
                      </Link>

                      <span className="text-xs font-semibold text-[#7183a0]">
                        {lesson.exercises} ↻
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="space-y-5">

            {/* PROGRESS */}
            <section className="rounded-[22px] border border-[#e6edf5] bg-white p-5 shadow-[0_8px_30px_rgba(30,70,110,0.04)]">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-[#1689ed]">▥</div>
                  <h3 className="font-bold text-[#132b55]">
                    Your Progress
                  </h3>
                </div>

                <button className="text-xs font-semibold text-[#1689ed]">
                  View all →
                </button>
              </div>

              <div className="mt-5 flex items-center gap-5">

                <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border-[8px] border-[#eaf0f5]">
                  <div className="absolute inset-[-8px] rounded-full border-[8px] border-transparent border-t-[#14abc5] border-r-[#14abc5] rotate-[-25deg]" />

                  <div className="text-center">
                    <p className="text-[20px] font-bold text-[#132b55]">
                      35%
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[17px] font-bold text-[#132b55]">
                    Level A2
                  </p>
                  <p className="mt-1 text-xs text-[#7183a0]">
                    4 of 10 lessons completed
                  </p>
                </div>
              </div>

              {/* LEVELS */}
              <div className="mt-6 flex items-center justify-between">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58b957] text-xs font-bold text-white">
                  ✓
                </div>

                <div className="h-[3px] flex-1 bg-[#63bce8]" />

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1689ed] text-xs font-bold text-white">
                  •
                </div>

                <div className="h-[3px] flex-1 bg-[#e8edf3]" />

                {["B1", "B2", "C1"].map((level) => (
                  <div
                    key={level}
                    className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f4f8] text-[10px] font-bold text-[#8090a8]"
                  >
                    {level}
                  </div>
                ))}
              </div>

              <div className="mt-1 flex justify-between px-1 text-[10px] font-semibold text-[#6f829f]">
                <span>A1</span>
                <span className="text-[#1689ed]">A2</span>
                <span>B1</span>
                <span>B2</span>
                <span>C1</span>
              </div>

              {/* TIP */}
              <div className="mt-6 rounded-[15px] bg-[#edf7ff] p-4">
                <div className="flex gap-3">
                  <div className="text-xl">💡</div>

                  <div>
                    <p className="text-xs font-bold text-[#132b55]">
                      Listening Tip
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#55739a]">
                      Try to focus on key words, tone and context. 
                      if you miss something — just keep practicing!
                    </p>
                  </div>

                  <span className="ml-auto text-[#1689ed]">→</span>
                </div>
              </div>
            </section>

            {/* PRACTICE */}
            <section className="rounded-[22px] border border-[#e6edf5] bg-white p-5 shadow-[0_8px_30px_rgba(30,70,110,0.04)]">

              <div className="flex items-center gap-3">
                <div className="text-[#1689ed]">
                  <HeadphonesIcon />
                </div>

                <h3 className="font-bold text-[#132b55]">
                  Listening Practice Modes
                </h3>
              </div>

              <div className="mt-4 space-y-2">

                <Link
                  href="/practice/listening"
                  className="group flex items-center gap-3 rounded-xl border border-[#edf1f5] p-3 transition hover:bg-[#f7fbff]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff1ff] text-[#1689ed]">
                    ◉
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#172d54]">
                      Daily Practice
                    </p>
                    <p className="mt-1 text-[10px] text-[#7b8da7]">
                      Short, focused exercises
                    </p>
                  </div>

                  <span className="text-[#8293aa] transition group-hover:translate-x-1">
                    ›
                  </span>
                </Link>

                <Link
                  href="/lessons"
                  className="group flex items-center gap-3 rounded-xl border border-[#edf1f5] p-3 transition hover:bg-[#f7fbff]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eee2ff] text-[#8b52dc]">
                    ◈
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#172d54]">
                      Full Lessons
                    </p>
                    <p className="mt-1 text-[10px] text-[#7b8da7]">
                      Complete listening lessons
                    </p>
                  </div>

                  <span className="text-[#8293aa] transition group-hover:translate-x-1">
                    ›
                  </span>
                </Link>

                <Link
                  href="/listening/podcasts"
                  className="group flex items-center gap-3 rounded-xl border border-[#edf1f5] p-3 transition hover:bg-[#f7fbff]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff6ed] text-[#0e9b76]">
                    ◉
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#172d54]">
                      Podcasts
                    </p>
                    <p className="mt-1 text-[10px] text-[#7b8da7]">
                      Real English conversations
                    </p>
                  </div>

                  <span className="text-[#8293aa] transition group-hover:translate-x-1">
                    ›
                  </span>
                </Link>

              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}