import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/data';
import { domain } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = locations.flatMap((location) =>
    services.map((service) => ({
      url: `https://${domain}/${location.slug}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `https://${domain}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...servicePages, ...staticPages];
}
