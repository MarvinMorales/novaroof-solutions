import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { galleryImages } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function Gallery() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the quality and craftsmanship we bring to every project.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-16"
        >
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 aspect-video relative">
                       <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={image.hint}
                       />
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
