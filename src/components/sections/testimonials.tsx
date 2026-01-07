"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { User, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    location: "Miami, FL",
    comment: "The NovaRoof team was incredibly professional. They replaced my roof in record time and the result is flawless. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    location: "Fort Lauderdale, FL",
    comment: "I had a persistent leak that others couldn't fix. NovaRoof found and solved the root problem. Very grateful for their honesty and expertise.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    location: "Boca Raton, FL",
    comment: "The quoting process was clear and detailed. There were no surprises. The quality of the work and the cleanup afterward were exceptional.",
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
    <section id="testimonials" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We are proud of the trust our clients place in us.
            </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="flex flex-col h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow space-y-4">
                        <div className="flex items-center gap-2">
                           <div className="flex text-yellow-400">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                        <div className="relative">
                            <Quote className="absolute -top-2 -left-4 h-8 w-8 text-muted-foreground/20" />
                            <p className="text-muted-foreground italic z-10 relative">"{testimonial.comment}"</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-primary">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                        </div>
                      </div>
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
