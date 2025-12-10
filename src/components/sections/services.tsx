import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Home, ShieldCheck, Droplets, Zap, Replace } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const servicesData = [
    {
        icon: <Home />,
        title: "Instalación de Techos de Tejas",
        description: "Ofrecemos instalación experta de techos de tejas asfálticas, de madera, y de otros materiales, garantizando belleza y durabilidad.",
        imageId: "service-shingle"
    },
    {
        icon: <Replace />,
        title: "Instalación de Techos de Metal",
        description: "Instalamos techos de metal modernos y resistentes que ofrecen una longevidad superior y eficiencia energética.",
        imageId: "service-metal"
    },
    {
        icon: <Wrench />,
        title: "Reparación de Techos",
        description: "Desde goteras menores hasta daños importantes, nuestro equipo repara su techo rápidamente para proteger su hogar.",
        imageId: "service-repair"
    },
    {
        icon: <ShieldCheck />,
        title: "Inspección de Techos",
        description: "Realizamos inspecciones detalladas para evaluar la condición de su techo y prevenir problemas futuros.",
        imageId: "service-inspection"
    },
    {
        icon: <Droplets />,
        title: "Servicios de Canalones",
        description: "Instalación, reparación y limpieza de canalones para asegurar un drenaje adecuado y proteger los cimientos de su casa.",
        imageId: "service-gutter"
    },
    {
        icon: <Zap />,
        title: "Reparación de Daños por Tormenta",
        description: "Asistencia rápida y eficaz para reparar daños causados por viento, granizo u otras condiciones climáticas severas.",
        imageId: "service-storm"
    },
]

const getImage = (id: string) => PlaceHolderImages.find(p => p.id === id);


export function Services() {
    return (
        <section id="services" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Nuestros Servicios de Techado</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Soluciones completas y profesionales para cualquier tipo de techo. Nos especializamos en una amplia gama de servicios para mantener su hogar seguro y protegido.
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
