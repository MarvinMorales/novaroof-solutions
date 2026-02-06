"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShieldCheck, Phone, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { trackCall } from '@/lib/api-client';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSwitcher } from './language-switcher';


const services = [
    { slug: 'new-roof-installation' },
    { slug: 'roof-replacement' },
    { slug: 'asphalt-shingle-roofing' },
    { slug: 'metal-roofing' },
    { slug: 'roof-repair' },
    { slug: 'emergency-roof-repair' },
    { slug: 'storm-damage-roof' },
    { slug: 'hail-damage-roof-repair' },
    { slug: 'roof-leak-repair' },
    { slug: 'roof-inspection' },
    { slug: 'gutter-services' },
    { slug: 'roof-vent-installation' },
];


const BrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <ShieldCheck {...props} />
);


export function Header() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('Header.home') },
    { href: '/about/', label: t('Header.about') },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    // Match /about/ as well
    if (href.endsWith('/') && href.length > 1) {
      return pathname.startsWith(href);
    }
    return pathname === href;
  }

  const isServicePageActive = () => {
      const pathSegments = pathname.split('/').filter(Boolean);
      if (pathSegments.length < 2) return false;
      
      const potentialSlug = pathSegments[1];
      return services.some(service => service.slug === potentialSlug);
  }

  const handleCallClick = () => {
    trackCall();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <BrandIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl">NovaRoof Solutions</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isLinkActive(link.href) ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn('text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1', {'text-primary': isServicePageActive()})}>
                {t('Header.services')} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map(service => (
                    <DropdownMenuItem key={service.slug} asChild>
                        <Link href={`/service/${service.slug}/`}>{t(`Services.${service.slug}.title`)}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button asChild variant="outline">
              <a href="tel:5623177925" onClick={handleCallClick} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (562) 317-7925
              </a>
          </Button>
          <Button asChild>
            <Link href="/#contact">{t('Header.getQuote')}</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setSheetOpen(false)}>
                  <BrandIcon className="h-6 w-6 text-primary" />
                  <span className="font-headline text-lg">NovaRoof Solutions</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                         isLinkActive(link.href) ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pl-4 border-l-2 border-primary/50 flex flex-col gap-4 pt-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/service/${service.slug}/`}
                        onClick={() => setSheetOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary text-foreground"
                      >
                        {t(`Services.${service.slug}.title`)}
                      </Link>
                    ))}
                  </div>
                </nav>
                 <Button asChild size="lg" className="mt-4" variant="outline">
                    <a href="tel:5623177925" onClick={() => { handleCallClick(); setSheetOpen(false); }}>
                        <Phone /> {t('Header.callNow')}
                    </a>
                </Button>
                <Button asChild size="lg" className="mt-2" onClick={() => setSheetOpen(false)}>
                  <Link href="/#contact">{t('Header.getQuote')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    