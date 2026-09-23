"use client";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useSearchParams } from "next/navigation";
import type { FormEvent } from "react";

import { getProgress, recordActivity } from "@/lib/progress";
import { tutorModes } from "@/components/ai-tutor/constants";
import type { Message } from "@/components/ai-tutor/types";
import { useTutorSpeech } from "@/hooks/useTutorSpeech";

import TutorHeader from "@/components/ai-tutor/TutorHeader";
import TutorModes from "@/components/ai-tutor/TutorModes";
import ProgressCard from "@/components/ai-tutor/ProgressCard";
import TutorChat from "@/components/ai-tutor/TutorChat";
import TutorInput from "@/components/ai-tutor/TutorInput";
import CurrentMode from "@/components/ai-tutor/CurrentMode";
import QuickLinks from "@/components/ai-tutor/QuickLinks";
import FeatureCards from "@/components/ai-tutor/FeatureCards";

const serverProgressSnapshot = {
  xp: 0,
  streak: 0,
};

let clientProgressSnapshot = serverProgressSnapshot;
let progressInitialized = false;

const progressListeners = new Set<() => void>();

function getClientProgressSnapshot() {
  if (typeof window === "undefined") {
    return serverProgressSnapshot;
  }

  if (!progressInitialized) {
    const currentProgress = getProgress();

    clientProgressSnapshot = {
      xp: currentProgress.xp,
      streak: currentProgress.streak,
    };

    progressInitialized = true;
  }

  return clientProgressSnapshot;
}

function getServerProgressSnapshot() {
  return serverProgressSnapshot;
}

function handleStorageChange(event: StorageEvent) {
  if (
    event.key === "lingoai-xp" ||
    event.key === "lingoai-streak" ||
    event.key === "lingoai-last-activity"
  ) {
    const currentProgress = getProgress();

    clientProgressSnapshot = {
      xp: currentProgress.xp,
      streak: currentProgress.streak,
    };

    progressListeners.forEach((listener) => listener());
  }
}

function subscribeToProgress(callback: () => void) {
  progressListeners.add(callback);

  window.addEventListener("storage", handleStorageChange);

  return () => {
    progressListeners.delete(callback);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function refreshProgressSnapshot() {
  const currentProgress = getProgress();

  clientProgressSnapshot = {
    xp: currentProgress.xp,
    streak: currentProgress.streak,
  };

  progressInitialized = true;

  progressListeners.forEach((listener) => listener());
}

function AiTutorContent() {
  const searchParams = useSearchParams();

  const initialQuestion = searchParams.get("question") ?? "";

  const [input, setInput] = useState(initialQuestion);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMode, setSelectedMode] = useState("conversation");

  const progress = useSyncExternalStore(
    subscribeToProgress,
    getClientProgressSnapshot,
    getServerProgressSnapshot,
  );

  const activeMode =
    tutorModes.find((mode) => mode.id === selectedMode) ??
    tutorModes[0];

  const {
    isListening,
    speechError,
    recognitionRef,
    toggleListening,
    stopListening,
    speakText,
    stopSpeaking,
    setSpeechError,
  } = useTutorSpeech(setInput);

  useEffect(() => {
    return () => {
      stopListening();
      stopSpeaking();
    };
  }, [stopListening, stopSpeaking]);

  function changeMode(mode: string) {
    setSelectedMode(mode);
    stopListening();
    setSpeechError("");
  }

  async function askTutor(event?: FormEvent) {
    event?.preventDefault();

    const question = input.trim();

    if (!question || loading) {
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setError("");
    setSpeechError("");

    const userMessage: Message = {
      role: "user",
      content: question,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          mode: selectedMode,
          history: messages.map((message) => ({
            role: message.role === "assistant" ? "tutor" : "user",
            text: message.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      const answer =
        data?.answer ||
        data?.message ||
        data?.response ||
        "I couldn't generate an answer.";

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: answer,
        },
      ]);

      recordActivity(5);
      refreshProgressSnapshot();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to connect to the AI tutor.",
      );
    } finally {
      setLoading(false);
    }
  }

  function fillPrompt(prompt: string) {
    setInput(prompt);
  }

  const lastUserMessage =
    [...messages]
      .reverse()
      .find((message) => message.role === "user")?.content ||
    input ||
    "What would you like to learn today?";

  const progressPercentage = Math.min(progress.xp % 100, 100);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <TutorHeader />

        <section className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)_250px]">
          <aside className="space-y-6">
            <TutorModes
              selectedMode={selectedMode}
              onModeChange={changeMode}
            />

            <ProgressCard
              xp={progress.xp}
              streak={progress.streak}
              percentage={progressPercentage}
            />
          </aside>

          <section className="min-w-0">
            <TutorChat
              messages={messages}
              loading={loading}
              lastUserMessage={lastUserMessage}
              error={error}
              onPrompt={fillPrompt}
              onSpeak={speakText}
              onStopSpeaking={stopSpeaking}
            />

            <TutorInput
              input={input}
              setInput={setInput}
              selectedMode={selectedMode}
              isListening={isListening}
              loading={loading}
              speechError={speechError}
              activeMode={activeMode}
              onSubmit={askTutor}
              onToggleListening={toggleListening}
            />
          </section>

          <aside className="space-y-6">
            <CurrentMode
              mode={activeMode}
              selectedMode={selectedMode}
            />

            <QuickLinks />
          </aside>
        </section>

        <FeatureCards />

        <style jsx global>{`
          @keyframes robotFloat {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    </main>
  );
}

export default function AiTutorPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
          <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--surf)] px-6 py-4 text-sm font-bold text-[var(--ink2)] shadow-[var(--sh)]">
              Loading AI Tutor...
            </div>
          </div>
        </main>
      }
    >
      <AiTutorContent />
    </Suspense>
  );
}
