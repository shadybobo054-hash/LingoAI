
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Lesson = {
  title: string;
  level: string;
  duration: string;
  exercises: string;
  description: string;
  color: string;
  image: string;
  href: string;
};

const lessons: Lesson[] = [
  {
    title: "At the Café",
    level: "A1",
    duration: "4 min",
    exercises: "0/2",
    description: "Listen to a short conversation at a café and answer the questions.",
    color: "#12D6B0",
    image: "photo-1501339847302-ac426a4a7cbb",
    href: "/listening/cafe",
  },
  {
    title: "Asking for Directions",
    level: "A2",
    duration: "5 min",
    exercises: "0/2",
    description: "Learn how to ask for and give directions in English.",
    color: "#398BFF",
    image: "photo-1513635269975-59663e0ac1ad",
    href: "/listening/directions",
  },
  {
    title: "A Job Interview",
    level: "B1",
    duration: "6 min",
    exercises: "0/2",
    description: "Listen to a real job interview and complete the missing information.",
    color: "#A855F7",
    image: "photo-1556761175-b413da4baf72",
    href: "/listening/job-interview",
  },
  {
    title: "Airport Conversations",
    level: "B2",
    duration: "7 min",
    exercises: "0/3",
    description: "Understand common English conversations while travelling.",
    color: "#F47C32",
    image: "photo-1436491865332-7a61a109cc05",
    href: "/listening/london",
  },
  {
    title: "The Podcast Studio",
    level: "C1",
    duration: "8 min",
    exercises: "0/3",
    description: "Listen to a natural discussion and identify the main ideas.",
    color: "#F43F9E",
    image: "photo-1590602847861-f357a9332bbc",
    href: "/listening/podcast",
  },
  {
    title: "Dinner Conversation",
    level: "A2",
    duration: "5 min",
    exercises: "0/2",
    description: "Practice understanding everyday conversations over dinner.",
    color: "#11BFA5",
    image: "photo-1547592180-85f173990554",
    href: "/listening/dinner",
  },
];

const filters = ["All", "Beginner", "Intermediate", "Advanced"];
const levels = ["A1", "A2", "B1", "B2", "C1"];

function getLevelGroup(level: string) {
  if (level === "A1" || level === "A2") return "Beginner";
  if (level === "B1" || level === "B2") return "Intermediate";
  return "Advanced";
}

function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z" />
      <path d="M20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M8 5.5v13L18 12 8 5.5Z" />
    </svg>
  );
}

export default function ListeningPage() {
  const [filter, setFilter] = useState("All");
  const [level, setLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filteredLessons = useMemo(
    () =>
      lessons.filter(
        (lesson) =>
          (filter === "All" || getLevelGroup(lesson.level) === filter) &&
          (level === "All" || lesson.level === level) &&
          `${lesson.title} ${lesson.description} ${lesson.level}`
            .toLowerCase()
            .includes(search.toLowerCase())
      ),
    [filter, level, search]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#030B20] text-white">
      <style jsx global>{`
        @keyframes listenFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes listenGlow {
          0%, 100% { opacity: .45; }
          50% { opacity: .85; }
        }
        .listen-float { animation: listenFloat 4s ease-in-out infinite; }
        .listen-glow { animation: listenGlow 5s ease-in-out infinite; }
        .listen-card-image { transition: transform .65s ease; }
        .listen-card:hover .listen-card-image { transform: scale(1.08); }
        @media (prefers-reduced-motion: reduce) {
          .listen-float, .listen-glow { animation: none; }
          .listen-card-image { transition: none; }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#06132E]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1650px] flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight">
            <span className="text-3xl">🪐</span>
            Lingo<span className="text-cyan-400">AI</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-blue-100 md:gap-6">
            <Link href="/" className="transition hover:text-cyan-300">Home</Link>
            <Link href="/lessons" className="transition hover:text-cyan-300">Lessons</Link>
            <Link href="/listening" className="relative font-bold text-cyan-300">
              Listening
              <span className="absolute -bottom-5 left-0 h-1 w-full rounded-full bg-cyan-400" />
            </Link>
            <Link href="/courses" className="transition hover:text-cyan-300">Courses</Link>
            <Link href="/practice" className="transition hover:text-cyan-300">Practice</Link>
            <Link href="/ai-tutor" className="transition hover:text-cyan-300">AI Tutor</Link>
          </nav>

          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
            EN / AR
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-blue-400/20 bg-gradient-to-br from-[#092D70] via-[#18266C] to-[#551A78]">
        <div className="listen-glow pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-52 w-80 rounded-full bg-cyan-400/20 blur-[90px]" />

        <div className="relative mx-auto grid max-w-[1650px] items-center gap-8 px-5 py-9 sm:px-8 md:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-12">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-blue-950/40 px-4 py-2 text-xs font-bold tracking-widest text-cyan-200">
              <HeadphonesIcon />
              LISTENING WORLD
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-[56px]">
              Listen. <span className="text-cyan-300">Understand.</span>
              <br />
              Speak with confidence.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              استمع، افهم، وتحدث بثقة. طوّر مهاراتك في اللغة الإنجليزية
              من خلال محادثات واقعية وتمارين تفاعلية ممتعة.
            </p>

            <Link
              href="#lessons"
              className="mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-extrabold text-[#04142C] shadow-lg shadow-cyan-950/30 transition hover:-translate-y-1 hover:shadow-cyan-500/20"
            >
              Explore Lessons <span>↓</span>
            </Link>

            <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {[
                ["🎧", "Real-life content", "Actual conversations"],
                ["🌍", "Multiple accents", "British & American"],
                ["🎯", "Interactive", "Check your answers"],
                ["📈", "Track progress", "Learn step by step"],
              ].map(([icon, title, subtitle]) => (
                <div key={title} className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#071A49]/60 p-3 backdrop-blur">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-xs font-bold">{title}</p>
                    <p className="mt-1 text-[10px] text-blue-200">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[320px] md:block lg:h-[350px]">
            <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/15 shadow-2xl shadow-black/20">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=90"
                alt="London city at sunset"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#18266C]/60 via-transparent to-[#28105B]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061333]/80 via-transparent to-transparent" />
            </div>

            <div className="listen-float absolute -bottom-3 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0A1940]/90 p-3 shadow-xl backdrop-blur-xl">
              <span className="text-3xl">🎧</span>
              <div>
                <p className="text-sm font-bold">Your next adventure</p>
                <p className="text-xs text-cyan-300">Listen. Learn. Grow.</p>
              </div>
            </div>

            <div className="absolute right-4 top-4 rounded-2xl border border-white/20 bg-[#101B4D]/85 p-4 text-center backdrop-blur-xl">
              <p className="text-sm font-bold text-cyan-300">Better</p>
              <p className="text-sm font-bold">Listening</p>
              <p className="text-sm text-fuchsia-300">Brighter Future ✨</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid max-w-[1650px] gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[230px_minmax(0,1fr)_275px] lg:px-8">

        {/* LEFT SIDEBAR */}
        <aside className="h-fit space-y-5 rounded-[22px] border border-blue-400/15 bg-[#07152F] p-4">
          <div>
            <p className="mb-3 text-sm font-extrabold">🔎 Find a lesson</p>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search lessons..."
              className="w-full rounded-xl border border-blue-300/15 bg-[#0B2046] px-3 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-cyan-400"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-extrabold">☷ Categories</p>
            <div className="space-y-2">
              {filters.map((item, i) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                    filter === item
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-950/30"
                      : "bg-[#0C2046] text-blue-100 hover:bg-[#132B56]"
                  }`}
                >
                  <span>{["▦", "🌱", "⚡", "🚀"][i]}</span>
                  <span className="flex-1">{item}</span>
                  {filter === item && <span>✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="mb-3 text-sm font-extrabold">🎓 Choose your level</p>
            <div className="flex flex-wrap gap-2">
              {levels.map((item, i) => (
                <button
                  key={item}
                  onClick={() => setLevel(level === item ? "All" : item)}
                  aria-pressed={level === item}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-black transition hover:-translate-y-1 ${
                    level === item ? "ring-2 ring-white ring-offset-2 ring-offset-[#07152F]" : ""
                  }`}
                  style={{
                    background: ["#12BFA5", "#0875C9", "#9256CB", "#6035D8", "#B52D87"][i],
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            {level !== "All" && (
              <button onClick={() => setLevel("All")} className="mt-3 text-xs font-semibold text-cyan-300">
                Clear level filter ×
              </button>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#10336C] to-[#101D47] p-4">
            <p className="text-sm font-bold">Your listening journey</p>
            <p className="mt-1 text-xs text-blue-200">Every minute makes a difference.</p>
            <div className="mt-4 flex h-12 items-end gap-1">
              {[20, 30, 24, 45, 34, 55, 43, 65, 50, 80, 62, 95].map((h, i) => (
                <span key={i} className="flex-1 rounded-t-full bg-gradient-to-t from-blue-600 to-cyan-300" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </aside>

        {/* LESSONS */}
        <section id="lessons" className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-cyan-400">Explore & improve</p>
              <h2 className="mt-2 text-xl font-black sm:text-2xl">🎧 Listening Lessons</h2>
              <p className="mt-1 text-xs text-blue-200">Choose a topic and start your next adventure.</p>
            </div>
            <span className="rounded-full border border-white/10 bg-[#0B1B3B] px-4 py-2 text-xs text-blue-100">
              {filteredLessons.length} lessons
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                  filter === item
                    ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-300"
                    : "border-white/10 bg-[#091831] text-blue-200 hover:border-blue-400/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <article key={lesson.title} className="listen-card group overflow-hidden rounded-[19px] border border-blue-300/10 bg-gradient-to-b from-[#10224A] to-[#0A1531] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-blue-950/40">
                <Link href={lesson.href} className="block">
                  <div className="relative h-[155px] overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${lesson.image}?auto=format&fit=crop&w=800&q=85`}
                      alt={lesson.title}
                      loading="lazy"
                      className="listen-card-image h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09152E]/90 via-transparent to-black/10" />
                    <span className="absolute right-3 top-3 rounded-xl px-3 py-1.5 text-xs font-black text-white shadow-lg" style={{ background: lesson.color }}>
                      {lesson.level}
                    </span>
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#06132D]/85 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur">
                      ◷ {lesson.duration}
                    </span>
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg transition group-hover:scale-110">
                      <PlayIcon />
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-[15px] font-extrabold transition group-hover:text-cyan-300">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 min-h-[60px] text-xs leading-5 text-blue-100/75">
                      {lesson.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-white/[0.07] pt-3">
                      <span className="text-xs font-bold text-blue-100">Start lesson</span>
                      <span className="text-xs font-semibold text-cyan-300">{lesson.exercises} exercises</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-[#0B1935] p-10 text-center">
              <p className="text-4xl">🎧</p>
              <h3 className="mt-3 font-bold">No lessons found</h3>
              <p className="mt-2 text-sm text-slate-400">Try another search or filter.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                  setLevel("All");
                }}
                className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-5">
          <section className="rounded-[22px] border border-blue-400/20 bg-gradient-to-b from-[#0B2047] to-[#081630] p-5 shadow-xl shadow-blue-950/20">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold">Your Progress</h3>
              <span className="text-xl">📊</span>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <div className="relative flex h-[94px] w-[94px] shrink-0 items-center justify-center rounded-full" style={{ background: "conic-gradient(#12D6D0 0% 35%, #173565 35% 100%)" }}>
                <div className="flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[#0A1A3A] text-xl font-black">35%</div>
              </div>
              <div>
                <p className="text-lg font-black">Level A2</p>
                <p className="mt-1 text-xs text-cyan-300">Keep going!</p>
                <p className="mt-2 text-[11px] text-blue-200">4 / 10 lessons completed</p>
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#18305A]">
              <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
            </div>

            <div className="mt-5 rounded-2xl border border-white/5 bg-[#112A57] p-4">
              <p className="text-sm font-bold">🌟 Next Milestone</p>
              <p className="mt-2 text-xs leading-5 text-blue-200">
                Complete 6 more lessons to unlock Level B1.
              </p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 4 ? "bg-cyan-400" : "bg-blue-950"}`} />
                ))}
              </div>
            </div>

            <Link href="/lessons" className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-blue-300/20 bg-blue-500/10 px-4 py-3 text-xs font-bold text-cyan-300 transition hover:bg-blue-500/20">
              Explore all lessons →
            </Link>
          </section>

          <section className="relative overflow-hidden rounded-[24px] border border-blue-400/20 bg-gradient-to-br from-blue-700 via-[#3437B8] to-fuchsia-700 p-5">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative flex items-center justify-between gap-3">
              <div>
                <p className="text-xl font-black">Keep going!</p>
                <p className="mt-2 max-w-[145px] text-xs leading-5 text-blue-100">
                  Every lesson brings you closer to your goals.
                </p>
              </div>
              <span className="listen-float text-6xl">🤖</span>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs font-bold text-cyan-200">
              <span>✨</span> You&apos;re doing great!
            </div>
          </section>

          <section className="rounded-[22px] border border-blue-400/15 bg-[#07152F] p-4">
            <h3 className="mb-4 text-sm font-extrabold">🎯 Practice & Learn</h3>
            <div className="space-y-2">
              <Link href="/practice/listening" className="group flex items-center gap-3 rounded-xl border border-white/5 bg-[#0C2046] p-3 transition hover:border-cyan-400/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">🎧</span>
                <span className="flex-1">
                  <span className="block text-xs font-bold">Daily Practice</span>
                  <span className="mt-1 block text-[10px] text-blue-200">Short focused exercises</span>
                </span>
                <span className="text-cyan-300 transition group-hover:translate-x-1">›</span>
              </Link>

              <Link href="/lessons" className="group flex items-center gap-3 rounded-xl border border-white/5 bg-[#0C2046] p-3 transition hover:border-purple-400/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10 text-xl">📚</span>
                <span className="flex-1">
                  <span className="block text-xs font-bold">Full Lessons</span>
                  <span className="mt-1 block text-[10px] text-blue-200">Build your English skills</span>
                </span>
                <span className="text-purple-300 transition group-hover:translate-x-1">›</span>
              </Link>

              <Link href="/listening/podcast" className="group flex items-center gap-3 rounded-xl border border-white/5 bg-[#0C2046] p-3 transition hover:border-pink-400/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-400/10 text-xl">🎙️</span>
                <span className="flex-1">
                  <span className="block text-xs font-bold">Podcasts</span>
                  <span className="mt-1 block text-[10px] text-blue-200">Natural conversations</span>
                </span>
                <span className="text-pink-300 transition group-hover:translate-x-1">›</span>
              </Link>
            </div>
          </section>
        </aside>
      </div>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        🪐 LingoAI · Learn English, explore your world.
      </footer>
    </main>
  );
}
