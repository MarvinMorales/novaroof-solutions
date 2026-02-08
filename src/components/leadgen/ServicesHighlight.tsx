'use client';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { sanitizedPhoneNumber } from '@/lib/env';
import { trackCallClick } from '@/lib/tracking';

export function ServicesHighlight() {
  // Show all primary services, limited to 4 as per requirements.
  const displayedServices = services.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-foreground">Full-Service Roofing Experts</h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Our network of local contractors handles all types of roofing issues, big or small.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedServices.map(service => (
            <div key={service.slug} className="p-6 border rounded-lg bg-secondary/50">
              <h3 className="font-bold text-xl text-foreground">
                {service.name}
              </h3>
              <p className="text-muted-foreground mt-2 mb-4">{service.description}</p>
              <Button asChild variant="secondary" className="w-full">
                <a 
                  href={`tel:${sanitizedPhoneNumber}`}
                  onClick={() => trackCallClick(`Service Section CTA: ${service.name}`)}
                >
                  Call For a Quote
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
