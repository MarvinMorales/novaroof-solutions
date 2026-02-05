import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Home, ShieldCheck, Droplets, Zap, Replace } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const servicesData = [
    {
        icon: <Home />,
        title: "Roof Replacement",
        description: "Whether your roof is aging or has extensive damage, we connect you with pros for full replacements. Choose from high-quality materials like asphalt shingles, durable metal, or elegant tile for long-lasting protection.",
        imageId: "service-shingle",
        link: "/houston-tx/roof-replacement"
    },
    {
        icon: <Wrench />,
        title: "Roof Repair",
        description: "From missing shingles to damaged flashing, we find local experts to handle all types of roof repairs. Extend the life of your roof by fixing small issues before they become big problems.",
        imageId: "service-repair",
        link: "/houston-tx/roof-repair"
    },
    {
        icon: <Zap />,
        title: "Emergency & Storm Damage",
        description: "When disaster strikes, a fast response is critical. We provide access to 24/7 emergency services for urgent repairs after storms, hail, or high winds to secure your home and prevent further damage.",
        imageId: "service-storm",
        link: "/houston-tx/emergency-roof-repair"
    },
    {
        icon: <ShieldCheck />,
        title: "Roof Inspection",
        description: "Get a professional assessment of your roof's condition. We connect you with experts who can identify potential issues, estimate remaining lifespan, and document damage for insurance claims.",
        imageId: "service-inspection",
        link: "/houston-tx/roof-repair" 
    },
    {
        icon: <Replace />,
        title: "Roof Leak Repair",
        description: "Our network specializes in advanced leak detection and reliable repairs to protect your home's structure and interior. Stop water damage and prevent mold growth with a permanent fix.",
        imageId: "service-metal", 
        link: "/houston-tx/roof-leak-repair"
    },
    {
        icon: <Droplets />,
        title: "Gutter Services",
        description: "Proper water drainage is essential. We connect you with experts for seamless gutter installation, repairs, cleaning, and gutter guard installation to protect your roof and foundation.",
        imageId: "service-gutter",
        link: "/houston-tx/roof-repair"
    },
]

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);


export function Services() {
    return (
        <section id="services" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Comprehensive Roofing Solutions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Whatever your roofing needs, we connect you with the right professionals for the job. Explore our most requested services.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => {
                        const image = getImage(service.imageId);
                        return (
                            <Link href={service.link} key={service.title} className="flex">
                                <Card className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300 w-full">
                                    {image && (
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
                                    )}
                                    <CardHeader className="flex-row items-center gap-4">
                                        <div className="bg-primary text-primary-foreground p-3 rounded-md">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground text-sm">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
