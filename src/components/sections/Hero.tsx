'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <Image
        src="https://picsum.photos/seed/hero-bg/1920/1080"
        alt="Modern home with a perfectly installed new roof"
        fill
        className="object-cover"
        priority
        data-ai-hint="modern house roof"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl font-black tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Houston's Premier Roofing Experts
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200 drop-shadow-md md:text-xl">
            Unmatched Quality & Reliability for Your Home or Business. From Storm Damage Repair to Full Replacements, We've Got You Covered.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="text-lg h-14 px-10 shadow-lg animate-pulse">
              <a href={`tel:${sanitizedPhoneNumber}`} className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Call For Your FREE Estimate
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-lg h-14 px-10 shadow-lg">
               <a href="#contact">Request an Estimate Online</a>
            </Button>
          </div>
           <p className="mt-4 text-2xl md:text-3xl font-black tracking-wider text-primary drop-shadow-lg">
              {phoneNumber}
          </p>
        </div>
      </div>
    </section>
  );
}
