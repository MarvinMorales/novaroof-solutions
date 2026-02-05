"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { trackCall } from '@/lib/api-client';
import { cn } from '@/lib/utils';

const heroImage = {
  description: "A professional roofer repairing a damaged roof.",
  imageUrl: "https://phs-roof.com/wp-content/uploads/2025/09/Roof-Damage-Repair.webp",
  imageHint: "roof damage repair"
};

type HeroProps = {
    h1?: string;
    subheading?: string;
    size?: 'default' | 'small';
    showButtons?: boolean;
}

export function Hero({ h1, subheading, size = 'default', showButtons = true }: HeroProps) {
    const handleCallClick = () => {
        trackCall();
    };
    
  return (
    <section className={cn(
        "relative w-full flex items-center justify-center text-primary-foreground",
        size === 'default' ? "h-[70vh] md:h-[85vh]" : "h-[40vh] md:h-[50vh]"
    )}>
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        data-ai-hint={heroImage.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className={cn(
            "font-headline font-bold tracking-tighter mb-4 drop-shadow-lg",
            size === 'default' ? "text-4xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl lg:text-6xl"
        )}>
          {h1 || "Need a Roofer? Get a Free Quote Today."}
        </h1>
        {subheading && (
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 drop-shadow-md">
              {subheading}
            </p>
        )}
        {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#contact">Get Your Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="tel:5623177925" onClick={handleCallClick} className="flex items-center gap-2">
                    <Phone /> Call For a Roofer Now
                </a>
              </Button>
            </div>
        )}
      </div>
    </section>
  );
}
