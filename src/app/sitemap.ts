import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/data';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.novaroofsolutions.com';

// Prioridad basada en intención comercial real
const priorityMap: Record<string, number> = {
  'emergency-roof-repair': 1.0,
  'storm-damage-roof': 0.9,
  'hail-damage-roof-repair': 0.9,
  'roof-leak-repair': 0.9,
  'roof-repair': 0.8,
  'roof-replacement': 0.8,
  'new-roof-installation': 0.7,
  'metal-roofing': 0.7,
  'asphalt-shingle-roofing': 0.6,
  'roof-inspection': 0.6,
  'gutter-services': 0.5,
  'roof-vent-installation': 0.4,
};

const changeFreqMap: Record<
  string,
  MetadataRoute.Sitemap[number]['changeFrequency']
> = {
  'emergency-roof-repair': 'weekly',
  'storm-damage-roof': 'weekly',
  'hail-damage-roof-repair': 'weekly',
  'roof-leak-repair': 'monthly',
  'roof-repair': 'monthly',
  'roof-replacement': 'monthly',
  'new-roof-installation': 'yearly',
  'metal-roofing': 'yearly',
  'asphalt-shingle-roofing': 'yearly',
  'roof-inspection': 'monthly',
  'gutter-services': 'monthly',
  'roof-vent-installation': 'yearly',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = locations.flatMap((location) =>
    services
      .filter((service) => priorityMap[service.slug])
      .map((service) => ({
        url: `${BASE_URL}/${location.slug}/${service.slug}/`,
        lastModified: new Date('2025-01-01'),
        changeFrequency: changeFreqMap[service.slug],
        priority: priorityMap[service.slug],
      }))
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
     {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
     {
      url: `${BASE_URL}/terms-of-service/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ];

  return [...staticPages, ...servicePages];
}
