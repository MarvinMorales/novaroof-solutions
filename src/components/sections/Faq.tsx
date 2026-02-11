import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { i18n } from "@/lib/data"

type FaqProps = {
  lang: 'en' | 'es';
  location: { city: string };
}

export function Faq({ lang, location }: FaqProps) {
  const t = i18n[lang].faq;
  const faqContent = i18n[lang].faqContent;

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">{t.title(location.city)}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12 space-y-4">
          {faqContent.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.slug} className="rounded-lg border border-border/70 bg-card text-card-foreground shadow-lg overflow-hidden border-b-0">
                <AccordionTrigger className="p-6 text-left text-lg font-medium hover:no-underline bg-card hover:bg-accent/50 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
