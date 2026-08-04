import { useEffect, useState } from "react";
import type { Language } from "../types";

const STORAGE_KEY = "mansur-portfolio-language";

const getDefaultLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "ru" || saved === "en") {
    return saved;
  }

  return window.navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(getDefaultLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return {
    language,
    setLanguage,
  };
};
