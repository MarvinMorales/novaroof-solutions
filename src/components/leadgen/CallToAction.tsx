'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/env';
import { trackCallClick } from '@/lib/tracking';

export function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Don't Wait—Protect Your Home Now
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Every hour you wait, a small leak can cause more damage. Protect your home and get a fast, free, no-obligation quote from a local expert now. We're available 24/7.
        </p>
        <Button asChild size="lg" className="mt-8 text-lg md:text-xl h-14 px-10 shadow-lg animate-pulse">
          <a
            href={`tel:${sanitizedPhoneNumber}`}
            onClick={() => trackCallClick('Final CTA')}
            className="flex items-center gap-3"
          >
            <Phone className="h-6 w-6" />
            Click to Call For Your Free Quote
          </a>
        </Button>
         <p className="mt-4 text-2xl md:text-3xl font-black tracking-wider text-primary">
            {phoneNumber}
        </p>
      </div>
    </section>
  );
}
