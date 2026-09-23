"use client";

import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)]">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--ink3)]">
        Quick links
      </p>

      <div className="mt-4 space-y-2">
        <Link
          href="/lessons"
          className="flex items-center justify-between rounded-2xl bg-[var(--surf2)] px-4 py-3 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-soft)]"
        >
          Lessons
          <span>→</span>
        </Link>

        <Link
          href="/vocabulary"
          className="flex items-center justify-between rounded-2xl bg-[var(--surf2)] px-4 py-3 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-soft)]"
        >
          Vocabulary
          <span>→</span>
        </Link>

        <Link
          href="/practice"
          className="flex items-center justify-between rounded-2xl bg-[var(--surf2)] px-4 py-3 text-sm font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-soft)]"
        >
          Practice
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
