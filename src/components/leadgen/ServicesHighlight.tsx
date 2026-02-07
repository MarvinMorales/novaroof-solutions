import { services as allServices } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ServicesHighlightProps {
  currentServiceSlug: string;
  locationSlug: string;
}

export function ServicesHighlight({ currentServiceSlug, locationSlug }: ServicesHighlightProps) {
  const otherServices = allServices.filter(s => s.slug !== currentServiceSlug).slice(0, 3);

  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center">Full-Service Roofing Experts</h2>
        <p className="mt-4 text-center text-muted-foreground">
          Our network of local contractors handles all types of roofing issues.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-4">
             <h3 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                {allServices.find(s => s.slug === currentServiceSlug)?.name}
            </h3>
            <p className="text-muted-foreground">
                We connect you with top-rated local specialists for your immediate need.
            </p>
          </div>
          {otherServices.map(service => (
            <div key={service.slug} className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                 <Link href={`/${locationSlug}/${service.slug}/`} className="hover:underline">
                    {service.name}
                 </Link>
              </h3>
              <p className="text-muted-foreground">{service.description.split('.')[0]}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
