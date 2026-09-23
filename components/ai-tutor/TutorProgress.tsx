"use client";

import type { Progress } from "./types";

type Props = {
  progress: Progress;
};

export default function TutorProgress({ progress }: Props) {
  return (
    <aside className="space-y-4">
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)]">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink3)]">
          Your progress
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[var(--surf2)] p-4">
            <div className="text-2xl font-black text-[var(--ink)]">
              {progress.xp}
            </div>

            <div className="mt-1 text-xs font-semibold text-[var(--ink3)]">
              XP
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--surf2)] p-4">
            <div className="text-2xl font-black text-[var(--ink)]">
              {progress.streak}
            </div>

            <div className="mt-1 text-xs font-semibold text-[var(--ink3)]">
              Day streak
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-[var(--brand-soft)] p-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>

            <div>
              <p className="font-bold text-[var(--brand-ink)]">
                Keep practicing
              </p>

              <p className="mt-0.5 text-xs text-[var(--brand-ink)]/70">
                Every conversation helps you improve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)]">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink3)]">
          Speaking tip
        </p>

        <p className="mt-3 text-sm leading-6 text-[var(--ink2)]">
          Speak naturally. Don&apos;t worry about making mistakes.
          The tutor will help you correct them.
        </p>
      </div>
    </aside>
  );
}
