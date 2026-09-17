"use client";

import { useEffect, useState } from "react";

function getTextToSpeak(target: HTMLElement) {
  const explicitText = target.closest<HTMLElement>("[data-speak]")?.dataset.speak;

  if (explicitText) {
    return explicitText;
  }

  return "";
}

function getReadableElement(target: HTMLElement) {
  return target.closest<HTMLElement>("[data-speak]");
}

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

    let activeElement: HTMLElement | null = null;

    const clearHighlight = () => {
      activeElement?.classList.remove("sada-speaking");
      activeElement = null;
      setSpeaking(false);
    };

    const handleSpeechEnd = clearHighlight;
    window.speechSynthesis.addEventListener("end", handleSpeechEnd);

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const trigger = target.closest<HTMLElement>("[data-speak]");

      if (!trigger) {
        return;
      }

      const text = getTextToSpeak(trigger);

      if (!text || text.length < 1) {
        return;
      }

      clearHighlight();
      activeElement = getReadableElement(trigger);
      activeElement?.classList.add("sada-speaking");

      speakText(text, document.documentElement.lang || "en-US", () => setSpeaking(true), clearHighlight);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      window.speechSynthesis.removeEventListener("end", handleSpeechEnd);
      activeElement?.classList.remove("sada-speaking");
      window.speechSynthesis.cancel();
      setSpeaking(false);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex max-w-xs flex-col gap-3">
      {speaking && (
        <button
          type="button"
          aria-label="Stop reading aloud"
          onClick={() => {
            window.speechSynthesis.cancel();
            setSpeaking(false);
          }}
          className="rounded-full bg-[#0E8F69] px-4 py-2 text-xs font-semibold text-white shadow-[var(--sh2)] transition hover:-translate-y-0.5"
        >
          Stop reading
        </button>
      )}
    </div>
  );
}
