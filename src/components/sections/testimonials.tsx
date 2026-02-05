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
import type { LocationData, ServiceData } from "@/lib/locations";
import { testimonialsData, type Testimonial } from "@/lib/testimonials-data";
import { useMemo } from "react";


const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
    ));
}

type TestimonialsProps = {
  location?: LocationData;
  service?: ServiceData;
}

const defaultTestimonials = testimonialsData.filter(t => !t.city && !t.serviceSlug).slice(0, 3);


export function Testimonials({ location, service }: TestimonialsProps) {

  const testimonialsToDisplay = useMemo(() => {
    let filtered: Testimonial[] = [];

    // 1. Exact match for city and service
    if (location && service) {
      filtered.push(...testimonialsData.filter(t => t.city === location.city && t.serviceSlug === service.slug));
    }

    // 2. Match for city, any service
    if (location) {
      filtered.push(...testimonialsData.filter(t => t.city === location.city));
    }

    // 3. Match for service, any city
    if (service) {
      filtered.push(...testimonialsData.filter(t => t.serviceSlug === service.slug));
    }

    // 4. Add generic testimonials to fill up
    filtered.push(...defaultTestimonials);

    // Get unique testimonials by ID and limit to 3
    const unique = Array.from(new Map(filtered.map(t => [t.id, t])).values());
    
    return unique.slice(0, 3);
  }, [location, service]);


  if (testimonialsToDisplay.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Homeowners Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We're proud to connect homeowners with top-rated professionals.
            </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: testimonialsToDisplay.length > 1,
          }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonialsToDisplay.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="flex flex-col h-full bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow space-y-4">
                        <div className="flex items-center justify-between">
                           <div className="flex text-yellow-400">
                                {renderStars(testimonial.rating)}
                            </div>
                           {testimonial.city && (
                            <div className="text-sm text-muted-foreground">{testimonial.city}, {testimonial.stateCode}</div>
                           )}
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
                            <div className="text-sm text-muted-foreground">Homeowner</div>
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
