import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, Award, ShieldCheck, Clock } from 'lucide-react';

const whyUsImage = PlaceHolderImages.find(img => img.id === 'why-us-quality');

const features = [
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Premium Quality Materials",
        description: "We only use materials from the most reputable manufacturers, ensuring your roof is durable, resistant, and aesthetically pleasing."
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Proven Experience",
        description: "With over a decade in the industry, our team of certified experts has the knowledge to handle any roofing challenge."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Satisfaction Guarantee",
        description: "We stand behind our work with solid warranties. Your peace of mind is our priority, and we're not satisfied until you are."
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Punctuality and Professionalism",
        description: "We respect your time and property. We meet agreed-upon deadlines and maintain a clean and safe work area at all times."
    }
]

export function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose NovaRoof Solutions?</h2>
                        <p className="text-lg text-muted-foreground">
                            When you choose NovaRoof, you're not just getting a new roof. You're investing in peace of mind, security, and unparalleled customer service.
                        </p>
                        <div className="space-y-6 pt-4">
                            {features.map(feature => (
                                <div key={feature.title} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                                        <p className="text-muted-foreground mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="lg:block hidden">
                        {whyUsImage && (
                            <Image
                                src={whyUsImage.imageUrl}
                                alt={whyUsImage.description}
                                data-ai-hint={whyUsImage.imageHint}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg object-cover aspect-[4/3] w-full"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
