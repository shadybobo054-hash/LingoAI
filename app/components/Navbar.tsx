
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/", color: "#3D9BFF" },
  { label: "Lessons", href: "/lessons", color: "#2477D1" },
  { label: "Vocabulary", href: "/vocabulary", color: "#0E8F69" },
  { label: "Listening", href: "/listening", color: "#0A7E99" },
  { label: "Courses", href: "/courses", color: "#6A52EE" },
  { label: "Practice", href: "/practice", color: "#CE543B" },
  { label: "AI Tutor", href: "/ai-tutor", color: "#565AD7" },
];

export default function Navbar() {
  const [language, setLanguage] = useState<"EN" | "AR">("EN");

  // ثابت أثناء SSR عشان مفيش Hydration Error
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lingoai-theme");

    let isDark = false;

    if (savedTheme === "dark") {
      isDark = true;
    } else if (savedTheme === "light") {
      isDark = false;
    } else {
      isDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
    }

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lingoai-theme", dark ? "dark" : "light");
  }, [dark, themeReady]);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  return (
    <header className="sada-navbar">
      <div className="page-container flex min-h-[58px] items-center justify-between gap-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3D9BFF] text-sm font-semibold text-white">
            ●
          </span>

          <span className="font-display text-xl font-semibold text-[var(--ink)]">
            Sada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium text-[var(--ink2)] transition hover:text-[var(--ink)]"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              {item.label}
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Language */}
          <div className="flex items-center rounded-full border border-[var(--line2)] bg-[var(--surf)] p-0.5 text-[11px] font-semibold">
            {(["EN", "AR"] as const).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={language === item}
                onClick={() => setLanguage(item)}
                className={[
                  "rounded-full px-2.5 py-1 transition",
                  language === item
                    ? "bg-[#2477D1] text-white"
                    : "text-[var(--ink3)] hover:text-[var(--ink)]",
                ].join(" ")}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label={
              dark ? "Switch to light mode" : "Switch to dark mode"
            }
            aria-pressed={dark}
            onClick={toggleTheme}
            className={[
              "flex h-8 w-8 items-center justify-center",
              "rounded-full",
              "border border-[var(--line2)]",
              "bg-[var(--surf)]",
              "text-[var(--ink)]",
              "transition-all duration-300",
              "hover:border-[var(--brand)]",
              "hover:scale-105",
            ].join(" ")}
          >
            {dark ? "☾" : "☼"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="border-t border-[var(--line)] lg:hidden"
      >
        <div className="page-container flex gap-5 overflow-x-auto py-2.5 text-xs font-medium text-[var(--ink2)]">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex shrink-0 items-center gap-1.5"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}