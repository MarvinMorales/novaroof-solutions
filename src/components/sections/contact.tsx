
"use client";

import { useRouter, usePathname } from "next/navigation";
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
import { useTranslation } from "@/hooks/use-translation";
import { getLocationBySlug, getServiceBySlug } from "@/lib/locations";

const leadSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().refine((value) => /^\(\d{3}\) \d{3}-\d{4}$/.test(value), {
    message: "Please enter a valid 10-digit phone number.",
  }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  city: z.string().min(2, { message: "Please enter a valid city." }),
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
  const pathname = usePathname();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      problem: "",
    },
  });

  async function onSubmit(data: LeadFormValues) {
    setIsSubmitting(true);
    try {
      let serviceValue = "Not specified in form";
      const pathSegments = pathname.split('/').filter(Boolean);

      if (pathname === '/') {
          serviceValue = "from landing page";
      } else if (pathSegments.length === 1) {
          const location = getLocationBySlug(pathSegments[0]);
          if (location) {
              serviceValue = "from city-state";
          }
      } else if (pathSegments.length === 2) {
          const service = getServiceBySlug(pathSegments[1]);
          if (service) {
              serviceValue = service.slug;
          }
      }

      const leadData = {
        name: data.name,
        phone: data.phone,
        address: data.address,
        city: data.city,
        zip: data.zip,
        service: serviceValue,
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
    <section id="contact" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="container">
        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">{t('Contact.title')}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              {t('Contact.description')}
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
                      <FormLabel>{t('Contact.nameLabel')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('Contact.namePlaceholder')} {...field} />
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
                      <FormLabel>{t('Contact.phoneLabel')}</FormLabel>
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Contact.addressLabel')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('Contact.addressPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('Contact.cityLabel')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('Contact.cityPlaceholder')} {...field} />
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
                          <FormLabel>{t('Contact.zipLabel')}</FormLabel>
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
                      <FormLabel>{t('Contact.problemLabel')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('Contact.problemPlaceholder')}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? t('Contact.submitting') : t('Contact.submitButton')}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
