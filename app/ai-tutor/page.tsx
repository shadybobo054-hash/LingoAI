"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "tutor";
  text: string;
};

const tutorModes = [
  "Explain something",
  "Fix my English",
  "Have a conversation",
  "Quiz me",
  "Explain in Arabic",
];

const prompts = [
  "What does “although” mean?",
  "What is the difference between say and tell?",
  "I am agree with you",
  "Practise a short conversation with me",
  "Quiz me on five travel words",
];

export default function AiTutorPage() {
  const [activeMode, setActiveMode] = useState("Explain something");
  const [input, setInput] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return new URLSearchParams(window.location.search).get("question") || "";
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askTutor(question: string) {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || loading) {
      return;
    }

    const history = messages;
    setError("");
    setInput("");
    setMessages((current) => [...current, { role: "user", text: trimmedQuestion }]);
    setLoading(true);

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmedQuestion,
          mode: activeMode,
          history,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The tutor could not respond.");
      }

      setMessages((current) => [...current, { role: "tutor", text: result.answer }]);
    } catch (requestError) {
      const message = requestError instanceof Error
        ? requestError.message
        : "The tutor could not respond.";
      setError(message);
      setMessages((current) => [
        ...current,
        { role: "tutor", text: "I could not reach Ollama. Check the connection message below and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askTutor(input);
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container grid gap-8 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:grid-cols-[320px_1fr] lg:gap-9">
        <aside>
          <h1 className="font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
            Your English tutor
          </h1>
          <p className="mt-3 max-w-[330px] text-base leading-6 text-[var(--ink2)]">
            Ask anything - a word, a rule, a sentence you are unsure about.
            Answers stay short and useful.
          </p>

          <div className="mt-5 space-y-2">
            {tutorModes.map((mode) => {
              const selected = activeMode === mode;

              return (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveMode(mode)}
                  className={`flex w-full items-center justify-between rounded-[14px] border px-4 py-3 text-left text-sm font-semibold transition ${selected ? "border-[#2477D1] bg-[#2477D1] text-white shadow-[var(--sh)]" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#2477D1] hover:text-[#2477D1]"}`}
                >
                  {mode}
                  <span className={`h-2 w-2 rounded-full ${selected ? "bg-[#565AD7]" : "bg-[#565AD7]"}`} />
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-5 text-[var(--ink3)]">
            The tutor knows the words and lessons on this site.
          </p>
          <button
            type="button"
            onClick={() => {
              setMessages([]);
              setError("");
            }}
            className="mt-3 rounded-full bg-[var(--surf2)] px-4 py-2 text-xs font-semibold text-[var(--ink2)] transition hover:text-[var(--ink)]"
          >
            Clear conversation
          </button>
        </aside>

        <section className="overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--surf)] shadow-[var(--sh2)]">
          <div className="p-6 sm:p-7 lg:p-8">
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF] text-[#565AD7]">
                <span className="h-2.5 w-2.5 rounded-full bg-current" />
              </span>
              <div>
                <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
                  {messages.length ? "Let’s keep going." : "What are we looking at today?"}
                </h2>
                <p className="mt-2 text-sm text-[var(--ink2)]">{activeMode}</p>
              </div>
            </div>

            {messages.length === 0 ? (
              <>
                <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink3)]">
                  Try one of these
                </p>
                <div className="mt-3 space-y-2">
                  {prompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      data-speak={prompt}
                      onClick={() => askTutor(prompt)}
                      className="flex w-full items-center justify-between rounded-[14px] bg-[var(--surf2)] px-4 py-3.5 text-left text-sm text-[var(--ink)] transition hover:bg-[var(--brand-soft)]"
                    >
                      {prompt}
                      <span className="text-[var(--ink3)]">→</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-6 max-h-[330px] space-y-4 overflow-y-auto pr-1">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={message.role === "user" ? "ml-auto max-w-[85%] rounded-2xl bg-[#EAF5FF] px-4 py-3 text-sm text-[#1C6FD0]" : "max-w-[90%] rounded-2xl bg-[var(--surf2)] px-4 py-3 text-sm leading-6 text-[var(--ink)]"}>
                    {message.text}
                  </div>
                ))}
                {loading && (
                  <div className="max-w-[90%] rounded-2xl bg-[var(--surf2)] px-4 py-3 text-sm text-[var(--ink3)]">
                    Thinking with Ollama...
                  </div>
                )}
              </div>
            )}
            {error && (
              <p className="mt-4 rounded-xl bg-[#FFF0EC] px-4 py-3 text-xs leading-5 text-[#B8422B]">
                {error}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[var(--line)] bg-[var(--bg2)] p-4 sm:p-5">
            <div className="flex items-center gap-3 rounded-[18px] border border-[var(--line2)] bg-[var(--surf)] px-4 py-3 shadow-[var(--sh)] focus-within:border-[#2477D1]">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about a word, a rule, or paste a sentence..."
                aria-label="Ask your English tutor"
                className="min-w-0 flex-1 bg-transparent text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink3)]"
              />
              <button type="submit" aria-label="Send question" disabled={loading} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2477D1] text-white transition hover:scale-105 disabled:cursor-wait disabled:opacity-60">
                {loading ? "…" : "→"}
              </button>
            </div>
          </form>
        </section>
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container grid gap-8 py-10 sm:grid-cols-[0.9fr_1.6fr] sm:gap-12 sm:py-14">
          <div className="max-w-[270px]">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3D9BFF] text-xs font-semibold text-white">●</span>
              <span className="font-display text-lg font-semibold text-[var(--ink)]">Sada</span>
            </Link>
            <p className="mt-3 text-sm leading-5 text-[var(--ink3)]">A calm place to learn languages. Built around listening, curiosity and short honest feedback.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">Languages we teach</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { name: "English", status: "live", active: true },
                { name: "Spanish", status: "soon", active: false },
                { name: "French", status: "soon", active: false },
                { name: "Turkish", status: "soon", active: false },
                { name: "Japanese", status: "soon", active: false },
              ].map((language) => (
                <span key={language.name} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${language.active ? "border-[#D6E9FA] bg-[#F5FAFF] text-[#2477D1]" : "border-[var(--line)] bg-transparent text-[var(--ink2)]"}`}>
                  {language.name}<span className="ml-1.5 text-[var(--ink3)]">{language.status}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

