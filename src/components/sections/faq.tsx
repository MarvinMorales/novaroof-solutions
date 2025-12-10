import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How long does a roof replacement take?",
        answer: "A typical residential roof replacement can take anywhere from 1 to 3 days, depending on the size of the roof, the materials being used, and the weather conditions. We work efficiently to minimize disruption to your daily life."
    },
    {
        question: "How do I know if I need a roof repair or a full replacement?",
        answer: "It depends on the age of your roof and the extent of the damage. Small leaks or a few missing shingles can often be repaired. However, if your roof is over 20 years old, has widespread damage, or shows signs of sagging, a replacement is likely the safer and more cost-effective option in the long run. We offer a free inspection to help you make the best decision."
    },
    {
        question: "What roofing materials do you offer?",
        answer: "We offer a wide variety of roofing materials to suit different styles and budgets, including asphalt shingles, metal roofing, wood shakes, and more. We can help you choose the best material for your home's architecture and your specific needs."
    },
    {
        question: "Do you offer a warranty on your work?",
        answer: "Yes, absolutely. We stand behind our workmanship with a comprehensive labor warranty, in addition to the manufacturer's warranty on the materials used. Your complete satisfaction and peace of mind are our top priorities."
    },
    {
        question: "How much does a new roof cost?",
        answer: "The cost of a new roof varies greatly depending on factors like the size and slope of your roof, the materials you choose, and the complexity of the job. We provide a detailed, transparent, and free estimate after a thorough inspection of your property."
    }
]

export function Faq() {
    return (
        <section id="faq" className="w-full py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have questions? We have answers. Here are some of the most common questions we receive about our roofing services.
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
