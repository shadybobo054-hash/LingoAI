"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";

type Course = {
  slug: string;
  level: string;
  title: string;
  description: string;
  color: string;
  soft: string;
  lessons: number;
  minutes: number;
  icon: string;
};

const courses: Course[] = [
  {
    slug: "a1",
    level: "A1",
    title: "English Foundations",
    description: "Build strong basics through everyday English.",
    color: "var(--brand)",
    soft: "var(--brand-soft)",
    lessons: 10,
    minutes: 100,
    icon: "🌱",
  },
  {
    slug: "a2",
    level: "A2",
    title: "Everyday English",
    description: "Talk about routines, travel and daily situations.",
    color: "var(--voc)",
    soft: "var(--voc-t)",
    lessons: 10,
    minutes: 100,
    icon: "💬",
  },
  {
    slug: "b1",
    level: "B1",
    title: "Confident English",
    description: "Improve communication and speak more naturally.",
    color: "var(--cou)",
    soft: "var(--cou-t)",
    lessons: 10,
    minutes: 110,
    icon: "🚀",
  },
  {
    slug: "b2",
    level: "B2",
    title: "Advanced Communication",
    description: "Express your ideas clearly in deeper conversations.",
    color: "var(--pra)",
    soft: "var(--pra-t)",
    lessons: 10,
    minutes: 120,
    icon: "🧠",
  },
  {
    slug: "c1",
    level: "C1",
    title: "English Mastery",
    description: "Refine advanced English and communicate naturally.",
    color: "var(--brand)",
    soft: "var(--brand-soft)",
    lessons: 10,
    minutes: 130,
    icon: "🏆",
  },
];

const lessonTitles = [
  "Getting Started",
  "Useful Vocabulary",
  "Common Expressions",
  "Listening Practice",
  "Real Conversations",
  "Grammar in Context",
  "Speaking Practice",
  "Reading Skills",
  "Real-World English",
  "Final Challenge",
];

const features = [
  ["✦", "Practical English", "Learn expressions you can actually use."],
  ["◉", "Listening Practice", "Train your ear with natural English."],
  ["↗", "Real Conversations", "Practice realistic everyday dialogue."],
];

export default function CoursePage() {
  const params = useParams<{ slug: string }>();

  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const course = courses.find(
    (item) => item.slug === decodeURIComponent(slug || "").toLowerCase()
  );

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  if (!course) {
    return (
      <main className="min-h-screen bg-[var(--bg)] p-6">
        <div className="mx-auto max-w-4xl pt-16">
          <Link
            href="/courses"
            className="font-bold text-[var(--ink2)] hover:text-[var(--brand)]"
          >
            ← Back to Courses
          </Link>

          <section className="mt-8 rounded-[32px] border border-[var(--line)] bg-[var(--surf)] p-8 shadow-[var(--sh2)]">
            <div className="text-5xl">📚</div>

            <h1 className="mt-5 text-4xl font-black text-[var(--ink)]">
              Course not found
            </h1>

            <p className="mt-3 text-[var(--ink2)]">
              The course URL does not match any available course.
            </p>

            <p className="mt-2 text-sm text-[var(--ink3)]">
              Current URL: {slug || "empty"}
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex rounded-2xl bg-[var(--btn)] px-6 py-3 font-black text-[var(--btn-ink)]"
            >
              Browse Courses →
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* BACK */}
        <div className="reveal mb-6">
          <Link
            href="/courses"
            className="font-bold text-[var(--ink2)] hover:text-[var(--brand)]"
          >
            ← Back to Courses
          </Link>
        </div>

        {/* HERO */}
        <section className="reveal relative overflow-hidden rounded-[36px] border border-[var(--line)] bg-[var(--surf)] p-6 shadow-[var(--sh2)] sm:p-10">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
            style={{ background: course.soft }}
          />

          <div
            className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full blur-3xl"
            style={{ background: course.soft }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_.5fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-[20px] text-3xl"
                  style={{ background: course.soft }}
                >
                  {course.icon}
                </div>

                <span
                  className="rounded-full px-4 py-2 text-xs font-black"
                  style={{
                    background: course.soft,
                    color: course.color,
                  }}
                >
                  {course.level}
                </span>
              </div>

              <p
                className="text-sm font-black uppercase tracking-[.2em]"
                style={{ color: course.color }}
              >
                LingoAI Course
              </p>

              <h1 className="mt-3 text-4xl font-black text-[var(--ink)] sm:text-6xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--ink2)]">
                {course.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="rounded-2xl bg-[var(--btn)] px-6 py-3.5 font-black text-[var(--btn-ink)] transition hover:-translate-y-1"
                >
                  Start Course →
                </Link>

                <Link
                  href="/courses"
                  className="rounded-2xl border border-[var(--line2)] bg-[var(--surf2)] px-6 py-3.5 font-black text-[var(--ink)] transition hover:-translate-y-1"
                >
                  All Courses
                </Link>
              </div>
            </div>

            {/* STATS */}
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Level", course.level],
                ["Lessons", course.lessons],
                ["Learning Time", `${course.minutes} min`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-[var(--line)] bg-[var(--surf2)] p-5"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[var(--ink3)]">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-black text-[var(--ink)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {features.map(([icon, title, text], index) => (
            <div
              key={title}
              className="reveal rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-6 shadow-[var(--sh)] transition hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black"
                style={{
                  background: course.soft,
                  color: course.color,
                }}
              >
                {icon}
              </div>

              <h2 className="text-xl font-black text-[var(--ink)]">
                {title}
              </h2>

              <p className="mt-2 leading-7 text-[var(--ink2)]">
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* COURSE CONTENT */}
        <section className="reveal mt-6 overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--surf)] shadow-[var(--sh)]">
          <div className="border-b border-[var(--line)] p-6 sm:p-8">
            <p
              className="text-xs font-black uppercase tracking-[.2em]"
              style={{ color: course.color }}
            >
              Course Content
            </p>

            <h2 className="mt-2 text-3xl font-black text-[var(--ink)]">
              What you will learn
            </h2>

            <p className="mt-2 text-[var(--ink2)]">
              Build your English step by step through practical lessons.
            </p>
          </div>

          <div className="divide-y divide-[var(--line)]">
            {Array.from({ length: course.lessons }).map((_, index) => (
              <Link
                key={index}
                href={`/courses/${course.slug}`}
                className="group flex items-center gap-4 px-6 py-5 transition hover:bg-[var(--surf2)] sm:px-8"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black"
                  style={{
                    background: course.soft,
                    color: course.color,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-black text-[var(--ink)]">
                    {lessonTitles[index]}
                  </p>

                  <p className="mt-1 text-sm text-[var(--ink2)]">
                    Guided practice and real-world English
                  </p>
                </div>

                <span
                  className="text-xl transition group-hover:translate-x-1"
                  style={{ color: course.color }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="reveal relative mt-6 overflow-hidden rounded-[32px] p-7 shadow-[var(--sh2)] sm:p-9"
          style={{ background: "var(--ai-card)" }}
        >
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--ai-on)]">
                Ready to start?
              </p>

              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                Turn this course into real English confidence.
              </h2>

              <p className="mt-3 text-white/70">
                Start learning and build your skills step by step.
              </p>
            </div>

            <Link
              href={`/courses/${course.slug}`}
              className="rounded-2xl bg-white px-6 py-3.5 font-black text-[#172033] transition hover:-translate-y-1"
            >
              Start Learning →
            </Link>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(.22,1,.36,1);
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
