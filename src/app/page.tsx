"use client";

import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { generateOrganizationSchema } from '@/lib/schema';
import { useTranslation } from '@/hooks/use-translation';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation();

  const pageTitle = t('HomePage.meta.title');
  const pageDescription = t('HomePage.meta.description');
  const ogImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmb3JtJTIwaG91c2V8ZW58MHx8fHwxNzE3NzgwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1200';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <Hero subheading={t('HomePage.hero.subheading')} />
      <HowItWorks />
      <Services />
      <Faq />
      <Testimonials />
      <Contact />
    </>
  );
}
