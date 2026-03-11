"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import es from "../locales/es/common.json";
import en from "../locales/en/common.json";
import de from "../locales/de/common.json";

type Languages = "es" | "en" | "de";

interface Dictionary {
  [key: string]: string;
}

const dictionaries: Record<Languages, Dictionary> = {
  es,
  en,
  de,
};

// Lo que expone el contexto
interface LanguageContextType {
  lang: Languages;
  setLang: (lang: Languages) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Languages>("es");

  const t = (key: string): string => {
    return dictionaries[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return context;
}
