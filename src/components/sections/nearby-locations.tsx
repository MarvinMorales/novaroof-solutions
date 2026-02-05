import { getNearbyCities, type LocationData } from '@/lib/locations';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface NearbyLocationsProps {
  currentLocation: LocationData;
  service: {
    slug: string;
    name: string;
  };
}

export function NearbyLocations({ currentLocation, service }: NearbyLocationsProps) {
  const nearby = getNearbyCities(currentLocation.state, currentLocation.city);

  if (nearby.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-center">
          Serving Other Areas in {currentLocation.state}
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          In addition to {currentLocation.city}, we also connect homeowners with trusted roofers in these nearby communities:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {nearby.map(location => (
            <Link
              key={location.slug}
              href={`/${location.slug}/${service.slug}`}
              className="bg-background border rounded-lg p-4 flex items-center gap-3 hover:bg-accent hover:shadow-md transition-all"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">{service.name} in {location.city}, {location.stateCode}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
