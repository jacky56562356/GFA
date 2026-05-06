
import React, { createContext, useContext, useState, useMemo } from 'react';
import { Locale } from './types.ts';
import { DICTIONARIES } from './i18n.ts';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);
  
  const t = useMemo(() => {
    // Default to EN if specific locale is missing, fallback to empty object if EVERYTHING is missing (prevents crash)
    const dict = DICTIONARIES[locale] || DICTIONARIES[Locale.EN] || {};
    return dict;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within a LocaleProvider');
  return context;
};
