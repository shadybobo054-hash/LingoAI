type Props = {
  streak: number;
  next: number;
  active: number;
};

export default function VocabularyProgress({ streak, next, active }: Props) {
  const streakPercent = Math.min(100, (streak / next) * 100);

  return (
    <section className="grid gap-5 md:grid-cols-2">
      <article className="group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--surf)", borderColor: "var(--line)", boxShadow: "var(--sh)" }}>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3D9BFF] to-[#8B5CF6]" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#3D9BFF]/10 blur-2xl" />
        <span className="relative rounded-lg px-3 py-1 text-xs font-bold" style={{ background: "var(--brand-soft)", color: "var(--brand-ink)" }}>STREAK</span>
        <div className="relative mt-7 text-5xl font-black">{streak}</div>
        <p className="relative" style={{ color: "var(--ink2)" }}>day streak 🔥</p>
        <div className="relative mt-6 h-2 overflow-hidden rounded-full" style={{ background: "var(--surf2)" }}>
          <div className="h-full rounded-full bg-gradient-to-r from-[#3D9BFF] to-[#8B5CF6] transition-all duration-700" style={{ width: `${(active / 7) * 100}%` }} />
        </div>
        <div className="relative mt-3 flex justify-between text-sm font-bold">
          <span style={{ color: "var(--ink2)" }}>This week</span>
          <span className="text-[#3D9BFF]">{active}/7</span>
        </div>
      </article>

      <article className="group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--surf)", borderColor: "var(--line)", boxShadow: "var(--sh)" }}>
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#10B981] to-[#06B6D4]" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#10B981]/10 blur-2xl" />
        <span className="relative rounded-lg px-3 py-1 text-xs font-bold" style={{ background: "var(--voc-t)", color: "var(--voc)" }}>MILESTONE</span>
        <div className="relative mt-7 text-4xl font-black">{streak} / {next}</div>
        <p className="relative" style={{ color: "var(--ink2)" }}>days to next milestone</p>
        <div className="relative mt-6 h-2 overflow-hidden rounded-full" style={{ background: "var(--surf2)" }}>
          <div className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-700" style={{ width: `${streakPercent}%` }} />
        </div>
      </article>
    </section>
  );
}
