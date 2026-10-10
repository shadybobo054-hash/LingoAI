"use client";

import HomeHero from "./components/home/HomeHero";
import ContinueLearning from "./components/home/ContinueLearning";
import WordOfTheDay from "./components/home/WordOfTheDay";
import LearningWays from "./components/home/LearningWays";
import AITutorSection from "./components/home/AITutorSection";
import LearningJourney from "./components/home/LearningJourney";
import HomeFooter from "./components/home/HomeFooter";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      <HomeHero />
      <ContinueLearning />
      <WordOfTheDay />
      <LearningWays />
      <AITutorSection />
      <LearningJourney />
      <HomeFooter />
    </main>
  );
}