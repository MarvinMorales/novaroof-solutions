'use client';
import React, { createContext, useState, ReactNode, useMemo } from 'react';
import { messages as enMessages } from '@/messages/en';
import { messages as esMessages } from '@/messages/es';

type Locale = 'en' | 'es';

// This type will be inferred from the enMessages object, ensuring type safety.
export type Messages = typeof enMessages;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

const allMessages = {
  en: enMessages,
  es: esMessages,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const contextValue = useMemo(() => {
    // We cast to Messages because TypeScript can't infer that esMessages has the same shape as enMessages.
    // This is safe as long as we keep the translation files in sync.
    const messages = allMessages[locale] as Messages;
    return {
      locale,
      setLocale,
      messages,
    };
  }, [locale]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}
