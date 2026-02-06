import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.novaroofsolutions.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/thank-you/',
          '/api/',
          '/*?*',
          '/*&*',
        ],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/thank-you/',
          '/api/',
          '/*?*',
          '/*&*',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
