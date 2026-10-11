import Link from "next/link";
import type { VocabularyWord } from "./types";

type Props = {
  words: VocabularyWord[];
  learned: string[];
  level: string;
  resultCount: number;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const levelStyle: Record<string, [string, string]> = {
  A1: ["var(--brand-soft)", "var(--brand-ink)"],
  A2: ["var(--voc-t)", "var(--voc)"],
  B1: ["var(--cou-t)", "var(--cou)"],
  B2: ["var(--pra-t)", "var(--pra)"],
  C1: ["var(--brand-soft)", "var(--brand-ink)"],
};

const accents = ["#3D9BFF", "#8B5CF6", "#10B981", "#F59E0B", "#F472B6", "#06B6D4"];

export default function VocabularyWordGrid({
  words, learned, level, resultCount, page, totalPages, onPageChange,
}: Props) {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em]" style={{ color: "var(--ink3)" }}>
            Your collection
          </p>
          <h2 className="mt-2 text-3xl font-black">
            {level === "All" ? "All words." : `${level} words.`}
          </h2>
        </div>
        <span className="text-sm font-bold" style={{ color: "var(--ink2)" }}>{resultCount} found</span>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {words.map((word, index) => {
          const style = levelStyle[word.level] || levelStyle.A1;
          const done = learned.includes(word.word);
          const accent = accents[(index + (page - 1) * 12) % accents.length];

          return (
            <article
              key={word.id}
              className="group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: `linear-gradient(145deg, ${accent}12, var(--surf) 58%, ${style[0]})`,
                borderColor: `${accent}45`,
                boxShadow: `0 8px 28px ${accent}0D`,
              }}
            >
              <div className="pointer-events-none absolute -right-9 -top-10 h-32 w-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150" style={{ background: `${accent}22` }} />
              <div className="absolute left-0 top-0 h-full w-1" style={{ background: accent }} />

              <div className="relative flex justify-between gap-3">
                <span className="rounded-lg px-3 py-1 text-xs font-bold" style={{ background: style[0], color: style[1] }}>
                  {word.level}
                </span>
                <span className="text-xs font-bold" style={{ color: done ? "var(--voc)" : "var(--ink3)" }}>
                  {done ? "✓ Mastered" : "Learning"}
                </span>
              </div>

              <Link href={`/vocabulary/${word.word}`} className="relative block">
                <div className="absolute right-0 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border text-xl font-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" style={{ borderColor: `${accent}35`, background: `${accent}12`, color: accent }}>
                  {word.word.charAt(0).toUpperCase()}
                </div>

                <h3 className="mt-7 pr-14 text-4xl font-black tracking-tight transition-colors group-hover:text-[var(--brand)]">
                  {word.word}
                </h3>
                <p className="mt-1 text-xl font-bold" style={{ color: accent }}>{word.arabic}</p>
                <p className="mt-2 text-sm" style={{ color: "var(--ink3)" }}>
                  {word.pronunciation} · {word.type}
                </p>
                <p className="mt-5 text-sm leading-7" style={{ color: "var(--ink2)" }}>
                  “{word.example}”
                </p>
                <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: `${accent}30` }}>
                  <span className="text-xs font-medium" style={{ color: "var(--ink2)" }}>Real-life English</span>
                  <span className="font-bold transition-transform group-hover:translate-x-1" style={{ color: accent }}>Open word →</span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {resultCount === 0 && (
        <div className="mt-5 rounded-3xl border p-12 text-center" style={{ background: "var(--surf)", borderColor: "var(--line)" }}>
          <div className="text-4xl">⌕</div>
          <h3 className="mt-3 text-2xl font-black">No words found</h3>
          <p className="mt-2 text-sm" style={{ color: "var(--ink2)" }}>Try another word or choose a different level.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="rounded-xl border px-4 py-2 text-sm font-bold transition hover:border-[var(--brand)] disabled:opacity-40"
            style={{ background: "var(--surf)", borderColor: "var(--line)" }}
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <button
              type="button"
              key={number}
              onClick={() => onPageChange(number)}
              className="h-10 min-w-10 rounded-xl border px-3 text-sm font-bold transition hover:-translate-y-0.5"
              style={{
                background: page === number ? "var(--brand)" : "var(--surf)",
                color: page === number ? "white" : "var(--ink2)",
                borderColor: page === number ? "var(--brand)" : "var(--line)",
              }}
            >
              {number}
            </button>
          ))}

          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="rounded-xl border px-4 py-2 text-sm font-bold transition hover:border-[var(--brand)] disabled:opacity-40"
            style={{ background: "var(--surf)", borderColor: "var(--line)" }}
          >
            →
          </button>
        </div>
      )}

      <p className="mt-3 text-center text-xs" style={{ color: "var(--ink3)" }}>
        Page {page} of {Math.max(totalPages, 1)} · {words.length} words shown
      </p>
    </section>
  );
}
