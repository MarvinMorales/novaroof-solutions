import { FileText, PhoneCall, Wrench, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "1. Tell Us About Your Project",
        description: "Fill out our simple form with details about your roofing needs, whether it's an emergency repair, a full replacement, or just an inspection."
    },
    {
        icon: <PhoneCall className="h-8 w-8 text-primary" />,
        title: "2. We Connect You With a Pro",
        description: "We instantly match your request with a licensed, insured, and pre-screened roofing contractor in your local area."
    },
    {
        icon: <Wrench className="h-8 w-8 text-primary" />,
        title: "3. Get a Free Inspection & Quote",
        description: "The local roofer will contact you to schedule a free, on-site inspection and provide a detailed, no-obligation quote for the work."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "4. Get The Job Done",
        description: "If you decide to proceed, you'll work directly with the contractor. You get quality work, and they get a new customer. It's a win-win."
    }
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">How It Works</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Finding a trusted roofer has never been easier. Follow our simple, 3-step process to get your project started.
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
