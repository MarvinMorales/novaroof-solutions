import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.novaroofsolutions.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        disallow: [
          '/thank-you/',
          '/api/',
        ],
      },
      {
        userAgent: '*',
        disallow: [
          '/thank-you/',
          '/api/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
