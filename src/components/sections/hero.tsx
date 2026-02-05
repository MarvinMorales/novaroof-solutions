import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const heroImage = {
  description: "A professional roofer installing new asphalt shingles on a residential roof.",
  imageUrl: "https://images.unsplash.com/photo-1564883250-137937353195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxyb29mZXJ8ZW58MHx8fHwxNzY1NDk5MzUxfDA&ixlib=rb-4.1.0&q=80&w=1200",
  imageHint: "roofer working"
};

export function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-primary-foreground">
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
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 drop-shadow-lg">
          Need a Roofer? Get a Free Quote Today.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 drop-shadow-md">
          We connect you with trusted, licensed, and insured local roofers for any project, big or small. Fast, free, and no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/#contact">Get Your Free Quote</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
