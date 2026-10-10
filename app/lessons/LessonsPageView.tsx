
"use client";

import {
  DM_Serif_Display,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import { levelInfo, lessons, levels, type Lesson, type Level } from "./data";
import { LessonHeader } from "./components/LessonHeader";
import { LevelButton } from "./components/LessonButtons";
import { LessonWorld } from "./components/LessonWorld";
import {
  BottomCta,
  Footer,
  LessonLibrary,
  TopicFilterBar,
} from "./components/LessonSections";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export default function LessonsPageView() {
  const [selectedLevel, setSelectedLevel] = useState<Level>("A1");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [worldVisible, setWorldVisible] = useState(false);

  const worldRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLElement | null>(null);

  const reveal = useCallback((root: HTMLElement | null) => {
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.dataset.revealed = "true";
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return reveal(pageRef.current);
  }, [reveal, selectedTopic, showAll]);

  useEffect(() => {
    const element = worldRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWorldVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [selectedLevel]);

  const levelLessons = useMemo(
    () => lessons.filter((lesson) => lesson.level === selectedLevel),
    [selectedLevel],
  );

  const filteredLessons = useMemo(
    () =>
      selectedTopic
        ? lessons.filter((lesson) => lesson.topic === selectedTopic)
        : lessons,
    [selectedTopic],
  );

  const selectedLevelInfo = levelInfo[selectedLevel];

  const changeLevel = (level: Level) => {
    if (level === selectedLevel) return;

    setWorldVisible(false);
    setSelectedLevel(level);
    setSelectedLesson(null);

    requestAnimationFrame(() => {
      if (worldRef.current) {
        worldRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };

  const resetFilters = () => {
    setSelectedTopic(null);
    setShowAll(false);
  };

  return (
    <main
      ref={pageRef}
      className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--ink)] transition-colors duration-500`}
      style={
        {
          "--font-display": display.style.fontFamily,
          "--font-sans": sans.style.fontFamily,
          "--font-mono": mono.style.fontFamily,
        } as CSSProperties
      }
    >
      <style jsx global>{`
        [data-reveal] {
          opacity: 0;
          transform: translateX(42px);
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
          will-change: opacity, transform;
        }

        [data-reveal][data-revealed="true"] {
          opacity: 1;
          transform: translateX(0);
        }

        [data-reveal="left"] {
          transform: translateX(-42px);
        }

        [data-reveal="left"][data-revealed="true"] {
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal],
          [data-reveal][data-revealed="true"] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div data-reveal>
        <LessonHeader />
      </div>

      <div className="mx-auto mt-0 max-w-[1380px] px-5 pb-0 sm:px-8 lg:px-10">
        <div
          data-reveal
          className="mt-12 flex max-w-full gap-2 overflow-x-auto pb-3"
          style={{ "--reveal-delay": "100ms" } as CSSProperties}
        >
          {levels.map((level, index) => (
            <div
              key={level}
              className="shrink-0"
              style={
                {
                  "--reveal-delay": `${index * 70}ms`,
                } as CSSProperties
              }
              data-reveal
            >
              <LevelButton
                level={level}
                active={selectedLevel === level}
                onClick={() => changeLevel(level)}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        data-reveal
        style={{ "--reveal-delay": "120ms" } as CSSProperties}
      >
        <LessonWorld
          selectedLevel={selectedLevel}
          selectedLesson={selectedLesson}
          levelLessons={levelLessons}
          worldVisible={worldVisible}
          onSelectLesson={setSelectedLesson}
          onCloseLesson={() => setSelectedLesson(null)}
          worldRef={worldRef}
        />
      </div>

      <div
        data-reveal="left"
        style={{ "--reveal-delay": "80ms" } as CSSProperties}
      >
        <TopicFilterBar
          selectedTopic={selectedTopic}
          onSelectAll={resetFilters}
          onSelectTopic={(topic) => {
            setSelectedTopic(topic);
            setShowAll(false);
          }}
        />
      </div>

      <div data-reveal>
        <LessonLibrary
          filteredLessons={filteredLessons}
          selectedTopic={selectedTopic}
          showAll={showAll}
          onToggleShowAll={() => setShowAll((value) => !value)}
        />
      </div>

      <div
        data-reveal="left"
        style={{ "--reveal-delay": "100ms" } as CSSProperties}
      >
        <BottomCta
          selectedLevel={selectedLevel}
          selectedLevelInfo={selectedLevelInfo}
          onLevelChange={changeLevel}
        />
      </div>

      <div data-reveal>
        <Footer />
      </div>
    </main>
  );
}
