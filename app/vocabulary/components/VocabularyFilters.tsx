"use client";

type Props = {
  query: string;
  level: string;
  onQueryChange: (value: string) => void;
  onLevelChange: (value: string) => void;
};

const levels = ["All", "A1", "A2", "B1", "B2", "C1"];

export default function VocabularyFilters({
  query,
  level,
  onQueryChange,
  onLevelChange,
}: Props) {
  return (
    <section className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search words..."
        className="w-full rounded-xl border border-[var(--line)] bg-[var(--surf)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)] sm:max-w-xs"
      />

      <div className="flex gap-1.5 overflow-x-auto">
        {levels.map((item) => {
          const active = level === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onLevelChange(item)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                active
                  ? "bg-[var(--brand)] text-white"
                  : "border border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[var(--brand)] hover:text-[var(--brand)]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
}
