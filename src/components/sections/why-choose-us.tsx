import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, Award, ShieldCheck, Clock } from 'lucide-react';

const whyUsImage = PlaceHolderImages.find(img => img.id === 'why-us-quality');

const features = [
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Materiales de Primera Calidad",
        description: "Solo utilizamos materiales de los fabricantes más reputados, asegurando que su techo sea duradero, resistente y estéticamente agradable."
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Experiencia Comprobada",
        description: "Con más de una década en la industria, nuestro equipo de expertos certificados tiene el conocimiento para manejar cualquier desafío de techado."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Garantía de Satisfacción",
        description: "Respaldamos nuestro trabajo con garantías sólidas. Su tranquilidad es nuestra prioridad, y no estamos satisfechos hasta que usted lo esté."
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Puntualidad y Profesionalismo",
        description: "Respetamos su tiempo y su propiedad. Cumplimos con los plazos acordados y mantenemos un área de trabajo limpia y segura en todo momento."
    }
]

export function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="w-full py-16 md:py-24">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Por Qué Elegir NovaRoof Solutions?</h2>
                        <p className="text-lg text-muted-foreground">
                            Cuando elige NovaRoof, no solo está obteniendo un techo nuevo. Está invirtiendo en tranquilidad, seguridad y un servicio al cliente sin igual.
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
