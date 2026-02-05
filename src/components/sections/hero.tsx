"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { trackCall } from '@/lib/api-client';
import { cn } from '@/lib/utils';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const defaultHeroImage: ImagePlaceholder = {
  id: 'hero-default',
  description: "A professional roofer installing new asphalt shingles on a residential roof.",
  imageUrl: "https://images.unsplash.com/photo-1564883250-137937353195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxyb29mZXJ8ZW58MHx8fHwxNzY1NDk5MzUxfDA&ixlib=rb-4.1.0&q=80&w=1200",
  imageHint: "roofer working"
};

type HeroProps = {
    h1?: string;
    subheading?: string;
    size?: 'default' | 'small';
    showButtons?: boolean;
    image?: ImagePlaceholder;
    variant?: 'image' | 'solid';
}

export function Hero({ h1, subheading, size = 'default', showButtons = true, image, variant = 'image' }: HeroProps) {
    const handleCallClick = () => {
        trackCall();
    };

    const heroImage = image || defaultHeroImage;
    const isImageVariant = variant === 'image';
    
  return (
    <section className={cn(
        "relative w-full flex items-center justify-center text-primary-foreground",
        isImageVariant 
          ? (size === 'default' ? "h-[70vh] md:h-[85vh]" : "h-[300px]")
          : `bg-primary ${size === 'default' ? 'py-24 md:py-32' : 'py-16 md:py-20'}`
    )}>
      {isImageVariant && (
        <>
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </>
      )}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className={cn(
            "font-headline font-bold tracking-tighter",
            isImageVariant && "drop-shadow-lg",
            size === 'default' ? "text-4xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl"
        )}>
          {h1 || "Need a Roofer? Get a Free Quote Today."}
        </h1>
        {subheading && (
            <p className={cn(
                "max-w-3xl mx-auto mt-4",
                isImageVariant 
                  ? "text-lg md:text-xl text-neutral-200" 
                  : "text-lg text-primary-foreground/90",
            )}>
              {subheading}
            </p>
        )}
        {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
