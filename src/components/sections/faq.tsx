"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { generateFaqSchema } from "@/lib/schema"
import { useTranslation } from "@/hooks/use-translation";

type FaqItem = {
    question: string;
    answer: string;
};

type FaqProps = {
  faqs?: FaqItem[];
  addSchema?: boolean;
}

export function Faq({ faqs, addSchema = true }: FaqProps) {
    const { t } = useTranslation();

    const defaultFaqs: FaqItem[] = [
        {
            question: t('FAQ.q1'),
            answer: t('FAQ.a1')
        },
        {
            question: t('FAQ.q2'),
            answer: t('FAQ.a2')
        },
        {
            question: t('FAQ.q3'),
            answer: t('FAQ.a3')
        },
        {
            question: t('FAQ.q4'),
            answer: t('FAQ.a4')
        },
        {
            question: t('FAQ.q5'),
            answer: t('FAQ.a5')
        }
    ];

    const faqsToDisplay = faqs || defaultFaqs;

    return (
        <section id="faq" className="w-full py-16 md:py-24 bg-card">
            {addSchema && (
                 <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqsToDisplay)) }}
                />
            )}
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('FAQ.title')}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {t('FAQ.description')}
                    </p>
                </div>
                <div className="max-w-3xl mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {faqsToDisplay.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-left">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
