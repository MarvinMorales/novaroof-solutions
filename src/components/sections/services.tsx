import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Home, ShieldCheck, Droplets, Zap, Replace } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const servicesData = [
    {
        icon: <Home />,
        title: "Roof Replacement",
        description: "Full roof replacements using high-quality materials like asphalt shingles, metal, and tile for long-lasting protection.",
        imageId: "service-shingle",
        link: "/roof-replacement/houston-tx"
    },
    {
        icon: <Wrench />,
        title: "Roof Repair",
        description: "From minor leaks to missing shingles, we find local pros to handle all types of roof repairs quickly and efficiently.",
        imageId: "service-repair",
        link: "/roof-repair/houston-tx"
    },
    {
        icon: <Zap />,
        title: "Emergency & Storm Damage",
        description: "24/7 emergency services for urgent repairs after a storm, hail, or high winds to secure your home immediately.",
        imageId: "service-storm",
        link: "/emergency-roof-repair/houston-tx"
    },
    {
        icon: <ShieldCheck />,
        title: "Roof Inspection",
        description: "Comprehensive roof inspections to assess the condition of your roof, identify potential issues, and assist with insurance claims.",
        imageId: "service-inspection",
        link: "/roof-repair/houston-tx" // No dedicated inspection page yet
    },
    {
        icon: <Replace />,
        title: "Roof Leak Repair",
        description: "Specialized leak detection and repair to prevent water damage and protect your home's structural integrity.",
        imageId: "service-metal", // Re-using image
        link: "/roof-leak-repair/houston-tx"
    },
    {
        icon: <Droplets />,
        title: "Gutter Services",
        description: "Connect with experts for gutter installation, repair, and cleaning to ensure proper water drainage.",
        imageId: "service-gutter",
        link: "/roof-repair/houston-tx" // No dedicated gutter page yet
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
