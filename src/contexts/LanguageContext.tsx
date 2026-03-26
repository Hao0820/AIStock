import React, { createContext, useContext, useState, ReactNode } from 'react';
import { zhTW, TranslationKey } from '../locales/zh-TW';
import { enUS } from '../locales/en-US';

export type Language = 'zh-TW' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Using TranslationKey provides autocompletion for keys
  t: (key: TranslationKey, ...args: string[]) => string;
}

const dictionaries: Record<Language, Record<string, string>> = {
  'zh-TW': zhTW,
  'en-US': enUS,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-TW');

  const t = (key: TranslationKey, ...args: string[]) => {
    const dict = dictionaries[language];
    let text = dict[key] || key;
    
    // Replace {0}, {1} placeholders
    args.forEach((arg, index) => {
      text = text.replace(`{${index}}`, arg);
    });
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
