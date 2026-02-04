import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { generateFaqSchema } from "@/lib/schema"

const defaultFaqs = [
    {
        question: "How does your service work?",
        answer: "It's simple. You fill out our form with details about your roofing needs. We then match you with a qualified, licensed, and insured roofing contractor in your local area who will contact you to provide a free, no-obligation quote."
    },
    {
        question: "Is this service free for homeowners?",
        answer: "Yes, our service is 100% free for homeowners. We are compensated by the contractors in our network."
    },
    {
        question: "Are the roofing contractors licensed and insured?",
        answer: "Absolutely. We only partner with professional roofing companies that are fully licensed and insured in their respective states. We verify their credentials to ensure you're connected with reputable pros."
    },
    {
        question: "What kind of roofing services can I request?",
        answer: "You can request a wide range of services, including emergency roof repair, full roof replacement, storm damage assessment, leak repairs, new roof installation, and routine inspections."
    },
    {
        question: "Am I obligated to hire the contractor you connect me with?",
        answer: "No, not at all. You are under no obligation to hire any contractor we connect you with. We recommend getting multiple quotes to make the best decision for your home and budget."
    }
]

type FaqProps = {
  faqs?: { question: string; answer: string }[];
  addSchema?: boolean;
}

export function Faq({ faqs = defaultFaqs, addSchema = true }: FaqProps) {
    return (
        <section id="faq" className="w-full py-16 md:py-24 bg-card">
            {addSchema && (
                 <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
                />
            )}
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Your questions about finding the right roofer, answered.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
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
