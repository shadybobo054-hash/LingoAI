
"use client";

import Link from "next/link";

type Course = {
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  minutes: number;
  icon: string;
  color: string;
  slug: string;
};

const courses: Course[] = [
  {
    title: "English for Travel",
    description:
      "Learn practical English for airports, hotels, restaurants, transportation, and everyday travel situations.",
    level: "Beginner",
    lessons: 12,
    minutes: 120,
    icon: "✈️",
    color: "bg-cyan-50",
    slug: "english-for-travel",
  },
  {
    title: "English for Work",
    description:
      "Build useful English skills for meetings, emails, presentations, teamwork, and workplace communication.",
    level: "Intermediate",
    lessons: 15,
    minutes: 150,
    icon: "💼",
    color: "bg-amber-50",
    slug: "english-for-work",
  },
  {
    title: "Everyday Conversations",
    description:
      "Practice natural English conversations for everyday situations, from meeting people to talking about your daily life.",
    level: "Beginner",
    lessons: 10,
    minutes: 100,
    icon: "💬",
    color: "bg-emerald-50",
    slug: "everyday-conversations",
  },
  {
    title: "News in Plain English",
    description:
      "Improve your English by reading and understanding real-world news using clear and accessible English.",
    level: "Intermediate",
    lessons: 14,
    minutes: 140,
    icon: "📰",
    color: "bg-violet-50",
    slug: "news-in-plain-english",
  },
];

const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] px-5 pb-20 pt-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#e8f9fc] px-4 py-2 text-sm font-bold text-[#18b9cf]">
              LEARNING COURSES
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Learn English your way.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Choose a course that matches your goals and improve your English
              through practical lessons, real conversations, listening practice,
              and useful vocabulary.
            </p>
          </div>
        </section>

        {/* Level filters */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-3">
            {levels.map((level, index) => (
              <button
                key={level}
                type="button"
                className={[
                  "rounded-full px-5 py-2.5 text-sm font-bold transition",
                  index === 0
                    ? "bg-[#172033] text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#18b9cf] hover:text-[#18b9cf]",
                ].join(" ")}
              >
                {level}
              </button>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[#18b9cf]">
                EXPLORE COURSES
              </p>

              <h2 className="mt-1 text-2xl font-black text-[#172033]">
                Pick your next course
              </h2>
            </div>

            <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-500 shadow-sm sm:block">
              {courses.length} courses
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group block"
              >
                <article className="h-full overflow-hidden rounded-[30px] border border-transparent bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#18b9cf]/20 hover:shadow-xl">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl ${course.color}`}
                    >
                      {course.icon}
                    </div>

                    <span className="rounded-full bg-[#f7f7f4] px-3.5 py-2 text-xs font-bold text-gray-500">
                      {course.level}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-2xl font-black text-[#172033] transition group-hover:text-[#18b9cf]">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {course.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <div className="rounded-xl bg-[#f7f7f4] px-4 py-3">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
                        Lessons
                      </p>

                      <p className="mt-1 text-sm font-black text-[#172033]">
                        {course.lessons}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f7f7f4] px-4 py-3">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
                        Time
                      </p>

                      <p className="mt-1 text-sm font-black text-[#172033]">
                        {course.minutes} min
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-sm font-bold text-[#172033]">
                      Start learning
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f9fc] text-lg font-bold text-[#18b9cf] transition duration-300 group-hover:bg-[#18b9cf] group-hover:text-white">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 overflow-hidden rounded-[32px] bg-[#172033] p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-bold text-[#18b9cf]">
                KEEP LEARNING
              </span>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
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

