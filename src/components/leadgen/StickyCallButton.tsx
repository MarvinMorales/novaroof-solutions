'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/env';
import { trackCallClick } from '@/lib/tracking';

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
      <Button asChild size="lg" className="w-full h-14 text-lg animate-pulse">
        <a 
          href={`tel:${sanitizedPhoneNumber}`}
          onClick={() => trackCallClick('Sticky Mobile CTA')}
          className="flex items-center gap-3"
        >
          <Phone className="h-6 w-6" />
          Click to Call For Free Quote
        </a>
      </Button>
    </div>
  );
}
