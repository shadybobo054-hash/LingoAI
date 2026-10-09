"use client";

import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    level: "A1",
    title: "English Foundations",
    desc: "Build strong basics through everyday English.",
    color: "var(--brand)",
    soft: "var(--brand-soft)",
  },
  {
    level: "A2",
    title: "Everyday English",
    desc: "Talk about routines, travel and daily situations.",
    color: "var(--voc)",
    soft: "var(--voc-t)",
  },
  {
    level: "B1",
    title: "Confident English",
    desc: "Improve communication and speak more naturally.",
    color: "var(--cou)",
    soft: "var(--cou-t)",
  },
  {
    level: "B2",
    title: "Advanced Communication",
    desc: "Express your ideas clearly in deeper conversations.",
    color: "var(--pra)",
    soft: "var(--pra-t)",
  },
  {
    level: "C1",
    title: "English Mastery",
    desc: "Refine advanced English and communicate naturally.",
    color: "var(--brand)",
    soft: "var(--brand-soft)",
  },
];

export default function CoursesPage() {
  const [active, setActive] = useState("All");

  const shown =
    active === "All"
      ? courses
      : courses.filter((course) => course.level === active);

  return (
    <main
      className="min-h-screen bg-[var(--bg)] px-5 py-8 text-[var(--ink)] md:px-10"
    >
      <div className="mx-auto max-w-[1400px] space-y-8">

        {/* HERO */}
        <section
          className="relative overflow-hidden rounded-[36px] border p-8 md:p-12"
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
            boxShadow: "var(--sh2)",
          }}
        >
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "var(--cou-t)" }}
          />

          <div className="relative max-w-3xl">
            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wider"
              style={{
                background: "var(--cou-t)",
                color: "var(--cou)",
              }}
            >
              Learning paths
            </span>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] md:text-7xl">
              Choose your
              <br />
              <span style={{ color: "var(--cou)" }}>
                next course.
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-lg leading-8"
              style={{ color: "var(--ink2)" }}
            >
              Structured English courses designed to move you
              from your current level to the next one.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                ["5", "Levels"],
                ["50", "Lessons"],
                ["A1–C1", "Path"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border px-5 py-4"
                  style={{
                    background: "var(--surf2)",
                    borderColor: "var(--line)",
                  }}
                >
                  <b className="text-xl">{num}</b>
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
        </section>

        {/* FILTER */}
        <section
          className="flex flex-col gap-4 rounded-[28px] border p-4 sm:flex-row sm:items-center sm:justify-between"
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
          }}
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[.18em]"
              style={{ color: "var(--ink3)" }}
            >
              Your journey
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Explore courses.
            </h2>
          </div>

          <div
            className="flex gap-1 overflow-x-auto rounded-full p-1"
            style={{ background: "var(--surf2)" }}
          >
            {["All", "A1", "A2", "B1", "B2", "C1"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className="rounded-full px-4 py-2 text-xs font-bold transition"
                style={{
                  background:
                    active === item
                      ? "var(--ink)"
                      : "transparent",
                  color:
                    active === item
                      ? "var(--bg)"
                      : "var(--ink2)",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* COURSES */}
        <section>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((course, index) => (
              <Link
                key={course.level}
                href={`/courses/${course.level.toLowerCase()}`}
                className="group relative overflow-hidden rounded-[30px] border p-6 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--surf)",
                  borderColor: "var(--line)",
                  boxShadow: "var(--sh)",
                }}
              >
                <div
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ background: course.color }}
                />

                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50 blur-3xl"
                  style={{ background: course.soft }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-black text-white"
                      style={{ background: course.color }}
                    >
                      {course.level}
                    </span>

                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-extrabold"
                      style={{
                        background: course.soft,
                        color: course.color,
                      }}
                    >
                      COURSE {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black">
                    {course.title}
                  </h3>

                  <p
                    className="mt-3 min-h-[56px] text-sm leading-7"
                    style={{ color: "var(--ink2)" }}
                  >
                    {course.desc}
                  </p>

                  <div
                    className="mt-6 h-2 rounded-full"
                    style={{ background: "var(--surf2)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: index === 0 ? "10%" : "0%",
                        background: course.color,
                      }}
                    />
                  </div>

                  <div className="mt-2 flex justify-between text-xs font-bold">
                    <span style={{ color: "var(--ink3)" }}>
                      10 lessons
                    </span>

                    <span style={{ color: course.color }}>
                      {index === 0 ? "10%" : "Not started"}
                    </span>
                  </div>

                  <div
                    className="mt-6 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition group-hover:translate-x-1"
                    style={{
                      background: course.soft,
                      color: course.color,
                    }}
                  >
                    Open course
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PATH */}
        <section
          className="rounded-[30px] border p-6 md:p-8"
          style={{
            background: "var(--surf)",
            borderColor: "var(--line)",
            boxShadow: "var(--sh)",
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[.18em]"
            style={{ color: "var(--cou)" }}
          >
            Your path
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {courses.map((course, i) => (
              <div key={course.level} className="relative">
                <Link
                  href={`/courses/${course.level.toLowerCase()}`}
                  className="block rounded-2xl border p-4 text-center transition hover:-translate-y-1"
                  style={{
                    background: "var(--surf2)",
                    borderColor: "var(--line)",
                  }}
                >
                  <span
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black text-white"
                    style={{ background: course.color }}
                  >
                    {course.level}
                  </span>

                  <p className="mt-3 text-sm font-extrabold">
                    {course.title}
                  </p>
                </Link>

                {i < 4 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-px w-6 md:block"
                    style={{ background: "var(--line2)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}