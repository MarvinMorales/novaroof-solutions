import { MetadataRoute } from 'next';
import { locations, services, domain, i18n } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['en', 'es'];
  
  const servicePages = languages.flatMap((lang) =>
    locations.flatMap((location) =>
      services.map((service) => ({
        url: `https://${domain}/${lang}/${location.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }))
    )
  );

  const staticPages: MetadataRoute.Sitemap = languages.flatMap((lang) => [
    {
      url: `https://${domain}/${lang}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]);

  return [...servicePages, ...staticPages];
}
