"use client";

import { useEffect, useMemo, useState } from "react";

type ListeningCardProps = {
  sentence: string;
  waveform: number[];
};

export default function ListeningCard({
  sentence,
  waveform,
}: ListeningCardProps) {
  const [isReading, setIsReading] = useState(false);
  const [activeWord, setActiveWord] = useState<number | null>(null);

  const words = useMemo(() => {
    return [...sentence.matchAll(/\S+/g)].map((match, index) => ({
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
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(sentence);

    utterance.lang = "en-US";
    utterance.rate = 0.92;

    utterance.onstart = () => {
      setIsReading(true);
    };

    utterance.onboundary = (event) => {
      if (event.name !== "word") return;

      const word = words.find(
        ({ start, end }) =>
          event.charIndex >= start && event.charIndex < end,
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

  const speakWord = (word: string) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.85;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[30px] bg-[#dff5ff] opacity-60 blur-2xl dark:bg-[#1678ed]/10" />

      <div className="relative overflow-hidden rounded-[24px] border border-[#e4edf5] bg-white p-5 shadow-[0_10px_35px_rgba(30,70,110,0.06)] dark:border-white/10 dark:bg-[#111a2b]">
        
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e1f4ff] text-[#1689ed] dark:bg-[#1689ed]/15">
              🎧
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1689ed]">
                Listening
              </p>

              <p className="mt-0.5 text-[11px] text-[#7b8da7] dark:text-[#91a0b7]">
                Listen & repeat
              </p>
            </div>
          </div>

          <span className="rounded-full bg-[#f3f7fb] px-3 py-1 font-mono text-[10px] font-semibold text-[#7183a0] dark:bg-white/5 dark:text-[#a9b6c9]">
            0:06
          </span>
        </div>

        {/* PLAYER */}
        <div className="mt-5 flex items-center gap-4">
          <button
            type="button"
            aria-label={isReading ? "Stop listening" : "Play listening"}
            onClick={isReading ? stopReading : startReading}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1689ed] text-white shadow-[0_8px_20px_rgba(22,137,237,0.25)] transition hover:scale-105 hover:bg-[#096edc]"
          >
            {isReading ? (
              <span className="text-base font-bold">Ⅱ</span>
            ) : (
              <span className="ml-0.5 text-sm">▶</span>
            )}
          </button>

          {/* WAVEFORM */}
          <div className="flex h-10 flex-1 items-center gap-[3px] overflow-hidden">
            {waveform.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`w-1 shrink-0 rounded-full transition-all duration-300 ${
                  isReading
                    ? "animate-[pulse_1s_ease-in-out_infinite] bg-[#1689ed]"
                    : "bg-[#9bcbe9] dark:bg-[#315878]"
                }`}
                style={{
                  height: `${Math.max(8, height * 0.75)}px`,
                  animationDelay: `${index * 40}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* SENTENCE */}
        <div className="mt-5 rounded-2xl bg-[#f6f9fc] p-4 dark:bg-white/[0.04]">
          <p className="text-[17px] font-semibold leading-8 tracking-[-0.2px] text-[#172033] dark:text-white">
            {words.map(({ text, index }) => (
              <button
                key={`${text}-${index}`}
                type="button"
                onClick={() => speakWord(text)}
                className={`mr-1 inline rounded-md px-0.5 transition ${
                  activeWord === index
                    ? "bg-[#b9e8d3] text-[#0e8f69]"
                    : "hover:bg-[#dff1ff] dark:hover:bg-[#1689ed]/15"
                }`}
              >
                {text}
              </button>
            ))}
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-4 flex items-center gap-2 text-[11px] font-medium text-[#8191a8] dark:text-[#91a0b7]">
          <span className="text-[#1689ed]">🔊</span>
          Tap any word to hear it on its own.
        </div>
      </div>
    </div>
  );
}