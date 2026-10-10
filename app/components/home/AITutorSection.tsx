
"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { useEffect, useState } from "react";

type Language = "ar" | "en";

const features = [
  { icon: "Aa", label: { en: "Grammar", ar: "القواعد" }, color: "#A99AFF" },
  { icon: "✳", label: { en: "Vocabulary", ar: "المفردات" }, color: "#67DCC1" },
  { icon: "♫", label: { en: "Speaking", ar: "التحدث" }, color: "#64C9FF" },
  { icon: "↗", label: { en: "Conversation", ar: "المحادثة" }, color: "#FFB58E" },
];

const translations = {
  en: {
    badge: "Your personal AI tutor",
    title1: "Meet your",
    title2: "English sidekick.",
    description:
      "Stuck on a sentence? Curious about a word? Get explanations, practice conversations, and improve your English at your own pace.",
    start: "Start a conversation",
    pressure: "Learn without the pressure.",
    companion: "Your learning companion",
    you: "YOU",
    question: "What's the difference between",
    and: "and",
    explanation: "AI EXPLANATION",
    great: "Great question!",
    sayDescription: "focuses on the words, while",
    tellDescription: "usually needs a person.",
    sayExample: "She said hello.",
    tellExample: "She told me a story.",
    placeholder: "Ask anything about English...",
    workflow: "ASK · UNDERSTAND · PRACTICE · GROW",
    smart: "✦ Smart learning",
    improve: "✓ Keep improving",
    benefits: [
      "Understand grammar",
      "Learn useful words",
      "Practice speaking",
      "Build confidence",
    ],
  },
  ar: {
    badge: "معلمك الشخصي بالذكاء الاصطناعي",
    title1: "تعرّف على",
    title2: "رفيقك في الإنجليزية.",
    description:
      "هل تواجه صعوبة في فهم جملة؟ هل تريد معرفة معنى كلمة؟ احصل على الشروحات، وتدرّب على المحادثات، وطوّر لغتك الإنجليزية بالسرعة التي تناسبك.",
    start: "ابدأ محادثة",
    pressure: "تعلّم براحتك ومن دون ضغط.",
    companion: "رفيقك في رحلة التعلّم",
    you: "أنت",
    question: "ما الفرق بين",
    and: "و",
    explanation: "شرح الذكاء الاصطناعي",
    great: "سؤال رائع!",
    sayDescription: "تركّز على الكلمات التي تقولها، بينما",
    tellDescription: "تُستخدم عادةً عندما تخبر شخصًا بشيء.",
    sayExample: "She said hello. — قالت مرحبًا.",
    tellExample: "She told me a story. — حكت لي قصة.",
    placeholder: "اسأل عن أي شيء في الإنجليزية...",
    workflow: "اسأل · افهم · تدرّب · تطوّر",
    smart: "✦ تعلّم ذكي",
    improve: "✓ واصل التقدّم",
    benefits: [
      "افهم القواعد",
      "تعلّم كلمات مفيدة",
      "تدرّب على التحدث",
      "عزّز ثقتك بنفسك",
    ],
  },
};

export default function AITutorSection() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const syncLanguage = () => {
      const saved = localStorage.getItem("lingoai-language");
      if (saved === "ar" || saved === "en") setLang(saved);
    };

    syncLanguage();
    window.addEventListener("languageChange", syncLanguage);
    window.addEventListener("storage", syncLanguage);

    return () => {
      window.removeEventListener("languageChange", syncLanguage);
      window.removeEventListener("storage", syncLanguage);
    };
  }, []);

  const t = translations[lang];
  const ar = lang === "ar";

  return (
    <section
      dir={ar ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.09] blur-[100px]" />

      <div className="page-container relative py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
          <div className="group relative overflow-hidden rounded-[30px] border border-[#7387FF]/20 bg-[#080E20] shadow-[0_25px_80px_rgba(30,50,100,0.12)] transition duration-500 hover:border-[#7387FF]/40 sm:rounded-[36px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(71,119,255,0.20),transparent_42%),radial-gradient(ellipse_at_90%_85%,rgba(139,92,246,0.19),transparent_40%)]" />

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(150,170,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(150,170,255,.2) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
                maskImage:
                  "linear-gradient(to right, transparent, black, transparent)",
              }}
            />

            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-blue-300/10 transition-transform duration-700 group-hover:scale-110 sm:h-96 sm:w-96" />
            <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-violet-300/10 sm:h-72 sm:w-72" />

            <div className="relative grid gap-10 px-6 py-8 sm:px-9 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-12 lg:py-12">
              {/* Text content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/[0.08] px-3 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  </span>
                  <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-blue-200">
                    {t.badge}
                  </span>
                </div>

                <h2 className="mt-6 max-w-[600px] font-display text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.6rem]">
                  {t.title1}
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {t.title2}
                  </span>
                </h2>

                <p className="mt-5 max-w-[460px] text-sm leading-8 text-slate-300/75 sm:text-base">
                  {t.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <div
                      key={feature.label.en}
                      className="flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.045] px-3 py-2 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: feature.color }}
                      >
                        {feature.icon}
                      </span>
                      <span className="text-xs font-medium text-slate-200">
                        {feature.label[lang]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/ai-tutor"
                    aria-label={t.start}
                    className="group/button inline-flex h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 text-sm font-bold text-white shadow-[0_8px_30px_rgba(79,110,255,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(79,110,255,0.42)] sm:h-[52px] sm:px-7"
                  >
                    {t.start}
                    <span className="transition-transform duration-300 group-hover/button:-translate-x-1">
                      {ar ? "←" : "→"}
                    </span>
                  </Link>

                  <span className="text-xs text-slate-400">
                    {t.pressure}
                  </span>
                </div>
              </div>

              {/* AI conversation illustration */}
              <div className="relative mx-auto w-full max-w-[430px] lg:ml-auto">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[70px]" />

                <div className="relative rounded-[26px] border border-white/10 bg-[#0C1429]/90 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-300/25 bg-gradient-to-br from-indigo-400/25 to-blue-400/10 text-lg text-indigo-200">
                        ✦
                        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#0C1429] bg-emerald-400" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Sada AI
                        </p>
                        <p className="mt-0.5 text-[10px] text-emerald-300">
                          {t.companion}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-300/50" />
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-300/50" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/50" />
                    </div>
                  </div>

                  <div className="space-y-4 py-5">
                    <div className="flex justify-start">
                      <div className="max-w-[90%] rounded-2xl rounded-br-md border border-blue-300/15 bg-blue-500/15 px-4 py-3">
                        <p className="text-[10px] font-medium text-blue-200">
                          {t.you}
                        </p>
                        <p className="mt-1.5 text-sm leading-7 text-white">
                          {ar ? (
                            <>
                              ما الفرق بين{" "}
                              <span className="font-semibold text-blue-200" dir="ltr">
                                say
                              </span>{" "}
                              و
                              <span className="font-semibold text-blue-200" dir="ltr">
                                tell
                              </span>
                              ؟
                            </>
                          ) : (
                            <>
                              {t.question}{" "}
                              <span className="font-semibold text-blue-200">say</span>{" "}
                              {t.and}{" "}
                              <span className="font-semibold text-blue-200">tell</span>?
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-400/15 text-sm text-violet-200">
                        ✦
                      </div>

                      <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md border border-white/[0.08] bg-white/[0.045] p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                          {t.explanation}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-200">
                          {t.great}{" "}
                          <span className="font-semibold text-emerald-300" dir="ltr">
                            Say
                          </span>{" "}
                          {t.sayDescription}{" "}
                          <span className="font-semibold text-blue-300" dir="ltr">
                            tell
                          </span>{" "}
                          {t.tellDescription}
                        </p>

                        <div className="mt-3 space-y-2">
                          <div className="rounded-xl border border-emerald-300/10 bg-emerald-300/[0.06] px-3 py-2.5">
                            <p className="text-xs leading-6 text-slate-300">
                              <span className="font-semibold text-emerald-300" dir="ltr">
                                Say:
                              </span>{" "}
                              {ar ? "She said hello. — قالت مرحبًا." : "She said hello."}
                            </p>
                          </div>

                          <div className="rounded-xl border border-blue-300/10 bg-blue-300/[0.06] px-3 py-2.5">
                            <p className="text-xs leading-6 text-slate-300">
                              <span className="font-semibold text-blue-300" dir="ltr">
                                Tell:
                              </span>{" "}
                              {ar ? "She told me a story. — حكت لي قصة." : "She told me a story."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#080E20] px-4 py-3">
                    <span className="flex-1 text-xs text-slate-500">
                      {t.placeholder}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-sm text-white">
                      ↑
                    </span>
                  </div>

                  <p className="mt-3 text-center font-mono text-[9px] tracking-[0.1em] text-slate-500">
                    {t.workflow}
                  </p>
                </div>

                <div className="absolute -left-3 top-12 hidden animate-[bounce_4s_ease-in-out_infinite] rounded-xl border border-violet-300/20 bg-[#151B35] px-3 py-2 shadow-xl sm:block lg:-left-8">
                  <span className="text-xs text-violet-200">{t.smart}</span>
                </div>

                <div className="absolute -right-2 bottom-16 hidden animate-[bounce_5s_ease-in-out_infinite] rounded-xl border border-emerald-300/20 bg-[#10251F] px-3 py-2 shadow-xl sm:block lg:-right-7">
                  <span className="text-xs text-emerald-200">{t.improve}</span>
                </div>
              </div>
            </div>

            {/* Bottom feature strip */}
            <div className="relative mx-5 border-t border-white/[0.09] sm:mx-9 lg:mx-12">
              <div className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 sm:gap-3">
                {t.benefits.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
                      style={{
                        color: features[index].color,
                        backgroundColor: `${features[index].color}18`,
                      }}
                    >
                      ✓
                    </span>
                    <span className="text-[11px] leading-5 text-slate-300/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
