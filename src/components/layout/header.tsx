'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/data';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className="font-bold text-lg">Nova Roofing</span>
        </Link>
        <Button asChild>
          <a href={`tel:${sanitizedPhoneNumber}`}>
            <Phone className="mr-2 h-4 w-4" />
            {phoneNumber}
          </a>
        </Button>
      </div>
    </header>
  );
}
