import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services, i18n } from '@/lib/data';

type ServicesProps = {
  lang: 'en' | 'es';
  location: { city: string };
};

export function Services({ lang, location }: ServicesProps) {
  const t = i18n[lang].servicesSection;
  const servicesT = i18n[lang].services;

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.description(location.city)}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const serviceT = servicesT.find(st => st.slug === service.slug)!;
            return (
              <Card key={service.slug} className="flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-primary/20 shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={serviceT.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint={service.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{serviceT.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{serviceT.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
