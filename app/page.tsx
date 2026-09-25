
import Link from "next/link";
import DailyLesson from "./components/DailyLesson";
import ListeningCard from "./components/ListeningCard";
import ScrollReveal from "./components/ScrollReveal";
import QuickChallenge from "./components/QuickChallenge";

const learningWays = [
  {
    title: "Vocabulary",
    label: "Word of the day",
    description: "Build a vocabulary you can actually use.",
    color: "#099B78",
    href: "/practice/vocabulary",
  },
  {
    title: "Listening",
    label: "At the café: ordering coffee",
    description: "Train your ear with natural English.",
    color: "#0A7E99",
    href: "/practice/listening",
  },
  {
    title: "Speaking",
    label: "Say what you mean with confidence",
    description: "Practice speaking without overthinking every word.",
    color: "#CE543B",
    href: "/ai-tutor",
  },
  {
    title: "Grammar",
    label: "Build sentences that sound natural",
    description: "Understand the patterns behind everyday English.",
    color: "#6A52EE",
    href: "/practice",
  },
];

const waveform = [
  14, 24, 10, 32, 20, 40, 18, 28, 12, 34, 22, 38, 30, 18, 28, 42, 30, 20,
  34, 16, 28, 12, 36, 22, 44, 30, 20, 34, 14, 28, 38, 18, 32, 24, 40, 16,
  30, 22, 36, 18, 28,
];

const levels = [
  {
    level: "A1",
    title: "Beginner",
    description: "Start speaking with everyday words and simple phrases.",
    active: true,
  },
  {
    level: "A2",
    title: "Elementary",
    description: "Handle common conversations with more confidence.",
    active: false,
  },
  {
    level: "B1",
    title: "Intermediate",
    description: "Express ideas, opinions and experiences naturally.",
    active: false,
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    description: "Follow longer conversations and explain complex ideas.",
    active: false,
  },
  {
    level: "C1",
    title: "Advanced",
    description: "Use English comfortably across real situations.",
    active: false,
  },
];

const languages = ["English", "Spanish", "French", "Turkish", "Japanese"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--bg)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--brand-soft)] opacity-70 blur-3xl" />

          <div className="absolute bottom-[-15%] left-[-12%] h-[360px] w-[360px] rounded-full bg-[var(--surf2)] opacity-70 blur-3xl" />

          <div className="absolute right-[35%] top-[35%] h-[180px] w-[180px] rounded-full bg-[var(--brand)] opacity-[0.035] blur-3xl" />
        </div>

        <div className="page-container relative py-14 sm:py-20 lg:py-24">
          <ScrollReveal className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative z-10 max-w-[570px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--brand-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--brand-ink)] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
                No account. Just start.
              </div>

              <h1 className="font-display text-[3.5rem] font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem]">
                Learn English the
                <span className="block">way you actually</span>
                <span className="block">hear it.</span>
              </h1>

              <p className="mt-7 max-w-[500px] text-base leading-7 text-[var(--ink2)] sm:text-lg">
                Short lessons, real listening, a vocabulary you can touch, and
                a tutor that explains the why. Open a page and you are already
                learning.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/lessons"
                  className="sada-button inline-flex h-12 items-center justify-center rounded-full px-7 text-base"
                >
                  Start learning
                  <span className="ml-2 transition-transform duration-300">
                    →
                  </span>
                </Link>

                <Link
                  href="/dashboard"
                  className="group inline-flex h-12 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] px-7 text-base font-semibold text-[var(--ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[var(--sh)]"
                >
                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#565AD7]" />
                  Practice with AI
                </Link>
              </div>

              <p className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--ink3)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
                Everything below is live — tap anything.
              </p>
            </div>

            <div className="relative z-10">
              <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[var(--line)] bg-[var(--brand-soft)] opacity-70" />

              <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[var(--surf2)] opacity-80 blur-2xl" />

              <div className="relative">
                <ListeningCard
                  sentence="I will have a coffee and a glass of water please"
                  waveform={waveform}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTINUE LEARNING */}
      <section className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="page-container py-14 sm:py-18 lg:py-22">
          <ScrollReveal>
            {/* section heading */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />

                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-ink)]">
                    Continue learning
                  </p>
                </div>

                <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.045em] text-[var(--ink)] sm:text-5xl">
                  Your next step.
                </h2>

                <p className="mt-3 max-w-[520px] text-sm leading-6 text-[var(--ink2)]">
                  Keep your English moving with one focused lesson at a time.
                </p>
              </div>

              <Link
                href="/lessons"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line2)] bg-[var(--surf)] px-4 py-2.5 text-xs font-bold text-[var(--ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:text-[var(--brand-ink)] hover:shadow-[var(--sh)]"
              >
                View all

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* main learning command center */}
            <div className="mt-9 overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surf)] shadow-[var(--sh)]">
              {/* top meta */}
              <div className="flex flex-col gap-4 border-b border-[var(--line)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-soft)] font-mono text-[10px] font-bold text-[var(--brand-ink)]">
                    A1
                  </span>

                  <div>
                    <p className="text-xs font-bold text-[var(--ink)]">
                      Beginner
                    </p>

                    <p className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--ink3)]">
                      Lesson 02 · Present Perfect
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden h-1 w-28 overflow-hidden rounded-full bg-[var(--surf2)] sm:block">
                    <div className="h-full w-[20%] rounded-full bg-[var(--brand)]" />
                  </div>

                  <span className="font-mono text-[10px] font-bold text-[var(--brand-ink)]">
                    20%
                  </span>
                </div>
              </div>

              {/* lesson intro */}
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="border-b border-[var(--line)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[var(--brand-soft)] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--brand-ink)]">
                      Grammar
                    </span>

                    <span className="text-[var(--ink3)]">·</span>

                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--ink3)]">
                      6 min
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[600px] font-display text-[2.4rem] font-medium leading-[1] tracking-[-0.05em] text-[var(--ink)] sm:text-[3.3rem]">
                    Present
                    <span className="block text-[var(--brand-ink)]">
                      Perfect.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[520px] text-sm leading-7 text-[var(--ink2)] sm:text-[15px]">
                    Talk about things that started in the past and are still
                    happening now.
                  </p>

                  {/* lesson steps */}
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {[
                      ["01", "Words", false],
                      ["02", "Listen", false],
                      ["03", "Practice", true],
                      ["04", "Review", false],
                    ].map(([number, label, active]) => (
                      <div
                        key={label}
                        className={`flex items-center gap-2 rounded-full border px-3 py-2 ${
                          active
                            ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand-ink)]"
                            : "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink3)]"
                        }`}
                      >
                        <span className="font-mono text-[8px] font-bold">
                          {number}
                        </span>

                        <span className="text-[10px] font-bold">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* progress */}
                  <div className="mt-9">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--ink3)]">
                        Lesson progress
                      </span>

                      <span className="text-[10px] font-bold text-[var(--ink2)]">
                        20%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surf2)]">
                      <div className="h-full w-[20%] rounded-full bg-[var(--brand)] transition-all duration-700" />
                    </div>
                  </div>

                  <Link
                    href="/lessons/a1/greetings"
                    className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 text-sm font-bold !text-white shadow-[0_8px_25px_rgba(61,155,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2f8ee8] hover:shadow-[0_14px_32px_rgba(61,155,255,0.25)]"
                  >
                    <span className="!text-white">Continue lesson</span>

                    <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                {/* progress panel */}
                <div className="relative overflow-hidden bg-[var(--surf2)] p-6 sm:p-8 lg:p-10">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--brand-soft)] opacity-70 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--ink3)]">
                          Your progress
                        </p>

                        <p className="mt-1 text-xs font-medium text-[var(--ink2)]">
                          This week
                        </p>
                      </div>

                      <span className="text-xl">✦</span>
                    </div>

                    <div className="mt-8">
                      <p className="font-display text-6xl font-medium tracking-[-0.06em] text-[var(--ink)]">
                        7
                      </p>

                      <p className="mt-1 text-xs font-bold text-[var(--brand-ink)]">
                        day streak
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surf)] p-4">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--ink3)]">
                          XP
                        </p>

                        <p className="mt-2 text-xl font-bold text-[var(--ink)]">
                          240
                        </p>

                        <p className="mt-1 text-[10px] font-medium text-[var(--ink3)]">
                          this week
                        </p>
                      </div>

                      <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surf)] p-4">
                        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--ink3)]">
                          Lessons
                        </p>

                        <p className="mt-2 text-xl font-bold text-[var(--ink)]">
                          3 / 5
                        </p>

                        <p className="mt-1 text-[10px] font-medium text-[var(--ink3)]">
                          completed
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-[var(--line)] pt-5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#099B78]" />

                        <p className="text-xs font-semibold text-[var(--ink2)]">
                          You&apos;re on a good streak.
                        </p>
                      </div>

                      <p className="mt-2 text-[11px] leading-5 text-[var(--ink3)]">
                        Keep going today to make it 8 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 60 second challenge */}
            <div className="mt-5">
              <QuickChallenge />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WORD OF THE DAY */}
      <section className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="page-container py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="mx-auto max-w-[980px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#099B78]">
                    Vocabulary
                  </p>

                  <p className="mt-1.5 text-xs font-medium text-[var(--ink3)]">
                    A useful word for today
                  </p>
                </div>

                <span className="hidden rounded-full border border-[var(--line)] bg-[var(--surf)] px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--ink3)] sm:block">
                  Word 01
                </span>
              </div>

              <div className="mt-8 overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--surf)] shadow-[var(--sh)]">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative overflow-hidden border-b border-[var(--line)] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-11">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#099B78]/[0.07] blur-3xl" />

                    <div className="relative">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--ink3)]">
                        Adjective
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <h2 className="font-display text-[4rem] font-medium leading-none tracking-[-0.06em] text-[var(--ink)] sm:text-[5rem]">
                          curious
                        </h2>

                        <button
                          type="button"
                          aria-label="Play pronunciation"
                          className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-[0_8px_22px_rgba(61,155,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_rgba(61,155,255,0.3)]"
                        >
                          <span className="text-sm transition-transform duration-300 group-hover:scale-110">
                            ▶
                          </span>
                        </button>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--ink3)]">
                          /ˈkjʊə.ri.əs/
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[var(--line2)]" />

                        <span className="text-xs font-semibold text-[#099B78]">
                          curious
                        </span>
                      </div>

                      <div className="mt-8 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#099B78]" />

                        <span className="text-xs font-semibold text-[var(--ink2)]">
                          Learn it. Hear it. Use it.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-9 lg:p-11">
                    <div>
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">
                        Meaning
                      </p>

                      <p className="mt-3 max-w-[420px] font-display text-xl font-medium leading-8 tracking-[-0.02em] text-[var(--ink)] sm:text-2xl">
                        Wanting to know or learn more about something.
                      </p>
                    </div>

                    <div className="my-7 h-px bg-[var(--line)]" />

                    <div>
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">
                        In a sentence
                      </p>

                      <p className="mt-3 max-w-[420px] text-sm font-medium leading-7 text-[var(--ink2)]">
                        <span className="font-display text-lg italic text-[var(--ink)]">
                          “She was curious about how the machine worked.”
                        </span>
                      </p>
                    </div>

                    <Link
                      href="/practice/vocabulary"
                      className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-xs font-bold text-[var(--bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand)] hover:text-white"
                    >
                      Practice vocabulary

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEARNING WAYS */}
      <section className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="page-container py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="max-w-[620px]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink3)]">
                Explore
              </p>

              <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
                Learn in different ways.
              </h2>

              <p className="mt-4 max-w-[500px] text-sm leading-6 text-[var(--ink2)]">
                Change the kind of attention you give English.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10">
            {learningWays.map((item) => (
              <ScrollReveal key={item.title}>
                <Link
                  href={item.href}
                  className="group block border-t border-[var(--line)] py-5 transition duration-300 last:border-b hover:px-2"
                >
                  <div className="grid items-center gap-3 sm:grid-cols-[110px_1fr_auto] sm:gap-7">
                    <p
                      className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: item.color }}
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-current" />
                      {item.title}
                    </p>

                    <div>
                      <h3 className="font-display text-xl font-medium text-[var(--ink)] transition duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {item.label}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-[var(--ink2)] sm:text-sm">
                        {item.description}
                      </p>
                    </div>

                    <span
                      className="text-base transition duration-300 group-hover:translate-x-1"
                      style={{ color: item.color }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI TUTOR */}
      <section className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="page-container py-14 sm:py-18 lg:py-20">
          <ScrollReveal>
            <div className="group relative overflow-hidden rounded-[30px] bg-[#2F4277] px-6 py-8 shadow-[var(--sh)] transition-all duration-500 hover:shadow-[0_20px_55px_rgba(47,66,119,0.18)] sm:px-9 sm:py-9 lg:px-11 lg:py-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#8BA2FF]/15 blur-3xl transition-transform duration-700 group-hover:scale-110" />

              <div className="pointer-events-none absolute -bottom-20 left-[35%] h-48 w-48 rounded-full bg-[#6E83D8]/10 blur-3xl" />

              <div className="pointer-events-none absolute right-8 top-8 hidden gap-1.5 opacity-40 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B9C6FF]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#B9C6FF]/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#B9C6FF]/30" />
              </div>

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="max-w-[700px]">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-[#B9C6FF]">
                      ✦
                    </span>

                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B9C6FF]">
                      AI Tutor
                    </p>
                  </div>

                  <h2 className="mt-4 max-w-[650px] font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.035em] text-[#F7F9FF] sm:text-[2.6rem]">
                    Don&apos;t just get the answer.
                    <span className="block text-[#B9C6FF]">
                      Understand why.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-[570px] text-sm leading-6 text-white/65 sm:text-[15px]">
                    Ask about grammar, vocabulary, speaking or anything you
                    don&apos;t understand.
                  </p>
                </div>

                <Link
                  href="/ai-tutor"
                  aria-label="Open AI Tutor"
                  className="group/button relative z-10 inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 text-sm font-bold !text-white shadow-[0_8px_25px_rgba(61,155,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f8ee8] hover:shadow-[0_14px_32px_rgba(61,155,255,0.3)] sm:h-[52px] sm:px-7"
                >
                  <span className="!text-white">
                    Open AI Tutor
                  </span>

                  <span className="!text-white transition-transform duration-300 group-hover/button:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ED8C1]" />

                <p className="text-[11px] font-medium text-white/45">
                  Grammar · Vocabulary · Speaking · Conversation
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="page-container py-16 sm:py-20">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="max-w-[360px]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-ink)]">
                Your journey
              </p>

              <h2 className="mt-3 font-display text-3xl font-medium leading-[1] tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
                One step at a time.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--ink2)]">
                Finish each level and unlock the next stage.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-5 left-[17px] top-5 w-px bg-[var(--line)]" />

              <div>
                {levels.map((item) => (
                  <Link
                    key={item.level}
                    href="/lessons"
                    className="group relative flex gap-5 py-3.5 transition duration-300"
                  >
                    <div className="relative z-10 flex w-9 shrink-0 justify-center">
                      <span
                        className={`mt-1.5 flex h-2.5 w-2.5 rounded-full border-2 ${
                          item.active
                            ? "border-[var(--brand)] bg-[var(--brand)] shadow-[0_0_0_5px_var(--brand-soft)]"
                            : "border-[var(--line2)] bg-[var(--bg)] group-hover:border-[var(--brand)]"
                        }`}
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 items-center justify-between gap-5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-[10px] font-bold ${
                              item.active
                                ? "text-[var(--brand-ink)]"
                                : "text-[var(--ink3)]"
                            }`}
                          >
                            {item.level}
                          </span>

                          {item.active && (
                            <span className="rounded-full bg-[var(--brand-soft)] px-2 py-0.5 text-[9px] font-bold text-[var(--brand-ink)]">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="mt-1 font-display text-lg font-medium text-[var(--ink)]">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-xs leading-5 text-[var(--ink2)]">
                          {item.description}
                        </p>
                      </div>

                      <span className="hidden text-xs font-semibold text-[var(--ink3)] transition group-hover:translate-x-1 group-hover:text-[var(--brand-ink)] sm:block">
                        View →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="page-container py-8 sm:py-10">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-start">
            <div className="max-w-[300px]">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-semibold text-[var(--btn-ink)]">
                  ●
                </span>

                <span className="font-display text-xl font-semibold text-[var(--ink)]">
                  LingoAI
                </span>
              </Link>

              <p className="mt-3 text-xs leading-5 text-[var(--ink3)]">
                A calm place to learn English through listening, practice and
                real conversations.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">
                Languages
              </p>

              <div className="mt-2 flex max-w-[400px] flex-wrap gap-2">
                {languages.map((language, index) => (
                  <span
                    key={language}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-medium ${
                      index === 0
                        ? "border-[var(--line2)] bg-[var(--brand-soft)] text-[var(--brand-ink)]"
                        : "border-[var(--line)] text-[var(--ink2)]"
                    }`}
                  >
                    {language}

                    <span className="ml-1 text-[var(--ink3)]">
                      {index === 0 ? "live" : "soon"}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-[var(--line)] pt-4 text-[11px] text-[var(--ink3)]">
            Learn a little. Listen carefully. Keep going.
          </div>
        </div>
      </footer>
    </main>
  );
}

