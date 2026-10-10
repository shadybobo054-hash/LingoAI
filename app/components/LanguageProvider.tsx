"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "EN" | "AR";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("EN");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lingoai-language");
    const initial: Language = saved === "ar" || saved === "AR" ? "AR" : "EN";

    setLanguageState(initial);
    document.documentElement.lang = initial === "AR" ? "ar" : "en";
    document.documentElement.dir = initial === "AR" ? "rtl" : "ltr";
    setReady(true);

    const syncLanguage = () => {
      const value = localStorage.getItem("lingoai-language");
      const next: Language = value === "ar" || value === "AR" ? "AR" : "EN";

      setLanguageState(next);
      document.documentElement.lang = next === "AR" ? "ar" : "en";
      document.documentElement.dir = next === "AR" ? "rtl" : "ltr";
    };

    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    localStorage.setItem(
      "lingoai-language",
      next === "AR" ? "ar" : "en",
    );

    document.documentElement.lang = next === "AR" ? "ar" : "en";
    document.documentElement.dir = next === "AR" ? "rtl" : "ltr";

    window.dispatchEvent(new Event("languageChange"));
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, isArabic: language === "AR" }}
    >
      <div className="contents" data-language-ready={ready}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
