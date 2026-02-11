'use client';

import { useEffect } from 'react';
import { trackVisit } from '@/lib/tracking';

export function Tracker() {
  useEffect(() => {
    // We only want to track the visit once on initial load.
    trackVisit();
  }, []);

  return null;
}
