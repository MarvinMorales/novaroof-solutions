'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactState } from '@/app/actions';
import { i18n, services } from '@/lib/data';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type ContactFormProps = {
  lang: 'en' | 'es';
};

function SubmitButton({ lang }: { lang: 'en' | 'es' }) {
  const { pending } = useFormStatus();
  const t = i18n[lang].contactForm;
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? t.submitting : t.submit}
    </Button>
  );
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = i18n[lang].contactForm;
  const servicesT = i18n[lang].services;

  const initialState: ContactState = { message: '', status: 'idle' };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: t.toast.successTitle,
        description: state.message,
      });
    } else if (state.status === 'error') {
       toast({
        title: t.toast.errorTitle,
        description: state.message,
        variant: 'destructive'
      });
    }
  }, [state, toast, t.toast]);

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl">{t.title}</CardTitle>
            <CardDescription className="text-lg">
              {t.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="lang" value={lang} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.nameLabel}</Label>
                  <Input id="name" name="name" placeholder={t.namePlaceholder} required />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.emailLabel}</Label>
                  <Input id="email" name="email" type="email" placeholder={t.emailPlaceholder} required />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
              </div>

               <div className="space-y-2">
                  <Label htmlFor="phone">{t.phoneLabel}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
               </div>

              <div className="space-y-2">
                <Label htmlFor="service">{t.serviceLabel}</Label>
                <Select name="service" required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder={t.servicePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(s => {
                      const serviceT = servicesT.find(st => st.slug === s.slug);
                      return <SelectItem key={s.slug} value={serviceT?.title || s.slug}>{serviceT?.title || s.slug}</SelectItem>
                    })}
                    <SelectItem value="Other">{t.otherOption}</SelectItem>
                  </SelectContent>
                </Select>
                 {state.errors?.service && <p className="text-sm text-destructive">{state.errors.service[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.messageLabel}</Label>
                <Textarea id="message" name="message" placeholder={t.messagePlaceholder} required className="min-h-[120px]" />
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              
              <SubmitButton lang={lang} />

            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
