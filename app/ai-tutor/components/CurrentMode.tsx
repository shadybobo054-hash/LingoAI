"use client";

import { tutorModes } from "./constants";

type Props = {
  mode?: string;
  selectedMode: string;
};

export default function CurrentMode({
  selectedMode,
}: Props) {
  const current = tutorModes.find(
    (item: any) => item.id === selectedMode
  ) as any;

  if (!current) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-violet-500/10 px-3 py-1.5">
      <span>{current.icon}</span>
      <span className="text-xs font-bold text-[var(--ink)]">
        {current.label}
      </span>
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
    </div>
  );
}
