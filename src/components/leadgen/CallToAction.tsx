'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/env';
import { trackCallClick } from '@/lib/tracking';

export function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
            Don't Wait for a Small Problem to Become a Disaster.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
          Get a free, no-obligation quote from a local expert now. We're available 24/7 to help.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8 text-lg md:text-xl h-14 px-10 shadow-lg">
          <a
            href={`tel:${sanitizedPhoneNumber}`}
            onClick={() => trackCallClick('Bottom CTA')}
            className="flex items-center gap-3"
          >
            <Phone className="h-6 w-6" />
            Call For Your Free Estimate
          </a>
        </Button>
         <p className="mt-4 text-2xl md:text-3xl font-black tracking-wider">
            {phoneNumber}
        </p>
      </div>
    </section>
  );
}
