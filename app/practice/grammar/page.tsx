
"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "She _____ to school every day.",
    options: ["go", "goes", "going", "is go"],
    answer: 1,
    explanation:
      "مع He / She / It نضيف s أو es للفعل في المضارع البسيط. لذلك نقول: She goes.",
  },
  {
    question: "They _____ football on Fridays.",
    options: ["plays", "playing", "play", "does play"],
    answer: 2,
    explanation:
      "مع I / You / We / They نستخدم الفعل في صورته الأساسية: They play.",
  },
  {
    question: "_____ your brother like English?",
    options: ["Do", "Is", "Does", "Has"],
    answer: 2,
    explanation:
      "في السؤال بالمضارع البسيط مع He / She / It نستخدم Does، ويأتي الفعل بعدها في صورته الأساسية: Does ... like?",
  },
  {
    question: "He doesn't _____ coffee.",
    options: ["drinks", "drink", "drinking", "drank"],
    answer: 1,
    explanation:
      "بعد doesn't نستخدم الفعل في المصدر بدون s: He doesn't drink.",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "She study every night.",
      "She studying every night.",
      "She studies every night.",
      "She do studies every night.",
    ],
    answer: 2,
    explanation:
      "الفعل study يتحول إلى studies مع She؛ لأن الفعل ينتهي بحرف ساكن ثم y.",
  },
];

export default function GrammarPage() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[current];
  const selected = answers[current];
  const score = answers.reduce(
    (total, answer, index) =>
      total + (answer === questions[index].answer ? 1 : 0),
    0
  );

  function chooseAnswer(index: number) {
    if (selected !== undefined) return;

    setAnswers((previous) => {
      const next = [...previous];
      next[current] = index;
      return next;
    });
    setShowExplanation(true);
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setShowExplanation(false);
    }
  }

  function restart() {
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
    setShowExplanation(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#060a18] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-6 sm:px-7 sm:py-10">
        <header className="mb-10 flex items-center justify-between gap-4">
          <Link href="/practice" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-xl">
              ✦
            </span>
            <span>
              <span className="block font-black tracking-widest">LINGOAI</span>
              <span className="mt-1 block text-xs text-slate-400">
                Grammar training
              </span>
            </span>
          </Link>

          <Link
            href="/practice"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-violet-400/40 hover:text-white"
          >
            ← Back to Practice
          </Link>
        </header>

        {!started ? (
          <>
            <section className="relative overflow-hidden rounded-[30px] border border-violet-400/20 bg-gradient-to-br from-[#171438] via-[#111832] to-[#092536] p-6 sm:p-10 lg:p-12">
              <div className="absolute -right-10 -top-10 text-[180px] opacity-[0.07]">
                ✍️
              </div>

              <div className="relative">
                <span className="inline-flex rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-2 text-[10px] font-black tracking-[0.18em] text-violet-200">
                  YOUR GRAMMAR WORKSHOP
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
                  Grammar made
                  <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                    simple.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Understand the rule, explore examples, and put your English
                  skills to the test with five interactive questions.
                </p>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                  {[
                    ["📖", "Simple lesson"],
                    ["🎯", "5 questions"],
                    ["🏆", "Instant results"],
                  ].map(([icon, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4"
                    >
                      <span className="text-xl">{icon}</span>
                      <p className="mt-3 text-xs font-bold text-slate-200">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <article className="rounded-[26px] border border-white/10 bg-[#0b1227] p-6 sm:p-8">
                <p className="text-xs font-black tracking-[0.2em] text-cyan-400">
                  LESSON 01
                </p>
                <h2 className="mt-3 text-2xl font-black">
                  Present Simple
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  المضارع البسيط — نستخدمه للتعبير عن العادات والحقائق
                  والأشياء التي تحدث بانتظام.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                    <p className="text-xs font-black text-emerald-300">
                      01 · AFFIRMATIVE
                    </p>
                    <p className="mt-2 text-sm font-bold">
                      I play football.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      He plays football.
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      مع He / She / It نضيف s أو es للفعل غالبًا.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.06] p-4">
                    <p className="text-xs font-black text-sky-300">
                      02 · NEGATIVE
                    </p>
                    <p className="mt-2 text-sm font-bold">
                      I don't play.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      She doesn't play.
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      بعد don't أو doesn't نستخدم الفعل الأساسي بدون s.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] p-4">
                    <p className="text-xs font-black text-violet-300">
                      03 · QUESTIONS
                    </p>
                    <p className="mt-2 text-sm font-bold">
                      Do you play? / Does he play?
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      نستخدم Do مع I / You / We / They، وDoes مع He / She / It.
                    </p>
                  </div>
                </div>
              </article>

              <aside className="flex flex-col rounded-[26px] border border-white/10 bg-[#0b1227] p-6 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 text-2xl">
                  🎯
                </div>

                <h2 className="mt-5 text-2xl font-black">
                  Ready to practice?
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Answer five questions, receive feedback after every answer,
                  and see your final score.
                </p>

                <div className="my-7 space-y-3">
                  {[
                    "5 multiple-choice questions",
                    "Instant answer feedback",
                    "Explanation for every answer",
                    "Final score out of 5",
                  ].map((item) => (
                    <p
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="text-emerald-400">✓</span>
                      {item}
                    </p>
                  ))}
                </div>

                <button
                  onClick={() => setStarted(true)}
                  className="mt-auto rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-violet-900/30 transition hover:-translate-y-1 hover:brightness-110"
                >
                  Start 5-question quiz →
                </button>
              </aside>
            </section>
          </>
        ) : (
          <section className="mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-[0.2em] text-violet-400">
                  GRAMMAR CHALLENGE
                </p>
                <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                  {finished ? "Challenge complete!" : "Present Simple"}
                </h1>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-xs text-slate-400">Your score</p>
                <p className="mt-1 text-xl font-black text-cyan-300">
                  {score} / 5
                </p>
              </div>
            </div>

            <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
                style={{
                  width: `${(finished ? 5 : current + (selected !== undefined ? 1 : 0)) * 20}%`,
                }}
              />
            </div>

            {finished ? (
              <div className="rounded-[30px] border border-white/10 bg-[#0b1227] p-7 text-center sm:p-12">
                <div className="text-6xl">
                  {score === 5 ? "🏆" : score >= 3 ? "🎉" : "💪"}
                </div>
                <h2 className="mt-5 text-3xl font-black">
                  {score === 5
                    ? "Perfect score!"
                    : score >= 3
                      ? "Great work!"
                      : "Keep practicing!"}
                </h2>
                <p className="mt-3 text-slate-400">
                  You answered {score} out of 5 questions correctly.
                  {score < 5
                    ? " Review the explanations and give it another try."
                    : " You've mastered this round."}
                </p>

                <div className="mx-auto mt-7 flex h-32 w-32 items-center justify-center rounded-full border-4 border-violet-400/30 bg-violet-400/10">
                  <span className="text-4xl font-black text-violet-300">
                    {score * 20}%
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={restart}
                    className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-bold text-white transition hover:brightness-110"
                  >
                    ↻ Try again
                  </button>
                  <Link
                    href="/practice"
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-bold text-slate-200 transition hover:bg-white/10"
                  >
                    Back to Practice
                  </Link>
                </div>
              </div>
            ) : (
              <article className="rounded-[28px] border border-white/10 bg-[#0b1227] p-5 sm:p-9">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xs font-bold text-violet-300">
                    QUESTION {current + 1} OF 5
                  </span>
                  <span className="text-xs text-slate-400">
                    {selected !== undefined ? "Answer submitted" : "Choose one answer"}
                  </span>
                </div>

                <h2 className="mt-8 text-2xl font-black leading-relaxed sm:text-3xl">
                  {question.question}
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  اختر الإجابة الصحيحة.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, index) => {
                    const isSelected = selected === index;
                    const isCorrect = question.answer === index;
                    const revealed = selected !== undefined;

                    let style =
                      "border-white/10 bg-white/[0.025] hover:border-violet-400/50 hover:bg-violet-400/[0.06]";

                    if (revealed && isCorrect) {
                      style =
                        "border-emerald-400/50 bg-emerald-400/10 text-emerald-200";
                    } else if (revealed && isSelected && !isCorrect) {
                      style = "border-rose-400/50 bg-rose-400/10 text-rose-200";
                    }

                    return (
                      <button
                        key={option}
                        disabled={revealed}
                        onClick={() => chooseAnswer(index)}
                        className={`flex min-h-[68px] items-center gap-4 rounded-2xl border p-4 text-left transition ${style}`}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-sm font-black">
                          {["A", "B", "C", "D"][index]}
                        </span>
                        <span className="flex-1 font-bold">{option}</span>
                        {revealed && isCorrect && (
                          <span className="text-emerald-300">✓</span>
                        )}
                        {revealed && isSelected && !isCorrect && (
                          <span className="text-rose-300">✕</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <div
                    className={`mt-6 rounded-2xl border p-5 ${
                      selected === question.answer
                        ? "border-emerald-400/20 bg-emerald-400/[0.06]"
                        : "border-amber-400/20 bg-amber-400/[0.06]"
                    }`}
                  >
                    <p
                      className={`font-black ${
                        selected === question.answer
                          ? "text-emerald-300"
                          : "text-amber-300"
                      }`}
                    >
                      {selected === question.answer
                        ? "✓ Correct answer!"
                        : "↻ Not quite — learn from it!"}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {question.explanation}
                    </p>
                  </div>
                )}

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    {answers.filter((answer) => answer !== undefined).length} of 5 answered
                  </span>
                  <button
                    disabled={selected === undefined}
                    onClick={nextQuestion}
                    className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-black text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {current === 4 ? "See my results →" : "Next question →"}
                  </button>
                </div>
              </article>
            )}
          </section>
        )}

        <footer className="mt-12 border-t border-white/[0.08] pt-6 text-center">
          <p className="text-xs text-slate-500">
            LINGOAI ✦ Learn a little. Improve every day.
          </p>
        </footer>
      </div>
    </main>
  );
}
