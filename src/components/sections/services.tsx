"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Wrench, Home, ShieldCheck, Droplets, Zap, Eye, Mountain } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslation } from "@/hooks/use-translation";

const servicesData = [
    {
        icon: <Home />,
        titleKey: "roof-replacement",
        imageId: "service-shingle",
        slug: "roof-replacement"
    },
    {
        icon: <Wrench />,
        titleKey: "roof-repair",
        imageId: "service-repair",
        slug: "roof-repair"
    },
    {
        icon: <Zap />,
        titleKey: "emergency-roof-repair",
        imageId: "service-storm",
        slug: "emergency-roof-repair"
    },
    {
        icon: <Eye />,
        titleKey: "roof-inspection",
        imageId: "service-inspection",
        slug: "roof-inspection" 
    },
    {
        icon: <ShieldCheck />,
        titleKey: "roof-leak-repair",
        imageId: "solution-leak-repair", 
        slug: "roof-leak-repair"
    },
    {
        icon: <Droplets />,
        titleKey: "gutter-services",
        imageId: "service-gutter",
        slug: "gutter-services"
    },
    {
        icon: <Mountain />,
        titleKey: "metal-roofing",
        imageId: "service-metal",
        slug: "metal-roofing"
    },
];

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

type ServicesProps = {
    locationSlug?: string;
    title?: string;
    excludeSlug?: string;
}

export function Services({ locationSlug, title, excludeSlug }: ServicesProps) {
    const { t } = useTranslation();

    const servicesToDisplay = excludeSlug 
        ? servicesData.filter(s => s.slug !== excludeSlug)
        : servicesData;
    
    const defaultTitle = t('ServicesSection.title');
    const finalTitle = title || defaultTitle;
    
    const subtitle = excludeSlug 
        ? t('ServicesSection.subtitleExcluded')
        : t('ServicesSection.subtitle');

    return (
        <section id="services" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">{finalTitle}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {subtitle}
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesToDisplay.map((service) => {
                        const image = getImage(service.imageId);
                        const link = locationSlug ? `/${locationSlug}/${service.slug}/` : `/service/${service.slug}/`;
                        const serviceTitle = t(`Services.${service.titleKey}.title`);
                        const serviceDescription = t(`Services.${service.titleKey}.description`);

                        return (
                            <Card key={service.titleKey} className="flex flex-col overflow-hidden group transition-shadow duration-300 w-full hover:shadow-xl bg-card">
                                {image && (
                                    <Link href={link} className="overflow-hidden block">
                                        <div className="overflow-hidden">
                                            <Image 
                                                src={image.imageUrl}
                                                alt={image.description}
                                                data-ai-hint={image.imageHint}
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </Link>
                                )}
                                <CardHeader className="flex-row items-start gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-md mt-1 shrink-0">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <CardTitle className="font-headline text-xl">
                                             <Link href={link} className="hover:text-primary transition-colors duration-300">
                                                {serviceTitle}
                                            </Link>
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{serviceDescription}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant="secondary">
                                        <Link href={link}>{t('ServicesSection.learnMore')}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

    