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
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const services = [
  "New Roof Installation",
  "Roof Repair",
  "Roof Inspection",
  "Roof Replacement",
  "Gutter Services",
  "Storm Damage",
  "Other",
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
        title: "Message Sent",
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
            Get a Free Quote
          </h2>
          <p className="text-muted-foreground">
            Ready to start your next roofing project? Complete the
            form and one of our specialists will contact you shortly to discuss your needs and provide a
            free, no-obligation quote.
          </p>
          <div className="space-y-4">
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">Send us your questions or requests.</p>
                    <a href="mailto:contact@novaroofsolutions.com" className="text-primary hover:underline">contact@novaroofsolutions.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">Call us for a direct consultation.</p>
                    <a href="tel:5623177925" className="text-primary hover:underline">562-317-7925</a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-muted-foreground">2105 Vista Oeste NW Suite E 3752 Albuquerque NM, 87120</p>
                </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={formAction} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
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
                        <FormLabel>Phone (Optional)</FormLabel>
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
                      <FormLabel>Service of Interest</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        name={field.name}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
