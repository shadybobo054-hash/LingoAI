"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", ar: "الرئيسية", href: "/", color: "#3D9BFF" },
  { label: "Lessons", ar: "الدروس", href: "/lessons", color: "#2477D1" },
  { label: "Vocabulary", ar: "المفردات", href: "/vocabulary", color: "#0E8F69" },
  { label: "Listening", ar: "الاستماع", href: "/listening", color: "#0A7E99" },
  { label: "Courses", ar: "الكورسات", href: "/courses", color: "#6A52EE" },
  { label: "Practice", ar: "التدريب", href: "/practice", color: "#CE543B" },
  { label: "AI Tutor", ar: "المعلم الذكي", href: "/ai-tutor", color: "#565AD7" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<"EN" | "AR">("EN");
  const [dark, setDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lingoai-theme");

    const isDark =
      savedTheme === "dark" ||
      (savedTheme !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("lingoai-theme", dark ? "dark" : "light");
  }, [dark, themeReady]);

  useEffect(() => {
    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    if (href === "/vocabulary") {
      return pathname === "/vocabulary" || pathname.startsWith("/vocabulary/");
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sada-navbar sticky top-0 z-50">
      <div className="page-container flex min-h-[68px] items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3D9BFF] via-[#6A52EE] to-[#22D3EE] text-lg font-bold text-white shadow-lg shadow-blue-500/20">
            L
          </span>

          <span className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
            Lingo <span className="bg-gradient-to-r from-[#3D9BFF] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative flex h-[68px] items-center gap-2",
                  "text-sm font-medium transition-all duration-300",
                  active
                    ? "text-[#3D9BFF] after:absolute after:bottom-[14px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#3D9BFF] after:via-[#8B5CF6] after:to-[#22D3EE] after:shadow-[0_0_10px_rgba(61,155,255,0.45)]"
                    : "text-[var(--ink2)] hover:text-[var(--ink)]",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                {language === "AR" ? item.ar : item.label}
              </Link>
            );
          })}
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
                  "rounded-full px-3 py-1.5 transition",
                  language === item
                    ? "bg-gradient-to-r from-[#2477D1] to-[#6A52EE] text-white"
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
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            onClick={() => setDark((current) => !current)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] text-[var(--ink)] transition-all duration-300 hover:scale-105 hover:border-[#8B5CF6]"
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
        <div className="page-container flex gap-5 overflow-x-auto">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative flex shrink-0 items-center gap-1.5 py-3",
                  "text-xs font-medium transition-colors duration-300",
                  active
                    ? "text-[#3D9BFF] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#3D9BFF] after:via-[#8B5CF6] after:to-[#22D3EE] after:shadow-[0_0_10px_rgba(61,155,255,0.45)]"
                    : "text-[var(--ink2)] hover:text-[var(--ink)]",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                {language === "AR" ? item.ar : item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}