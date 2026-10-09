"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { words } from "./data";

const levelStyle: Record<string, [string, string]> = {
  A1: ["var(--brand-soft)", "var(--brand-ink)"],
  A2: ["var(--voc-t)", "var(--voc)"],
  B1: ["var(--cou-t)", "var(--cou)"],
  B2: ["var(--pra-t)", "var(--pra)"],
  C1: ["var(--brand-soft)", "var(--brand-ink)"],
};

const card =
  "group relative overflow-hidden rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1";

function read(key: string) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function readActivity() {
  try {
    const value = JSON.parse(
      localStorage.getItem("lingoai-activity") || "{}"
    );

    return Array.isArray(value)
      ? Object.fromEntries(value.map((d: string) => [d, 1]))
      : value || {};
  } catch {
    return {};
  }
}

export default function VocabularyPage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [page, setPage] = useState(1);
  const [learned, setLearned] = useState<string[]>([]);
  const [activity, setActivity] = useState<Record<string, number>>({});

  const perPage = 12;

  useEffect(() => {
    const load = () => {
      setLearned(read("lingoai-learned-words"));
      setActivity(readActivity());
    };

    load();

    addEventListener("storage", load);
    addEventListener("vocabulary-updated", load);

    return () => {
      removeEventListener("storage", load);
      removeEventListener("vocabulary-updated", load);
    };
  }, []);

  const data = useMemo(() => {
    const filtered = words.filter((w) => {
      const text =
        `${w.word} ${w.meaning} ${w.arabic}`.toLowerCase();

      return (
        text.includes(query.toLowerCase()) &&
        (level === "All" || w.level === level)
      );
    });

    const mastered = words.filter((w) =>
      learned.includes(w.word)
    ).length;

    const week = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - 6 + i);

      return {
        label: d.toLocaleDateString("en-US", {
          weekday: "narrow",
        }),
        on: Boolean(
          activity[d.toISOString().slice(0, 10)]
        ),
      };
    });

    let streak = 0;

    for (let i = 0; i < 365; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);

      if (activity[d.toISOString().slice(0, 10)]) {
        streak++;
      } else {
        break;
      }
    }

    const next =
      [1, 3, 7, 14, 30].find((x) => x > streak) || 30;

    return {
      filtered,
      mastered,
      week,
      streak,
      next,
      active: week.filter((x) => x.on).length,
    };
  }, [query, level, learned, activity]);

  const totalPages = Math.ceil(
    data.filtered.length / perPage
  );

  const visibleWords = data.filtered.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const pct = Math.round(
    (data.mastered / Math.max(words.length, 1)) * 100
  );

  return (
    <main className="min-h-screen bg-[var(--bg)] p-5 text-[var(--ink)] md:p-10">
      <div className="mx-auto max-w-[1400px] space-y-7">

        {/* HERO */}
        <section
          className="rounded-[36px] border p-7 md:p-10"
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
            boxShadow: "var(--sh2)",
          }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              <span
                className="rounded-full px-4 py-2 text-sm font-bold"
                style={{
                  background: "var(--brand-soft)",
                  color: "var(--brand-ink)",
                }}
              >
                Your personal vocabulary
              </span>

              <h1 className="mt-5 text-4xl font-black md:text-6xl">
                Build an English
                <br />
                <span style={{ color: "var(--brand)" }}>
                  you actually use.
                </span>
              </h1>

              <p
                className="mt-4 text-lg"
                style={{ color: "var(--ink2)" }}
              >
                100 words. Real meaning. Real context.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  [words.length, "Words"],
                  [data.mastered, "Mastered"],
                  [data.active, "Active days"],
                ].map(([number, label]) => (
                  <div
                    key={String(label)}
                    className="rounded-2xl border px-4 py-3"
                    style={{
                      background: "var(--surf2)",
                      borderColor: "var(--line)",
                    }}
                  >
                    <b className="text-xl">{number}</b>
                    <p
                      className="text-xs"
                      style={{ color: "var(--ink2)" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mx-auto h-56 w-56 rounded-full p-4"
              style={{
                background: `conic-gradient(var(--brand) ${pct}%,var(--line) ${pct}% 100%)`,
              }}
            >
              <div
                className="flex h-full w-full flex-col items-center justify-center rounded-full"
                style={{ background: "var(--surf)" }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--ink2)" }}
                >
                  Mastery
                </span>

                <b className="text-5xl">{pct}%</b>

                <span
                  className="text-xs"
                  style={{ color: "var(--ink2)" }}
                >
                  {data.mastered}/{words.length} mastered
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH + FILTER */}
        <section
          className="rounded-[28px] border p-4"
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
          }}
        >
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search English or Arabic..."
            className="w-full rounded-2xl px-5 py-4 outline-none"
            style={{
              background: "var(--surf2)",
              color: "var(--ink)",
            }}
          />

          <div className="mt-3 flex gap-2 overflow-x-auto">
            {["All", "A1", "A2", "B1", "B2", "C1"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    setLevel(item);
                    setPage(1);
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-bold"
                  style={{
                    background:
                      level === item
                        ? "var(--ink)"
                        : "var(--surf2)",
                    color:
                      level === item
                        ? "var(--bg)"
                        : "var(--ink2)",
                  }}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </section>

        {/* WORDS */}
        <section>
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[.18em]"
                style={{ color: "var(--ink3)" }}
              >
                Your collection
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {level === "All"
                  ? "All words."
                  : `${level} words.`}
              </h2>
            </div>

            <span
              className="text-sm font-bold"
              style={{ color: "var(--ink2)" }}
            >
              {data.filtered.length} found
            </span>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleWords.map((w) => {
              const c =
                levelStyle[w.level] || levelStyle.A1;

              const done = learned.includes(w.word);

              return (
                <article
                  key={w.id}
                  className={card}
                  style={{
                    background: "var(--surf)",
                    borderColor: "var(--line)",
                    boxShadow: "var(--sh)",
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ background: c[1] }}
                  />

                  <div className="flex justify-between">
                    <span
                      className="rounded-lg px-3 py-1 text-xs font-bold"
                      style={{
                        background: c[0],
                        color: c[1],
                      }}
                    >
                      {w.level}
                    </span>

                    <span
                      className="text-xs font-bold"
                      style={{
                        color: done
                          ? "var(--voc)"
                          : "var(--ink3)",
                      }}
                    >
                      {done ? "Mastered" : "Learning"}
                    </span>
                  </div>

                  <Link href={`/vocabulary/${w.word}`}>
                    <h3 className="mt-7 text-4xl font-black">
                      {w.word}
                    </h3>

                    <p
                      className="mt-1 text-xl font-bold"
                      style={{ color: c[1] }}
                    >
                      {w.arabic}
                    </p>

                    <p
                      className="mt-2 text-sm"
                      style={{ color: "var(--ink3)" }}
                    >
                      {w.pronunciation} · {w.type}
                    </p>

                    <p
                      className="mt-5 text-sm leading-7"
                      style={{ color: "var(--ink2)" }}
                    >
                      “{w.example}”
                    </p>

                    <p
                      className="mt-5 border-t pt-4 text-sm font-bold"
                      style={{
                        borderColor: "var(--line)",
                        color: c[1],
                      }}
                    >
                      Open word →
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
                disabled={page === 1}
                className="rounded-xl border px-4 py-2 text-sm font-bold disabled:opacity-40"
                style={{
                  background: "var(--surf)",
                  borderColor: "var(--line)",
                }}
              >
                ←
              </button>

              {Array.from(
                { length: totalPages },
                (_, i) => i + 1
              ).map((number) => (
                <button
                  key={number}
                  onClick={() => setPage(number)}
                  className="h-10 min-w-10 rounded-xl text-sm font-bold"
                  style={{
                    background:
                      page === number
                        ? "var(--brand)"
                        : "var(--surf)",
                    color:
                      page === number
                        ? "white"
                        : "var(--ink2)",
                    border:
                      page === number
                        ? "1px solid transparent"
                        : "1px solid var(--line)",
                  }}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((p) =>
                    Math.min(totalPages, p + 1)
                  )
                }
                disabled={page === totalPages}
                className="rounded-xl border px-4 py-2 text-sm font-bold disabled:opacity-40"
                style={{
                  background: "var(--surf)",
                  borderColor: "var(--line)",
                }}
              >
                →
              </button>
            </div>
          )}

          <p
            className="mt-3 text-center text-xs"
            style={{ color: "var(--ink3)" }}
          >
            Page {page} of {Math.max(totalPages, 1)} ·{" "}
            {visibleWords.length} words shown
          </p>
        </section>

        {/* STREAK + MILESTONE */}
        <section className="grid gap-5 md:grid-cols-2">
          <article
            className={card}
            style={{
              background: "var(--surf)",
              borderColor: "var(--line)",
              boxShadow: "var(--sh)",
            }}
          >
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{ background: "var(--brand)" }}
            />

            <span
              className="rounded-lg px-3 py-1 text-xs font-bold"
              style={{
                background: "var(--brand-soft)",
                color: "var(--brand-ink)",
              }}
            >
              STREAK
            </span>

            <div className="mt-7 text-5xl font-black">
              {data.streak}
            </div>

            <p style={{ color: "var(--ink2)" }}>
              day streak 🔥
            </p>

            <div
              className="mt-6 h-2 rounded-full"
              style={{ background: "var(--surf2)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(data.active / 7) * 100}%`,
                  background: "var(--brand)",
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-sm font-bold">
              <span style={{ color: "var(--ink2)" }}>
                This week
              </span>

              <span style={{ color: "var(--brand)" }}>
                {data.active}/7
              </span>
            </div>
          </article>

          <article
            className={card}
            style={{
              background: "var(--surf)",
              borderColor: "var(--line)",
              boxShadow: "var(--sh)",
            }}
          >
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{ background: "var(--voc)" }}
            />

            <span
              className="rounded-lg px-3 py-1 text-xs font-bold"
              style={{
                background: "var(--voc-t)",
                color: "var(--voc)",
              }}
            >
              MILESTONE
            </span>

            <div className="mt-7 text-4xl font-black">
              {data.streak} / {data.next}
            </div>

            <p style={{ color: "var(--ink2)" }}>
              days to next milestone
            </p>

            <div
              className="mt-6 h-2 rounded-full"
              style={{ background: "var(--surf2)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(
                    100,
                    (data.streak / data.next) * 100
                  )}%`,
                  background: "var(--voc)",
                }}
              />
            </div>
          </article>
        </section>

        {/* THIS WEEK */}
        <section
          className={card}
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
            boxShadow: "var(--sh)",
          }}
        >
          <div
            className="absolute left-0 top-0 h-full w-1"
            style={{ background: "var(--cou)" }}
          />

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="rounded-lg px-3 py-1.5 text-[11px] font-extrabold"
                  style={{
                    background: "var(--cou-t)",
                    color: "var(--cou)",
                  }}
                >
                  THIS WEEK
                </span>

                <span
                  className="rounded-lg px-3 py-1.5 text-[11px] font-bold"
                  style={{
                    background: "var(--surf2)",
                    color: "var(--ink2)",
                  }}
                >
                  {data.active} / 7 active
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-black">
                Your learning rhythm.
              </h2>
            </div>

            <div>
              <p
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "var(--ink3)" }}
              >
                Consistency
              </p>

              <p
                className="mt-1 text-3xl font-black"
                style={{ color: "var(--cou)" }}
              >
                {Math.round((data.active / 7) * 100)}%
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-7 gap-2 sm:gap-3">
            {data.week.map((day, i) => {
              const today = i === 6;

              return (
                <div key={i} className="text-center">
                  <span
                    className="text-xs font-extrabold"
                    style={{
                      color: day.on
                        ? "var(--cou)"
                        : today
                        ? "var(--brand)"
                        : "var(--ink3)",
                    }}
                  >
                    {day.label}
                  </span>

                  <div
                    className="mt-3 flex aspect-square items-center justify-center rounded-[20px] border"
                    style={{
                      background: day.on
                        ? "linear-gradient(145deg,var(--cou),var(--brand))"
                        : today
                        ? "var(--brand-soft)"
                        : "var(--surf2)",
                      borderColor: day.on
                        ? "transparent"
                        : today
                        ? "var(--brand)"
                        : "var(--line)",
                    }}
                  >
                    <span
                      className={day.on ? "text-xl font-black" : ""}
                      style={{
                        color: day.on
                          ? "white"
                          : "var(--ink3)",
                      }}
                    >
                      {day.on ? "✓" : "·"}
                    </span>
                  </div>

                  <p
                    className="mt-2 text-[9px] font-bold"
                    style={{
                      color: today
                        ? "var(--brand)"
                        : "var(--ink3)",
                    }}
                  >
                    {today
                      ? "TODAY"
                      : day.on
                      ? "ACTIVE"
                      : "REST"}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}