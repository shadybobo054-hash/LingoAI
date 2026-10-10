
"use client";

export default function BlueprintBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
    >
      {/* Blueprint grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="blueprint-grid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 36 0 L 0 0 0 36"
              fill="none"
              stroke="var(--brand)"
              strokeOpacity="0.12"
              strokeWidth="0.7"
            />
          </pattern>

          <pattern
            id="blueprint-small-grid"
            width="9"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r="0.65"
              fill="var(--brand)"
              fillOpacity="0.2"
            />
          </pattern>

          <radialGradient id="blueprint-glow">
            <stop
              offset="0%"
              stopColor="#3D9BFF"
              stopOpacity="0.13"
            />
            <stop
              offset="100%"
              stopColor="#3D9BFF"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#blueprint-small-grid)"
          opacity="0.35"
        />

        <ellipse
          cx="76%"
          cy="28%"
          rx="360"
          ry="300"
          fill="url(#blueprint-glow)"
        />

        {/* Technical circles */}
        <g
          fill="none"
          stroke="#3D9BFF"
          strokeWidth="1"
          strokeOpacity="0.2"
        >
          <circle cx="82%" cy="24%" r="105" strokeDasharray="4 7" />
          <circle cx="82%" cy="24%" r="78" />
          <circle cx="82%" cy="24%" r="52" strokeDasharray="2 5" />
          <path d="M 82% 24% L 95% 12%" />
          <path d="M 82% 24% L 69% 39%" />
          <path d="M 82% 24% L 82% 4%" />
          <path d="M 82% 24% L 99% 24%" />
        </g>

        {/* Measurement lines */}
        <g
          fill="none"
          stroke="var(--brand)"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        >
          <path d="M 5% 72% H 30%" />
          <path d="M 5% 70.8% V 73.2%" />
          <path d="M 30% 70.8% V 73.2%" />
          <path d="M 64% 82% H 92%" />
          <path d="M 64% 80.8% V 83.2%" />
          <path d="M 92% 80.8% V 83.2%" />
        </g>

        {/* Corner markers */}
        <g
          fill="none"
          stroke="#3D9BFF"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        >
          <path d="M 24 52 V 24 H 52" />
          <path d="M 100% 52 V 24 H calc(100% - 28px)" />
          <path d="M 24 calc(100% - 52px) V calc(100% - 24px) H 52" />
        </g>

        {/* Small technical points */}
        <g fill="#3D9BFF" fillOpacity="0.6">
          <circle cx="12%" cy="30%" r="2" />
          <circle cx="30%" cy="70%" r="2" />
          <circle cx="64%" cy="82%" r="2" />
          <circle cx="92%" cy="82%" r="2" />
          <circle cx="82%" cy="24%" r="3" />
        </g>
      </svg>

      {/* Soft ambient lighting */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#3D9BFF]/[0.07] blur-[100px]" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#565AD7]/[0.06] blur-[110px]" />

      {/* Fade towards the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]/70" />
    </div>
  );
}
