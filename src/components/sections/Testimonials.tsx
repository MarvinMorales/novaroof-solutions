import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">Lo Que Dicen Nuestros Clientes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos orgullosos de habernos ganado la confianza de propietarios y empresas en toda el área de Houston.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between">
              <CardContent className="p-6">
                 <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-current" />)}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <div className="p-6 pt-0">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
