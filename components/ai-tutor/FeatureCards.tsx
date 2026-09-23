export default function FeatureCards() {
  const features = [
    {
      icon: "💬",
      title: "Natural conversations",
      text: "Practice realistic English conversations at your level.",
    },
    {
      icon: "🧠",
      title: "Smart explanations",
      text: "Understand mistakes with simple explanations and examples.",
    },
    {
      icon: "🎤",
      title: "Speaking practice",
      text: "Use your microphone and practice speaking English.",
    },
  ];

  return (
    <section className="mt-6 grid gap-4 md:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-[28px] border border-[var(--line)] bg-[var(--surf)] p-5 shadow-[var(--sh)] transition hover:-translate-y-1"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-2xl">
            {feature.icon}
          </div>

          <h3 className="mt-4 text-base font-black text-[var(--ink)]">
            {feature.title}
          </h3>

          <p className="mt-2 text-sm font-medium leading-6 text-[var(--ink2)]">
            {feature.text}
          </p>
        </div>
      ))}
    </section>
  );
}
