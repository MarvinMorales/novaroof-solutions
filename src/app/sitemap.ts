import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/locations';

const URL = 'https://www.novaroofsolutions.com';

const priorityMap: Record<string, number> = {
  'emergency-roof-repair': 1.0,
  'storm-damage-roof': 0.9,
  'roof-leak-repair': 0.9,
  'roof-repair': 0.8,
  'roof-replacement': 0.7,
};

const changeFreqMap: Record<string, MetadataRoute.Sitemap[number]['changeFrequency']> = {
  'emergency-roof-repair': 'weekly',
  'storm-damage-roof': 'weekly',
  'roof-leak-repair': 'monthly',
  'roof-repair': 'monthly',
  'roof-replacement': 'yearly',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = locations.flatMap((location) =>
    services
      .filter((service) => priorityMap[service.slug]) // allowlist SEO pages only
      .map((service) => ({
        url: `${URL}/${service.slug}/${location.slug}`,
        lastModified: location.updatedAt
          ? new Date(location.updatedAt)
          : new Date('2025-01-01'),
        changeFrequency: changeFreqMap[service.slug],
        priority: priorityMap[service.slug],
      }))
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];

  return [...staticPages, ...servicePages];
}
