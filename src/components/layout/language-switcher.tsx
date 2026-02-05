'use client';

import { useContext } from 'react';
import { I18nContext } from '@/context/i18n-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const context = useContext(I18nContext);

  if (!context) {
    return null;
  }

  const { locale, setLocale } = context;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale('en')} disabled={locale === 'en'}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('es')} disabled={locale === 'es'}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
