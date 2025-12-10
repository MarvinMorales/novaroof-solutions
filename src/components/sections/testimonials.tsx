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
    comment: "The NovaRoof team was incredibly professional. They replaced my roof in record time and the result is flawless. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    location: "Fort Lauderdale, FL",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-avatar-2'),
    comment: "I had a persistent leak that others couldn't fix. NovaRoof found and solved the root problem. Very grateful for their honesty and expertise.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    location: "Boca Raton, FL",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-avatar-3'),
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
    <section id="testimonials" className="w-full py-16 md:py-24 bg-card">
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
