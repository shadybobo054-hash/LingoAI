
"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type PracticeTool = {
  title: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  duration: string;
};

const practiceTools: PracticeTool[] = [
  {
    title: "Quick Play",
    label: "WARM UP",
    description: "A quick mix of English challenges to get your brain moving.",
    icon: "⚡",
    color: "from-amber-400 to-orange-500",
    href: "/practice/quick-play",
    duration: "5–10 min",
  },
  {
    title: "Vocabulary",
    label: "BUILD YOUR WORDS",
    description: "Learn useful words, review meanings, and grow your vocabulary.",
    icon: "📚",
    color: "from-emerald-400 to-teal-500",
    href: "/vocabulary",
    duration: "10 min",
  },
  {
    title: "Listening",
    label: "TRAIN YOUR EAR",
    description: "Understand everyday English through real-life listening practice.",
    icon: "🎧",
    color: "from-sky-400 to-blue-600",
    href: "/listening",
    duration: "5–15 min",
  },
  {
    title: "Grammar",
    label: "MAKE IT CLICK",
    description: "Understand the rules, then test what you know with short quizzes.",
    icon: "✍️",
    color: "from-violet-400 to-indigo-600",
    href: "/practice/grammar",
    duration: "10 min",
  },
  {
    title: "Sentence Building",
    label: "PUT IT TOGETHER",
    description: "Arrange words into natural sentences and improve your word order.",
    icon: "🧩",
    color: "from-pink-400 to-rose-600",
    href: "/practice/sentence-building",
    duration: "8 min",
  },
  {
    title: "Pronunciation",
    label: "SPEAK CLEARLY",
    description: "Practice sounds, rhythm, and speaking with more confidence.",
    icon: "🎙️",
    color: "from-cyan-400 to-teal-600",
    href: "/practice/pronunciation",
    duration: "5–10 min",
  },
];

const missions = [
  {
    id: 1,
    title: "First Meeting",
    subtitle: "Meet & introduce yourself",
    level: "A1–A2",
    icon: "👋",
    description:
      "Meet someone new, introduce yourself, and keep a friendly conversation going.",
    position: "left-[5%] top-[17%]",
  },
  {
    id: 2,
    title: "At the Café",
    subtitle: "Order like a local",
    level: "A2",
    icon: "☕",
    description:
      "Order a drink, ask about the menu, and practice polite everyday expressions.",
    position: "right-[5%] top-[43%]",
  },
  {
    id: 3,
    title: "City Explorer",
    subtitle: "Shopping & directions",
    level: "B1",
    icon: "🗺️",
    description:
      "Ask for directions, compare prices, and handle common situations around town.",
    position: "left-[23%] bottom-[10%]",
  },
];

const learningPaths = [
  { title: "Everyday English", icon: "💬", color: "violet", mission: 1 },
  { title: "Travel Adventures", icon: "✈️", color: "sky", mission: 2 },
  { title: "Career & Business", icon: "💼", color: "amber", mission: 3 },
  { title: "Hobbies & Culture", icon: "🎮", color: "emerald", mission: 1 },
];

const week = [
  { day: "MON", value: 32 },
  { day: "TUE", value: 58 },
  { day: "WED", value: 42 },
  { day: "THU", value: 78 },
  { day: "FRI", value: 50 },
  { day: "SAT", value: 88 },
  { day: "SUN", value: 65 },
];

export default function PracticePage() {
  const [dark, setDark] = useState(true);
  const [selectedMission, setSelectedMission] = useState(1);
  const [completed, setCompleted] = useState<number[]>([]);
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const [mood, setMood] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const rawCompleted = localStorage.getItem("lingoai-odyssey-completed");
      const parsed: unknown = rawCompleted ? JSON.parse(rawCompleted) : [];
      if (
        Array.isArray(parsed) &&
        parsed.every((item) => typeof item === "number")
      ) {
        setCompleted(parsed);
      }
      setNote(localStorage.getItem("lingoai-odyssey-note") || "");
      setDark(localStorage.getItem("lingoai-practice-theme") !== "light");
    } catch {
      // Keep safe defaults if browser storage is unavailable.
    }
    setMounted(true);
  }, []);

  const activeMission = useMemo(
    () => missions.find((mission) => mission.id === selectedMission) || missions[0],
    [selectedMission]
  );

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("lingoai-practice-theme", next ? "dark" : "light");
    } catch {
      // Theme still works for the current page.
    }
  }

  function toggleComplete(id: number) {
    setCompleted((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      try {
        localStorage.setItem("lingoai-odyssey-completed", JSON.stringify(next));
      } catch {
        // Keep the state for this session if storage is unavailable.
      }
      return next;
    });
  }

  function saveNote() {
    try {
      localStorage.setItem("lingoai-odyssey-note", note);
      setSaved(true);
      window.setTimeout(() => setSaved(false), 1800);
    } catch {
      setSaved(false);
    }
  }

  const page = dark
    ? "bg-[#060a18] text-white"
    : "bg-[#f3f6fc] text-slate-900";
  const surface = dark
    ? "border-white/[0.09] bg-[#0b1227]"
    : "border-slate-200 bg-white";
  const muted = dark ? "text-slate-400" : "text-slate-500";
  const heading = dark ? "text-white" : "text-slate-900";
  const innerSurface = dark
    ? "border-white/[0.07] bg-white/[0.025]"
    : "border-slate-100 bg-slate-50";

  return (
    <main
      dir="ltr"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${page}`}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-violet-600/[0.12] blur-[130px]" />
        <div className="absolute -left-32 top-[35%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.10] blur-[130px]" />
        <div className="absolute bottom-0 right-[30%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-9 lg:py-9">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-5">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-2xl shadow-lg shadow-violet-600/20 transition group-hover:rotate-6">
              ✦
            </span>
            <span>
              <span className={`block text-sm font-black tracking-[0.18em] ${heading}`}>
                LINGOAI
              </span>
              <span className={`mt-1 block text-xs ${muted}`}>
                Your personal learning universe
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className={`hidden rounded-xl border px-4 py-2.5 text-sm font-semibold transition hover:border-violet-400/50 sm:block ${surface}`}
            >
              ← Home
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition hover:-translate-y-0.5 ${surface}`}
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <Link
              href="/ai-tutor"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              AI Tutor ↗
            </Link>
          </div>
        </header>

        <section className="relative mb-9 overflow-hidden rounded-[30px] border border-violet-400/20 bg-[#10132d]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(124,58,237,0.25),transparent_45%),radial-gradient(ellipse_at_10%_100%,rgba(14,165,233,0.17),transparent_45%)]" />
          <div className="absolute right-[12%] top-[-80px] h-64 w-64 rounded-full border border-violet-400/10" />
          <div className="absolute right-[15%] top-[-50px] h-52 w-52 rounded-full border border-violet-400/10" />

          <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_280px] lg:items-center lg:p-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-cyan-300 sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                YOUR NEXT LEVEL STARTS HERE
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn practice into
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  real progress.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Speak with confidence, sharpen your grammar, and build vocabulary
                through an interactive English learning world.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/practice/quick-play"
                  className="rounded-xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10"
                >
                  Start Quick Play <span className="ml-2">↗</span>
                </Link>
                <a
                  href="#learning-map"
                  className="rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Your World
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
                <span>✦ Skill-based practice</span>
                <span>✦ Real-life scenarios</span>
                <span>✦ Track your journey</span>
              </div>
            </div>

            <div className="relative mx-auto flex h-56 w-full max-w-[260px] items-center justify-center lg:h-64">
              <div className="absolute h-48 w-48 rounded-full border border-violet-400/20 lg:h-56 lg:w-56" />
              <div className="absolute h-36 w-36 rounded-full border border-cyan-400/20" />
              <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-600/30 blur-xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-[30px] border border-white/20 bg-gradient-to-br from-blue-500 to-violet-600 text-5xl shadow-2xl shadow-violet-500/30">
                🚀
              </div>
              <div className="absolute left-0 top-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#151b39]/95 px-3 py-2.5 shadow-xl">
                <span className="text-xl">🎯</span>
                <span>
                  <span className="block text-[10px] font-bold text-white">Stay focused</span>
                  <span className="mt-0.5 block text-[9px] text-slate-400">One step at a time</span>
                </span>
              </div>
              <div className="absolute bottom-5 right-0 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#151b39]/95 px-3 py-2.5 shadow-xl">
                <span className="text-xl">⚡</span>
                <span>
                  <span className="block text-[10px] font-bold text-white">Keep growing</span>
                  <span className="mt-0.5 block text-[9px] text-slate-400">Every day counts</span>
                </span>
              </div>
              <span className="absolute right-5 top-3 animate-bounce text-2xl">✦</span>
              <span className="absolute bottom-8 left-8 text-xl text-cyan-300">+</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-violet-400">
                YOUR TOOLKIT
              </p>
              <h2 className={`text-2xl font-black sm:text-3xl ${heading}`}>
                Choose your practice
              </h2>
              <p className={`mt-2 text-sm ${muted}`}>
                Pick one skill, jump in, and build confidence one round at a time.
              </p>
            </div>
            <span className={`pb-1 text-xs ${muted}`}>06 TRAINING MODES</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {practiceTools.map((tool, index) => (
              <article
                key={tool.title}
                className={`group relative overflow-hidden rounded-[26px] border p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  dark
                    ? "border-white/[0.09] bg-[#0b1227] hover:border-white/20 hover:shadow-violet-950/20"
                    : "border-slate-200 bg-white hover:border-violet-200 hover:shadow-slate-200/70"
                }`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={`absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${tool.color} opacity-[0.10] blur-3xl transition group-hover:opacity-25`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-2xl shadow-lg transition duration-300 group-hover:rotate-3 group-hover:scale-105`}>
                      {tool.icon}
                    </div>
                    <span className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${dark ? "border-white/10 bg-white/[0.03] text-slate-300" : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                      {tool.duration}
                    </span>
                  </div>
                  <p className="mt-5 text-[10px] font-black tracking-[0.17em] text-violet-400">
                    {tool.label}
                  </p>
                  <h3 className={`mt-2 text-xl font-black ${heading}`}>{tool.title}</h3>
                  <p className={`mt-3 min-h-[72px] text-sm leading-6 ${muted}`}>
                    {tool.description}
                  </p>
                  <Link
                    href={tool.href}
                    className={`mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${tool.color} px-4 py-3 text-xs font-black text-white shadow-lg transition hover:brightness-110`}
                  >
                    Start training <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <section className="min-w-0 space-y-7">
            <article className={`rounded-[26px] border p-5 sm:p-6 ${surface}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-400">
                    ACTIVITY OVERVIEW
                  </p>
                  <h3 className={`mt-2 text-xl font-black ${heading}`}>
                    Your Learning Activity
                  </h3>
                  <p className={`mt-1 text-xs ${muted}`}>
                    Your saved mission progress on this device.
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl">
                  📊
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className={`rounded-2xl border p-4 ${innerSurface}`}>
                  <p className={`text-xs ${muted}`}>Missions completed</p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <span className={`text-3xl font-black ${heading}`}>{completed.length}</span>
                    <span className="text-xs font-bold text-emerald-400">/ 3 missions</span>
                  </div>
                  <div className={`mt-3 h-1.5 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-slate-200"}`}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500"
                      style={{ width: `${(completed.length / missions.length) * 100}%` }}
                    />
                  </div>
                </div>
                <div className={`rounded-2xl border p-4 ${innerSurface}`}>
                  <p className={`text-xs ${muted}`}>Daily goal</p>
                  <p className={`mt-3 text-3xl font-black ${heading}`}>10 min</p>
                  <p className="mt-2 text-xs text-violet-400">Little steps add up</p>
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h4 className={`text-sm font-bold ${heading}`}>Weekly activity</h4>
                  <span className={`text-[10px] ${muted}`}>Sample activity view</span>
                </div>
                <div className="flex h-32 items-end justify-between gap-2 sm:gap-4">
                  {week.map((item, index) => (
                    <div key={item.day} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
                      <div className="relative flex h-full w-full items-end justify-center">
                        <div
                          className={`w-full max-w-8 rounded-t-lg transition-all duration-500 group-hover:brightness-125 ${
                            index === 5
                              ? "bg-gradient-to-t from-violet-700 to-cyan-300"
                              : dark
                                ? "bg-gradient-to-t from-indigo-900 to-violet-500/80"
                                : "bg-gradient-to-t from-blue-200 to-violet-400"
                          }`}
                          style={{ height: `${item.value}%` }}
                          title={`${item.day}: ${item.value}% sample activity`}
                        />
                      </div>
                      <span className={`text-[9px] font-bold ${muted}`}>{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className={`rounded-[26px] border p-5 sm:p-6 ${surface}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-2xl">
                  📔
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.17em] text-cyan-400">
                    YOUR PERSONAL SPACE
                  </p>
                  <h3 className={`mt-1 text-xl font-black ${heading}`}>Learning Journal</h3>
                </div>
              </div>
              <p className={`mt-4 text-sm leading-6 ${muted}`}>
                Save a new expression, a tricky word, or the skill you want to practice next.
              </p>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Today I learned... Next, I want to improve..."
                rows={4}
                className={`mt-4 w-full resize-y rounded-2xl border p-4 text-sm leading-6 outline-none transition focus:border-violet-400 ${
                  dark
                    ? "border-white/10 bg-[#060b19] text-white placeholder:text-slate-600"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                }`}
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <span className={`text-[10px] ${muted}`}>🔒 Saved locally on this device</span>
                <button
                  type="button"
                  onClick={saveNote}
                  className="rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-xs font-bold text-violet-400 transition hover:bg-violet-500/15"
                >
                  {saved ? "✓ Note saved" : "Save journal ↗"}
                </button>
              </div>
              <div className={`mt-6 border-t pt-5 ${dark ? "border-white/[0.08]" : "border-slate-100"}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className={`text-sm font-bold ${heading}`}>How was your session?</h4>
                  <span className={`text-[10px] ${muted}`}>{mood + 1} / 5</span>
                </div>
                <div className="mt-4 flex gap-2">
                  {[
                    { emoji: "😫", label: "Difficult" },
                    { emoji: "😕", label: "Not great" },
                    { emoji: "😐", label: "Okay" },
                    { emoji: "🙂", label: "Good" },
                    { emoji: "🤩", label: "Excellent" },
                  ].map((item, index) => (
                    <button
                      type="button"
                      key={item.label}
                      onClick={() => setMood(index)}
                      aria-label={item.label}
                      aria-pressed={mood === index}
                      className={`flex h-11 min-w-0 flex-1 items-center justify-center rounded-xl text-xl transition duration-200 hover:-translate-y-1 ${
                        mood === index
                          ? "border border-cyan-400/40 bg-cyan-400/10 shadow-lg shadow-cyan-500/5"
                          : dark
                            ? "border border-white/[0.07] bg-white/[0.025]"
                            : "border border-slate-100 bg-slate-50"
                      }`}
                    >
                      {item.emoji}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <section id="learning-map" className="min-w-0 space-y-6">
            <article className="overflow-hidden rounded-[28px] border border-indigo-400/20 bg-[#0b1025] shadow-2xl shadow-indigo-950/20">
              <div className="relative overflow-hidden border-b border-white/[0.08] bg-gradient-to-r from-[#17163b] via-[#111b3b] to-[#092a40] p-5 sm:p-7">
                <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet-500/20 blur-[80px]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-3 py-1.5 text-[9px] font-bold tracking-[0.17em] text-violet-200">
                      ✦ INTERACTIVE LEARNING
                    </div>
                    <h2 className="text-2xl font-black text-white sm:text-3xl">Learning World</h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                      Explore destinations, complete missions, and unlock confidence in English.
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-3xl">
                    🧭
                  </div>
                </div>
                <div className="relative mt-6 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500"
                      style={{ width: `${(completed.length / missions.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-cyan-200">
                    {completed.length}/{missions.length}
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-5">
                <div className="relative h-[410px] overflow-hidden rounded-[22px] border border-cyan-300/10 bg-[#081a33] sm:h-[470px]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.20),transparent_40%),radial-gradient(ellipse_at_80%_60%,rgba(6,182,212,0.17),transparent_45%),linear-gradient(145deg,#111534,#092c46_60%,#101c3b)]" />
                  <div
                    className="absolute inset-0 opacity-[0.14]"
                    style={{
                      backgroundImage: "radial-gradient(#a5f3fc 1px,transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#071225]/80 px-3 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-bold tracking-wider text-cyan-100">WORLD MAP</span>
                  </div>
                  <div className="absolute right-4 top-4 z-10 rounded-xl border border-white/10 bg-[#071225]/80 px-3 py-2 text-[10px] text-slate-300 backdrop-blur-md">
                    3 destinations
                  </div>

                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 600 470"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="practiceJourneyGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="50%" stopColor="#67e8f9" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M105 100 C210 100 200 200 370 210 S450 305 320 365 S190 400 170 355"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="17"
                      opacity=".08"
                      strokeLinecap="round"
                    />
                    <path
                      d="M105 100 C210 100 200 200 370 210 S450 305 320 365 S190 400 170 355"
                      fill="none"
                      stroke="url(#practiceJourneyGradient)"
                      strokeWidth="2.5"
                      strokeDasharray="7 9"
                      strokeLinecap="round"
                      opacity=".85"
                    />
                  </svg>

                  <div className="absolute left-[8%] top-[26%] text-4xl opacity-70 sm:text-5xl">🏰</div>
                  <div className="absolute right-[9%] top-[53%] text-4xl opacity-70 sm:text-5xl">🏝️</div>
                  <div className="absolute bottom-[12%] left-[39%] text-4xl opacity-70 sm:text-5xl">🏙️</div>
                  <div className="absolute right-[20%] top-[20%] text-2xl opacity-60">☁️</div>
                  <div className="absolute bottom-[26%] right-[10%] text-2xl opacity-60">⛵</div>
                  <div className="absolute left-[42%] top-[16%] text-xl opacity-60">✦</div>

                  {missions.map((mission) => {
                    const isComplete = completed.includes(mission.id);
                    const isSelected = selectedMission === mission.id;
                    return (
                      <button
                        type="button"
                        key={mission.id}
                        onClick={() => setSelectedMission(mission.id)}
                        aria-pressed={isSelected}
                        className={`absolute z-10 flex max-w-[175px] items-center gap-2 rounded-2xl border p-2 text-left shadow-xl backdrop-blur-md transition duration-300 hover:scale-105 sm:gap-3 sm:p-3 ${mission.position} ${
                          isSelected
                            ? "border-cyan-300/80 bg-gradient-to-r from-violet-700/95 to-blue-700/95 shadow-lg shadow-cyan-500/10"
                            : "border-white/15 bg-[#08142b]/95 hover:border-cyan-300/50"
                        }`}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg sm:h-10 sm:w-10 sm:text-xl ${isComplete ? "bg-emerald-400/15" : "bg-white/[0.08]"}`}>
                          {isComplete ? "✓" : mission.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10px] font-black leading-4 text-white sm:text-xs">{mission.title}</span>
                          <span className="mt-1 block text-[9px] text-cyan-100/70">{mission.level}</span>
                        </span>
                      </button>
                    );
                  })}

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#071225]/80 px-3 py-2 text-[9px] text-slate-300 backdrop-blur-md">
                    ✦ Choose your next destination
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-2xl">
                      {activeMission.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-black text-white">{activeMission.title}</h3>
                        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-2 py-1 text-[9px] font-bold text-cyan-200">
                          {activeMission.level}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">{activeMission.subtitle}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{activeMission.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => toggleComplete(selectedMission)}
                      className={`rounded-xl border px-3 py-3 text-xs font-bold transition ${
                        completed.includes(selectedMission)
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-cyan-300/40"
                      }`}
                    >
                      {completed.includes(selectedMission) ? "✓ Completed — Undo" : "○ Mark as completed"}
                    </button>
                    <Link
                      href={`/ai-tutor?mode=conversation&scenario=${encodeURIComponent(activeMission.title)}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-3 text-xs font-black text-white transition hover:brightness-110"
                    >
                      Start this mission <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className={`rounded-[26px] border p-5 sm:p-6 ${surface}`}>
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-violet-400">DISCOVER MORE</p>
                  <h3 className={`mt-2 text-xl font-black ${heading}`}>Explore learning paths</h3>
                  <p className={`mt-2 text-sm ${muted}`}>Choose the world you want to explore.</p>
                </div>
                <span className="text-2xl">🧭</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {learningPaths.map((item) => {
                  const active = missions.find((mission) => mission.id === selectedMission)?.id === item.mission;
                  const tone =
                    item.color === "violet"
                      ? "bg-violet-500/15"
                      : item.color === "sky"
                        ? "bg-sky-500/15"
                        : item.color === "amber"
                          ? "bg-amber-500/15"
                          : "bg-emerald-500/15";
                  return (
                    <button
                      type="button"
                      key={item.title}
                      onClick={() => setSelectedMission(item.mission)}
                      aria-pressed={active}
                      className={`group flex min-h-[92px] items-center gap-3 rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-0.5 ${
                        active
                          ? "border-violet-400/40 bg-violet-500/[0.09]"
                          : dark
                            ? "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                            : "border-slate-100 bg-slate-50 hover:border-violet-200"
                      }`}
                    >
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl transition group-hover:scale-105 ${tone}`}>
                        {item.icon}
                      </span>
                      <span className={`flex-1 text-sm font-bold ${heading}`}>{item.title}</span>
                      <span className={`text-lg ${active ? "text-violet-400" : muted}`}>→</span>
                    </button>
                  );
                })}
              </div>
            </article>
          </section>
        </div>

        <footer className={`mt-9 flex flex-wrap items-center justify-between gap-4 border-t pt-6 ${dark ? "border-white/[0.08]" : "border-slate-200"}`}>
          <div>
            <p className={`text-sm font-black ${heading}`}>LINGOAI <span className="text-violet-400">✦</span></p>
            <p className={`mt-1 text-xs ${muted}`}>Your journey. Your pace. Your progress.</p>
          </div>
          <p className={`text-xs ${muted}`}>Keep learning. Keep exploring. Keep growing.</p>
        </footer>
      </div>
      {!mounted ? null : null}
    </main>
  );
}

