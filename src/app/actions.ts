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

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return a success message.
  console.log('Form data submitted:', validatedFields.data);

  return {
    message: "Thank you for your message! We'll be in touch shortly.",
    status: 'success',
  };
}
