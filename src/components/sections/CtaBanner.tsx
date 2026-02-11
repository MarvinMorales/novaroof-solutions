'use client';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { phoneNumber, sanitizedPhoneNumber } from '@/lib/data';
import { trackCall } from '@/lib/tracking';

type CtaBannerProps = {
    location: { city: string };
};

export function CtaBanner({ location }: CtaBannerProps) {
  return (
    <section className="py-20 md:py-24 bg-primary/10">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          ¿Listo para Proteger tu Hogar en {location.city}?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          No esperes a que un pequeño problema se convierta en una catástrofe. Nuestro equipo está listo para brindarte una evaluación rápida, gratuita y honesta de tus necesidades de techado en Texas.
        </p>
        <Button asChild size="lg" className="mt-8 text-lg md:text-xl h-14 px-10 shadow-lg">
          <a
            href={`tel:${sanitizedPhoneNumber}`}
            className="flex items-center gap-3"
            onClick={trackCall}
          >
            <Phone className="h-6 w-6" />
            Obtén tu Presupuesto Gratis Ahora
          </a>
        </Button>
         <p className="mt-4 text-2xl md:text-3xl font-black tracking-wider text-primary">
            {phoneNumber}
        </p>
      </div>
    </section>
  );
}
