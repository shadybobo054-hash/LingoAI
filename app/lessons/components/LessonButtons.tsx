
import type { CSSProperties } from "react";
import type { Level } from "../data";

const levelColors: Record<Level, string> = {
  A1: "#3d9bff",
  A2: "#0a9fbd",
  B1: "#6a52ee",
  B2: "#0e8f69",
  C1: "#e17b53",
};

export function LevelButton({
  level,
  active,
  onClick,
}: {
  level: Level;
  active: boolean;
  onClick: () => void;
}) {
  const color = levelColors[level];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group relative flex min-w-[92px] shrink-0 items-center justify-center overflow-hidden rounded-full border px-5 py-3 transition-all duration-300 hover:-translate-y-1 active:scale-95"
      style={
        {
          "--level-color": color,
          borderColor: active ? color : "var(--line)",
          backgroundColor: active ? color : "var(--surf)",
          color: active ? "#ffffff" : "var(--ink2)",
          boxShadow: active ? `0 6px 24px ${color}35` : "none",
        } as CSSProperties
      }
    >
      <span
        className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          active ? "hidden" : ""
        }`}
        style={{ backgroundColor: `${color}12` }}
      />

      <span className="relative z-10 font-mono text-[11px] font-semibold tracking-[0.08em]">
        {level}
      </span>

      {active && (
        <>
          <span
            className="absolute -bottom-1 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: "#ffffff" }}
          />
          <span
            className="absolute -right-3 -top-4 h-12 w-12 rounded-full blur-xl"
            style={{ backgroundColor: "#ffffff25" }}
          />
        </>
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
  const color = "#3d9bff";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group relative shrink-0 overflow-hidden rounded-full border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
      style={{
        borderColor: active ? color : "var(--line)",
        backgroundColor: active ? color : "var(--surf)",
        color: active ? "#ffffff" : "var(--ink2)",
        boxShadow: active ? `0 5px 18px ${color}30` : "none",
      }}
    >
      {!active && (
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: `${color}12` }}
        />
      )}

      <span className="relative z-10">{label}</span>

      {active && (
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
      )}
    </button>
  );
}
