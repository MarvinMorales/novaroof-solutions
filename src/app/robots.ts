import { MetadataRoute } from 'next';

const URL = 'https://www.novaroofsolutions.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
