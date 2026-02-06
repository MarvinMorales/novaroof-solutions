import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.novaroofsolutions.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 🔎 GOOGLEBOT (prioridad SEO)
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/thank-you',
          '/api',
          '/*?*',          // bloquea parámetros
          '/*&*',
        ],
      },

      // 🤖 OTROS BOTS
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/thank-you',
          '/api',
          '/*?*',
          '/*&*',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
