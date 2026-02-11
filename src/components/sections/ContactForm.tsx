'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactState } from '@/app/actions';
import { services } from '@/lib/data';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactState = { message: '', status: 'idle' };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
    } else if (state.status === 'error') {
       toast({
        title: "Error",
        description: state.message,
        variant: 'destructive'
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl">Request a Free Estimate</CardTitle>
            <CardDescription className="text-lg">
              Prefer to write? Fill out the form below and one of our roofing specialists will get back to you promptly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
              </div>

               <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
               </div>

              <div className="space-y-2">
                <Label htmlFor="service">What service do you need?</Label>
                <Select name="service" required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(s => <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>)}
                    <SelectItem value="Other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
                 {state.errors?.service && <p className="text-sm text-destructive">{state.errors.service[0]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." required className="min-h-[120px]" />
                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
              </div>
              
              <SubmitButton />

            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
