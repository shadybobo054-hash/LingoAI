"use client";

type Props = {
  xp: number;
  streak: number;
  percentage: number;
};

export default function ProgressCard({
  xp,
  streak,
  percentage,
}: Props) {
  const progress = Math.max(0, Math.min(100, percentage));

  return (
    <section className="rounded-2xl border border-[var(--line)] bg-[var(--surf)] p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-[var(--ink)]">
            Your progress
          </p>
          <p className="mt-1 text-xs text-[var(--ink2)]">
            Every session counts
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-xl">
          📈
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-[var(--ink2)]">Learning goal</span>
        <span className="font-bold text-blue-500">{progress}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[var(--bg)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[var(--bg)] p-3">
          <p className="text-xs text-[var(--ink2)]">Total XP</p>
          <p className="mt-1 text-lg font-extrabold text-[var(--ink)]">
            {xp}
            <span className="ml-1 text-xs font-medium text-blue-500">
              XP
            </span>
          </p>
        </div>

        <div className="rounded-xl bg-[var(--bg)] p-3">
          <p className="text-xs text-[var(--ink2)]">Streak</p>
          <p className="mt-1 text-lg font-extrabold text-[var(--ink)]">
            {streak}
            <span className="ml-1 text-base">🔥</span>
          </p>
        </div>
      </div>
    </section>
  );
}
