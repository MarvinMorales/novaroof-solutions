"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { trackLead } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { useState } from "react";

const leadSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().refine((value) => /^\(\d{3}\) \d{3}-\d{4}$/.test(value), {
    message: "Please enter a valid 10-digit phone number.",
  }),
  zip: z.string().regex(/^\d{5}$/, { message: "Please enter a valid 5-digit ZIP code." }),
  problem: z.string().min(10, { message: "Please describe your project in at least 10 characters." }),
});

type LeadFormValues = z.infer<typeof leadSchema>;

const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const onlyNums = value.replace(/\D/g, '');
    if (onlyNums.length <= 3) {
      return `(${onlyNums}`;
    }
    if (onlyNums.length <= 6) {
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
    }
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};


export function Contact() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      zip: "",
      problem: "",
    },
  });

  async function onSubmit(data: LeadFormValues) {
    setIsSubmitting(true);
    try {
      const leadData = {
        name: data.name,
        phone: data.phone,
        zip: data.zip,
        service: "Not specified in form",
        message: data.problem,
        email: `${data.phone.replace(/\D/g, '')}@autogen.email`,
      };

      await trackLead(leadData);
      router.push('/thank-you');

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please check your connection and try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  }


  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container">
        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Get Your Free Roofing Quote Today</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Fill out the form below and we'll connect you with a licensed local roofer in minutes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(123) 456-7890"
                              {...field}
                              onChange={(e) => {
                                  const formatted = formatPhoneNumber(e.target.value);
                                  field.onChange(formatted);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="12345" {...field} maxLength={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                 </div>
                <FormField
                  control={form.control}
                  name="problem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe Your Roofing Problem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="E.g., 'I have a leak in my living room ceiling' or 'I need a quote for a full roof replacement.'"
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Connecting..." : "Connect Me With a Pro"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
