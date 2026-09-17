"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  "Everything",
  "Short conversations",
  "Stories",
  "Everyday English",
  "Travel",
  "Work",
  "News-style",
];

const waveform = [18, 26, 20, 32, 24, 10, 28, 16, 8, 24, 26, 20, 30, 22, 12, 28, 18, 24, 10, 32, 26, 18, 22, 14, 28, 20, 12, 30, 18, 24, 14, 22];

const recordings = [
  {
    category: "Short conversations",
    title: "At the café: ordering coffee",
    description: "Two friends order at a busy counter. Listen for how they change their minds mid-sentence.",
    duration: "1:12",
    level: "Beginner",
    color: "#0A7E99",
    wide: true,
  },
  {
    category: "Everyday English",
    title: "Two flatmates plan the weekend",
    description: "Casual, fast, full of “maybe” and “what about”. This is how plans really get made.",
    duration: "1:26",
    level: "Beginner",
    color: "#0A7E99",
  },
  {
    category: "Travel",
    title: "A lost bag at the airport",
    description: "A calm problem-solving conversation. Notice how the details become clearer.",
    duration: "1:48",
    level: "Intermediate",
    color: "#0A7E99",
  },
  {
    category: "Work",
    title: "A two-minute team stand-up",
    description: "Updates, blockers and what needs to happen next in a real working rhythm.",
    duration: "1:35",
    level: "Intermediate",
    color: "#0A7E99",
  },
  {
    category: "News-style",
    title: "The city that planted ten thousand trees",
    description: "A short report with clear context, useful linking words and natural pace.",
    duration: "1:20",
    level: "Advanced",
    color: "#0A7E99",
  },
];

export default function ListeningPage() {
  const [activeTopic, setActiveTopic] = useState("Everything");
  const [playing, setPlaying] = useState<string | null>(null);

  const visibleRecordings = recordings.filter(
    (recording) =>
      activeTopic === "Everything" || recording.category === activeTopic,
  );

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="max-w-[590px]">
          <h1 className="font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
            Listening
          </h1>
          <p className="mt-3 max-w-[550px] text-base leading-6 text-[var(--ink2)] sm:text-lg">
            Audio first. Choose when to see the words - your ears get a fair
            chance that way.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              aria-pressed={activeTopic === topic}
              onClick={() => setActiveTopic(topic)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeTopic === topic ? "border-[#0A7E99] bg-[#0A7E99] text-white" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#0A7E99] hover:text-[#0A7E99]"}`}
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRecordings.map((recording) => {
            const isPlaying = playing === recording.title;

            return (
              <article
                key={recording.title}
                className={`sada-card flex min-h-[265px] flex-col rounded-[22px] p-5 sm:p-6 ${recording.wide ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: recording.color }}>
                    <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: recording.color }} />
                    {recording.category}
                  </p>
                  <span className="font-mono text-xs text-[var(--ink3)]">{recording.duration}</span>
                </div>

                <h2 className="mt-4 max-w-[580px] font-display text-[1.8rem] font-medium leading-tight sm:text-[2rem]">
                  {recording.title}
                </h2>
                <p className="mt-4 max-w-[620px] text-sm leading-6 text-[var(--ink2)]">
                  {recording.description}
                </p>

                <div className="mt-auto flex items-center gap-3 pt-6">
                  <button
                    type="button"
                    aria-label={`${isPlaying ? "Pause" : "Play"} ${recording.title}`}
                    aria-pressed={isPlaying}
                    data-speak={`${recording.title}. ${recording.description}`}
                    onClick={() => setPlaying(isPlaying ? null : recording.title)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E4F6FB] text-sm font-semibold text-[#0A7E99] transition hover:scale-105"
                  >
                    {isPlaying ? "Ⅱ" : "▶"}
                  </button>
                  <div className="flex h-8 flex-1 items-center justify-between gap-1 overflow-hidden">
                    {waveform.slice(0, recording.wide ? 32 : 24).map((height, index) => (
                      <span
                        key={`${recording.title}-${index}`}
                        className={`w-1.5 shrink-0 rounded-full transition ${isPlaying ? "bg-[#0A7E99]" : "bg-[#9BCBD8]"}`}
                        style={{ height: `${Math.max(8, height * (recording.wide ? 0.7 : 0.55))}px` }}
                      />
                    ))}
                  </div>
                  <span className="shrink-0 text-xs text-[var(--ink3)]">{recording.level}</span>
                </div>
              </article>
            );
          })}
        </div>

        {visibleRecordings.length === 0 && (
          <div className="sada-card mt-7 p-8 text-center">
            <h2 className="font-display text-3xl font-medium">No listening yet</h2>
            <p className="mt-2 text-[var(--ink2)]">Choose another topic to find an audio lesson.</p>
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
