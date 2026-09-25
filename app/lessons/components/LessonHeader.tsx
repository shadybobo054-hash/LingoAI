export function LessonHeader() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#3d9bff]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#7567ff]/[0.055] blur-[110px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 pb-10 pt-14 sm:px-8 lg:px-10 lg:pb-14 lg:pt-20">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surf)] px-3 py-2 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3d9bff]" />
          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink2)]">
            Learning map / 01
          </span>
        </div>

        <div className="max-w-[850px]">
          <h1 className="font-display text-[clamp(52px,7vw,94px)] leading-[0.87] tracking-[-0.055em] text-[var(--ink)]">
            Your
            <br />
            <span className="text-[#3d9bff]">English World.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[550px] font-sans text-[15px] leading-7 text-[var(--ink2)] sm:text-[16px]">
              Learn through real situations, useful conversations, and
              experiences that gradually take you from A1 to C1.
            </p>

            <div className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--ink2)]">
              5 levels
              <span className="mx-2 text-[var(--line2)]">/</span>
              50 lessons
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
