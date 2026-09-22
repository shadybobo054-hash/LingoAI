"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LessonContent = {
  title: string;
  words: string[];
  exchange: string;
  explanation: {
    title: string;
    body: string;
    examples: { instead: string; say: string }[];
  };
  questions: {
    prompt: string;
    choices: string[];
    answer: string;
  }[];
  fill: { prompt: string; choices: string[]; answer: string };
  next: string | null;
};

const lessonContent: Record<string, LessonContent> = {
  "ordering-food": {
    title: "Ordering food",
    words: ["menu", "recommendation", "still water", "bill", "table for two"],
    exchange: "I will have the soup, please. Could I get some water?",
    explanation: {
      title: "Why “I will have” and not “I want”",
      body: "“I want” is grammatically fine but sounds blunt in a restaurant. English softens requests with will have, would like, or could I.",
      examples: [
        { instead: "I want the soup.", say: "I will have the soup, please." },
        { instead: "Give me water.", say: "Could I get some water?" },
      ],
    },
    questions: [
      { prompt: "What would you ask when you want the server to suggest a dish?", choices: ["Could you recommend something?", "Where is the checkout?", "Is this my gate?"], answer: "Could you recommend something?" },
      { prompt: "Which phrase politely asks for the bill?", choices: ["Could we have the bill, please?", "Where is my boarding pass?", "I am running late."], answer: "Could we have the bill, please?" },
    ],
    fill: { prompt: "What do you ____?", choices: ["recommend", "prefer", "order"], answer: "recommend" },
    next: "airport",
  },
  airport: {
    title: "Getting through the airport",
    words: ["boarding pass", "gate", "carry-on", "delayed", "aisle seat"],
    exchange: "My flight is delayed. Which gate should I go to?",
    explanation: { title: "Clear airport questions", body: "Short, direct questions help you get useful information quickly at the airport.", examples: [{ instead: "Where plane?", say: "Which gate should I go to?" }, { instead: "Bag with me.", say: "This is my carry-on." }] },
    questions: [
      { prompt: "Which word means a small bag you take onto the plane?", choices: ["Carry-on", "Boarding pass", "Gate"], answer: "Carry-on" },
      { prompt: "Where do you go before boarding the plane?", choices: ["The gate", "The menu", "The voicemail"], answer: "The gate" },
    ],
    fill: { prompt: "My flight is ____.", choices: ["delayed", "recommended", "available"], answer: "delayed" },
    next: "small-talk-at-work",
  },
  "small-talk-at-work": {
    title: "Small talk at work",
    words: ["catch up", " How is it going?", "busy week", "in a minute", "sounds good"],
    exchange: "How is it going? It has been a busy week.",
    explanation: { title: "Small talk that sounds natural", body: "Short questions and soft follow-ups make work conversations feel relaxed instead of scripted.", examples: [{ instead: "How is work?", say: "How is it going?" }, { instead: "Talk later.", say: "Let's catch up soon." }] },
    questions: [
      { prompt: "Which phrase is a natural way to ask about someone's day?", choices: ["How is it going?", "Where is the invoice?", "Close the meeting."], answer: "How is it going?" },
      { prompt: "Which phrase suggests continuing a conversation later?", choices: ["Let's catch up soon.", "Pass me the gate.", "I need a menu."], answer: "Let's catch up soon." },
    ],
    fill: { prompt: "Let's ____ up soon.", choices: ["catch", "call", "hold"], answer: "catch" },
    next: "phone-calls",
  },
  "phone-calls": {
    title: "Phone calls and voicemail",
    words: ["hold the line", "voicemail", "call back", "available", "speak to"],
    exchange: "Could you call me back when you are available?",
    explanation: { title: "Useful phone phrases", body: "Phone calls work better when you clearly say what you need and when you can continue the conversation.", examples: [{ instead: "Call later.", say: "Could you call me back?" }, { instead: "Can talk now?", say: "Are you available?" }] },
    questions: [
      { prompt: "What do you say when you want someone to return your call?", choices: ["Could you call me back?", "Could you open the gate?", "I need the menu."], answer: "Could you call me back?" },
      { prompt: "Which phrase asks whether someone can talk now?", choices: ["Are you available?", "Is the water still?", "Where is my aisle?"], answer: "Are you available?" },
    ],
    fill: { prompt: "Could you call me ____?", choices: ["back", "over", "through"], answer: "back" },
    next: "giving-your-opinion",
  },
  "giving-your-opinion": {
    title: "Giving your opinion kindly",
    words: ["I see your point", "I tend to think", "perhaps", "not quite", "fair enough"],
    exchange: "I see your point, but I tend to think we should wait.",
    explanation: { title: "Softening your opinion", body: "These phrases let you disagree while showing that you have listened to the other person.", examples: [{ instead: "You are wrong.", say: "I see your point, but..." }, { instead: "My answer is...", say: "I tend to think..." }] },
    questions: [
      { prompt: "Which phrase gently introduces your own opinion?", choices: ["I tend to think", "Give me the bill", "Where is the gate?"], answer: "I tend to think" },
      { prompt: "Which phrase shows you understand another view?", choices: ["I see your point.", "Call me back.", "Show me the error."], answer: "I see your point." },
    ],
    fill: { prompt: "I tend to ____ we should wait.", choices: ["think", "speak", "catch"], answer: "think" },
    next: "explaining-a-problem",
  },
  "explaining-a-problem": {
    title: "Explaining a problem to support",
    words: ["issue", "crashed", "error message", "tried restarting", "screenshot"],
    exchange: "The app crashed, so I tried restarting it and took a screenshot.",
    explanation: { title: "Explain problems in order", body: "Start with what happened, then say when it happened and what you already tried.", examples: [{ instead: "It does not work.", say: "The app crashed." }, { instead: "I did things.", say: "I tried restarting it." }] },
    questions: [
      { prompt: "What helps support understand what happened?", choices: ["An error message", "A table for two", "A boarding pass"], answer: "An error message" },
      { prompt: "What should you describe after explaining the issue?", choices: ["What you already tried", "Your dinner order", "Your seat number"], answer: "What you already tried" },
    ],
    fill: { prompt: "I tried ____ the app.", choices: ["restarting", "ordering", "boarding"], answer: "restarting" },
    next: null,
  },
};

export default function LessonPlayerPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const fallbackLesson = lessonContent[params.slug] ?? lessonContent.airport;
  const [apiLesson, setApiLesson] = useState<LessonContent | null>(null);
  const [step, setStep] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [selectedFill, setSelectedFill] = useState<string | null>(null);
  const [isExchangePlaying, setIsExchangePlaying] = useState(false);
  const lesson = apiLesson ?? fallbackLesson;
  const question = step === 3 ? lesson.questions[0] : step === 4 ? lesson.questions[1] : null;

  useEffect(() => {
    let active = true;

    fetch(`/api/lessons/${encodeURIComponent(params.slug)}`)
      .then(async (response) => (response.ok ? ((await response.json()) as LessonContent) : null))
      .then((remoteLesson) => {
        if (active && remoteLesson?.title && remoteLesson.questions?.length >= 2) {
          setApiLesson(remoteLesson);
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, [params.slug]);

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = document.documentElement.lang || "en-US";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };

  const toggleExchangePlayback = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    if (isExchangePlaying) {
      window.speechSynthesis.cancel();
      setIsExchangePlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(lesson.exchange);
    utterance.lang = document.documentElement.lang || "en-US";
    utterance.rate = 0.92;
    utterance.onstart = () => setIsExchangePlaying(true);
    utterance.onend = () => setIsExchangePlaying(false);
    utterance.onerror = () => setIsExchangePlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const choose = (choice: string) => {
    setSelectedChoice(choice);
    if (question && choice === question.answer) {
      speak(choice);
    }
  };

  const goNext = () => {
    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2) {
      setSelectedChoice(null);
      setStep(3);
      return;
    }

    if (step === 3) {
      setSelectedChoice(null);
      setStep(4);
      return;
    }

    if (step === 4) {
      setSelectedChoice(null);
      setStep(5);
      return;
    }

    if (step === 5) {
      setSelectedFill(null);
      setStep(6);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-5 sm:pb-24 sm:pt-8">
        <header className="mb-7">
          <div className="flex items-center gap-3">
            <Link
              href="/lessons"
              aria-label="Close lesson"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] text-xl text-[var(--ink2)] transition hover:border-[#0A7E99] hover:text-[#0A7E99]"
            >
              ×
            </Link>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A7E99]">
                Learn
              </p>
              <h1 className="truncate text-sm font-semibold text-[var(--ink)] sm:text-base">
                {lesson.title}
              </h1>
            </div>
            <span className="font-mono text-xs text-[var(--ink3)]">{Math.min(step, 5)} / 5</span>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-1">
            {[0, 1, 2, 3, 4].map((bar) => (
              <span
                key={bar}
                className={`h-1 rounded-full ${bar < step ? "bg-[#0A7E99]" : "bg-[var(--line)]"}`}
              />
            ))}
          </div>
        </header>

        <section className="sada-card rounded-[26px] p-6 sm:p-8">
          {step === 1 ? (
            <>
              <h2 className="font-display text-4xl font-medium sm:text-5xl">
                {params.slug === "airport" ? "Airport words worth knowing" : `${lesson.title} words worth knowing`}
              </h2>
              <p className="mt-1 text-sm text-[var(--ink3)]">Tap any line to hear it</p>
              <div className="mt-5 space-y-2">
                {lesson.words.map((word) => (
                  <button
                    key={word}
                    type="button"
                    onClick={() => speak(word)}
                    className="flex min-h-16 w-full items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surf)] px-4 text-left text-base text-[var(--ink)] transition hover:border-[#8CCDDD] hover:bg-[#F4FCFE]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E4F6FB] text-sm font-semibold text-[#0A7E99]">
                      ▶
                    </span>
                    {word.trim()}
                  </button>
                ))}
              </div>
            </>
          ) : step === 2 ? (
            <>
              <h2 className="font-display text-4xl font-medium sm:text-5xl">Listen to the whole exchange</h2>
              <div className="mt-6 rounded-2xl bg-[#EAF5FF] p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={isExchangePlaying ? "Stop the exchange" : "Play the exchange"}
                    aria-pressed={isExchangePlaying}
                    onClick={toggleExchangePlayback}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2477D1] text-xl text-white transition hover:scale-105"
                  >
                    {isExchangePlaying ? "■" : "▶"}
                  </button>
                  <div className="flex h-10 flex-1 items-center justify-between gap-1 overflow-hidden">
                    {[18, 28, 22, 34, 25, 12, 30, 18, 10, 26, 34, 20, 30, 16, 24, 12, 32, 22, 28, 14, 30, 20, 26, 16].map((height, index) => (
                      <span key={index} className="w-2 shrink-0 rounded-full bg-[#8DB9E8]" style={{ height: `${height}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" onClick={toggleExchangePlayback} className="rounded-full border border-[var(--line2)] bg-[var(--surf)] px-4 py-2 text-sm font-semibold text-[var(--ink)]">{isExchangePlaying ? "Stop listening" : "Hear it again"}</button>
                <button type="button" className="rounded-full border border-[var(--line2)] bg-[var(--surf)] px-4 py-2 text-sm font-semibold text-[var(--ink)]">Show transcript</button>
              </div>
            </>
          ) : step === 3 || step === 4 ? (
            <>
              {step === 3 ? (
                <>
                  <h2 className="font-display text-4xl font-medium sm:text-5xl">{lesson.explanation.title}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink2)]">{lesson.explanation.body}</p>
                  <div className="mt-6 space-y-3">
                    {lesson.explanation.examples.map((example) => (
                      <div key={example.instead} className="rounded-2xl bg-[var(--surf2)] px-4 py-4">
                        <p className="text-sm text-[var(--ink3)]"><span className="mr-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]">Instead of</span><span className="line-through">{example.instead}</span></p>
                        <p className="mt-3 text-sm font-semibold text-[var(--ink)]"><span className="mr-7 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0E8F69]">Say this</span>{example.say}<button type="button" onClick={() => speak(example.say)} className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line2)] bg-white text-xs text-[#2477D1]">▶</button></p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2477D1]">Practice</p>
                  <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium sm:text-4xl">{question?.prompt}</h2>
                </>
              )}
              {step === 4 && question && <div className="mt-7 space-y-2">
                {question.choices.map((choice) => {
                  const selected = selectedChoice === choice;
                  const correct = selected && choice === question.answer;

                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => choose(choice)}
                      className={`flex min-h-14 w-full items-center justify-between rounded-2xl border px-4 text-left text-sm font-semibold transition ${selected ? correct ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]" : "border-[#D14A33] bg-[#FEECE8] text-[#B8422B]" : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink)] hover:border-[#0A7E99] hover:bg-[#F4FCFE]"}`}
                    >
                      {choice}
                      {selected && <span>{correct ? "✓" : "×"}</span>}
                    </button>
                  );
                })}
              </div>}
              {step === 4 && selectedChoice && question && (
                <p className={`mt-5 text-sm font-semibold ${selectedChoice === question.answer ? "text-[#0E8F69]" : "text-[#CE543B]"}`}>
                  {selectedChoice === question.answer ? "Correct. Nice work." : `The answer is “${question.answer}”. Try again or continue.`}
                </p>
              )}
            </>
          ) : step === 5 ? (
            <>
              <p className="font-semibold text-[var(--ink)]">Complete the question you ask before choosing.</p>
              <div className="mt-5 flex items-end gap-3 font-display text-3xl sm:text-4xl">
                <span>{lesson.fill.prompt.split("____")[0]}</span>
                <span className={`inline-flex min-w-20 items-center justify-center rounded-b-xl border-b-2 px-2 font-sans text-xl ${selectedFill ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]" : "border-[var(--line2)] text-[var(--ink3)]"}`}>{selectedFill || "...."}</span>
                <span>{lesson.fill.prompt.split("____")[1]}</span>
              </div>
              <div className="mt-7 space-y-2">
                {lesson.fill.choices.map((choice) => (
                  <button key={choice} type="button" onClick={() => setSelectedFill(choice)} className={`flex min-h-14 w-full items-center rounded-2xl border px-4 text-left text-sm font-semibold ${selectedFill === choice ? "border-[#0E8F69] bg-[#E8FAF3] text-[#0E8F69]" : "border-[var(--line)] bg-[var(--surf)] text-[var(--ink)] hover:border-[#2477D1]"}`}>{choice}</button>
                ))}
              </div>
            </>
          ) : (
            <div className="py-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E8FAF3] text-xl font-semibold text-[#0E8F69]">✓</span>
              <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Lesson complete</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[var(--ink2)]">
                You finished vocabulary, listening, explanation, and practice in {lesson.title}.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {lesson.next ? (
                  <button
                    type="button"
                    onClick={() => router.push(`/lessons/${lesson.next}`)}
                    className="rounded-full bg-[#2477D1] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D69BB]"
                  >
                    Continue to next lesson →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => router.push("/lessons")}
                    className="rounded-full bg-[#2477D1] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D69BB]"
                  >
                    Back to lessons →
                  </button>
                )}
                <Link
                  href="/lessons"
                  className="rounded-full border border-[var(--line2)] bg-[var(--surf)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5"
                >
                  Stay here
                </Link>
              </div>
            </div>
          )}

          {step < 6 && <div className="mt-7 flex justify-end border-t border-[var(--line)] pt-5">
              <button
              type="button"
              onClick={goNext}
                disabled={(step === 4 && selectedChoice !== question?.answer) || (step === 5 && selectedFill !== lesson.fill.answer)}
              className="rounded-full bg-[#2477D1] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1D69BB] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === 1 ? "Continue" : step === 2 ? "Continue" : step === 3 ? "Continue" : step === 4 ? "Continue" : "Finish lesson"} →
            </button>
          </div>}
        </section>
      </section>
    </main>
  );
}