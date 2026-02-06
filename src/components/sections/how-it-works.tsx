"use client";

import { FileText, PhoneCall, Wrench, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function HowItWorks() {
    const { t } = useTranslation();

    const steps = [
        {
            icon: <FileText className="h-8 w-8 text-primary" />,
            title: t('HowItWorks.step1.title'),
            description: t('HowItWorks.step1.description')
        },
        {
            icon: <PhoneCall className="h-8 w-8 text-primary" />,
            title: t('HowItWorks.step2.title'),
            description: t('HowItWorks.step2.description')
        },
        {
            icon: <Wrench className="h-8 w-8 text-primary" />,
            title: t('HowItWorks.step3.title'),
            description: t('HowItWorks.step3.description')
        },
        {
            icon: <CheckCircle className="h-8 w-8 text-primary" />,
            title: t('HowItWorks.step4.title'),
            description: t('HowItWorks.step4.description')
        }
    ]

    return (
        <section id="how-it-works" className="w-full py-20 md:py-28">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('HowItWorks.title')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t('HowItWorks.description')}
                    </p>
                </div>
                 <div className="relative mt-12">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" aria-hidden="true"></div>
                    <div className="grid md:grid-cols-4 gap-8 md:gap-12 relative">
                        {steps.map(step => (
                            <div key={step.title} className="flex items-start gap-4 md:flex-col md:items-center">
                                <div className="flex-shrink-0 mt-1 md:mt-0 bg-background border-2 border-border p-2 rounded-full z-10">
                                    <div className='bg-primary/10 rounded-full p-3'>
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="md:mt-4">
                                    <h3 className="font-headline text-xl font-semibold md:text-center">{step.title}</h3>
                                    <p className="text-muted-foreground mt-1">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
