'use server';

import { z } from 'zod';
import { i18n } from '@/lib/data';

type Language = 'en' | 'es';

const getContactSchema = (lang: Language) => {
  const t = i18n[lang].contactForm.validation;
  return z.object({
    name: z.string().min(2, t.name),
    email: z.string().email(t.email),
    phone: z.string().optional(),
    service: z.string({ required_error: t.service }),
    message: z.string().min(10, t.message),
    lang: z.enum(['en', 'es']),
  });
}


export type ContactState = {
  message: string;
  status: 'idle' | 'success' | 'error';
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    service?: string[];
    message?: string[];
  }
}

const API_URL = 'https://consulting-api.vercel.app/v1/clients/update-client-body?client_id=0590bc6a-8d60-4af7-9e7e-78d72919153b';

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const lang = (formData.get('lang') || 'es') as Language;
  const contactSchema = getContactSchema(lang);
  const t = i18n[lang].contactForm;


  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
    lang: formData.get('lang'),
  });

  if (!validatedFields.success) {
    return {
      message: t.validation.formError,
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const leadData = {
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    phone: validatedFields.data.phone || '',
    service: validatedFields.data.service,
    message: validatedFields.data.message,
    timestamp: new Date().toISOString(),
  };

  const body = {
    visits: 0,
    mailingLeads: [leadData],
    calls: 0,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response' }));
      console.error('API Error:', errorData);
      throw new Error(`API request failed with status ${response.status}: ${errorData.message || 'Unknown error'}`);
    }
    
    return {
      message: t.validation.success,
      status: 'success',
    };

  } catch (error) {
    console.error('Submission Error:', error);
    const errorMessage = error instanceof Error ? error.message : t.validation.unexpectedError;
    return {
      message: errorMessage,
      status: 'error',
    };
  }
}
