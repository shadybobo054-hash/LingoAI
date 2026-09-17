"use client";

import { useEffect, useState } from "react";

function speakText(text: string, lang: string, onStart?: () => void, onEnd?: () => void) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.92;
  utterance.onstart = () => onStart?.();
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();
  window.speechSynthesis.speak(utterance);
}

export default function SpeechController() {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const trigger = target.closest<HTMLElement>("[data-speak]");
      const text = trigger?.dataset.speak?.trim();

      if (!trigger || !text) {
        return;
      }

      speakText(text, document.documentElement.lang || "en-US", () => setSpeaking(true), () => setSpeaking(false));
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      window.speechSynthesis.cancel();
      setSpeaking(false);
    };
  }, []);

  return speaking ? (
    <button
      type="button"
      aria-label="Stop reading aloud"
      onClick={() => {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        setSpeaking(false);
      }}
      className="fixed bottom-5 right-5 z-[60] rounded-full bg-[#0E8F69] px-4 py-2 text-xs font-semibold text-white shadow-[var(--sh2)] transition hover:-translate-y-0.5"
    >
      Stop reading
    </button>
  ) : null;
}
