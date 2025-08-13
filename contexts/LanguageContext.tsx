'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import fa from '@/translations/fa.json';
import en from '@/translations/en.json';
import tr from '@/translations/tr.json';
import ar from '@/translations/ar.json';
type Language = 'fa' | 'en' | 'tr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}
const translations: Record<Language, Record<string, any>> = { fa, en, tr, ar };

 
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


export function LanguageProvider({ 
  children, 
  initialLanguage = 'fa' 
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

const t = (key: string): string => {
  const keys = key.split('.');
  let result: any = translations[language];

  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      return key; // fallback to key if not found
    }
  }

  return typeof result === 'string' ? result : key;
};
  const isRTL = language === 'fa' || language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}