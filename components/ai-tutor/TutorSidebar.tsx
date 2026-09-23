"use client";

import type { TutorMode, TutorModeItem } from "./types";

type Props = {
  modes: TutorModeItem[];
  selectedMode: TutorMode;
  onModeChange: (mode: TutorMode) => void;
};

const icons: Record<TutorMode, string> = {
  conversation: "💬",
  grammar: "✏️",
  vocabulary: "📚",
  speaking: "🎤",
};

export default function TutorSidebar({
  modes,
  selectedMode,
  onModeChange,
}: Props) {
  return (
    <aside className="space-y-4">
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surf)] p-4 shadow-[var(--sh)]">
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink3)]">
            Tutor modes
          </p>

          <h2 className="mt-1 text-lg font-black text-[var(--ink)]">
            What do you want to practice?
          </h2>
        </div>

        <div className="space-y-2">
          {modes.map((mode) => {
            const active = selectedMode === mode.id;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => onModeChange(mode.id)}
                className={[
                  "w-full rounded-2xl border p-3 text-left transition",
                  active
                    ? "border-[var(--brand)] bg-[var(--brand)] text-white shadow-lg"
                    : "border-[var(--line)] bg-[var(--surf2)] text-[var(--ink)] hover:border-[var(--brand)]",
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg",
                      active
                        ? "bg-white/15"
                        : "bg-[var(--brand-soft)]",
                    ].join(" ")}
                  >
                    {icons[mode.id]}
                  </div>

                  <div className="min-w-0">
                    <div
                      className={[
                        "font-bold",
                        active
                          ? "text-white"
                          : "text-[var(--ink)]",
                      ].join(" ")}
                    >
                      {mode.title}
                    </div>

                    <div
                      className={[
                        "mt-1 text-xs leading-5",
                        active
                          ? "text-white/80"
                          : "text-[var(--ink3)]",
                      ].join(" ")}
                    >
                      {mode.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
