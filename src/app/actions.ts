'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

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
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
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
      message: "Thank you for your message! We'll be in touch shortly.",
      status: 'success',
    };

  } catch (error) {
    console.error('Submission Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again later.';
    return {
      message: errorMessage,
      status: 'error',
    };
  }
}
