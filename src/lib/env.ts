// This file provides a safe way to access environment variables with fallbacks.

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(800) 555-0199';
export const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
