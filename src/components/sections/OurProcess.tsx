import { Check, ClipboardList, FileText, Search, Wrench } from 'lucide-react';

const processSteps = [
    {
        icon: Search,
        title: "Free Roof Inspection",
        description: "We start with a comprehensive, no-cost inspection to identify all issues."
    },
    {
        icon: ClipboardList,
        title: "Damage Assessment",
        description: "Our experts document all findings and assess the extent of the damage."
    },
    {
        icon: FileText,
        title: "Transparent Estimate",
        description: "You receive a clear, detailed estimate with no hidden fees."
    },
    {
        icon: Wrench,
        title: "Professional Repair",
        description: "Our certified team carries out the repair using high-quality materials."
    },
    {
        icon: Check,
        title: "Final Quality Check",
        description: "We conduct a final walkthrough to ensure the repair meets our high standards."
    }
];


export function OurProcess() {
    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Our Roof Repair Process</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We follow a systematic process to ensure every Houston roof repair is handled professionally from start to finish.
                    </p>
                </div>
                <div className="mt-12 space-y-8">
                   {processSteps.map((step, index) => (
                       <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                           <div className="flex items-center gap-4">
                               <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center">
                                   <step.icon className="h-6 w-6" />
                               </div>
                           </div>
                           <div>
                                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                           </div>
                       </div>
                   ))}
                </div>
            </div>
        </section>
    );
}
