import { LocationData, services } from "./locations";

type FAQ = {
  question: string;
  answer: string;
};

export const generateFaqSchema = (faqs: FAQ[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateLocalBusinessSchema = (location: LocationData, service: typeof services[0]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
        "@type": "LocalBusiness",
        name: "USA Roof Pros",
        description: `A referral service connecting homeowners with licensed roofing contractors in ${location.city}, ${location.state}.`,
        telephone: "+1-888-555-7663",
        areaServed: {
            "@type": "City",
            name: location.city,
        },
    },
    areaServed: {
        "@type": "City",
        name: location.city
    },
    "providerMobility": "dynamic"
  };
};
