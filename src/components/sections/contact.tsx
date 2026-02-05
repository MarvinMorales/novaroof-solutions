"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitLeadForm, type LeadFormState } from "@/app/actions";
import { trackLead, trackCall } from "@/lib/api-client";
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
import { Mail, Phone } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type LeadFormValues = z.infer<typeof leadSchema>;

const services = [
  "Emergency Roof Repair",
  "Roof Repair",
  "Roof Replacement",
  "Storm Damage Repair",
  "Roof Leak Repair",
  "Roof Inspection",
  "Gutter Services",
  "Other",
];

export function Contact() {
  const { toast } = useToast();
  const initialState: LeadFormState = { message: "", status: "idle" };
  const [state, formAction] = useFormState(submitLeadForm, initialState);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
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
        title: "Request Sent!",
        description: state.message,
      });
      // Call tracking API on successful submission
      if (state.data) {
        trackLead(state.data);
      }
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  const handleCallClick = () => {
    trackCall();
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Get Your Free Roofing Quote
          </h2>
          <p className="text-muted-foreground">
            Ready to start your roofing project? Fill out the form, and we'll connect you with a top-rated, licensed, and insured roofer in your area for a free, no-obligation inspection and quote.
          </p>
          <div className="space-y-4">
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">For questions about our service.</p>
                    <a href="mailto:contact@usaroofpros.com" className="text-primary hover:underline">contact@usaroofpros.com</a>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground">Speak directly with our team.</p>
                    <a href="tel:888-555-7663" onClick={handleCallClick} className="text-primary hover:underline">888-555-ROOF</a>
                </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Find a Local Roofer</CardTitle>
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
                      <FormLabel>Service Needed</FormLabel>
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
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your roofing project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg">
                  Connect Me With a Pro
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
