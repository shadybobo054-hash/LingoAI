"use client";

import { useEffect, useMemo, useState } from "react";

type ListeningCardProps = {
  sentence: string;
  waveform: number[];
};

export default function ListeningCard({ sentence, waveform }: ListeningCardProps) {
  const [isReading, setIsReading] = useState(false);
  const [activeWord, setActiveWord] = useState<number | null>(null);
  const words = useMemo(() => {
    const matches = [...sentence.matchAll(/\S+/g)];

    return matches.map((match, index) => ({
      text: match[0],
      index,
      start: match.index ?? 0,
      end: (match.index ?? 0) + match[0].length,
    }));
  }, [sentence]);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopReading = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsReading(false);
    setActiveWord(null);
  };

  const startReading = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = document.documentElement.lang || "en-US";
    utterance.rate = 0.92;
    utterance.onstart = () => setIsReading(true);
    utterance.onboundary = (event) => {
      if (event.name !== "word") {
        return;
      }

      const word = words.find(
        ({ start, end }) => event.charIndex >= start && event.charIndex < end,
      );
      setActiveWord(word?.index ?? null);
    };
    utterance.onend = () => {
      setIsReading(false);
      setActiveWord(null);
    };
    utterance.onerror = () => {
      setIsReading(false);
      setActiveWord(null);
    };

    setIsReading(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative lg:pt-5">
      <div className="absolute -inset-5 rounded-[36px] bg-[#EAF8FC] opacity-70 blur-2xl" />
      <div className="sada-card relative overflow-hidden rounded-[26px] p-6 sm:p-7">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-[#147D9A]">
          <span>Listening</span>
          <span className="font-mono tracking-normal text-[var(--ink3)]">0:06</span>
        </div>

        <div className="mt-4 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label={isReading ? "Stop listening example" : "Play listening example"}
            onClick={isReading ? stopReading : startReading}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1187A4] text-2xl text-white shadow-[0_8px_18px_rgba(17,135,164,0.22)] transition hover:scale-105"
          >
            <span className={isReading ? "text-lg leading-none" : "ml-1"}>
              {isReading ? "Ⅱ" : "▶"}
            </span>
          </button>
          <div className="flex h-12 flex-1 items-center justify-between gap-1 overflow-hidden">
            {waveform.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`w-1.5 shrink-0 rounded-full transition-colors duration-300 ${isReading ? "animate-[listening-wave_1.2s_ease-in-out_infinite] bg-[#0A839E]" : "bg-[#8ABDD0]"}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        <p className="mt-5 font-display text-[1.2rem] leading-tight text-[#283348] sm:text-[1.55rem]">
          {words.map(({ text, index }) => (
            <span
              key={`${text}-${index}`}
              className={`transition-colors duration-150 ${activeWord === index ? "rounded bg-[#B9E8D3] px-0.5 text-[#0E8F69]" : ""}`}
            >
              {text}{" "}
            </span>
          ))}
        </p>

        <div className="mt-5 border-t border-[var(--line)] pt-4 text-xs font-medium text-[#95A8BE]">
          Tap any word to hear it on its own.
        </div>
      </div>
    </div>
  );
}