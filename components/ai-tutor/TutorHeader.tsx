"use client";

import Link from "next/link";

export default function TutorHeader() {
  return (
    <header className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surf)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--brand-ink)] shadow-[var(--sh)]">
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
          AI English Tutor
        </div>

        <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
          Learn English with your AI tutor.
        </h1>

        <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[var(--ink2)]">
          Practice conversation, grammar, vocabulary, and speaking
          with an AI tutor that helps you learn naturally.
        </p>
      </div>

      <Link
        href="/practice"
        className="inline-flex w-fit items-center justify-center rounded-2xl bg-[var(--btn)] px-5 py-3 text-sm font-black text-[var(--btn-ink)] shadow-[var(--sh)] transition hover:-translate-y-0.5"
      >
        Practice English →
      </Link>
    </header>
  );
}
