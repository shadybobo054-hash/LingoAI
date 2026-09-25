import Link from "next/link";

import { levels, topics, type Lesson, type Level } from "../data";
import { TopicButton } from "./LessonButtons";

const topicOptions = topics.filter((topic) => topic !== "Everything");

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
          Jump into a specific topic or explore everything available across your
          English journey.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
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
              onClick={onToggleShowAll}
              className="rounded-full border border-[var(--line)] bg-[var(--surf)] px-6 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:shadow-sm"
            >
              {showAll ? "Show less" : "Show all lessons"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export function BottomCta({
  selectedLevel,
  selectedLevelInfo,
  onLevelChange,
}: {
  selectedLevel: Level;
  selectedLevelInfo: { title: string; subtitle: string; description: string };
  onLevelChange: (level: Level) => void;
}) {
  return (
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
                onClick={() => onLevelChange(level)}
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
  );
}

export function Footer() {
  return (
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
  );
}
