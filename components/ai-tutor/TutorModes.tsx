"use client";

import { tutorModes } from "./constants";

type Props = {
  selectedMode: string;
  onModeChange: (mode: string) => void;
};

export default function TutorModes({
  selectedMode,
  onModeChange,
}: Props) {
  return (
    <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-4 shadow-[var(--sh)]">
      <div className="mb-4 px-2">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--ink3)]">
          Tutor modes
        </p>

        <h2 className="mt-1 text-lg font-black text-[var(--ink)]">
          Choose how to learn
        </h2>
      </div>

      <div className="space-y-2">
        {tutorModes.map((mode) => {
          const active = selectedMode === mode.id;

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => onModeChange(mode.id)}
              className={`group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                active
                  ? "border-[var(--brand)] bg-[var(--brand-soft)] shadow-sm"
                  : "border-[var(--line)] bg-[var(--surf2)] hover:-translate-y-0.5 hover:border-[var(--brand)]/50"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${
                  active
                    ? "bg-[var(--brand)] text-[var(--btn-ink)]"
                    : "bg-[var(--surf)] text-[var(--ink)]"
                }`}
              >
                {mode.icon}
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-black text-[var(--ink)]">
                  {mode.title}
                </span>

                <span className="mt-0.5 block text-xs font-medium leading-5 text-[var(--ink2)]">
                  {mode.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}