
"use client";

import Link from "next/link";
import type { CSSProperties, RefObject } from "react";
import { levels, type Lesson, type Level } from "../data";

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

function getLevelIndex(level: Level) {
  return levels.indexOf(level);
}

function getLessonStatus(
  lesson: Lesson,
  selectedLevel: Level,
  lessonIndex: number,
): "completed" | "current" | "available" {
  const levelIndex = getLevelIndex(selectedLevel);

  if (lesson.completed) return "completed";
  if (levelIndex === 0 && lessonIndex === 0) return "current";
  if (lessonIndex === 0 && levelIndex <= 1) return "current";
  return "available";
}

function WorldDoodles() {
  const doodles = [
    { x: "7%", y: "17%", rotate: "-12deg", color: "#38BDF8" },
    { x: "82%", y: "13%", rotate: "12deg", color: "#A78BFA" },
    { x: "6%", y: "68%", rotate: "8deg", color: "#2DD4BF" },
    { x: "86%", y: "75%", rotate: "-10deg", color: "#FB923C" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-[100px]" />
      <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-400/[0.08] blur-[90px]" />

      {doodles.map((item, index) => (
        <div
          key={index}
          className="absolute opacity-70"
          style={{
            left: item.x,
            top: item.y,
            transform: `rotate(${item.rotate})`,
            color: item.color,
          }}
        >
          {index === 0 && (
            <svg viewBox="0 0 100 100" className="h-16 w-16 sm:h-24 sm:w-24">
              <rect x="17" y="22" width="56" height="58" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M28 36h33M28 46h27M28 56h30M28 66h17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M73 30l10-9M78 41l12-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}

          {index === 1 && (
            <svg viewBox="0 0 100 100" className="h-16 w-16 sm:h-24 sm:w-24">
              <path d="M15 25q0-7 7-7h56q7 0 7 7v37q0 7-7 7H48L32 82V69H22q-7 0-7-7z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M29 37h42M29 47h29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="68" cy="57" r="2" fill="currentColor" />
              <circle cx="58" cy="57" r="2" fill="currentColor" />
            </svg>
          )}

          {index === 2 && (
            <svg viewBox="0 0 100 100" className="h-16 w-16 sm:h-24 sm:w-24">
              <path d="M12 28q20-8 38 5v48q-18-13-38-5z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M88 28q-20-8-38 5v48q18-13 38-5z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M22 41l17 5M22 52l17 5M61 46l17-5M61 57l17-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M50 33v48" stroke="currentColor" strokeWidth="2" strokeDasharray="3 4" />
            </svg>
          )}

          {index === 3 && (
            <svg viewBox="0 0 100 100" className="h-16 w-16 sm:h-24 sm:w-24">
              <path d="M15 51h9l14-13v37L24 62h-9z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M49 42q12 9 0 18M57 33q23 18 0 36M66 25q32 26 0 52" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 22l3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </div>
      ))}

      <div className="absolute left-[43%] top-[8%] rotate-6 font-mono text-2xl font-bold tracking-widest text-violet-400/20">
        Aa
      </div>
      <div className="absolute bottom-[12%] left-[45%] -rotate-6 font-mono text-xl font-bold tracking-widest text-teal-400/20">
        ABC
      </div>
      <div className="absolute right-[25%] top-[43%] font-mono text-xs tracking-[0.35em] text-sky-400/30">
        VERB · WORD · SPEAK
      </div>
      <div className="absolute left-[20%] top-[43%] font-mono text-lg text-orange-400/30">
        ?
      </div>
    </div>
  );
}

export function LessonWorld({
  selectedLevel,
  selectedLesson,
  levelLessons,
  worldVisible,
  onSelectLesson,
  onCloseLesson,
  worldRef,
}: {
  selectedLevel: Level;
  selectedLesson: Lesson | null;
  levelLessons: Lesson[];
  worldVisible: boolean;
  onSelectLesson: (lesson: Lesson) => void;
  onCloseLesson: () => void;
  worldRef: RefObject<HTMLDivElement | null>;
}) {
  const completedCount = levelLessons.filter((lesson) => lesson.completed).length;

  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">
      <div
        ref={worldRef}
        className={`relative isolate overflow-hidden rounded-[32px] border border-sky-300/30 bg-[#0B1025] text-white shadow-[0_25px_90px_rgba(54,75,190,0.16)] transition-all duration-1000 ${
          worldVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <WorldDoodles />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,165,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(125,165,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 95%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-fuchsia-500/[0.08]" />

        <div className="relative z-40 flex flex-col gap-5 border-b border-white/10 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full border border-sky-300/25 bg-sky-400/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-sky-300">
                ✦ Current world
              </span>
              <span className="h-px w-8 bg-white/20" />
              <span className="font-mono text-[10px] tracking-widest text-violet-300">
                {selectedLevel}
              </span>
            </div>

            <h2 className="font-display text-[34px] leading-none tracking-[-0.035em] text-white sm:text-[42px]">
              Your world starts here.
            </h2>

            <p className="mt-3 max-w-lg font-sans text-[13px] leading-6 text-slate-300">
              Explore new words, unlock new skills, and build your English world.
            </p>
          </div>

          <div className="min-w-[190px] rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-300">
                World progress
              </span>
              <span className="font-mono text-[11px] font-semibold text-teal-300">
                {completedCount}/{levelLessons.length}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-teal-300 transition-all duration-700"
                style={{
                  width: `${(completedCount / Math.max(levelLessons.length, 1)) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 font-mono text-[9px] text-slate-400">
              KEEP MOVING FORWARD ✦
            </p>
          </div>
        </div>

        <div className="relative min-h-[720px] lg:min-h-[760px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/20" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="pointer-events-none absolute left-7 top-7 font-mono text-[8px] uppercase tracking-[0.16em] text-sky-200/50">
            30° 02′ N
          </div>
          <div className="pointer-events-none absolute right-7 top-7 font-mono text-[8px] uppercase tracking-[0.16em] text-violet-200/60">
            WORLD / {selectedLevel}
          </div>
          <div className="pointer-events-none absolute bottom-7 left-7 font-mono text-[8px] uppercase tracking-[0.16em] text-teal-200/50">
            LINGOAI SYSTEM
          </div>
          <div className="pointer-events-none absolute bottom-7 right-7 font-mono text-[8px] uppercase tracking-[0.16em] text-orange-200/50">
            {levelLessons.length} EXPERIENCES
          </div>

          <div className="absolute inset-0 hidden lg:block">
            <svg
              className={`pointer-events-none absolute inset-[7%] h-[86%] w-[86%] transition-opacity duration-700 ${worldVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: worldVisible ? "500ms" : "0ms" }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {levelLessons.map((lesson, index) => {
                const position = positions[index];
                if (!position) return null;

                const color = lesson.color || "#38BDF8";
                const x = ((position.x - 7) / 86) * 100;
                const y = ((position.y - 7) / 86) * 100;

                return (
                  <g key={lesson.id}>
                    <line
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={color}
                      strokeWidth="1.8"
                      opacity="0.13"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={color}
                      strokeWidth="0.65"
                      strokeDasharray="1.5 2.5"
                      vectorEffect="non-scaling-stroke"
                      opacity="0.95"
                    />
                    <circle cx={x} cy={y} r="0.8" fill={color} />
                  </g>
                );
              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-[126px] w-[126px] items-center justify-center rounded-full border border-sky-300/40 bg-[#111B3B]/95 shadow-[0_0_55px_rgba(99,102,241,0.22)] backdrop-blur-xl">
                <div className="absolute inset-2 rounded-full border border-dashed border-sky-300/40" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/20" />
                <div className="relative text-center">
                  <div className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                    YOU ARE
                  </div>
                  <div className="mt-1 font-display text-[36px] leading-none tracking-[-0.04em] text-white">
                    {selectedLevel}
                  </div>
                  <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-teal-300">
                    Keep going ✦
                  </div>
                </div>
              </div>
            </div>

            {levelLessons.map((lesson, index) => {
              const position = positions[index];
              if (!position) return null;

              const status = getLessonStatus(lesson, selectedLevel, index);
              const active = selectedLesson?.id === lesson.id;
              const color = lesson.color || "#38BDF8";

              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => onSelectLesson(lesson)}
                  aria-label={`Open ${lesson.title}`}
                  className={`group absolute z-30 text-left ${worldVisible ? "pointer-events-auto" : "pointer-events-none"}`}
                  style={{
                    left: worldVisible ? `${position.x}%` : "50%",
                    top: worldVisible ? `${position.y}%` : "50%",
                    opacity: worldVisible ? 1 : index === 0 ? 1 : 0,
                    transform: worldVisible
                      ? "translate(-50%, -50%) scale(1)"
                      : "translate(-50%, -50%) scale(.55)",
                    transitionProperty: "left, top, opacity, transform",
                    transitionDuration: worldVisible ? "850ms" : "0ms",
                    transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
                    transitionDelay: worldVisible ? `${160 + index * 75}ms` : "0ms",
                    "--lesson-color": color,
                  } as CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "scale-110 border-white text-white"
                          : status === "completed"
                            ? "border-emerald-300 bg-emerald-500 text-white"
                            : "bg-[#111B3B] text-white group-hover:-translate-y-1"
                      }`}
                      style={{
                        borderColor: active ? "#FFFFFF" : status === "completed" ? undefined : color,
                        backgroundColor: active ? color : undefined,
                        boxShadow: active
                          ? `0 0 0 6px ${color}30, 0 0 35px ${color}65`
                          : status === "completed"
                            ? "0 0 25px #10B98145"
                            : `0 0 22px ${color}25`,
                      }}
                    >
                      {status === "completed" ? (
                        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="m5 10.5 3.2 3.3L15 6.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <span className="font-mono text-[10px] font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                      <span
                        className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[#0B1025]"
                        style={{ backgroundColor: status === "completed" ? "#34D399" : color }}
                      />
                    </div>

                    <div className={`max-w-[145px] transition-all duration-300 ${active ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                      <div className="font-mono text-[8px] uppercase tracking-[0.14em]" style={{ color }}>
                        {lesson.topic}
                      </div>
                      <div className="mt-1 font-sans text-[12px] font-semibold leading-4 text-white drop-shadow-sm">
                        {lesson.title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative z-20 px-5 py-9 lg:hidden">
            <div className="mb-9 flex justify-center">
              <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full border border-sky-300/40 bg-[#111B3B]/95 shadow-[0_0_50px_rgba(99,102,241,.25)]">
                <div className="absolute inset-2 rounded-full border border-dashed border-sky-300/40" />
                <div className="relative text-center">
                  <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-sky-300">
                    YOU ARE
                  </div>
                  <div className="mt-1 font-display text-[40px] leading-none text-white">
                    {selectedLevel}
                  </div>
                  <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-teal-300">
                    Current world
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {levelLessons.map((lesson, index) => {
                const status = getLessonStatus(lesson, selectedLevel, index);
                const active = selectedLesson?.id === lesson.id;
                const color = lesson.color || "#38BDF8";

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => onSelectLesson(lesson)}
                    className={`group relative overflow-hidden rounded-[20px] border p-4 text-left transition-all duration-500 ${
                      worldVisible ? "translate-y-0 scale-100 opacity-100" : index === 0 ? "opacity-100" : "translate-y-3 scale-90 opacity-0"
                    } ${active ? "border-white text-white shadow-xl" : "border-white/10 bg-[#111B3B]/90 text-white hover:-translate-y-1 hover:border-white/30"}`}
                    style={{
                      transitionDelay: worldVisible ? `${index * 60}ms` : "0ms",
                      borderColor: active ? color : undefined,
                      background: active
                        ? `linear-gradient(135deg, ${color}55, #111B3B 85%)`
                        : undefined,
                    }}
                  >
                    <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl" style={{ backgroundColor: color }} />
                    <div className="relative flex items-center justify-between gap-2">
                      <span className="font-mono text-[9px] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {status === "completed" && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                          ✓
                        </span>
                      )}
                    </div>
                    <div className="relative mt-5 font-sans text-[12px] font-semibold leading-5 text-white">
                      {lesson.title}
                    </div>
                    <div className="relative mt-2 font-mono text-[8px] uppercase tracking-[0.12em]" style={{ color }}>
                      {lesson.topic}
                    </div>
                    <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/3 rounded-full" style={{ backgroundColor: status === "completed" ? "#34D399" : color }} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedLesson && (
            <div className="absolute bottom-5 left-4 right-4 z-[60] sm:left-6 sm:right-6 lg:bottom-auto lg:left-auto lg:right-7 lg:top-1/2 lg:w-[320px] lg:-translate-y-1/2">
              <div className="overflow-hidden rounded-[24px] border border-white/15 bg-[#101832]/95 text-white shadow-[0_25px_80px_rgba(0,0,0,.4)] backdrop-blur-2xl">
                <div
                  className="h-1.5"
                  style={{ background: `linear-gradient(90deg, ${selectedLesson.color}, #A78BFA, #2DD4BF)` }}
                />
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: selectedLesson.color, boxShadow: `0 0 12px ${selectedLesson.color}` }} />
                    <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-slate-300">
                      {selectedLesson.level} / Lesson
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onCloseLesson}
                    aria-label="Close lesson"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                <div className="p-5">
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em]" style={{ color: selectedLesson.color }}>
                    {selectedLesson.topic}
                  </div>
                  <h3 className="mt-3 font-display text-[30px] leading-[1.02] tracking-[-0.035em] text-white">
                    {selectedLesson.title}
                  </h3>
                  <p className="mt-4 font-sans text-[12px] leading-6 text-slate-300">
                    {selectedLesson.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      `${selectedLesson.minutes} min`,
                      `${selectedLesson.steps} steps`,
                      ...selectedLesson.tags.slice(0, 2),
                    ].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={selectedLesson.href}
                    className="group mt-6 flex w-full items-center justify-between rounded-[15px] px-5 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                    style={{
                      background: `linear-gradient(110deg, ${selectedLesson.color}, #6658D8)`,
                      boxShadow: `0 10px 30px ${selectedLesson.color}35`,
                    }}
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
  );
}
