import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/locations';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.novaroofsolutions.com';

// 🔥 Prioridad basada en intención comercial real
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
  // 🔥 /location/service (páginas que generan dinero)
  const servicePages: MetadataRoute.Sitemap = locations.flatMap((location) =>
    services
      .filter((service) => priorityMap[service.slug])
      .map((service) => ({
        url: `${BASE_URL}/${location.slug}/${service.slug}/`,
        lastModified: location.updatedAt
          ? new Date(location.updatedAt)
          : new Date('2025-01-01'),
        changeFrequency: changeFreqMap[service.slug],
        priority: priorityMap[service.slug],
      }))
  );

  // 🏙️ /location (hub pages)
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${BASE_URL}/${location.slug}/`,
    lastModified: location.updatedAt
      ? new Date(location.updatedAt)
      : new Date('2025-01-01'),
    changeFrequency: 'monthly',
    priority: 0.3,
  }));

  // 🏠 Páginas estáticas clave
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  return [...staticPages, ...locationPages, ...servicePages];
}
