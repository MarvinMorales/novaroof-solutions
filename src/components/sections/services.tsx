import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Home, ShieldCheck, Droplets, Zap, Replace } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const servicesData = [
    {
        icon: <Home />,
        title: "Shingle Roof Installation",
        description: "We offer expert installation of asphalt, wood, and other shingle roofs, ensuring beauty and durability.",
        imageId: "service-shingle"
    },
    {
        icon: <Replace />,
        title: "Metal Roof Installation",
        description: "We install modern, durable metal roofs that offer superior longevity and energy efficiency.",
        imageId: "service-metal"
    },
    {
        icon: <Wrench />,
        title: "Roof Repair",
        description: "From minor leaks to major damage, our team quickly repairs your roof to protect your home.",
        imageId: "service-repair"
    },
    {
        icon: <ShieldCheck />,
        title: "Roof Inspection",
        description: "We perform detailed inspections to assess your roof's condition and prevent future problems.",
        imageId: "service-inspection"
    },
    {
        icon: <Droplets />,
        title: "Gutter Services",
        description: "Installation, repair, and cleaning of gutters to ensure proper drainage and protect your home's foundation.",
        imageId: "service-gutter"
    },
    {
        icon: <Zap />,
        title: "Storm Damage Repair",
        description: "Fast and effective assistance to repair damage caused by wind, hail, or other severe weather conditions.",
        imageId: "service-storm"
    },
]

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);


export function Services() {
    return (
        <section id="services" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Roofing Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Complete and professional solutions for any type of roof. We specialize in a wide range of services to keep your home safe and protected.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => {
                        const image = getImage(service.imageId);
                        return (
                            <Card key={service.title} className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
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
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
