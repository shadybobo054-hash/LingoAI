"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Word = {
  word: string;
  level: "A2" | "B1" | "B2";
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  translation: string;
};

const categories = ["All words", "Common", "Useful phrases", "Saved", "Recently opened"];
const levels = ["Any level", "A2", "B1", "B2"];

const words: Word[] = [
  {
    word: "curious",
    level: "A2",
    pronunciation: "/ˈkjʊə.ri.əs/",
    partOfSpeech: "adjective",
    definition: "Wanting to know or learn more about something.",
    translation: "فضولي / متشوق للمعرفة",
  },
  {
    word: "reckon",
    level: "B1",
    pronunciation: "/ˈrek.ən/",
    partOfSpeech: "verb",
    definition: "To think or believe something, often in casual speech.",
    translation: "يعتقد / يظن",
  },
  {
    word: "affordable",
    level: "B1",
    pronunciation: "/əˈfɔːr.də.bəl/",
    partOfSpeech: "adjective",
    definition: "Cheap enough that most people can pay for it.",
    translation: "مقبول السعر / في المتناول",
  },
  {
    word: "though",
    level: "A2",
    pronunciation: "/ðəʊ/",
    partOfSpeech: "conjunction / adverb",
    definition: "Used to add a contrasting idea, like “but” at the end of a sentence.",
    translation: "مع ذلك / رغم أن",
  },
  {
    word: "notice",
    level: "A2",
    pronunciation: "/ˈnəʊ.tɪs/",
    partOfSpeech: "verb",
    definition: "To see or become aware of something.",
    translation: "يلاحظ / ينتبه",
  },
  {
    word: "approach",
    level: "B2",
    pronunciation: "/əˈprəʊtʃ/",
    partOfSpeech: "verb / noun",
    definition: "To move nearer or begin to deal with something.",
    translation: "يقترب / أسلوب",
  },
  {
    word: "reliable",
    level: "B1",
    pronunciation: "/rɪˈlaɪ.ə.bəl/",
    partOfSpeech: "adjective",
    definition: "Someone or something that can be trusted to work well.",
    translation: "موثوق به",
  },
  {
    word: "figure out",
    level: "B2",
    pronunciation: "/ˈfɪɡ.ər aʊt/",
    partOfSpeech: "phrasal verb",
    definition: "To understand or solve something after thinking about it.",
    translation: "يفهم / يجد الحل",
  },
  {
    word: "eventually",
    level: "B1",
    pronunciation: "/ɪˈven.tʃu.ə.li/",
    partOfSpeech: "adverb",
    definition: "In the end, after some time.",
    translation: "في النهاية / في نهاية الأمر",
  },
  {
    word: "straightforward",
    level: "B2",
    pronunciation: "/ˌstreɪtˈfɔː.wəd/",
    partOfSpeech: "adjective",
    definition: "Easy to understand or do; not complicated.",
    translation: "واضح / بسيط ومباشر",
  },
  {
    word: "catch up",
    level: "B1",
    pronunciation: "/kætʃ ʌp/",
    partOfSpeech: "phrasal verb",
    definition: "To reach the same level as others, or to talk after time apart.",
    translation: "يلحق بـ / يتبادل الأخبار",
  },
  {
    word: "grateful",
    level: "A2",
    pronunciation: "/ˈɡreɪt.fəl/",
    partOfSpeech: "adjective",
    definition: "Feeling thankful for something someone did.",
    translation: "ممتن / شاكر",
  },
];

export default function VocabularyPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All words");
  const [activeLevel, setActiveLevel] = useState("Any level");
  const [savedWords, setSavedWords] = useState<string[]>([]);

  const filteredWords = useMemo(() => {
    const query = search.trim().toLowerCase();

    return words.filter((word) => {
      const matchesSearch =
        !query ||
        word.word.toLowerCase().includes(query) ||
        word.definition.toLowerCase().includes(query);
      const matchesLevel = activeLevel === "Any level" || word.level === activeLevel;
      const matchesCategory = activeCategory !== "Saved" || savedWords.includes(word.word);

      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [activeCategory, activeLevel, savedWords, search]);

  function toggleSaved(word: string) {
    setSavedWords((current) =>
      current.includes(word)
        ? current.filter((savedWord) => savedWord !== word)
        : [...current, word],
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="page-container pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="max-w-[580px]">
          <h1 className="font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
            Vocabulary
          </h1>
          <p className="mt-3 text-base leading-6 text-[var(--ink2)] sm:text-lg">
            Words you can hear, turn over, and keep. No account needed - saving
            happens on this device.
          </p>
        </div>

        <label className="mt-7 flex h-13 max-w-[520px] items-center gap-3 rounded-full border border-[var(--line2)] bg-[var(--surf)] px-4 shadow-[var(--sh)] focus-within:border-[#0E8F69]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#0E8F69]" />
          <span className="sr-only">Search vocabulary</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search a word or meaning..."
            className="w-full bg-transparent text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink3)]"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeCategory === category ? "border-[#0E8F69] bg-[#0E8F69] text-white" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#0E8F69] hover:text-[#0E8F69]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {levels.map((level) => (
            <button
              key={level}
              type="button"
              aria-pressed={activeLevel === level}
              onClick={() => setActiveLevel(level)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeLevel === level ? "border-[#0E8F69] bg-[#0E8F69] text-white" : "border-[var(--line2)] bg-[var(--surf)] text-[var(--ink2)] hover:border-[#0E8F69] hover:text-[#0E8F69]"}`}
            >
              {level}
            </button>
          ))}
          <span className="ml-1 text-sm text-[var(--ink3)]">
            {filteredWords.length} words
          </span>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredWords.map((word) => {
            const isSaved = savedWords.includes(word.word);

            return (
              <article key={word.word} className="sada-card flex min-h-[220px] flex-col rounded-[20px] p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#E8FAF3] px-2.5 py-1 text-[11px] font-semibold text-[#0E8F69]">
                    {word.level}
                  </span>
                  <button
                    type="button"
                    aria-label={`${isSaved ? "Remove" : "Save"} ${word.word}`}
                    aria-pressed={isSaved}
                    onClick={() => toggleSaved(word.word)}
                    className={`text-lg leading-none transition hover:scale-110 ${isSaved ? "text-[#0E8F69]" : "text-[var(--ink3)]"}`}
                  >
                    {isSaved ? "★" : "☆"}
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <h2 className="font-display text-[1.85rem] font-medium leading-none">
                    {word.word}
                  </h2>
                  <button
                    type="button"
                    aria-label={`Hear ${word.word}`}
                    data-speak={word.word}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8FAF3] text-xs font-semibold text-[#0E8F69] transition hover:scale-105"
                  >
                    ▶
                  </button>
                </div>

                <p className="mt-4 font-mono text-xs text-[#91A7C0]">
                  {word.pronunciation} · {word.partOfSpeech}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--ink2)]">
                  {word.definition}
                </p>

                <p className="mt-auto border-t border-[var(--line)] pt-3 text-right text-sm text-[var(--ink)]" dir="rtl">
                  {word.translation}
                </p>
              </article>
            );
          })}
        </div>

        {filteredWords.length === 0 && (
          <div className="sada-card mt-7 p-8 text-center">
            <h2 className="font-display text-3xl font-medium">No words found</h2>
            <p className="mt-2 text-[var(--ink2)]">
              Try another search, level, or saved-word filter.
            </p>
          </div>
        )}
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--bg2)]">
        <div className="page-container grid gap-8 py-10 sm:grid-cols-[0.9fr_1.6fr] sm:gap-12 sm:py-14">
          <div className="max-w-[270px]">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3D9BFF] text-xs font-semibold text-white">
                ●
              </span>
              <span className="font-display text-lg font-semibold text-[var(--ink)]">
                Sada
              </span>
            </Link>
            <p className="mt-3 text-sm leading-5 text-[var(--ink3)]">
              A calm place to learn languages. Built around listening,
              curiosity and short honest feedback.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink3)]">
              Languages we teach
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { name: "English", status: "live", active: true },
                { name: "Spanish", status: "soon", active: false },
                { name: "French", status: "soon", active: false },
                { name: "Turkish", status: "soon", active: false },
                { name: "Japanese", status: "soon", active: false },
              ].map((language) => (
                <span
                  key={language.name}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium ${language.active ? "border-[#D6E9FA] bg-[#F5FAFF] text-[#2477D1]" : "border-[var(--line)] bg-transparent text-[var(--ink2)]"}`}
                >
                  {language.name}
                  <span className="ml-1.5 text-[var(--ink3)]">{language.status}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
