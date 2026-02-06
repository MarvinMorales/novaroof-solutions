import { LocationData, services as serviceData } from "./locations";

type FAQ = {
  question: string;
  answer: string;
};

type Breadcrumb = {
  name: string;
  item: string;
}

export const generateOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NovaRoof Solutions",
        "url": "https://www.novaroofsolutions.com",
        "logo": "https://www.novaroofsolutions.com/icon.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-562-317-7925",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": "en"
        },
        "sameAs": []
    };
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

export const generateBreadcrumbSchema = (crumbs: Breadcrumb[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.item
        }))
    }
}

export const generateLocalBusinessSchema = (location: LocationData, service: typeof serviceData[0]) => {
  const url = `https://www.novaroofsolutions.com/${location.slug}/${service.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.novaroofsolutions.com/#organization",
        "name": "NovaRoof Solutions",
        "description": `NovaRoof Solutions is a marketing and referral service that connects homeowners with pre-screened, licensed, and insured local roofing contractors in ${location.city}, ${location.state}. We do not perform roofing work ourselves.`,
        "telephone": "+1-562-317-7925",
        "url": "https://www.novaroofsolutions.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": location.city,
            "addressRegion": location.stateCode
        },
        "areaServed": {
            "@type": "City",
            "name": location.city,
        },
    },
    "areaServed": {
        "@type": "City",
        "name": location.city
    },
    "name": `${service.title} in ${location.city}`,
    "description": service.description.replace('{city}', location.city).replace('{state}', location.state),
    "providerMobility": "dynamic"
  };
};
