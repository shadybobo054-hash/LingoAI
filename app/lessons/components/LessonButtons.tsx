import type { Level } from "../data";

export function LevelButton({
  level,
  active,
  onClick,
}: {
  level: Level;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex min-w-[92px] shrink-0 items-center justify-center rounded-full border px-5 py-3 transition-all duration-300 ${
        active
          ? "border-[var(--ink)] bg-[var(--ink)] text-white shadow-lg shadow-black/10"
          : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] hover:-translate-y-0.5 hover:border-[var(--ink)] hover:text-[var(--ink)]"
      }`}
    >
      <span className="font-mono text-[11px] font-semibold tracking-[0.08em]">
        {level}
      </span>

      {active && (
        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#3d9bff]" />
      )}
    </button>
  );
}

export function TopicButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-all ${
        active
          ? "border-[var(--ink)] bg-[var(--ink)] text-white"
          : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
      }`}
    >
      {label}
    </button>
  );
}
