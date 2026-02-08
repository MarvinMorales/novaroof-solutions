import { MetadataRoute } from 'next';

// This is a static file and can be configured as needed.
// For a lead generation site, allowing all crawlers is standard.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.yourdomain.com/sitemap.xml', // Replace with your actual domain
  };
}
