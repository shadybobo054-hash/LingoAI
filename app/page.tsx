import Link from "next/link";
import DailyLesson from "./components/DailyLesson";
import ListeningCard from "./components/ListeningCard";
import ScrollReveal from "./components/ScrollReveal";

const learningWays = [
  {
    title: "Vocabulary",
    label: "Word of the day",
    color: "#099B78",
    bg: "var(--surf)",
  },
  {
    title: "Listening",
    label: "At the café: ordering coffee",
    color: "#0A7E99",
    bg: "var(--brand-soft)",
  },
  {
    title: "Grammar",
    label: "Build sentences that sound natural",
    color: "#6A52EE",
    bg: "var(--surf)",
  },
  {
    title: "Speaking",
    label: "Say what you mean with confidence",
    color: "#CE543B",
    bg: "var(--surf)",
  },
  {
    title: "Reading",
    label: "Follow the meaning, not every word",
    color: "#1D72D2",
    bg: "var(--surf)",
  },
  {
    title: "Review",
    label: "Keep the useful things close",
    color: "#0E8F69",
    bg: "var(--surf)",
  },
];

const waveform = [
  14, 24, 10, 32, 20, 40, 18, 28, 12, 34, 22, 38, 30, 18, 28, 42, 30, 20,
  34, 16, 28, 12, 36, 22, 44, 30, 20, 34, 14, 28, 38, 18, 32, 24, 40, 16,
  30, 22, 36, 18, 28,
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[var(--bg)] transition-colors duration-300">
        {/* HERO BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--brand-soft)] opacity-70 blur-3xl" />

          <div className="absolute left-[-12%] bottom-[-15%] h-[360px] w-[360px] rounded-full bg-[var(--surf2)] opacity-70 blur-3xl" />

          <div className="absolute right-[35%] top-[35%] h-[180px] w-[180px] rounded-full bg-[var(--brand)] opacity-[0.035] blur-3xl" />
        </div>

        <div className="page-container relative py-14 sm:py-20 lg:py-24">
          <ScrollReveal className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            {/* LEFT SIDE */}
            <div className="relative z-10 max-w-[570px]">
              {/* BADGE */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--brand-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--brand-ink)] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
                No account. Just start.
              </div>

              {/* TITLE */}
              <h1 className="font-display text-[3.5rem] font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem]">
                Learn English the
                <span className="block">way you actually</span>
                <span className="block">hear it.</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[500px] text-base leading-7 text-[var(--ink2)] sm:text-lg">
                Short lessons, real listening, a vocabulary you can touch, and
                a tutor that explains the why. Open a page and you are already
                learning.
              </p>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* PRIMARY BUTTON */}
                <Link
                  href="/lessons"
                  className="sada-button inline-flex h-12 items-center justify-center rounded-full px-7 text-base"
                >
                  Start learning
                  <span className="ml-2 transition-transform duration-300">
                    →
                  </span>
                </Link>

                {/* SECONDARY BUTTON */}
                <Link
                  href="/dashboard"
                  className="group inline-flex h-12 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] px-7 text-base font-semibold text-[var(--ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[var(--sh)]"
                >
                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#565AD7]" />
                  Practice with AI
                </Link>
              </div>

              {/* SMALL NOTE */}
              <p className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--ink3)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
                Everything below is live — tap anything.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative z-10">
              {/* DECORATION */}
              <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[var(--line)] bg-[var(--brand-soft)] opacity-70" />

              <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[var(--surf2)] opacity-80 blur-2xl" />

              {/* LISTENING CARD */}
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

      {/* =========================================================
          DAILY LESSON + SIX WAYS
      ========================================================== */}
      <section className="border-y border-[var(--line)] bg-[var(--bg2)] transition-colors duration-300">
        <div className="page-container py-12 sm:py-16">
          {/* DAILY LESSON */}
          <ScrollReveal>
            <DailyLesson />
          </ScrollReveal>

          {/* SIX WAYS HEADER */}
          <ScrollReveal className="mt-16">
            <h2 className="font-display text-4xl font-medium text-[var(--ink)] sm:text-5xl">
              Six ways to learn
            </h2>

            <p className="mt-3 max-w-[500px] text-sm leading-5 text-[var(--ink2)] sm:text-base">
              Each one is a different kind of attention. Pick the one that
              fits the next ten minutes.
            </p>
          </ScrollReveal>

          {/* SIX WAYS CARDS */}
          <ScrollReveal className="scroll-stagger mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningWays.map((way, index) => (
              <Link
                key={way.title}
                href="/practice"
                className={`group rounded-[22px] border border-[var(--line)] p-6 shadow-[var(--sh)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
                style={{ backgroundColor: way.bg }}
              >
                {/* CARD HEADER */}
                <div className="flex items-center justify-between">
                  <p
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: way.color }}
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                    {way.title}
                  </p>

                  {index === 0 && (
                    <span className="text-xs text-[var(--ink3)]">
                      Word of the day
                    </span>
                  )}
                </div>

                {/* VOCABULARY */}
                {index === 0 ? (
                  <>
                    <div className="mt-4 flex items-center gap-3">
                      <h3 className="font-display text-4xl font-medium text-[var(--ink)]">
                        curious
                      </h3>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)] transition-all duration-300 group-hover:scale-105">
                        ▶
                      </span>
                    </div>

                    <p className="mt-3 font-mono text-sm text-[var(--ink3)]">
                      /ˈkjʊə.ri.əs/
                    </p>

                    <p className="mt-3 text-sm text-[var(--ink)]">
                      Wanting to know or learn more about something.
                    </p>

                    <p className="mt-3 font-display text-base italic text-[var(--ink2)]">
                      “She was curious about how the machine worked.”
                    </p>
                  </>
                ) : index === 1 ? (
                  /* LISTENING */
                  <>
                    <h3 className="mt-4 font-display text-2xl font-medium text-[var(--ink)]">
                      {way.label}
                    </h3>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surf)] text-[#0A7E99] shadow-sm">
                        ▶
                      </span>

                      <div className="flex h-8 flex-1 items-center justify-between gap-1 overflow-hidden">
                        {waveform.slice(0, 24).map((height, waveformIndex) => (
                          <span
                            key={`${height}-${waveformIndex}`}
                            className="w-1.5 shrink-0 rounded-full bg-[#79B8CA]"
                            style={{
                              height: `${Math.max(
                                10,
                                height * 0.7,
                              )}px`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* OTHER CARDS */
                  <h3 className="mt-4 max-w-[270px] font-display text-2xl font-medium leading-tight text-[var(--ink)]">
                    {way.label}
                  </h3>
                )}
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          FOOTER / FEATURE CARDS
      ========================================================== */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg2)] transition-colors duration-300">
        <div className="page-container py-10 sm:py-14">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_2fr] lg:grid-rows-[auto_auto]">
            {/* LESSON CARD */}
            <Link
              href="/lessons"
              className="group sada-card flex min-h-[255px] flex-col justify-between rounded-[24px] p-6 sm:p-7"
            >
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2477D1]">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                  Lessons
                </p>

                <h2 className="mt-4 font-display text-3xl font-medium text-[var(--ink)]">
                  Ordering food
                </h2>

                <p className="mt-4 max-w-[300px] text-sm leading-6 text-[var(--ink2)]">
                  Everything you need to order a meal with confidence: polite
                  phrasing, the waiter&apos;s questions, and asking for
                  recommendations.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Vocabulary", "Listening", "Practice"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--line)] bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-ink)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-[var(--line)] pt-4 text-xs text-[var(--ink3)]">
                <span>Beginner · 8 min · 5 steps</span>

                <span className="font-semibold text-[#2477D1] transition group-hover:translate-x-1">
                  Open lesson →
                </span>
              </div>
            </Link>

            {/* AI TUTOR CARD */}
            <Link
              href="/ai-tutor"
              className="ai-tutor-card group flex min-h-[258px] flex-col justify-between rounded-[24px] bg-[#2F4277] p-[18px] text-white shadow-[var(--sh2)] transition duration-300 hover:-translate-y-1 sm:p-[18px]"
            >
              <div>
                <p className="ai-tutor-label font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B9C6FF]">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                  AI Tutor
                </p>

                <h2 className="ai-tutor-title mt-3 max-w-[650px] font-display text-[1.65rem] font-medium leading-[1.12] text-[#F4F8FC]">
                  “Why do we say “I have been” instead of “I was” here?”
                </h2>

                <div className="mt-5 max-w-[710px] rounded-2xl bg-white/15 px-4 py-3 text-sm">
                  <p className="flex items-center gap-3 text-white/55 line-through">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D14A33] text-[11px] text-[#512321]">
                      ×
                    </span>

                    I am agree with you
                  </p>

                  <p className="mt-2 flex items-center gap-3 font-semibold text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0E8F69] text-[11px] text-[#062E26]">
                      ✓
                    </span>

                    I agree with you
                  </p>
                </div>
              </div>

              <span className="mt-5 inline-flex h-11 w-fit items-center rounded-full bg-white px-5 text-sm font-semibold text-[#2B3A66] transition group-hover:translate-x-1">
                Practice with AI&nbsp; →
              </span>
            </Link>

            {/* PRACTICE CARD */}
            <Link
              href="/practice"
              className="group sada-card min-h-[210px] rounded-[24px] p-6 sm:p-7"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CE543B]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                Practice
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium text-[var(--ink)]">
                Five questions, two minutes
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--ink2)]">
                Mixed vocabulary, grammar and listening — instant feedback on
                every answer.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--line)] bg-[var(--surf2)] px-4 py-2 text-xs font-semibold text-[#CE543B]">
                  Quick 5 questions
                </span>

                <span className="rounded-full border border-[var(--line2)] px-4 py-2 text-xs font-semibold text-[var(--ink)] transition group-hover:border-[#CE543B]">
                  All practice
                </span>
              </div>
            </Link>

            {/* COURSES CARD */}
            <Link
              href="/courses"
              className="group min-h-[210px] rounded-[24px] border border-[var(--line)] bg-[var(--surf)] p-6 shadow-[var(--sh)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)] sm:p-7"
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6A52EE]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
                Courses
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium text-[var(--ink)]">
                English for travel
              </h2>

              <p className="mt-4 max-w-[350px] text-sm leading-6 text-[var(--ink2)]">
                Six lessons that take you from the airport to the hotel desk
                to the restaurant table.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
                <span className="rounded-full border border-[var(--line)] bg-[var(--surf2)] px-3 py-2 text-[var(--ink2)]">
                  6 lessons · 1h 20m
                </span>

                <span className="font-semibold text-[#6A52EE] transition group-hover:translate-x-1">
                  View course →
                </span>
              </div>
            </Link>
          </div>

          {/* BOTTOM FOOTER */}
          <ScrollReveal className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 sm:grid-cols-[0.9fr_1.6fr] sm:gap-12">
            {/* BRAND */}
            <div className="max-w-[270px]">
              <Link href="/" className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-semibold text-[var(--btn-ink)]">
                  ●
                </span>

                <span className="font-display text-lg font-semibold text-[var(--ink)]">
                  Sada
                </span>
              </Link>

              <p className="mt-3 text-sm leading-5 text-[var(--ink3)]">
                A calm place to learn languages. Built around listening,
                curiosity and short honest feedback.
              </p>
            </div>

            {/* LANGUAGES */}
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">
                Languages we teach
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  {
                    name: "English",
                    status: "live",
                    active: true,
                  },
                  {
                    name: "Spanish",
                    status: "soon",
                    active: false,
                  },
                  {
                    name: "French",
                    status: "soon",
                    active: false,
                  },
                  {
                    name: "Turkish",
                    status: "soon",
                    active: false,
                  },
                  {
                    name: "Japanese",
                    status: "soon",
                    active: false,
                  },
                ].map((language) => (
                  <span
                    key={language.name}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      language.active
                        ? "border-[var(--line2)] bg-[var(--brand-soft)] text-[var(--brand-ink)]"
                        : "border-[var(--line)] bg-transparent text-[var(--ink2)]"
                    }`}
                  >
                    {language.name}

                    <span className="ml-1.5 text-[var(--ink3)]">
                      {language.status}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  );
}