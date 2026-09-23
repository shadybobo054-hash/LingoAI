import type { TutorMode } from "./types";

type Props = {
  mode: TutorMode;
  selectedMode: string;
};

export default function CurrentMode({
  mode,
  selectedMode,
}: Props) {
  return (
    <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)]">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--ink3)]">
        Current mode
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-2xl">
          {mode.icon}
        </div>

        <div>
          <h3 className="text-base font-black text-[var(--ink)]">
            {mode.title}
          </h3>
          <p className="mt-1 text-xs font-medium text-[var(--ink2)]">
            Ready to practice
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm font-medium leading-6 text-[var(--ink2)]">
        {mode.description}
      </p>

      {selectedMode === "speaking" && (
        <div className="mt-4 rounded-2xl bg-[var(--brand-soft)] px-4 py-3 text-xs font-black text-[var(--brand-ink)]">
          🎤 Speaking enabled
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--surf2)] p-4">
        <p className="text-xs font-black text-[var(--ink)]">
          💡 Tip
        </p>

        <p className="mt-1 text-xs font-medium leading-5 text-[var(--ink2)]">
          Try answering in English even if your answer is
          not perfect. Your tutor can help you improve it.
        </p>
      </div>
    </div>
  );
}
