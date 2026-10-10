"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { useEffect, useState } from "react";

const languages = [
  { name: "English", status: "LIVE", color: "#36CFA5", active: true },
  { name: "Spanish", status: "SOON", color: "#43B9F5", active: false },
  { name: "French", status: "SOON", color: "#A18AFF", active: false },
  { name: "Turkish", status: "SOON", color: "#FFAA78", active: false },
  { name: "Japanese", status: "SOON", color: "#F276AD", active: false },
];

const translations = {
  en: {
    description:
      "A world where English feels natural. Learn through listening, discover useful words, and practice real conversations at your own pace.",
    universe: "Language universe",
    headline: "More languages. More worlds.",
    subtitle:
      "English is ready for you. More learning journeys are coming.",
    live: "LIVE",
    soon: "SOON",
    explore: "Explore LingoAI",
    links: ["Home", "Lessons", "Listening", "Practice", "AI Tutor"],
    continue: "Continue learning",
    slogan: "Learn a little. Listen carefully. Keep going.",
    journey: "YOUR JOURNEY STARTS HERE",
    wave: "LISTEN · LEARN · GROW",
  },
  ar: {
    description:
      "عالم تتعلم فيه الإنجليزية بشكل طبيعي. استمع، واكتشف كلمات مفيدة، وتدرّب على المحادثات الحقيقية بالسرعة التي تناسبك.",
    universe: "عالم اللغات",
    headline: "لغات أكثر، وعوالم جديدة.",
    subtitle: "الإنجليزية جاهزة لك، ورحلات تعليمية جديدة قادمة قريبًا.",
    live: "متاحة",
    soon: "قريبًا",
    explore: "استكشف LingoAI",
    links: ["الرئيسية", "الدروس", "الاستماع", "التدريب", "المعلم الذكي"],
    continue: "واصل التعلّم",
    slogan: "تعلّم قليلًا، واستمع جيدًا، واستمر في التقدم.",
    journey: "رحلتك تبدأ من هنا",
    wave: "استمع · تعلّم · تطوّر",
  },
};

const footerLinks = [
  { href: "/" },
  { href: "/lessons" },
  { href: "/listening" },
  { href: "/practice" },
  { href: "/ai-tutor" },
];

export default function HomeFooter() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lingoai-language");
    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLang(savedLanguage);
    }

    setReady(true);

    const syncLanguage = () => {
      const current = localStorage.getItem("lingoai-language");
      if (current === "ar" || current === "en") setLang(current);
    };

    window.addEventListener("languageChange", syncLanguage);
    window.addEventListener("storage", syncLanguage);

    return () => {
      window.removeEventListener("languageChange", syncLanguage);
      window.removeEventListener("storage", syncLanguage);
    };
  }, []);

  const t = translations[lang];
  const isArabic = lang === "ar";

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="pointer-events-none absolute -left-28 top-0 h-64 w-64 rounded-full bg-blue-500/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px]" />

      <div className="page-container relative py-12 sm:py-16">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091326] p-6 sm:rounded-[32px] sm:p-9 lg:p-11">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(100,150,255,.35) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage:
                  "linear-gradient(to bottom right, black, transparent 85%)",
              }}
            />

            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-blue-300/10" />
            <div className="pointer-events-none absolute -right-4 -top-12 h-44 w-44 rounded-full border border-violet-300/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Brand */}
              <div>
                <Link href="/" className="group inline-flex items-center gap-3">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-gradient-to-br from-blue-400/20 to-violet-500/20 text-lg font-bold text-blue-200 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                    L
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#091326] bg-emerald-400" />
                  </span>

                  <span className="font-display text-2xl font-bold tracking-tight text-white">
                    Lingo<span className="text-blue-300">AI</span>
                  </span>
                </Link>

                <p className="mt-5 max-w-[360px] text-sm leading-7 text-slate-300/70">
                  {t.description}
                </p>

                <div className="mt-6 flex h-8 items-center gap-1.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-1 rounded-full transition-all duration-300 hover:scale-y-150"
                      style={{
                        height: `${8 + Math.abs(Math.sin(i * 0.7)) * 22}px`,
                        backgroundColor:
                          i < 9 ? "#43B9F5" : i < 17 ? "#A18AFF" : "#36CFA5",
                        opacity: 0.45 + Math.abs(Math.sin(i * 0.4)) * 0.5,
                      }}
                    />
                  ))}
                  <span className="mx-2 font-mono text-[9px] tracking-[0.15em] text-slate-500">
                    {t.wave}
                  </span>
                </div>
              </div>

              {/* Languages */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                    {t.universe}
                  </p>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {t.headline}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {t.subtitle}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <span
                      key={language.name}
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: language.active
                          ? `${language.color}65`
                          : "rgba(255,255,255,0.09)",
                        backgroundColor: language.active
                          ? `${language.color}12`
                          : "rgba(255,255,255,0.025)",
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: language.color,
                          boxShadow: language.active
                            ? `0 0 10px ${language.color}`
                            : "none",
                        }}
                      />

                      <span className="text-[11px] font-medium text-slate-200">
                        {language.name}
                      </span>

                      <span
                        className="font-mono text-[8px] font-semibold tracking-wider"
                        style={{
                          color: language.active ? language.color : "#64748B",
                        }}
                      >
                        {language.active ? t.live : t.soon}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="relative mt-9 border-t border-white/10 pt-6">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t.explore}
                  </p>

                  <nav className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                    {footerLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xs text-slate-300/70 transition-colors duration-200 hover:text-blue-300"
                      >
                        {t.links[index]}
                      </Link>
                    ))}
                  </nav>
                </div>

                <Link
                  href="/lessons"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/25"
                >
                  {t.continue}
                  <span className="transition-transform duration-300 hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-center">
            <p className="text-[11px] leading-5 text-[var(--ink3)]">
              {t.slogan}
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-[9px] tracking-[0.14em] text-[var(--ink3)]">
                {t.journey}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
