import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-roofing');

export function Hero() {
  if (!heroImage) return null;

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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 drop-shadow-lg">
          Protegiendo Su Hogar, Techo a Techo
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 drop-shadow-md">
          NovaRoof Solutions: Calidad, durabilidad y confianza para todas sus necesidades de techado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/#services">Nuestros Servicios</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/#contact">Obtener Presupuesto Gratis</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
