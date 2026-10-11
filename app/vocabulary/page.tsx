"use client";

import { useEffect, useMemo, useState } from "react";
import { words } from "./data";
import VocabularyHero from "./components/VocabularyHero";
import VocabularyFilters from "./components/VocabularyFilters";
import VocabularyWordGrid from "./components/VocabularyWordGrid";
import VocabularyProgress from "./components/VocabularyProgress";
import VocabularyWeeklyActivity from "./components/VocabularyWeeklyActivity";
import type { WeekDay } from "./components/types";

function readArray(key: string): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function readActivity(): Record<string, number> {
  try {
    const value: unknown = JSON.parse(localStorage.getItem("lingoai-activity") || "{}");
    if (Array.isArray(value)) {
      return Object.fromEntries(value.filter((d): d is string => typeof d === "string").map((d) => [d, 1]));
    }
    return value && typeof value === "object" ? value as Record<string, number> : {};
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
      setLearned(readArray("lingoai-learned-words"));
      setActivity(readActivity());
    };

    load();
    window.addEventListener("storage", load);
    window.addEventListener("vocabulary-updated", load);
    return () => {
      window.removeEventListener("storage", load);
      window.removeEventListener("vocabulary-updated", load);
    };
  }, []);

  const stats = useMemo(() => {
    const mastered = words.filter((word) => learned.includes(word.word)).length;
    const week: WeekDay[] = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - 6 + i);
      return {
        label: date.toLocaleDateString("en-US", { weekday: "narrow" }),
        on: Boolean(activity[date.toISOString().slice(0, 10)]),
      };
    });

    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      if (activity[date.toISOString().slice(0, 10)]) streak++;
      else break;
    }

    return {
      mastered,
      week,
      streak,
      next: [1, 3, 7, 14, 30].find((milestone) => milestone > streak) || 30,
      active: week.filter((day) => day.on).length,
    };
  }, [learned, activity]);

  const filteredWords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return words.filter((word) => {
      const searchable = `${word.word} ${word.meaning} ${word.arabic}`.toLowerCase();
      return searchable.includes(normalizedQuery) && (level === "All" || word.level === level);
    });
  }, [query, level]);

  const totalPages = Math.ceil(filteredWords.length / perPage);
  const visibleWords = filteredWords.slice((page - 1) * perPage, page * perPage);
  const masteryPercent = Math.round((stats.mastered / Math.max(words.length, 1)) * 100);

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg)] p-5 text-[var(--ink)] md:p-10">
      <div className="mx-auto max-w-[1400px] space-y-7">
        <VocabularyHero
          totalWords={words.length}
          mastered={stats.mastered}
          activeDays={stats.active}
          percent={masteryPercent}
        />

        <VocabularyFilters
          query={query}
          level={level}
          onQueryChange={(value) => {
            setQuery(value);
            setPage(1);
          }}
          onLevelChange={(value) => {
            setLevel(value);
            setPage(1);
          }}
        />

        <VocabularyWordGrid
          words={visibleWords}
          learned={learned}
          level={level}
          resultCount={filteredWords.length}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

        <VocabularyProgress streak={stats.streak} next={stats.next} active={stats.active} />
        <VocabularyWeeklyActivity week={stats.week} active={stats.active} />
      </div>
    </main>
  );
}
