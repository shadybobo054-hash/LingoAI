
"use client";

import { useState } from "react";
import Link from "next/link";

const modes = [
  {
    id: "quick",
    number: "01",
    title: "Quick Play",
    oldTitle: "Quick 5",
    time: "Quick 5 min",
    description: "Fast, focused rounds to keep your streak alive!",
    oldDescription: "A short focused round.",
    icon: "⏳",
  },
  {
    id: "five",
    number: "02",
    title: "5-minute",
    oldTitle: "5-minute",
    time: "5 minute session",
    description: "A balanced practice session built for your daily flow.",
    oldDescription: "A balanced practice session.",
    icon: "⚡",
  },
  {
    id: "random",
    number: "03",
    title: "Random",
    oldTitle: "Random",
    time: "Random challenge",
    description: "Keep going as long as you want and test yourself.",
    oldDescription: "Keep going as long as you want.",
    icon: "🎲",
  },
];

const focusAreas = [
  {
    id: "mixed",
    name: "Mixed practice",
    icon: "✨",
  },
  {
    id: "meaning",
    name: "Meaning",
    icon: "💡",
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    icon: "📖",
  },
  {
    id: "grammar",
    name: "Grammar",
    icon: "⚡",
  },
  {
    id: "sentence",
    name: "Sentence building",
    icon: "✍️",
  },
  {
    id: "listening",
    name: "Listening",
    icon: "🎧",
  },
  {
    id: "pronunciation",
    name: "Pronunciation",
    icon: "🎙️",
  },
];

export default function PracticePage() {
  const [activeMode, setActiveMode] = useState("quick");
  const [activeFocus, setActiveFocus] = useState("mixed");

  const selectedMode =
    modes.find((mode) => mode.id === activeMode) ?? modes[0];

  const selectedFocus =
    focusAreas.find((focus) => focus.id === activeFocus) ??
    focusAreas[0];

  return (
    <main className="min-h-screen bg-[#FAF8F4] font-sans text-[#0F1A24] antialiased selection:bg-[#00BCD4]/30">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">

        {/* =====================================================
            NAVBAR
        ====================================================== */}
        <nav className="mb-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/practice"
              className="font-serif text-3xl font-bold tracking-tight text-[#0F1A24]"
            >
              Practice<span className="text-[#00BCD4]">.</span>
            </Link>

            <p className="hidden max-w-[160px] border-l border-gray-200 pl-4 text-xs leading-tight text-gray-500 md:block">
              Build stronger English through short, focused practice.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-6 rounded-full border border-gray-100 bg-white px-6 py-2.5 shadow-sm md:flex">
            <Link
              href="/courses"
              className="text-sm font-medium transition hover:text-[#00BCD4]"
            >
              Explore
            </Link>

            <a
              href="#how-it-works"
              className="text-sm font-medium transition hover:text-[#00BCD4]"
            >
              How it works
            </a>

            <a
              href="#plans"
              className="text-sm font-medium transition hover:text-[#00BCD4]"
            >
              Plans
            </a>

            <a
              href="#community"
              className="text-sm font-medium transition hover:text-[#00BCD4]"
            >
              Community
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Link
              href="/lessons"
              className="rounded-full bg-[#0A4D80] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#083d66]"
            >
              Start Free
            </Link>

            <Link
              href="/ai-tutor"
              className="text-sm font-medium transition hover:text-[#00BCD4]"
            >
              Login
            </Link>
          </div>
        </nav>

        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          id="how-it-works"
          className="mb-20 grid items-start gap-8 md:grid-cols-12"
        >

          {/* Heading */}
          <div className="relative md:col-span-7">
            <h1 className="font-serif text-5xl font-bold leading-[1.1] text-[#0F1A24] lg:text-7xl">
              <span className="text-[#00BCD4]">.</span>
              The playful way
              <br />
              to master{" "}
              <span className="relative inline-block">
                English
                <span className="absolute -bottom-2 left-0 right-0 h-2 rounded-full bg-[#00BCD4]/20" />
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="pt-1 md:col-span-5 md:pt-4">
            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
              Short, focused interactive sessions that fit your daily flow.
              No boring rules, just natural practice.
            </p>

            <div className="flex flex-wrap items-center gap-5">

              <a
                href="#practice-options"
                className="rounded-full bg-[#0F1A24] px-6 py-3.5 font-medium text-white shadow-md transition hover:bg-[#182735]"
              >
                Choose Your Goal
              </a>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("practice-options")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="flex items-center gap-2 font-medium text-[#0F1A24] transition hover:text-[#00BCD4]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                  ▶
                </span>

                See how it works
              </button>

            </div>
          </div>
        </section>

        {/* =====================================================
            PRACTICE OPTIONS
        ====================================================== */}
        <section
          id="practice-options"
          className="scroll-mt-10"
        >

          {/* Section title */}
          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
            <div>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[1.5px] text-gray-400">
                BUILD YOUR SESSION
              </span>

              <h2 className="font-serif text-3xl font-bold text-[#0F1A24] md:text-4xl">
                How do you want to practise?
              </h2>
            </div>

            <span className="hidden text-xs text-gray-400 sm:block">
              Step 1 of 2
            </span>
          </div>

          {/* =================================================
              MODE CARDS
          ================================================= */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {modes.map((mode) => {
              const active = activeMode === mode.id;

              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveMode(mode.id)}
                  className={`group relative min-h-[260px] overflow-hidden rounded-3xl border-b-4 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                    active
                      ? "border-[#00BCD4] bg-[#0F1A24] text-white shadow-xl"
                      : "border-transparent border-gray-100 bg-white text-[#0F1A24] hover:shadow-md"
                  }`}
                >

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold ${
                        active
                          ? "text-[#00BCD4]"
                          : "text-gray-400"
                      }`}
                    >
                      {mode.number}
                    </span>

                    {active ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00BCD4] text-[10px] font-bold text-white">
                        ✓
                      </span>
                    ) : (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-400 transition group-hover:border-[#00BCD4] group-hover:text-[#00BCD4]">
                        →
                      </span>
                    )}
                  </div>

                  {/* Background icon */}
                  <div
                    className={`absolute bottom-3 right-4 select-none text-6xl transition duration-300 ${
                      active
                        ? "opacity-40 group-hover:scale-110"
                        : "opacity-10 group-hover:opacity-20"
                    }`}
                  >
                    {mode.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-20">
                    <span
                      className={`mb-1 block text-xs ${
                        active
                          ? "text-gray-400"
                          : "text-gray-400"
                      }`}
                    >
                      {mode.time}
                    </span>

                    <h3
                      className={`mb-2 text-2xl font-bold ${
                        active
                          ? "text-white"
                          : "text-[#0F1A24]"
                      }`}
                    >
                      {mode.title}
                    </h3>

                    <p
                      className={`max-w-[210px] text-xs leading-relaxed ${
                        active
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {mode.description}
                    </p>
                  </div>

                </button>
              );
            })}

          </div>
        </section>

        {/* =====================================================
            STEP 2 — FOCUS
        ====================================================== */}
        <section className="mt-20">

          <div className="mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
            <div>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[1.5px] text-gray-400">
                CHOOSE YOUR FOCUS
              </span>

              <h2 className="font-serif text-3xl font-bold text-[#0F1A24] md:text-4xl">
                What do you want to practise?
              </h2>
            </div>

            <span className="hidden text-xs text-gray-400 sm:block">
              Step 2 of 2
            </span>
          </div>

          {/* Focus cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {focusAreas.map((focus) => {
              const active = activeFocus === focus.id;

              return (
                <button
                  key={focus.id}
                  type="button"
                  onClick={() => setActiveFocus(focus.id)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-all ${
                    active
                      ? "border-[#0F1A24] bg-[#0F1A24] text-white shadow-md"
                      : "border-gray-100 bg-white text-[#0F1A24] hover:border-[#00BCD4] hover:shadow-sm"
                  }`}
                >
                  <span>{focus.name}</span>

                  <span>{focus.icon}</span>
                </button>
              );
            })}

          </div>

          {/* Remaining focus options */}
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">

            {focusAreas
              .filter((focus) =>
                ["sentence", "listening", "pronunciation"].includes(
                  focus.id
                )
              )
              .map((focus) => {
                const active = activeFocus === focus.id;

                return (
                  <button
                    key={focus.id}
                    type="button"
                    onClick={() => setActiveFocus(focus.id)}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-all ${
                      active
                        ? "border-[#0F1A24] bg-[#0F1A24] text-white shadow-md"
                        : "border-gray-100 bg-white text-[#0F1A24] hover:border-[#00BCD4] hover:shadow-sm"
                    }`}
                  >
                    <span>{focus.name}</span>

                    <span>{focus.icon}</span>
                  </button>
                );
              })}

          </div>
        </section>

        {/* =====================================================
            SELECTED SESSION
        ====================================================== */}
        <section className="mt-12 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[1.5px] text-[#00BCD4]">
                SELECTED SESSION
              </span>

              <h2 className="mb-2 font-serif text-3xl font-bold text-[#0F1A24]">
                {selectedMode.oldTitle}
              </h2>

              <p className="mb-3 text-sm text-gray-500">
                {selectedMode.oldDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
                  {selectedMode.time}
                </span>

                <span className="rounded-full bg-[#00BCD4]/10 px-3 py-1.5 text-xs font-medium text-[#008da0]">
                  Focus: {selectedFocus.name}
                </span>
              </div>
            </div>

            {/* Start */}
            <Link
              href={`/practice/${selectedMode.id}?focus=${selectedFocus.id}`}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0F1A24] px-7 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#00BCD4] md:w-auto"
            >
              Start practice
              <span className="text-lg">
                →
              </span>
            </Link>

          </div>
        </section>

        {/* =====================================================
            BOTTOM INFO CARDS
        ====================================================== */}
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Questions */}
          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <span className="mb-2 block text-xs font-semibold text-gray-400">
              QUESTIONS
            </span>

            <h3 className="mb-1 text-lg font-bold">
              {activeMode === "quick"
                ? "5 questions"
                : activeMode === "five"
                  ? "Timed practice"
                  : "Unlimited"}
            </h3>

            <p className="text-xs leading-relaxed text-gray-500">
              Practice with questions matched to your selected session.
            </p>
          </div>

          {/* AI */}
          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <span className="mb-2 block text-xs font-semibold text-gray-400">
              AI COACH
            </span>

            <h3 className="mb-1 text-lg font-bold">
              Smart feedback
            </h3>

            <p className="text-xs leading-relaxed text-gray-500">
              Get help when you make a mistake and understand why.
            </p>
          </div>

          {/* Streak */}
          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <span className="mb-2 block text-xs font-semibold text-gray-400">
              YOUR STREAK
            </span>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0F1A24]">
                  7
                </h3>

                <p className="text-xs text-gray-500">
                  days in a row
                </p>
              </div>

              <span className="text-3xl">
                🔥
              </span>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}

