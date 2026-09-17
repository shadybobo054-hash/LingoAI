import Link from "next/link";

const features = [
  {
    title: "Lessons",
    text: "Learn English step by step with structured lessons.",
    icon: "📚",
    color: "text-[#1D72D2]",
    bg: "bg-[#EAF5FF]",
  },
  {
    title: "Vocabulary",
    text: "Build your vocabulary with useful everyday words.",
    icon: "🔤",
    color: "text-[#0E8F69]",
    bg: "bg-[#E8FAF3]",
  },
  {
    title: "Listening",
    text: "Improve your listening through real English conversations.",
    icon: "🎧",
    color: "text-[#0A7E99]",
    bg: "bg-[#E4F6FB]",
  },
  {
    title: "Practice",
    text: "Practice what you learn with interactive exercises.",
    icon: "✏️",
    color: "text-[#CE543B]",
    bg: "bg-[#FFF0EC]",
  },
];

const waveform = [
  14, 24, 10, 32, 20, 40, 18, 28, 12, 34, 22, 38, 30, 18, 28, 42, 30, 20,
  34, 16, 28, 12, 36, 22, 44, 30, 20, 34, 14, 28, 38, 18, 32, 24, 40, 16,
  30, 22, 36, 18, 28,
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Hero */}
      <section className="page-container relative overflow-hidden py-14 sm:py-20 lg:py-24">
        <div className="absolute right-[-5%] top-24 h-80 w-80 rounded-full bg-[#EAF8FC] blur-2xl opacity-90" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#E8FAF3] blur-3xl opacity-50" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left */}
          <div className="max-w-[570px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EAF5FF] px-3 py-1.5 text-xs font-semibold text-[#2677C8]">
              <span className="h-4 w-4 rounded-full bg-[#3D9BFF]" />
              No account. Just start.
            </div>

            <h1 className="font-display text-[3.75rem] font-medium leading-[0.96] tracking-[-0.035em] sm:text-6xl lg:text-[4.35rem]">
              Learn English the
              <span className="block">way you actually</span>
              <span className="block">hear it.</span>
            </h1>

            <p className="mt-7 max-w-[490px] text-base leading-7 text-[var(--ink2)] sm:text-lg">
              Short lessons, real listening, a vocabulary you can touch, and a
              tutor that explains the why. Open a page and you are already
              learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lessons"
                className="sada-button inline-flex h-12 items-center justify-center rounded-full px-7 text-base"
              >
                Start learning
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] px-7 text-base font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[var(--sh)]"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-[#565AD7]" />
                Practice with AI
              </Link>
            </div>

            <p className="mt-5 text-xs font-medium text-[var(--ink3)]">
              Everything below is live — tap anything.
            </p>
          </div>

          {/* Listening card */}
          <div className="relative lg:pt-5">
            <div className="absolute -inset-5 rounded-[36px] bg-[#EAF8FC] opacity-70 blur-2xl" />
            <div className="sada-card relative overflow-hidden rounded-[26px] p-6 sm:p-7">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-[#147D9A]">
                <span>Listening</span>
                <span className="font-mono tracking-normal text-[var(--ink3)]">0:06</span>
              </div>

              <div className="mt-4 flex items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  aria-label="Play listening example"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1187A4] text-2xl text-white shadow-[0_8px_18px_rgba(17,135,164,0.22)] transition hover:scale-105"
                >
                  <span className="ml-1">▶</span>
                </button>
                <div className="flex h-12 flex-1 items-center justify-between gap-1 overflow-hidden">
                  {waveform.map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="w-1.5 shrink-0 rounded-full bg-[#8ABDD0]"
                      style={{ height: `${height}px` }}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-5 font-display text-[1.2rem] leading-tight text-[#283348] sm:text-[1.55rem]">
                I will have a coffee and a glass of water please
              </p>

              <div className="mt-5 border-t border-[var(--line)] pt-4 text-xs font-medium text-[#95A8BE]">
                Tap any word to hear it on its own.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand)]">
              Everything you need
            </p>

            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Learn English your way.
            </h2>

            <p className="mt-4 text-lg leading-8 text-[var(--ink2)]">
              Everything is organized in one simple learning experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="sada-card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bg} text-xl`}
                >
                  {feature.icon}
                </div>

                <h3
                  className={`mt-5 text-xl font-semibold ${feature.color}`}
                >
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--ink2)]">
                  {feature.text}
                </p>

                <Link
                  href={`/${feature.title.toLowerCase()}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[var(--ink)] transition group-hover:text-[var(--brand)]"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="page-container py-16 sm:py-24">
        <div className="overflow-hidden rounded-[26px] bg-[var(--ai-card)] p-7 text-[var(--ai-text)] sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">
                ✨ LingoAI Tutor
              </div>

              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Practice English with your AI tutor.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                Ask questions, practice conversations, and get help whenever
                you need it.
              </p>

              <Link
                href="/ai-tutor"
                className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 font-semibold text-[#2B3A66] transition hover:-translate-y-0.5"
              >
                Meet your AI tutor →
              </Link>
            </div>

            <div className="hidden h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/5 text-6xl lg:flex">
              🤖
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--line)]">
        <div className="page-container py-16 text-center sm:py-20">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Ready to improve your English?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[var(--ink2)]">
            Start with your first lesson and build your English skills one
            step at a time.
          </p>

          <Link
            href="/lessons"
            className="sada-button mt-7 inline-flex h-12 items-center px-8"
          >
            Start learning
          </Link>
        </div>
      </section>
    </main>
  );
}