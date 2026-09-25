"use client";

import {
  DM_Serif_Display,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { levelInfo, lessons, levels, topics, type Lesson, type Level } from "./data";
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
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const levelLessons = useMemo(
    () => lessons.filter((lesson) => lesson.level === selectedLevel),
    [selectedLevel],
  );

  const filteredLessons = useMemo(
    () => (selectedTopic ? lessons.filter((lesson) => lesson.topic === selectedTopic) : lessons),
    [selectedTopic],
  );

  const selectedLevelInfo = levelInfo[selectedLevel];

  const changeLevel = (level: Level) => {
    setSelectedLevel(level);
    setSelectedLesson(null);
    setWorldVisible(false);
    window.setTimeout(() => setWorldVisible(true), 80);
  };

  return (
    <main
      className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--ink)] transition-colors duration-500`}
      style={{
        "--font-display": display.style.fontFamily,
        "--font-sans": sans.style.fontFamily,
        "--font-mono": mono.style.fontFamily,
      } as CSSProperties}
    >
      <LessonHeader />

      <div className="mx-auto mt-0 max-w-[1380px] px-5 pb-0 sm:px-8 lg:px-10">
        <div className="mt-12 flex max-w-full gap-2 overflow-x-auto pb-2">
          {levels.map((level) => (
            <LevelButton
              key={level}
              level={level}
              active={selectedLevel === level}
              onClick={() => changeLevel(level)}
            />
          ))}
        </div>
      </div>

      <LessonWorld
        selectedLevel={selectedLevel}
        selectedLesson={selectedLesson}
        levelLessons={levelLessons}
        worldVisible={worldVisible}
        onSelectLesson={setSelectedLesson}
        onCloseLesson={() => setSelectedLesson(null)}
        worldRef={worldRef}
      />

      <TopicFilterBar
        selectedTopic={selectedTopic}
        onSelectAll={() => {
          setSelectedTopic(null);
          setShowAll(false);
        }}
        onSelectTopic={(topic) => {
          setSelectedTopic(topic);
          setShowAll(false);
        }}
      />

      <LessonLibrary
        filteredLessons={filteredLessons}
        selectedTopic={selectedTopic}
        showAll={showAll}
        onToggleShowAll={() => setShowAll((value) => !value)}
      />

      <BottomCta
        selectedLevel={selectedLevel}
        selectedLevelInfo={selectedLevelInfo}
        onLevelChange={changeLevel}
      />

      <Footer />
    </main>
  );
}
