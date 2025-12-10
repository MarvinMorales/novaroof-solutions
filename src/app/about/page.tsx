import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conozca la historia, misión y el equipo experto detrás de NovaRoof Solutions LLC, su socio de confianza en soluciones de techado.',
};

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');

const values = [
  {
    title: 'Calidad Insuperable',
    description: 'Utilizamos solo los mejores materiales y las técnicas más avanzadas para garantizar un techo duradero y resistente.'
  },
  {
    title: 'Integridad y Honestidad',
    description: 'Creemos en la transparencia total. Ofrecemos precios justos, presupuestos claros y una comunicación honesta en cada paso del proceso.'
  },
  {
    title: 'La Seguridad es Primero',
    description: 'Cumplimos con los más altos estándares de seguridad para proteger a nuestro equipo, su familia y su propiedad durante todo el proyecto.'
  },
  {
    title: 'Satisfacción del Cliente',
    description: 'Su satisfacción es nuestra máxima prioridad. No consideramos un trabajo terminado hasta que usted esté 100% satisfecho con el resultado.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="container py-16 md:py-24 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">Sobre NovaRoof Solutions LLC</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Construyendo confianza desde las alturas, un techo a la vez.
        </p>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-semibold">Nuestra Historia</h2>
            <p className="text-muted-foreground">
              Fundada en 2010, NovaRoof Solutions LLC nació de la visión de un veterano de la industria del techado con más de 20 años de experiencia. Cansado de ver a propietarios de viviendas lidiar con mano de obra de mala calidad y falta de profesionalismo, nuestro fundador se propuso crear una empresa que pusiera la integridad, la calidad y la satisfacción del cliente por encima de todo.
            </p>
            <p className="text-muted-foreground">
              Comenzamos como un pequeño equipo dedicado y, gracias a nuestra reputación de excelencia y a las recomendaciones de nuestros clientes, hemos crecido hasta convertirnos en uno de los contratistas de techado más respetados de la región.
            </p>
            <h2 className="font-headline text-3xl font-semibold mt-8">Nuestra Misión</h2>
            <p className="text-muted-foreground">
              Nuestra misión es simple: proporcionar a cada cliente una solución de techado superior que proteja su inversión más importante, su hogar. Nos esforzamos por ofrecer una experiencia excepcional desde la consulta inicial hasta la limpieza final, garantizando tranquilidad y un resultado que supere las expectativas.
            </p>
          </div>
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            )}
          </div>
        </div>
      </section>
      
      <section className="bg-card">
        <div className="container py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nuestros Valores Fundamentales</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Los principios que guían cada proyecto que emprendemos.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
