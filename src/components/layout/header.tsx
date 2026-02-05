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


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
];

const services = [
    { href: '/houston-tx/roof-repair/', label: 'Roof Repair' },
    { href: '/houston-tx/roof-replacement/', label: 'Roof Replacement' },
    { href: '/houston-tx/emergency-roof-repair/', label: 'Emergency Repair' },
    { href: '/houston-tx/storm-damage-roof/', label: 'Storm Damage' },
    { href: '/houston-tx/roof-leak-repair/', label: 'Roof Leak Repair' },
];


const BrandIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <ShieldCheck {...props} />
);


export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    // Match /about/ as well
    if (href.endsWith('/') && href.length > 1) {
      return pathname.startsWith(href);
    }
    return pathname === href;
  }

  const isServicePageActive = () => {
      const pathSegments = pathname.split('/');
      if (pathSegments.length < 3) return false;
      const serviceSlug = pathSegments[2];
      return services.some(service => service.href.split('/')[2] === serviceSlug);
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
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map(service => (
                    <DropdownMenuItem key={service.href} asChild>
                        <Link href={service.href}>{service.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline">
              <a href="tel:5623177925" onClick={handleCallClick} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (562) 317-7925
              </a>
          </Button>
          <Button asChild>
            <Link href="/#contact">Get a Free Quote</Link>
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
                  {[...navLinks, ...services].map((link) => (
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
                </nav>
                 <Button asChild size="lg" className="mt-4" variant="outline">
                    <a href="tel:5623177925" onClick={() => { handleCallClick(); setSheetOpen(false); }}>
                        <Phone /> Call Now
                    </a>
                </Button>
                <Button asChild size="lg" className="mt-2" onClick={() => setSheetOpen(false)}>
                  <Link href="/#contact">Get a Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
