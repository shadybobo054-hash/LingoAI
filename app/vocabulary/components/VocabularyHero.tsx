"use client";

import { useEffect, useState } from "react";

type Props = {
  totalWords: number;
  mastered: number;
  activeDays: number;
  percent: number;
};

export default function VocabularyHero({
  totalWords,
  mastered,
  activeDays,
  percent,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const progress = Math.min(100, Math.max(0, percent));

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  const stats = [
    { number: totalWords, label: "Total words", icon: "Aa", color: "#60A5FA" },
    { number: mastered, label: "Mastered", icon: "✓", color: "#34D399" },
    { number: activeDays, label: "Active days", icon: "✦", color: "#C4B5FD" },
  ];

  return (
    <section
      className={`relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#080F25] p-6 text-white shadow-2xl shadow-blue-950/30 transition-all duration-700 sm:rounded-[40px] sm:p-9 lg:p-11 ${
        mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
    >
      {/* Colorful background */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_85%_15%,rgba(59,130,246,0.24),transparent_40%),radial-gradient(ellipse_at_15%_90%,rgba(139,92,246,0.2),transparent_40%),radial-gradient(ellipse_at_55%_55%,rgba(16,185,129,0.07),transparent_45%)]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,197,253,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,.5) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Colorful light orbs */}
      <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-blue-500/15 blur-[85px]" />
      <div className="pointer-events-none absolute -bottom-24 left-[35%] -z-10 h-72 w-72 animate-[pulse_9s_ease-in-out_infinite] rounded-full bg-violet-500/15 blur-[85px]" />
      <div className="pointer-events-none absolute left-[48%] top-0 -z-10 h-40 w-40 rounded-full bg-emerald-400/[0.07] blur-[65px]" />

      {/* Floating vocabulary illustrations */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {/* Large floating letter */}
        <div className="absolute right-[38%] top-5 hidden rotate-[-12deg] animate-[float_7s_ease-in-out_infinite] text-7xl font-black text-blue-300/[0.10] lg:block">
          Aa
        </div>

        {/* Dictionary mini card */}
        <div className="absolute right-[9%] top-[9%] hidden w-[104px] rotate-[10deg] rounded-2xl border border-blue-300/20 bg-blue-400/[0.08] p-3 shadow-xl backdrop-blur-sm lg:block">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="h-1.5 w-10 rounded-full bg-blue-200/30" />
          </div>
          <p className="text-lg font-black text-blue-200">Word</p>
          <div className="mt-1 h-1 w-full rounded-full bg-white/10" />
          <div className="mt-1 h-1 w-3/4 rounded-full bg-white/10" />
          <p className="mt-2 text-[9px] text-blue-200/70">/wɜːd/ · noun</p>
        </div>

        {/* Speech bubble */}
        <div className="absolute right-[4%] top-[42%] hidden rotate-[-8deg] items-center gap-2 rounded-2xl rounded-bl-sm border border-violet-300/20 bg-violet-400/[0.09] px-4 py-3 backdrop-blur-sm lg:flex">
          <span className="text-xl text-violet-300">“</span>
          <div className="space-y-1.5">
            <div className="h-1.5 w-14 rounded-full bg-violet-200/50" />
            <div className="h-1.5 w-10 rounded-full bg-violet-200/25" />
          </div>
          <span className="text-sm text-violet-200">”</span>
        </div>

        {/* Book illustration */}
        <div className="absolute bottom-[9%] right-[8%] hidden rotate-[9deg] lg:block">
          <div className="relative flex h-[68px] w-[88px] rounded-lg border border-emerald-300/30 bg-emerald-400/[0.10] shadow-xl">
            <div className="w-1/2 border-r border-emerald-300/20 p-2">
              <div className="text-sm font-black text-emerald-200">ABC</div>
              <div className="mt-2 h-1 w-full rounded-full bg-emerald-200/30" />
              <div className="mt-1 h-1 w-3/4 rounded-full bg-emerald-200/20" />
            </div>
            <div className="w-1/2 p-2">
              <div className="mt-1 h-1 w-full rounded-full bg-emerald-200/30" />
              <div className="mt-2 h-1 w-4/5 rounded-full bg-emerald-200/20" />
              <div className="mt-1 h-1 w-full rounded-full bg-emerald-200/20" />
            </div>
            <div className="absolute -bottom-1 left-1/2 h-2 w-3 -translate-x-1/2 rounded-b bg-emerald-400/70" />
          </div>
        </div>

        {/* Vocabulary tags */}
        <div className="absolute right-[25%] top-[15%] hidden rotate-6 rounded-xl border border-pink-300/20 bg-pink-400/[0.08] px-3 py-2 text-sm font-bold text-pink-200/70 lg:block">
          Hello!
        </div>

        <div className="absolute bottom-[15%] right-[32%] hidden -rotate-6 rounded-xl border border-amber-300/20 bg-amber-400/[0.08] px-3 py-2 text-xs font-bold text-amber-200/70 lg:block">
          New word ✦
        </div>

        {/* Floating alphabet particles */}
        <span className="absolute right-[5%] top-[27%] animate-[float_5s_ease-in-out_infinite] text-2xl font-black text-sky-300/50">A</span>
        <span className="absolute right-[32%] bottom-[8%] animate-[float_6s_ease-in-out_infinite] text-xl font-black text-violet-300/40">Z</span>
        <span className="absolute right-[18%] top-[70%] animate-pulse text-lg text-emerald-300/60">✳</span>
        <span className="absolute right-[45%] top-[8%] text-xl text-amber-200/50">✦</span>
        <span className="absolute right-[3%] bottom-[12%] text-2xl text-pink-300/40">✧</span>

        {/* Tiny orbit circles */}
        <div className="absolute right-[17%] top-[34%] h-3 w-3 rounded-full border border-blue-300/50" />
        <div className="absolute right-[29%] top-[60%] h-2 w-2 rounded-full bg-violet-300/50" />
        <div className="absolute right-[44%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-emerald-300/50" />
      </div>

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_280px] lg:gap-8">
        {/* Text content */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-wide text-blue-200 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            YOUR PERSONAL WORD UNIVERSE
          </div>

          <h1 className="mt-6 max-w-2xl text-[clamp(2.3rem,5vw,4.5rem)] font-black leading-[1.06] tracking-[-0.055em]">
            Every word
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              opens a new world.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Discover useful English words, understand them in real-life
            situations, and turn what you learn into lasting knowledge.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:max-w-[460px] sm:gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border bg-white/[0.045] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09] sm:p-4"
                style={{ borderColor: `${item.color}40` }}
              >
                <div
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black"
                  style={{
                    color: item.color,
                    backgroundColor: `${item.color}20`,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  className="text-xl font-black tabular-nums sm:text-2xl"
                  style={{ color: item.color }}
                >
                  {item.number}
                </div>
                <p className="mt-1 text-[10px] font-medium text-slate-300 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="flex -space-x-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080F25] bg-blue-500/30 text-blue-200">A</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080F25] bg-violet-500/30 text-violet-200">B</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#080F25] bg-emerald-500/30 text-emerald-200">C</span>
            </span>
            One word at a time. Real progress every day.
          </div>
        </div>

        {/* Mastery progress */}
        <div className="relative mx-auto flex w-full max-w-[270px] items-center justify-center py-5">
          <div className="absolute h-60 w-60 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute h-[250px] w-[250px] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-blue-300/30" />
          <div className="absolute h-[215px] w-[215px] rounded-full border border-violet-300/20" />

          <div
            className="relative h-[190px] w-[190px] rounded-full p-[5px] shadow-[0_0_55px_rgba(59,130,246,0.2)] transition-transform duration-700 hover:scale-105 sm:h-[205px] sm:w-[205px]"
            style={{
              background: `conic-gradient(from -90deg, #60A5FA, #818CF8 ${progress * 0.65}%, #A78BFA ${progress}%, rgba(255,255,255,0.1) ${progress}% 100%)`,
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-white/10 bg-[#0B1430]">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">Mastery</span>
              <div className="mt-2 flex items-start">
                <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">{progress}</span>
                <span className="mt-1 text-xl font-bold text-blue-300">%</span>
              </div>
              <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="mt-3 text-[11px] text-slate-300">
                {mastered} of {totalWords} mastered
              </span>
            </div>
            <span className="absolute right-5 top-4 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_15px_#60A5FA]" />
            <span className="absolute bottom-6 left-2 h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_12px_#A78BFA]" />
          </div>

          <div className="absolute -right-1 top-7 rounded-2xl border border-emerald-400/30 bg-[#102B30] px-3 py-2 shadow-xl sm:right-0">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">↗</span>
              <div>
                <p className="text-[10px] text-slate-300">Your journey</p>
                <p className="text-xs font-bold text-emerald-300">Keep growing!</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-1 left-0 rounded-2xl border border-violet-400/30 bg-[#191632] px-3 py-2 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-lg text-amber-200">✦</span>
              <div>
                <p className="text-[10px] text-slate-300">Small steps</p>
                <p className="text-xs font-bold text-violet-200">Big progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @media (prefers-reduced-motion: reduce) {
          section {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}