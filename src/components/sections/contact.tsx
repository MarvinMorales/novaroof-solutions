"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce una dirección de correo electrónico válida."),
  phone: z.string().optional(),
  service: z.string().min(1, "Por favor, selecciona un servicio."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const services = [
  "Instalación de Techo Nuevo",
  "Reparación de Techo",
  "Inspección de Techo",
  "Reemplazo de Techo",
  "Servicio de Canalones",
  "Daños por Tormenta",
  "Otro",
];

export function Contact() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: "", status: "idle" };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Mensaje Enviado",
        description: state.message,
      });
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Obtenga un Presupuesto Gratuito
          </h2>
          <p className="text-muted-foreground">
            ¿Listo para comenzar su próximo proyecto de techado? Complete el
            formulario y uno de nuestros especialistas se pondrá en contacto con
            usted a la brevedad para discutir sus necesidades y ofrecerle un
            presupuesto gratuito y sin compromiso.
          </p>
          <div className="space-y-4">
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                    <p className="text-muted-foreground">Envíenos sus preguntas o solicitudes.</p>
                    <a href="mailto:contacto@novaroof.com" className="text-primary hover:underline">contacto@novaroof.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Teléfono</h3>
                    <p className="text-muted-foreground">Llámenos para una consulta directa.</p>
                    <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Oficina</h3>
                    <p className="text-muted-foreground">123 Calle Principal, Ciudad, Estado, 12345</p>
                </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={formAction} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="su@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(123) 456-7890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio de Interés</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        name={field.name}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntenos sobre su proyecto..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
