"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    location: "Miami, FL",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-avatar-1'),
    comment: "El equipo de NovaRoof fue increíblemente profesional. Reemplazaron mi techo en tiempo récord y el resultado es impecable. ¡Totalmente recomendados!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    location: "Fort Lauderdale, FL",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-avatar-2'),
    comment: "Tenía una gotera persistente que otros no pudieron arreglar. NovaRoof la encontró y solucionó el problema de raíz. Muy agradecida por su honestidad y pericia.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    location: "Boca Raton, FL",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-avatar-3'),
    comment: "El proceso de presupuesto fue claro y detallado. No hubo sorpresas. La calidad del trabajo y la limpieza al finalizar fueron excepcionales.",
    rating: 5,
  },
];

const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
    ));
}

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Estamos orgullosos de la confianza que nuestros clientes depositan en nosotros.
            </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                      {testimonial.avatar && (
                        <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                          <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                       <div className="flex mb-2">
                            {renderStars(testimonial.rating)}
                        </div>
                      <p className="text-muted-foreground mb-4 italic flex-grow">"{testimonial.comment}"</p>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
