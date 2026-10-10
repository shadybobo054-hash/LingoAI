
import Link from "next/link";
import ListeningCard from "../ListeningCard";
import ScrollReveal from "../ScrollReveal";
import BlueprintBackground from "../BlueprintBackground";

const waveform = [
  14, 24, 10, 32, 20, 40, 18, 28, 12, 34, 22, 38, 30, 18, 28, 42,
  30, 20, 34, 16, 28, 12, 36, 22, 44, 30, 20, 34, 14, 28, 38, 18,
  32, 24, 40, 16, 30, 22, 36, 18, 28,
];

function BlueprintArt() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Cyan ambient glow */}
      <div className="absolute right-[3%] top-[8%] h-64 w-64 rounded-full bg-cyan-400/10 blur-[90px] sm:h-80 sm:w-80" />
      <div className="absolute bottom-[5%] right-[15%] h-52 w-52 rounded-full bg-blue-500/10 blur-[85px]" />

      {/* Main technical drawing */}
      <svg
        viewBox="0 0 600 520"
        fill="none"
        className="absolute right-[-15%] top-1/2 w-[125%] max-w-[650px] -translate-y-1/2 opacity-70 sm:right-[-8%] sm:w-[105%] lg:right-[-12%] lg:w-[115%]"
      >
        <defs>
          <linearGradient id="blueprint-line" x1="0" y1="0" x2="600" y2="520">
            <stop stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="1" stopColor="#6366F1" stopOpacity="0.15" />
          </linearGradient>

          <radialGradient id="blueprint-glow">
            <stop stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>

          <pattern
            id="blueprint-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 H 0 V 24"
              stroke="#38BDF8"
              strokeOpacity="0.15"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>

        {/* Grid panel */}
        <rect
          x="55"
          y="35"
          width="490"
          height="440"
          rx="24"
          fill="url(#blueprint-grid)"
          stroke="url(#blueprint-line)"
          strokeOpacity="0.5"
          strokeDasharray="5 8"
        />

        {/* Orbital rings */}
        <circle
          cx="310"
          cy="255"
          r="170"
          stroke="url(#blueprint-line)"
          strokeWidth="1.2"
          strokeDasharray="3 8"
        />
        <circle
          cx="310"
          cy="255"
          r="142"
          stroke="#38BDF8"
          strokeOpacity="0.45"
        />
        <circle
          cx="310"
          cy="255"
          r="112"
          stroke="#6366F1"
          strokeOpacity="0.4"
          strokeDasharray="8 8"
        />

        {/* Center glow */}
        <circle cx="310" cy="255" r="100" fill="url(#blueprint-glow)" />

        {/* Geometric language symbol */}
        <path
          d="M250 210 L310 175 L370 210 L370 280 L310 315 L250 280 Z"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M280 228 L280 275 M280 228 L340 275 M340 228 L340 275"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M267 250 H353"
          stroke="#818CF8"
          strokeWidth="1"
          strokeDasharray="4 5"
        />

        {/* Technical measurement lines */}
        <path
          d="M120 140 H215 M120 140 V195 M385 355 H475 M475 305 V355"
          stroke="#38BDF8"
          strokeOpacity="0.8"
          strokeWidth="1"
        />
        <path
          d="M110 130 L120 140 L110 150 M205 130 L215 140 L205 150"
          stroke="#38BDF8"
          strokeOpacity="0.8"
        />
        <path
          d="M465 345 L475 355 L485 345"
          stroke="#38BDF8"
          strokeOpacity="0.8"
        />

        {/* Circuit paths */}
        <path
          d="M90 255 H145 L165 235 H205 M415 275 H455 L475 255 H510"
          stroke="#38BDF8"
          strokeOpacity="0.65"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M310 85 V125 M310 385 V425 M140 255 H165 M455 255 H480"
          stroke="#6366F1"
          strokeOpacity="0.8"
          strokeWidth="1.4"
        />

        {/* Connection nodes */}
        {[
          [90, 255],
          [205, 235],
          [415, 275],
          [510, 255],
          [310, 85],
          [310, 425],
          [165, 235],
          [455, 275],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r="8"
              fill="#38BDF8"
              fillOpacity="0.1"
            />
            <circle
              cx={cx}
              cy={cy}
              r="3"
              fill="#38BDF8"
            />
          </g>
        ))}

        {/* Floating technical marks */}
        <path
          d="M155 85 H195 M175 65 V105 M420 420 H460 M440 400 V440"
          stroke="#818CF8"
          strokeOpacity="0.8"
          strokeWidth="1.4"
        />
        <circle cx="190" cy="365" r="18" stroke="#38BDF8" strokeOpacity="0.6" />
        <circle cx="190" cy="365" r="5" fill="#38BDF8" fillOpacity="0.6" />
        <rect
          x="420"
          y="105"
          width="28"
          height="28"
          rx="5"
          stroke="#38BDF8"
          strokeOpacity="0.7"
          transform="rotate(15 434 119)"
        />
      </svg>

      {/* Small floating blueprint panels */}
      <div className="absolute right-[8%] top-[12%] hidden animate-[float_6s_ease-in-out_infinite] rounded-xl border border-cyan-400/30 bg-white/70 p-3 shadow-[0_0_35px_rgba(56,189,248,0.12)] backdrop-blur-sm sm:block">
        <svg viewBox="0 0 76 34" className="h-8 w-[76px]" fill="none">
          <path
            d="M2 24 L12 24 L19 10 L27 29 L37 5 L47 23 L55 15 L63 24 L74 24"
            stroke="#0891B2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-[14%] left-[4%] hidden animate-[float_7s_ease-in-out_infinite] rounded-lg border border-blue-400/30 bg-white/70 px-3 py-2 text-[10px] font-medium tracking-[0.2em] text-blue-600 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm sm:block">
        LANGUAGE / 01
      </div>

      {/* Subtle animated particles */}
      <span className="absolute right-[18%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_15px_#38BDF8]" />
      <span className="absolute bottom-[25%] right-[12%] h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_12px_#818CF8]" />
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg)]">
      <BlueprintBackground />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--brand-soft)] opacity-70 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-12%] h-[360px] w-[360px] rounded-full bg-[var(--surf2)] opacity-70 blur-3xl" />
        <div className="absolute right-[35%] top-[35%] h-[180px] w-[180px] rounded-full bg-[var(--brand)] opacity-[0.035] blur-3xl" />
      </div>

      <div className="page-container relative py-14 sm:py-20 lg:py-24">
        <ScrollReveal className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative z-10 max-w-[570px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--brand-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--brand-ink)] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
              No account. Just start.
            </div>

            <h1 className="font-display text-[3.5rem] font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink)] sm:text-6xl lg:text-[4.5rem]">
              Learn English the
              <span className="block">way you actually</span>
              <span className="block">hear it.</span>
            </h1>

            <p className="mt-7 max-w-[500px] text-base leading-7 text-[var(--ink2)] sm:text-lg">
              Short lessons, real listening, a vocabulary you can touch, and
              a tutor that explains the why. Open a page and you are already
              learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lessons"
                className="sada-button inline-flex h-12 items-center justify-center rounded-full px-7 text-base"
              >
                Start learning
                <span className="ml-2 transition-transform duration-300">
                  →
                </span>
              </Link>

              <Link
                href="/ai-tutor"
                className="group inline-flex h-12 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] px-7 text-base font-semibold text-[var(--ink)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-[var(--sh)]"
              >
                <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#565AD7]" />
                Practice with AI
              </Link>
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs font-medium text-[var(--ink3)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
              Everything below is live — tap anything.
            </p>
          </div>

          <div className="relative z-10">
            {/* Blueprint artwork behind the existing card */}
            <BlueprintArt />

            <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[var(--line)] bg-[var(--brand-soft)] opacity-70" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[var(--surf2)] opacity-80 blur-2xl" />

            <div className="relative z-10">
              <ListeningCard
                sentence="I will have a coffee and a glass of water please"
                waveform={waveform}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
