'use client';
import { useContext } from 'react';
import { I18nContext, Messages } from '@/context/i18n-context';
import get from 'lodash.get';

// Define a type for a path in the Messages object
type Path<T> = T extends object ? { [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Path<T[K]>}`}` }[keyof T] : never;
type MessageKeys = Path<Messages>;


export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }

  const { messages, locale } = context;

  const t = (key: MessageKeys, variables?: Record<string, string | number>): string => {
    let translation = get(messages, key) as string | undefined;

    if (translation === undefined) {
        console.warn(`Translation key "${key}" not found for locale "${locale}".`);
        // Fallback to English if translation is missing
        const enTranslation = get(enMessages, key) as string | undefined;
        if(enTranslation) {
          translation = enTranslation;
        } else {
          return key;
        }
    }

    if (variables) {
        Object.keys(variables).forEach(varKey => {
            const regex = new RegExp(`\\{${varKey}\\}`, 'g');
            translation = translation!.replace(regex, String(variables[varKey]));
        });
    }

    return translation;
  };

  return { t, locale };
};

// We need a reference to English messages for fallback
import { messages as enMessages } from '@/messages/en';
