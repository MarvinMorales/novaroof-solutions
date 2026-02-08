import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/data';

// This function generates the sitemap dynamically based on the cities and services.
export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://www.yourdomain.com'; // Replace with your actual domain

  const servicePages: MetadataRoute.Sitemap = locations.flatMap((location) =>
    services.map((service) => ({
      url: `${BASE_URL}/${location.slug}/${service.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }))
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...staticPages, ...servicePages];
}
