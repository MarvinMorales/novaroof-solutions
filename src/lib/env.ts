// This file provides a safe way to access environment variables with fallbacks.
// Create a .env.local file in the root of your project and add:
// NEXT_PUBLIC_PHONE_NUMBER="(123) 456-7890"

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '(800) 555-0100';
export const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
