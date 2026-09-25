import Link from "next/link";

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
  worldRef: React.RefObject<HTMLDivElement | null>;
}) {
  const completedCount = levelLessons.filter((lesson) => lesson.completed).length;

  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 lg:px-10">
      <div
        ref={worldRef}
        className={`relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surf)] shadow-[0_20px_70px_rgba(23,32,51,0.06)] transition-all duration-1000 ${
          worldVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 92%)",
          }}
        />

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
                  width: `${Math.max(4, (completedCount / Math.max(levelLessons.length, 1)) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative min-h-[720px] lg:min-h-[760px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--line2)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3d9bff]/[0.045] blur-3xl" />

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

          <div className="absolute inset-0 hidden lg:block">
            <svg
              className={`pointer-events-none absolute inset-[7%] h-[86%] w-[86%] transition-opacity duration-700 ${worldVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: worldVisible ? "1250ms" : "0ms" }}
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

            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-[126px] w-[126px] items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] shadow-[0_15px_50px_rgba(23,32,51,0.09)]">
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

            {levelLessons.map((lesson, index) => {
              const position = positions[index];
              const status = getLessonStatus(lesson, selectedLevel, index);
              const active = selectedLesson?.id === lesson.id;
              const isFirstLesson = index === 0;

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
                    opacity: worldVisible ? 1 : isFirstLesson ? 1 : 0,
                    transform: worldVisible
                      ? "translate(-50%, -50%) scale(1)"
                      : "translate(-50%, -50%) scale(0.55)",
                    transitionProperty: "left, top, opacity, transform",
                    transitionDuration: worldVisible ? "850ms" : "0ms",
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    transitionDelay: worldVisible
                      ? isFirstLesson ? "0ms" : `${260 + index * 90}ms`
                      : "0ms",
                  }}
                >
                  <div className="relative flex items-center gap-3">
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

                    <div
                      className={`max-w-[145px] transition-all duration-300 ${
                        active ? "translate-x-1" : "group-hover:translate-x-1"
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

          <div className="relative z-20 px-5 py-9 lg:hidden">
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

            <div className="grid grid-cols-2 gap-3">
              {levelLessons.map((lesson, index) => {
                const status = getLessonStatus(lesson, selectedLevel, index);
                const active = selectedLesson?.id === lesson.id;

                return (
                  <button
                    key={lesson.id}
                    type="button"
                    onClick={() => onSelectLesson(lesson)}
                    className={`group rounded-[20px] border p-4 text-left transition-all duration-500 ${worldVisible ? "translate-y-0 scale-100 opacity-100" : index === 0 ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-90 opacity-0"} ${
                      active
                        ? "border-[#3d9bff] bg-[#3d9bff] text-white shadow-lg shadow-[#3d9bff]/20"
                        : "border-[var(--line)] bg-[var(--surf)] hover:-translate-y-0.5 hover:border-[var(--line2)] hover:shadow-md"
                    }`}
                    style={{ transitionDelay: worldVisible ? `${index * 75}ms` : "0ms" }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[9px] ${active ? "text-white/70" : "text-[var(--ink2)]"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {status === "completed" && (
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            active ? "bg-white/15 text-white" : "bg-[#40a879]/10 text-[#40a879]"
                          }`}
                        >
                          ✓
                        </span>
                      )}
                    </div>

                    <div
                      className={`mt-5 font-sans text-[12px] font-semibold leading-5 ${
                        active ? "text-white" : "text-[var(--ink)]"
                      }`}
                    >
                      {lesson.title}
                    </div>

                    <div
                      className={`mt-2 font-mono text-[8px] uppercase tracking-[0.12em] ${
                        active ? "text-white/60" : "text-[var(--ink2)]"
                      }`}
                    >
                      {lesson.topic}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedLesson && (
            <div className="absolute bottom-6 left-5 right-5 z-[60] lg:bottom-auto lg:left-auto lg:right-7 lg:top-1/2 lg:w-[320px] lg:-translate-y-1/2">
              <div className="overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surf)] shadow-[0_25px_80px_rgba(23,32,51,0.16)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3d9bff]" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[var(--ink2)]">
                      {selectedLesson.level} / Lesson
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={onCloseLesson}
                    aria-label="Close lesson"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] transition-all hover:border-[var(--ink)] hover:text-[var(--ink)]"
                  >
                    ×
                  </button>
                </div>

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

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--surf2)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--ink2)]">
                      {selectedLesson.minutes} min
                    </span>
                    <span className="rounded-full bg-[var(--surf2)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--ink2)]">
                      {selectedLesson.steps} steps
                    </span>

                    {selectedLesson.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--surf2)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[var(--ink2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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
  );
}
