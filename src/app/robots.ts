import { MetadataRoute } from 'next';
import { domain } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${domain}/sitemap.xml`,
  };
}
