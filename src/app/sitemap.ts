import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/locations';

const URL = 'https://www.usaroofpros.com'; // IMPORTANT: Replace with your production domain

const priorityMap: { [key: string]: number } = {
  'emergency-roof-repair': 1.0,
  'storm-damage-roof': 0.9,
  'roof-leak-repair': 0.9,
  'roof-repair': 0.8,
  'roof-replacement': 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = locations.flatMap((location) =>
    services.map((service) => ({
      url: `${URL}/${service.slug}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: priorityMap[service.slug] || 0.5,
    }))
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...staticPages, ...servicePages];
}
