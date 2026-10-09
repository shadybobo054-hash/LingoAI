"use client";

import Link from "next/link";
import { use, useState } from "react";

const WORDS: Record<string, any> = {
  curious: {
    meaning: "فضولي",
    level: "A2",
    pos: "adjective",
    phonetic: "/ˈkjʊəriəs/",
    definition: "Wanting to know or learn more about something.",
    example: "She was curious about the new project.",
    situations: [
      ["☕", "At a café", "I'm curious about the new menu."],
      ["💼", "At work", "She was curious about the idea."],
      ["👥", "With friends", "I'm curious to know what happened."],
    ],
    options: [
      "I'm curious about what happens next.",
      "I curious to the store yesterday.",
      "She was curious very quickly.",
    ],
    answer: 0,
  },

  commute: {
    meaning: "يتنقل يوميًا",
    level: "B1",
    pos: "verb",
    phonetic: "/kəˈmjuːt/",
    definition: "To travel regularly between your home and work or school.",
    example: "I commute to work every morning.",
    situations: [
      ["🚆", "To work", "I commute by train every day."],
      ["🏙️", "In the city", "Her commute takes an hour."],
      ["🎓", "To school", "He commutes to school by bus."],
    ],
    options: [
      "I commute to work every morning.",
      "I was commute yesterday.",
      "She commute very happy.",
    ],
    answer: 0,
  },

  affordable: {
    meaning: "ميسور التكلفة",
    level: "B1",
    pos: "adjective",
    phonetic: "/əˈfɔːdəbl/",
    definition: "Not too expensive for most people to buy or use.",
    example: "The hotel is comfortable and affordable.",
    situations: [
      ["🏨", "Travel", "We found an affordable hotel."],
      ["🛍️", "Shopping", "This phone is surprisingly affordable."],
      ["🏠", "Daily life", "They need an affordable apartment."],
    ],
    options: [
      "The hotel is comfortable and affordable.",
      "I affordable to work every day.",
      "She affordably went yesterday.",
    ],
    answer: 0,
  },

  confident: {
    meaning: "واثق",
    level: "B1",
    pos: "adjective",
    phonetic: "/ˈkɒnfɪdənt/",
    definition: "Feeling sure about your abilities or yourself.",
    example: "She feels more confident speaking English.",
    situations: [
      ["🎤", "Speaking", "I feel confident speaking English."],
      ["💼", "At work", "He sounds confident in meetings."],
      ["🎓", "Learning", "She became more confident over time."],
    ],
    options: [
      "She feels confident speaking English.",
      "I confident to school yesterday.",
      "He was confidently a book.",
    ],
    answer: 0,
  },
};

export default function WordPage({
  params,
}: {
  params: Promise<{ word: string }>;
}) {
  const { word } = use(params);
  const w = WORDS[word.toLowerCase()] || WORDS.curious;

  const [playing, setPlaying] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);

  const speak = () => {
    if (playing) {
      speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const u = new SpeechSynthesisUtterance(word);
    u.lang = "en-US";
    u.rate = 0.8;
    u.onend = () => setPlaying(false);

    setPlaying(true);
    speechSynthesis.speak(u);
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] p-5 text-[var(--ink)] md:p-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/vocabulary"
          className="text-sm font-bold"
          style={{ color: "var(--ink2)" }}
        >
          ← Vocabulary
        </Link>

        {/* HERO */}
        <section
          className="mt-6 grid overflow-hidden rounded-[34px] border lg:grid-cols-[1.1fr_.9fr]"
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
            boxShadow: "var(--sh2)",
          }}
        >
          <div className="p-7 md:p-12">
            <div className="flex gap-3">
              <span
                className="rounded-full px-3 py-1.5 text-xs font-bold"
                style={{
                  background: "var(--brand-soft)",
                  color: "var(--brand-ink)",
                }}
              >
                {w.level}
              </span>
              <span className="py-1.5 text-sm" style={{ color: "var(--ink3)" }}>
                {w.pos}
              </span>
            </div>

            <p
              className="mt-10 text-xs font-bold uppercase tracking-[.2em]"
              style={{ color: "var(--ink3)" }}
            >
              Today’s word
            </p>

            <h1 className="mt-2 text-6xl font-black md:text-8xl">{word}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <b className="text-2xl" style={{ color: "var(--brand)" }}>
                {w.meaning}
              </b>
              <span style={{ color: "var(--ink3)" }}>{w.phonetic}</span>
            </div>

            <p
              className="mt-6 max-w-xl text-lg leading-8"
              style={{ color: "var(--ink2)" }}
            >
              {w.definition}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={speak}
                className="rounded-full px-6 py-3 font-bold text-white"
                style={{ background: "var(--brand)" }}
              >
                {playing ? "■ Stop" : "▶ Listen"}
              </button>

              <button
                className="rounded-full border px-6 py-3 font-bold"
                style={{
                  background: "var(--surf2)",
                  borderColor: "var(--line)",
                }}
              >
                ☆ Save
              </button>
            </div>
          </div>

          <div className="bg-[var(--surf2)] p-7 md:p-12">
            <p
              className="text-xs font-bold uppercase tracking-[.2em]"
              style={{ color: "var(--brand)" }}
            >
              Real context
            </p>

            <div
              className="mt-6 rounded-[28px] border p-6"
              style={{
                background: "var(--surf)",
                borderColor: "var(--line)",
                boxShadow: "var(--sh)",
              }}
            >
              <p className="text-2xl font-bold leading-relaxed">
                “{w.example}”
              </p>
            </div>
          </div>
        </section>

        {/* REAL LIFE */}
        <section className="mt-8">
          <span
            className="text-xs font-extrabold uppercase tracking-[.2em]"
            style={{ color: "var(--brand)" }}
          >
            Real life
          </span>

          <h2 className="mt-2 text-3xl font-black">See it in action.</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {w.situations.map(([icon, title, text]: string[]) => (
              <article
                key={title}
                className="rounded-[26px] border p-5 transition hover:-translate-y-1"
                style={{
                  background: "var(--surf)",
                  borderColor: "var(--line)",
                  boxShadow: "var(--sh)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: "var(--brand-soft)" }}
                  >
                    {icon}
                  </span>
                  <b>{title}</b>
                </div>

                <p
                  className="mt-5 text-lg font-semibold leading-8"
                  style={{ color: "var(--ink2)" }}
                >
                  “{text}”
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PROGRESS */}
        <section className="mt-8">
          <span
            className="text-xs font-extrabold uppercase tracking-[.2em]"
            style={{ color: "var(--voc)" }}
          >
            Your progress
          </span>

          <h2 className="mt-2 text-3xl font-black">
            Learn it step by step.
          </h2>

          <div
            className="mt-5 rounded-[28px] border p-6 md:p-8"
            style={{
              background: "var(--surf)",
              borderColor: "var(--line)",
              boxShadow: "var(--sh)",
            }}
          >
            {[
              ["01", "Seen", "You discovered this word."],
              ["02", "Heard", "You listened to its pronunciation."],
              ["03", "Practiced", "You practiced it in context."],
              ["04", "Used", "You used it in a real sentence."],
              ["05", "Mastered", "You can use it naturally."],
            ].map(([num, title, text], i) => (
              <div key={num} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black"
                    style={{
                      background: i === 0 ? "var(--voc)" : "var(--voc-t)",
                      color: i === 0 ? "white" : "var(--voc)",
                    }}
                  >
                    {num}
                  </span>

                  {i < 4 && (
                    <span
                      className="my-2 h-10 w-px"
                      style={{ background: "var(--line)" }}
                    />
                  )}
                </div>

                <div className="pb-6">
                  <h3 className="font-extrabold">{title}</h3>
                  <p
                    className="mt-1 text-sm leading-6"
                    style={{ color: "var(--ink2)" }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONVERSATION */}
        <section className="mt-8">
          <span
            className="text-xs font-extrabold uppercase tracking-[.2em]"
            style={{ color: "var(--cou)" }}
          >
            Conversation
          </span>

          <h2 className="mt-2 text-3xl font-black">Hear it naturally.</h2>

          <div
            className="mt-5 overflow-hidden rounded-[30px] border"
            style={{
              background: "var(--surf)",
              borderColor: "var(--line)",
              boxShadow: "var(--sh)",
            }}
          >
            <div
              className="flex items-center justify-between border-b px-6 py-4"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="text-sm font-extrabold">
                Everyday conversation
              </span>
              <span className="text-xs font-bold" style={{ color: "var(--ink3)" }}>
                Real use
              </span>
            </div>

            <div className="space-y-5 p-6 md:p-8">
              <div className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black"
                  style={{ background: "var(--cou-t)", color: "var(--cou)" }}
                >
                  A
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold" style={{ color: "var(--ink3)" }}>
                    Alex
                  </p>
                  <div
                    className="rounded-2xl rounded-tl-md px-5 py-4 text-[15px] leading-7"
                    style={{ background: "var(--surf2)" }}
                  >
                    Tell me more about your idea.
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <div className="text-right">
                  <p className="mb-1 text-xs font-bold" style={{ color: "var(--ink3)" }}>
                    You
                  </p>
                  <div
                    className="rounded-2xl rounded-tr-md px-5 py-4 text-left text-[15px] leading-7 text-white"
                    style={{ background: "var(--cou)" }}
                  >
                    I’m{" "}
                    <span className="font-black underline underline-offset-4">
                      {word}
                    </span>{" "}
                    to know more about it.
                  </div>
                </div>

                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                  style={{ background: "var(--cou)" }}
                >
                  Y
                </div>
              </div>

              <div
                className="rounded-2xl border px-4 py-3"
                style={{
                  background: "var(--cou-t)",
                  borderColor: "var(--line)",
                }}
              >
                <p className="text-xs font-extrabold" style={{ color: "var(--cou)" }}>
                  WORD IN USE
                </p>
                <p className="mt-1 text-sm font-bold">
                  {word} = {w.definition}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CHALLENGE */}
        <section className="mt-8 pb-10">
          <span
            className="text-xs font-extrabold uppercase tracking-[.2em]"
            style={{ color: "var(--pra)" }}
          >
            Quick challenge
          </span>

          <h2 className="mt-2 text-3xl font-black">
            Can you use the word?
          </h2>

          <div
            className="mt-5 rounded-[30px] border p-6 md:p-8"
            style={{
              background: "var(--surf)",
              borderColor: "var(--line)",
              boxShadow: "var(--sh)",
            }}
          >
            <p className="text-lg font-bold">
              Which sentence uses{" "}
              <span style={{ color: "var(--pra)" }}>{word}</span>{" "}
              correctly?
            </p>

            <div className="mt-6 grid gap-3">
              {w.options.map((option: string, i: number) => {
                const selected = answer === i;
                const correct = i === w.answer;

                return (
                  <button
                    key={option}
                    onClick={() => setAnswer(i)}
                    className="rounded-2xl border p-4 text-left text-sm font-bold transition hover:-translate-y-0.5"
                    style={{
                      background:
                        selected && correct
                          ? "var(--voc-t)"
                          : selected
                          ? "var(--pra-t)"
                          : "var(--surf2)",
                      borderColor:
                        selected && correct
                          ? "var(--voc)"
                          : selected
                          ? "var(--pra)"
                          : "var(--line)",
                    }}
                  >
                    <span
                      className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs"
                      style={{
                        background: "var(--surf)",
                        color: "var(--ink3)",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>

                    {option}
                  </button>
                );
              })}
            </div>

            {answer !== null && (
              <p
                className="mt-5 text-sm font-extrabold"
                style={{
                  color: answer === w.answer ? "var(--voc)" : "var(--pra)",
                }}
              >
                {answer === w.answer
                  ? "✓ Correct! Great use of the word."
                  : "Not quite. Try another answer."}
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}