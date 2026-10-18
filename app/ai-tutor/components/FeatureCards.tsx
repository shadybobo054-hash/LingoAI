
import { tutorFeatures } from "./constants";

export default function FeatureCards() {
  return (
    <section className="mt-8">
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-500">
          Learn smarter
        </p>
        <h2 className="mt-2 text-xl font-black sm:text-2xl">
          Your learning toolkit
        </h2>
        <p className="mt-1 text-sm text-[var(--ink2)]">
          Everything you need to build your English skills.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {tutorFeatures.map((feature) => (
          <div
            key={feature.title}
            className={`group rounded-3xl border border-[var(--line)] bg-[var(--surf)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${feature.border}`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-2xl shadow-md transition-transform duration-300 group-hover:scale-110`}
            >
              {feature.icon}
            </div>
            <h3 className="mt-4 text-sm font-black">{feature.title}</h3>
            <p className="mt-2 text-xs leading-6 text-[var(--ink2)]">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <footer className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-[var(--line)] pt-6 text-xs text-[var(--ink2)]">
        <span>Made for your learning journey</span>
        <span className="text-violet-500">✦</span>
        <span className="font-bold">LingoAI</span>
      </footer>
    </section>
  );
}
