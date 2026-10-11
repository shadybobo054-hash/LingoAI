import type { WeekDay } from "./types";

export default function VocabularyWeeklyActivity({
  week,
  active,
}: {
  week: WeekDay[];
  active: number;
}) {
  const consistency = Math.round((active / 7) * 100);

  return (
    <section
      className="rounded-2xl border p-4 sm:p-5"
      style={{
        background: "var(--surf)",
        borderColor: "var(--line)",
        boxShadow: "var(--sh)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-xl">
            🔥
          </div>

          <div>
            <h2
              className="text-base font-bold"
              style={{ color: "var(--ink)" }}
            >
              Learning Streak
            </h2>
            <p className="mt-0.5 text-xs" style={{ color: "var(--ink2)" }}>
              {active} of 7 days active this week
            </p>
          </div>
        </div>

        <div className="text-right">
          <p
            className="text-xl font-extrabold"
            style={{ color: "#F59E0B" }}
          >
            {consistency}%
          </p>
          <p className="text-[10px]" style={{ color: "var(--ink3)" }}>
            Consistency
          </p>
        </div>
      </div>

      {/* Weekly activity */}
      <div className="mt-5 grid grid-cols-7 gap-2">
        {week.map((day, index) => {
          const today = index === 6;

          return (
            <div key={`${day.label}-${index}`} className="text-center">
              <p
                className="mb-2 text-xs font-semibold"
                style={{
                  color: today ? "var(--brand)" : "var(--ink2)",
                }}
              >
                {day.label}
              </p>

              <div
                className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl border transition hover:-translate-y-0.5 sm:h-11 sm:w-11"
                style={{
                  background: day.on
                    ? "#10B981"
                    : today
                      ? "var(--brand-soft)"
                      : "var(--surf2)",
                  borderColor: day.on
                    ? "#10B981"
                    : today
                      ? "var(--brand)"
                      : "var(--line)",
                  color: day.on
                    ? "#FFFFFF"
                    : today
                      ? "var(--brand)"
                      : "var(--ink3)",
                }}
              >
                <span className="text-sm font-bold">
                  {day.on ? "✓" : "·"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div
        className="mt-5 h-1.5 overflow-hidden rounded-full"
        style={{ background: "var(--surf2)" }}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-700"
          style={{ width: `${consistency}%` }}
        />
      </div>
    </section>
  );
}
