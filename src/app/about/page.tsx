'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, BookOpen, ClipboardCheck, MapPin, Shield, Shuffle, Users } from 'lucide-react';
import Head from 'next/head';
import { useTranslation } from '@/hooks/use-translation';
import { Hero } from '@/components/sections/hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');
const differenceImage = PlaceHolderImages.find(img => img.id === 'why-us-quality');


const philosophy = [
  {
    icon: Users,
    titleKey: 'philosophy1Title',
    descriptionKey: 'philosophy1Desc'
  },
  {
    icon: MapPin,
    titleKey: 'philosophy2Title',
    descriptionKey: 'philosophy2Desc'
  },
  {
    icon: Award,
    titleKey: 'philosophy3Title',
    descriptionKey: 'philosophy3Desc'
  }
];

const differencePoints = [
    {
      icon: ClipboardCheck,
      titleKey: 'difference1Title',
      descriptionKey: 'difference1Desc'
    },
    {
      icon: Shuffle,
      titleKey: 'difference2Title',
      descriptionKey: 'difference2Desc'
    },
    {
      icon: Shield,
      titleKey: 'difference3Title',
      descriptionKey: 'difference3Desc'
    },
    {
      icon: BookOpen,
      titleKey: 'difference4Title',
      descriptionKey: 'difference4Desc'
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
                <img
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-lg shadow-lg object-cover aspect-[4/3] w-full"
                />
              )}
            </div>
          </div>
        </section>
        
        <section className="bg-muted/50">
            <div className="container py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">{t('AboutPage.philosophyTitle')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t('AboutPage.philosophySubtitle')}
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {philosophy.map((item) => (
                        <div key={item.titleKey} className="text-center p-6 bg-card rounded-lg shadow-sm">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">{t(`AboutPage.${item.titleKey}`)}</h3>
                            <p className="mt-2 text-muted-foreground text-sm">{t(`AboutPage.${item.descriptionKey}`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="md:order-2">
                <h2 className="font-headline text-3xl font-semibold tracking-tighter">{t('AboutPage.differenceTitle')}</h2>
                <p className="mt-4 text-muted-foreground">
                    {t('AboutPage.differenceSubtitle')}
                </p>
                <div className="mt-6 space-y-4">
                    {differencePoints.map((point) => (
                        <div key={point.titleKey} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <point.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{t(`AboutPage.${point.titleKey}`)}</h3>
                                <p className="text-muted-foreground text-sm">{t(`AboutPage.${point.descriptionKey}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:order-1">
              {differenceImage && (
                <img
                  src={differenceImage.imageUrl}
                  alt={differenceImage.description}
                  data-ai-hint={differenceImage.imageHint}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="rounded-lg shadow-lg object-cover aspect-[4/3] w-full"
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

        <section className="container py-16 md:py-24 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('AboutPage.commitmentTitle')}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    {t('AboutPage.commitmentText')}
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/#contact">{t('Header.getQuote')}</Link>
                </Button>
            </div>
        </section>
      </div>
    </>
  );
}
