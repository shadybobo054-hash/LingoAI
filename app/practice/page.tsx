"use client";

import Link from "next/link";
import { useState } from "react";

const modes = [
  {
    title: "Quick 5 questions",
    description: "Five mixed questions. About two minutes.",
    color: "#FFFFFF",
    background: "#2B3A66",
  },
  {
    title: "5-minute practice",
    description: "Twelve questions, a little of everything.",
    color: "#283348",
    background: "#FFF0EC",
  },
  {
    title: "Random challenge",
    description: "One surprise question at a time, no end.",
    color: "#283348",
    background: "var(--surf)",
  },
];

const topics = [
  { label: "Mixed practice", color: "#CE543B", background: "#FFF0EC" },
  { label: "Meaning", color: "#0E8F69", background: "#E8FAF3" },
  { label: "Vocabulary", color: "#0E8F69", background: "#E8FAF3" },
  { label: "Grammar", color: "#2477D1", background: "#EAF5FF" },
  { label: "Sentence building", color: "#6A52EE", background: "#F1EEFE" },
  { label: "Listening", color: "#0A7E99", background: "#E4F6FB" },
  { label: "Pronunciation", color: "#565AD7", background: "#EEF0FF" },
];

export default function PracticePage() {
  const [activeMode, setActiveMode] = useState("Quick 5 questions");
  const [activeTopic, setActiveTopic] = useState("Mixed practice");

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="max-w-[650px]">
          <h1 className="font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
            Practice
          </h1>
          <p className="mt-3 max-w-[590px] text-base leading-6 text-[var(--ink2)] sm:text-lg">
            Short rounds with honest feedback. Nothing is scored, nothing is
            lost - just useful repetition.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {modes.map((mode) => {
            const selected = activeMode === mode.title;

            return (
              <button
                key={mode.title}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveMode(mode.title)}
                className={`group flex min-h-[158px] flex-col rounded-[22px] border p-6 text-left transition hover:-translate-y-1 hover:shadow-[var(--sh2)] ${selected ? "border-transparent shadow-[var(--sh2)]" : "border-[var(--line)] shadow-[var(--sh)]"}`}
                style={{ backgroundColor: mode.background, color: mode.color }}
              >
                <h2 className="font-display text-[1.75rem] font-medium leading-tight">
                  {mode.title}
                </h2>
                <p className="mt-2 max-w-[220px] text-sm leading-5" style={{ color: selected ? "rgba(255,255,255,0.7)" : "var(--ink2)" }}>
                  {mode.description}
                </p>
                <span className="mt-auto text-sm transition group-hover:translate-x-1">→</span>
              </button>
            );
          })}
        </div>

        <div className="mt-9">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink3)]">
            What do you want to practise?
          </p>
          <div className="mt-3 flex max-w-[900px] flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic.label}
                type="button"
                aria-pressed={activeTopic === topic.label}
                onClick={() => setActiveTopic(topic.label)}
                className={`rounded-[15px] border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${activeTopic === topic.label ? "border-transparent shadow-[var(--sh)]" : "border-transparent"}`}
                style={{ color: "#283348", backgroundColor: topic.background }}
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: topic.color }} />
                {topic.label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--ink3)]">
            Ready for {activeMode.toLowerCase()} focused on {activeTopic.toLowerCase()}.
          </p>
        </div>
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
