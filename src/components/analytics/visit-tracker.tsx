"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackVisitAction } from '@/app/actions';
import { locations } from '@/lib/locations';

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let city = '';
    let state = '';
    
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 2) {
        const locationSlug = pathSegments[1];
        const locationData = locations.find(loc => loc.slug === locationSlug);
        if (locationData) {
            city = locationData.city;
            state = locationData.state;
        }
    }

    trackVisitAction({ city, state });

  }, [pathname]);

  return null;
}
