"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { locations } from '@/lib/locations';
import { trackVisit } from '@/lib/api-client';

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let city = '';
    let state = '';
    
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length > 0) {
        const locationSlug = pathSegments[0];
        const locationData = locations.find(loc => loc.slug === locationSlug);
        if (locationData) {
            city = locationData.city;
            state = locationData.stateCode;
        }
    }

    // Call the frontend tracking function
    trackVisit({ city, state });

  }, [pathname]);

  return null;
}
