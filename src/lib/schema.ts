import type { Location, Service } from "./data";
import { phoneNumber } from "./env";

/**
 * Generates a LocalBusiness and Service schema for a specific landing page.
 * This is crucial for local SEO, telling Google exactly what service is offered and where.
 */
export const generatePageSchema = (location: Location, service: Service) => {
  const url = `https://www.novaroofsolutions.com/${location.slug}/${service.slug}/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "NovaRoof Solutions",
        "description": `We connect homeowners with licensed, local roofing contractors in ${location.city}, ${location.state} for ${service.name} and more.`,
        "telephone": phoneNumber,
        "url": "https://www.novaroofsolutions.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressRegion": location.stateCode,
          "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": location.city
        },
        "priceRange": "$$",
      },
      {
        "@type": "Service",
        "serviceType": service.name,
        "provider": {
          "@type": "LocalBusiness",
          "@id": url // Link to the LocalBusiness schema
        },
        "areaServed": {
          "@type": "City",
          "name": location.city
        },
        "name": `${service.name} in ${location.city}`,
        "description": service.description,
      }
    ]
  };
};
