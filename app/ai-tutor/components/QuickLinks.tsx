
"use client";

import { quickPrompts } from "./constants";

type Props = {
  onPrompt: (prompt: string) => void;
};

export default function QuickLinks({ onPrompt }: Props) {
  return (
    <section className="rounded-3xl border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)]">
      <h3 className="text-sm font-black">Quick prompts</h3>
      <p className="mt-1 text-xs text-[var(--ink2)]">
        Jump into a new activity
      </p>

      <div className="mt-4 space-y-2">
        {quickPrompts.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onPrompt(item.prompt)}
            className={`flex w-full items-center gap-3 rounded-xl border border-[var(--line)] p-3 text-left transition ${item.color}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="flex-1 text-xs font-bold">{item.label}</span>
            <span className="text-[var(--ink2)]">↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
