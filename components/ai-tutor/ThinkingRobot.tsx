"use client";

export default function ThinkingRobot() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-xl">
        🤖
      </div>

      <div className="rounded-2xl border border-[var(--line)] bg-[var(--surf)] px-4 py-3 shadow-[var(--sh)]">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--ink3)] [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--ink3)] [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--ink3)]" />
        </div>
      </div>
    </div>
  );
}
