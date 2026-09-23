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
  return (
    <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)]">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--ink3)]">
        Your progress
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-[var(--surf2)] p-4">
          <p className="text-xs font-bold text-[var(--ink3)]">
            XP
          </p>
          <p className="mt-1 text-2xl font-black text-[var(--ink)]">
            {xp}
          </p>
        </div>

        <div className="rounded-2xl bg-[var(--surf2)] p-4">
          <p className="text-xs font-bold text-[var(--ink3)]">
            Streak
          </p>
          <p className="mt-1 text-2xl font-black text-[var(--ink)]">
            {streak} 🔥
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold text-[var(--ink2)]">
            Next level
          </span>
          <span className="text-xs font-black text-[var(--brand-ink)]">
            {percentage}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[var(--line)]">
          <div
            className="h-full rounded-full bg-[var(--brand)] transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
