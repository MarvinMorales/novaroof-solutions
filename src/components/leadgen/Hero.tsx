'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/env';
import { trackCallClick } from '@/lib/tracking';

interface HeroProps {
  serviceName: string;
  city: string;
  state: string;
}

export function Hero({ serviceName, city, state }: HeroProps) {
  return (
    <section className="bg-primary/90 text-primary-foreground py-16 md:py-20 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase">
          {serviceName} in {city}, {state}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Get a Fast, Free Quote from a Licensed Local Pro. 24/7 Emergency Service Available.
        </p>
        <Button asChild size="lg" className="mt-8 text-lg md:text-xl h-14 px-10 shadow-lg animate-pulse">
          <a
            href={`tel:${sanitizedPhoneNumber}`}
            onClick={() => trackCallClick('Hero CTA')}
            className="flex items-center gap-3"
          >
            <Phone className="h-6 w-6" />
            Click to Call Now
          </a>
        </Button>
        <p className="mt-4 text-2xl md:text-3xl font-black tracking-wider">
            {phoneNumber}
        </p>
      </div>
    </section>
  );
}
