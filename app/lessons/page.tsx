
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  DM_Serif_Display,
  Plus_Jakarta_Sans,
  IBM_Plex_Mono,
} from "next/font/google";

import {
  lessons,
  levels,
  topics,
  levelInfo,
  type Level,
  type Lesson,
} from "./data";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

/* =========================================================
   WORLD POSITIONS
========================================================= */

const positions = [
  { x: 16, y: 25 },
  { x: 34, y: 14 },
  { x: 55, y: 22 },
  { x: 77, y: 17 },
  { x: 87, y: 40 },
  { x: 70, y: 55 },
  { x: 51, y: 70 },
  { x: 31, y: 61 },
  { x: 14, y: 49 },
  { x: 27, y: 84 },
];

const pathData = [
  "M 16 25 C 23 19, 28 17, 34 14",
  "M 34 14 C 42 12, 48 19, 55 22",
  "M 55 22 C 64 27, 69 16, 77 17",
  "M 77 17 C 83 20, 85 30, 87 40",
  "M 87 40 C 86 48, 78 53, 70 55",
  "M 70 55 C 64 61, 57 68, 51 70",
  "M 51 70 C 43 72, 37 63, 31 61",
  "M 31 61 C 23 59, 18 52, 14 49",
  "M 14 49 C 11 39, 13 30, 16 25",
  "M 31 61 C 29 69, 27 77, 27 84",
];

/* =========================================================
   HELPERS
========================================================= */

function getLevelIndex(level: Level) {
  return levels.indexOf(level);
}

function getLessonStatus(
  lesson: Lesson,
  selectedLevel: Level,
  lessonIndex: number,
) {
  const levelIndex = getLevelIndex(selectedLevel);

  if (lesson.completed) {
    return "completed";
  }

  if (levelIndex === 0 && lessonIndex === 0) {
    return "current";
  }

  if (lessonIndex === 0 && levelIndex <= 1) {
    return "current";
  }

  return "available";
}

/* =========================================================
   PAGE
========================================================= */

export default function LessonsPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level>("A1");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [worldVisible, setWorldVisible] = useState(false);

  const worldRef = useRef<HTMLDivElement | null>(null);

  /* =======================================================
     WORLD SCROLL REVEAL
  ======================================================== */

  useEffect(() => {
    const element = worldRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWorldVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     DATA
  ======================================================== */

  const levelLessons = useMemo(
    () => lessons.filter((lesson) => lesson.level === selectedLevel),
    [selectedLevel],
  );

  const filteredLessons = useMemo(() => {
    if (!selectedTopic) return lessons;

    return lessons.filter((lesson) => lesson.topic === selectedTopic);
  }, [selectedTopic]);

  const visibleLessons = showAll
    ? filteredLessons
    : filteredLessons.slice(0, 10);

  const completedCount = levelLessons.filter(
    (lesson) => lesson.completed,
  ).length;

  const selectedLevelInfo = levelInfo[selectedLevel];

  /* =======================================================
     ACTIONS
  ======================================================== */

  function changeLevel(level: Level) {
    setSelectedLevel(level);
    setSelectedLesson(null);
    setWorldVisible(false);

    window.setTimeout(() => {
      setWorldVisible(true);
    }, 80);
  }

  function selectLesson(lesson: Lesson) {
    setSelectedLesson(lesson);
  }

  return (
    <main
      className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--ink)] transition-colors duration-500`}
      style={
        {
          "--font-display": display.style.fontFamily,
          "--font-sans": sans.style.fontFamily,
          "--font-mono": mono.style.fontFamily,
        } as React.CSSProperties
      }
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden">
        {/* ambient light */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#3d9bff]/[0.07] blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#7567ff]/[0.055] blur-[110px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 pb-10 pt-14 sm:px-8 lg:px-10 lg:pb-14 lg:pt-20">
          {/* tiny label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surf)] px-3 py-2 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3d9bff]" />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink2)]">
              Learning map / 01
            </span>
          </div>

          <div className="max-w-[850px]">
            <h1 className="font-display text-[clamp(52px,7vw,94px)] leading-[0.87] tracking-[-0.055em] text-[var(--ink)]">
              Your
              <br />
              <span className="text-[#3d9bff]">English World.</span>
            </h1>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[550px] font-sans text-[15px] leading-7 text-[var(--ink2)] sm:text-[16px]">
                Learn through real situations, useful conversations, and
                experiences that gradually take you from A1 to C1.
              </p>

              <div className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink2)]">
                5 levels
                <span className="mx-2 text-[var(--line2)]">/</span>
                50 lessons
              </div>
            </div>
          </div>

          {/* =================================================
              LEVEL SELECTOR
          ================================================== */}

          <div className="mt-12 flex max-w-full gap-2 overflow-x-auto pb-2">
            {levels.map((level) => {
              const active = selectedLevel === level;

              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => changeLevel(level)}
                  className={`relative flex min-w-[92px] shrink-0 items-center justify-center rounded-full border px-5 py-3 transition-all duration-300 ${
                    active
                      ? "border-[var(--ink)] bg-[var(--ink)] text-white shadow-lg shadow-black/10"
                      : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] hover:-translate-y-0.5 hover:border-[var(--ink)] hover:text-[var(--ink)]"
                  }`}
                >
                  <span className="font-mono text-[11px] font-semibold tracking-[0.08em]">
                    {level}
                  </span>

                  {active && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#3d9bff]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORLD
      ====================================================== */}

      <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">
        <div
          ref={worldRef}
          className={`relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surf)] shadow-[0_20px_70px_rgba(23,32,51,0.06)] transition-all duration-1000 ${
            worldVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* =================================================
              GRID
          ================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.38]"
            style={{
              backgroundImage:
                "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
              backgroundSize: "54px 54px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 92%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 92%)",
            }}
          />

          {/* =================================================
              WORLD HEADER
          ================================================== */}

          <div className="relative z-50 flex flex-col gap-5 border-b border-[var(--line)] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#3d9bff]">
                  Current world
                </span>

                <span className="h-px w-8 bg-[var(--line2)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--ink2)]">
                  {selectedLevel}
                </span>
              </div>

              <h2 className="font-display text-[34px] leading-none tracking-[-0.035em] sm:text-[42px]">
                Your world starts here.
              </h2>

              <p className="mt-2 font-sans text-[13px] text-[var(--ink2)]">
                10 experiences. One level at a time.
              </p>
            </div>

            {/* progress */}
            <div className="min-w-[190px]">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink2)]">
                  Progress
                </span>

                <span className="font-mono text-[10px] font-semibold text-[var(--ink)]">
                  {completedCount}/10
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surf2)]">
                <div
                  className="h-full rounded-full bg-[#3d9bff] transition-all duration-700"
                  style={{
                    width: `${Math.max(
                      4,
                      (completedCount /
                        Math.max(levelLessons.length, 1)) *
                        100,
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* =================================================
              WORLD CANVAS
          ================================================== */}

          <div className="relative min-h-[720px] lg:min-h-[760px]">
            {/* orbit 1 */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)]" />

            {/* orbit 2 */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--line2)]" />

            {/* center glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3d9bff]/[0.045] blur-3xl" />

            {/* coordinates */}
            <div className="pointer-events-none absolute left-7 top-7 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--ink2)] opacity-50">
              30° 02′ N
            </div>

            <div className="pointer-events-none absolute right-7 top-7 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--ink2)] opacity-50">
              WORLD / {selectedLevel}
            </div>

            <div className="pointer-events-none absolute bottom-7 left-7 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--ink2)] opacity-50">
              LINGOAI SYSTEM
            </div>

            <div className="pointer-events-none absolute bottom-7 right-7 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--ink2)] opacity-50">
              10 EXPERIENCES
            </div>

            {/* =================================================
                DESKTOP
            ================================================== */}

            <div className="absolute inset-0 hidden lg:block">
              {/* connection lines */}
              <svg
                className={`pointer-events-none absolute inset-[7%] h-[86%] w-[86%] transition-opacity duration-700 ${
                  worldVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: worldVisible ? "1250ms" : "0ms",
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {pathData.map((path, index) => (
                  <path
                    key={index}
                    d={path}
                    fill="none"
                    stroke="var(--line2)"
                    strokeWidth="0.45"
                    strokeDasharray="1.5 2.5"
                    vectorEffect="non-scaling-stroke"
                    opacity="0.9"
                  />
                ))}
              </svg>

              {/* =================================================
                  CENTER
              ================================================== */}

              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-[126px] w-[126px] items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] shadow-[0_15px_50px_rgba(23,32,51,0.09)] transition-colors duration-500">
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#3d9bff]/30" />

                  <div className="text-center">
                    <div className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#3d9bff]">
                      You are
                    </div>

                    <div className="mt-1 font-display text-[36px] leading-none tracking-[-0.04em]">
                      {selectedLevel}
                    </div>

                    <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--ink2)]">
                      Keep going
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  LESSON NODES
              ================================================== */}

              {levelLessons.map((lesson, index) => {
                const position = positions[index];

                const status = getLessonStatus(
                  lesson,
                  selectedLevel,
                  index,
                );

                const active = selectedLesson?.id === lesson.id;

                const isFirstLesson = index === 0;

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => selectLesson(lesson)}
                    aria-label={`Open ${lesson.title}`}
                    className={`group absolute z-30 text-left ${
                      worldVisible
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }`}
                    style={{
                      left: worldVisible
                        ? `${position.x}%`
                        : "50%",
                      top: worldVisible
                        ? `${position.y}%`
                        : "50%",

                      opacity: worldVisible
                        ? 1
                        : isFirstLesson
                          ? 1
                          : 0,

                      transform: worldVisible
                        ? "translate(-50%, -50%) scale(1)"
                        : "translate(-50%, -50%) scale(0.55)",

                      transitionProperty:
                        "left, top, opacity, transform",

                      transitionDuration: worldVisible
                        ? "850ms"
                        : "0ms",

                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",

                      transitionDelay: worldVisible
                        ? isFirstLesson
                          ? "0ms"
                          : `${260 + index * 90}ms`
                        : "0ms",
                    }}
                  >
                    <div className="relative flex items-center gap-3">
                      {/* NODE */}
                      <div
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "scale-110 border-[#3d9bff] bg-[#3d9bff] text-white shadow-[0_0_0_7px_rgba(61,155,255,0.10),0_10px_30px_rgba(61,155,255,0.22)]"
                            : status === "completed"
                              ? "border-[#40a879] bg-[#40a879] text-white shadow-[0_8px_25px_rgba(64,168,121,0.18)]"
                              : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink)] shadow-sm group-hover:-translate-y-1 group-hover:border-[#3d9bff] group-hover:shadow-md"
                        }`}
                      >
                        {status === "completed" ? (
                          <svg
                            viewBox="0 0 20 20"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M5 10.5 8.2 14 15 6.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <span className="font-mono text-[10px] font-semibold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        )}
                      </div>

                      {/* NODE LABEL */}
                      <div
                        className={`max-w-[145px] transition-all duration-300 ${
                          active
                            ? "translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      >
                        <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--ink2)]">
                          {lesson.topic}
                        </div>

                        <div className="mt-0.5 font-sans text-[12px] font-semibold leading-4 text-[var(--ink)]">
                          {lesson.title}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* =================================================
                MOBILE
            ================================================== */}

            <div className="relative z-20 px-5 py-9 lg:hidden">
              {/* center */}
              <div className="mb-9 flex justify-center">
                <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] shadow-[0_15px_50px_rgba(23,32,51,0.08)]">
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#3d9bff]/30" />

                  <div className="text-center">
                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#3d9bff]">
                      You are
                    </div>

                    <div className="mt-1 font-display text-[40px] leading-none">
                      {selectedLevel}
                    </div>

                    <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--ink2)]">
                      Current world
                    </div>
                  </div>
                </div>
              </div>

              {/* lessons */}
              <div className="grid grid-cols-2 gap-3">
                {levelLessons.map((lesson, index) => {
                  const status = getLessonStatus(
                    lesson,
                    selectedLevel,
                    index,
                  );

                  const active = selectedLesson?.id === lesson.id;

                  return (
                    <button
                      key={lesson.id}
                      type="button"
                      onClick={() => selectLesson(lesson)}
                      className={`group rounded-[20px] border p-4 text-left transition-all duration-500 ${
                        worldVisible
                          ? "translate-y-0 scale-100 opacity-100"
                          : index === 0
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-3 scale-90 opacity-0"
                      } ${
                        active
                          ? "border-[#3d9bff] bg-[#3d9bff] text-white shadow-lg shadow-[#3d9bff]/20"
                          : "border-[var(--line)] bg-[var(--surf)] hover:-translate-y-0.5 hover:border-[var(--line2)] hover:shadow-md"
                      }`}
                      style={{
                        transitionDelay: worldVisible
                          ? `${index * 75}ms`
                          : "0ms",
                      }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`font-mono text-[9px] ${
                            active
                              ? "text-white/70"
                              : "text-[var(--ink2)]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {status === "completed" && (
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              active
                                ? "bg-white/15 text-white"
                                : "bg-[#40a879]/10 text-[#40a879]"
                            }`}
                          >
                            ✓
                          </span>
                        )}
                      </div>

                      <div
                        className={`mt-5 font-sans text-[12px] font-semibold leading-5 ${
                          active
                            ? "text-white"
                            : "text-[var(--ink)]"
                        }`}
                      >
                        {lesson.title}
                      </div>

                      <div
                        className={`mt-2 font-mono text-[8px] uppercase tracking-[0.12em] ${
                          active
                            ? "text-white/60"
                            : "text-[var(--ink2)]"
                        }`}
                      >
                        {lesson.topic}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                SELECTED LESSON PANEL
            ================================================== */}

            {selectedLesson && (
              <div className="absolute bottom-6 left-5 right-5 z-[60] lg:bottom-auto lg:left-auto lg:right-7 lg:top-1/2 lg:w-[320px] lg:-translate-y-1/2">
                <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surf)] shadow-[0_25px_80px_rgba(23,32,51,0.16)] backdrop-blur-xl">
                  {/* panel top */}
                  <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3d9bff]" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[var(--ink2)]">
                        {selectedLesson.level} / Lesson
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedLesson(null)}
                      aria-label="Close lesson"
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] transition-all hover:border-[var(--ink)] hover:text-[var(--ink)]"
                    >
                      ×
                    </button>
                  </div>

                  {/* panel body */}
                  <div className="p-5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#3d9bff]">
                      {selectedLesson.topic}
                    </div>

                    <h3 className="mt-3 font-display text-[30px] leading-[1.02] tracking-[-0.035em] text-[var(--ink)]">
                      {selectedLesson.title}
                    </h3>

                    <p className="mt-4 font-sans text-[12px] leading-6 text-[var(--ink2)]">
                      {selectedLesson.description}
                    </p>

                    {/* tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--surf2)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--ink2)]">
                        {selectedLesson.minutes} min
                      </span>

                      <span className="rounded-full bg-[var(--surf2)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--ink2)]">
                        {selectedLesson.steps} steps
                      </span>

                      {selectedLesson.tags
                        ?.slice(0, 2)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[var(--surf2)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--ink2)]"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    {/* OPEN LESSON */}
                    <Link
                      href={selectedLesson.href}
                      className="group mt-6 flex w-full items-center justify-between rounded-[15px] bg-[var(--ink)] px-5 py-4 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3d9bff] hover:shadow-lg hover:shadow-[#3d9bff]/20"
                    >
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                        Open lesson
                      </span>

                      <span className="font-sans text-[18px] leading-none text-white transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLORE
      ====================================================== */}

      <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#3d9bff]">
              Explore
            </div>

            <h2 className="font-display text-[40px] leading-none tracking-[-0.04em] text-[var(--ink)]">
              Find your situation.
            </h2>
          </div>

          <p className="max-w-[390px] font-sans text-[12px] leading-6 text-[var(--ink2)] sm:text-right">
            Jump into a specific topic or explore everything available across
            your English journey.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => {
              setSelectedTopic(null);
              setShowAll(false);
            }}
            className={`shrink-0 rounded-full border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-all ${
              !selectedTopic
                ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
            }`}
          >
            All topics
          </button>

          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => {
                setSelectedTopic(topic);
                setShowAll(false);
              }}
              className={`shrink-0 rounded-full border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-all ${
                selectedTopic === topic
                  ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                  : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          LIBRARY
      ====================================================== */}

      <section className="mx-auto max-w-[1380px] px-5 pb-24 sm:px-8 lg:px-10">
        <div className="border-t border-[var(--line)]">
          <div className="flex items-center justify-between py-6">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink2)]">
                Lesson library
              </span>

              <span className="ml-3 font-mono text-[9px] text-[var(--ink2)]">
                {filteredLessons.length} results
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink2)]">
              {selectedTopic ?? "All topics"}
            </span>
          </div>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {visibleLessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={lesson.href}
                className="group grid gap-4 py-5 transition-colors duration-300 hover:bg-[var(--surf2)] sm:grid-cols-[70px_90px_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="font-mono text-[10px] text-[var(--ink2)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-[#3d9bff]">
                  {lesson.level}
                </span>

                <div>
                  <div className="font-sans text-[14px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                    {lesson.title}
                  </div>

                  <div className="mt-1 font-sans text-[11px] leading-5 text-[var(--ink2)]">
                    {lesson.description}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-5 sm:justify-end">
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink2)]">
                    {lesson.minutes} min
                  </span>

                  <span className="text-[17px] text-[var(--ink2)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--ink)]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredLessons.length > 10 && (
            <div className="flex justify-center pt-8">
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="rounded-full border border-[var(--line)] bg-[var(--surf)] px-6 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:shadow-sm"
              >
                {showAll ? "Show less" : "Show all lessons"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="mx-auto max-w-[1380px] px-5 pb-10 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[30px] bg-[var(--ink)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-4 -top-16 h-52 w-52 rounded-full border border-white/5" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[650px]">
              <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                Keep moving
              </div>

              <h2 className="font-display text-[42px] leading-[0.98] tracking-[-0.04em] sm:text-[56px]">
                {selectedLevelInfo?.title ?? "Keep learning."}
              </h2>

              <p className="mt-5 max-w-[560px] font-sans text-[13px] leading-6 text-white/55">
                {selectedLevelInfo?.description ??
                  "Build your English step by step through practical experiences."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-[390px] lg:justify-end">
              {levels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => changeLevel(level)}
                  className={`rounded-full border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-all ${
                    selectedLevel === level
                      ? "border-white bg-white text-[var(--ink)]"
                      : "border-white/15 text-white/55 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="mx-auto flex max-w-[1380px] flex-col gap-4 px-5 pb-10 pt-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink2)]">
          LingoAI / English learning system
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/practice"
            className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink2)] transition-colors hover:text-[var(--ink)]"
          >
            Practice
          </Link>

          <Link
            href="/ai-tutor"
            className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink2)] transition-colors hover:text-[var(--ink)]"
          >
            AI Tutor
          </Link>

          <Link
            href="/dashboard"
            className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ink2)] transition-colors hover:text-[var(--ink)]"
          >
            Dashboard
          </Link>
        </div>
      </footer>
    </main>
  );
}
