
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../ScrollReveal";

function WordWorldArt() {
  return (
    <svg
      viewBox="0 0 760 460"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="word-orbit" x1="70" y1="80" x2="680" y2="400">
          <stop stopColor="#A78BFA" />
          <stop offset=".52" stopColor="#60A5FA" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id="word-glow">
          <stop stopColor="#8B5CF6" stopOpacity=".35" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="word-book" x1="300" y1="200" x2="460" y2="340">
          <stop stopColor="#312E81" />
          <stop offset="1" stopColor="#164E63" />
        </linearGradient>
      </defs>

      <circle cx="565" cy="110" r="170" fill="url(#word-glow)" />
      <circle cx="170" cy="350" r="160" fill="url(#word-glow)" />

      <g stroke="url(#word-orbit)" strokeOpacity=".48" strokeWidth="1.3">
        <ellipse cx="380" cy="230" rx="300" ry="112" transform="rotate(-18 380 230)" />
        <ellipse cx="380" cy="230" rx="245" ry="155" transform="rotate(28 380 230)" />
        <path d="M48 118H172V83H260M508 368H628V330H715" strokeDasharray="4 7" />
        <path d="M95 270h54l20-20h45M540 105h46l17 17h52" strokeDasharray="3 6" />
      </g>

      <g transform="translate(278 160)">
        <path
          d="M0 36Q57 2 108 36V150Q56 119 0 150Z"
          fill="url(#word-book)"
          stroke="#A5B4FC"
          strokeOpacity=".8"
          strokeWidth="2"
        />
        <path
          d="M108 36Q160 2 216 36V150Q162 119 108 150Z"
          fill="#0E7490"
          fillOpacity=".8"
          stroke="#67E8F9"
          strokeOpacity=".8"
          strokeWidth="2"
        />
        <path
          d="M108 36V150M20 57Q53 42 83 57M20 75Q53 60 83 75M20 93Q53 78 83 93M134 57Q166 42 196 57M134 75Q166 60 196 75M134 93Q166 78 196 93"
          stroke="#C4B5FD"
          strokeOpacity=".75"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27 118Q57 107 83 120M134 118Q165 107 193 120"
          stroke="#67E8F9"
          strokeOpacity=".7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      <g transform="translate(112 118) rotate(-9)">
        <rect width="116" height="70" rx="17" fill="#1E1B4B" stroke="#A78BFA" strokeOpacity=".85" />
        <text x="58" y="44" fill="#DDD6FE" fontSize="28" textAnchor="middle" fontWeight="700">
          WHY?
        </text>
      </g>

      <g transform="translate(535 250) rotate(8)">
        <rect width="116" height="66" rx="16" fill="#083344" stroke="#67E8F9" strokeOpacity=".85" />
        <path
          d="M23 34h5l8-8v16l-8-8h-5ZM45 29q10 5 0 10M51 23q19 11 0 22"
          stroke="#A5F3FC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="83" cy="33" r="4" fill="#A5F3FC" />
      </g>

      <g fill="#C4B5FD">
        <circle cx="256" cy="85" r="4" />
        <circle cx="680" cy="178" r="3" />
        <circle cx="230" cy="355" r="3" />
        <circle cx="482" cy="80" r="5" />
      </g>

      <g fill="#67E8F9">
        <circle cx="160" cy="232" r="4" />
        <circle cx="620" cy="370" r="4" />
        <circle cx="470" cy="390" r="2.5" />
      </g>
    </svg>
  );
}

export default function WordOfTheDay() {
  const [speaking, setSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function playPronunciation() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    if (speaking) {
      window.speechSynthesis.cancel();
      utteranceRef.current = null;
      setSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance("curious");
    utterance.lang = "en-GB";
    utterance.rate = 0.82;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    utteranceRef.current = utterance;
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <section className="relative isolate overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_30%,rgba(139,92,246,0.10),transparent_35%),radial-gradient(ellipse_at_88%_75%,rgba(34,211,238,0.10),transparent_34%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(129,140,248,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(129,140,248,0.24)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

      <div className="page-container relative py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-violet-500">
                    Vocabulary · Word universe
                  </span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.045em] text-[var(--ink)] sm:text-4xl">
                  A useful word for today
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--ink2)]">
                  Discover one word, understand it, and make it part of your English.
                </p>
              </div>

              <span className="hidden shrink-0 rounded-full border border-[var(--line)] bg-[var(--surf)] px-3 py-2 font-mono text-[10px] font-semibold tracking-wider text-[var(--ink3)] sm:block">
                WORD 01 / 365
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-indigo-400/25 bg-[#080D25] shadow-[0_24px_90px_rgba(49,46,129,0.18)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(124,58,237,0.24),transparent_38%),radial-gradient(ellipse_at_90%_85%,rgba(8,145,178,0.20),transparent_40%)]" />

              <div className="pointer-events-none absolute inset-0 opacity-70">
                <WordWorldArt />
              </div>

              <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative flex min-h-[330px] flex-col justify-center border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-200/75">
                    <span className="rounded-md border border-indigo-300/25 bg-indigo-300/10 px-2 py-1">
                      A2
                    </span>
                    <span>Adjective</span>
                    <span className="h-1 w-1 rounded-full bg-cyan-300" />
                    <span>British English</span>
                  </div>

                  <h3 className="mt-5 font-display text-6xl font-semibold leading-none tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.6rem]">
                    curious<span className="text-cyan-300">.</span>
                  </h3>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm tracking-wide text-indigo-100/75">
                      /ˈkjʊə.ri.əs/
                    </span>

                    <button
                      type="button"
                      onClick={playPronunciation}
                      aria-label={speaking ? "Stop pronunciation" : "Play pronunciation"}
                      className="group inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                    >
                      <span className="text-sm">{speaking ? "■" : "▶"}</span>
                      {speaking ? "Stop audio" : "Hear pronunciation"}
                    </button>
                  </div>

                  <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/15 text-violet-200">
                      ✦
                    </span>
                    <span className="text-xs font-medium text-indigo-100/85">
                      Learn it. Hear it. Use it.
                    </span>
                  </div>
                </div>

                <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/10 text-xl text-violet-200">
                      ✧
                    </div>

                    <div>
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                        Meaning
                      </p>
                      <p className="mt-1 text-xs text-indigo-100/60">
                        What does it mean?
                      </p>
                    </div>
                  </div>

                  <p className="max-w-[420px] text-xl font-medium leading-8 tracking-[-0.02em] text-white sm:text-2xl">
                    Wanting to know or learn more about something.
                  </p>

                  <div className="my-7 h-px bg-gradient-to-r from-violet-300/35 via-cyan-300/20 to-transparent" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      “ ”
                    </div>

                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-200/75">
                      In a sentence
                    </p>
                  </div>

                  <p className="mt-4 max-w-[430px] text-base leading-7 text-indigo-50/90 sm:text-lg">
                    “She was{" "}
                    <span className="font-semibold text-cyan-200">curious</span>{" "}
                    about how the machine worked.”
                  </p>

                  <Link
                    href="/vocabulary"
                    className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(99,102,241,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(99,102,241,0.42)] focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                  >
                    Explore vocabulary
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.035] px-7 py-4 sm:px-10 lg:px-12">
                <p className="text-[11px] text-indigo-100/55">
                  Small words. Bigger confidence.
                </p>

                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-6 rounded-full bg-violet-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/50" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
