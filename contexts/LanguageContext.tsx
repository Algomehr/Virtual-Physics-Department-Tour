import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

type Language = 'fa' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check for saved language in localStorage, default to 'fa'
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : 'fa';
    return (storedLang === 'en' || storedLang === 'fa') ? storedLang : 'fa';
  });

  useEffect(() => {
    // Update localStorage and document attributes whenever language changes
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
