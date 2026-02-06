'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import Head from 'next/head';
import { useTranslation } from '@/hooks/use-translation';
import { Hero } from '@/components/sections/hero';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');
const whyUsImage = PlaceHolderImages.find(img => img.id === 'process-final-cleanup');


const values = [
  {
    icon: ShieldCheck,
    titleKey: 'value1Title',
    descriptionKey: 'value1Desc'
  },
  {
    icon: TrendingUp,
    titleKey: 'value2Title',
    descriptionKey: 'value2Desc'
  },
  {
    icon: Users,
    titleKey: 'value3Title',
    descriptionKey: 'value3Desc'
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
        <Hero
            h1={t('AboutPage.title')}
            subheading={t('AboutPage.subtitle')}
            size="small"
            showButtons={false}
            variant="solid"
        />

        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-semibold tracking-tighter">{t('AboutPage.storyTitle')}</h2>
              <p className="text-muted-foreground">
                {t('AboutPage.storyText1')}
              </p>
              <p className="text-muted-foreground">
                {t('AboutPage.storyText2')}
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
        
        <section className="bg-muted/50">
            <div className="container py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">{t('AboutPage.visionTitle')}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    {t('AboutPage.visionText')}
                </p>
                </div>
            </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="md:order-2">
                <h2 className="font-headline text-3xl font-semibold tracking-tighter">{t('AboutPage.whyUsTitle')}</h2>
                <p className="mt-4 text-muted-foreground">
                    {t('AboutPage.whyUsText')}
                </p>
                <div className="mt-6 space-y-4">
                    {values.map((value) => (
                        <div key={value.titleKey} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <value.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{t(`AboutPage.${value.titleKey}`)}</h3>
                                <p className="text-muted-foreground text-sm">{t(`AboutPage.${value.descriptionKey}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:order-1">
              {whyUsImage && (
                <Image
                  src={whyUsImage.imageUrl}
                  alt={whyUsImage.description}
                  data-ai-hint={whyUsImage.imageHint}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                />
              )}
            </div>
          </div>
        </section>

        <section className="bg-muted/50">
          <div className="container py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('AboutPage.processTitle')}</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t('AboutPage.processSubtitle')}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4 font-bold text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{t(`AboutPage.processStep${index + 1}Title`)}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{t(`AboutPage.processStep${index + 1}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

    