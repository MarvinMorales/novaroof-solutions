import { MetadataRoute } from 'next';
import { locations, services } from '@/lib/locations';

export const dynamic = 'force-static';

const URL = 'https://www.novaroofsolutions.com';

const priorityMap: Record<string, number> = {
  'emergency-roof-repair': 1.0,
  'storm-damage-roof': 0.9,
  'hail-damage-roof-repair': 0.9,
  'roof-leak-repair': 0.9,
  'roof-repair': 0.8,
  'roof-replacement': 0.7,
  'new-roof-installation': 0.7,
  'asphalt-shingle-roofing': 0.6,
  'metal-roofing': 0.7,
  'roof-inspection': 0.7,
  'gutter-services': 0.6,
  'roof-vent-installation': 0.5,
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
  'roof-replacement': 'yearly',
  'new-roof-installation': 'yearly',
  'asphalt-shingle-roofing': 'yearly',
  'metal-roofing': 'yearly',
  'roof-inspection': 'monthly',
  'gutter-services': 'monthly',
  'roof-vent-installation': 'yearly',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = locations
    .flatMap((location) =>
      services
        .filter((service) => priorityMap[service.slug])
        .map((service) => ({
          url: `${URL}/${location.slug}/${service.slug}/`,
          lastModified: new Date(),
          changeFrequency: changeFreqMap[service.slug],
          priority: priorityMap[service.slug],
        }))
    );
  
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${URL}/${location.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL}/about/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${URL}/privacy-policy/`, priority: 0.1, changeFrequency: 'yearly', lastModified: new Date() },
    { url: `${URL}/cookie-policy/`, priority: 0.1, changeFrequency: 'yearly', lastModified: new Date() },
    { url: `${URL}/terms-of-service/`, priority: 0.1, changeFrequency: 'yearly', lastModified: new Date() },
  ];


  return [...staticPages, ...locationPages, ...servicePages, ...legalPages];
}

    
    