"use client";

import { useEffect, useState } from "react";

const readableTags = new Set(["H1", "H2", "H3", "H4", "P", "SPAN", "LI"]);

function getTextToSpeak(target: HTMLElement) {
  const explicitText = target.closest<HTMLElement>("[data-speak]")?.dataset.speak;

  if (explicitText) {
    return explicitText;
  }

  if (target.closest("nav, header, footer, input, textarea, select")) {
    return "";
  }

  const element = target.closest<HTMLElement>("h1, h2, h3, h4, p, span, li, button");

  if (!element || !readableTags.has(element.tagName) && element.tagName !== "BUTTON") {
    return "";
  }

  if (element.closest("[aria-hidden='true']")) {
    return "";
  }

  const text = element.tagName === "BUTTON"
    ? element.getAttribute("aria-label") || element.textContent || ""
    : element.textContent || "";

  return text.replace(/\s+/g, " ").trim();
}

function getReadableElement(target: HTMLElement) {
  return target.closest<HTMLElement>("[data-speak], h1, h2, h3, h4, p, span, li, button");
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

      const text = getTextToSpeak(target);

      if (!text || text.length < 1) {
        return;
      }

      clearHighlight();
      activeElement = getReadableElement(target);
      activeElement?.classList.add("sada-speaking");

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = document.documentElement.lang || "en-US";
      utterance.rate = 0.92;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = clearHighlight;
      utterance.onerror = clearHighlight;
      window.speechSynthesis.speak(utterance);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      window.speechSynthesis.removeEventListener("end", handleSpeechEnd);
      activeElement?.classList.remove("sada-speaking");
      window.speechSynthesis.cancel();
    };
  }, []);

  if (!speaking) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Stop reading aloud"
      onClick={() => {
        window.speechSynthesis.cancel();
        setSpeaking(false);
      }}
      className="fixed bottom-5 right-5 z-[60] rounded-full bg-[#0E8F69] px-4 py-2 text-xs font-semibold text-white shadow-[var(--sh2)] transition hover:-translate-y-0.5"
    >
      Stop reading
    </button>
  );
}
