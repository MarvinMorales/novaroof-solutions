'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Head from 'next/head';
import { useTranslation } from '@/hooks/use-translation';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');

const values = [
  {
    titleKey: 'value1Title',
    descriptionKey: 'value1Desc'
  },
  {
    titleKey: 'value2Title',
    descriptionKey: 'value2Desc'
  },
  {
    titleKey: 'value3Title',
    descriptionKey: 'value3Desc'
  },
  {
    titleKey: 'value4Title',
    descriptionKey: 'value4Desc'
  }
];

export default function AboutPage() {
  const { t } = useTranslation();
  const pageTitle = t('AboutPage.meta.title');
  const pageDescription = t('AboutPage.meta.description');
  const ogImageUrl = 'https://images.unsplash.com/photo-1509453721491-c3af5961df76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb25zdHJ1Y3Rpb24lMjB0ZWFtfGVufDB8fHx8MTc2NTM3NjQ5OXww&ixlib=rb-4.1.0&q=80&w=1200';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <div className="bg-background">
        <section className="container py-16 md:py-24 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">{t('AboutPage.title')}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {t('AboutPage.subtitle')}
          </p>
        </section>

        <section className="container pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-semibold">{t('AboutPage.missionTitle')}</h2>
              <p className="text-muted-foreground">
                {t('AboutPage.missionText1')}
              </p>
              <p className="text-muted-foreground">
                {t('AboutPage.missionText2')}
              </p>
              <h2 className="font-headline text-3xl font-semibold mt-8">{t('AboutPage.howWeHelpTitle')}</h2>
              <p className="text-muted-foreground">
                {t('AboutPage.howWeHelpText')}
              </p>
            </div>
            <div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                />
              )}
            </div>
          </div>
        </section>
        
        <section className="bg-card">
          <div className="container py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('AboutPage.principlesTitle')}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t('AboutPage.principlesSubtitle')}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.titleKey} className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{t(`AboutPage.${value.titleKey}`)}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{t(`AboutPage.${value.descriptionKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
