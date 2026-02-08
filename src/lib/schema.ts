import type { Location, Service } from "./data";
import { phoneNumber } from "./env";

/**
 * Generates a LocalBusiness and Service schema for a specific landing page.
 * This is crucial for local SEO, telling Google exactly what service is offered and where.
 */
export const generatePageSchema = (location: Location, service: Service) => {
  const url = `https://www.yourdomain.com/${location.slug}/${service.slug}/`; // Replace with your actual domain

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Local Roofing Quotes",
        "description": `We connect homeowners with licensed, local roofing contractors in ${location.city}, ${location.state} for ${service.name}.`,
        "telephone": phoneNumber,
        "url": "https://www.yourdomain.com", // Replace with your actual domain
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location.city,
          "addressRegion": location.stateCode,
          "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": location.city
        }
      },
      {
        "@type": "Service",
        "serviceType": service.name,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Local Roofing Quotes"
        },
        "areaServed": {
          "@type": "City",
          "name": location.city
        },
        "name": `${service.name} in ${location.city}`,
        "description": `Get 24/7 service for ${service.name.toLowerCase()} in ${location.city}. We connect you with local, licensed, and insured roofing professionals for a fast, free quote.`,
      }
    ]
  };
};
