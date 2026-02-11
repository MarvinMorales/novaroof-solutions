'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { phoneNumber, sanitizedPhoneNumber, i18n } from '@/lib/data';
import { Phone, Globe } from 'lucide-react';
import { trackCall } from '@/lib/tracking';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type HeaderProps = {
  lang: 'en' | 'es';
};

export function Header({ lang }: HeaderProps) {
  const t = i18n[lang].header;
  const pathname = usePathname();

  const getLanguageSwitchUrl = (targetLang: 'en' | 'es') => {
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      pathSegments[0] = targetLang;
      return '/' + pathSegments.join('/');
    }
    return `/${targetLang}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href={`/${lang}/houston-tx/roof-repair`} className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className="font-bold text-lg">Novaroof Solutions</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild>
            <a href={`tel:${sanitizedPhoneNumber}`} onClick={trackCall}>
              <Phone className="mr-2 h-4 w-4" />
              {phoneNumber}
            </a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={getLanguageSwitchUrl('en')}>English</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={getLanguageSwitchUrl('es')}>Español</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
