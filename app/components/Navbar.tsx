
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

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
  const { language, setLanguage, isArabic } = useLanguage();

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/vocabulary") {
      return pathname === href || pathname.startsWith("/vocabulary/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinks = (mobile = false) =>
    navigation.map((item) => {
      const active = isActive(item.href);

      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={[
            "relative flex items-center gap-2 font-medium transition-all duration-300",
            mobile ? "shrink-0 py-3 text-xs" : "h-[68px] text-sm",
            active
              ? "text-[#3D9BFF] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#3D9BFF] after:via-[#8B5CF6] after:to-[#22D3EE] lg:after:bottom-[14px]"
              : "text-[var(--ink2)] hover:text-[var(--ink)]",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          {isArabic ? item.ar : item.label}
        </Link>
      );
    });

  return (
    <header className="sada-navbar sticky top-0 z-50">
      <div className="page-container flex min-h-[68px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3D9BFF] via-[#6A52EE] to-[#22D3EE] text-lg font-bold text-white shadow-lg shadow-blue-500/20">
            L
          </span>

          <span className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
            Lingo{" "}
            <span className="bg-gradient-to-r from-[#3D9BFF] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">
              AI
            </span>
          </span>
        </Link>

        <nav
          aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}
          className="hidden items-center gap-5 lg:flex"
        >
          {navLinks()}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
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

          <button
            type="button"
            aria-label={
              dark
                ? isArabic
                  ? "التبديل إلى الوضع الفاتح"
                  : "Switch to light mode"
                : isArabic
                  ? "التبديل إلى الوضع الداكن"
                  : "Switch to dark mode"
            }
            aria-pressed={dark}
            onClick={() => setDark((current) => !current)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line2)] bg-[var(--surf)] text-[var(--ink)] transition-all duration-300 hover:scale-105 hover:border-[#8B5CF6]"
          >
            {dark ? "☾" : "☼"}
          </button>
        </div>
      </div>

      <nav
        aria-label={isArabic ? "التنقل للموبايل" : "Mobile navigation"}
        className="border-t border-[var(--line)] lg:hidden"
      >
        <div className="page-container flex gap-5 overflow-x-auto">
          {navLinks(true)}
        </div>
      </nav>
    </header>
  );
}
