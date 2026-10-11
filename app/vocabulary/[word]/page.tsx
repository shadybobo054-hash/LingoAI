"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";

const WORDS: Record<string, any> = {
  curious: {
    meaning: "فضولي", level: "A2", pos: "Adjective",
    phonetic: "/ˈkjʊəriəs/",
    definition: "Wanting to know or learn more about something.",
    example: "She was curious about the new project.",
    situations: [
      ["☕", "At a café", "I'm curious about the new menu."],
      ["💼", "At work", "She was curious about the idea."],
      ["👥", "With friends", "I'm curious to know what happened."],
    ],
    options: [
      "I'm curious about what happens next.",
      "I curious to the store yesterday.",
      "She was curious very quickly.",
    ],
    answer: 0,
  },
  commute: {
    meaning: "يتنقل يوميًا", level: "B1", pos: "Verb",
    phonetic: "/kəˈmjuːt/",
    definition: "To travel regularly between your home and work or school.",
    example: "I commute to work every morning.",
    situations: [
      ["🚆", "To work", "I commute by train every day."],
      ["🏙️", "In the city", "Her commute takes an hour."],
      ["🎓", "To school", "He commutes to school by bus."],
    ],
    options: [
      "I commute to work every morning.",
      "I was commute yesterday.",
      "She commute very happy.",
    ],
    answer: 0,
  },
  affordable: {
    meaning: "ميسور التكلفة", level: "B1", pos: "Adjective",
    phonetic: "/əˈfɔːdəbl/",
    definition: "Not too expensive for most people to buy or use.",
    example: "The hotel is comfortable and affordable.",
    situations: [
      ["🏨", "Travel", "We found an affordable hotel."],
      ["🛍️", "Shopping", "This phone is surprisingly affordable."],
      ["🏠", "Daily life", "They need an affordable apartment."],
    ],
    options: [
      "The hotel is comfortable and affordable.",
      "I affordable to work every day.",
      "She affordably went yesterday.",
    ],
    answer: 0,
  },
  confident: {
    meaning: "واثق", level: "B1", pos: "Adjective",
    phonetic: "/ˈkɒnfɪdənt/",
    definition: "Feeling sure about your abilities or yourself.",
    example: "She feels more confident speaking English.",
    situations: [
      ["🎤", "Speaking", "I feel confident speaking English."],
      ["💼", "At work", "He sounds confident in meetings."],
      ["🎓", "Learning", "She became more confident over time."],
    ],
    options: [
      "She feels confident speaking English.",
      "I confident to school yesterday.",
      "He was confidently a book.",
    ],
    answer: 0,
  },
};

const STEPS = [
  ["Seen", "Discover the word", "bg-blue-500", "text-blue-300"],
  ["Heard", "Listen to the pronunciation", "bg-violet-500", "text-violet-300"],
  ["Practiced", "Practice in context", "bg-cyan-500", "text-cyan-300"],
  ["Used", "Write your own sentence", "bg-orange-500", "text-orange-300"],
  ["Mastered", "Use it naturally", "bg-emerald-500", "text-emerald-300"],
];

export default function WordPage({
  params,
}: {
  params: Promise<{ word: string }>;
}) {
  const { word: slug } = use(params);
  const key = slug.toLowerCase();
  const w = WORDS[key] || WORDS.curious;
  const word = WORDS[key] ? key : "curious";

  const [playing, setPlaying] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      const list = JSON.parse(
        localStorage.getItem("lingoai-saved-words") || "[]"
      );
      setSaved(list.includes(word));
    } catch {
      setSaved(false);
    }
  }, [word]);

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  function speak() {
    if (typeof window === "undefined") return;

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);

    setPlaying(true);
    window.speechSynthesis.speak(utterance);
  }

  function toggleSave() {
    try {
      const list: string[] = JSON.parse(
        localStorage.getItem("lingoai-saved-words") || "[]"
      );

      const next = saved
        ? list.filter((item) => item !== word)
        : [...new Set([...list, word])];

      localStorage.setItem("lingoai-saved-words", JSON.stringify(next));
      setSaved(!saved);
    } catch {
      setSaved(false);
    }
  }

  const panel =
    "rounded-2xl border border-white/10 bg-[#101B35]/90 shadow-lg shadow-black/10 backdrop-blur-sm";
  const muted = "text-slate-400";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B1C] px-4 py-6 text-white sm:px-6">
      {/* Colorful learning world */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-20 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-[110px]" />
        <div className="absolute -left-32 top-[450px] h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[110px]" />
        <div className="absolute right-[10%] top-[850px] h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#93C5FD 1px, transparent 1px), linear-gradient(90deg, #93C5FD 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <span className="absolute right-[12%] top-36 text-6xl font-black text-blue-300/[0.09]">
          Aa
        </span>
        <span className="absolute left-[8%] top-[600px] text-7xl font-black text-fuchsia-300/[0.07]">
          W
        </span>
        <span className="absolute right-[8%] top-[1050px] text-5xl font-black text-cyan-300/[0.07]">
          ✦
        </span>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/vocabulary"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
          >
            <span className="transition group-hover:-translate-x-1">←</span>
            Vocabulary
          </Link>

          <span className="text-right text-xs font-black tracking-[.15em] text-blue-300 sm:text-sm">
            LINGOAI <span className="text-slate-600">/ WORD WORLD</span>
          </span>
        </div>

        {/* Word hero */}
        <section className="group relative mt-6 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#14264A] via-[#11182F] to-[#281747] p-5 shadow-2xl shadow-blue-950/30 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-[70px] transition duration-700 group-hover:bg-blue-400/30" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-[70px]" />
          <div className="pointer-events-none absolute right-8 top-8 h-36 w-36 rounded-full border border-blue-300/10" />
          <div className="pointer-events-none absolute right-14 top-14 h-24 w-24 rounded-full border border-fuchsia-300/15" />

          <div className="relative grid gap-7 md:grid-cols-[1fr_230px] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-blue-300/30 bg-blue-400/15 px-3 py-1 text-xs font-black text-blue-200">
                  {w.level}
                </span>
                <span className="rounded-lg border border-fuchsia-300/25 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold text-fuchsia-200">
                  {w.pos}
                </span>
                <span className="rounded-lg border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  ✦ Word of the day
                </span>
              </div>

              <h1 className="mt-5 break-words bg-gradient-to-r from-white via-blue-100 to-fuchsia-200 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl">
                {word}
                <span className="text-cyan-300">.</span>
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xl font-bold text-cyan-200">
                  {w.meaning}
                </span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {w.phonetic}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                {w.definition}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={speak}
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:from-blue-400 hover:to-cyan-400 hover:shadow-cyan-500/20"
                >
                  {playing ? "■ Stop audio" : "▶ Listen"}
                </button>

                <button
                  type="button"
                  onClick={toggleSave}
                  className={`rounded-xl border px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                    saved
                      ? "border-amber-300/30 bg-amber-400/15 text-amber-200 hover:bg-amber-400/20"
                      : "border-fuchsia-300/20 bg-fuchsia-400/10 text-fuchsia-100 hover:border-fuchsia-300/40 hover:bg-fuchsia-400/20"
                  }`}
                >
                  {saved ? "★ Saved" : "☆ Save word"}
                </button>
              </div>
            </div>

            {/* Example card */}
            <div className="relative flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/20 p-5 shadow-lg shadow-cyan-950/10 transition duration-300 hover:border-cyan-200/40">
              <div className="absolute -right-3 -top-6 text-8xl font-black text-cyan-200/[0.08]">
                Aa
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-200">
                  ✦
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-200">
                  In a sentence
                </span>
              </div>
              <p className="relative mt-6 text-base font-semibold leading-7 text-white">
                “{w.example}”
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400" />
            </div>
          </div>
        </section>

        {/* Real life */}
        <section className="mt-9">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">
                Explore the world
              </p>
              <h2 className="mt-1 text-xl font-black text-white">
                Real-life English
              </h2>
            </div>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">
              03 examples
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {w.situations.map(
              ([icon, title, text]: string[], index: number) => {
                const colors = [
                  {
                    border: "hover:border-cyan-400/50",
                    icon: "border-cyan-300/20 bg-cyan-400/15 text-cyan-200",
                    line: "from-cyan-400 to-blue-500",
                    label: "text-cyan-300",
                  },
                  {
                    border: "hover:border-fuchsia-400/50",
                    icon: "border-fuchsia-300/20 bg-fuchsia-400/15 text-fuchsia-200",
                    line: "from-fuchsia-400 to-violet-500",
                    label: "text-fuchsia-300",
                  },
                  {
                    border: "hover:border-amber-400/50",
                    icon: "border-amber-300/20 bg-amber-400/15 text-amber-200",
                    line: "from-amber-400 to-orange-500",
                    label: "text-amber-300",
                  },
                ][index];

                return (
                  <article
                    key={title}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111A31] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.border}`}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors.line}`} />
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xl transition group-hover:scale-110 ${colors.icon}`}>
                        {icon}
                      </span>
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${colors.label}`}>
                          Situation 0{index + 1}
                        </span>
                        <h3 className="mt-0.5 text-sm font-black text-white">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      “{text}”
                    </p>
                    <div className={`mt-4 h-px w-full bg-gradient-to-r ${colors.line} opacity-30`} />
                  </article>
                );
              }
            )}
          </div>
        </section>

        {/* Learning timeline */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-[#15152F] to-[#101A32] p-5 shadow-lg shadow-violet-950/10 sm:p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-violet-300">
                Your journey
              </p>
              <h2 className="mt-1 text-xl font-black text-white">
                Word progress
              </h2>
            </div>
            <span className="rounded-xl border border-violet-300/20 bg-violet-400/15 px-3 py-2 text-xs font-black text-violet-200">
              {step + 1} / {STEPS.length}
            </span>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 transition-all duration-500"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          <div className="relative mt-6 grid gap-3 sm:grid-cols-5">
            {STEPS.map(([title, description, color, textColor], index) => {
              const completed = index <= step;
              const selected = index === step;

              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setStep(index)}
                  className={`group flex items-start gap-3 rounded-xl border p-3 text-left transition duration-200 hover:-translate-y-1 sm:flex-col ${
                    selected
                      ? "border-violet-300/40 bg-violet-400/10 shadow-lg shadow-violet-950/20"
                      : completed
                        ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                        : "border-white/5 bg-black/10 hover:border-white/15"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black transition ${
                      completed
                        ? `${color} text-white shadow-lg`
                        : "border border-white/10 bg-white/5 text-slate-500"
                    }`}
                  >
                    {completed ? "✓" : `0${index + 1}`}
                  </span>
                  <span>
                    <span className={`block text-sm font-black ${completed ? textColor : "text-slate-300"}`}>
                      {title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">
                      {description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Conversation */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#102A3B] via-[#111D36] to-[#201638] p-5 sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/15 text-xl">
                💬
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[.18em] text-cyan-300">
                  In context
                </p>
                <h2 className="mt-1 text-xl font-black text-white">
                  Everyday conversation
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-blue-300/15 bg-gradient-to-br from-blue-500/15 to-blue-500/5 p-4 sm:max-w-[75%]">
                <span className="mb-2 flex items-center gap-2 text-xs font-black text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Alex
                </span>
                <p className="text-sm leading-6 text-slate-100">
                  {word === "curious"
                    ? "Tell me more about your idea."
                    : word === "commute"
                      ? "How do you usually get to work?"
                      : word === "affordable"
                        ? "What do you look for when shopping?"
                        : "How do you feel when speaking English?"}
                </p>
              </div>

              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm border border-emerald-300/20 bg-gradient-to-br from-emerald-500/15 to-cyan-500/10 p-4 sm:max-w-[75%]">
                <span className="mb-2 flex items-center justify-end gap-2 text-xs font-black text-emerald-300">
                  You
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <p className="text-sm leading-6 text-slate-100">
                  {w.example}
                </p>
              </div>
            </div>

            <p className="mt-4 rounded-xl border border-cyan-300/10 bg-cyan-400/5 p-3 text-xs leading-5 text-cyan-100/80">
              ✦ Tip: Read the sentence aloud and try creating one of your own.
            </p>
          </div>
        </section>

        {/* Quiz */}
        <section className="relative mb-8 mt-8 overflow-hidden rounded-2xl border border-amber-300/20 bg-gradient-to-br from-[#2A2034] via-[#191831] to-[#101A32] p-5 shadow-xl shadow-amber-950/10 sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-gradient-to-br from-amber-400/20 to-orange-500/10 text-xl text-amber-200">
                ✦
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-amber-300">
                  Quick challenge
                </p>
                <h2 className="mt-1 text-lg font-black text-white">
                  Test your understanding
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Which sentence uses{" "}
              <strong className="text-amber-200">{word}</strong> correctly?
            </p>

            <div className="mt-4 grid gap-3">
              {w.options.map((option: string, index: number) => {
                const selected = answer === index;
                const correct = index === w.answer;

                let optionStyle =
                  "border-white/10 bg-white/[0.035] hover:border-amber-300/30 hover:bg-amber-400/5";

                if (selected && correct) {
                  optionStyle =
                    "border-emerald-400/60 bg-gradient-to-r from-emerald-500/15 to-cyan-500/10";
                } else if (selected) {
                  optionStyle =
                    "border-rose-400/50 bg-gradient-to-r from-rose-500/10 to-orange-500/10";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswer(index)}
                    className={`flex items-start gap-3 rounded-xl border p-3 text-left text-sm leading-6 transition duration-200 hover:-translate-y-0.5 ${optionStyle}`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                        selected && correct
                          ? "bg-emerald-400/20 text-emerald-200"
                          : selected
                            ? "bg-rose-400/20 text-rose-200"
                            : "bg-gradient-to-br from-amber-400/15 to-orange-400/10 text-amber-200"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="flex-1 pt-1 text-slate-100">
                      {option}
                    </span>

                    {selected && (
                      <span
                        className={`ml-auto pt-1 font-black ${
                          correct ? "text-emerald-300" : "text-rose-300"
                        }`}
                      >
                        {correct ? "✓" : "↻"}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {answer !== null && (
              <div
                className={`mt-4 rounded-xl border p-4 text-sm font-bold ${
                  answer === w.answer
                    ? "border-emerald-300/25 bg-gradient-to-r from-emerald-500/15 to-cyan-500/10 text-emerald-200"
                    : "border-orange-300/25 bg-gradient-to-r from-orange-500/10 to-rose-500/10 text-orange-200"
                }`}
              >
                {answer === w.answer
                  ? "✓ Excellent! You chose the correct sentence."
                  : "↻ Not quite! Try another answer."}
              </div>
            )}
          </div>
        </section>

        <div className="mb-4 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Made for your English journey
        </div>
      </div>
    </main>
  );
}
