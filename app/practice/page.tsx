"use client";

import Link from "next/link";

const practiceOptions = [
  {
    id: "01",
    smallTitle: "Quick 5 min",
    title: "Quick Play",
    description: "Fast, focused rounds to keep your streak alive!",
    icon: "⏳",
    href: "/practice/quick-play",
  },
  {
    id: "02",
    smallTitle: "Build your skills",
    title: "Vocabulary",
    description: "Learn and practise useful everyday English words.",
    icon: "✦",
    href: "/practice/vocabulary",
  },
  {
    id: "03",
    smallTitle: "Improve your English",
    title: "Listening",
    description: "Train your ear with short and focused listening rounds.",
    icon: "◉",
    href: "/practice/listening",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose",
    text: "Pick the type of English practice you want to do.",
  },
  {
    number: "02",
    title: "Practise",
    text: "Complete short activities designed around your level.",
  },
  {
    number: "03",
    title: "Keep going",
    text: "Keep your streak going and improve every day.",
  },
];

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      {/* TOP ACTIONS */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4">
          {/* DARK BUTTON */}
          <Link
            href="/goals"
            className="inline-flex items-center justify-center rounded-full bg-[var(--btn)] px-7 py-4 text-sm font-semibold text-[var(--btn-ink)] shadow-[0_8px_25px_rgba(23,39,51,0.15)] transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-[0_12px_30px_rgba(23,39,51,0.2)]"
          >
            Choose Your Goal
          </Link>

          {/* HOW IT WORKS */}
          <a
            href="#how-it-works"
            className="group flex items-center gap-3 text-sm font-medium text-[var(--ink)] transition-colors duration-300 hover:text-[var(--brand)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surf)] shadow-sm transition-all duration-300 group-hover:border-[var(--brand)] group-hover:shadow-[0_5px_15px_rgba(9,196,220,0.15)]">
              <span className="ml-0.5 text-[11px] text-[var(--brand)]">
                ▶
              </span>
            </span>

            See how it works
          </a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* HEADER */}
          <div className="border-b border-[var(--line)] pb-6">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink3)]">
              Build your session
            </p>

            <h1 className="max-w-3xl font-serif text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-[var(--ink)] sm:text-5xl lg:text-[56px]">
              How do you want to practise?
            </h1>
          </div>

          {/* PRACTICE CARDS */}
          <div className="mt-8 space-y-5">
            {practiceOptions.map((option) => (
              <Link
                key={option.id}
                href={option.href}
                className="group block"
              >
                <article className="relative min-h-[240px] overflow-hidden rounded-[24px] border-b-4 border-[var(--brand)] bg-[var(--surf)] p-7 text-[var(--ink)] shadow-[0_15px_40px_rgba(23,39,51,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,39,51,0.18)] sm:p-8">
                  {/* NUMBER */}
                  <div className="mb-14">
                    <span className="text-xs font-bold tracking-wide text-[var(--brand)]">
                      {option.id}
                    </span>
                  </div>

                  {/* CHECK */}
                  <div className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-[var(--btn-ink)]">
                    ✓
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 max-w-xl">
                    <p className="mb-2 text-sm font-medium text-[var(--ink2)]">
                      {option.smallTitle}
                    </p>

                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--ink)] transition-colors duration-300 group-hover:text-[var(--brand)] sm:text-3xl">
                      {option.title}
                    </h2>

                    <p className="max-w-md text-sm leading-6 text-[var(--ink2)]">
                      {option.description}
                    </p>

                    {/* CYAN / BRAND BUTTON */}
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-bold text-[var(--btn-ink)] transition-all duration-300 group-hover:opacity-90 group-hover:shadow-[0_8px_25px_rgba(9,196,220,0.25)]">
                      Start Practice

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="pointer-events-none absolute bottom-[-15px] right-6 text-[80px] leading-none text-[var(--ink)] opacity-10 transition-all duration-500 group-hover:scale-110 group-hover:opacity-20 sm:right-8 sm:text-[95px]">
                    {option.icon}
                  </div>

                  {/* GLOW */}
                  <div className="pointer-events-none absolute -bottom-24 -right-20 h-48 w-48 rounded-full bg-[var(--brand)] opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]" />
                </article>
              </Link>
            ))}
          </div>

          {/* HOW IT WORKS */}
          <section
            id="how-it-works"
            className="mt-20 border-t border-[var(--line)] pt-14"
          >
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink3)]">
                How it works
              </p>

              <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
                Practice a little.
                <br />
                Improve a lot.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ink2)]">
                Choose a practice session, complete a few focused activities,
                and build your English skills one session at a time.
              </p>
            </div>

            {/* STEPS */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[20px] border border-[var(--line)] bg-[var(--surf)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(23,39,51,0.08)]"
                >
                  <span className="text-sm font-bold text-[var(--brand)]">
                    {step.number}
                  </span>

                  <h3 className="mt-7 text-xl font-bold text-[var(--ink)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--ink2)]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PLANS */}
          <section className="mt-20 border-t border-[var(--line)] pt-14">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink3)]">
              Plans
            </p>

            <h2 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
              Start practising for free.
            </h2>

            {/* PLAN CARD */}
            <div className="mt-8 rounded-[24px] border border-[var(--line)] bg-[var(--surf)] p-8 shadow-[0_15px_40px_rgba(23,39,51,0.06)] sm:p-10">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-bold text-[var(--brand)]">
                    FREE
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                    Your English practice starts here.
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--ink2)]">
                    Explore short practice sessions and build a consistent
                    English-learning habit.
                  </p>
                </div>

                {/* BRAND BUTTON */}
                <Link
                  href="/practice"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--btn)] px-7 py-4 text-sm font-bold text-[var(--btn-ink)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_25px_rgba(23,39,51,0.18)]"
                >
                  Start Free →
                </Link>
              </div>
            </div>
          </section>

          {/* COMMUNITY */}
          <section className="mt-20 border-t border-[var(--line)] pt-14">
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--surf)] p-8 shadow-[0_10px_30px_rgba(23,39,51,0.04)] sm:p-10">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink3)]">
                Community
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight text-[var(--ink)] sm:text-5xl">
                Learn together.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--ink2)]">
                Keep practising, share your progress, and stay motivated as
                you improve your English.
              </p>

              {/* DARK BUTTON */}
              <button
                type="button"
                className="mt-7 rounded-full bg-[var(--btn)] px-7 py-4 text-sm font-semibold text-[var(--btn-ink)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_25px_rgba(23,39,51,0.15)]"
              >
                Explore Community →
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}