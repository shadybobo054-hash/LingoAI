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
    <section className="space-y-3">
      <p className="px-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink2)]">
        Learning mode
      </p>

      <div className="grid grid-cols-2 gap-2">
        {tutorModes.map((item: any, index: number) => {
          const active = selectedMode === item.id;

          const colors = [
            "from-sky-500 to-blue-600",
            "from-violet-500 to-purple-600",
            "from-emerald-400 to-teal-600",
            "from-orange-400 to-pink-500",
          ];

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onModeChange(item.id)}
              className={`group relative min-h-[94px] overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 ${
                active
                  ? "border-transparent bg-gradient-to-br " +
                    colors[index % colors.length] +
                    " text-white shadow-lg shadow-blue-500/15"
                  : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink)] hover:-translate-y-0.5 hover:border-blue-400/50"
              }`}
            >
              <div
                className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl text-lg ${
                  active
                    ? "bg-white/20"
                    : "bg-[var(--bg)]"
                }`}
              >
                {item.icon}
              </div>

              <p className="text-sm font-bold">
                {item.label}
              </p>

              {active && (
                <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
