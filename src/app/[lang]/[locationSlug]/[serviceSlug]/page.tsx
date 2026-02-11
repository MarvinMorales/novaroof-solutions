import { locations, services, i18n } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from '@/components/sections/ContactForm';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { LogoCloud } from '@/components/sections/LogoCloud';
import { Faq } from '@/components/sections/Faq';

type Props = {
  params: {
    lang: 'en' | 'es';
    locationSlug: string;
    serviceSlug: string;
  };
};

export async function generateStaticParams() {
  const params = [];
  const languages: ('en' | 'es')[] = ['en', 'es'];
  for (const lang of languages) {
    for (const location of locations) {
      for (const service of services) {
        params.push({
          lang,
          locationSlug: location.slug,
          serviceSlug: service.slug,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang;
  const t = i18n[lang];

  const location = locations.find(l => l.slug === params.locationSlug);
  const serviceBase = services.find(s => s.slug === params.serviceSlug);
  const serviceT = t.services.find(s => s.slug === params.serviceSlug);

  if (!location || !serviceBase || !serviceT) {
    const title = lang === 'es' ? 'No Encontrado' : 'Not Found';
    const description = lang === 'es' ? 'La página que buscas no existe.' : 'The page you are looking for does not exist.';
    return { title, description };
  }

  const service = { ...serviceBase, ...serviceT };

  const title = `${service.title} in ${location.city}, ${location.state} | Novaroof Solutions`;
  const description = lang === 'es'
    ? `¿Necesitas un experto en ${service.title} en ${location.city}, ${location.state}? Novaroof Solutions ofrece servicios de techado rápidos, confiables y profesionales. Ya sea que enfrentes daños por tormenta, goteras o necesites un reemplazo completo, nuestros contratistas certificados están listos 24/7. Ofrecemos presupuestos gratuitos y sin compromiso.`
    : `Need expert ${service.title} in ${location.city}, ${location.state}? Novaroof Solutions offers fast, reliable, and professional roofing services. Whether you're dealing with storm damage, leaks, or need a full replacement, our certified contractors are ready 24/7. We provide free, no-obligation estimates.`;

  const url = `/${params.lang}/${params.locationSlug}/${params.serviceSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: service.image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.image],
    },
  };
}


export default function LocalServicePage({ params }: Props) {
  const { lang, locationSlug, serviceSlug } = params;
  const location = locations.find(l => l.slug === locationSlug);
  
  const serviceBase = services.find(s => s.slug === serviceSlug);
  const serviceT = i18n[lang].services.find(s => s.slug === serviceSlug);

  if (!location || !serviceBase || !serviceT) {
    notFound();
  }

  const service = { ...serviceBase, ...serviceT };

  return (
    <>
      <Hero lang={lang} location={location} service={service} />
      <LogoCloud lang={lang} />
      <Services lang={lang} location={location} />
      <WhyChooseUs lang={lang} location={location} />
      <Testimonials lang={lang} location={location} />
      <Faq lang={lang} location={location} />
      <CtaBanner lang={lang} location={location} />
      <ContactForm lang={lang} />
    </>
  );
}
