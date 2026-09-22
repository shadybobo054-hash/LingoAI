
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type Course = {
  title: string;
  description: string;
  level: string;
  lessons: number;
  minutes: number;
  icon: string;
};

const courses: Record<string, Course> = {
  "english-for-travel": {
    title: "English for Travel",
    description:
      "Learn practical English for airports, hotels, restaurants, transportation, and everyday situations while traveling.",
    level: "Beginner",
    lessons: 12,
    minutes: 120,
    icon: "✈️",
  },

  "english-for-work": {
    title: "English for Work",
    description:
      "Build useful English skills for meetings, emails, presentations, teamwork, and everyday communication at work.",
    level: "Intermediate",
    lessons: 15,
    minutes: 150,
    icon: "💼",
  },

  "everyday-conversations": {
    title: "Everyday Conversations",
    description:
      "Practice natural English conversations for everyday situations, from meeting people to talking about your daily life.",
    level: "Beginner",
    lessons: 10,
    minutes: 100,
    icon: "💬",
  },

  "news-in-plain-english": {
    title: "News in Plain English",
    description:
      "Improve your English by reading and understanding real-world news using clear and accessible English.",
    level: "Intermediate",
    lessons: 14,
    minutes: 140,
    icon: "📰",
  },
};

const lessonTitles = [
  "Getting Started",
  "Useful Vocabulary",
  "Common Expressions",
  "Listening Practice",
  "Real Conversations",
  "Final Practice",
];

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;

  const course = courses[slug];

  if (!course) {
    return (
      <main className="min-h-screen bg-[#f7f7f4] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/courses"
            className="inline-flex items-center text-sm font-semibold text-[#18b9cf] transition hover:opacity-70"
          >
            ← Back to Courses
          </Link>

          <section className="mt-10 rounded-4xl bg-white p-8 shadow-sm md:p-12">
            <h1 className="text-4xl font-black text-[#172033]">
              Course not found
            </h1>

            <p className="mt-4 text-gray-600">
              The course you are looking for does not exist.
            </p>

            <Link
              href="/courses"
              className="mt-8 inline-flex rounded-2xl bg-[#18b9cf] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Browse Courses
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f4] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <Link
          href="/courses"
          className="inline-flex items-center text-sm font-semibold text-[#18b9cf] transition hover:opacity-70"
        >
          ← Back to Courses
        </Link>

        {/* Hero */}
        <section className="mt-10 overflow-hidden rounded-4xl bg-white shadow-sm">
          <div className="p-8 md:p-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8f9fc] text-3xl">
                  {course.icon}
                </div>

                <span className="inline-flex rounded-full bg-[#e8f9fc] px-4 py-2 text-sm font-bold text-[#18b9cf]">
                  {course.level}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-[#172033] md:text-6xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                {course.description}
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl bg-[#f7f7f4] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Level
                  </p>

                  <p className="mt-1 font-bold text-[#172033]">
                    {course.level}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f7f4] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Lessons
                  </p>

                  <p className="mt-1 font-bold text-[#172033]">
                    {course.lessons}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f7f4] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Learning Time
                  </p>

                  <p className="mt-1 font-bold text-[#172033]">
                    {course.minutes} min
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/lessons"
                  className="rounded-2xl bg-[#18b9cf] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Start Course
                </Link>

                <Link
                  href="/courses"
                  className="rounded-2xl border border-gray-200 bg-white px-7 py-4 font-bold text-[#172033] transition hover:bg-gray-50"
                >
                  All Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-4xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f9fc] text-xl">
              ✈️
            </div>

            <h2 className="mt-5 text-xl font-black text-[#172033]">
              Practical English
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Learn useful expressions that you can actually use in real-life
              situations.
            </p>
          </div>

          <div className="rounded-4xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4d8] text-xl">
              🎧
            </div>

            <h2 className="mt-5 text-xl font-black text-[#172033]">
              Listening Practice
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Improve your listening skills with short conversations and
              interactive exercises.
            </p>
          </div>

          <div className="rounded-4xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f8ef] text-xl">
              💬
            </div>

            <h2 className="mt-5 text-xl font-black text-[#172033]">
              Real Conversations
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Practice speaking and build confidence through realistic English
              conversations.
            </p>
          </div>
        </section>

        {/* Course Content */}
        <section className="mt-8 rounded-4xl bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-[#18b9cf]">
                COURSE CONTENT
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#172033]">
                What you will learn
              </h2>
            </div>

            <span className="rounded-full bg-[#f7f7f4] px-4 py-2 text-sm font-bold text-gray-600">
              {course.lessons} lessons
            </span>
          </div>

          <div className="mt-8 space-y-3">
            {Array.from({
              length: Math.min(course.lessons, lessonTitles.length),
            }).map((_, index) => (
              <Link
                key={index}
                href="/lessons"
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 transition hover:-translate-y-0.5 hover:bg-[#f9ffff] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f9fc] font-black text-[#18b9cf]">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-[#172033]">
                    {lessonTitles[index]}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Interactive English lesson
                  </p>
                </div>

                <span className="text-xl text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 overflow-hidden rounded-4xl bg-[#172033] p-8 text-white md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-bold text-[#18b9cf]">
                KEEP LEARNING
              </span>

              <h2 className="mt-2 text-2xl font-black md:text-3xl">
                Build your English skills one lesson at a time.
              </h2>

              <p className="mt-3 leading-7 text-gray-300">
                Practice regularly and turn every lesson into real-world
                English you can use.
              </p>
            </div>

            <Link
              href="/lessons"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#18b9cf] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#14a9bd] hover:shadow-lg"
            >
              Explore Lessons →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

